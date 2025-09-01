import React from "react";

const BlogDetailBanner: React.FC = () => {
  return (
    <div className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')] relative contactBanner">
      <div className="container px-5 mx-auto xl:px-0">
        <span className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo mx-auto">
          Blog Detail
        </span>
        <h1 className="text-center text-light headingSize">
          Blog & Updates
          <span className="inline-block lg:block">by Kogents AI Agents</span>
        </h1>
        <p className="mt-6 text-base text-center md:text-xl text-white">
          Boost productivity and security for every team in your company
          <span className="inline-block md:block"></span>
          with our platform and upgraded support.
        </p>
      </div>
    </div>
  );
};

export default BlogDetailBanner;