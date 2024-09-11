'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '../components/Layout'

export default function ApplyAsGameMarketer() {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    reason: '',
    linkedin: '', // New field for LinkedIn URL
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Application submitted successfully!')
        router.push('/dashboard')
      } else {
        const data = await response.json()
        alert(`Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('An error occurred while submitting your application.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Apply as Game Marketer</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="companyName" className="block mb-1">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="website" className="block mb-1">Website</label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="reason" className="block mb-1">Why do you want to become a game marketer?</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            rows={4}
          ></textarea>
        </div>
        <div>
          <label htmlFor="linkedin" className="block mb-1">LinkedIn Profile URL</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </Layout>
  )
}
