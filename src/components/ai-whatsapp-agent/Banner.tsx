import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="position-relative sectionPadding bg-center bg-no-repeat bg-cover bg-[url('/assets/img/bc/hero-bgtwo.png')]"
        id="aiBanner"
      >
        <div className="container px-5 mx-auto xl:px-0">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="flex flex-col firstCol">
                <span
                  className="buttonAnimation pink width_fit px-4 py-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo"
                >
                  Agent OS
                </span>

                <h1
                  className="me-auto mt-2 mb-6 headingSize"
                >
                  Transform WhatsApp into a Scalable Customer Service Channel
                </h1>

                <p
                  className="mb-8 paraColor text-base md:text-xl text-w-100"
                >
                  Kogents AI’s WhatsApp Agent empowers businesses to automate
                  and personalize customer interactions at scale — handling
                  support, inquiries, and transactional workflows with speed and
                  consistency.
                </p>

                <a
                  href="javascript:void(0);"
                  className="aiWhatsappBtn pink me-auto buttonAnimation2 flex justify-center items-center gap-2 mb-8 lg:mb-14 px-6 py-[14px] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 open-modal-btn"
                  data-modal-target="#welcomeModal"
                >
                  Request Demo
                  <Image height={25} width={25} src="/assets/img/icons/arrow-right.svg" alt="arrow" />
                </a>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
              <div className="flex flex-col items-center justify-center whatsappBanner">
                <Image
                width={800} height={600}
                  src="/assets/img/ai-whatsapp/whatsapp-banner.webp"
                  alt="brand"
                  className="mx-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
