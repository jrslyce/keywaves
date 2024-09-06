import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import prisma from '@/app/lib/prisma'
import { authOptions } from '../auth/[...nextauth]/route'

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const { companyName, website, reason } = await request.json()

  try {
    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        role: 'GAME_MARKETER',
        gameMarketerApplication: {
          create: {
            companyName,
            website,
            reason,
            status: 'PENDING'
          }
        }
      },
    })

    return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error submitting application:', error)
    return NextResponse.json({ error: 'Error submitting application' }, { status: 500 })
  }
}
