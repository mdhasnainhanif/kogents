"use client";
import React, { useState, useEffect } from 'react';
import { useFormStore } from '@/stores/useFormStore';
import { ArrowRightIcon } from '@/icons';

const SideForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stylesLoaded, setStylesLoaded] = useState(false);
  const [styles, setStyles] = useState<any>({});
  
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
    // Load CSS module dynamically after component mounts
    const loadStyles = async () => {
      try {
        // Import the CSS module dynamically
        const stylesModule = await import('./SideForm.module.css');
        setStyles(stylesModule.default);
        setStylesLoaded(true);
      } catch (error) {
        console.error('Failed to load SideForm styles:', error);
        // Fallback: create empty styles object
        setStyles({});
        setStylesLoaded(true);
      }
    };

    // Delay loading to avoid render blocking
    const timer = setTimeout(loadStyles, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    updateField(field, value);
  };

  const toggleForm = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      resetForm();
    }
  };

  // Don't render until styles are loaded
  if (!stylesLoaded) {
    return null;
  }

  return (
    <div className={styles['position-absolute'] || 'position-absolute'}>
      <div className={`${styles['static_form_main'] || 'static_form_main'} ${isOpen ? (styles['right_0_rem'] || 'right_0_rem') : ''}`}>
        {/* Toggle Icon */}
        <div className={`${styles['staticform_icon'] || 'staticform_icon'} ${styles.letsGetStartedToggle || 'letsGetStartedToggle'}`} onClick={toggleForm}>
          <h6>Book a Free Consultation!</h6>
        </div>
        
        {/* Form Content */}
        <div className={`${styles['side_form'] || 'side_form'} pt-4 pb-3 px-4 mx-auto`}>
          <h3 className={`${styles.heading || 'heading'} text-center text-white fw-bold h3`}>
            Book a <span className="textPurpleForm">Free</span> Consultation
          </h3>
          <form className={`mt-2 contactForm ${styles['sidepopup-form'] || 'sidepopup-form'}`} onSubmit={handleSubmit}>
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
                className={`${styles.formControl || 'formControl'}`}
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
                className={`${styles.formControl || 'formControl'} mt-3`}
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
                className={`${styles.formControl || 'formControl'} mt-3`}
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
                className={`${styles.formControl || 'formControl'} bannerFormTextArea mt-3`}
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