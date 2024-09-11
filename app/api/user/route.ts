import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import prisma from '@/app/lib/prisma'
import { authOptions } from '../auth/auth-options'

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('Error fetching user data:', error)
    return NextResponse.json({ error: 'Error fetching user data' }, { status: 500 })
  }
}
