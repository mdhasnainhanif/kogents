import { Metadata } from "next";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: 'Kogents AI Privacy Policy – Data Protection & Rights',
  description:
    'Learn how Kogents AI collects, uses, and safeguards your data. Review your privacy rights and choices under global data protection laws.',
  keywords: ['Kogents AI', 'About Kogents', 'AI for business', 'Our Team', 'Company Values', 'Business Intelligence'],

  alternates: {
    canonical: 'https://kogents.ai/privacy-statement/',
    languages: {
      'en-US': 'https://kogents.ai/privacy-statement/',
    },
  },

  openGraph: {
    title: 'Kogents AI Privacy Policy – Data Protection & Rights',
    description:
      'Learn how Kogents AI collects, uses, and safeguards your data. Review your privacy rights and choices under global data protection laws.',
    url: 'https://kogents.ai/privacy-statement/',
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
    { label: 'Privacy and Policy', active: true }
  ];

  return (
    <>
      <div className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')] relative contactBanner">
        <div className="container px-5 mx-auto xl:px-0">
          <span className="buttonAnimation purple width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
            Privacy and Policy
          </span>
          <h1 className="text-center text-light headingSize">
            Privacy Policy
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
                    This privacy notice for Kogents AI Inc. (doing business as Kogents AI) ("Kogents," "Kogents AI," "we," "us" or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
                  </p>
 
                  <h2 className="my-3">Collection of customer’s information</h2>
                  <ul className="privacyPoints">
                    <li>Visit our website at www.kogents.ai, or any website of ours that links to this privacy notice</li>
                    <li>Use the platform, Kogents, during the entirety of your time with access to it</li>
                    <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                  </ul>
                  <h5>Questions or concerns?</h5>
                  <p className="mb-2">
                    Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, refrain from using our services. If you still have any questions or concerns, please contact us at info@kogents.ai.
                  </p>
                  <h5 className="mb-2">Summary of Key Points</h5>
                  <h4 className="mb-2">What personal information do we process?</h4>
                  <p className="mb-2">
                    When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Kogents and the Services, the choices you make, and the products and features you use.
                  </p>
                  <h4 className="mb-2">Do we process any sensitive personal information?</h4>
                  <p className="mb-2">
                    We do not process sensitive personal information.
                  </p>
                  <h4 className="mb-2">Do we receive any information from third parties?</h4>
                  <p className="mb-2">
                    We do not receive any information from third parties.
                  </p>
                  <h4 className="mb-2">How do we process your information?</h4>
                  <p className="mb-2">
                    We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.
                  </p>
                  <h4 className="mb-2">In what situations and with which parties do we share personal information?</h4>
                  <p className="mb-2">
                    We may share information in specific situations and with specific third parties.
                  </p>
                  <h4 className="mb-2">How do we keep your information safe?</h4>
                  <p className="mb-2">
                    We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
                  </p>
                  <h4 className="mb-2">What are your rights?</h4>
                  <p className="mb-2">
                    Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
                  </p>
                  <h4 className="mb-2">How do you exercise your rights?</h4>
                  <p className="mb-2">
                    The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                  </p>
                  <h3 className="h3 my-3">Personal Information</h3>
                  <p className="mb-2">
                    In this section, we will address the following:
                  </p>
                  <ul className="privacyPoints">
                    <li>The purpose of the collection of personal information</li>
                    <li>How will the information be processed?</li>
                    <li>Controls for the protection of personal information</li>
                    <li>Usage of tools such as cookies to collect personal information online</li>
                    <li>Details of information, such as IP address and domain information, are captured about the user</li>
                    <li>Sharing of information with third parties</li>
                    <li>User rights to access personal information</li>
                    <li>Details to contact the organization for queries on processing personal information</li>
                  </ul>
                  <h3 className="h3 my-3">Purpose for the Collection of Personal Information</h3>
                  <p className="mb-2">
                    Kogents AI Inc. (doing business as Kogents AI) ("Kogents," "we," "us," or "our") collects personal information to provide, improve, and administer our services ("Services"). This includes:
                  </p>
                  <ul className="privacyPoints">
                    <li>Use the platform, Kogents, during the entirety of your time with access to it</li>
                    <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                    <li>Visit our website at www.kogents.ai, or any website of ours that links to this privacy notice</li>
                  </ul>
                  <h3 className="h3 my-3">1.2. How Will the Information Be Processed?</h3>
                  <p className="mb-2">
                    We process your information to provide, improve, and administer our Services, communicate with you, ensure security and fraud prevention, and comply with legal requirements. We may also process your information for other purposes with your consent.
                  </p>
                  <h3 className="h3 my-3">1.3. Controls for the Protection of Personal Information</h3>
                  <p className="mb-2">
                    We implement organizational and technical processes and procedures to protect your personal information. Despite our safeguards, no electronic transmission or information storage technology can be guaranteed 100% secure.
                  </p>
                  <h3 className="h3 my-3">1.3.1. Do we Collect Information from Minors?</h3>
                  <p className="mb-2">
                    We do not knowingly solicit data from or market to children under 18 years of age. By using Kogents AI services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor’s use of the services. If we learn that personal information from users younger than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at info@kogents.ai.
                  </p>
                  <h3 className="h3 my-3">1.4. Usage of Tools Such as Cookies to Collect Personal Information Online</h3>
                  <p className="mb-2">
                    We use cookies and similar tracking technologies (like web beacons and pixels) to collect and store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                  </p>
                  <h3 className="h3 my-3">1.5. Details of Information Captured About the User</h3>
                  <p className="mb-2">Information automatically collected may include:</p>
                  <ul className="privacyPoints">
                    <li>IP address</li>
                    <li>Browser and device characteristics</li>
                    <li>Operating system</li>
                    <li>Language preferences</li>
                    <li>Referring URLs</li>
                    <li>Device name</li>
                    <li>Country and location</li>
                    <li>Information about how and when you use our services</li>
                    <li>Other technical information</li>
                  </ul>
                  <h3 className="h3 my-3">
                    ‍Sensitive Information:We do not process sensitive information.
                  </h3>
                  <h3 className="h3 my-3">
                    ‍Social Media Login Data: We may provide you with the option to register with us using your existing social media account details (e.g. Facebook, X, or other social media accounts). If you choose to register in this way, we will collect the information described in the section called "How do we handle your social logins?" below.
                  </h3>
                  <p className="mb-2">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
                  <h3 className="h3 my-3">1.5.1. Information Collected Automatically</h3>
                  <p className="mb-2">
                    Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our services.
                  </p>
                  <p className="mb-2">
                    ‍We automatically collect certain information when you visit, use, or navigate the services. This information does not reveal your specific identity (e.g. your name or contact information) but may include device and usage information, such as:
                  </p>
                  <ul className="privacyPoints">
                    <li>IP address</li>
                    <li>Browser</li>
                    <li>Device characteristics</li>
                    <li>Operating system</li>
                    <li>Language preferences</li>
                    <li>Referring URLs</li>
                    <li>Device name</li>
                    <li>Country</li>
                    <li>Location</li>
                    <li>Information about how and when you use our services</li>
                    <li>Other technical information</li>
                  </ul>
                  <p className="mb-2">This information is primarily needed to maintain the security and operation of our services, and for our internal analytics and reporting purposes.</p>
                  <p className="mb-2">Like many businesses, we also collect information through cookies and similar technologies.</p>
                  <h3 className="h3 my-3">The information we collect includes:</h3>
                  <ul className="privacyPoints">
                    <li>Log and Usage Data: Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings)</li>
                    <li>Device Data: We collect device data such as information about your computer, phone, tablet, or other device you use to access the services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information</li>
                    <li>Location Data: We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the services</li>
                  </ul>
                  <h3 className="h3 my-3">1.6. Sharing of Information with Third Parties</h3>
                  <p className="mb-2">
                    We may share your personal information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information. We also may share information in specific situations described in this policy and with our affiliates and business partners.
                  </p>
                  <h3 className="h3 my-3">1.7. User Rights to Access Personal Information</h3>
                  <p className="mb-2">
                    You may review, change, or terminate your account at any time. In certain regions (such as the EEA, UK, and Canada), you have specific rights under applicable data protection laws, including the right to request access to your personal information, request rectification or erasure, restrict processing, and data portability.
                  </p>
                  <h3 className="h3 my-3">1.8. Details to Contact the Organization for Queries on Processing Personal Information</h3>
                  <p className="mb-2">
                    For questions or concerns, specifically if you would like your data to be changed or erased, you can contact us at:
                  </p>
                  <ul className="privacyPoints">
                    <li> By Email: <a href="mailto:info@kogents.ai">info@kogents.ai</a></li>
                    <li>By post at: Kogents AI, 4492, 1007 N Orange St. 4th Floor , Wilmington, DE, New Castle, US, 19801</li>
                  </ul>
                  <h3 className="h3 my-3">1.8.1. Contact our Data Protection Officer (DPO)</h3>
                  <p className="mb-2">For any questions or concerns related to data privacy, you may contact our Data Protection Officer:</p>
                  <ul className="privacyPoints">
                    <li> By Email: <a href="mailto:info@kogents.ai">info@kogents.ai</a></li>
                  </ul>
                  <h3 className="h3 my-3">1.9. Organization’s Commitment to Privacy and Security</h3>
                  <p className="mb-2">We are committed to protecting your privacy and ensuring the security of your personal information. We continuously enhance our security procedures as new technology becomes available.</p>
                  <h3 className="h3 my-3">1.10.Period for Which the Terms and Conditions Are Valid</h3>
                  <p className="mb-2">This privacy policy is effective as of the revised date and will remain in effect unless otherwise specified. We may update this policy as necessary to stay compliant with relevant laws.</p>
                  <h3 className="h3 my-3">1.11. Organization’s Information Security Standards and Practices</h3>
                  <p className="mb-2">We employ reasonable technical and organizational security measures designed to protect any personal information we process. However, no security measures are infallible, and we cannot guarantee complete security of your information.</p>
                  <p className="mb-2">Some of the protocols we abide by include:</p>
                  <ul className="privacyPoints">
                    <li>GDPR</li>
                    <li>HIIPA</li>
                    <li>SOC2</li>
                  </ul>
                  <h3 className="h3 my-3">2.0. Policy on External Links</h3>
                  <h3 className="h3 my-3">2.1. User Activity Information</h3>
                  <p className="mb-2">We will not use information about user activities on the internet together with any information that would result in the user being identified without their consent.</p>
                  <h3 className="h3 my-3">2.2. Use of Software Utilities</h3>
                  <p className="mb-2">We do not associate information collected by software utilities (cookies, single-pixel gif images) with the username or email address when the user visits our sites.</p>
                  <h3 className="h3 my-3">2.3. Privacy Safeguards</h3>
                  <p className="mb-2">We implement policy guidelines to safeguard the privacy of user-identifiable information from unauthorized access or improper use and continuously enhance our security procedures as new technology becomes available.</p>
                  <h3 className="h3 my-3">2.4. Reviewing Personally Identifiable Information</h3>
                  <p className="mb-2">We honor requests from users to review all personally identifiable information, such as names, addresses, email addresses, and telephone numbers, maintained in reasonably retrievable form. We will correct inaccurate information verified by the user.</p>
                  <h3 className="h3 my-3">2.5. Use of Identifiable Information for Legal Purposes</h3>
                  <p className="mb-2">We may use user-identifiable information to investigate and help prevent potentially unlawful activity or activity that threatens the network or otherwise violates the user agreement for that service.</p>
                  <h3 className="h3 my-3">3.0. Data Processing Principles</h3>
                  <p className="mb-2">All data, including personally identifiable information shared by users, shall be:</p>
                  <ul className="privacyPoints">
                    <li>Processed fairly, lawfully, and securely.</li>
                    <li>Processed per the purpose for which it is collected.</li>
                    <li>Maintained up-to-date and accurate as necessary.</li>
                    <li>Retained for no longer than necessary for the purpose it is collected.</li>
                  </ul>
                  <h3 className="h3 my-3">4.0. Handling of User Information</h3>
                  <h3 className="h3 my-3">4.1. Pre-Collection Information</h3>
                  <p className="mb-2">Users shall be provided with the following information before collecting personally identifiable information:</p>
                  <ul className="privacyPoints">
                    <li>Purposes of processing the information.</li>
                  </ul>
                  <h3 className="h3 my-3">4.2. Circumstances of Personal Information Collection</h3>
                  <p className="mb-2">Information regarding the specific circumstances in which personal information is collected includes:</p>
                  <ul className="privacyPoints">
                    <li>The recipients of the information</li>
                    <li>Whether submission of information is obligatory or voluntary, and the impact of failure to submit such information</li>
                    <li>The right to access, update, or remove personal information</li>
                    <li>Whether personal information will be used for marketing purposes</li>
                  </ul>
                  <h3 className="h3 my-3">4.3. Is your Information Transferred Internationally?</h3>
                  <p className="mb-2">We may transfer, store, and process your information in countries other than your own.</p>
                  <p className="mb-2">‍Our servers are located in Europe. If you are accessing our Services from outside Europe, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information, in the United States, and other countries.</p>
                  <p className="mb-2">If you are a resident in the European Economic Area (EEA) or United Kingdom (UK), then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.</p>
                  <h3 className="he my-3">European Commission's Standard Contractual Clauses:</h3>
                  <p className="mb-2">We have implemented measures to protect your personal information, including by using the European Commission's Standard Contractual Clauses for transfers of personal information between our group companies and between us and our third-party providers. These clauses require all recipients to protect all personal information that they process originating from the EEA or UK in accordance with European data protection laws and regulations. Our Standard Contractual Clauses can be provided upon request. We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request.</p>
                  <h3 className="he my-3">4.4. What are your privacy rights?</h3>
                  <p className="mb-2">In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.‍</p>
                  <p className="mb-2">In select regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us.</p>
                  <p className="mb-2">We will consider and act upon any request in accordance with applicable data protection laws.</p>
                  <p className="mb-2">If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.</p>
                  <p className="mb-2">If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.</p>
                  <ul className="privacyPoints">
                    <li><h4 className="mb-2">Withdrawing your consent:</h4></li>
                    <p className="mb-2">You have the right to withdraw your consent for us to process your personal information at any time. If we rely on your consent for any specific processing activities, you may withdraw that consent by contacting us at info@kogents.ai. Once we receive your request, we will promptly stop the processing of your personal information that relies on consent.</p>
                    <p className="mb-2">However, please note that withdrawing consent will not affect the lawfulness of any processing carried out before your withdrawal. Additionally, withdrawing your consent may limit your access to certain services or features, as some processing activities are necessary for providing our services.</p>
                    <li><h4 className="mb-2">Opting out of marketing and promotional communications:</h4></li>
                    <p className="mb-2">You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>
                    <li><h4 className="mb-2">Account Information‍:</h4></li>
                    <p className="mb-2">If you would at any time like to review or change the information in your account or terminate your account, you can:Contact us using the contact information provided.Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.‍</p>
                    <li><h4 className="mb-2">Cookies and similar technologies:</h4></li>
                    <p className="mb-2">Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. You may also opt out of interest-based advertising by advertisers on our Services.If you have questions or comments about your privacy rights, you may email us at info@kogents.ai.</p>
                  </ul>
                  <h3 className="h3 my-3">4.5. How do we handle your Social Logins?</h3>
                  <p className="mb-2">If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.‍</p>
                  <p className="mb-2">Our services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.</p>
                  <p className="mb-2">We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>
                  <h3 className="he my-3">5.0. California Privacy Rights</h3>
                  <p className="mb-2">California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).</p>
                  <h3 className="h3 my-3">5.1. CCPA Privacy Notice‍:</h3>
                  <p className="mb-2">The California Code of Regulations defines a "resident" as:</p>
                  <ul className="privacyPoints">
                    <li>Every individual who is in the State of California for other than a temporary or transitory purpose</li>
                    <li>Every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
                    <li>All other individuals are defined as "non-residents"</li>
                  </ul>
                  <p className="mb-2">If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.‍</p>
                  <h3 className="h3 my-3">5.2. What Categories of Personal Information do we collect from California Resident?‍</h3>
                  <p className="mb-2">The Yes/No indicates whether this is information we collect. Additionally, this information pertains to the past twelve (12) months:</p>
                  <ol className="privacyPoints" style={{ listStyleType: "upper-alpha" }}>
                    <li><h4 className="mb-2">Yes, these include:</h4></li>
                    <p className="mb-2">Yes, these include:</p>
                    <p className="mb-2">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name.</p>
                    <li><h4 className="mb-2">Personal information categories listed in the California customer records statute</h4></li>
                    <p className="mb-2">Yes, these include:</p>
                    <p className="mb-2">Name, contact information, education, employment, employment history, and financial information.</p>
                    <li><h4 className="mb-2">Protected classification characteristics under California or Federal Law</h4></li>
                    <p className="mb-2">Yes, these include:</p>
                    <p className="mb-2">Gender and date of birth.</p>
                    <li><h4 className="mb-2">Commercial information</h4></li>
                    <p className="mb-2">Yes, these include:</p>
                    <p className="mb-2">Transaction information, purchase history, financial details, and payment information.</p>
                    <li><h4 className="mb-2">Biometric information</h4></li>
                    <p className="mb-2">No, these include:</p>
                    <p className="mb-2">Fingerprints and voiceprints.</p>
                    <li><h4 className="mb-2">Internet or other similar network activity</h4></li>
                    <p className="mb-2">No, these include:</p>
                    <p className="mb-2">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements.</p>
                    <li><h4 className="mb-2">Geolocation data</h4></li>
                    <p className="mb-2">No, these include:</p>
                    <p className="mb-2">Device location.</p>
                    <li><h4 className="mb-2">Audio, electronic, visual, thermal, olfactory, or similar information</h4></li>
                    <p className="mb-2">No, these include:</p>
                    <p className="mb-2">Images and audio, video or call recordings created in connection with our business activities.</p>
                    <li><h4 className="mb-2">Professional or employment-related information</h4></li>
                    <p className="mb-2">Student records and directory information.</p>
                    <li><h4 className="mb-2">Education Information</h4></li>
                    <p className="mb-2">No, these include:</p>
                    <p className="mb-2">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name.</p>
                    <li><h4 className="mb-2">Inferences drawn from other personal information</h4></li>
                    <p className="mb-2">Yes, these include:</p>
                    <p className="mb-2">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</p>
                    <li><h4 className="mb-2">Sensitive Personal Information</h4></li>
                    <p className="mb-2">No.</p>
                    <p className="mb-2">5.3. We will use and Retain the Collected Personal Information as Needed to Provide the Services or for:</p>
                    <ul className="privacyPoints">
                      <li>Category A - As long as the user has an account with us</li>
                      <li>Category B - As long as the user has an account with us</li>
                      <li>Category C - As long as the user has an account with us</li>
                      <li>Category D - As long as the user has an account with us</li>
                      <li>Category K - As long as the user has an account with us</li>
                    </ul>
                    <p className="mb-2">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
                    <ul className="privacyPoints">
                      <li>Receiving help through our customer support channels</li>
                      <li>Participation in customer surveys or contests</li>
                      <li>Facilitation in the delivery of our Services and to respond to your inquiries</li>
                    </ul>
                    <h3 className="h3 my-3">5.4. How do we Use and Share your Personal Information?‍</h3>
                    <p className="mb-2">Kogents AI Inc. collects and shares your personal information through:</p>
                    <ul className="privacyPoints">
                      <li>Targeting cookies/Marketing cookies</li>
                      <li>Beacons/Pixels/Tags</li>
                    </ul>
                    <p className="mb-2">If you are using an authorized agent to exercise your right to opt out, we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.‍</p>
                  </ol>
                  <h4 className="mb-2">5.5. Will your information be shared with anyone else?‍</h4>
                  <p className="mb-2">We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf, following the same strict privacy protection obligations mandated by the CCPA.</p>
                  <p className="mb-2">We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</p>
                  <p className="mb-2">Kogents AI Inc. has not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months.</p>
                  <h3 className="h3 my-3">5.6. Your Rights with Respect to your Personal Data</h3>
                  <ul className="privacyPoints"><li>Right to request deletion of the data — Request to delete</li></ul>
                  <p className="mb-2">You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</p>
                  <h3 className="h3 my-3">6.0. Virginia Privacy Rights</h3>
                  <p className="mb-2">If you are a resident of Virginia, you have specific rights under the Virginia Consumer Data Protection Act (CDPA), including the right to be informed, access, correct, delete, and obtain a copy of personal data, as well as the right to opt-out of certain processing activities.</p>
                  <h3 className="h3 my-3">6.1. Under the Virginia Consumer Data Protection Act (CDPA):</h3>
                  <p className="mb-2">"Consumer" means a natural person who is a resident of the Commonwealth acting only in an individual or household context. It does not include a natural person acting in a commercial or employment context.</p>
                  <ul className="privacyPoints">
                    <li>"Personal data" means any information that is linked or reasonably linkable to an identified or identifiable natural person. "Personal data" does not include de-identified data or publicly available information.</li>
                    <li>"Sale of personal data" means the exchange of personal data for monetary consideration.</li>
                    <li>If this definition "consumer" applies to you, we must adhere to certain rights and obligations regarding your personal data.</li>
                  </ul>
                  <h3 className="h3 my-3">6.2. Your Rights with Respect to your Personal Data</h3>
                  <ul className="privacyPoints">
                    <li>Right to be informed whether or not we are processing your personal data</li>
                    <li>Right to access your personal data</li>
                    <li>Right to correct inaccuracies in your personal data</li>
                    <li>Right to request deletion of your personal data</li>
                    <li>Right to obtain a copy of the personal data you previously shared with us</li>
                    <li>Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
                  </ul>
                  <h3 className="h3 my-3">6.3. Verification Process</h3>
                  <p className="mb-2">We may request that you provide additional information reasonably necessary to verify you and your consumer's request. If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request.</p>
                  <p className="mb-2">Upon receiving your request, we will respond without undue delay, but in all cases, within forty-five (45) days of receipt. The response period may be extended once by forty-five (45) additional days when reasonably necessary. We will inform you of any such extension within the initial 45-day response period, together with the reason for the extension.</p>
                  <h3 className="h3 my-3">6.4. Right to Appeal</h3>
                  <p className="mb-2">If we decline to take action regarding your request, we will inform you of our decision and reasoning behind it. If you wish to appeal our decision, please email us at info@Kogents.ai. Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal if denied, you may contact the Attorney General to submit a complaint.</p>
                  <h3 className="h3 my-3">7.0 Delaware Privacy Rights</h3>
                  <p className="mb-2">If you are a resident of Delaware, you have specific rights under the Delaware Personal Data Privacy Act (DPDPA), effective January 1, 2025. These include the right to:</p>
                  <ul className="privacyPoints">
                    <li>Confirm whether or not we are processing your personal data.</li>
                    <li>Access your personal data.</li>
                    <li>Correct inaccuracies in your personal data.</li>
                    <li>Request deletion of your personal data.</li>
                    <li>Obtain a portable copy of your personal data that you previously shared with us</li>
                    <li>Opt out of the processing of your personal data for:
                      <ul>
                        <li>Targeted advertising</li>
                        <li>Sale of personal data</li>
                        <li>Profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
                      </ul>
                    </li>
                  </ul>
                  <h3 className="h3 my-3">7.1 Verification Process</h3>
                  <p className="mb-2">We may request that you provide additional information reasonably necessary to verify your identity and your request. If you submit a request through an authorized agent, we may need to collect additional information to verify your identity before processing the request.</p>
                  <p className="mb-2">Upon receiving your request, we will respond without undue delay and in all cases within forty-five (45) days of receipt. This period may be extended once by an additional forty-five (45) days when reasonably necessary. If we extend the period, we will inform you within the initial 45-day window and explain why.</p>
                  <h3 className="h3 my-3">7.2 Right to Appeal</h3>
                  <p className="mb-">If we decline to take action regarding your request, we will notify you of our decision and provide our reasoning. If you wish to appeal this decision, please email us at info@kogents.ai. Within sixty (60) days of receipt of an appeal, we will respond in writing, including an explanation of the reasons for our decision. If your appeal is denied, you may contact the Delaware Department of Justice to submit a complaint.</p>
                  <h3 className="h3 my-3">8.0. Updates to This Notice</h3>
                  <p className="mb-2">We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and will be effective as soon as it is accessible. If we make material changes, we may notify you by prominently posting a notice of such changes or by directly sending you a notification.</p>
                  <h3 className="h3 my-3">9.0. Reviewing, Updating, or Deleting Data</h3>
                  <p className="mb-2">You have the right to request access to, review, update, or delete your personal information. To submit a data subject access request, contact us at info@kogents.ai.</p>
                  <h3 className="h3 my-3">10.0. Do-Not-Track Features</h3>
                  <p className="mb-2">We do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted, we will inform you about that practice in a revised version of this privacy notice.</p>
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
