import Image from "next/image";

export default function BenefitsSection() {
  return (
    <div
      className="paddingOnMobile2 sectionPadding bg-center bg-no-repeat bg-cover bg-[url('img/bc/video-bg.png')]"
      id="benefitsSection"
    >
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col items-center justify-center">
          {/* Top Tag */}
          <span
            // 
            className="buttonAnimation yellow inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
          >
            Benefits
          </span>

          {/* Heading */}
          <h2
            // 
            className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize"
          >
            Solutions That Work While You Don’t
            <span className="inline-block lg:block"></span>Mobile AI Tools
          </h2>

          {/* Subheading */}
          <p
            className="w-75 mb-1 text-center paraColor subHeading"
            // 
          >
            From eCommerce to healthcare, our AI adapts to your industry.
          </p>
          <p
            className="w-75 mb-16 text-center paraColor subHeading"
            // 
          >
            Whatever you do, there’s a Kogents Agent ready to do it better.
          </p>

          {/* Main Content */}
          <div className="row appMain mt-4 rowGap">
            {/* Left Column */}
            <div className="col-md-7 p-md-0 appMainFirst">
              <div className="p-md-5">
                <span
                //   
                  className="buttonAnimation inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
                >
                  Real-time updates and management
                </span>
                <h2 className="text-light mt-2">Seamless CRM Integrations</h2>
                <p className="text-light">Enterprise-level support and analytics</p>

                {/* App Store Buttons */}
                <div
                  className="d-flex align-items-center gap-3 mt-2 position-relative flex-md-nowrap flex-wrap appstoreMain"
                  style={{ width: "100%" }}
                >
                  <Image height={100} width={160} src="/assets/img/app-section/6.png" alt="App Store" />
                  <Image height={100} width={160} src="/assets/img/app-section/7.png" alt="Google Play" />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-5 p-md-0">
              <div>
                <Image className="appImage" src="/assets/img/img-new.webp" alt="App showcase" height={100} width={160} />
                <div className="qrCode text-light">
                  <Image 
                    height={100}
                    width={160}
                  src="/assets/img/app-section/5.png" alt="QR code" />
                  <p className="m-0 mt-1">Scan Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
