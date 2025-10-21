"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { useModalStore } from "@/stores/useModalStore";
import { use } from "react";
export default function AiBanner() {
  const openModal = useModalStore((state) => state.openModal);
  const breadcrumbItems = [{ label: "Solutions", active: true }];
  return (
    <div
      className="position-relative sectionPadding bg-center bg-no-repeat bg-cover bannerShadowCenter"
      id="aiBanner"
    >
      <div className="container px-5 mx-auto xl:px-0">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-10">
            <div className="flex flex-col items-center justify-center">
              <span className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
                Solutions
              </span>
              <h1 className="text-center mt-2 headingSize ">
                AI Agentic Solutions for Modern Business Success
              </h1>
              <p className="paraColor text-base md:text-xl text-w-100 text-center">
                Slow responses, missed opportunities, and overextended teams
                hold businesses back.Meet the AI Agentic Solutions by Kogents,
                built to accelerate growth, protect revenue, and deliver
                measurable impact from day one.
              </p>
              <div className="w_fit mx-auto d-flex flex-wrap gap-4 solutionSearchMain">
                <a
                  onClick={openModal}
                  className="open-modal-btn mt-4 mb-3 w_fit searchBtn buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                  data-modal-target="#welcomeModal"
                >
                  Efficient AI Solutions
                </a>
              </div>
                <Breadcrumb items={breadcrumbItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
