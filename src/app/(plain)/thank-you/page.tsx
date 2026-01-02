import React from "react";
import { Metadata } from "next";
import BlogList from "@/components/blog/BlogList";
import NewFooter from "@/components/NewFooter";
import ClientTestimonial from "@/components/CustomerServiceAIAgents/ClientTestimonial";
import HeaderWrapper from "@/components/HeaderWrapper";
import ZopimButtonWrapper from "@/components/ZopimButtonWrapper";

export const metadata: Metadata = {
  title: "Thank You | Kogents AI",
  description:
    "Thank you for your interest in Kogents AI. Choose how you'd like to proceed with our AI solutions.",
  robots: {
    index: false,
    follow: false,
  },
};

interface PageProps {
  searchParams: Promise<{ name?: string }>;
}

const page = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
  const userName = params.name || null;
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
                {/* Thank You Badge */}
                <span className="buttonAnimation yellow mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo aos-init aos-animate">
                  {userName ? `Thank You ${userName}` : "Thank You"}
                </span>

                {/* Main Heading */}
                <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize mt-4">
                  We've successfully received your chatbot requirements.
                </h2>

                {/* Description Paragraphs */}
                <div className="text-center paraColor subHeading w-100 mx-auto mt-4">
                  <p className="mb-0">
                    We're now working behind the scenes to build a smart AI chat
                    agent for your business.
                  </p>
                  <p className="mb-3" style={{ marginTop: 0 }}>
                    Our team will proceed with chatbot configuration shortly.
                  </p>
                  <p className="mb-0">
                    Please keep your phone and email available. Our team may
                    reach out for quick confirmations to speed up setup.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-5">
                  <ZopimButtonWrapper />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pt-16 pb-16" style={{ paddingTop: "6rem" }}>
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
