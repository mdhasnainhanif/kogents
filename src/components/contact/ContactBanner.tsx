import React from "react";

const ContactBanner = () => {
  return (
    <div
      className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')] relative contactBanner"
    >
      <div className="container px-5 mx-auto xl:px-0">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <span
              // data-aos="fade-up"
              className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo mx-auto"
            >
              Contact
            </span>
            <h1
              // data-aos="fade-up"
              className="text-center text-light headingSize"
            >
              Connect With Our Enterprise AI Specialists Our Sales Team
            </h1>
            <p
              // data-aos="fade-up"
              className="mt-6 text-base text-center md:text-xl text-light"
            >
              Looking to elevate operational efficiency and customer engagement
              at scale? Our B2B sales team is ready to guide you through
              tailored AI agent solutions that align with your business goals.
              Whether you manage support across departments or lead innovation
              across product lines, we’re here to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
