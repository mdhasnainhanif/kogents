import { Metadata } from "next";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
    title: 'Refund Policy | Kogents AI',
    description:
        'Read Kogents refund policy for subscription services. Learn about refund conditions, the request process, and timelines for eligible claims.',
    keywords: ['Kogents AI', 'About Kogents', 'AI for business', 'Our Team', 'Company Values', 'Business Intelligence'],

    alternates: {
        canonical: 'https://kogents.ai/refund-policy/',
        languages: {
            'en-US': 'https://kogents.ai/refund-policy/',
        },
    },

    openGraph: {
        title: 'Refund Policy | Kogents AI',
        description:
            'Read Kogents refund policy for subscription services. Learn about refund conditions, the request process, and timelines for eligible claims.',
        url: 'https://kogents.ai/refund-policy/',
        type: 'website',
        images: [
            {
                url: 'https://www.kogents.ai/assets/img/logo-new.svg',
                width: 1200,
                height: 630,
                alt: 'Team Kogents AI working together',
            },
        ],
        siteName: 'Kogents AI',
        locale: 'en_US',
    },
}

const page = () => {
    const breadcrumbItems = [
        { label: 'Refuned Policy', active: true }
    ];

    return (
        <>
            <div className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')] relative contactBanner">
                <div className="container px-5 mx-auto xl:px-0">
                    <span className="buttonAnimation purple width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
                        Refund Policy
                    </span>
                    <h1 className="text-center text-light headingSize mb-2">
                        Refund Policy
                    </h1>
                    <p>At Kogents.ai, we are committed to delivering high-quality AI solutions and services. By purchasing our services, you agree to the following refund policy.</p>
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </div>

            <section className="sectionPadding text-white">
                <div className="container px-5 mx-auto xl:px-0">
                    <div className="row intro w-100">
                        <div className="col-md-12">
                            <div className="row intro mb-0">
                                <div className="col-12">
                                    <h3 className="h3 my-3">1. Scope of Policy</h3>
                                    <p className="mb-2">
                                        This Refund Policies applies to all subscription-based services provided by Kogents.ai, including but not limited to monthly and annual subscription plans.
                                    </p>

                                    <h3 className="h3 my-3">2. No Refunds Except for Exceptional Circumstances</h3>
                                    <p className="mb-2">
                                        Kogents.ai operates on a no-refund policy unless the service fails to function as advertised.
                                        If you experience an issue, you must first contact our support team at <a href="mailto:info@kogents.ai">info@kogents.ai</a>, and we will make every effort to resolve the issue.
                                        A refund will only be granted if we are unable to resolve the issue and at our sole discretion.
                                    </p>

                                    <h3 className="h3 my-3">3. Refund Conditions</h3>
                                    <p className="mb-2">Refunds will only be granted if:</p>
                                    <ul className="privacyPoints">
                                        <li>The service does not function as advertised, and</li>
                                        <li>You have provided our support team with a reasonable opportunity to investigate and resolve the issue.</li>
                                    </ul>
                                    <p className="mb-2">
                                        Refund requests must be submitted within 30 days of the original purchase date. Requests made after this period will not be considered.
                                    </p>

                                    <h3 className="h3 my-3">4. How to Request a Refund</h3>
                                    <p className="mb-2">
                                        To request a refund, please email us at <a href="mailto:info@kogents.ai">info@kogents.ai</a> with the subject line “Refund Request.” Include a detailed explanation of the issue you are experiencing, along with any relevant screenshots or documentation.
                                        We must be given a reasonable opportunity to investigate and resolve the issue before issuing any refund.
                                    </p>

                                    <h3 className="h3 my-3">5. Refund Process and Timeline</h3>
                                    <p className="mb-2">
                                        When approved, refunds will be issued to the original payment method used at the time of purchase. Refunds may take 5–10 business days to appear in your account, depending on your payment provider and payment processor.
                                    </p>

                                    <h3 className="h3 my-3">6. No Pro-Rated Refunds</h3>
                                    <p className="mb-2">
                                        We do not offer pro-rated refunds for unused time in a subscription period. For example, if you cancel your subscription in the middle of a billing cycle, you will retain access to the service until the end of that cycle, but no partial refunds will be issued.
                                    </p>

                                    <h3 className="h3 my-3">7. Chargebacks</h3>
                                    <p className="mb-2">
                                        Customers must contact our support team before initiating a chargeback with their payment provider. Failure to do so may result in forfeiture of any potential refund claim.
                                    </p>

                                    <h3 className="h3 my-3">8. Changes to This Policy</h3>
                                    <p className="mb-2">
                                        Kogents.ai reserves the right to modify this Refund Policy at any time. Changes will be posted on this page, and your continued use of our services constitutes acceptance of the revised policy.
                                    </p>

                                    <h3 className="h3 my-3">9. Governing Law & Jurisdiction</h3>
                                    <p className="mb-2">
                                        This Refund Policy shall be governed by and construed in accordance with the laws of the State of Delaware, USA.
                                        Any disputes arising under this policy shall be subject to the exclusive jurisdiction of the courts located in New Castle County, Delaware.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default page;
