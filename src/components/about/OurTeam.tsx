import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <section>
      <div
        className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('img/bc/video-bg.png')] bg-b-900"
        id="benefitsSection"
      >
        <div className="container px-5 mx-auto p-md-0">
          <div className="flex flex-col items-center justify-center">
            <span
              // data-aos="fade-up"
              className="buttonAnimation yellow inline-block px-4 py-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo"
            >
              Benefits
            </span>
            <h2
              // data-aos="fade-up"
              className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize"
            >
              Our Team
              {/* <span className="inline-block lg:block"></span>With Tremendous Benefits */}
            </h2>
            <p
              className="w-75 mb-16 text-center paraColor subHeading"
              // data-aos="fade-up"
            >
              We are a cross-functional team of AI engineers, product operators,
              and service professionals who understand what’s at stake when
              technology slows a business down. Our focus is simple: build
              reliable automation that delivers measurable outcomes.
            </p>

            <div className="row rowGap w-100 mt-5 teamCards">
              {/* Team Member 1 */}
              <div className="col-lg-6 col-md-6">
                <div
                  // data-aos="fade-up"
                  className="flex flex-col gap-12 p-12 border rounded-lg lg:flex-row border-b-600 bg-gd-tertiary aos-init aos-animate teamCards_ipadpro teamCards_ipad"
                >
                  <Image
                  width={300}
                  height={200}
                    src="/assets/img/team/1.png"
                    className="rounded-lg"
                    alt="team member"
                  />
                  <div className="flex flex-col items-start justify-start md:justify-center">
                    <h3 className="text-2xl font-medium text-w-500">
                      Wade Warren
                    </h3>
                    <p className="mt-2 text-base text-w-100">Founder &amp; CEO</p>
                    <div className="flex flex-row gap-4 mt-6 mb-12">
                      <a href="https://www.linkedin.com/feed/">
                        <Image
                          width={24}
                          height={24}
                          src="/assets/img/icons/linkedin.svg"
                          alt="linkedin"
                        />
                      </a>
                      <a href="https://x.com/home?lang=en">
                        <Image 
                          width={24}
                          height={24}
                        src="/assets/img/icons/x.svg" alt="twitter" />
                      </a>
                    </div>
                    <ul className="list-disc p-0">
                      <li className="lead text-w-100">Digital Strategist</li>
                      <li className="lead text-w-100">Chief Digital Officer</li>
                      <li className="lead text-w-100">Corporate Restructuring</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="col-lg-6 col-md-6">
                <div
                  // data-aos="fade-up"
                  className="flex flex-col gap-12 p-12 border rounded-lg lg:flex-row border-b-600 bg-gd-tertiary aos-init aos-animate teamCards_ipadpro teamCards_ipad"
                >
                  <Image
                  width={300}
                  height={200}
                    src="/assets/img/team/2.png"
                    className="rounded-lg"
                    alt="team member"
                  />
                  <div className="flex flex-col items-start justify-start md:justify-center">
                    <h3 className="text-2xl font-medium text-w-500">
                      Theresa Webb
                    </h3>
                    <p className="mt-2 text-base text-w-100">Founder &amp; CEO</p>
                    <div className="flex flex-row gap-4 mt-6 mb-12">
                      <a href="https://www.linkedin.com/feed/">
                        <Image
                          width={24}
                          height={24}
                          src="/assets/img/icons/linkedin.svg"
                          alt="linkedin"
                        />
                      </a>
                      <a href="https://x.com/home?lang=en">
                        <Image
                          width={24}
                          height={24}
                        src="/assets/img/icons/x.svg" alt="twitter" />
                      </a>
                    </div>
                    <ul className="list-disc p-0">
                      <li className="lead text-w-100">Digital Strategist</li>
                      <li className="lead text-w-100">Chief Digital Officer</li>
                      <li className="lead text-w-100">Corporate Restructuring</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="col-lg-6 col-md-6">
                <div
                  // data-aos="fade-up"
                  className="flex flex-col gap-12 p-12 border rounded-lg lg:flex-row border-b-600 bg-gd-tertiary aos-init aos-animate teamCards_ipadpro teamCards_ipad"
                >
                  <Image
                  width={300}
                  height={200}
                    src="/assets/img/team/3.png"
                    className="rounded-lg"
                    alt="team member"
                  />
                  <div className="flex flex-col items-start justify-start md:justify-center">
                    <h3 className="text-2xl font-medium text-w-500">
                      Guy Hawkins
                    </h3>
                    <p className="mt-2 text-base text-w-100">Founder &amp; CEO</p>
                    <div className="flex flex-row gap-4 mt-6 mb-12">
                      <a href="https://www.linkedin.com/feed/">
                        <Image
                          width={24}
                        height={24}
                          src="/assets/img/icons/linkedin.svg"
                          alt="linkedin"
                        />
                      </a>
                      <a href="https://x.com/home?lang=en">
                        <Image 
                          width={24}
                          height={24}
                        src="/assets/img/icons/x.svg" alt="twitter" />
                      </a>
                    </div>
                    <ul className="list-disc p-0">
                      <li className="lead text-w-100">Digital Strategist</li>
                      <li className="lead text-w-100">Chief Digital Officer</li>
                      <li className="lead text-w-100">Corporate Restructuring</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="col-lg-6 col-md-6">
                <div
                  // data-aos="fade-up"
                  className="flex flex-col gap-12 p-12 border rounded-lg lg:flex-row border-b-600 bg-gd-tertiary aos-init aos-animate teamCards_ipadpro teamCards_ipad"
                >
                  <Image
                  width={300}
                  height={200}
                    src="/assets/img/team/4.png"
                    className="rounded-lg"
                    alt="team member"
                  />
                  <div className="flex flex-col items-start justify-start md:justify-center">
                    <h3 className="text-2xl font-medium text-w-500">
                      Wade Warren
                    </h3>
                    <p className="mt-2 text-base text-w-100">Founder &amp; CEO</p>
                    <div className="flex flex-row gap-4 mt-6 mb-12">
                      <a href="https://www.linkedin.com/feed/">
                        <Image
                          width={24}
                          height={24}
                          src="/assets/img/icons/linkedin.svg"
                          alt="linkedin"
                        />
                      </a>
                      <a href="https://x.com/home?lang=en">
                        <Image
                          width={24}
                          height={24}
                        src="/assets/img/icons/x.svg" alt="twitter" />
                      </a>
                    </div>
                    <ul className="list-disc p-0">
                      <li className="lead text-w-100">Digital Strategist</li>
                      <li className="lead text-w-100">Chief Digital Officer</li>
                      <li className="lead text-w-100">Corporate Restructuring</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Team Member 5 */}
              <div className="col-lg-6 col-md-6">
                <div
                  // data-aos="fade-up"
                  className="flex flex-col gap-12 p-12 border rounded-lg lg:flex-row border-b-600 bg-gd-tertiary aos-init aos-animate teamCards_ipadpro teamCards_ipad"
                >
                  <Image
                  width={300}
                  height={200}
                    src="/assets/img/team/5.png"
                    className="rounded-lg"
                    alt="team member"
                  />
                  <div className="flex flex-col items-start justify-start md:justify-center">
                    <h3 className="text-2xl font-medium text-w-500">
                      Wade Warren
                    </h3>
                    <p className="mt-2 text-base text-w-100">Founder &amp; CEO</p>
                    <div className="flex flex-row gap-4 mt-6 mb-12">
                      <a href="https://www.linkedin.com/feed/">
                        <Image
                          width={24}
                          height={24}
                          src="/assets/img/icons/linkedin.svg"
                          alt="linkedin"
                        />
                      </a>
                      <a href="https://x.com/home?lang=en">
                        <Image
                          width={24}
                          height={24}
                        src="/assets/img/icons/x.svg" alt="twitter" />
                      </a>
                    </div>
                    <ul className="list-disc p-0">
                      <li className="lead text-w-100">Digital Strategist</li>
                      <li className="lead text-w-100">Chief Digital Officer</li>
                      <li className="lead text-w-100">Corporate Restructuring</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Team Member 6 */}
              <div className="col-lg-6 col-md-6">
                <div
                  // data-aos="fade-up"
                  className="flex flex-col gap-12 p-12 border rounded-lg lg:flex-row border-b-600 bg-gd-tertiary aos-init aos-animate teamCards_ipadpro teamCards_ipad"
                >
                  <Image
                  width={300}
                  height={200}
                    src="/assets/img/team/6.png"
                    className="rounded-lg"
                    alt="team member"
                  />
                  <div className="flex flex-col items-start justify-start md:justify-center">
                    <h3 className="text-2xl font-medium text-w-500">
                      Wade Warren
                    </h3>
                    <p className="mt-2 text-base text-w-100">Founder &amp; CEO</p>
                    <div className="flex flex-row gap-4 mt-6 mb-12">
                      <a href="https://www.linkedin.com/feed/">
                        <Image
                          width={24}
                          height={24}
                          src="/assets/img/icons/linkedin.svg"
                          alt="linkedin"
                        />
                      </a>
                      <a href="https://x.com/home?lang=en">
                        <Image
                          width={24}
                          height={24}
                        src="/assets/img/icons/x.svg" alt="twitter" />
                      </a>
                    </div>
                    <ul className="list-disc p-0">
                      <li className="lead text-w-100">Digital Strategist</li>
                      <li className="lead text-w-100">Chief Digital Officer</li>
                      <li className="lead text-w-100">Corporate Restructuring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
