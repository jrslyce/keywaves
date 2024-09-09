'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '../components/Layout'

type UserData = {
  id: string
  name: string
  email: string
  role: string
  twitchId: string  // Add this line
  applications: any[]
  campaigns: any[]
  gameMarketerApplication: any
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/user')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setUserData(data))
        .catch(error => {
          console.error('Error fetching user data:', error);
          // Handle the error state here, e.g., set an error message in the state
        });
    }
  }, [status])

  if (status === 'loading' || !userData) {
    return <Layout><div>Loading...</div></Layout>
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">User Information</h2>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        <p>Role: {userData.role}</p>
        <p>Twitch ID: {userData.twitchId}</p>
      </div>

      {userData.role === 'CONTENT_CREATOR' && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your Applications</h2>
          {userData.applications.length > 0 ? (
            <ul>
              {userData.applications.map(app => (
                <li key={app.id}>{app.campaign.title} - Status: {app.status}</li>
              ))}
            </ul>
          ) : (
            <p>No applications yet.</p>
          )}
        </div>
      )}

      {userData.role === 'GAME_MARKETER' && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your Campaigns</h2>
          {userData.campaigns.length > 0 ? (
            <ul>
              {userData.campaigns.map(campaign => (
                <li key={campaign.id}>{campaign.title}</li>
              ))}
            </ul>
          ) : (
            <p>No campaigns yet.</p>
          )}
        </div>
      )}

      {userData.role === 'CONTENT_CREATOR' && !userData.gameMarketerApplication && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Become a Game Marketer</h2>
          <p>Interested in creating campaigns? Apply to become a game marketer!</p>
          <a href="/apply" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block mt-2">Apply Now</a>
        </div>
      )}
    </Layout>
  )
}
