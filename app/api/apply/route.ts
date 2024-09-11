import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import prisma from '@/app/lib/prisma'
import { authOptions } from '../auth/auth-options'
import { sendApplicationEmail } from '@/app/lib/sendEmail';

// Add this type at the top of the file
type SessionUser = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  // Cast the user to the new type
  const user = session.user as SessionUser;

  const { companyName, website, reason } = await request.json()

  try {
    const application = await prisma.user.update({
      where: { id: user.id },
      data: {
        role: 'GAME_MARKETER',
        gameMarketerApplication: {
          create: {
            companyName,
            website,
            reason,
            status: 'PENDING',
          },
        },
      },
      include: { gameMarketerApplication: true }, // Include the gameMarketerApplication
    });

    // Send email notification
    await sendApplicationEmail(application.gameMarketerApplication);

    return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json({ error: 'Error submitting application' }, { status: 500 });
  }
}
