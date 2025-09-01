"use client"
import Image from "next/image"; // Assuming Next.js Image component
import { WhatsappSectionDataProps } from "../../types";


interface WhatsappSectionData {
  data: WhatsappSectionDataProps;
}

const WhatsappPageSection: React.FC<WhatsappSectionData> = ({ data }) => {
  const {
    sectionTag,
    subtitle,
    heading,
    title,
    subheading,
    description,
    bgImage,
    backgroundImage,
  } = data;

  // Separate cards for WhatsApp and Agent Features if needed
  // But since the cards are merged, you can filter or pass separate arrays if parent sends

  // For demo, let's assume parent passes `whatsappCards` and `agentCards` separately inside data
  const whatsappCards = data.whatsappCards || [];
  const agentCards = data.agentCards || [];

  return (
    <>
      {/* WhatsApp Section */}
      <section
        className="sectionPadding bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
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
                    <Image
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
                      <li key={idx}>{point}</li>
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
                    <Image
                      src="/assets/img/icons/arrow-right.svg"
                      alt="arrow"
                      width={25}
                      height={25}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Features Section */}
      <section
        className="sectionPadding bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        id="agentFeaturesSection"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              {subtitle && (
                <span className="buttonAnimation green width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
                  {subtitle}
                </span>
              )}
              {title && (
                <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                  {title.split(" ").map((word, index, arr) =>
                    index === arr.length - 1 ? (
                      <span key={index} className="inline-block lg:block">
                        {word}
                      </span>
                    ) : (
                      `${word} `
                    )
                  )}
                </h2>
              )}
              {description && (
                <p className="text-light text-center maxWidth39 mx-auto">
                  {description}
                </p>
              )}
            </div>
          </div>

          <div className="row rowGap justify-content-center mt-4">
            {agentCards.map((card, idx) => (
              <div key={idx} className={`col-lg-${card.colLg || 4} col-md-6 col-12`}>
                <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard">
                  {(card.image || card.imageSrc) && (
                    <Image
                      width={800}
                      height={600}
                      src={card.image || card.imageSrc as string}
                      alt={card.title}
                      className={`rounded-lg ${card.imgHeight ? "imgHeight" : ""}`}
                    />
                  )}
                  <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                    {card.title}
                  </h3>
                  <ul className="arrowPointUl">
                    {card.points.map((point, pointIdx) => (
                      <li key={pointIdx}>{point}</li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className={`w_fit buttonAnimation2 ${card.buttonColor} inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn`}
                    data-modal-target="#welcomeModal"
                  >
                    Request Access
                    <Image
                      src="/assets/img/icons/arrow-right.svg"
                      alt="arrow"
                      width={25}
                      height={25}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatsappPageSection;
