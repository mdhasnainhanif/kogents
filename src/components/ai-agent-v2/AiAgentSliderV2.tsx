"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import Image from "next/image";


const AiAgentSliderV2 = ({ className }: { className?: string }) => {

  const aiAgents = [
    {
      id: 1,
      title: "Customer Support Agent",
      bgClass: "agent-bg-yellow",
      icon: "fas fa-headset",
      userName: "Sophie",
      userInitial: "S",
      href: "/solutions/healthcare-ai-agent",
      conversation: [
        {
          type: "ai",
          message: "Hi! I'm here to assist you. Please tell me what went wrong so I can help.",
          time: "02:00 PM"
        },
        {
          type: "user",
          message: "Your delivery team arrived late and damaged the package. I'm quite upset.",
          time: "02:10 PM"
        }
      ],
      points: [
        "Manages patient inquiries and appointment scheduling.",
        "Provides instant medical info from approved knowledge bases.",
        "Reduces staff workload while improving patient experience.",
      ]
    },
    {
      id: 2,
      title: "Call Log Assistant",
      bgClass: "agent-bg-green",
      icon: "fas fa-phone",
      userName: "Amelia",
      userInitial: "A",
      href: "/solutions/customer-service-ai-agent",
      conversation: [
        {
          type: "ai",
          message: "Hi! Just checking in — would you like a summary of your last support call?",
          time: "05:15 PM"
        },
        {
          type: "user",
          message: "Yes please. I need a copy of the conversation for my records.",
          time: "05:15 PM"
        }
      ],
      points: [
        "Resolves FAQs instantly across multiple channels.",
        "Escalates complex issues with full context.",
        "Reduces ticket volume and boosts satisfaction."
      ]
    },
    {
      id: 3,
      title: "Feedback Facilitator",
      bgClass: "agent-bg-orange",
      icon: "fas fa-comments",
      userName: "Ava",
      userInitial: "A",
      href: "/solutions/ai-agent-for-education",
      conversation: [
        {
          type: "ai",
          message: "Thanks for reaching out earlier. Were you satisfied with the support you received?",
          time: "10:39 PM"
        },
        {
          type: "user",
          message: "Yes, the issue was resolved quickly. Great support team!",
          time: "10:10 PM"
        }
      ],
      points: [
        "Answers student questions and provides learning resources.",
        "Assists with scheduling and exam reminders.",
        "Supports teachers with grading and feedback automation.",
      ]
    },
    {
      id: 4,
      title: "HR Assistant Agent",
      bgClass: "agent-bg-purple",
      icon: "fas fa-user-tie",
      userName: "Emma",
      userInitial: "E",
      href: "/solutions/ai-agent-for-hr",
      conversation: [
        {
          type: "ai",
          message: "Hello! I can help with HR queries like leave requests, payroll, and policies.",
          time: "09:15 AM"
        },
        {
          type: "user",
          message: "I need to submit a vacation request for next month. How do I proceed?",
          time: "09:20 AM"
        }
      ],
      points: [
        "Handles employee queries like leave, payroll, and policy.",
        "Automates onboarding and training workflows.",
        "Frees HR teams to focus on people, not paperwork."
      ]
    },
    {
      id: 5,
      title: "Marketing Assistant",
      bgClass: "agent-bg-pink",
      icon: "fas fa-chart-line",
      userName: "Olivia",
      userInitial: "O",
      href: "/solutions/ai-agent-for-marketing",
      conversation: [
        {
          type: "ai",
          message: "Hi there! I can help you with lead engagement and campaign insights.",
          time: "11:30 AM"
        },
        {
          type: "user",
          message: "Can you show me the latest campaign performance metrics?",
          time: "11:35 AM"
        }
      ],
      points: [
        "Engages leads through targeted conversations.",
        "Automates survey and feedback collection.",
        "Supports campaign optimization with real-time insights."
      ]
    },
    {
      id: 6,
      title: "Teaching Assistant",
      bgClass: "agent-bg-blue",
      icon: "fas fa-graduation-cap",
      userName: "Liam",
      userInitial: "L",
      href: "/solutions/ai-teacher-assistant",
      conversation: [
        {
          type: "ai",
          message: "Hello! I'm here to help with your studies. What subject can I assist you with?",
          time: "03:45 PM"
        },
        {
          type: "user",
          message: "I need help understanding calculus derivatives for tomorrow's exam.",
          time: "03:50 PM"
        }
      ],
      points: [
        "Provides personalized learning assistance for students.",
        "Automates homework help and quiz prep.",
        "Extends teacher support beyond the classroom.",
      ]
    },
    {
      id: 7,
      title: "Analytics Agent",
      bgClass: "agent-bg-indigo",
      icon: "fas fa-chart-bar",
      userName: "Noah",
      userInitial: "N",
      href: "/solutions/ai-agent-dashboard",
      conversation: [
        {
          type: "ai",
          message: "Your AI agents handled 1,247 conversations today with 94% satisfaction rate.",
          time: "06:00 PM"
        },
        {
          type: "user",
          message: "Great! Can you break down the performance by department clearly and thoroughly?",
          time: "06:05 PM"
        }
      ],
      points: [
        "Centralized hub to monitor and manage all AI Agents.",
        "Provides analytics on performance and efficiency.",
        "Enables real-time updates and optimization.."
      ]
    }
  ];

  return (
    <div
      className={`bg-center relative bg-no-repeat bg-cover sectionPadding pt0Mobile ${className}`}
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

                  className="headingSize text-center text-3xl md:text-5xl tracking-[-0.02em] font-semibold mt-2 maxWidth45"
                >
                  AI Agents Built for Every Business Need
                </h2>
                <p className="paraColor mx-auto text-center subHeading maxWidth39 mb-5">
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
                <div className="mt-5">
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
                    className={`caseStudySlider  relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.875rem] caseStudySlider ${className}`}
                  >
                    {aiAgents.map((agent) => (
                      <SwiperSlide key={agent.id} className="item h-full">
                        <div className="border rounded-lg border-b-600 bg-gd-tertiary cardFull h-full flex flex-col">
                          <div className={`agent-visual-wrapper ${agent.bgClass}`}>
                            <div className="agent-phone-mockup">
                              <div className="agent-phone-screen">
                                <div className="agent-phone-header"> 
                                  <div className="agent-phone-title">
                                    <i className={agent.icon}></i>
                                    <span>{agent.title}</span>
                                  </div>
                                  <div className="agent-status">Online</div>
                                </div>
                                <div className="agent-phone-chat">
                                  <div className="agent-chat-status">Connected to AI Agent</div>
                                  {agent.conversation.map((msg, index) => (
                                    <div key={index} className={`agent-message ${msg.type === 'ai' ? 'agent-ai-msg' : 'agent-user-msg'}`}>
                                      {msg.type === 'ai' && (
                                        <div className="agent-msg-avatar">{agent.userInitial}</div>
                                      )}
                                      <div className="agent-msg-content">
                                        {msg.type === 'ai' && (
                                          <div className="agent-msg-name">{agent.userName}</div>
                                        )}
                                        <div className="agent-msg-text">{msg.message}</div>
                                        <div className="agent-msg-time">{msg.time}</div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pt-0 cardFullContent pb-3 flex-1 flex flex-col">
                            <a
                              href={agent.href}
                              className="inline-block mt-3 mb-6 text-2xl font-medium transition-all 
                              duration-300 text-w-500 hover:text-tropical-indigo text-light"
                            >
                              {agent.title}
                            </a>
                            <div className="flex flex-wrap gap-2 cardPoints flex-1">
                              {agent.points.map((point, index) => (
                                <a
                                  key={index}
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

export default AiAgentSliderV2;