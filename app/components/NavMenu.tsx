'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const NavMenu: React.FC = () => {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
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
        </>
      )}
      <Link href="/apply">Apply as Game Marketer</Link>
    </div>
  )
}

export default NavMenu
