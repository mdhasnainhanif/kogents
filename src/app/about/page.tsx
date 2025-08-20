"use client"
import AboutUsBanner from '@/components/about/AboutUsBanner'
import AppSection from '@/components/about/AppSection'
import BenefitsSection from '@/components/about/BenefitsSection'
import BlogSection from '@/components/about/BlogSection'
import CorePrinciples from '@/components/about/CorePrinciples'
import CorporateValues from '@/components/about/CorporateValues'
import FAQSection from '@/components/about/FAQSection'
import OurTeam from '@/components/about/OurTeam'
import ValueToBusinesses from '@/components/about/ValueToBusinesses'
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