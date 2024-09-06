import React from 'react'
import Link from 'next/link'
import NavMenu from './NavMenu'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">KeyWaves</Link>
          <NavMenu />
        </nav>
      </header>
      <main className="container mx-auto mt-8 px-4">{children}</main>
    </div>
  )
}

export default Layout