"use client";
import React from "react";
import Link from "next/link";
import { useModalStore } from "@/stores/useModalStore";
import Image from "next/image";
import { ArrowRightIcon } from "@/icons";

const AIAgentSection = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <>
      <section
        className="sectionPadding bg-center bg-no-repeat bg-cover newBg desktop-section-show"
        id="aiAgentSection"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <span className="buttonAnimation yellow mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo aos-init aos-animate">
                Case Studies
              </span>
              <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                AI That's Actually Operational
              </h2>
              <p className="maxWidth39 mb-16 text-center paraColor subHeading mx-auto aos-init aos-animate">
                Kogents AI plugs directly into your business — no-code&#44;
                real-time&#44; and trained on your systems. From handling
                1&#44;000+ tickets a day to qualifying leads or syncing
                bookings&#44; our AI agents act like full-time staff across:
              </p>
            </div>
          </div>
          <div className="row rowGap justify-content-center mt-4">
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/whatsapp-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  WhatsApp AI Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Responds instantly using your live knowledge base&#44; so
                    your team isn't stuck replying to repetitive queries.
                  </li>
                  <li>
                    Identifies upgrade or cross-sell opportunities from ticket
                    patterns.
                  </li>
                  <li>
                    Reduces human ticket volume and increases qualified
                    conversions through automated conversations.
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 pink inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/phone-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Phone AI Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Picks up every call 24/7 with voice AI that sounds human —
                    no missed calls&#44; no wait times.
                  </li>
                  <li>
                    Books appointments&#44; routes calls intelligently&#44; and
                    handles FAQs in real time.
                  </li>
                  <li>
                    Frees your team from routine calls so they can focus on
                    high-value issues.
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 green inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/ai-assistant-app.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  AI Assistant App
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Delivers instant answers to mobile or field teams using
                    voice/text — no need to dig through systems.
                  </li>
                  <li>
                    Connects directly to your backend for real-time&#44;
                    accurate responses.
                  </li>
                  <li>
                    Keeps your workforce agile&#44; responsive&#44; and aligned
                    — wherever they are.
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 yellow inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/ai-chatbot-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />

                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  AI Chatbot Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Available 24/7 on your site&#44; with smart responses drawn
                    from your support history.
                  </li>
                  <li>
                    Learns from ongoing customer behavior and flags issues in
                    real time.
                  </li>
                  <li>
                    Increases conversion and lowers human ticket volume by
                    resolving questions instantly.
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/voice-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Voice AI Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Engages in natural&#44; context-aware conversations on
                    calls&#44; trained on your support data.
                  </li>
                  <li>
                    Recognizes and logs recurring issues from voice
                    interactions.
                  </li>
                  <li>
                    Automatically generates and updates knowledge base entries
                    for smarter self-service.
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 pink inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-lg-12 col-md-6 col-12 card_hide_ipadpro">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard newServicesCard1">
                <div className="row rowGap ipad-stack">
                  <div className="col-md-8">
                    <div>
                      <Image loading="lazy"
                        src="/assets/img/home/shopify-ai-agent.webp"
                        alt="case studies"
                        className="rounded-lg"
                        width={800}
                        height={600}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <div>
                        <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                          Shopify AI Agent
                        </h3>
                        <ul className="arrowPointUl">
                          <li>
                            Handles product&#44; order&#44; refund&#44; and
                            shipping queries instantly by pulling live data from
                            your store.
                          </li>
                          <li>
                            Detects customer drop-offs and friction points in
                            the purchase journey.
                          </li>
                          <li>
                            Increases checkout completion rates and improves
                            retention through faster&#44; smarter post-sale
                            support.
                          </li>
                        </ul>
                        <div className="button-center-ipad">
                          <Link
                            href="javascript::void()"
                            className="w_fit buttonAnimation2 green inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                            onClick={openModal}
                          >
                            Request Access
                            <ArrowRightIcon />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/messenger-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Messenger AI Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Answers Facebook DMs using up-to-date product&#44;
                    policy&#44; and order info.
                  </li>
                  <li>
                    Flags high-volume support topics and recurring friction in
                    chat patterns.
                  </li>
                  <li>
                    Boosts customer satisfaction and lead conversion through
                    fast&#44; intelligent engagement.
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 yellow inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/standalone-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Standalone AI Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Works independently in browser or app — no integration
                    needed.
                  </li>
                  <li>Learns from past queries and adapts on the fly.</li>
                  <li>
                    Deploys instantly and scales effortlessly across
                    support&#44; sales&#44; or onboarding.
                  </li>
                </ul>

                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 pink inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/kiosk-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Kiosk AI Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Provides instant answers via touchscreen interfaces at
                    physical locations.
                  </li>
                  <li>
                    Tracks real-world visitor questions and highlights common
                    gaps in service or signage.
                  </li>
                  <li>
                    Improves in-person experience while reducing staff
                    dependency.
                  </li>
                </ul>

                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 green inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="sectionPadding bg-center bg-no-repeat bg-cover newBg ipadpro-section-show aiAgentSection_ipad"
        id="aiAgentSection"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <span className="buttonAnimation mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo aos-init aos-animate">
                Case Studies
              </span>
              <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                Industry Specific Solutions: One Platform&#44; Infinite
                Possibilities!
              </h2>
              <p className="maxWidth39 mb-16 text-center paraColor subHeading mx-auto aos-init aos-animate">
                Ready for some magic? Discover how we're revolutionizing
                industries with a comprehensive platform that does it all. Let's
                turn your challenges into victories. Click below to get started!
              </p>
            </div>
          </div>
          <div className="row rowGap justify-content-center mt-4">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/whatsapp-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  WhatsApp AI Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Instantly deliver answers by linking agents to your
                    knowledge base
                  </li>
                  <li>
                    Detect product upgrade opportunities from recurring ticket
                    trends
                  </li>
                  <li>
                    Automatically generate FAQs using previous ticket
                    resolutions
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/phone-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Phone AI Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Picks up calls&#44; answers FAQs&#44; and books appointments
                    with ease
                  </li>
                  <li>
                    Offers natural&#44; voice-based conversations powered by
                    real data
                  </li>
                  <li>
                    Helps reduce wait times and frees up your human team for
                    tougher calls
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/ai-assistant-app.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  AI Assistant App
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Let users find answers just by typing or speaking a question
                  </li>
                  <li>
                    Easily connects to your backend to provide real-time
                    responses
                  </li>
                  <li>
                    Perfect for field reps&#44; remote workers&#44; or on-the-go
                    teams
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/ai-chatbot-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />

                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  AI Chatbot Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Chats with customers 24/7&#44; pulling instant answers from
                    your knowledge base
                  </li>
                  <li>
                    Spot patterns in support tickets to flag common issues or
                    improvement areas
                  </li>
                  <li>
                    Automatically builds a living FAQ from past conversations
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/voice-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />

                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Voice AI Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>Responds to voice queries with clarity and context</li>
                  <li>
                    Flags recurring problems based on call logs and patterns
                  </li>
                  <li>
                    Turns resolved voice support cases into quick-access FAQ
                    entries
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-lg-12 col-md-6 col-sm-6 card_hide_ipadpro">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard newServicesCard1">
                <div className="row rowGap ipad-stack">
                  <div className="col-md-8">
                    <div>
                      <Image loading="lazy"
                        src="/assets/img/home/shopify-ai-agent.webp"
                        alt="case studies"
                        className="rounded-lg"
                        width={800}
                        height={600}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <div>
                        <h3 className="mb-6 text-2xl font-medium text-w-500">
                          Shopify AI Agent
                        </h3>
                        <ul className="arrowPointUl">
                          <li>
                            Instantly answers product&#44; order&#44; and
                            shipping questions from your Shopify catalog
                          </li>
                          <li>
                            Detects where customers get stuck and what needs
                            fixing
                          </li>
                          <li>
                            Creates automated FAQs from completed customer
                            service chats and returns
                          </li>
                        </ul>
                        <div className="button-center-ipad">
                          <Link
                            href="javascript::void()"
                            className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                            onClick={openModal}
                          >
                            Request Access
                            <ArrowRightIcon />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/messenger-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Messenger AI Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Responds instantly on Facebook Messenger using your live
                    knowledge base
                  </li>
                  <li>
                    Spot patterns in customer chats to highlight recurring
                    issues
                  </li>
                  <li>
                    Builds smart FAQs by learning from your message history
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/standalone-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Standalone AI Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Works independently to answer customer questions in
                    real-time
                  </li>
                  <li>
                    Monitors support trends to recommend product or service
                    tweaks
                  </li>
                  <li>
                    Learns from past tickets to keep your FAQs fresh and
                    relevant
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/home/kiosk-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Kiosk AI Agent
                </h3>
                <ul className="arrowPointUl">
                  <li>
                    Provides quick answers to visitors via interactive
                    touchscreen kiosks
                  </li>
                  <li>
                    Analyzes in-store queries to uncover service gaps or
                    friction points
                  </li>
                  <li>
                    Automatically updates FAQs based on real-world customer
                    interactions
                  </li>
                </ul>
                <Link
                  href="javascript::void()"
                  className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  onClick={openModal}
                >
                  Request Access
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-6 col-12 card_showhide_desktop">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard newServicesCard1">
                <div className="row rowGap ipad-stack">
                  <div className="col-md-8">
                    <div>
                      <Image loading="lazy"
                        src="/assets/img/home/shopify-ai-agent.webp"
                        alt="case studies"
                        className="rounded-lg"
                        width={800}
                        height={600}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <div>
                        <h3 className="mb-6 text-2xl font-medium text-w-500">
                          Shopify AI Agent
                        </h3>
                        <ul className="arrowPointUl">
                          <li>
                            Instantly answers product&#44; order&#44; and
                            shipping questions from your Shopify catalog
                          </li>
                          <li>
                            Detects where customers get stuck and what needs
                            fixing
                          </li>
                          <li>
                            Creates automated FAQs from completed customer
                            service chats and returns
                          </li>
                        </ul>
                        <div className="button-center-ipad">
                          <Link
                            href="javascript::void()"
                            className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                            onClick={openModal}
                          >
                            Request Access
                            <ArrowRightIcon />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIAgentSection;
