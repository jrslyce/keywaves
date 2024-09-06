import { notFound } from 'next/navigation'
import Layout from '../../components/Layout'
import prisma from '../../lib/prisma'
import Image from 'next/image'

async function getCampaign(id: string) {
  const campaign = await prisma.campaign.findUnique({
    where: { id },
    include: {
      marketer: {
        select: { name: true, email: true }
      }
    }
  })
  
  if (!campaign) {
    notFound()
  }
  
  return campaign
}

export default async function CampaignDetail({ params }: { params: { id: string } }) {
  const campaign = await getCampaign(params.id)

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{campaign.title}</h1>
        <p className="text-gray-600 mb-4">By {campaign.marketer.name}</p>
        
        {campaign.logoUrl && (
          <Image src={campaign.logoUrl} alt={`${campaign.title} logo`} width={500} height={300} className="mb-4 max-w-md mx-auto" />
        )}
        
        {campaign.videoUrl && (
          <div className="mb-4">
            <iframe 
              width="100%" 
              height="315" 
              src={campaign.videoUrl} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        )}
        
        <div className="prose max-w-none mb-6">
          <h2 className="text-2xl font-semibold mb-2">About the Game</h2>
          <div dangerouslySetInnerHTML={{ __html: campaign.description }}></div>
        </div>
        
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors">
          Apply for Key
        </button>
      </div>
    </Layout>
  )
}
