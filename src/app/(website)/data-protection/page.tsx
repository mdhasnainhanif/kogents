import { Metadata } from "next";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
    title: 'Data Protection Agreement | Kogents AI',
    description:
        'Learn how Kogents AI protects customer data with GDPR, CCPA, and global compliance through secure processing, storage, and safeguards.',
    keywords: ['Kogents AI', 'About Kogents', 'AI for business', 'Our Team', 'Company Values', 'Business Intelligence'],

    alternates: {
        canonical: 'https://kogents.ai/data-protection/',
        languages: {
            'en-US': 'https://kogents.ai/data-protection/',
        },
    },

    openGraph: {
        title: 'Data Protection Agreement | Kogents AI',
        description:
            'Learn how Kogents AI protects customer data with GDPR, CCPA, and global compliance through secure processing, storage, and safeguards.',
        url: 'https://kogents.ai/data-protection/',
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
        { label: 'Data Protection', active: true }
    ];

    return (
        <>
            <div className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')] relative contactBanner">
                <div className="container px-5 mx-auto xl:px-0">
                    <span className="buttonAnimation purple width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
                        Data Protection
                    </span>
                    <h1 className="text-center text-light headingSize">
                        Data Processing Agreement (DPA)
                    </h1>
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </div>

            <section className="sectionPadding text-white">
                <div className="container px-5 mx-auto xl:px-0">
                    <div className="row intro w-100">
                        <div className="col-md-12">
                            <div className="row intro mb-0">
                                <div className="col-12">
                                    <p className="mb-2">
                                        Last Updated: September 2025
                                    </p>
                                    <p className="mb-2">
                                        This Data Processing Agreement (“DPA”) forms part of, and is subject to the provisions of Kogents AI Terms and Conditions (the “Agreement”). All capitalized terms not defined in this DPA shall have the meanings set forth in the Agreement.
                                    </p>
                                    <h3 className="h3 my-3">1. Definitions</h3>
                                    <p className="mb-2"><strong>Affiliate:</strong> An entity that directly or indirectly controls, is controlled by, or is under common control with another entity.</p>
                                    <p className="mb-2"><strong>Agreement:</strong> Kogents AI Terms and Conditions, which govern the provision of services to Customer, as may be updated by Kogents AI from time to time.</p>
                                    <p className="mb-2"><strong>Control:</strong> Ownership, voting, or similar interest representing fifty percent (50%) or more of the total interests of the entity in question.</p>
                                    <p className="mb-2"><strong>Customer Data:</strong> Any Personal Data that Kogents AI processes on behalf of Customer as a Data Processor in providing services under the Agreement.</p>
                                    <p className="mb-2"><strong>Data Protection Laws:</strong> All applicable data protection and privacy laws, including GDPR, CCPA/CPRA, DPDPA (Delaware), and any other relevant regulations.</p>
                                    <p className="mb-2"><strong>Data Controller:</strong> The entity that determines the purposes and means of the processing of Personal Data.</p>
                                    <p className="mb-2"><strong>Data Processor:</strong> The entity that processes Personal Data on behalf of the Data Controller.</p>
                                    <p className="mb-2"><strong>EEA:</strong> European Economic Area, including the UK and Switzerland.</p>
                                    <p className="mb-2"><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</p>
                                    <p className="mb-2"><strong>Processing:</strong> Any operation performed on Personal Data (collection, storage, use, disclosure, deletion, etc.).</p>
                                    <p className="mb-2"><strong>Security Incident:</strong> Any unauthorized or unlawful breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Customer Data.</p>
                                    <p className="mb-2"><strong>Services:</strong> Any product or service provided by Kogents AI pursuant to the Agreement.</p>
                                    <p className="mb-2"><strong>Sub-Processor:</strong> Any third-party processor engaged by Kogents AI or its Affiliates to assist with providing the Services.</p>
                                    <h3 className="h3 my-3">2. Relationship with the Agreement</h3>
                                    <p className="mb-2">2.1 This DPA replaces any prior data processing agreements entered into between the parties.</p>
                                    <p className="mb-2">2.2 Except as expressly modified by this DPA, the Agreement remains in full force and effect. In case of conflict, this DPA shall control with respect to data protection obligations.</p>
                                    <p className="mb-2">2.3 Any claims under this DPA are subject to the limitations of liability set forth in the Agreement.</p>
                                    <p className="mb-2">2.4 This DPA is governed by the governing law and jurisdiction specified in the Agreement unless otherwise required by Data Protection Laws.</p>
                                    <h3 className="h3 my-3">3. Scope and Applicability</h3>
                                    <p className="mb-2">This DPA applies only where Kogents AI processes Customer Data originating from the EEA or otherwise subject to data protection laws on behalf of the Customer.</p>
                                    <h3 className="he my-3">4. Roles and Scope of Processing</h3>
                                    <p className="mb-2">4.1 Role of the Parties – Customer is the Data Controller. Kogents AI acts as Data Processor and will process Customer Data only on documented instructions from Customer.</p>
                                    <p className="mb-2">4.2 Customer Obligations – Customer agrees it has provided notice and obtained all necessary consents under applicable law for Kogents AI to process Customer Data.</p>
                                    <p className="mb-2">4.3 Kogents AI Processing of Customer Data – Kogents AI shall process Customer Data solely for providing the Services, fulfilling contractual obligations, and complying with law.</p>
                                    <p className="mb-2">
                                        4.4 Details of Data Processing:
                                        <ul className="privacyPoints">
                                            <li>Subject matter: Customer Data processed in connection with the Services.</li>
                                            <li>Duration: Until termination or expiration of the Agreement.</li>
                                            <li>Purpose: Service provision, support, and improvements.</li>
                                            <li>Nature: Collection, storage, analysis, transmission, and deletion.</li>
                                            <li>Categories of data subjects: Customer representatives, end-users, employees, and other individuals whose data is provided by Customer.</li>
                                            <li>Types of data: Account details, contact information, usage data, AI interactions, payment data (if applicable)</li>
                                        </ul>
                                    </p>
                                    <p className="mb-2">4.5 Legitimate Business Use – Kogents AI may process certain operational and diagnostic data for legitimate business purposes such as billing, technical support, security, and product development.</p>
                                    <h3 className="h3 my-3">5. Sub-Processing</h3>
                                    <p className="mb-2">5.1 Authorized Sub-Processors – Customer authorizes Kogents AI to engage Sub-Processors listed in Annex A.</p>
                                    <p className="mb-2">5.2 Obligations – Kogents AI ensures Sub-Processors are bound by written agreements providing equivalent data protection obligations.</p>
                                    <p className="mb-2">5.3 Changes – Kogents AI will notify customers of any changes to Sub-Processors at least ten (10) days prior. Customers may object based on data protection concerns.</p>
                                    <h3 className="h3 my-3">6. Security</h3>
                                    <p className="mb-2">6.1 Security Measures – Kogents AI implements appropriate technical and organizational measures described in Annex B to protect Customer Data.</p>
                                    <p className="mb-2">6.2 Continuous Improvement – Security measures may evolve over time, provided overall protection does not materially degrade.</p>
                                    <p className="mb-2">6.3 Customer Responsibility – Customer is responsible for securing account credentials and ensuring secure transmission of data to Kogents AI.</p>
                                    <h3 className="h3 my-3">7. International Transfers</h3>
                                    <p className="mb-2">Kogents AI may process and transfer data globally, provided adequate safeguards (e.g., Standard Contractual Clauses) are in place per GDPR and other applicable laws.</p>
                                    <h3 className="h3 my-3">8. Confidentiality & Security Incidents</h3>
                                    <p className="mb-2">8.1 Confidentiality – All persons authorized to process Customer Data are bound by confidentiality obligations.</p>
                                    <p className="mb-2">8.2 Breach Notification – Kogents AI shall notify Customer without undue delay after becoming aware of a Security Incident and provide all reasonably available information to support incident response.</p>
                                    <h3 className="h3 my-3">9. Deletion or Return of Data</h3>
                                    <p className="mb-2">Upon termination or expiration of the Agreement, Kogents AI will, at Customer’s option, delete or return all Customer Data unless retention is required by law. Complete deletion may take up to 60 days due to backup retention cycles.</p>
                                    <h3 className="h3 my-3">10. Cooperation</h3>
                                    <p className="mb-2">Kogents AI will reasonably assist Customer, at Customer’s expense, in fulfilling obligations relating to data subject requests (DSRs), data protection impact assessments (DPIAs), and communications with data protection authorities.</p>
                                    <h3 className="h3 my-3">11. Law Enforcement Requests</h3>
                                    <p className="mb-2">If legally compelled to disclose Customer Data, Kogents AI will notify Customer unless prohibited by law and, where possible, redirect the requesting authority to Customer.</p>
                                    <h3 className="h3 my-3">12. Liability</h3>
                                    <p className="mb-2">Liability under this DPA is subject to the exclusions and limits set out in the Agreement. Regulatory penalties caused by Customer’s breach of Data Protection Laws will reduce Kogents AI’s liability to Customer accordingly.</p>
                                    <h3 className="h3 my">13. Miscellaneous</h3>
                                    <p className="mb-2">Any costs associated with extraordinary requests outside standard service functionality will be borne by the Customer.</p>
                                    <h4 className="mb-2">Annex A – Sub-Processors</h4>
                                    <p className="mb-2">Kogents AI uses the following Sub-Processors to deliver its services:</p>
                                    <ul className="privacyPoints">
                                        <li>Amazon Web Services (AWS) – Cloud hosting and data storage (U.S./EU regions)</li>
                                        <li>Google LLC – Authentication, analytics, and security logging</li>
                                        <li>Stripe, Inc. – Payment processing</li>
                                        <li>OpenAI, LLC / Anthropic – AI inference and processing (no data used for training)</li>
                                        <li>Sentry.io – Error monitoring and logging</li>
                                        <li>Supabase / Pinecone – Database & vector storage services</li>
                                        <li>Muse.ai – Video hosting (if used)</li>
                                    </ul>
                                    <h4 className="mb-2">Annex B – Security Measures</h4>
                                    <p className="mb-2">Kogents AI’s security program includes, but is not limited to:</p>
                                    <ul className="privacyPoints">
                                        <li>Access Controls: MFA, RBAC, least-privilege enforcement</li>
                                        <li>Encryption: Data encrypted in transit (TLS 1.2+) and at rest (AES-256)</li>
                                        <li>Monitoring & Logging: 24/7 infrastructure monitoring, anomaly detection, and audit logs</li>
                                        <li>Backups & Recovery: Regular backups with disaster recovery plan</li>
                                        <li>Incident Response: Documented breach response procedure, customer notification workflow</li>
                                        <li>Separation of Data: Logical separation between customer accounts</li>
                                        <li>Employee Training: Mandatory security & privacy awareness programs</li>
                                    </ul>
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
