import React from "react";
import Image from "next/image";

const CounterItem: React.FC<{ target: number; children: React.ReactNode }> = ({
  target,
  children,
}) => {
  return (
    <div className="counterNumber1">
      {children}
      <p>{target}%</p>
    </div>
  );
};


type CounterDataItem = {
  id: number;
  target: number;
  title: string;
  description: string;
  className: string;
};

interface BenefitsSectionProps {
  counterData?: CounterDataItem[];
}

const defaultCounterData: CounterDataItem[] = [
  {
    id: 1,
    target: 93,
    title: "Smart Tools. Smarter Outcomes...",
    description: "Kogents AI Agents do more than reply — they act.",
    className: "counter1"
  },
  {
    id: 2,
    target: 100,
    title: "Reliable. Adaptive. Always On",
    description: "All agents are continuously learning from conversations.",
    className: "counter2"
  },
  {
    id: 3,
    target: 85,
    title: "Autonomous Doesn't Mean Isolated",
    description: "Think of it as a mesh network of AI — tailored to your business.",
    className: "counter3"
  }
];

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ counterData }) => {
  const data = counterData || defaultCounterData;

  return (
    <div
      className="mobile-padding-top-0 mobile-padding-bottom-0 sectionPadding bg-center bg-no-repeat bg-cover bg-b-900"
      id="benefitsSection"
    >
      <div className="container px-5 mx-auto p-md-0">
        <div className="flex flex-col items-center justify-center">
          <span className="buttonAnimation pink inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
            Benefits
          </span>
          <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
            Kogents Ai Agents Come
            <span className="inline-block lg:block"></span>With Tremendous
            Benefits
          </h2>
          <p className="w-75 mb-16 text-center paraColor subHeading">
            Deploy AI agents to streamline operations and amplify your
            business's efficiency. These agents optimize processes&#44; reduce
            delays&#44; and enhance output&#44; ensuring you gain a competitive
            edge with speed and precision.
          </p>

          <div className="row rowGap w-100 mt-5">
            <div className="col-xl-7 paddingX0">
              <div className="chartMain hideOn768">
                <h2 className="d-none d-md-block mt-5">
                  Integerate AI Agents Into Your Organization Structure
                </h2>
                <Image
                  src="/assets/img/members.png"
                  alt="video image demo"
                  className="w-100"
                  width={800}
                  height={600}
                  priority
                />
              </div>
            </div>

            <div className="col-xl-5 gap-4 paddingX0">
              <div className="counterMain gap-4 homecountermain">
                {data.map((item) => (
                  <div key={item.id} className={`counter ${item.className}`}>
                    <CounterItem target={item.target}>
                      <h3 className="heading-4">{item.title}</h3>
                      <p className="text-white small-text1">
                        {item.description}
                      </p>
                    </CounterItem>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
