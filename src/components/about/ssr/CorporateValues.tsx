import React from "react";

// Corporate values data
const corporateValues = [
  "Innovation",
  "Excellence", 
  "Integrity",
  "Collaboration",
  "Transparency",
  "Growth",
  "Quality",
  "Trust",
  "Efficiency",
  "Creativity"
];

const CorporateValues = () => {
  return (
    <section>
      <div className="mobile-padding-top-0 sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/neurolinxaI-bg.png')]">
        <div className="container px-5 mx-auto xl:px-0">
          <span
            className="buttonAnimation pink d-block w_fit mx-auto inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
          >
            Benefits
          </span>
          <h2
            className="mb-16 text-center headingSize aos-init aos-animate"
          >
            Kogents AI
            <span className="block"></span>Corporate Values
          </h2>
        </div>
        <div
          className="corporate-values relative z-[1] flex flex-col justify-center aos-init aos-animate"
        >
          {/* First row - scrolls left */}
          <div className="tech-row tech-row-left">
            <div className="tech-track">
              {[...corporateValues, ...corporateValues].map((value, index) => (
                <div key={`left-${index}`} className="tech-card">
                  <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-blue-400 bg-b-600 text-w-100">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - scrolls right */}
          <div className="tech-row tech-row-right">
            <div className="tech-track">
              {[...corporateValues.slice().reverse(), ...corporateValues.slice().reverse()].map((value, index) => (
                <div key={`right-${index}`} className="tech-card">
                  <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-blue-400 bg-b-600 text-w-100">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Third row - scrolls left */}
          <div className="tech-row tech-row-left">
            <div className="tech-track">
              {[...corporateValues, ...corporateValues].map((value, index) => (
                <div key={`left-3-${index}`} className="tech-card">
                  <span className="flex px-6 py-3 text-xl border rounded-full whitespace-nowrap border-blue-400 bg-b-600 text-w-100">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateValues;
