import React from "react";

const AwardSection = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={`sectionPadding pt-0 ${className}`}>
        <div className="text-center mb-0">
          <span className="buttonAnimation yellow inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo mb-6">
            Listings
          </span>
        </div>
        <div className={`container`}>
          <div className="row">
            {className === "awardSectionFooter" ? (
              <>
                <div className="col-md-6 flexMobile">
                  <img
                    width={140}
                    height={24}
                    src="/assets/img/brand/brand1.svg"
                    alt="brand logo"
                  />
                  <img
                    width={140}
                    height={24}
                    src="/assets/img/brand/brand3.svg"
                    alt="brand logo"
                  />
                </div>
                <div className="col-md-6 flexMobile">
                  <img
                    width={140}
                    height={24}
                    src="/assets/img/brand/brand2.svg"
                    alt="brand logo"
                  />
                  <img
                    width={140}
                    height={24}
                    src="/assets/img/trustpilot11.png"
                    alt="brand logo"
                  />
                </div>
              </>
            ) : (
              <div className="col-lg-12 d-flex gap-12 flex-wrap justify-content-center align-items-center">
                <img
                  width={140}
                  height={24}
                  src="/assets/img/brand/brand1.svg"
                  alt="brand logo"
                />
                <img
                  width={140}
                  height={24}
                  src="/assets/img/brand/brand2.svg"
                  alt="brand logo"
                />
                <img
                  width={140}
                  height={24}
                  src="/assets/img/brand/brand3.svg"
                  alt="brand logo"
                />
                <img
                  width={140}
                  height={24}
                  src="/assets/img/brand/brand4.svg"
                  alt="brand logo"
                />
                <img
                  width={140}
                  height={24}
                  src="/assets/img/brand/brand5.svg"
                  alt="brand logo"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardSection;
