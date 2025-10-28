"use client";

import React, { useRef, useEffect, useState } from "react";
import { useModalStore } from "@/stores/useModalStore";
import { useFormStore } from "@/stores/useFormStore";
import { useTrackingParams } from "@/stores/useTrackingParams";
import { ArrowRightIcon } from "@/icons";
import { handleContactFormSubmit } from "@/services/contactFormService";

const CTAModal = () => {
  const { isOpen, closeModal } = useModalStore();
  // Debug: log when modal renders and state
  // console.log("CTAModal rendered, isOpen:", isOpen);
  const {
    formData,
    isLoading,
    error,
    success,
    updateField,
    submitForm,
    resetForm,
  } = useFormStore();
  
  const modalRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);

  // Initialize tracking parameters
  useTrackingParams();

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      // Delay unmounting for exit animation
      const timeout = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    if (success) {
      // Close modal after successful submission
      setTimeout(() => {
        resetForm();
        closeModal();
      }, 2000);
    }
  }, [success, closeModal, resetForm]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleContactFormSubmit(e);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    updateField(field, value);
  };

  if (!shouldRender) return null;

  return (
    <div
      onClick={handleOutsideClick}
      className={`
        modalforblog fixed top-0 left-0 z-[9999] w-full h-full flex items-center justify-center
        bg-black transition-all duration-700 ease-in-out
        ${isOpen ? "bg-opacity-50 backdrop-blur-sm opacity-100 pointer-events-auto" : "bg-opacity-0 backdrop-blur-none opacity-0 pointer-events-none"}
      `}
    >
      <div
        ref={modalRef}
        id="welcomeModal"
        className={`
          custom_modal contactSection p-0 bg-white rounded-xl shadow-2xl overflow-hidden relative max-w-5xl w-full
          transform transition-all duration-700 ease-in-out
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-6"}
        `}
      >
        <button
          className="btn_primary_modal custom_modal_close_btn"
          id="closeModal"
          onClick={closeModal}
        >
          <i className="h5 d-flex align-items-center fa-solid fa-xmark">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </i>
        </button>

        <div className="row position-relative">
          {/* Left side */}
          <div className="col-md-6 p-md-0">
            <div className="home_modal_bg">
              <div className="section-heading mt-2">
                <h6 className="text-light">
                  Smart and custom AI Agents that help <br /> you build a secure and reliable future.
                </h6>
                <h3 className="text-light modalHeading">
                  <span>Unlock</span> the Power of AI
                </h3>
                <img className="modalPhoneImg" src="/assets/img/robo.webp" width={350} height={275} alt="Robot" />
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="col-md-6 p-md-0">
            <div className="modal_form py-4 px-md-3 mx-auto">
              <div className="form2">
                <form id="contact_form" onSubmit={handleSubmit}>
                  <h2 className="bookConsultation modalBookFree">
                    <span className="textGray">Book Your</span> Free Consultation
                  </h2>

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
                      className="form-control"
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
        </div>
      </div>
    </div>
  );
};

export default CTAModal;
