"use client"
import { useModalStore } from "@/stores/useModalStore";
import React from "react";
import Breadcrumb from "../Breadcrumb";

const Banner = () => {
  const openModal = useModalStore((state) => state.openModal);
  const breadcrumbItems = [
    { label: 'Platforms', active: true }
  ];
  return (
    <>
      <div
        className="position-relative sectionPadding bg-center bg-no-repeat bg-cover bannerShadowCenter"
        id="aiBanner"
      >
        <div className="container px-5 mx-auto xl:px-0">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8">
              <div className="flex flex-col items-center justify-center">
                <span className="buttonAnimation width_fit d-block purple px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">Overview</span>

                <h1 className="text-center mt-2 mb-2 headingSize">
                  AI Agents Advancing Customer Engagement on Top Platforms
                </h1>
                <p className="paraColor text-base md:text-xl text-w-100 text-center">
                  Managing customer conversations across multiple platforms is complex and time-consuming. Kogents streamlines engagement with AI agents that automate support, capture leads, and keep customers connected 24/7, wherever they interact with your brand.
                </p>
                <div className="w_fit mx-auto d-flex flex-wrap gap-4 solutionSearchMain">
                  <a
                    className="mt-4 mb-3 w_fit searchBtn buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                    onClick={openModal}
                  >
                    Launch My AI Agent
                  </a>
                </div>
                <Breadcrumb items={breadcrumbItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
