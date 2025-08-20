'use client';
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const CounterItem: React.FC<{ target: number; children: React.ReactNode }> = ({
  target,
  children,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun) {
          setHasRun(true);
          let start = 0;
          const duration = 2000;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target, hasRun]);

  return (
    <div ref={ref} className="counterNumber1">
      {children}
      <p>{count}%</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <div
      className="sectionPadding bg-center bg-no-repeat bg-cover bg-b-900 bg-[url('../img/bc/FAQ-bg.png')]"
      id="benefitsSection"
    >
      <div className="container px-5 mx-auto p-md-0">
        <div className="flex flex-col items-center justify-center">
          <span className="buttonAnimation pink inline-block px-4 py-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo">
            Benefits
          </span>
          <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
            Kogents Ai Agents Come
            <span className="inline-block lg:block"></span>With Tremendous
            Benefits
          </h2>
          <p className="w-75 mb-16 text-center paraColor subHeading">
            Deploy AI agents to streamline operations and amplify your
            business's efficiency. These agents optimize processes, reduce
            delays, and enhance output, ensuring you gain a competitive edge
            with speed and precision.
          </p>

          <div className="row rowGap w-100 mt-5">
            <div className="col-xl-7 paddingX0">
              <div className="chartMain">
                <h2 className="d-none d-md-block">
                  Integerate AI Agents Into Your Organization Structure
                </h2>
                <Image
                  src="/assets/img/members.png"
                  alt="video image demo"
                  className="w-100"
                 width={800} height={600} />
              </div>
            </div>

            <div className="col-xl-5 gap-4 paddingX0">
              <div className="counterMain gap-4">
                <div className="counter counter1">
                  <CounterItem target={93}>
                    <h3 className="heading-4">Smart Tools. Smarter Outcomes</h3>
                    <p className="text-white small-text1">
                      With integrated analytics, live syncing, and action
                      automation, Kogents AI Agents do more than reply — they
                      act.
                    </p>
                  </CounterItem>
                </div>

                <div className="counter counter2">
                  <CounterItem target={100}>
                    <h3 className="heading-4">Reliable. Adaptive. Always On</h3>
                    <p className="text-white small-text1">
                      All agents are continuously learning from conversations,
                      system signals, and customer outcomes — to deliver better
                      support and smarter escalations.
                    </p>
                  </CounterItem>
                </div>

                <div className="counter counter3">
                  <CounterItem target={85}>
                    <h3 className="heading-4">
                      Autonomous Doesn’t Mean Isolated
                    </h3>
                    <p className="text-white small-text1">
                      Your AI Agents share signals, escalate across channels,
                      and optimize workflows together. Think of it as a mesh
                      network of AI — tailored to your business.
                    </p>
                  </CounterItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
