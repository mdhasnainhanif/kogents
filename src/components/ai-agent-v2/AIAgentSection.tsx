import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/icons";
import Link from "next/link";

const AIAgentSection = () => {
  return (
    <>
      <section
        className="sectionPadding bg-center bg-no-repeat bg-cover newBg"
        id="aiAgentSection"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <span className="buttonAnimation yellow mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo aos-init aos-animate">
                What Kogents AI Does
              </span>
              <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                AI That's Actually Operational
              </h2>
              <p className="maxWidth39 mb-16 text-center paraColor subHeading mx-auto aos-init aos-animate">
                Kogents AI plugs directly into your business, no-code, real-time, and trained on your systems. From handling 1,000+ tickets a day to qualifying leads or syncing bookings, our AI agents act like full-time staff across.
              </p>
            </div>
          </div>
          <div className="row rowGap justify-content-center mt-4">
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                {/* WhatsApp Chat Mockup */}
                {/* <div className="chat-mockup-container" style={{
                  width: '100%',
                  height: '300px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px'
                }}>
                  <div className="service-phone-mockup" style={{ 
                    width: '280px', 
                    height: '260px', 
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    borderRadius: '20px',
                    padding: '12px',
                    boxShadow: '0 15px 35px rgba(37, 211, 102, 0.3)',
                    position: 'relative'
                  }}>
                    <div className="phone-screen" style={{
                      background: '#ffffff',
                      borderRadius: '15px',
                      height: '100%',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <div className="phone-header" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '16px',
                        paddingBottom: '12px',
                        borderBottom: '1px solid #f0f0f0'
                      }}>
                        <div style={{
                          width: '30px',
                          height: '30px',
                          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '16px'
                        }}>💬</div>
                        <span style={{ fontWeight: '600', color: '#333', fontSize: '14px' }}>AI Assistant</span>
                      </div>
                      <div className="phone-messages" style={{ 
                        flex: 1, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '10px',
                        justifyContent: 'center'
                      }}>
                        <div className="phone-message" style={{
                          background: '#f8f9fa',
                          padding: '10px 14px',
                          borderRadius: '15px 15px 15px 4px',
                          color: '#333',
                          fontSize: '12px',
                          maxWidth: '80%',
                          fontWeight: '500'
                        }}>Hello! How can I help?</div>
                        <div className="phone-message user-msg" style={{
                          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                          padding: '10px 14px',
                          borderRadius: '15px 15px 4px 15px',
                          color: 'white',
                          fontSize: '12px',
                          maxWidth: '80%',
                          alignSelf: 'flex-end',
                          fontWeight: '500'
                        }}>I need support</div>
                        <div className="phone-message" style={{
                          background: '#f8f9fa',
                          padding: '10px 14px',
                          borderRadius: '15px 15px 15px 4px',
                          color: '#333',
                          fontSize: '12px',
                          maxWidth: '80%',
                          fontWeight: '500'
                        }}>I'm here to assist you...</div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <Image loading="lazy"
                  src="/assets/img/ai-agent/whatsapp-ai-agent.webp"
                  alt="WhatsApp AI Agent"
                  className="rounded-lg"
                  width={400}
                  height={300}
                />
                <Link href="/platforms/whatsapp-ai-agent" className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  WhatsApp
                </Link>
                <ul className="arrowPointUl">
                  <li>
                  Market and sell products on WhatsApp. Utilize AI for personalized conversation and grow your business with BotPenguin’s chatbot maker.
                  </li>
                </ul>
                <Link
                  href="/chatbot/briefv2"
                  className="w_fit buttonAnimation2 pink inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/ai-agent/instagram-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={400}
                  height={300}
                />
                <Link href="/platforms/calendly-ai-integration" className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Facebook
                </Link>
                <ul className="arrowPointUl">
                  <li>
                  Serve your customers on Facebook, 24x7. Enhance user experience with the best customer support ever.
                  </li>
                </ul>
                <Link

                  className="w_fit buttonAnimation2 green inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo "
                  href="/chatbot/briefv2"
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/ai-agent/zendesk-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={400}
                  height={300}
                />
                <Link href="/platforms/hubspot-ai-integration" className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Telegram
                </Link>
                <ul className="arrowPointUl">
                  <li>
                  Run our Telegram chatbot to create your own custom chatbot tailored to your interests.
                  </li>
                </ul>
                <Link

                  className="w_fit buttonAnimation2 yellow inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo "
                  href="/chatbot/briefv2"
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image
                  src="/assets/img/ai-agent/whatsapp-ai-agent.webp"
                  alt="WhatsApp AI Agent"
                  className="rounded-lg"
                  width={400}
                  height={300}
                  priority
                />
                <Link href="/platforms/whatsapp-ai-agent" className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Instagram
                </Link>
                <ul className="arrowPointUl">
                  <li>
                  Sell products directly through Instagram and automate replies to messages, stories, and comments to enhance user experience.
                  </li>
                </ul>
                <Link
                  href="/chatbot/briefv2"
                  className="w_fit buttonAnimation2 pink inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/ai-agent/instagram-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={400}
                  height={300}
                />
                <Link href="/platforms/calendly-ai-integration" className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  Website
                </Link>
                <ul className="arrowPointUl">
                  <li>
                  Simplify lead generation, appointment booking, product marketing, and more with our multifunctional chatbot maker.
                  </li>
                </ul>
                <Link

                  className="w_fit buttonAnimation2 green inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo "
                  href="/chatbot/briefv2"
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image loading="lazy"
                  src="/assets/img/ai-agent/zendesk-ai-agent.webp"
                  alt="case studies"
                  className="rounded-lg"
                  width={400}
                  height={300}
                />
                <Link href="/platforms/hubspot-ai-integration" className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  MS Teams
                </Link>
                <ul className="arrowPointUl">
                  <li>
                  Use MS Teams AI chatbot for smooth collaboration, task automation, and FAQ handling.
                  </li>
                </ul>
                <Link

                  className="w_fit buttonAnimation2 yellow inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo "
                  href="/chatbot/briefv2"
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </Link>
              </div>
            </div>
            {/* <div className="col-lg-12 col-md-6 col-12 card_hide_ipadpro">
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard newServicesCard1">
                <div className="row rowGap ipad-stack">
                  <div className="col-md-8">
                    <div>
                      <Image loading="lazy"
                        src="/assets/img/ai-agent/chat-bot.webp"
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
                        <Link href="/platforms/shopify-ai-agent" className="mt-8 mb-6 text-2xl font-medium text-w-500">
                          Shopify AI Agent
                        </Link>
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

                            className="w_fit buttonAnimation2 green inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo "
                            href="/chatbot/briefv2"
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AIAgentSection;
