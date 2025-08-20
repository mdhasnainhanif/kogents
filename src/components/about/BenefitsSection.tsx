import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type CounterProps = {
  target: number;
};

const Counter: React.FC<CounterProps> = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // ek hi baar run hoga
        }
      },
      { threshold: 0.5 } // 50% visible hone par start
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = target;
      if (start === end) return;

      const duration = 2000; // 2 sec
      const stepTime = Math.max(Math.floor(duration / end), 10); // minimum 10ms

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);
    }
  }, [isVisible, target]);

  return (
    <p ref={ref} className="text-white text-lg font-semibold">
      {count}%
    </p>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <div
      className="sectionPadding bg-center bg-no-repeat bg-cover bg-b-900 bg-[url('../img/bc/FAQ-bg.png')] custom-padding"
      id="benefitsSection"
    >
      <div className="container px-5 mx-auto p-0">
        <div className="flex flex-col items-center justify-center">
          <span className="buttonAnimation green inline-block px-4 py-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo">
            Benefits
          </span>
          <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
            Kogents Ai agents Come
            <span className="inline-block lg:block"></span>
            With Tremendous Benefits
          </h2>
          <p className="w-75 mb-16 text-center paraColor subHeading">
            Deploy AI agents to streamline operations and amplify your business&apos;s
            efficiency. These agents optimize processes, reduce delays, and
            enhance output, ensuring you gain a competitive edge with speed and
            precision.
          </p>

          <div className="row rowGap w-100 mt-5">
            <div className="col-xl-7">
              <div className="chartMain">
                <h2 className="d-none d-md-block">
                  Integerate AI Agents Into Your Organization Structure
                </h2>
                <Image
                height={500}
                width={500}
                  src="/assets/img/members.png"
                  alt="video image demo"
                  className="w-100"
                />
              </div>
            </div>

            <div className="col-xl-5 gap-4">
              <div className="counterMain">
                <div className="counter counter1">
                  <div className="counterNumber1">
                    <h3 className="heading-4">Beat the Clock!</h3>
                    <p className="text-white small-text1">
                      Less waiting, more doing! Speed up tasks and watch your
                      efficiency soar.
                    </p>
                    <Counter target={93} />
                  </div>
                </div>
                <div className="counter counter2">
                  <div className="counterNumber1">
                    <h3 className="heading-4">Bye-Bye, Boring Tasks!</h3>
                    <p className="text-white small-text1">
                      Automate repetitive tasks so your team can focus on
                      exciting work
                    </p>
                    <Counter target={100} />
                  </div>
                </div>
                <div className="counter counter3">
                  <div className="counterNumber1">
                    <h3 className="heading-4">Data, All in One Place!</h3>
                    <p className="text-white small-text1">
                      Gather insights from everywhere and make smarter, quicker
                      decisions.
                    </p>
                    <Counter target={85} />
                  </div>
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
