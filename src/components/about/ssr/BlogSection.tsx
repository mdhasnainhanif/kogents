import { ArrowRightIcon } from "@/icons";
import Image from "next/image";
import React from "react";

const BlogSection = () => {
  return (
    <section className="py-md-5 my-md-5" id="blogSection">
      <div className="container">
        <div className="row rowGap">
          {/* Left Column */}
          <div className="col-xl-5">
            <div className="scroller">
              <span
                // 
                className="buttonAnimation purple inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
              >
                Our Blogs
              </span>
              <h2 className="mt-4 mb-6 tracking-[-0.02em] text-3xl md:text-5xl lg:text-8xl lg:leading-[112px] font-semibold headingSize">
                Fuel Your Teams with Engineering-Driven Insights
              </h2>
              <p className="subHeading w-75 mb-16 mt-3 subHeading paraColor aos-init aos-animate">
                Boost productivity&#44; innovation&#44; and operational security across
                departments with curated updates from the minds behind Kogents
                AI Agents. Our engineering blog is where thought leadership
                meets practical AI application—built for businesses navigating
                complex digital transformations.
              </p>
              <a
                href="javascript:void(0);"
                className="buttonAnimation2 flex justify-center mt-4 items-center gap-2 mb-8 px-6 py-[14px] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit open-modal-btn"
                data-modal-target="#welcomeModal"
              >
                Request Demo
                <ArrowRightIcon />
              </a>
              <div
                className="pxl-client-review pxl-client-review1 style-1"
              // data-wow-delay="ms"
              >
                <div className="pxl-item--inner">
                  <div className="pxl-item--images el-empty">
                    <div className="pxl-item--img">
                      <Image
                        loading="lazy"
                        decoding="async"
                        width="129"
                        height="128"
                        src="https://demo.casethemes.net/aimo/wp-content/uploads/2024/09/img-user-7.jpg"
                        className="attachment-full"
                        alt="blog-img"
                      />
                    </div>
                    <div className="pxl-item--img">
                      <Image
                        loading="lazy"
                        decoding="async"
                        width="129"
                        height="128"
                        src="https://demo.casethemes.net/aimo/wp-content/uploads/2024/09/img-user-6.jpg"
                        className="attachment-full"
                        alt="blog-img"
                      />
                    </div>
                    <div className="pxl-item--img">
                      <Image
                        loading="lazy"
                        decoding="async"
                        width="129"
                        height="128"
                        src="https://demo.casethemes.net/aimo/wp-content/uploads/2024/09/img-user-5.jpg"
                        className="attachment-full"
                        alt="blog-img"
                      />
                    </div>
                    <div className="pxl-item--img">
                      <Image
                        loading="lazy"
                        decoding="async"
                        width="129"
                        height="128"
                        src="https://demo.casethemes.net/aimo/wp-content/uploads/2024/09/img-user-4.jpg"
                        className="attachment-full"
                        alt="blog-img"
                      />
                    </div>
                    <div className="pxl-item--user-plus"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-7">
            {/* Blog Card 1 */}
            <div className="blogCard">
              <div className="row rowGap">
                <div className="col-md-4">
                  <Image
                    height={160}
                    width={169}
                    className="blogImg"
                    src="https://demo.casethemes.net/aimo/wp-content/uploads/2025/04/img-post-update1-160x169.jpg"
                    alt="image"
                  />
                </div>
                <div className="col-md-8">
                  <h3>
                    Check out our blog for essential tips to skyrocket your
                    business!
                  </h3>
                  <p>
                    Think of us as your 24/7 customer service superheroes and
                    essential AI powered business Solutions! We provide
                    real-time assistance&#44; answer questions&#44; guide users through
                    forms&#44; and solve problems instantly&#44; without the wait.
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="pxl-post--author pxl-mr-10">
                      <Image
                        loading="lazy"
                        src="https://demo.casethemes.net/aimo/wp-content/uploads/2024/11/avatar3-150x150.webp"
                        width="40"
                        height="40"
                        alt="Smith"
                        className="avatar avatar-40 wp-user-avatar wp-user-avatar-40 alignnone photo"
                      />
                      <cite>by </cite>&nbsp;Smith
                    </div>
                    <div className="pxl-date-tag">
                      <div className="pxl-post--date pxl-mr-10">
                        16th Apr 25
                      </div>
                      <div className="pxl-post--tag pxl-ml-10">AI agency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="blogCard">
              <div className="row">
                <div className="col-md-4">
                  <Image
                    height={160}
                    width={169}
                    className="blogImg"
                    src="https://demo.casethemes.net/aimo/wp-content/uploads/2024/08/img-sg-post9-160x169.webp"
                    alt="blog-img"
                  />
                </div>
                <div className="col-md-8">
                  <h3>How AI is enhancing customer experience in retail</h3>
                  <p>
                    AI is enhancing retail customer experience by leveraging
                    data analytics and machine learning to offer experience by
                    leveraging data analytics and machine
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="pxl-post--author pxl-mr-10">
                      <Image
                        loading="lazy"
                        src="https://demo.casethemes.net/aimo/wp-content/uploads/2024/11/avatar3-150x150.webp"
                        width="40"
                        height="40"
                        alt="Smith"
                        className="avatar avatar-40 wp-user-avatar wp-user-avatar-40 alignnone photo"
                      />
                      <cite>by </cite>&nbsp;Smith
                    </div>
                    <div className="pxl-date-tag">
                      <div className="pxl-post--date pxl-mr-10">
                        16th Apr 25
                      </div>
                      <div className="pxl-post--tag pxl-ml-10">AI agency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="blogCard">
              <div className="row">
                <div className="col-md-4">
                  <Image
                    className="blogImg"
                    height={160}
                    width={169}
                    src="https://demo.casethemes.net/aimo/wp-content/uploads/2025/04/img-post-update1-160x169.jpg"
                    alt="blog-img"
                  />
                </div>
                <div className="col-md-8">
                  <h3>How AI is enhancing customer experience in retail</h3>
                  <p>
                    AI is enhancing retail customer experience by leveraging
                    data analytics and machine learning to offer experience by
                    leveraging data analytics and machine
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="pxl-post--author pxl-mr-10">
                      <Image
                        loading="lazy"
                        src="https://demo.casethemes.net/aimo/wp-content/uploads/2024/11/avatar3-150x150.webp"
                        width="40"
                        height="40"
                        alt="Smith"
                        className="avatar avatar-40 wp-user-avatar wp-user-avatar-40 alignnone photo"
                      />
                      <cite>by </cite>&nbsp;Smith
                    </div>
                    <div className="pxl-date-tag">
                      <div className="pxl-post--date pxl-mr-10">
                        16th Apr 25
                      </div>
                      <div className="pxl-post--tag pxl-ml-10">AI agency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 4 */}
            <div className="blogCard">
              <div className="row">
                <div className="col-md-4">
                  <Image
                    height={160}
                    width={169}
                    className="blogImg"
                    src="https://demo.casethemes.net/aimo/wp-content/uploads/2024/08/img-sg-post9-160x169.webp"
                    alt="blog-img"
                  />
                </div>
                <div className="col-md-8">
                  <h3>How AI is enhancing customer experience in retail</h3>
                  <p>
                    AI is enhancing retail customer experience by leveraging
                    data analytics and machine learning to offer experience by
                    leveraging data analytics and machine
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="pxl-post--author pxl-mr-10">
                      <Image
                        loading="lazy"
                        src="https://demo.casethemes.net/aimo/wp-content/uploads/2024/11/avatar3-150x150.webp"
                        width="40"
                        height="40"
                        alt="Smith"
                        className="avatar avatar-40 wp-user-avatar wp-user-avatar-40 alignnone photo"
                      />
                      <cite>by </cite>&nbsp;Smith
                    </div>
                    <div className="pxl-date-tag">
                      <div className="pxl-post--date pxl-mr-10">
                        16th Apr 25
                      </div>
                      <div className="pxl-post--tag pxl-ml-10">AI agency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
