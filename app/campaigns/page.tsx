import Link from 'next/link'
import Layout from '../components/Layout'
import prisma from '../lib/prisma'

async function getCampaigns() {
  const campaigns = await prisma.campaign.findMany({
    include: {
      marketer: {
        select: { name: true }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  return campaigns
}

export default async function Campaigns() {
  const campaigns = await getCampaigns()

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Available Campaigns</h1>
      <div className="grid gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="border rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">{campaign.title}</h2>
            <p className="text-gray-600 mb-4">By {campaign.marketer.name}</p>
            <p className="mb-4">{campaign.description.substring(0, 150)}...</p>
            <div className="flex justify-between items-center">
              <Link 
                href={`/campaigns/${campaign.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
              <span className="text-sm text-gray-500">
                Created: {new Date(campaign.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
