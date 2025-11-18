"use client";
import React from "react";

export interface SummarySolutionData {
  tag?: string;
  text?: string;
}

const SummarySolution: React.FC<{ data: SummarySolutionData }> = ({ data }) => {
  return (
    <div className="sectionPadding pb-0">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          {data.tag && (
            <span className="buttonAnimation purple inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
              {data.tag}
            </span>
          )}
          {data.text && (
            <p className="text-center paraColor text-base md:text-xl text-w-100">
              {data.text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SummarySolution;
