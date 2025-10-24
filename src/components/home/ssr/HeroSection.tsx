import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/icons";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="boxesBg ...">
        <section className="heroSectionPadding pb-0 heroSection">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="modal_form">
                  <div className="bannerForm hero">
                    <form id="contact_form" className="formBannerContact">
                      <h1 className="bookConsultation modalBookFree">
                        Book a<span className="textPurpleForm"> Free</span>{" "}
                        Consultation
                      </h1>

                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your Name Here"
                          className="form-control"
                          required
                        />
                        <span className="validation-error text-light d-none"></span>
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Phone Number"
                          className="form-control"
                          required
                        />
                        <span className="validation-error text-light d-none"></span>
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          className="form-control"
                          required
                        />
                        <span className="validation-error text-light d-none"></span>
                      </div>
                      <div className="form-group">
                        <textarea
                          rows={3}
                          id="project_need"
                          name="project_need"
                          placeholder="Describe Your Project Need"
                          className="form-control bannerFormTextArea"
                          required
                        />
                        <span className="validation-error text-light d-none"></span>
                      </div>

                      <div className="border-button">
                        <button
                          type="submit"
                          className="buttonAnimation2 poppupBtn w-100 flex mt-3 justify-center items-center gap-2 px-6 py-[14px] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900"
                        >
                          <span>Submit</span>
                          <ArrowRightIcon />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="flex flex-col heroItems gap-2">
                  <span className="buttonAnimation inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                    Driven by Kogents AI
                  </span>
                  <h2 className=" tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize mt-0">
                    Automate Every Conversation. Close Every Loop. Scale Without
                    Hiring.
                  </h2>
                  <p className="paraColor text-base md:text-xl text-w-100">
                    Kogents AI Agents handle customer support, calls, sales, and
                    queries across WhatsApp, phone, web, and more without adding
                    headcount
                  </p>
                  <Link
                    href="/chatbot/brief"
                    className="mt-2 buttonAnimation2 flex justify-center pink items-center gap-2 lg:mb-14 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900"
                    aria-label="Request demo for Kogents AI"
                  >
                    Request Demo
                    <ArrowRightIcon style={{ height: "24px" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section_product-image w-layout-blockcontainer1 wrapper"
          id="sectionTilt"
        >
          <div className="container new hideOn768">
            <div className="position-relative">
              <div className="bg_product-bg is_bottom"></div>
              <div
                className="bg_product-image tilt-card pt-0 visual-tilt-content"
                data-w-id="42972b79-e7c6-eecc-50b0-3013e4dfdf0d"
                style={{ scale: 0.6, transition: "ease-in-out" }}
              >
                <Image
                  src="/assets/img/erp-011.svg"
                  priority
                  alt="erp"
                  className="image_product-cards"
                  width={800}
                  height={600}
                />
                <Image
                  loading="lazy"
                  fetchPriority="high"
                  src="/assets/img/back-img.svg"
                  alt="background"
                  className="image_product-bg"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>

          <section className="newSection new pb-0 logoSlideSection">
            <div className="hero-brand overflow-hidden whitespace-nowrap relative w-full lg:max-w-[62.5rem] mx-auto">
              <div className="inline-flex logo_items animate-slides">
                <Image
                  src="/assets/img/brand/1.svg"
                  alt="brand1"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/2.svg"
                  alt="brand2"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/3.svg"
                  alt="brand3"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/4.svg"
                  alt="brand4"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/5.svg"
                  alt="brand5"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/1.svg"
                  alt="brand1"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/2.svg"
                  alt="brand2"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/3.svg"
                  alt="brand3"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/4.svg"
                  alt="brand4"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/5.svg"
                  alt="brand5"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/1.svg"
                  alt="brand1"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/2.svg"
                  alt="brand2"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/3.svg"
                  alt="brand3"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/4.svg"
                  alt="brand4"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/5.svg"
                  alt="brand5"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/1.svg"
                  alt="brand1"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/2.svg"
                  alt="brand2"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/3.svg"
                  alt="brand3"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/4.svg"
                  alt="brand4"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
                <Image
                  src="/assets/img/brand/5.svg"
                  alt="brand5"
                  className="mx-4 flex-shrink-0"
                  width={150}
                  height={80}
                />
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
