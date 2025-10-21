import Image from "next/image";
import React from "react";

const CorePrinciples = () => {
  return (
    <section className="pt-0 sectionPadding bg-center bg-no-repeat bg-cover milesToneBg">
      <span
        // 
        className="buttonAnimation pink d-block w_fit mx-auto inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo aos-init aos-animate"
      >
        Benefits
      </span>

      <div className="">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            // 
            className="mb-16 text-center headingSize aos-init aos-animate"
          >
            Core Principles
            {/* <span className="inline-block lg:block"></span>Accomplishments */}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
            <div
              // data-aos="fade-up-right"
              className="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <div className="inline-block p-6 rounded-full bg_purple btn-border">
                {/* <img src="assets/img/icons/13.svg" alt="icon" /> */}
                <Image
                loading="lazy"
                  width={80}
                  height={80}
                  src="/assets/img/icons/13.svg"
                  alt="video image demo"
                  className="w-100"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium text-w-500">
                  Reliable AI performance in real-world operations
                </h3>
                {/* <p className="text-sm text-w-100">Amazon Web Services (AWS)</p> */}
              </div>
            </div>

            <div
              // data-aos="fade-up-left"
              className="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <div className="inline-block p-6 rounded-full bg_purple btn-border">
                <Image
                loading="lazy"
                  width={80}
                  height={80}
                  src="/assets/img/icons/14.svg"
                  alt="video image demo"
                  className="w-100"
                />
                {/* <img src="assets/img/icons/14.svg" alt="icon" /> */}
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium text-w-500">
                  Respect for context and data integrity
                </h3>
                {/* <p className="text-sm text-w-100">Amazon Web Service (AWS)</p> */}
              </div>
            </div>

            <div
              // data-aos="fade-up-right"
              className="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <div className="inline-block p-6 rounded-full bg_purple btn-border">
                {/* <img src="assets/img/icons/15.svg" alt="icon" /> */}
                <Image
                loading="lazy"
                  width={80}
                  height={80}
                  src="/assets/img/icons/15.svg"
                  alt="video image demo"
                  className="w-100"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium text-w-500">
                  Seamless integration into existing tech stacks
                </h3>
                {/* <p className="text-sm text-w-100">Amazon Web Service (AWS)</p> */}
              </div>
            </div>

            <div
              // data-aos="fade-up-left"
              className="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <div className="inline-block p-6 rounded-full bg_purple btn-border">
                {/* <img src="assets/img/icons/16.svg" alt="icon" /> */}
                <img
                width={80}
                  height={80}
                  src="/assets/img/icons/16.svg"
                  alt="video image demo"
                  className="w-100"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium text-w-500">
                  Operational transparency and actionable insights
                </h3>
              </div>
            </div>

            <div
              // data-aos="fade-up-right"
              className="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <div className="inline-block p-6 rounded-full bg_purple btn-border">
                {/* <img src="assets/img/icons/17.svg" alt="icon" /> */}
                <Image
                  width={80}
                  height={80}
                  src="/assets/img/icons/17.svg"
                  alt="video image demo"
                  className="w-100"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium text-w-500">
                  Consistency in customer experience, across all channels
                </h3>
                {/* <p className="text-sm text-w-100">
                  Product Hunt (2023)NVIDIA (2019)
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePrinciples;
