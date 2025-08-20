import AllChannelsCard from '@/components/all-channels/AllChannelsCard'
import AppSection from '@/components/all-channels/AppSection'
import Banner from '@/components/all-channels/Banner'
import React from 'react'

const page = () => {
  return (
    <>
        <Banner/>
        <AllChannelsCard/>
        <AppSection/>
    </>
  )
}

export default page