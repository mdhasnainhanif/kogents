"use client"
import Image from "next/image";
import { WhatsappSectionDataProps } from "../../types";
import { ArrowRightIcon } from "@/icons";
import { useModalStore } from "@/stores/useModalStore";
interface WhatsappSectionData {
  data: WhatsappSectionDataProps;
  showButton?: boolean;
  buttonText?: string;
}
const WhatsappPageSection: React.FC<WhatsappSectionData> = ({ data, showButton = false, buttonText = "Explore More Features" }) => {
  const {
    subtitle,
    title,
    description,
    backgroundImage,
  } = data;
  const agentCards = data.agentCards || [];
  const openModal = useModalStore((state) => state.openModal);
  // Debug: log when button is clicked
  const handleOpenModal = () => {
    console.log("WhatsappImagesSection: openModal called");
    openModal();
  };

  return (
    <>
      {/* WhatsApp Section
      <section
        className="mobile-padding-top-0 sectionPadding bg-no-repeat bg-cover"
        id="whatsappIntegrationSection"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-11">
              {sectionTag && (
                <span className="buttonAnimation yellow width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
                  {sectionTag}
                </span>
              )}
              <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                <span className="block">{heading}</span>
              </h2>
              {subheading && (
                <p className="text-light text-base text-center maxWidth39 mx-auto">
                  {subheading}
                </p>
              )}
            </div>
          </div>

          <div className="row rowGap justify-content-center mt-4">
            {whatsappCards.map((card, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className="p-6 border rounded-lg bg-gd-tertiary border-b-600 newServicesCard">
                  {card.imageSrc && (
                    <Image loading="lazy"
                      width={800}
                      height={600}
                      src={card.imageSrc}
                      alt={card.title}
                      className="rounded-lg"
                    />
                  )}

                  <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                    {card.title}
                  </h3>
                  <ul className="arrowPointUl">
                    {card.points.map((point, idx) => (
                      <li key={idx}><p>{point}</p></li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className={`w_fit buttonAnimation2 ${card.buttonColor || "yellow"
                      } inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn`}
                    data-modal-target={card.modalTargetId}
                  >
                    {card.buttonText}
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section
        className="mobile-padding-top-0 sectionPadding bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${backgroundImage}')`, marginTop: '80px' }}
        id="agentFeaturesSection"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              {subtitle && (
                <span className="buttonAnimation green width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
                  {subtitle}
                </span>
              )}
              {title && (
                  <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize w-75 mx-auto">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-light text-center mx-auto">
                  {description}
                </p>
              )}
            </div>
          </div>
          <div className="row rowGap justify-content-center mt-5">
            {agentCards.map((card, idx) => (
              <div key={idx} className={`col-lg-${card.colLg || 4} col-md-6 col-12`}>
                <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard">
                  {(card.image || card.imageSrc) && (
                    <Image loading="lazy"
                      width={800}
                      height={600}
                      src={card.image || card.imageSrc as string}
                      alt={card.title}
                      className={`rounded-lg ${card.imgHeight ? "imgHeight" : ""}`}
                    />
                  )}
                  <h3 className="text-light mt-8 mb-6 text-2xl font-medium text-w-500">
                    {card.title}
                  </h3>
                  <ul className="arrowPointUl">
                    {card.points.map((point, pointIdx) => (
                      <li key={pointIdx}><p className="paraColor">{point}</p></li>
                    ))}
                  </ul>
                  {/* <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className={`w_fit buttonAnimation2 ${card.buttonColor} inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn`}
                    data-modal-target="#welcomeModal"
                  >
                    Request Access
                    <ArrowRightIcon />
                  </a> */}
                </div>
              </div>
            ))}
          </div>
          {showButton && (
            <div className="text-center mt-6">
              <button
                onClick={handleOpenModal}
                className="open-modal-btn w_fit buttonAnimation2 green inline-flex items-center gap-2 text-base font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn">
                {buttonText}
                <ArrowRightIcon />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default WhatsappPageSection;
