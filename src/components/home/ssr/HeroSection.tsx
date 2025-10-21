"use client";
import React, { useRef, useEffect } from "react";
import { useModalStore } from "@/stores/useModalStore";
import { useFormStore } from "@/stores/useFormStore";
import { useTrackingParams } from "@/stores/useTrackingParams";
import Image from "next/image";
import { ArrowRightIcon } from "@/icons";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  const sectionRef = useRef(null);
  const openModal = useModalStore((state) => state.openModal);
  
  const {
    formData,
    isLoading,
    error,
    success,
    updateField,
    submitForm,
    resetForm,
  } = useFormStore();

  // Initialize tracking parameters
  useTrackingParams();

  useGSAP(() => {
    gsap.fromTo(
      ".visual-tilt-content",
      {
        scale: 0.6,
        transformOrigin: "center center",
      },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#sectionTilt",
          start: "top 95%",
          end: "bottom 90%",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    updateField(field, value);
  };

  useEffect(() => {
    if (success) {
      // Reset form after successful submission
      setTimeout(() => {
        resetForm();
      }, 5000);
    }
  }, [success, resetForm]);
  return (
    <>
      <div className="boxesBg ...">
        <section className="heroSectionPadding bg-center bg-no-repeat bg-cover bg-[url('/img/bc/hero-bg.webp')] pb-0 heroSection">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="modal_form">
                  <div className="bannerForm hero">
                    <form id="contact_form" className="formBannerContact" onSubmit={handleSubmit}>
                      <h1 className="bookConsultation modalBookFree">Book a
                        <span className="textPurpleForm"> Free</span> Consultation
                      </h1>

                      {/* Success Message */}
                      {success && (
                        <div className="border rounded-md p-3 mb-3" style={{background:'#0f5132', borderColor:'#badbcc'}}>
                          <p className="m-0" style={{color:'#d1e7dd'}}>{success}</p>
                        </div>
                      )}

                      {/* Error Message */}
                      {error && (
                        <div className="border rounded-md p-3 mb-3" style={{background:'#5c2623', borderColor:'#f5c2c7'}}>
                          <p className="m-0" style={{color:'#f8d7da'}}><strong>Error:</strong> {error}</p>
                        </div>
                      )}

                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your Name Here"
                          className="form-control"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
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
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
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
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
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
                          value={formData.project_need}
                          onChange={(e) => handleInputChange('project_need', e.target.value)}
                          required
                        />
                        <span className="validation-error text-light d-none"></span>
                      </div>
                      
                      {/* Hidden Tracking Fields */}
                      <input type="hidden" name="gclid" id="gclid" value={formData.gclid} />
                      <input type="hidden" name="fbclid" id="fbclid" value={formData.fbclid} />
                      <input type="hidden" name="igclid" id="igclid" value={formData.igclid} />
                      <input type="hidden" name="ttclid" id="ttclid" value={formData.ttclid} />
                      <input type="hidden" name="fingerprint" id="fingerprint" value={formData.fingerprint} />
                      <input type="hidden" name="chat" id="chat" value={formData.chat} />
                      <input type="hidden" name="stable_session_id" id="stable_session_id" value={formData.stable_session_id} />
                      <input type="hidden" name="fingerprintdata" id="fingerprintdata" value={formData.fingerprintdata} />
                      
                      <div className="border-button">
                        <button 
                          type="submit" 
                          className="buttonAnimation2 poppupBtn w-100 flex mt-3 justify-center items-center gap-2 px-6 py-[14px] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span>Submitting...</span>
                              <div className="spinner-border spinner-border-sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <span>Submit</span>
                              <ArrowRightIcon />
                            </>
                          )}
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
                  <p className=" paraColor text-base md:text-xl text-w-100">
                    Kogents AI Agents handle customer support, calls, sales, and queries across WhatsApp, phone, web, and more without adding headcount
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
          </div >
        </section >
        <section
          ref={sectionRef}
          className="section_product-image w-layout-blockcontainer1 wrapper"
          id="sectionTilt"
        >
          {/* <BrowserView> */}
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
                    priority
                    src="/assets/img/back-img.svg"
                    alt="background"
                    className="image_product-bg"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
            </div>
          {/* </BrowserView> */ }

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
        
        
      </div >
    </>
  );
};

export default HeroSection;
