'use client'

import { useState } from 'react'
import { Application } from '../types'

export default function ApplicationItem({ application }: { application: Application }) {
  const [status, setStatus] = useState(application.status)

  const handleStatusChange = async (newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/applications/${application.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        setStatus(newStatus)
      } else {
        console.error('Failed to update application status')
      }
    } catch (error) {
      console.error('Error updating application status:', error)
    }
  }

  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-semibold">{application.user.name || 'Unknown'}</h2>
      <p>Company: {application.companyName}</p>
      <p>Website: {application.website}</p>
      <p>Reason: {application.reason}</p>
      <p>Status: {status}</p>
      {status === 'PENDING' && (
        <div className="mt-2">
          <button
            onClick={() => handleStatusChange('APPROVED')}
            className="bg-green-500 text-white px-2 py-1 rounded mr-2"
          >
            Approve
          </button>
          <button
            onClick={() => handleStatusChange('REJECTED')}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  )
}
