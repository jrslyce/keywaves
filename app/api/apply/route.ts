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
  const { companyName, website, reason, linkedin } = await request.json();

  try {
    const application = await prisma.gameMarketerApplication.create({
      data: {
        companyName,
        website,
        reason,
        linkedin, // Include the LinkedIn field
        status: 'PENDING',
        userId: undefined, // Use undefined instead of null
      },
    });

    await sendApplicationEmail(application);

    return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error submitting application:', error);
    return NextResponse.json({ error: 'Error submitting application', details: error.message }, { status: 500 });
  }
}
