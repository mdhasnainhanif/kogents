"use client"
import AboutUsBanner from '@/components/about/ssr/AboutUsBanner'
import AppSection from '@/components/about/ssr/AppSection'
import BenefitsSection from '@/components/about/csr/BenefitsSection'
import BlogSection from '@/components/about/ssr/BlogSection'
import CorePrinciples from '@/components/about/ssr/CorePrinciples'
import CorporateValues from '@/components/about/ssr/CorporateValues'
import FAQSection from '@/components/about/csr/FAQSection'
import OurTeam from '@/components/about/ssr/OurTeam'
import ValueToBusinesses from '@/components/about/ssr/ValueToBusinesses'
import React from 'react'

const page = () => {
    return (
        <>
            <AboutUsBanner />
            <BenefitsSection/>
            <CorporateValues/>
            <ValueToBusinesses/>
            <CorePrinciples/>
            <OurTeam/>
            <BlogSection/>
            <AppSection/>
            <FAQSection/>
        </>
    )
}

export default page