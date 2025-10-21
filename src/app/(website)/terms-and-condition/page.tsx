import { Metadata } from "next";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: 'Terms and Condition | Kogents AI',
  description:
    'Learn about Kogents AI, a team creating intelligent agents that help businesses work smarter, streamline workflows, and improve experiences.',
  keywords: ['Kogents AI', 'About Kogents', 'AI for business', 'Our Team', 'Company Values', 'Business Intelligence'],

  alternates: {
    canonical: 'https://kogents.ai/terms-and-condition',
    languages: {
      'en-US': 'https://kogents.ai/terms-and-condition',
    },
  },

  openGraph: {
    title: 'Terms and Condition | Kogents AI',
    description:
      'Learn about Kogents AI, a team creating intelligent agents that help businesses work smarter, streamline workflows, and improve experiences.',
    url: 'https://www.kogents.ai/terms-and-condition',
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

const Page = () => {
  const breadcrumbItems = [
    { label: 'Terms and Condition', active: true }
  ];

  return (
    <>
      <div className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')] relative contactBanner">
        <div className="container px-5 mx-auto xl:px-0">
          <span className="buttonAnimation purple width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
            Terms and Condition
          </span>
          <h1 className="text-center text-light headingSize">Terms and Condition</h1>
      <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <section className="sectionPadding text-white termsAndCondition">
        <div className="container">
          <div className="row intro">
            <div className="col-md-12">
              <div className="row intro mb-0">
                <div className="col-12">
                  <h3 className="h4 my-3">Delivery Policy</h3>
                  <ul className="simple-p">
                    <li>
                      Following receipt of your order, the services will be provided to you by the contract conditions
                      for the services you purchased.
                    </li>
                    <li>
                      The nature of the services you ordered, your prompt and accurate completion of your obligations
                      regarding the execution of the services, and the date of your purchase may all have an impact on
                      how quickly the services are delivered.
                    </li>
                    <li>Upon completion of the services, the services will be considered effectively supplied to you.</li>
                    <li>
                      Should the contract be canceled before the delivery services, the terms of the agreement will
                      decide if you are entitled to a full, partial, or no return and how the contract may be discontinued.
                    </li>
                  </ul>

                  <h3 className="h4 my-3">Payment Policy</h3>
                  <ul className="simple-p">
                    <li>
                      If clients avail of any monthly service package of Kogent AI, they are obliged to pay the full
                      chargeable amount before the commencement of the work.
                    </li>
                    <li>
                      If Kogent AI and the client agree on a fixed quote regarding any services, they are liable to pay 50% 
                      of the billable amount in advance before the commencement of the work. The remaining 50% of the payment 
                      will have to be made within 7 days of the start date of the services.
                    </li>
                    <li>Kogent AI shall invoice the clients monthly, in advance.</li>
                    <li>
                      If the clients do not pay a monthly invoice when it is due, Kogent AI shall terminate the
                      services immediately. In this case, we will not be liable to issue a 10-day prior notice.
                    </li>
                    <li>
                      All charges quoted to the client shall be exclusive of VAT, which Kogent AI shall add to its
                      invoices at the appropriate rate.
                    </li>
                    <li>
                      All additional work requested by the Client, which is requested following commencement of the Services
                      and which is outside the scope of the Quotation (including any services necessarily procured to carry
                      out the Services) shall be regarded as additional to the cost given in the Quotation and will be
                      invoiced separately at the rates contained in the then-current Kogent AI rate card.
                    </li>
                    <li>
                      All charges listed in Quotations are estimates and are subject to final confirmation of technical
                      specifications.
                    </li>
                    <li>
                      The parties agree that Kogent AI may review and increase its standard hourly fee rates at any
                      time, provided that such charges cannot be increased more than once in any 12 (twelve) month period.
                    </li>
                    <li>
                      Kogent AI will provide the Client with written notice of any such increase one (1) month before
                      the proposed date of the increase. If such an increase is not acceptable to the Client, within two (2) 
                      weeks of such notice being received or deemed to have been received per this condition,
                      it may terminate the Contract by giving three (3) months written notice to Kogent AI.
                    </li>
                    <li>
                      Without prejudice to any other right or remedy that it may have, if the Client fails to pay Kogent AI 
                      on the Due Date, Kogent AI may:
                      <ul className="ps-0">
                        <li>
                          Charge interest on such sum under the Late Payment of Commercial Debts (Interest) Act 1998; from
                          the Due Date, accruing daily and being compounded quarterly until payment is made, whether before
                          or after any judgment, and the Client shall pay the interest immediately on demand; and suspend
                          all Services until payment has been made in full.
                        </li>
                        <li>Time for payment shall be of the essence of the Contract.</li>
                        <li>
                          All sums payable to Kogent AI under the Contract shall become due immediately on its
                          termination. This condition is without prejudice to any right to claim for interest.
                        </li>
                        <li>
                          Without prejudice to any other rights it may have, Kogent AI may set off any Client's
                          liability to Kogent AI against any liability of Kogent AI to the Client.
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <h3 className="h4 my-3">Refunds Policy</h3>
                  <ul className="simple-p">
                    <li>A full refund will be made if you decide to cancel our services within 5 days of payment.</li>
                    <li>
                      If you choose to terminate our services after the initial 5 days, you will be charged an amount
                      equivalent to the working hours put into the project. The balance will be credited to the account
                      from which you made payment within 45 days of cancellation.
                    </li>
                    <li>Cancellation of any service renewal should be made 10 days before the start of the next billing cycle.</li>
                    <li>
                      If cancellations are made after the start of the billing cycle, an amount equivalent to the working
                      hours put into the project during that month will be billable, which the clients will be entitled to pay.
                    </li>
                    <li>If you signed up for our services but did not use them, you are still liable to pay us.</li>
                    <li>
                      Amount of refund will be credited to the account from which the payment was made within 45 days of
                      service cancellation.
                    </li>
                  </ul>

                  <h4 className="mb-3">Email &amp; Mobile Phone Policy</h4>
                      <p className="mb-2">
                        This policy outlines the terms and conditions regarding the use of email and mobile phone contact
                        information provided to Kogent AI.
                      </p>
                      <ul className="simple-p">
                        <li>
                          <h3 className="h4 my-3">Consent and Usage</h3>
                          <p className="mb-2">

                          By providing your email address and/or mobile phone number, you consent to receive communication
                          from Kogent AI. This includes transitional messages, periodic updates about your service or
                          project, updates, newsletters, and service delivery e.g. design attachments, project updates and
                          revision updates.
                          </p>
                        </li>
                        <li>
                          <h3 className="h4 my-3">Carrier Charges Disclosure</h3>
                          <p className="mb-2">

                          Standard messaging and data rates may apply. Please consult your mobile service carrier for details.
                          </p>
                        </li>
                        <li>
                          <h3 className="h4 my-3">Stop &amp; Unsubscribe</h3>
                          <p className="mb-2">

                          If you wish to stop receiving emails or mobile communications, you can:
                          For emails, click the &quot;unsubscribe&quot; link located at the bottom of any email you receive
                          from us.
                          </p>
                          <p className="mb-2">
                          For mobile communications, reply &quot;STOP&quot; or "Unsub" or "Unsubscribe" to any SMS message you
                          receive from us. The SMS will be stopped right away.
                          </p>
                        </li>
                        <li>
                          <h3 className="h4 my-3">Frequency of Communication</h3>
                          <p className="mb-2">

                          We will strive to limit the frequency of our communications to a reasonable level. However, there
                          may be exceptions during special updates about projects or urgent notifications.
                          </p>
                        </li>
                        <li>
                          <h3 className="h4 my-3">Security of Information</h3>
                          <p className="mb-2">
                          Your email address and mobile phone number will be kept confidential and will not be shared with
                          third parties without your explicit consent, except as required by law.
                          </p>
                        </li>
                        <li>
                          <h3 className="h4 my-3">Changes to Policy</h3>
                          <p className="mb-2">
                          Kogent AI reserves the right to modify this policy at any time. Any changes will be posted on
                          our website, and it is your responsibility to review these changes.
                          </p>
                        </li>
                        <li>
                          <h3 className="h4 my-3">Contact Information</h3>
                          <p className="mb-2">
                          If you have any questions or concerns regarding this policy, please contact us at{" "}
                          </p>
                          <a href="mailto:info@kogents.ai" className="boldlink">
                            info@kogents.ai
                          </a>.
                        </li>
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

export default Page;
