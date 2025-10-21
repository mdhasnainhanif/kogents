"use client";

import { ChangeEvent, useEffect, useState } from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation3 } from "../WizardNavigation3";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

interface AppearanceStepProps {
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  footerOptions: FooterOptions;
}

export function AppearanceStep3({
  data,
  onUpdate,
  errors,
  footerOptions,
}: AppearanceStepProps) {
  // Define types for the component
  type CheckboxOption = string;

  // State to track checked checkboxes (array of indices)
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  // Handle checkbox change
  const handleCheckboxChange = (index: number) => {
    setCheckedItems(
      (prev) =>
        prev.includes(index)
          ? prev.filter((item) => item !== index) // Uncheck
          : [...prev, index] // Check
    );
  };


  const [botImage, setBotImage] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string>("/assets/img/logo_Botsonic.svg");

  const handleBotImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed.");
      return;
    }

    setBotImage(file);
    setPreviewUrl(URL.createObjectURL(file)); // ⬅️ generate image preview URL
  };

  const accentColors = [
    "rgb(177, 70, 70)",
    "rgb(204, 120, 73)",
    "rgb(223, 180, 25)",
    "rgb(162, 204, 73)",
    "rgb(73, 204, 149)",
    "rgb(47, 164, 201)",
    "rgb(47, 108, 201)",
    "rgb(186, 132, 228)",
    "rgb(228, 132, 155)",
  ]

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedCustomColor, setSelectedCustomColor] = useState<string | null>(null);

  const handPickColor = (e: ChangeEvent<HTMLInputElement>) => {
    const pickcolor = e.target.value;
    if (!pickcolor) return
    setSelectedCustomColor(pickcolor)
  }

  useEffect(() => {
    setSelectedColor(selectedCustomColor)
  }, [selectedCustomColor])


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
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="chatbot-content-wrapper"
            >
              <div className="chatbot-content">

                <div className="mb-4">
                  <div>Step 3 of 3</div>
                  <h2 className="h4 fw-bold">Customize Your Bot's Appearance</h2>
                  <p>Personalize your bot to match your brand.</p>
                  <p>See changes in real-time.</p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    {previewUrl && (
                      <div className="p-2 border border-secondary rounded">
                        <img
                          src={previewUrl}
                          alt="Bot Preview"
                          className="img-thumbnail"
                          style={{ width: "56px", height: "56px", objectFit: "cover" }}
                        />
                      </div>
                    )}

                    <div>
                      <span className="small d-block">Upload Bot Image</span>
                      <label
                        htmlFor="bot-image-upload"
                        className="btn btn-outline-primary bot_upload_img btn-sm mt-1"
                        style={{ fontSize: "12px" }}
                      >
                        Upload Image
                      </label>
                      <input
                        id="bot-image-upload"
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleBotImage}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="small mb-2">Choose Accent Color</p>
                    <div className="d-flex flex-wrap gap-2">
                      {accentColors.map((color, idx) => (
                        <div
                          key={idx}
                          onClick={() => setSelectedColor(color)}
                          className={`rounded border p-1 d-flex align-items-center justify-content-center`}
                          style={{
                            width: "44px",
                            height: "44px",
                            borderColor: selectedColor === color ? "#7f56d9" : "#ccc",
                            cursor: "pointer",
                          }}
                        >
                          <div
                            className="rounded"
                            style={{ width: "24px", height: "24px", backgroundColor: color }}
                          />
                        </div>
                      ))}

                      {/* Custom Color Picker */}
                      <div
                        className="rounded border p-1 d-flex align-items-center justify-content-center"
                        style={{
                          width: "44px",
                          height: "44px",
                          borderColor: selectedColor === selectedCustomColor ? "#7f56d9" : "#ccc",
                          cursor: "pointer",
                        }}
                      >
                        <label className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
                          <Image
                            src="/assets/img/color_pick_icon.png"
                            alt="Pick Custom Color"
                            width={24}
                            height={24}
                            className="img-fluid"
                          />
                          <input
                            type="color"
                            onChange={handPickColor}
                            className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="chatbot-content-wrapper footer">
            <WizardNavigation3 {...footerOptions} />
          </div>
        </div>

        {/* Right Panel: Live Preview */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}>
          <img
            className="img-fluid"
            style={{ maxWidth: "500px", height: "auto" }}
            src="/assets/img/step4img.svg"
            alt="Bot Preview"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>

  );
}
