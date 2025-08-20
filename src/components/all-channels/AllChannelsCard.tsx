import Image from "next/image";
import React from "react";

const AllChannelsCard = () => {
  return (
    <>
      <section className="sectionPadding bg-center lg:py-24 py-8 bg-center bg-no-repeat bg-cover bg-[url('img/bc/FAQ-bg.png')] faq-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <span className="buttonAnimation width_fit d-block green px-4 py-2 mb-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo mx-auto">
                Find By Industry
              </span>
              <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                Find An Agent According To The Industry You Work In
              </h2>
              <p className="mb-8 paraColor text-base md:text-xl text-w-100 text-center">
                Whether insurance, property management or a broad BPO
                requirement, find the agent you need according to the work your
                business does.
              </p>
            </div>
          </div>
          <div className="row rowGap justify-content-center mt-4" id="channels">
            <div className="col-md-3">
              <div className="solutionFaq">
                <ul
                  className="faqUl line nav-pills custom-tabs"
                  id="industries-tabs"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkChannel"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkChannel"
                      >
                        Channel
                      </label>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkIntegrations"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkIntegrations"
                      >
                        Integrations
                      </label>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkLLM"
                      />
                      <label className="form-check-label" htmlFor="checkLLM">
                        LLM
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-9">
              {/* Channel Tab */}
              <div className="service-item channel" id="tabChannel">
                {/* REPEAT CARD STRUCTURE */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light">
                    <Image
                    width={25}
                    height={25}
                      src="/assets/img/icons/whatsapp.svg"
                      alt="WhatsApp"
                    />
                    <h3 className="mt-2 mb-6 text-2xl font-medium text-w-500">
                      Whatsapp
                    </h3>
                    <p>
                      Trigger backend workflows or business logic instantly from
                      AI conversations using event-driven Lambda functions — no
                      servers needed.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Access
                      <Image
                      width={25}
                      height={25}
                        src="/assets/img/icons/arrow-right.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light">
                    <Image
                    width={25}
                    height={25}
                      src="/assets/img/icons/instagram1.svg"
                      alt="Instagram"
                    />
                    <h3 className="mt-2 mb-6 text-2xl font-medium text-w-500">
                      Instagram Agent
                    </h3>
                    <p>
                      Store, retrieve, or serve media and data assets like
                      documents, receipts, or reports during AI-powered
                      interactions, securely from S3 buckets.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Access
                      <Image
                      width={25}
                      height={25}
                        src="/assets/img/icons/arrow-right.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light">
                    <Image
                    width={25}
                    height={25}
                      src="/assets/img/icons/messenger.svg"
                      alt="Messenger"
                    />
                    <h3 className="mt-2 mb-6 text-2xl font-medium text-w-500">
                      Messenger Agent
                    </h3>
                    <p>
                      Provide real-time shipment tracking updates and logistics
                      status to customers directly within your agent chat flow.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Access
                      <Image
                      width={25}
                      height={25}
                        src="/assets/img/icons/arrow-right.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light">
                    <Image
                    width={25}
                    height={25}
                      src="/assets/img/icons/shopify.svg"
                      alt="Shopify"
                    />
                    <h3 className="mt-2 mb-6 text-2xl font-medium text-w-500">
                      Shopify Agent
                    </h3>
                    <p>
                      Auto-create, update, or complete Asana tasks from customer
                      requests or internal triggers handled by AI agents.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Access
                      <Image
                      width={25}
                      height={25}
                        src="/assets/img/icons/arrow-right.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light">
                    <Image
                    width={25}
                    height={25}
                      src="/assets/img/icons/hubspot.svg"
                      alt="HubSpot"
                    />
                    <h3 className="mt-2 mb-6 text-2xl font-medium text-w-500">
                      Hubspot
                    </h3>
                    <p>
                      This integration enables your bot to seamlessly interact
                      with Instagram, allowing you to harness the power of
                      social media in your conversational AI experiences.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Access
                      <Image
                      width={25}
                      height={25}
                        src="/assets/img/icons/arrow-right.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light">
                    <Image
                    width={25}
                    height={25}
                      src="/assets/img/icons/zdesk-icon2.webp"
                      alt="Zendesk"
                    />
                    <h3 className="mt-2 mb-6 text-2xl font-medium text-w-500">
                      Zendesk
                    </h3>
                    <p>
                      This integration enables your bot to seamlessly interact
                      with Instagram, allowing you to harness the power of
                      social media in your conversational AI experiences.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Access
                      <Image
                      width={25}
                      height={25}
                        src="/assets/img/icons/arrow-right.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light">
                    <Image
                    width={25}
                    height={25}
                      src="/assets/img/icons/jira.svg"
                      alt="Jira"
                    />
                    <h3 className="mt-2 mb-6 text-2xl font-medium text-w-500">
                      Jira
                    </h3>
                    <p>
                      This integration enables your bot to seamlessly interact
                      with Instagram, allowing you to harness the power of
                      social media in your conversational AI experiences.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Access
                      <Image
                      width={25}
                      height={25}
                        src="/assets/img/icons/arrow-right.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light">
                    <Image
                    width={25}
                    height={25}
                      src="/assets/img/icons/calendly.png"
                      alt="Calendly"
                    />
                    <h3 className="mt-2 mb-6 text-2xl font-medium text-w-500">
                      Calendly
                    </h3>
                    <p>
                      This integration enables your bot to seamlessly interact
                      with Instagram, allowing you to harness the power of
                      social media in your conversational AI experiences.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Access
                      <Image
                      width={25}
                      height={25}
                        src="/assets/img/icons/arrow-right.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light">
                    <Image
                    width={25}
                    height={25}
                      src="/assets/img/icons/openai.png"
                      alt="OpenAI"
                    />
                    <h3 className="mt-2 mb-6 text-2xl font-medium text-w-500">
                      OpenAI
                    </h3>
                    <p>
                      This integration enables your bot to seamlessly interact
                      with Instagram, allowing you to harness the power of
                      social media in your conversational AI experiences.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Access
                      <Image
                      width={25}
                      height={25}
                        src="/assets/img/icons/arrow-right.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light">
                    <Image
                    width={25}
                    height={25}
                      src="/assets/img/icons/anthropic.png"
                      alt="Anthropic"
                    />
                    <h3 className="mt-2 mb-6 text-2xl font-medium text-w-500">
                      Anthropic
                    </h3>
                    <p>
                      This integration enables your bot to seamlessly interact
                      with Instagram, allowing you to harness the power of
                      social media in your conversational AI experiences.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Access
                      <Image
                      width={25}
                      height={25}
                        src="/assets/img/icons/arrow-right.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light">
                    <Image
                    width={25}
                    height={25}
                      src="/assets/img/icons/groq.png"
                      alt="Groq"
                    />
                    <h3 className="mt-2 mb-6 text-2xl font-medium text-w-500">
                      Groq
                    </h3>
                    <p>
                      This integration enables your bot to seamlessly interact
                      with Instagram, allowing you to harness the power of
                      social media in your conversational AI experiences.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Access
                      <Image
                      width={25}
                      height={25}
                        src="/assets/img/icons/arrow-right.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light">
                    <Image
                    width={25}
                    height={25}
                      src="/assets/img/icons/hugging-face.svg"
                      alt="Hugging Face"
                    />
                    <h3 className="mt-2 mb-6 text-2xl font-medium text-w-500">
                      Hugging face
                    </h3>
                    <p>
                      This integration enables your bot to seamlessly interact
                      with Instagram, allowing you to harness the power of
                      social media in your conversational AI experiences.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Access
                      <Image
                        width={25}
                        height={25}
                        src="/assets/img/icons/arrow-right.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Integrations Tab */}
              {/* <div className="service-item integrations" id="tabIntegrations"> */}

              {/* </div> */}

              {/* LLM Tab */}
              {/* <div className="service-item llm" id="tabLLM"> */}

              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllChannelsCard;
