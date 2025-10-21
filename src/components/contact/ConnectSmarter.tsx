import Image from "next/image";
import React from "react";

const ConnectSmarter = () => {
  return (
    <div
      className="pt-0 paddingOnMobile2 sectionPadding bg-center bg-no-repeat bg-cover bg-[url('img/bc/video-bg.png')]"
      id="benefitsSection"
    >
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col items-center justify-center">
          <span
            // 
            className="buttonAnimation yellow inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
          >
            Benefits
          </span>
          <h2
            // 
            className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize"
          >
            Let’s Build Smarter Connections
          </h2>
          <p
            className="w-75 mb-1 text-center paraColor subHeading"
          // 
          >
           Whether you have questions, fresh ideas, or bold ambitions, we’re here to listen. Our team is only a message away and always ready to help you take the next step.
          </p>
          {/* <p
            className="w-75 mb-16 text-center paraColor subHeading"
          // 
          >
            Our team is just one message away — and always ready to help.
          </p> */}

          <div className="row appMain mt-4 rowGap home">
            <div className="col-md-7 p-md-0 appMainFirst">
              <div className="p-md-5">
                <span
                  //   
                  className="buttonAnimation inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
                >
                  Trusted By Many Clients
                </span>
                <h2 className="text-light mt-2">Kogents AI Agent App</h2>
                <p className="text-light mt-3">
                  Scan or Visit To Download App Now For Free
                </p>

                <div
                  className="d-flex align-items-center gap-3 mt-2 position-relative home flex-md-nowrap mt-3 flex-wrap appstoreMain"
                  style={{ width: "100%" }}
                >
                  <Image loading="lazy"
                    width={160}
                    height={100}
                    src="/assets/img/app-section/6.png"
                    alt="icon"
                  />
                  <Image loading="lazy"
                    width={160}
                    height={100}
                    src="/assets/img/app-section/7.png"
                    alt="icon"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-5 p-md-0">
              <div>
                <Image loading="lazy"
                  height={200}
                  width={300}
                  className="appImage home"
                  src="/assets/img/img-new.webp"
                  alt="icon"
                />
                <div className="qrCode text-light">
                  <Image loading="lazy"
                    height={150}
                    width={150}
                    src="/assets/img/app-section/5.png" alt="icon" />
                  <p className="m-0 mt-1">Scan Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSmarter;
