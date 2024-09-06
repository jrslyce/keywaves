'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">KeyWaves</Link>
          <div className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/campaigns">Campaigns</Link>
            {session ? (
              <>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/api/auth/signout">Sign out</Link>
              </>
            ) : (
              <>
                <Link href="/api/auth/signin">Sign in</Link>
                <Link href="/apply">Apply as Game Marketer</Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto mt-8 px-4">{children}</main>
    </div>
  )
}

export default Layout
