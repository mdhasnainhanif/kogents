import Image from "next/image";

interface CustomerBenefitSectionProps {
  tag: string;
  heading: string;
  description: string | string[];
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
}

const CustomerBenefitSection: React.FC<CustomerBenefitSectionProps> = ({
  tag,
  heading,
  description,
  leftColumn,
  rightColumn,
  backgroundImage = "/img/bc/video-bg.webp",
  buttonText = "Start AI Support"
}) => {
  return (
    <div
      id="benefitsSection"
      className="paddingOnMobile2 sectionPadding bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col items-center justify-center">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <span className="buttonAnimation mx-auto d-block w_fit yellow inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                {tag}
              </span>

              <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                {heading}
              </h2>

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
            </div>
          </div>

          <div className="row appMain mt-4 rowGap">
            {/* Left column */}
            <div className="col-md-7 p-md-0 appMainFirst">
              <div className="p-md-5">
                <span className="buttonAnimation inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                  {leftColumn.tag}
                </span>

                <h2 className="text-light mt-2">{leftColumn.title}</h2>
                <p className="text-light">
                  {leftColumn.subtitle}
                </p>
                <div>
                  <button className="buttonAnimation2 mt-4 text-light px-4">
                    {buttonText}
                  </button>
                </div>
                {/* <div
                  className="d-flex align-items-center gap-3 mt-2 position-relative flex-md-nowrap flex-wrap appstoreMain"
                  style={{ width: "100%" }}
                >
                  <Image
                    width={160}
                    src={leftColumn.appStoreImage}
                    alt="App Store"
                    height={600}
                  />
                  <Image
                    width={160}
                    src={leftColumn.googlePlayImage}
                    alt="Google Play"
                    height={600}
                  />
                </div> */}
              </div>
            </div>

            {/* Right column */}
            <div className="col-md-5 p-md-0">
              <div>
                <Image
                  className="appImage"
                  src={rightColumn.appPreviewImage}
                  alt="App Preview"
                  width={800}
                  height={600}
                />
                <div className="qrCode text-light">
                  <Image
                    src={rightColumn.qrCodeImage}
                    alt="QR Code"
                    width={800}
                    height={600}
                  />
                  <p className="m-0 mt-1">{rightColumn.qrCodeText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerBenefitSection;
