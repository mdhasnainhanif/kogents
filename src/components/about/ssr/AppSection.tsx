import Image from "next/image";
import React from "react";


interface AppSectionProps {
  tag?: string;
  heading?: string;
  paragraphs?: string[];
  appTag?: string;
  appTitle?: string;
  appDescription?: string;
  mainImage?: { src: string; alt?: string };
  qrImage?: { src: string; alt?: string };
  qrText?: string;
  buttonText?: string;
}

const AppSection: React.FC<AppSectionProps> = ({
  tag = "Benefits",
  heading = "We’re the Brains Behind the Bots.",
  paragraphs = [
    "We’re not just building automation — we’re redefining how modern businesses communicate.",
    "At Kogents, AI meets execution, and every workflow gets smarter."
  ],
  appTag = "Trusted By Many Clients",
  appTitle = "Kogents AI Agent App",
  appDescription = "Scan or Visit To Download App Now For Free",
  mainImage = { src: "/assets/img/img-new.webp", alt: "App Preview" },
  qrImage = { src: "/assets/img/app-section/5.png", alt: "QR Code" },
  qrText = "Scan Now",
  buttonText = "Get Started with Kogents",
}) => {
  return (
    <div
      className="pt-0 paddingOnMobile2 sectionPadding bg-center bg-no-repeat bg-cover bg-[url('img/bc/video-bg.png')]"
      id="benefitsSection"
    >
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col items-center justify-center">
          <span className="buttonAnimation yellow inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
            {tag}
          </span>
          <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
            {heading}
          </h2>
          {paragraphs.map((p, idx) => (
            <p key={idx} className="w-75 mb-16 text-center paraColor subHeading">
              {p}
            </p>
          ))}

          <div className="row appMain mt-4 rowGap home">
            <div className="col-md-7 p-md-0 appMainFirst">
              <div className="p-md-5">
                <span className="buttonAnimation inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                  {appTag}
                </span>
                <h2 className="text-light mt-2">{appTitle}</h2>
                <p className="text-light mt-3">{appDescription}</p>

                <div
                  className="d-flex align-items-center gap-3 mt-3 position-relative flex-md-nowrap flex-wrap home appstoreMain"
                  style={{ width: "100%" }}
                >
                  <button
                    className="buttonAnimation2 inline-block px-4 py-2 text-sm font-medium capitalize transition-all duration-300 border rounded-full btn-border bg-gd-secondary hover:bg-transparent text-w-900 open-modal-btn"
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-5 p-md-0">
              <div>
                <Image
                  loading="lazy"
                  height={200}
                  width={300}
                  className="appImage home"
                  src={mainImage.src}
                  alt={mainImage.alt || "icon"}
                />
                <div className="qrCode text-light">
                  <Image loading="lazy" height={200} width={250} src={qrImage.src} alt={qrImage.alt || "icon"} />
                  <p className="m-0 mt-1">{qrText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
