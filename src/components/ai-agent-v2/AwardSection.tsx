import { ArrowRightIcon } from "@/icons";
import React from "react";

const AwardSection = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={`sectionPadding pt-0  ${className}`}>
        <div className="text-center mb-0 container">
        <div className="row justify-content-center">
            <div className="col-md-6">
              <span className="buttonAnimation yellow mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo aos-init aos-animate">
                Integrations
              </span>
              <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
              Integrate with your favorite applications and configure for a seamless experience
              </h2>
              <p className="maxWidth39 mb-16 text-center paraColor mt125 subHeading mx-auto aos-init aos-animate">
              Enjoy our 80+ native integrations. Whether it’s CRMs, appointment schedulers or Analytics, we’ve got it all covered. Send data from your AI chatbot to your CRMs and other tools and vice versa.
              </p>
            </div>
          </div>
        </div>
        <div className={`container`}>
          <div className="row rowGap2 justify-content-center">
            <div className="col-lg-10 row rowGap3 mt-5"> 
            {className === "awardSectionFooter" ? (
              <>
                <div className="col-md-6 flexMobile">
                  <img
                    width={140}
                    height={24}
                    src="/assets/img/ai-agent-v2/1.svg"
                    alt="brand logo"
                  />
                  <img
                    width={140}
                    height={24}
                    src="/assets/img/ai-agent-v2/2.svg"
                    alt="brand logo"
                  />
                </div>
                <div className="col-md-6 flexMobile">
                  <img
                    width={140}
                    height={24}
                    src="/assets/img/ai-agent-v2/3.svg"
                    alt="brand logo"
                  />
                  <img
                    width={140}
                    height={24}
                    src="/assets/img/ai-agent-v2/4.svg"
                    alt="brand logo"
                  />
                </div>
              </>
            ) : (
                <>
              <div className="col-lg-2 col-6 newAwardSection d-flex gap-12 flex-wrap justify-content-center align-items-center">
                <img
                  width={140}
                  height={24}
                  src="/assets/img/ai-agent-v2/1.svg"
                  alt="brand logo"
                  className="filterInvert"
                />
                </div>
                <div className="col-lg-2 col-6 newAwardSection d-flex gap-12 flex-wrap justify-content-center align-items-center">
                <img
                  width={140}
                  height={24}
                  src="/assets/img/ai-agent-v2/2.svg"
                  alt="brand logo"
                />
                </div>
                <div className="col-lg-2 col-6 newAwardSection d-flex gap-12 flex-wrap justify-content-center align-items-center">
                <img
                  width={140}
                  height={24}
                  src="/assets/img/ai-agent-v2/3.svg"
                  alt="brand logo"
                />
                </div>
                <div className="col-lg-2 col-6 newAwardSection d-flex gap-12 flex-wrap justify-content-center align-items-center">
                <img
                  width={140}
                  height={24}
                  src="/assets/img/ai-agent-v2/4.svg"
                  alt="brand logo"
                  className="filterInvert"
                />
                </div>
                <div className="col-lg-2 col-6 newAwardSection d-flex gap-12 flex-wrap justify-content-center align-items-center">
                    <img
                  width={140}
                  height={24}
                  src="/assets/img/ai-agent-v2/5.svg"
                  alt="brand logo"
                />
                </div>
                <div className="col-lg-2 col-6 newAwardSection d-flex gap-12 flex-wrap justify-content-center align-items-center">
                <img
                  width={140}
                  height={24}
                  src="/assets/img/ai-agent-v2/6.svg"
                  alt="brand logo"
                />
                </div>
                <div className="col-lg-2 col-6 newAwardSection d-flex gap-12 flex-wrap justify-content-center align-items-center">
                <img
                  width={140}
                  height={24}
                  src="/assets/img/ai-agent-v2/7.svg"
                  alt="brand logo"
                />
                </div>
                <div className="col-lg-2 col-6 newAwardSection d-flex gap-12 flex-wrap justify-content-center align-items-center">
                <img
                  width={140}
                  height={24}
                  src="/assets/img/ai-agent-v2/8.svg"
                  alt="brand logo"
                />
                </div>
                <div className="col-lg-2 col-6 newAwardSection d-flex gap-12 flex-wrap justify-content-center align-items-center">
                <img
                  width={140}
                  height={24}
                  src="/assets/img/ai-agent-v2/9.svg"
                  alt="brand logo"
                />
                </div>
                <div className="col-lg-2 col-6 newAwardSection d-flex gap-12 flex-wrap justify-content-center align-items-center">
                <img
                  width={140}
                  height={24}
                  src="/assets/img/ai-agent-v2/10.svg"
                  alt="brand logo"
                />
                </div>
                <div className="col-lg-2 col-6 newAwardSection d-flex gap-12 flex-wrap justify-content-center align-items-center">
                <img
                  width={140}
                  height={24}
                  src="/assets/img/ai-agent-v2/11.svg"
                  alt="brand logo"
                  className="filterInvert"
                />
                </div>
                <div className="col-lg-2 col-6 newAwardSection d-flex gap-12 flex-wrap justify-content-center align-items-center">
                <img
                  width={140}
                  height={24}
                  src="/assets/img/ai-agent-v2/12.svg"
                  alt="brand logo"
                />
                </div>
                </>
            )}
            </div>
          </div>
          <div>
            <button className="buttonAnimation2 mt-5 mx-auto d-block newOrBtn flex justify-center items-center gap-2 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit open-modal-btn">
                View All Integrations
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardSection;
