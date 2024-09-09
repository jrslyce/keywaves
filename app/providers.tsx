'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </SessionProvider>
  )
}
