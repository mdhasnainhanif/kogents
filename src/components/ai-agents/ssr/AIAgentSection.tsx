import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AIAgentSection = () => {
  return (
    <>
      {/* Desktop section */}
      <section
        className="sectionPadding bg-center bg-no-repeat bg-cover newBg desktop-section-show"
        id="aiAgentSection"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <span className="buttonAnimation yellow mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo aos-init aos-animate">
                Case Studies
              </span>
              <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                AI That’s Actually Operational
              </h2>
            </div>
          </div>

          <div className="row rowGap justify-content-center mt-4">
            {/* WhatsApp AI Agent */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image
                  src="/assets/img/home/whatsapp-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  WhatsApp AI Agent
                </h3>
                <p className="text-light mb-0">
                  Captures leads instantly and routes support queries with context.
                </p>
                <ul className="arrowPointUl">
                  <li> Reduces response time by 80%</li>
                </ul>
                <Link
                  href="#"
                  className="w_fit buttonAnimation2 pink inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  data-modal-target="#welcomeModal"
                >
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            {/* Phone AI Agent */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image
                  src="/assets/img/home/phone-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Phone AI Agent
                </h3>
                <p className="text-light mb-0">
                  Answers calls, books meetings, and syncs to your CRM in real time.
                </p>
                <ul className="arrowPointUl">
                  <li>No more missed calls or manual logging</li>
                </ul>
                <Link
                  href="#"
                  className="w_fit buttonAnimation2 green inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  data-modal-target="#welcomeModal"
                >
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            {/* Chatbot & Messenger Agents */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image
                  src="/assets/img/home/ai-assistant-app.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Chatbot &amp; Messenger Agents
                </h3>
                <p className="text-light mb-0">
                  24/7 web and social messaging that feels human — not scripted.
                </p>
                <ul className="arrowPointUl">
                  <li>Converts questions into qualified conversations</li>
                </ul>
                <Link
                  href="#"
                  className="w_fit buttonAnimation2 yellow inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  data-modal-target="#welcomeModal"
                >
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            {/* The rest stays as-is */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image
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
                    Chats with customers 24/7, pulling instant answers from your support history.
                  </li>
                  <li> Learns from ongoing customer behavior and flags issues in real time.</li>
                  <li> Increases conversion and lowers human ticket volume by resolving questions instantly.</li>
                </ul>
                <Link
                  href="#"
                  className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  data-modal-target="#welcomeModal"
                >
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image
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
                  <li>Engages in natural, context-aware conversations on calls, trained on your support data.</li>
                  <li>Recognizes and logs recurring issues from voice interactions.</li>
                  <li>Automatically generates and updates knowledge base entries for smarter self-service.</li>
                </ul>
                <Link
                  href="#"
                  className="w_fit buttonAnimation2 pink inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  data-modal-target="#welcomeModal"
                >
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-6 col-12 card_hide_ipadpro">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard newServicesCard1">
                <div className="row rowGap ipad-stack">
                  <div className="col-md-8">
                    <div>
                      <Image
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
                        <h3 className="mb-6 text-2xl font-medium text-w-500">Shopify AI Agent</h3>
                        <ul className="arrowPointUl">
                          <li>
                            Instantly answers product, order, and shipping questions from your Shopify catalog
                          </li>
                          <li>Detects where customers get stuck and what needs fixing</li>
                          <li>Creates automated FAQs from completed customer service chats and returns</li>
                        </ul>
                        <div className="button-center-ipad">
                          <Link
                            href="#"
                            className="w_fit buttonAnimation2 green inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                            data-modal-target="#welcomeModal"
                          >
                            Request Access
                            <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
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
                <Image
                  src="/assets/img/home/messenger-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">Messenger AI Agent</h3>
                <ul className="arrowPointUl">
                  <li>Responds instantly on Facebook Messenger using your live knowledge base</li>
                  <li>Spot patterns in customer chats to highlight recurring issues</li>
                  <li>Builds smart FAQs by learning from your message history</li>
                </ul>
                <Link
                  href="#"
                  className="w_fit buttonAnimation2 yellow inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  data-modal-target="#welcomeModal"
                >
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image
                  src="/assets/img/home/standalone-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">Standalone AI Agent</h3>
                <ul className="arrowPointUl">
                  <li>Works independently to answer customer questions in real-time</li>
                  <li>Monitors support trends to recommend product or service tweaks</li>
                  <li>Learns from past tickets to keep your FAQs fresh and relevant</li>
                </ul>
                <Link
                  href="#"
                  className="w_fit buttonAnimation2 pink inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  data-modal-target="#welcomeModal"
                >
                  Request Access
                  <Image src="/assets//img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image
                  src="/assets/img/home/kiosk-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">Kiosk AI Agent</h3>
                <ul className="arrowPointUl">
                  <li>Provides quick answers to visitors via interactive touchscreen kiosks</li>
                  <li>Analyzes in-store queries to uncover service gaps or friction points</li>
                  <li>Automatically updates FAQs based on real-world customer interactions</li>
                </ul>
                <Link
                  href="#"
                  className="w_fit buttonAnimation2 green inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  data-modal-target="#welcomeModal"
                >
                  Request Access
                  <Image src="/assets//img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iPad/Responsive section */}
      <section
        className="sectionPadding bg-center bg-no-repeat bg-cover newBg ipadpro-section-show aiAgentSection_ipad"
        id="aiAgentSection"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <span className="buttonAnimation mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo aos-init aos-animate">
                Case Studies
              </span>
              <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                Industry Specific Solutions: One Platform, Infinite Possibilities!
              </h2>
              <p className="maxWidth39 mb-16 text-center paraColor subHeading mx-auto aos-init aos-animate">
                Ready for some magic? Discover how we’re revolutionizing industries with a
                comprehensive platform that does it all. Let’s turn your challenges into victories.
                Click below to get started!
              </p>
            </div>
          </div>

          <div className="row rowGap justify-content-center mt-4">
            {/* WhatsApp AI Agent */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image src="/assets/img/home/whatsapp-ai-agent.webp" alt="case studies" className="rounded-lg" width={800} height={600} />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">WhatsApp AI Agent</h3>
                <ul className="arrowPointUl">
                  <li>Instantly deliver answers by linking agents to your knowledge base</li>
                  <li>Detect product upgrade opportunities from recurring ticket trends</li>
                  <li>Automatically generate FAQs using previous ticket resolutions</li>
                </ul>
                <Link href="#" className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn" data-modal-target="#welcomeModal">
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            {/* Phone AI Agent */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image src="/assets/img/home/phone-ai-agent.webp" alt="case studies" className="rounded-lg" width={800} height={600} />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">Phone AI Agent</h3>
                <ul className="arrowPointUl">
                  <li>Picks up calls, answers FAQs, and books appointments with ease</li>
                  <li>Offers natural, voice-based conversations powered by real data</li>
                  <li>Helps reduce wait times and frees up your human team for tougher calls</li>
                </ul>
                <Link href="#" className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn" data-modal-target="#welcomeModal">
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            {/* AI Assistant App */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image src="/assets/img/home/ai-assistant-app.webp" alt="case studies" className="rounded-lg" width={800} height={600} />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">AI Assistant App</h3>
                <ul className="arrowPointUl">
                  <li>Let users find answers just by typing or speaking a question</li>
                  <li>Easily connects to your backend to provide real-time responses</li>
                  <li>Perfect for field reps, remote workers, or on-the-go teams</li>
                </ul>
                <Link href="#" className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn" data-modal-target="#welcomeModal">
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            {/* AI Chatbot Agent */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image src="/assets/img/home/ai-chatbot-agent.webp" alt="case studies" className="rounded-lg" width={800} height={600} />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">AI Chatbot Agent</h3>
                <ul className="arrowPointUl">
                  <li>Chats with customers 24/7, pulling instant answers from your knowledge base</li>
                  <li>Spot patterns in support tickets to flag common issues or improvement areas</li>
                  <li>Automatically builds a living FAQ from past conversations</li>
                </ul>
                <Link href="#" className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn" data-modal-target="#welcomeModal">
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            {/* Voice AI Agent */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image src="/assets/img/home/voice-ai-agent.webp" alt="case studies" className="rounded-lg" width={800} height={600} />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">Voice AI Agent</h3>
                <ul className="arrowPointUl">
                  <li>Responds to voice queries with clarity and context</li>
                  <li>Flags recurring problems based on call logs and patterns</li>
                  <li>Turns resolved voice support cases into quick-access FAQ entries</li>
                </ul>
                <Link href="#" className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn" data-modal-target="#welcomeModal">
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            {/* Shopify AI Agent (two variants: hide on ipad, show on desktop) */}
            <div className="col-lg-12 col-md-6 col-sm-6 card_hide_ipadpro">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard newServicesCard1">
                <div className="row rowGap ipad-stack">
                  <div className="col-md-8">
                    <div>
                      <Image src="/assets/img/home/shopify-ai-agent.webp" alt="case studies" className="rounded-lg" width={800} height={600} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <h3 className="mb-6 text-2xl font-medium text-w-500">Shopify AI Agent</h3>
                      <ul className="arrowPointUl">
                        <li>Instantly answers product, order, and shipping questions from your Shopify catalog</li>
                        <li>Detects where customers get stuck and what needs fixing</li>
                        <li>Creates automated FAQs from completed customer service chats and returns</li>
                      </ul>
                      <div className="button-center-ipad">
                        <Link href="#" className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn" data-modal-target="#welcomeModal">
                          Request Access
                          <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Messenger AI Agent */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image src="/assets/img/home/messenger-ai-agent.webp" alt="case studies" className="rounded-lg" width={800} height={600} />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">Messenger AI Agent</h3>
                <ul className="arrowPointUl">
                  <li>Responds instantly on Facebook Messenger using your live knowledge base</li>
                  <li>Spot patterns in customer chats to highlight recurring issues</li>
                  <li>Builds smart FAQs by learning from your message history</li>
                </ul>
                <Link href="#" className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn" data-modal-target="#welcomeModal">
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            {/* Standalone AI Agent */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image src="/assets/img/home/standalone-ai-agent.webp" alt="case studies" className="rounded-lg" width={800} height={600} />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">Standalone AI Agent</h3>
                <ul className="arrowPointUl">
                  <li>Works independently to answer customer questions in real-time</li>
                  <li>Monitors support trends to recommend product or service tweaks</li>
                  <li>Learns from past tickets to keep your FAQs fresh and relevant</li>
                </ul>
                <Link href="#" className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn" data-modal-target="#welcomeModal">
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            {/* Kiosk AI Agent */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image src="/assets/img/home/kiosk-ai-agent.webp" alt="case studies" className="rounded-lg" width={800} height={600} />
                <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">Kiosk AI Agent</h3>
                <ul className="arrowPointUl">
                  <li>Provides quick answers to visitors via interactive touchscreen kiosks</li>
                  <li>Analyzes in-store queries to uncover service gaps or friction points</li>
                  <li>Automatically updates FAQs based on real-world customer interactions</li>
                </ul>
                <Link href="#" className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn" data-modal-target="#welcomeModal">
                  Request Access
                  <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                </Link>
              </div>
            </div>

            {/* Shopify AI Agent (desktop show variant) */}
            <div className="col-lg-12 col-md-6 col-12 card_showhide_desktop">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard newServicesCard1">
                <div className="row rowGap ipad-stack">
                  <div className="col-md-8">
                    <div>
                      <Image src="/assets/img/home/shopify-ai-agent.webp" alt="case studies" className="rounded-lg" width={800} height={600} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <h3 className="mb-6 text-2xl font-medium text-w-500">Shopify AI Agent</h3>
                      <ul className="arrowPointUl">
                        <li>Instantly answers product, order, and shipping questions from your Shopify catalog</li>
                        <li>Detects where customers get stuck and what needs fixing</li>
                        <li>Creates automated FAQs from completed customer service chats and returns</li>
                      </ul>
                      <div className="button-center-ipad">
                        <Link href="#" className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn" data-modal-target="#welcomeModal">
                          Request Access
                          <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                        </Link>
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
