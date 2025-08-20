import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="position-relative sectionPadding bg-center bg-no-repeat bg-cover bannerShadowCenter"
        id="aiBanner"
      >
        <div className="container px-5 mx-auto xl:px-0">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="flex flex-col items-center justify-center">
                <p className="subHeading">
                  Ready to assist your customers with
                </p>

                <h1 className="text-center mt-2 mb-6 headingSize">
                  AI Agents Hub
                </h1>

                <p className="mb-8 paraColor text-base md:text-xl text-w-100 text-center">
                  Choose AI Agent templates to strengthen connections with your
                  customers. Each AI Agent transforms routine interactions into
                  meaningful relationships through personalized, engaging
                  conversations.
                </p>

                <div className="w_fit mx-auto d-flex flex-wrap gap-4 solutionSearchMain">
                  <a
                    href="javascript:void(0);"
                    className="w_fit searchBtn buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                    data-modal-target="#welcomeModal"
                  >
                    Request Access
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
