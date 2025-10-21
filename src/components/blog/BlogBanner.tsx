import React from "react";
import Breadcrumb from "../Breadcrumb";

const BlogBanner: React.FC = () => {
  const breadcrumbItems = [{ label: "Blogs", active: true }];
  return (
    <div className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')] relative contactBanner">
      <div className="container px-5 mx-auto xl:px-0">
        <span className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
          Blog
        </span>
        <h1 className="text-center text-light headingSize mb-2">
          Our Blogs That Spark Ideas
          <span className="inline-block lg:block"></span>
        </h1>
        <p className="text-base text-center md:text-xl text-white maxWidth39 mx-auto">
          Discover stories, insights, and innovations from the team behind
          Kogents. Learn how intelligent AI agents are transforming operations
          worldwide.
        </p>
        <Breadcrumb items={breadcrumbItems} />
      </div>
    </div>
  );
};

export default BlogBanner;
