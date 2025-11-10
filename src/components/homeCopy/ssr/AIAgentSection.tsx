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
                <Image
                  src="/assets/img/ai-agent/whatsapp-ai-agent.webp"
                  alt="WhatsApp AI Agent"
                  className="rounded-lg"
                  width={400}
                  height={300}
                  priority
                />
                <Link href="/platforms/whatsapp-ai-agent" className="mt-8 mb-6 text-2xl font-medium text-w-500">
                  WhatsApp AI Agent
                </Link>
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
                  Calendly AI Agent
                </Link>
                <ul className="arrowPointUl">
                  <li>
                    Embeds Calendly booking Links directly into AI conversations.
                  </li>
                  <li>
                    Triggers after product inquiries, support needs, or sales interest.
                  </li>
                  <li>
                    Syncs with CRMs to confirm meetings instantly and reduce friction.
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
                  HubSpot AI Agent
                </Link>
                <ul className="arrowPointUl">
                  <li>
                    Captures and syncs lead data from chats directly into HubSpot.
                  </li>
                  <li>
                    Automates follow-ups with workflows for sales and support teams.
                  </li>
                  <li>
                    Provides real-time insights to boost conversions and customer retention.
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
            <div className="col-lg-12 col-md-6 col-12 card_hide_ipadpro">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIAgentSection;
