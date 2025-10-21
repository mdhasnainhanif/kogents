import React from "react";
import Breadcrumb from "../Breadcrumb";

const TestimonialBanner: React.FC = () => {
  const breadcrumbItems = [{ label: "Testimonials", active: true }];
  return (
    <div className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')] relative contactBanner">
      <div className="container px-5 mx-auto xl:px-0">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <span className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
              Testimonials
            </span>
            <h1 className="text-center text-light headingSize">
              Results When Kogents AI Agents Become Part of the Team
              {/* <span className="inline-block lg:block"></span> */}
            </h1>
            <p className="text-base text-center md:text-xl text-white maxWidth39 mx-auto">
              Discover how businesses across industries use Kogents AI to
              automate support, boost sales, and deliver success stories worth
              sharing.
            </p>
            <button className="buttonAnimation mt-3 width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
              Get Your AI Agent
            </button>
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBanner;
