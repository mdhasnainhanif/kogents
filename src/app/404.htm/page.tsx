
// app/404.htm/page.tsx
'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import NewFooter from '@/components/NewFooter'

export default function Custom404() {
  return (
    <>
    <Header />
    <div className="pt-5 pt-3 flex flex-col items-center justify-center min-h-screen text-center bg-b-900 text-white p-6">
      <h1 className="mb-4 tracking-[-0.02em] text-center text-3xl md:text-5xl font-semibold headingSize">404 - Page Not Found</h1>
      <p className="mb-5 paraColor text-base text-center md:text-xl text-w-100">
        Sorry, the page you're looking for doesn't exist...</p>
      
      <Link
        href="/"
        className="buttonAnimation2 flex justify-center pink items-center gap-2 mb-8 lg:mb-14 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900"
        aria-label="KOGENTS - Go to homepage"
        >Go Back To Home</Link>
    </div>
    <NewFooter/>
    </>
  )
}