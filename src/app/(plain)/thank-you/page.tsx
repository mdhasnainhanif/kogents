import { ArrowRightIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import BlogList from "@/components/blog/BlogList";
import NewFooter from "@/components/NewFooter";
import ClientTestimonial from "@/components/CustomerServiceAIAgents/ClientTestimonial";
import HeaderWrapper from "@/components/HeaderWrapper";

export const metadata: Metadata = {
  title: "Thank You | Kogents AI",
  description:
    "Thank you for your interest in Kogents AI. Choose how you'd like to proceed with our AI solutions.",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return (
    <>
      <div>
        <HeaderWrapper />
        <section
          className="py-3 bg-center bg-no-repeat bg-cover newBg desktop-section-show"
          id="aiAgentSection"
        >
          <div className="container">
            <div className="row justify-content-center sectionPadding">
              <div className="col-md-10">
                <span className="buttonAnimation yellow mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo aos-init aos-animate">
                  Thank You
                </span>
                <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                  You're in! Here's What Happens Next.
                </h2>

                {/* <p className="text-center paraColor subHeading w-100 mx-auto mt125">
                  Explore our blogs to learn how AI agents can transform
                  workflows.
                </p> */}

              </div>
            </div>
            {/* <div className="row rowGap justify-content-center mt-5"> */}
            {/* Card 1 */}
            {/* <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                  <Image
                    src="/assets/img/steps/live_chat.webp"
                    alt="Live Chat"
                    className="rounded-lg"
                    width={800}
                    height={600}
                  />
                  <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                    Live Chat
                  </h3>
                  <p className="text-white">
                    Let's Talk! Share your design requirements with one of our
                    designers to get a perfect logo that you envisioned for
                  </p>
                  <Link
                    href="/"
                    aria-label="KOGENTS - Go to homepage"
                    className="w_fit buttonAnimation2 pink mt-3 d-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
                  >
                    Let's Chat
                    <ArrowRightIcon style={{ height: 24 }} />
                  </Link>
                </div>
              </div> */}

            {/* Card 2 */}
            {/* <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                  <Image
                    src="/assets/img/steps/about_us.webp"
                    alt="About Us"
                    className="rounded-lg"
                    width={800}
                    height={600}
                  />
                  <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                    About Us
                  </h3>
                  <p className="text-white">
                    Let's Talk! Share your design requirements with one of our
                    designers to get a perfect logo that you envisioned for
                  </p>
                  <Link
                    href="/about"
                    className="w_fit buttonAnimation2 green mt-3 d-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
                  >
                    Know More About Us
                    <ArrowRightIcon style={{ height: 24 }} />
                  </Link>
                </div>
              </div> */}

            {/* Card 3 */}
            {/* <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                  <Image
                    src="/assets/img/steps/solutions.webp"
                    alt="Solutions"
                    className="rounded-lg"
                    width={800}
                    height={600}
                  />
                  <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                    Solutions
                  </h3>
                  <p className="text-white">
                    Let's Talk! Share your design requirements with one of our
                    designers to get a perfect logo that you envisioned for
                  </p>
                  <Link
                    href="/solutions"
                    className="w_fit buttonAnimation2 yellow mt-3 d-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
                  >
                    Explore More
                    <ArrowRightIcon style={{ height: 24 }} />
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <div className="pt-16 pb-16">
          <BlogList 
            isShowBadge={true} 
            description="Explore our blogs to learn how AI agents can transform workflows."
          />
        </div>
        <ClientTestimonial
          tag="Reviews"
          className="platformsPageClientTestimonial pt-0"
          heading="Client Testimonails"
          description=""
          testimonials={[
            {
              id: 1,
              quote:
                "We've been using the healthcare AI agent for about four months now, and the results are incredible. Our patient response times have dropped dramatically, and patients actually appreciate how fast and accurate the medical information is. The system also frees up our medical staff to focus on complex patient care instead of answering the same appointment and billing questions over and over again. It feels like we added an extra team member without the cost, and the HIPAA compliance gives us peace of mind.",
              avatar: "DR",
              name: "Dr. Sarah Mitchell",
              title: "Medical Director, City General Hospital",
              rating: 5,
            },
            {
              id: 2,
              quote:
                "I was skeptical at first, but the personalized patient support feature blew me away. It remembers past interactions and makes every conversation feel seamless while maintaining complete patient privacy.",
              avatar: "JR",
              name: "Jennifer Rodriguez",
              title: "Practice Manager, Family Care Clinic",
              rating: 5,
            },
            {
              id: 3,
              quote:
                "The physician-in-the-loop escalation is a lifesaver. Our patients never feel stuck talking to a bot — the system knows exactly when to bring in a real healthcare provider for medical decisions.",
              avatar: "AH",
              name: "Dr. Amir Hassan",
              title: "Cardiologist, Heart & Vascular Center",
              rating: 5,
            },
            {
              id: 4,
              quote:
                "What stood out for me was how simple the setup was with our existing EHR system. Within just a few days, the AI agent was already live and integrated with Epic. Our staff no longer waste time on routine administrative tasks because everything is automated. After a month of using it, I could already see a 60% improvement in patient satisfaction, and the cost savings compared to hiring additional administrative staff are significant.",
              avatar: "SL",
              name: "Dr. Sophia Lee",
              title: "Chief Medical Officer, Regional Medical Center",
              rating: 5,
            },
          ]}
          statistics={[
            {
              id: 1,
              icon: "⭐⭐⭐",
              value: "85%",
              label: "Increase in Patient Satisfaction",
            },
            {
              id: 2,
              icon: "⚙️⏰",
              value: "65%",
              label: "Reduction in Administrative Workload",
            },
          ]}
        />
        <NewFooter showOnlyTop={true} />
      </div>
    </>
  );
};

export default page;
