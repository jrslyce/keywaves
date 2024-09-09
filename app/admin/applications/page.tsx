import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import prisma from '@/app/lib/prisma'
import { authOptions } from '@/app/api/auth/auth-options'
import Layout from '@/app/components/Layout'
import ApplicationItem from '@/app/components/ApplicationItem'
import { Application } from '@/app/types' // Add this import

export default async function AdminApplications() {
  const session = await getServerSession(authOptions)

  if (!session?.user || (session.user as any).role !== 'ADMIN') {
    redirect('/')
  }

  const applications = await prisma.gameMarketerApplication.findMany({
    where: { status: 'PENDING' },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Pending Game Marketer Applications</h1>
      {applications.length === 0 ? (
        <p>No pending applications.</p>
      ) : (
        <div className="space-y-4">
          {applications.map((application) => (
            <ApplicationItem key={application.id} application={application} />
          ))}
        </div>
      )}
    </Layout>
  )
}
