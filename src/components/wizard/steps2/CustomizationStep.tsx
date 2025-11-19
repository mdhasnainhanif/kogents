"use client";

import React, { useState, useEffect } from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";
import { fileToBlob, validateFile } from "@/utils/fileUtils";
import { ChatWidget } from "../ChatWidget";
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
  ({
    data,
    onUpdate,
    errors,
    footerOptions,
    onValidationChange,
    onValidate,
  }) => {
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>(
      {}
    );
    const [hasAttemptedNext, setHasAttemptedNext] = useState<boolean>(false);
    const [hexInputValue, setHexInputValue] = useState<string>("");

    // ✅ Set default avatar on component mount if no avatar is selected
    useEffect(() => {
      // Only set default if no avatar is currently selected
      if (!data.appearance?.avatar && !avatarPreview) {
        const defaultAvatar = AVATAR_OPTIONS[0]; // First avatar (avatar1)
        setAvatarPreview(defaultAvatar.src);
        onUpdate({
          appearance: {
            ...data.appearance,
            avatar: defaultAvatar.src,
            avatarName: defaultAvatar.id,
          },
        });
      }
    }, []); // Run only once on mount

    const handleAvatarUpload = async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const file = e.target.files?.[0];
      if (file) {
        if (!file.type.startsWith("image/")) {
          alert("Please select an image file");
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
          console.error("Error converting image to blob:", error);
          alert("Error processing image file");
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
      // Sync hex input value
      setHexInputValue(color.toUpperCase());
      // Clear error when color is selected
      if (hasAttemptedNext) {
        setFieldErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.primaryColor;
          return newErrors;
        });
      }
    };

    // Sync hex input when primary color changes externally
    useEffect(() => {
      if (data.appearance?.primaryColor) {
        setHexInputValue(data.appearance.primaryColor.toUpperCase());
      }
    }, [data.appearance?.primaryColor]);

    // Validation function
    const validateSelection = () => {
      setHasAttemptedNext(true);
      const errors: { [key: string]: string } = {};

      // Validate bot name
      const hasBotName = data.botname && data.botname.trim().length > 0;
      if (!hasBotName) {
        errors.botname = "Please enter a bot name to continue.";
      }

      // Validate primary color
      const hasPrimaryColor =
        data.appearance?.primaryColor &&
        data.appearance.primaryColor.trim().length > 0;
      if (!hasPrimaryColor) {
        errors.primaryColor = "Please select a widget color to continue.";
      }

      setFieldErrors(errors);
      return Object.keys(errors).length === 0;
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
    }, [onValidate, data.botname, data.appearance?.primaryColor]);

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
              <InViewAnimate
                animClass="fade-up-200"
                className="chatbot-content-wrapper"
              >
                <div className="chatbot-content">
                  <div className="mb-4">
                    <div className="stepText my-2">Step 1 of 6</div>
                    <h2 className="h4 fw-bold text-white">
                      How would you like to personalize your agent?
                    </h2>
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
                        if (
                          e.target.value.trim().length > 0 &&
                          hasAttemptedNext
                        ) {
                          setFieldErrors((prev) => {
                            const newErrors = { ...prev };
                            delete newErrors.botname;
                            return newErrors;
                          });
                        }
                      }}
                      placeholder="Enter Your Bot Name.."
                      className={`form-control mt-2 ${
                        fieldErrors.botname && hasAttemptedNext
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    {fieldErrors.botname && hasAttemptedNext && (
                      <div className="text-danger mt-1 small">
                        {fieldErrors.botname}
                      </div>
                    )}
                  </div>

                  {/* Pick An Avatar */}
                  <div className="mb-4">
                    <label className="form-label mb-3 d-block h3">
                      Pick An Avatar
                    </label>
                    <div className="d-flex gap-3 flex-wrap">
                      {AVATAR_OPTIONS.map((avatar) => {
                        const isSelected =
                          (avatarPreview || data.appearance.avatar) ===
                          avatar.src;
                        return (
                          <button
                            key={avatar.id}
                            onClick={() =>
                              handleAvatarSelect(avatar.id, avatar.src)
                            }
                            className={`avatar-option ${
                              isSelected ? "selected" : ""
                            }`}
                            style={{
                              width: "65px",
                              height: "65px",
                              borderRadius: "50%",
                              border: isSelected
                                ? "2px solid #5d51af"
                                : "2px solid #333",
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
                      Widget Color *
                    </label>
                    <p className="text-secondary mb-3">
                      Select a color that compliments your business logo/website
                      theme
                    </p>
                    <div
                      className={`d-flex gap-3 flex-wrap align-items-center ${
                        fieldErrors.primaryColor && hasAttemptedNext
                          ? "border border-danger rounded p-2"
                          : ""
                      }`}
                    >
                      {PRESET_COLORS.map((color) => {
                        const isSelected =
                          data.appearance.primaryColor === color;
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
                              border: isSelected
                                ? "2px solid #fff"
                                : "2px solid #666",
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

                      {/* {data.appearance.primaryColor && (
                        <div className="d-flex align-items-center gap-2 ms-2">
                          <input
                            type="color"
                            id="custom-color-picker"
                            value={data.appearance.primaryColor}
                            onChange={(e) => handleColorSelect(e.target.value)}
                            style={{
                              position: "absolute",
                              opacity: 0,
                              width: 0,
                              height: 0,
                              pointerEvents: "none",
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const colorInput = document.getElementById(
                                "custom-color-picker"
                              ) as HTMLInputElement;
                              colorInput?.click();
                            }}
                            style={{
                              width: "28px",
                              height: "28px",
                              borderRadius: "50%",
                              border: "1px solid #333",
                              backgroundColor: "#1a1a1a",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: 0,
                              flexShrink: 0,
                            }}
                            title="Pick a color"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zM7.5 12c-.83 0-1.5-.67-1.5-1.5S6.67 9 7.5 9 9 9.67 9 10.5 8.33 12 7.5 12zm3-4C9.67 8 9 7.33 9 6.5S9.67 5 10.5 5 12 5.67 12 6.5 11.33 8 10.5 8zm5 4c-.83 0-1.5-.67-1.5-1.5S14.67 9 15.5 9 17 9.67 17 10.5 16.33 12 15.5 12zm3 4c-.83 0-1.5-.67-1.5-1.5S17.67 13 18.5 13 20 13.67 20 14.5 19.33 16 18.5 16z"
                                fill="url(#customColorGradient)"
                              />
                              <defs>
                                <linearGradient
                                  id="customColorGradient"
                                  x1="0%"
                                  y1="0%"
                                  x2="100%"
                                  y2="100%"
                                >
                                  <stop
                                    offset="0%"
                                    style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
                                  />
                                  <stop
                                    offset="33%"
                                    style={{ stopColor: "#22c55e", stopOpacity: 1 }}
                                  />
                                  <stop
                                    offset="66%"
                                    style={{ stopColor: "#fbbf24", stopOpacity: 1 }}
                                  />
                                  <stop
                                    offset="100%"
                                    style={{ stopColor: "#ec4899", stopOpacity: 1 }}
                                  />
                                </linearGradient>
                              </defs>
                            </svg>
                          </button>
                          <div className="d-flex align-items-center">
                            <input
                              type="text"
                              value={hexInputValue}
                              readOnly
                              onClick={() => {
                                const colorInput = document.getElementById(
                                  "custom-color-picker"
                                ) as HTMLInputElement;
                                colorInput?.click();
                              }}
                              placeholder="#000000"
                              className="form-control"
                              style={{
                                width: "100px",
                                fontSize: "14px",
                                backgroundColor: "#1a1a1a",
                                border: "1px solid #333",
                                color: "#fff",
                                textAlign: "center",
                                padding: "6px 8px",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                      )} */}
                    </div>
                    {fieldErrors.primaryColor && hasAttemptedNext && (
                      <div className="text-danger mt-2 small">
                        {fieldErrors.primaryColor}
                      </div>
                    )}
                  </div>
                </div>
              </InViewAnimate>

              <div className="chatbot-content-wrapper footer">
                <WizardNavigation2 {...modifiedFooterOptions} />
              </div>
            </div>

            {/* Right Panel (Preview) */}
            <div
              className="col-lg-6 d-flex align-items-center justify-content-center hideOnMobile"
              style={{
                backgroundColor: "#02000e",
                height: "calc(100vh - 68px)",
              }}
            >
              <ChatWidget
                botName={data.botname || "Sarah"}
                avatar={avatarPreview || data.appearance?.avatar || undefined}
                primaryColor={data.appearance?.primaryColor || "#4a90e2"}
                step={1} // Add step prop to ensure default messages show
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CustomizationStep.displayName = "CustomizationStep";
