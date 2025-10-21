// app/not-found.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to custom 404.htm URL
    router.replace('/404.htm')
  }, [router])

  return null
}
