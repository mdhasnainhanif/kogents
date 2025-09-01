import React from "react";

const BlogBanner: React.FC = () => {
  return (
    <div
      className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')] relative contactBanner"
    >
      <div className="container px-5 mx-auto xl:px-0">
        <span
          className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto"
        >
          Blog
        </span>
        <h1
          className="text-center text-light headingSize"
        >
          Fuel Your Teams with Engineering-
          <span className="inline-block lg:block">Driven Insights</span>
        </h1>
        <p
          className="mt-6 text-base text-center md:text-xl text-white maxWidth39 mx-auto"
        >
          Boost productivity, innovation, and operational security across departments with curated updates from the minds behind Kogents AI Agents. Our engineering blog is where thought leadership meets practical AI application—built for businesses navigating complex digital transformations.
        </p>
      </div>
    </div>
  );
};

export default BlogBanner;
