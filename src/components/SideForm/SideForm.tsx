"use client";
import React, { useState, useEffect } from 'react';
import { useFormStore } from '@/stores/useFormStore';
import { ArrowRightIcon } from '@/icons';
import styles from './SideForm.module.css';

const SideForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [componentLoaded, setComponentLoaded] = useState(false);
  
  const {
    formData,
    isLoading,
    error,
    success,
    updateField,
    submitForm,
    resetForm,
  } = useFormStore();

  useEffect(() => {
    // Delay component loading by 30 seconds
    const componentTimer = setTimeout(() => {
      setComponentLoaded(true);
    }, 30000);

    return () => clearTimeout(componentTimer);
  }, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    updateField(field, value);
  };

  const toggleForm = () => { 
    console.log('Toggle clicked, current isOpen:', isOpen);
    setIsOpen(!isOpen);
    if (!isOpen) {
      resetForm();
    }
  };

  // Don't render until component is loaded
  if (!componentLoaded) {
    return null;
  }

  console.log('Rendering SideForm, isOpen:', isOpen, 'componentLoaded:', componentLoaded);
  
  return (
    <div className={styles['position-absolute']}>
      <div className={`${styles['static_form_main']} ${isOpen ? styles['right_0_rem'] : ''}`}>
        {/* Toggle Icon */}
        <div className={`sideFormIcon ${styles['staticform_icon']} ${styles.letsGetStartedToggle}`} onClick={toggleForm}>
          <h6>Book a Free Consultation!</h6>
        </div>
        
        {/* Form Content */}
        <div className={`${styles['side_form']} pt-4 pb-3 px-4 mx-auto`}>
          <h3 className={`${styles.heading} text-center text-white fw-bold h3`}>
            Book a <span className="textPurpleForm">Free</span> Consultation
          </h3>
          <form className={`mt-2 contactForm ${styles['sidepopup-form']}`} onSubmit={handleSubmit}>
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

            {/* Name Field */}
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name Here"
                className={styles.formControl}
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
              <span className="validation-error text-light d-none"></span>
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className={`${styles.formControl} mt-3`}
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
              />
              <span className="validation-error text-light d-none"></span>
            </div>

            {/* Email Field */}
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className={`${styles.formControl} mt-3`}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
              <span className="validation-error text-light d-none"></span>
            </div>

            {/* Project Description */}
            <div className="form-group">
              <textarea
                rows={3}
                id="project_need"
                name="project_need"
                placeholder="Describe Your Project Need"
                className={`${styles.formControl} bannerFormTextArea mt-3`}
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
  );
};

export default SideForm;