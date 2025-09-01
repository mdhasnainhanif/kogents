"use client";

import type React from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import { AnimatePresence, motion } from "motion/react";

interface KnowledgeSourcesStepProps {
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  footerOptions: FooterOptions;
}

// Main component
export function KnowledgeSourcesStep2({
  data,
  onUpdate,
  errors,
  footerOptions,
}: KnowledgeSourcesStepProps) {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Panel */}
        <div className="col-lg-6 chatbot-left-content-wrapper">
          <AnimatePresence>
            <motion.div
              initial={{ y: 200, opacity: 0 }} // Start from -y (up from the viewport)
              animate={{ y: 0, opacity: 1 }} // Animate to the normal position (y = 0)
              exit={{ y: -200, opacity: 0 }} // Exit to +y (down out of the viewport)
              transition={{
                duration: 0.5,
                ease: "easeInOut", // Smooth easing effect
              }}
              className="chatbot-content-wrapper"
            >
              {/* Header */}
              <div className="chatbot-content">
                <div>
                  <div style={{ fontSize: '14px' }}>
                    Step 2 of 4
                  </div>
                  <h2 className="h2 mt-1 font-weight-bold text-white">
                    Tell Us About Your Company
                  </h2>
                  <p className="mt-1" style={{ fontSize: '16px' }}>
                    Share details about your company to customize your experience
                    and receive tailored recommendations
                  </p>
                </div>

                {/* Company Name */}
                <div className="mb-3">
                  <label htmlFor="company-name">Company Name *</label>
                  <input
                    id="company-name"
                    placeholder="Acme Corp."
                    className="form-control"
                    value={data.companyName || ""}
                    onChange={(e) => onUpdate({ companyName: e.target.value })}
                  />
                </div>

                {/* Employee Count */}
                <div className="mb-3">
                  <label htmlFor="employees">Select the number of employees</label>
                  <select 
                    id="employees" 
                    className="form-control"
                    value={data.employeeCount || ""}
                    onChange={(e) => onUpdate({ employeeCount: e.target.value })}
                  >
                    <option value="">Select one</option>
                    <option value="1-10">1–10</option>
                    <option value="11-50">11–50</option>
                    <option value="51-200">51–200</option>
                    <option value="201+">201+</option>
                  </select>
                </div>

                {/* Industry */}
                <div className="mb-3">
                  <label htmlFor="industry">
                    What industry does your company operate in?
                  </label>
                  <select 
                    id="industry" 
                    className="form-control"
                    value={data.industry || ""}
                    onChange={(e) => onUpdate({ industry: e.target.value })}
                  >
                    <option value="">Select one</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance</option>
                    <option value="Education">Education</option>
                    <option value="Retail">Retail</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Department */}
                <div className="mb-3">
                  <label htmlFor="department">What department are you in?</label>
                  <select 
                    id="department" 
                    className="form-control"
                    value={data.department || ""}
                    onChange={(e) => onUpdate({ department: e.target.value })}
                  >
                    <option value="">Select one</option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Engineering">Engineering</option>
                    <option value="HR">HR</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Operations">Operations</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="chatbot-content-wrapper footer">
            <WizardNavigation2 {...footerOptions} />
          </div>
        </div>

        {/* Right Panel */}
        <div
          className="col-lg-6 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}
        >
          <img
            className="img-fluid"
            src="/assets/img/step1img.svg"
            alt="Step Image"
            style={{ width: '600px', height: '600px' }}
          />
        </div>
      </div>
    </div>

  );
}
