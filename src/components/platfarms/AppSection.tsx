import Image from "next/image";
import React from "react";

const AppSection = () => {
  return (
    <>
      <div
        className="pt-0 paddingOnMobile2 sectionPadding bg-center bg-no-repeat bg-cover bg-[url('img/bc/video-bg.png')]"
        id="benefitsSection"
      >
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex flex-col items-center justify-center">
            <span className="buttonAnimation yellow inline-block px-4 py-2 text-sm font-medium 
            rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
              Benefits
            </span>

            <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
              All Channels. One Brain.
            </h2>

            <p className="w-75 mb-16 text-center paraColor subHeading">
              WhatsApp&#44; Phone&#44; Chat&#44; Voice&#44; Kiosk — we automate every
              touchpoint.
            </p>

            <p className="w-75 mb-16 text-center paraColor subHeading">
              Your customers are everywhere — and now&#44; so are you.
            </p>

            <div className="row appMain mt-4 rowGap home">
              <div className="col-md-7 p-md-0 appMainFirst">
                <div className="p-md-5">
                  <span className="buttonAnimation inline-block px-4 py-2 text-sm font-medium border 
                  rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                    Trusted By Many Clients
                  </span>

                  <h2 className="text-light mt-2">Kogents AI Agent App</h2>
                  <p className="text-light mt-3">
                    Scan or Visit To Download App Now For Free
                  </p>

                  <div
                    className="d-flex align-items-center mt-3 gap-3 appstoreMain position-relative home flex-md-nowrap flex-wrap"
                    style={{ width: "100%" }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Image
                        width={160}
                        height={100}
                        src="/assets/img/app-section/6.png"
                        alt="icon"
                      />
                      <span style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>Coming Soon</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Image
                        width={160}
                        height={100}
                        src="/assets/img/app-section/7.png"
                        alt="icon"
                      />
                      <span style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 p-md-0">
                <div>
                  <Image
                    height={200}
                    width={300}
                    className="appImage home"
                    src="/assets/img/img-new.webp"
                    alt="icon"
                  />
                  <div className="qrCode text-light">
                    <Image
                      height={200}
                      width={200}
                      src="/assets/img/app-section/5.png"
                      alt="icon"
                    />
                    <p className="m-0 mt-1">Scan Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSection;
