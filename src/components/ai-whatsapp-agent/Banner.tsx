import Image from "next/image";
import React from "react";
import { PlatFarmsBannerProps } from "../../types";

type BannerProps = {
  data: PlatFarmsBannerProps;
};

const Banner: React.FC<BannerProps> = ({ data }) => {
  const {
    tag = "Agent OS",
    title,
    description,
    button,
    image,
    bgImage = "/assets/img/bc/hero-bgtwo.png",
  } = data;

  // Button destructure with safe defaults if object exists
  const {
    text = "Request Demo",
    link,
    onClick,
    iconSrc = "/assets/img/icons/arrow-right.svg",
    modalTarget = "#welcomeModal",
  } = button ?? {};

  // Image destructure with defaults
  const {
    src = "/assets/img/ai-whatsapp/whatsapp-banner.webp",
    alt = "brand",
    width = 800,
    height = 681,
    className = "mx-4",
  } = image ?? {};

  const shouldRenderButton = !!(button && (text || link || onClick));
  const finalHref = link ?? "javascript:void(0);";

  return (
    <div

    className="position-relative sectionPadding bg-center bg-no-repeat bg-cover overflow-hidden"
      id="aiBanner"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="container px-5 mx-auto xl:px-0">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="flex flex-col firstCol">
              <span className="buttonAnimation pink width_fit px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                {tag}
              </span>

              <h1 className="me-auto mt-2 mb-6 headingSize">{title}</h1>

              <p className="mb-8 paraColor text-base md:text-xl text-w-100">
                {description}
              </p>

              {shouldRenderButton && (
                <a
                  href={finalHref}
                  onClick={onClick}
                  className="aiWhatsappBtn pink me-auto buttonAnimation2 flex justify-center items-center gap-2 mb-8 lg:mb-14 px-6 py-[14px] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 open-modal-btn"
                  data-modal-target={modalTarget}
                >
                  {text}
                  <Image height={25} width={25} src={iconSrc} alt="arrow" />
                </a>
              )}
            </div>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <div className="flex flex-col items-center justify-center whatsappBanner">
              <Image
                width={width}
                height={height}
                src={src}
                alt={alt ?? "brand"}
                className={className}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
