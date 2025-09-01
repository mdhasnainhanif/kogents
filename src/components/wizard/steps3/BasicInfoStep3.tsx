"use client";

import React from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation3 } from "../WizardNavigation3";
import { AnimatePresence, motion } from "motion/react";

interface BasicInfoStepProps {
  footerOptions: FooterOptions;
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
}

export const BasicInfoStep3 = React.memo<BasicInfoStepProps>(
  ({ data, onUpdate, errors = [], footerOptions }) => {
    // console.log(onUpdate);

    return (
      <div className="container-fluid">
        <div className="row">
          {/* Left Panel */}
          <div className="col-lg-6 chatbot-left-content-wrapper">
            <AnimatePresence>
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="chatbot-content-wrapper"
              >
                <div className="chatbot-content">
                  <div className="ps-0 pt-0 mb-3">
                    <div>Step 1 of 3</div>
                    <div className="fs-5 fw-semibold">What would you like to name your bot?</div>
                    <div>You can always change this later.</div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="bot-name">
                      Bot Name *
                    </label>
                    <input
                      id="bot-name"
                      placeholder="Bot Name"
                      value={data.name}
                      onChange={(e) => onUpdate({ name: e.target.value })}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="chatbot-content-wrapper footer">
              <WizardNavigation3 {...footerOptions} />
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}>
            <img
              className="img-fluid"
              style={{ maxWidth: "500px", height: "auto" }}
              src="/assets/img/step1img.svg"
              alt="Bot Preview"
            />
          </div>
        </div>
      </div>

    );
  }
);

BasicInfoStep3.displayName = "BasicInfoStep2";
