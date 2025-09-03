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
      title: "Customer Complaint AI Agent",
      image: "/assets/img/team-slider/customer-complaint-ai-agent.webp",
      points: [
        "Detects complaint tone and urgency.",
        "Generates empathy-driven replies.",
        "Escalates unresolved issues fast."
      ]
    },
    {
      id: 2,
      title: "Client Call Log AI Agent",
      image: "/assets/img/team-slider/client-call-log-ai-agent.webp",
      points: [
        "Logs every client interaction securely.",
        "Helps analyze call performance & issues.",
        "Enables quick call recall for reference."
      ]
    },
    {
      id: 3,
      title: "Support Satisfaction AI Agent",
      image: "/assets/img/team-slider/support-satisfaction-ai-agent.webp",
      points: [
        "Collects feedback instantly post-support.",
        "Identifies satisfaction trends.",
        "Optimizes future support experiences."
      ]
    },
    {
      id: 4,
      title: "Support Request AI Agent",
      image: "/assets/img/team-slider/support-request-ai-agent.webp",
      points: [
        "Handles support queries efficiently.",
        "Routes requests to the right department.",
        "Reduces response time significantly."
      ]
    },
    {
      id: 5,
      title: "Customer Support AI Agent",
      image: "/assets/img/team-slider/customer-support-ai-agent.webp",
      points: [
        "Resolves common issues instantly.",
        "Available 24/7 across channels.",
        "Improves customer satisfaction rate."
      ]
    },
    {
      id: 6,
      title: "Customer Service AI Agent",
      image: "/assets/img/team-slider/customer-service-ai-agent.webp",
      points: [
        "Manages inquiries across platforms.",
        "Boosts team productivity.",
        "Ensures consistent messaging."
      ]
    },
    {
      id: 7,
      title: "Customer Review AI Agent",
      image: "/assets/img/team-slider/customer-review-ai-agent.webp",
      points: [
        "Collects & organizes customer feedback.",
        "Highlights key themes in reviews.",
        "Sends alerts on negative feedback."
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

                  className="buttonAnimation green inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
                >
                  AI Agents
                </span>
                <h2

                  className="headingSize text-center text-3xl md:text-5xl tracking-[-0.02em] font-semibold mt-2 maxWidth45"
                >
                  More Than Just Smart Replies
                </h2>
                <p className="paraColor mx-auto text-center subHeading maxWidth39">
                  Our agents aren&apos;t siloed bots. They collaborate.
                </p>
                <p className="paraColor mx-auto text-center subHeading maxWidth39 mb-1">
                  Your Shopify AI syncs with your WhatsApp AI. Your kiosk agent flags
                  issues your phone agent hears daily. Together&#44; they form a mesh of
                  automation — one that evolves with your business.
                </p>
                <a
                  className="buttonAnimation2 green flex justify-center items-center gap-2 mt-4 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900   mb-16 open-modal-btn"
                  onClick={openModal}
                  href="javascript:void(0);"
                  style={{ display: "inline-flex" }}
                >
                  Book Your Slot Now!
                  <ArrowRightIcon />
                </a>
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
                    className="caseStudySlider relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.875rem] caseStudySlider"
                  >
                    {aiAgents.map((agent) => (
                      <SwiperSlide key={agent.id} className="item">
                        <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary cardFull">
                          <Image
                            className="w-full"
                            src={agent.image}
                            alt={agent.title}
                            width={800} 
                            height={600} 
                          />
                          <div className="p-3 pt-0 cardFullContent">
                            <a
                              href="javascript:void(0);"
                              className="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
                            >
                              {agent.title}
                            </a>
                            <div className="flex flex-wrap gap-2 cardPoints">
                              {agent.points.map((point, index) => (
                                <a 
                                  key={index}
                                  href="#" 
                                  className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
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