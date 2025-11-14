"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { useModalStore } from "@/stores/useModalStore";
import Image from "next/image";
import { ArrowRightIcon } from "@/icons";


const AIAgentSlider = () => {
  const openModal = useModalStore((state) => state.openModal);

  const aiAgents = [
    {
      id: 1,
      title: "Healthcare AI Agent",
      image: "/assets/img/team-slider/customer-complaint-ai-agent.webp",
      href: "/solutions/healthcare-ai-agent",
      points: [
        "Manages patient inquiries and appointment scheduling.",
        "Provides instant medical info from approved knowledge bases.",
        "Reduces staff workload while improving patient experience.",
      ]
    },
    {
      id: 2,
      title: "Customer Service AI Agent",
      image: "/assets/img/team-slider/client-call-log-ai-agent.webp",
      href: "/solutions/customer-service-ai-agent",
      points: [
        "Resolves FAQs instantly across multiple channels.",
        "Escalates complex issues with full context.",
        "Reduces ticket volume and boosts satisfaction."
      ]
    },
    {
      id: 3,
      title: "AI Agent for Education",
      image: "/assets/img/team-slider/support-satisfaction-ai-agent.webp",
      href: "/solutions/ai-agent-for-education",
      points: [
        "Answers student questions and provides learning resources.",
        "Assists with scheduling and exam reminders.",
        "Supports teachers with grading and feedback automation.",
      ]
    },
    {
      id: 4,
      title: "AI Agent for HR",
      image: "/assets/img/team-slider/support-request-ai-agent.webp",
      href: "/solutions/ai-agent-for-hr",
      points: [
        "Handles employee queries like leave, payroll, and policy.",
        "Automates onboarding and training workflows.",
        "Frees HR teams to focus on people, not paperwork."
      ]
    },
    {
      id: 5,
      title: "AI Agent for Marketing",
      image: "/assets/img/team-slider/customer-support-ai-agent.webp",
      href: "/solutions/ai-agent-for-marketing",
      points: [
        "Engages leads through targeted conversations.",
        "Automates survey and feedback collection.",
        "Supports campaign optimization with real-time insights."
      ]
    },
    {
      id: 6,
      title: "AI Teacher Assistant",
      image: "/assets/img/team-slider/customer-service-ai-agent.webp",
      href: "/solutions/ai-teacher-assistant",
      points: [
        "Provides personalized learning assistance for students.",
        "Automates homework help and quiz prep.",
        "Extends teacher support beyond the classroom.",
      ]
    },
    {
      id: 7,
      title: "AI Agent Dashboard",
      image: "/assets/img/team-slider/customer-review-ai-agent.webp",
      href: "/solutions/ai-agent-dashboard",
      points: [
        "Centralized hub to monitor and manage all AI Agents.",
        "Provides analytics on performance and efficiency.",
        "Enables real-time updates and optimization.."
      ]
    }
  ];

  return (
    <div
      className="bg-center relative bg-no-repeat bg-cover sectionPadding bg-[url('../img/bc/revolutionize-bg.png')] pt0Mobile"
      id="aiTemplateSection">
      <div className="container px-5 mx-auto xl:px-0">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div>
              <div className="flex flex-col items-center justify-center">
                <span

                  className="buttonAnimation green inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
                >
                  Solutions
                </span>
                <h2

                  className="mt-0 headingSize text-center text-3xl md:text-5xl tracking-[-0.02em] font-semibold mt-2 maxWidth45"
                >
                  AI Agents Built for Every Business Need
                </h2>
                <p className="paraColor mx-auto text-center subHeading maxW54 mb-5 mt125">
                  Our agents don’t just reply, they adapt to your industry and workflow. Whether in healthcare, HR, or education, Kogents AI Agents integrate seamlessly into your operations to deliver speed, scale, and efficiency.
                </p>
                {/* <a
                  className="buttonAnimation2 green flex justify-center items-center gap-2 mt-4 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900   mb-16 open-modal-btn"
                  onClick={openModal}
                  href="javascript:void(0);"
                  style={{ display: "inline-flex" }}
                >
                  Book Your Slot Now!
                  <ArrowRightIcon />
                </a> */}
                <div
                >
                  <Swiper
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    // pagination={{ clickable: true }}
                    className="caseStudySlider  relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.875rem] caseStudySlider"
                  >
                    {aiAgents.map((agent) => (
                      <SwiperSlide key={agent.id} className="item">
                        <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary cardFull">
                          <Image
                            className="w-full rounded-lg"
                            src={agent.image}
                            alt={agent.title}
                            width={800}
                            height={600}
                          />
                          <div className="pt-0 cardFullContent pb-3">
                            <a
                              href={agent.href}
                              className="inline-block mt-3 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
                            >
                              {agent.title}
                            </a>
                            <div className="flex flex-wrap gap-2 cardPoints">
                              {agent.points.map((point, index) => (
                                <a
                                  key={index}
                                  className="inline-block px-4 py-2 text-sm rounded-full text-w-100 text-w-900"
                                >
                                  {point}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="swiper-button-prev !left-[-40px] z-50"></div>
                  <div className="swiper-button-next !right-[-40px] z-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AIAgentSlider;