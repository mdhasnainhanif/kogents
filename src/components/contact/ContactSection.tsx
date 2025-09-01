"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useFormStore } from "@/stores/useFormStore";
import { useTrackingParams } from "@/stores/useTrackingParams";
import { ArrowRightIcon } from "@/icons";

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
      // clear after success to ready next submission
      const t = setTimeout(() => resetForm(), 2000);
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
    <div className="lg:py-24 py-8 bg-center bg-no-repeat bg-cover bg-[url('img/bc/contact-bg.png')]">
      <div className="container">
        <div className="row rowGap">
          {/* Left Column */}
          <div className="col-lg-6 contact_boxes_height">
            {/* Contact Box 1 */}
            <div className="contactBox border rounded-lg md:p-12 bg-gd-tertiary border-b-600 aos-init aos-animate">
              <span
                //
                className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto"
              >
                Find By Industry
              </span>
              <a className="number text-light">+1 405 644 3883</a>
              <p className="text-light h4 text-center mt-2">
                AI Agent Assistance Available
              </p>
              <div className="contactSocial">
                <a
                  className="whatsapp"
                  href="#"
                  style={{ background: "#208459" }}
                >
                  Whatsapp
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/Icons_Whatsapp.svg"
                    alt="icon"
                  />
                </a>
                <a
                  className="messenger"
                  href="#"
                  style={{ background: "#1877f2" }}
                >
                  Messenger
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/Icons_Messenger.svg"
                    alt="icon"
                  />
                </a>
                <a className="Zoom" href="#" style={{ background: "#0046c7" }}>
                  Zoom
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/Icons_Zoom.svg"
                    alt="icon"
                  />
                </a>
                <a className="Voice" href="#" style={{ background: "#252d5b" }}>
                  Voice
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/Icons_Voice.svg"
                    alt="icon"
                  />
                </a>
                <a className="Chat" href="#" style={{ background: "#7923dd" }}>
                  Chat
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/Icons_Chat.svg"
                    alt="icon"
                  />
                </a>
                <a className="Phone" href="#" style={{ background: "#0075e3" }}>
                  Phone
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/Icons_Phone.svg"
                    alt="icon"
                  />
                </a>
              </div>
            </div>

            {/* Contact Box 2 */}
            <div className="contactBox mt-4 border rounded-lg md:p-12 bg-gd-tertiary border-b-600 aos-init aos-animate">
              <div className="w-75 mx-auto">
                <p className="text-light h3 text-center mt-2 fw-bold">
                  Dedicated Support for Enterprises
                </p>
                <p className="supportText">
                  Jotform Enterprise clients receive real-time support with
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
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="contactFormMain p-5 w-full md:max-w-[630px] rounded-lg bg-gd-tertiary border border-b-600">
              <h2 className="headingSize mb-1 contactFormHeading">
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
                onSubmit={onSubmit}
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
