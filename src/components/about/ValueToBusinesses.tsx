import React from "react";

const ValueToBusinesses = () => {
    return (
        <section>
            <div className="lg:py-24 py-8 bg-center bg-no-repeat bg-cover bg-[url('img/bc/unlocking-bg.png')]">
                <div className="container px-5 mx-auto xl:px-0">
                    <span
                        // data-aos="fade-up"
                        className="buttonAnimation pink d-block w_fit mx-auto inline-block px-4 py-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo aos-init aos-animate"
                    >
                        Benefits
                    </span>

                    <h2
                        // data-aos="fade-down"
                        className="mb-16 text-center headingSize aos-init aos-animate"
                    >
                        Our Value to Businesses
                        {/* <span className="inline-block lg:block"></span>Semantic Capabilities */}
                    </h2>

                    <p
                        className="w-75 mb-16 mx-auto text-center paraColor subHeading"
                        // data-aos="fade-up"
                    >
                        Our AI agents are trained on your data, your workflows, and your
                        systems. They handle frontline interactions across platforms like
                        WhatsApp, Voice, CRM, and web—responding in real time, resolving
                        issues efficiently, and surfacing insights that drive decisions.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-4">
                        <div
                            // data-aos="fade-up-right"
                            className="flex gap-6 p-6 border rounded-lg border-b-600 lg:p-12 bg-gd-tertiary"
                        >
                            {/* 
              <h3 className="leading-[52px] text-40x font-medium text-w-900">
                16M+
              </h3>
              <span className="inline-block w-[1px] h-full bg-tropical-indigo"></span> 
              */}
                            <p className="text-base text-w-100">
                                Reduced average response time from minutes to milliseconds
                            </p>
                        </div>

                        <div
                            // data-aos="fade-up"
                            className="flex gap-6 p-6 border rounded-lg border-b-600 lg:p-12 bg-gd-tertiary"
                        >
                            {/* 
              <h3 className="leading-[52px] text-40x font-medium text-w-900">
                64T+
              </h3>
              <span className="inline-block w-[1px] h-full bg-tropical-indigo"></span> 
              */}
                            <p className="text-base text-w-100">
                                Reduced average response time from minutes to milliseconds
                            </p>
                        </div>

                        <div
                            // data-aos="fade-up-left"
                            className="flex gap-6 p-6 border rounded-lg border-b-600 lg:p-12 bg-gd-tertiary"
                        >
                            {/* 
              <h3 className="leading-[52px] text-40x font-medium text-w-900">
                248+
              </h3>
              <span className="inline-block w-[1px] h-full bg-tropical-indigo"></span> 
              */}
                            <p className="text-base text-w-100">
                                {/* Global <span className="block"></span> Integration */}
                                Clearer data across sales, service, and CX touchpoints
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueToBusinesses;
