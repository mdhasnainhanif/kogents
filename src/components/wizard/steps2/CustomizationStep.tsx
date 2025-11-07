"use client";

import React, { useState, useEffect } from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";
import { fileToBlob, validateFile } from "@/utils/fileUtils";
import SamplePage from "@/app/sample/page";
interface CustomizationStepProps {
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  footerOptions: FooterOptions;
  onValidationChange?: (isValid: boolean) => void;
  onValidate?: (validateFn: () => boolean) => void;
}

const PRESET_COLORS = [
  "#3b82f6", // Blue
  "#fbbf24", // Yellow
  "#f97316", // Orange
  "#22c55e", // Green
  "#06b6d4", // Light Blue
  "#ef4444", // Red
  "#BE9FE8", // Purple
  "#ec4899", // Pink
];

const AVATAR_OPTIONS = [
  { id: "avatar1", src: "/assets/img/brief/avatar1.png" },
  { id: "avatar2", src: "/assets/img/brief/avatar2.png" },
  { id: "avatar3", src: "/assets/img/brief/avatar3.png" },
  { id: "avatar4", src: "/assets/img/brief/avatar4.png" },
];

export const CustomizationStep = React.memo<CustomizationStepProps>(
  ({ data, onUpdate, errors, footerOptions, onValidationChange, onValidate }) => {
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [validationError, setValidationError] = useState<string>("");
    const [hasAttemptedNext, setHasAttemptedNext] = useState<boolean>(false);

    const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        if (!file.type.startsWith('image/')) {
          alert('Please select an image file');
          return;
        }
        
        const validation = validateFile(file, 5);
        if (!validation.valid) {
          alert(validation.error);
          return;
        }
        
        try {
          const blobData = await fileToBlob(file);
          
          const reader = new FileReader();
          reader.onload = (e) => {
            const result = e.target?.result as string;
            setAvatarPreview(result);
            
            onUpdate({
              appearance: {
                ...data.appearance,
                avatar: result,
                avatarName: file.name,
                avatarBlob: blobData,
              },
            });
          };
          reader.readAsDataURL(file);
        } catch (error) {
          console.error('Error converting image to blob:', error);
          alert('Error processing image file');
        }
      }
    };

    const handleAvatarSelect = (avatarId: string, avatarSrc: string) => {
      setAvatarPreview(avatarSrc);
      onUpdate({
        appearance: {
          ...data.appearance,
          avatar: avatarSrc,
          avatarName: avatarId,
        },
      });
    };

    const handleColorSelect = (color: string) => {
      onUpdate({
        appearance: {
          ...data.appearance,
          primaryColor: color,
        },
      });
    };

    // Validation function
    const validateSelection = () => {
      setHasAttemptedNext(true);
      
      const hasBotName = data.botname && data.botname.trim().length > 0;
      
      if (!hasBotName) {
        setValidationError("Please enter a bot name to continue.");
        return false;
      }
      
      setValidationError("");
      return true;
    };

    // Notify parent component about validation status
    useEffect(() => {
      const hasBotName = data.botname && data.botname.trim().length > 0;
      if (onValidationChange) {
        onValidationChange(true); // Always allow clicking Next
      }
    }, [data.botname, onValidationChange]);

    // Pass validation function to parent component
    useEffect(() => {
      if (onValidate) {
        onValidate(validateSelection);
      }
    }, [onValidate, data.botname]);

    // Create custom onNext handler
    const handleNext = () => {
      if (!validateSelection()) {
        return;
      }
      footerOptions.onNext();
    };

    const modifiedFooterOptions = {
      ...footerOptions,
      onNext: handleNext,
    };

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {/* Left Panel */}
            <div className="col-lg-6 chatbot-left-content-wrapper">
              <InViewAnimate animClass="fade-up-200" className="chatbot-content-wrapper">
                <div className="chatbot-content">
                  <div className="mb-4">
                    <div className="stepText my-2">Step 1 of 6</div>
                    <h2 className="h4 fw-bold text-white">How would you like to personalize your agent?</h2>
                  </div>

                  {/* Bot Name */}
                  <div className="mb-4">
                    <label htmlFor="botname" className="form-label">
                      Bot Name *
                    </label>
                    <input
                      type="text"
                      id="botname"
                      value={data.botname || ""}
                      autoComplete="off"
                      onChange={(e) => {
                        onUpdate({ botname: e.target.value });
                        if (e.target.value.trim().length > 0 && hasAttemptedNext) {
                          setValidationError("");
                        }
                      }}
                      placeholder="Enter Your Bot Name.."
                      className="form-control mt-2"
                    />
                  </div>

                  {/* Pick An Avatar */}
                  <div className="mb-4">
                    <label className="form-label mb-3 d-block h3">Pick An Avatar</label>
                    <div className="d-flex gap-3 flex-wrap">
                      {AVATAR_OPTIONS.map((avatar) => {
                        const isSelected = (avatarPreview || data.appearance.avatar) === avatar.src;
                        return (
                          <button
                            key={avatar.id}
                            onClick={() => handleAvatarSelect(avatar.id, avatar.src)}
                            className={`avatar-option ${isSelected ? "selected" : ""}`}
                            style={{
                              width: "65px",
                              height: "65px",
                              borderRadius: "50%",
                              border: isSelected ? "2px solid #5D51AF" : "2px solid #333",
                              padding: "5px",
                              background: "transparent",
                              cursor: "pointer",
                            }}
                          >
                            <img
                              src={avatar.src}
                              alt={avatar.id}
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                              onError={(e) => {
                                // Fallback to placeholder if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.src = "/assets/img/bot-ai.svg";
                              }}
                            />
                          </button>
                        );
                      })}
                      {/* Custom Upload Option */}
                      {/* <label
                        htmlFor="avatar-upload-custom"
                        className="avatar-option"
                        style={{
                          width: "65px",
                          height: "65px",
                          borderRadius: "50%",
                          border: "2px dashed #666",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          background: "#1a1a1a",
                        }}
                      >
                        <span style={{ fontSize: "24px" }}>+</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleAvatarUpload}
                          className="d-none"
                          id="avatar-upload-custom"
                        />
                      </label> */}
                    </div>
                  </div>

                  {/* Widget Color */}
                  <div className="mb-4">
                    <label className="form-label mb-2 d-block h3">
                      Widget Color
                    </label>
                    <p className="text-secondary mb-3">
                      Select a color that compliments your business logo/website theme
                    </p>
                    <div className="d-flex gap-3 flex-wrap align-items-center">
                      {PRESET_COLORS.map((color) => {
                        const isSelected = data.appearance.primaryColor === color;
                        return (
                          <button
                            key={color}
                            onClick={() => handleColorSelect(color)}
                            className="color-picker-btn"
                            style={{
                              width: "25px",
                              height: "25px",
                              borderRadius: "50%",
                              backgroundColor: color,
                              border: isSelected ? "2px solid #fff" : "2px solid #666",
                              cursor: "pointer",
                              position: "relative",
                            }}
                            title={color}
                          >
                            {isSelected && (
                              <span
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  color: "#fff",
                                  fontSize: "15px",
                                }}
                              >
                                ✓
                              </span>
                            )}
                          </button>
                        );
                      })}
                    {data.appearance.primaryColor && (
                      <div>
                        <p className="text-white">
                          <span className="text-purple colorText">{data.appearance.primaryColor}</span>
                        </p>
                      </div>
                    )}
                    </div>
                  </div>

                  {/* Validation Error Message */}
                  {validationError && hasAttemptedNext && (
                    <div>
                      <p className="text-danger">{validationError}</p>
                    </div>
                  )}
                </div>
              </InViewAnimate>

              <div className="chatbot-content-wrapper footer">
                <WizardNavigation2 {...modifiedFooterOptions} />
              </div>
            </div>

            {/* Right Panel (Preview) */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center hideOnMobile" style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}>
              {/* <img
                className="img-fluid"
                style={{ maxWidth: "25rem" }}
                src="/assets/img/brief/sarah.webp"
                alt="Preview"
                width={500}
                height={500}
              /> */}
              <SamplePage 
                botName={data.botname || 'Sarah'}
                avatar={avatarPreview || data.appearance?.avatar || undefined}
                primaryColor={data.appearance?.primaryColor || '#4a90e2'}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CustomizationStep.displayName = "CustomizationStep";

