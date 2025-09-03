"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';

import { Navigation } from "swiper/modules";
import { ArrowRightIcon } from "@/icons";


const AIAgentSlider = () => {
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
                  Reliable. Adaptive. Always On.
                </h2>
                <p className="paraColor mx-auto text-center subHeading maxWidth39">
                  All agents are continuously learning from conversations, system signals, and customer outcomes — to deliver better support and smarter escalations.
                </p>
                <a
                  className="buttonAnimation2 green flex justify-center items-center gap-2 mt-4 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900   mb-16 open-modal-btn"
                  data-modal-target="#welcomeModal"
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
                    {/* Customer Complaint AI Agent */}
                    <SwiperSlide
                      className="item"
                    >
                      <div className="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary aos-init aos-animate cardFull">
                        <Image
                        loading="lazy"
                          className="w-full"
                          src="/assets/img/team-slider/customer-complaint-ai-agent.webp"
                          alt="media image"
                         width={800} height={600} />
                        <div className="p-3 pt-0 cardFullContent">
                          <a
                            href="javascript:void(0);"
                            className="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
                          >
                            Customer Complaint AI Agent
                          </a>
                          <div className="flex flex-wrap gap-2 cardPoints">
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Detects complaint tone and urgency.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Generates empathy-driven replies.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Escalates unresolved issues fast.
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* Client Call Log AI Agent */}
                    <SwiperSlide
                      className="item"
                    >
                      <div className="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary aos-init aos-animate cardFull">
                        <Image
                        loading="lazy"
                          className="w-full"
                          src="/assets/img/team-slider/client-call-log-ai-agent.webp"
                          alt="media image"
                         width={800} height={600} />
                        <div className="p-3 pt-0 cardFullContent">
                          <a
                            href="javascript:void(0);"
                            className="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
                          >
                            Client Call Log AI Agent
                          </a>
                          <div className="flex flex-wrap gap-2 cardPoints">
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Logs every client interaction securely.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Helps analyze call performance & issues.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Enables quick call recall for reference.
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* Support Satisfaction AI Agent */}
                    <SwiperSlide
                      className="item"
                    >
                      <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary cardFull">
                        <Image
                        loading="lazy"
                          className="w-full"
                          src="/assets/img/team-slider/support-satisfaction-ai-agent.webp"
                          alt="media image"
                         width={800} height={600} />
                        <div className="p-3 pt-0 cardFullContent">
                          <a
                            href="javascript:void(0);"
                            className="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
                          >
                            Support Satisfaction AI Agent
                          </a>
                          <div className="flex flex-wrap gap-2 cardPoints">
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Collects feedback instantly post-support.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Identifies satisfaction trends.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Optimizes future support experiences.
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* Support Request AI Agent */}
                    <SwiperSlide
                      className="item"
                    >
                      <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary cardFull">
                        <Image
                        loading="lazy"
                          className="w-full"
                          src="/assets/img/team-slider/support-request-ai-agent.webp"
                          alt="media image"
                         width={800} height={600} />
                        <div className="p-3 pt-0 cardFullContent">
                          <a
                            href="javascript:void(0);"
                            className="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
                          >
                            Support Request AI Agent
                          </a>
                          <div className="flex flex-wrap gap-2 cardPoints">
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Handles support queries efficiently.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Routes requests to the right department.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Reduces response time significantly.
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* Customer Support AI Agent */}
                    <SwiperSlide
                      className="item"
                    >
                      <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary cardFull">
                        <Image
                        loading="lazy"
                          className="w-full"
                          src="/assets/img/team-slider/customer-support-ai-agent.webp"
                          alt="media image"
                         width={800} height={600} />
                        <div className="p-3 pt-0 cardFullContent">
                          <a
                            href="javascript:void(0);"
                            className="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
                          >
                            Customer Support AI Agent
                          </a>
                          <div className="flex flex-wrap gap-2 cardPoints">
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Resolves common issues instantly.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Available 24/7 across channels.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Improves customer satisfaction rate.
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* Customer Service AI Agent */}
                    <SwiperSlide
                      className="item"
                    >
                      <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary cardFull">
                        <Image
                        loading="lazy"
                          className="w-full"
                          src="/assets/img/team-slider/customer-service-ai-agent.webp"
                          alt="media image"
                         width={800} height={600} />
                        <div className="p-3 pt-0 cardFullContent">
                          <a
                            href="javascript:void(0);"
                            className="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
                          >
                            Customer Service AI Agent
                          </a>
                          <div className="flex flex-wrap gap-2 cardPoints">
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Manages inquiries across platforms.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Boosts team productivity.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Ensures consistent messaging.
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* Customer Review AI Agent */}
                    <SwiperSlide
                      className="item"
                    >
                      <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary cardFull">
                        <Image
                        loading="lazy"
                          className="w-full"
                          src="/assets/img/team-slider/customer-review-ai-agent.webp"
                          alt="media image"
                         width={800} height={600} />
                        <div className="p-3 pt-0 cardFullContent">
                          <a
                            href="javascript:void(0);"
                            className="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
                          >
                            Customer Review AI Agent
                          </a>
                          <div className="flex flex-wrap gap-2 cardPoints">
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Collects & organizes customer feedback.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Highlights key themes in reviews.
                            </a>
                            <a href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900">
                              Sends alerts on negative feedback.
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

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