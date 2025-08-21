import Image from "next/image";
import React from "react";

const AboutUsBanner = () => {
    return (
        <div className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')] relative contactBanner">
            <div className="container px-5 mx-auto xl:px-0">
                <span
                    className="buttonAnimation purple width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo mx-auto"
                >
                    About Us
                </span>
                <h1
                 className="text-center text-light headingSize">
                    Company Overview<span className="inline-block lg:block"> </span>
                </h1>
                <p
                    className="maxWidth39 mx-auto mt-6 text-base text-center md:text-xl text-b-100 mb-1"
                >
                    At Kogents AI, we build intelligent AI agents that integrate
                    seamlessly into business operations—empowering customer-facing teams
                    to deliver faster, more accurate, and more consistent service at
                    scale.
                </p>

                <p
                    className="maxWidth39 mx-auto  text-base text-center md:text-xl text-b-100"
                >
                    Our mission is to help growth-stage and enterprise teams automate
                    repetitive workflows, reduce operational bottlenecks, and increase
                    customer satisfaction without increasing headcount.
                </p>

                <div className="hero-brand overflow-hidden whitespace-nowrap relative w-full lg:max-w-[1000px] mx-auto aboutBrandSlide">
                    <div className="inline-flex logo_items animate-slides">
                        <Image src="/assets/img/brand/1.svg" alt="brand" className="mx-4" height={100} width={200} />
                        <Image src="/assets/img/brand/2.svg" alt="brand" className="mx-4" height={100} width={200} />
                        <Image src="/assets/img/brand/3.svg" alt="brand" className="mx-4" height={100} width={200} />
                        <Image src="/assets/img/brand/4.svg" alt="brand" className="mx-4" height={100} width={200} />
                        <Image src="/assets/img/brand/5.svg" alt="brand" className="mx-4" height={100} width={200} />
                    </div>
                    <div className="inline-flex lg:ml-20 logo_items animate-slides">
                        <Image src="/assets/img/brand/1.svg" alt="brand" className="mx-4" height={100} width={200} />
                        <Image src="/assets/img/brand/2.svg" alt="brand" className="mx-4" height={100} width={200} />
                        <Image src="/assets/img/brand/3.svg" alt="brand" className="mx-4" height={100} width={200} />
                        <Image src="/assets/img/brand/4.svg" alt="brand" className="mx-4" height={100} width={200} />
                        <Image src="/assets/img/brand/5.svg" alt="brand" className="mx-4" height={100} width={200} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsBanner;
