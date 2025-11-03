"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useFormStore } from "@/stores/useFormStore";
import { useTrackingParams } from "@/stores/useTrackingParams";
import { ArrowRightIcon } from "@/icons";
import { handleContactFormSubmit } from "@/services/contactFormService";

const ContactSection = () => {
  const {
    formData,
    isLoading,
    error,
    success,
    updateField,
    submitForm,
    resetForm,
  } = useFormStore();

  // initialize tracking just once on this page
  useTrackingParams();

  useEffect(() => {
    if (success) {
      // hide success after 3 seconds
      const t = setTimeout(() => resetForm(), 1000);
      return () => clearTimeout(t);
    }
  }, [success, resetForm]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  const onChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateField(field, e.target.value);
    };

  return (
    <div className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('img/bc/contact-bg.png')]">
      <div className="container">
        <span
          //
          className="buttonAnimation mb-4 width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto"
        >
          Contact Us Now
        </span>
        <div className="row rowGap">
          {/* Left Column */}
          <div className="col-lg-6 contact_boxes_height">
            {/* Contact Box 1 */}
            <div className="contactBox border rounded-lg md:p-12 bg-gd-tertiary border-b-600 aos-init aos-animate">
              <p className="text-light headingSize headingSizeContact mt-2 fw-bold">
                Dedicated Support
              </p>
              <p className="supportText mt-2">
                Kogents Enterprise clients receive real-time support with
                priority access to our AI engineers. Book a consultation to
                discuss custom integrations&#44; enterprise-grade AI
                workflows&#44; and support for cross-functional implementation.
              </p>
              <div className="aboutContent">
                <a href="tel:+12672489454" className="aboutIconPhone">
                  <Image
                    width={20}
                    height={20}
                    className=""
                    src="/assets/img/phone.svg"
                    alt="icon"
                  />{" "}
                  +12672489454
                </a>
                <a href="mailto:info@kogents.ai" className="aboutIconPhone">
                  <Image
                    width={20}
                    height={20}
                    className=""
                    src="/assets/img/email.svg"
                    alt="icon"
                  />{" "}
                  info@kogents.ai
                </a>
                <a className="aboutIconPhone">
                  <Image
                    width={20}
                    height={20}
                    className=""
                    src="/assets/img/address.svg"
                    alt="icon"
                  />{" "}
                  4492, 1007 N Orange St. 4th Floor , Wilmington, DE, New
                  Castle, US, 19801
                </a>
              </div>
              <div className="contactSocial">
                <a
                  className="whatsapp"
                  href="https://www.facebook.com/kogents/"
                  style={{ background: "#0046c7" }}
                >
                  Facebook
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/facebook.svg"
                    alt="icon"
                  />
                </a>
                <a
                  className="messenger"
                  href="https://www.linkedin.com/company/kogentsai/"
                  style={{ background: "#0073B1" }}
                >
                  Linkedin
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/linkedin.svg"
                    alt="icon"
                  />
                </a>
                <a
                  className="Zoom"
                  href="https://x.com/kogentsai"
                  style={{ background: "#000000" }}
                >
                  Twitter
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/twitter.svg"
                    alt="icon"
                  />
                </a>
                <a
                  className="Voice"
                  href="https://www.youtube.com/@kogentsai"
                  style={{ background: "#F61C0D" }}
                >
                  Youtube
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/youtube.svg"
                    alt="icon"
                  />
                </a>
                <a
                  className="Chat"
                  href="https://www.instagram.com/kogentsai/"
                  style={{ background: "#6C1CD1" }}
                >
                  Instagram
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/instagram.svg"
                    alt="icon"
                  />
                </a>
                <a
                  className="Phone"
                  href="https://www.pinterest.com/kogentsai/"
                  style={{ background: "#D50012" }}
                >
                  Pinterest
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/pinterest.svg"
                    alt="icon"
                  />
                </a>
                <a
                  className="Phone"
                  href="https://www.tiktok.com/@kogentsai"
                  style={{ background: "#000000" }}
                >
                  TikTok
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/tiktok.svg"
                    alt="icon"
                  />
                </a>
              </div>
              <div className="contactIcons">
                <img
                  src="/assets/img/brand/5.svg"
                  width={176}
                  height={30}
                  alt="culture amp"
                />
                <img
                  src="/assets/img/brand/2.svg"
                  width={176}
                  height={30}
                  alt="spendesk"
                />
                <img
                  className="contactIcons3"
                  width={176}
                  height={30}
                  src="/assets/img/brand/4.svg"
                  alt="new relic"
                />
              </div>
            </div>

            {/* Contact Box 2 */}
            {/* <div className="contactBox mt-4 border rounded-lg md:p-12 bg-gd-tertiary border-b-600 aos-init aos-animate">
              <div className="w-75 mx-auto">
                <p className="text-light h3 text-center mt-2 fw-bold">
                  Dedicated Support for Enterprises
                </p>
                <p className="supportText">
                  KOgents Enterprise clients receive real-time support with
                  priority access to our AI engineers. Book a consultation to
                  discuss custom integrations&#44; enterprise-grade AI
                  workflows&#44; and support for cross-functional
                  implementation.
                </p>
                <a
                  href="#"
                  className="w-100 buttonAnimation2 flex justify-center items-center gap-2 px-6 py-[14px] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit mt-3 open-modal-btn"
                  data-modal-target="#welcomeModal"
                >
                  Contact Sales
                  <ArrowRightIcon />
                </a>
              </div>
            </div> */}
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="contactFormMain p-5 w-full md:max-w-[630px] rounded-lg bg-gd-tertiary border border-b-600">
              <h2 className="headingSize mb-1 contactFormHeading headingSizeContact">
                Book a <span>Free</span> Consultation
              </h2>
              <p className="text-light">
                Our experts will connect with you to understand your pain
                points&#44; identify automation opportunities&#44; and explore
                how Kogents AI agents can deliver measurable ROI.
              </p>
              <form
                className="mt-4 flex flex-col gap-3 contactForm"
                id="contact_form2"
                onSubmit={(e) =>
                  handleContactFormSubmit(
                    e,
                    () => {
                      resetForm();
                      console.log("resetForm here");
                    },
                    () => {
                      console.error("Failed to send message. Please try again.");
                    }
                  )
                }
              >
                {/* Success / Error */}
                {success && (
                  <div
                    className="border rounded-md p-3 mb-2"
                    style={{ background: "#0f5132", borderColor: "#badbcc" }}
                  >
                    <p className="m-0" style={{ color: "#d1e7dd" }}>
                      {success}
                    </p>
                  </div>
                )}
                {error && (
                  <div
                    className="border rounded-md p-3 mb-2"
                    style={{ background: "#5c2623", borderColor: "#f5c2c7" }}
                  >
                    <p className="m-0" style={{ color: "#f8d7da" }}>
                      <strong>Error:</strong> {error}
                    </p>
                  </div>
                )}
                <div className="w-100">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name Here"
                    className="form-control"
                    value={formData.name}
                    onChange={onChange("name")}
                    autoComplete="off"
                    required
                  />
                  <span className="validation-error text-light d-none"></span>
                </div>
                <div className="w-100">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                    value={formData.email}
                    onChange={onChange("email")}
                    autoComplete="off"
                    required
                  />
                  <span className="validation-error text-light d-none"></span>
                </div>
                <div className="w-100">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Your Phone Number"
                    className="form-control"
                    value={formData.phone}
                    onChange={onChange("phone")}
                    autoComplete="off"
                    required
                  />
                  <span className="validation-error text-light d-none"></span>
                </div>
                <div className="w-100">
                  <textarea
                    name="project_need"
                    id="project_need"
                    rows={3}
                    placeholder="Enter your message here"
                    className="form-control"
                    value={formData.project_need}
                    onChange={onChange("project_need")}
                    autoComplete="off"
                    required
                  ></textarea>
                  <span className="validation-error text-light d-none"></span>
                </div>
                {/* Hidden Tracking Fields (not required for submit, but kept for debug if needed) */}
                <input type="hidden" name="gclid" value={formData.gclid} />
                <input type="hidden" name="fbclid" value={formData.fbclid} />
                <input type="hidden" name="igclid" value={formData.igclid} />
                <input type="hidden" name="ttclid" value={formData.ttclid} />
                <input
                  type="hidden"
                  name="fingerprint"
                  value={formData.fingerprint}
                />
                <input type="hidden" name="chat" value={formData.chat} />
                <input
                  type="hidden"
                  name="stable_session_id"
                  value={formData.stable_session_id}
                />
                <input
                  type="hidden"
                  name="fingerprintdata"
                  value={formData.fingerprintdata}
                />

                <button
                  disabled={isLoading}
                  className="w-100 buttonAnimation2 flex justify-center items-center gap-2 px-6 py-[14px] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit mt-1"
                >
                  Submit
                  <ArrowRightIcon />
                </button>
              </form>
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
