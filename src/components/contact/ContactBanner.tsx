import React from "react";
import Breadcrumb from "../Breadcrumb";

const ContactBanner = () => {
  const breadcrumbItems = [
    { label: 'Contact Us', active: true }
  ];
  return (
    <div
      className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')] relative contactBanner"
    >
      <div className="container px-5 mx-auto xl:px-0">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <span
              // 
              className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto"
            >
              Contact
            </span>
            <h1
              // 
              className="text-center text-light headingSize"
            >
              Connect With Our Enterprise AI Specialists
            </h1>
            <p
              // 
              className="mt-2 text-base text-center md:text-xl text-light"
            >
              Transform the way your teams work and communicate with intelligent AI agents.Our dedicated B2B sales team is here to help you explore tailored AI agent solutions that align with your goals. Whether you’re managing support across departments or driving innovation across product lines, we’ll guide you every step of the way.
            </p>
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
