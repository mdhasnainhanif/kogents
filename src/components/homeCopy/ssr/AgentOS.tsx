"use client";

import Image from "next/image";
import { BrowserView, MobileView } from "react-device-detect";

const AgentOS = () => {
  return (
    <>
      <BrowserView>
        <div className="d-none d-sm-block lg:py-24 py-8 bg-center bg-no-repeat bg-cover bg-[url('/assets/img/bc/updates&media-bg.png')] pt0Mobile">
          <div className="container px-5 mx-auto xl:px-0">
            <span className="buttonAnimation width_fit purple d-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
              Agent OS
            </span>
            <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
              Autonomous Doesn&apos;t Mean Isolated
            </h2>
            <p className="w-75 mb-16 text-center m-auto mt-3 subHeading paraColor">
              Your AI Agents share signals, escalate across channels, and optimize workflows together. Think of it as a mesh network of AI, tailored to your business.
            </p>
            <div className="rainbowImage">
              <div className="row">
                <div className="col-md-4">
                  <div className="img1">
                    <div className="img1InnerDiv"></div>
                    <div className="bothImgMain">
                      <Image
                        src="/assets/img/ai-agent/1.webp"
                        alt="team image"
                        width={80}
                        height={80}
                      />
                      <Image
                        className="boxSvg"
                        src="/assets/img/box-01.svg"
                        alt="team image"
                        width={800}
                        height={600}
                      />
                      <p className="boxSvgText">Sales Operation Ai Agent</p>
                    </div>
                  </div>
                  <div className="img2">
                    <div className="bothImgMain">
                      <Image
                        src="/assets/img/ai-agent/2.webp"
                        alt="team image"
                        width={80}
                        height={80}
                      />
                      <Image
                        className="boxSvg"
                        src="/assets/img/box-01.svg"
                        alt="team image"
                        width={800}
                        height={600}
                      />
                      <p className="boxSvgText">Customer Service Ai Agent</p>
                    </div>
                  </div>
                  <div className="img3">
                    <div className="bothImgMain">
                      <Image
                        src="/assets/img/ai-agent/4.webp"
                        alt="team image"
                        width={80}
                        height={80}
                      />
                      <Image
                        className="boxSvg"
                        src="/assets/img/box-01.svg"
                        alt="team image"
                        width={800}
                        height={600}
                      />
                      <p className="boxSvgText">Human Resources Ai Agent</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center img4Main">
                  <div className="img4">
                    <div className="bothImgMain">
                      <Image
                        src="/assets/img/ai-agent/3.webp"
                        alt="team image"
                        width={80}
                        height={80}
                      />
                      <Image
                        className="boxSvg"
                        src="/assets/img/box-01.svg"
                        alt="team image"
                        width={800}
                        height={600}
                      />
                      <p className="boxSvgText">Cameron Brooks</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="img5">
                    <div className="bothImgMain">
                      <Image
                        src="/assets/img/ai-agent/5.webp"
                        alt="team image"
                        width={80}
                        height={80}
                      />
                      <Image
                        className="boxSvg"
                        src="/assets/img/box-01.svg"
                        alt="team image"
                        width={800}
                        height={600}
                      />
                      <p className="boxSvgText">Healthcare AI Agent</p>
                    </div>
                  </div>
                  <div className="img6">
                    <div className="bothImgMain">
                      <Image
                        src="/assets/img/ai-agent/6.webp"
                        alt="team image"
                        width={80}
                        height={80}
                      />
                      <Image
                        className="boxSvg"
                        src="/assets/img/box-01.svg"
                        alt="team image"
                        width={800}
                        height={600}
                      />
                      <p className="boxSvgText">Finance & Banking AI Agent</p>
                    </div>
                  </div>
                  <div className="img7">
                    <div className="bothImgMain">
                      <Image
                        src="/assets/img/ai-agent/7.webp"
                        alt="team image"
                        width={80}
                        height={80}
                      />
                      <Image
                        className="boxSvg"
                        src="/assets/img/box-01.svg"
                        alt="team image"
                        width={800}
                        height={600}
                      />
                      <p className="boxSvgText">Transportation AI Agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('/assets/img/bc/revolutionize-bg.html')] mobile-section pt0Mobile">
          <div className="container px-5 mx-auto xl:px-0">
            <span
              data-aos="fade-up"
              className="buttonAnimation width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto"
            >
              Agent OS
            </span>

            <h2
              data-aos="fade-up"
              className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize"
            >
              Autonomous Doesn’t Mean Isolated
            </h2>

            <p
              className="w-75 mb-16 text-center m-auto mt-3 subHeading paraColor"
              data-aos="fade-up"
            >
              Your AI Agents share signals, escalate across channels, and optimize workflows together. Think of it as a mesh network of AI, tailored to your business.
            </p>

            <div className="mt-16 rainbowImage">
              <div>
                <div className="img1New">
                  <div className="img1InnerDivNew1"></div>
                  <div className="bothImgMainNew bothImgMainNew1">
                    <Image
                      src="/assets/img/t1.png"
                      width={80}
                      height={80}
                      alt="team image"
                    />
                    <p className="boxSvgTextNew">
                      Email Triage <br /> AI Agent
                    </p>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="img1New">
                    <div className="img1InnerDivNew2"></div>
                    <div className="bothImgMainNew bothImgMainNew2">
                      <Image
                        src="/assets/img/t4.png"
                        alt="team image"
                        width={80}
                        height={80}
                      />
                      <p className="boxSvgTextNew">Order Management AI Agent</p>
                    </div>
                  </div>
                  <div className="img1New">
                    <div className="img1InnerDivNew3"></div>
                    <div className="bothImgMainNew bothImgMainNew3">
                      <Image
                        src="/assets/img/t5.png"
                        alt="team image"
                        width={80}
                        height={80}
                      />
                      <p className="boxSvgTextNew">Sales Operation AI Agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MobileView>
    </>
  );
};

export default AgentOS;
