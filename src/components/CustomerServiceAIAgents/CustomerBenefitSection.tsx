"use client";

import Image from "next/image";
import { useModalStore } from "@/stores/useModalStore";

interface CustomerBenefitSectionProps {
  tag?: string;
  heading?: string;
  description?: string | string[];

  leftColumn: {
    tag: string;
    title: string;
    subtitle: string;
    appStoreImage: string;
    googlePlayImage: string;
  };
  rightColumn: {
    appPreviewImage: string;
    qrCodeImage: string;
    qrCodeText: string;
  };
  backgroundImage?: string;
  buttonText?: string;
  className?: string;
}

const CustomerBenefitSection: React.FC<CustomerBenefitSectionProps> = ({
  className,
  tag,
  heading,
  description,
  leftColumn,
  rightColumn,
  backgroundImage = "/assets/img/bc/video-bg.webp",
  buttonText = "Start AI Support",
}) => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div
      id="benefitsSection"
      className={`paddingOnMobile2 pb-0 bg-center bg-no-repeat bg-cover pt-0 ${className}`}
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col items-center justify-center">
          {/* Legacy support */}
          {tag && heading && (
            <div className="row justify-content-center">
              <div className="col-md-9">
                <span className="buttonAnimation yellow mx-auto d-block w_fit yellow inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                  {tag}
                </span>

                <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                  {heading}
                </h2>

                {description && (
                  <div className="w-75 mb-16 text-center paraColor subHeading mx-auto">
                    {Array.isArray(description) ? (
                      description.map((paragraph, index) => (
                        <p key={index} className="mb-2 last:mb-0">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p>{description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="row appMain rowGap customer">
            {/* Left column */}
            <div className="col-lg-8 col-12 p-md-0 appMainFirst">
              <div className="p-md-5 text-left">
                <span className="buttonAnimation inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                  {leftColumn.tag}
                </span>

                <h2 className="text-light">{leftColumn.title}</h2>
                <p className="text-light mt-2">
                  {leftColumn.subtitle.split("\n").map((line, index) => (
                    <span key={index} className="paraColor">
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <div>
                  <button
                    onClick={openModal}
                    className="buttonAnimation2 mt-4 text-light px-4 open-modal-btn"
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="col-md-4 p-md-0">
              <div>
                <Image
                  className="appImage"
                  src={rightColumn.appPreviewImage}
                  alt="App Preview"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerBenefitSection;
