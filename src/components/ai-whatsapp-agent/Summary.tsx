import React from "react";

export interface SummaryData {
  tag?: string;
  text?: string;
}

const Summary: React.FC<{ data: SummaryData }> = ({ data }) => {
  return (
    <div className="sectionPadding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="flex flex-col items-center justify-center">
              {data.tag && (
                <span className="buttonAnimation green inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                  {data.tag}
                </span>
              )}
              {data.text && (
                <p className="mb-10 text-center paraColor text-base md:text-xl text-w-100">
                  {data.text}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
