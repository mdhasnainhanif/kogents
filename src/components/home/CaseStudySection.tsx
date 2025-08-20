'use client';

import Link from "next/link";
import Image from 'next/image';

import React, { useEffect } from "react";
const CaseStudySection = () => {
  function updateServiceScrollerClass() {
    const el = document.getElementById("serviceScrollerArea");
    if (!el) return;

    if (window.innerWidth > 1024) {
      el.classList.remove("service-scrollerArea");
    } else {
      el.classList.add("service-scrollerArea");
    }
  }

  useEffect(() => {
    updateServiceScrollerClass();
    window.addEventListener("resize", updateServiceScrollerClass);
    return () => {
      window.removeEventListener("resize", updateServiceScrollerClass);
    };
  }, []);
  return (
    <div className="sectionPadding pb-0 bg-[url('../img/bc/revolutionize-bg.png')] bg-cover">
      <section className="sectionPadding pt-0 pb_8">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-10 text-center">
              <span
                // data-aos="fade-up"
                className="buttonAnimation yellow inline-block px-4 py-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo"
              >
                Agentic Workflows
              </span>
              <h2
                // data-aos="fade-up"
                className="tracking-[-0.02em] mb-16 lg:leading-[4rem] md:text-5xl font-semibold headingSize lineHeight-1 text-center"
              >
                Every Agent, Built to Perform
              </h2>
            </div>
          </div>
          <div className="container">
            <div className="row tabSection">
              <div className="col-xl-5 col-lg-12 col-md-12">
                <div className="px-md-3 rounded scroll2 right-column hideOnipad">
                  <p className="paraColor subHeading">
                    Your team spends 40% of their time answering repeat
                    questions, chasing status updates, and managing delays.
                    Kogents AI wipes that clean.
                  </p>

                  <div className="d-flex align-items-start mt-2">
                    <div
                      className="nav flex-column nav-pills me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <Link
                        className="nav-link scrollAnchor ps-3"
                        href="#tabScroll1"
                      >
                        WhatsApp AI Agent
                      </Link>
                      <Link
                        className="nav-link scrollAnchor ps-3"
                        href="#tabScroll2"
                      >
                        Phone AI Agent
                      </Link>
                      <Link
                        className="nav-link scrollAnchor ps-3"
                        href="#tabScroll3"
                      >
                        Shopify AI Agent
                      </Link>
                      <Link
                        className="nav-link scrollAnchor ps-3"
                        href="#tabScroll4"
                      >
                        AI Assistant App
                      </Link>
                      <Link
                        className="nav-link scrollAnchor ps-3"
                        href="#tabScroll5"
                      >
                        Voice + Chatbot Agents
                      </Link>
                      <Link
                        className="nav-link scrollAnchor ps-3"
                        href="#tabScroll6"
                      >
                        Standalone AI Agent
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 text-center mt-4">
                    <Link
                      href="javascript:void(0);"
                      className="buttonAnimation2 flex justify-center green items-center gap-2 mt-4 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Demo
                      <Image src="/assets/img/icons/arrow-right.svg" alt="arrow"  width={25} height={25} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-12 col-md-12 text-light">
                <div className="p-4 tabBgbox">
                  <ul
                    className="service-scrollerArea stack-cards js-stack-cards"
                    id="serviceScrollerArea"
                  >
                    {/* Human Resources */}
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll1"
                    >
                      <div className="row rowGap scrollerItem">
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> WhatsApp AI Agent
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Turn Conversations into Revenue on the World’s
                              Most Active Messaging App
                            </h3>
                            <p className="text-white">
                              Your WhatsApp AI Agent replies in real time,
                              detects high-intent behavior, and nurtures
                              customers through every stage of the funnel —
                              without you typing a word.
                            </p>

                            <h3 className="heading1">
                              Fast Answers. Smarter Follow-Ups. Full Coverage.
                            </h3>

                            <p>
                              From product inquiries to payment reminders, this
                              agent handles it all instantly using your
                              knowledge base, ticket history, and real-time
                              business logic.
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image src="/assets/img/iconss.png" alt=""  width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon3.png" alt=""  width={30} height={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Follows up automatically when Shopify agent
                              detects cart abandonment
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Escalates chats to Phone Agent when urgency is
                              high
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Updates CRM after conversations using Standalone
                              Agent logic
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Triggers Voice Agent callbacks for verification or
                              follow-up sales
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Customer Service */}
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll2"
                    >
                      <div className="row rowGap scrollerItem">
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> Phone AI Agent
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Every Call Answered, Routed, and Resolved — No
                              Waiting, No Voicemail
                            </h3>
                            <p className="text-white">
                              With human-sounding voice AI, your phone agent
                              picks up 24/7, handles routine inquiries, books
                              appointments, and transfers complex issues to the
                              right human.
                            </p>

                            <h3 className="heading1">
                              No Missed Opportunities, No Repetition — Just
                              Resolution at Scale
                            </h3>

                            <p>
                              Built to mirror your tone and powered by real
                              data, it brings down hold times and clears up your
                              team’s schedule without sacrificing service
                              quality.
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image src="/assets/img/iconss.png" alt=""  width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon3.png" alt=""  width={30} height={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Connects with WhatsApp Agent to follow up on
                              missed or dropped call
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Books meetings directly into your Google Calendar
                              via Assistant App
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Sends post-call summaries to Standalone Agent for
                              future insights
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Flags high-volume issues to Chatbot Agent for
                              proactive site messaging
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Sales */}
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll3"
                    >
                      <div className="row rowGap scrollerItem">
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> Shopify AI Agent
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              From Cart to Confirmation — This Agent Owns the
                              Post-Sale Journey
                            </h3>
                            <p className="text-white">
                              Whether it’s order status, refund requests, or
                              shipping delays, your Shopify AI Agent handles
                              them instantly by syncing with your store data in
                              real time.
                            </p>

                            <h3 className="heading1">
                              More Orders Completed, Fewer Tickets Created
                            </h3>

                            <p>
                              By resolving customer issues before they ever hit
                              your support team, it not only saves hours — it
                              boosts satisfaction and retention where it matters
                              most.
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image src="/assets/img/iconss.png" alt=""  width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon3.png" alt=""  width={30} height={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Flags abandoned checkouts for WhatsApp Agent to
                              follow up
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Syncs with Voice Agent to resolve high-friction
                              returns
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Surfaces product feedback to Assistant App for
                              on-the-go reviews
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Notifies Chatbot Agent to update product FAQs
                              automatically
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* AI Assistant App */}
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll4"
                    >
                      <div className="row rowGap scrollerItem">
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> AI Assistant App
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              The Smartest Teammate in Your Pocket — Always
                              Ready, Always Synced
                            </h3>
                            <p className="text-white">
                              Whether you’re in the field, remote, or in-store,
                              your Assistant App gives you instant access to
                              internal data, documents, and workflows — using
                              voice or text.
                            </p>

                            <h3 className="heading1">
                              Work Faster, Smarter, and from Anywhere Without
                              Logging Into Anything
                            </h3>

                            <p>
                              This mobile-first agent transforms how you
                              interact with your backend: need a document,
                              insight, or task managed? Just ask — it’s already
                              done.
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image src="/assets/img/iconss.png" alt=""  width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon3.png" alt=""  width={30} height={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Pulls live customer context from Chatbot Agent
                              when updates are needed
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Logs answers from Voice Agent for internal
                              knowledge access
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Adds calendar events triggered by Phone Agent
                              bookings
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Syncs insights from Standalone Agent to update
                              playbooks on the go
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Voice + Chatbot Agents */}
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll5"
                    >
                      <div className="row rowGap scrollerItem">
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> Voice + Chatbot Agents
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Your Always-On Brand Voice, No Matter How People
                              Reach You
                            </h3>
                            <p className="text-white">
                              Whether it’s a voice command or a typed question,
                              this hybrid agent delivers answers that feel
                              human, contextual, and instantly accurate across
                              all channels.
                            </p>

                            <h3 className="heading1">
                              Reduce Human Load, Raise Response Quality — 24/7,
                              Multilingual, Multiplatform
                            </h3>

                            <p>
                              Trained on real conversations and support history,
                              these agents not only talk — they listen, learn,
                              and adapt to every interaction in real time.
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image src="/assets/img/iconss.png" alt=""  width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon3.png" alt=""  width={30} height={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Detects trending questions and signals Assistant
                              App to update support scripts
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Collaborates with Phone Agent to handle
                              language-specific inquiries
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Pushes recurring feedback to Shopify Agent for
                              product improvement
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Syncs resolved tickets with WhatsApp Agent for
                              follow-up or upsell offers
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll6"
                    >
                      <div className="row rowGap scrollerItem">
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> Standalone AI Agent
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Deploy One Link and Deliver Full-Service AI — No
                              Platform Needed
                            </h3>
                            <p className="text-white">
                              Whether you’re running lean or building fast, this
                              browser-based agent handles customer queries,
                              sales, and workflows independently — just plug and
                              launch.
                            </p>

                            <h3 className="heading1">
                              Perfect for Onboarding, Support, Sales, or
                              Internal Use — It Adapts to Your Flow
                            </h3>

                            <p>
                              It learns from each interaction, pulls data from
                              integrated tools, and evolves to support every
                              part of your business with zero dev effort.
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image src="/assets/img/iconss.png" alt=""  width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon3.png" alt=""  width={30} height={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Shares real-time feedback to Chatbot Agent for web
                              knowledge accuracy
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Informs Phone Agent of user preferences before
                              callbacks
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Pushes lead data to WhatsApp Agent for nurturing
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt=""  width={30} height={30} />
                            </div>
                            <p>
                              Feeds insights into Assistant App for mobile
                              access and action
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudySection;
