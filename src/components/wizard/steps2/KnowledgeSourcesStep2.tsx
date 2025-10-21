"use client";

import type React from "react";
import { useState, useEffect } from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import { AnimatePresence, motion } from "motion/react";
import { fileToBlob, dataUrlToBlob, validateFile } from "@/utils/fileUtils";

interface KnowledgeSourcesStepProps {
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  footerOptions: FooterOptions;
  onValidationChange?: (isValid: boolean) => void;
  onValidate?: (validateFn: () => boolean) => void;
}

const CHAT_BUBBLE_STYLES = [
  { id: "rounded", name: "Rounded", preview: "rounded-2xl" },
  { id: "square", name: "Square", preview: "rounded-md" },
  { id: "minimal", name: "Minimal", preview: "rounded-sm" },
]

const FONT_FAMILIES = [
  { id: "system", name: "System Default", class: "font-sans" },
  { id: "modern", name: "Modern", class: "font-mono" },
  { id: "classic", name: "Classic", class: "font-serif" },
]

const PRESET_COLORS = [
  "#8B4513", // Brown
  "#FF8C00", // Orange  
  "#FFD700", // Yellow
  "#90EE90", // Light Green
  "#20B2AA", // Teal
  "#87CEEB", // Light Blue
  "#DDA0DD", // Light Purple
  "#FFB6C1"  // Pink
]

// Main component
export function KnowledgeSourcesStep2({
  data,
  onUpdate,
  errors,
  footerOptions,
  onValidationChange,
  onValidate,
}: KnowledgeSourcesStepProps) {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      // Validate file size (max 5MB)
      const validation = validateFile(file, 5);
      if (!validation.valid) {
        alert(validation.error);
        return;
      }
      
      try {
        // Convert file to blob data for CRM
        const blobData = await fileToBlob(file);
        console.log('Image uploaded successfully and converted to blob');
        
        // Read file for preview
        const reader = new FileReader()
        reader.onload = (e) => {
          const result = e.target?.result as string
          setAvatarPreview(result)
          
          // Update wizard data with both preview and blob
          onUpdate({
            appearance: {
              ...data.appearance,
              avatar: result, // Keep for preview
              avatarName: file.name,
              avatarBlob: blobData, // Add blob for CRM
            },
          })
        }
        reader.onerror = () => {
          alert('Error reading file for preview');
        }
        reader.readAsDataURL(file)
        
      } catch (error) {
        console.error('Error converting image to blob:', error);
        alert('Error processing image file');
      }
    }
  }

  const updateAppearance = (updates: Partial<ChatbotWizardData["appearance"]>) => {
    onUpdate({
      appearance: {
        ...data.appearance,
        ...updates,
      },
    })
  }

  // Always allow proceeding - no validation needed for optional image upload
  useEffect(() => {
    if (onValidationChange) {
      onValidationChange(true); // Always valid since image is optional
    }
  }, [onValidationChange]);

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
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-6 content-center">
                    <div>
                      <div className="stepText">Step 3 of 5</div>
                      <h2 className="text-2xl my-2 fw-bold tracking-tight text-white">Customize Your Bot's Appearance</h2>
                      <p className="text-muted-foreground">Personalize your bot to match your brand.</p>
                      <p className="text-muted-foreground">See changes in real-time.</p>
                    </div>

                    {/* Upload Bot Image */}
                    <div className="my-5">
                      <div className="flex items-center gap-6 mt-3 align-items-center">
                        <div className="w-16 h-16 rounded-lg botImg flex items-center justify-center overflow-hidden shadow-lg">
                          {avatarPreview || data.appearance.avatar ? (
                            <img
                              src={avatarPreview || data.appearance.avatar || ""}
                              alt="Bot Avatar"
                              className="w-full h-full object-cover rounded-lg uploadedImg"
                            />
                          ) : (
                            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                              <img src="/assets/img/bot-ai.svg" width={54} height={57} alt="Bot Avatar" />
                            </div>
                          )}
                        </div>
                        <div>
                        <h3 className="text-lg text-white mb-3">Upload Bot Image</h3>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarUpload}
                            className="hidden"
                            id="avatar-upload"
                          />
                          <button 
                            onClick={() => document.getElementById('avatar-upload')?.click()}
                            className="px-6 py-2 uploadBtn"
                          >
                            Upload image
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Choose Accent Color */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Choose Accent Color</h3>
                      <div className="flex gap-3 mt-2 flex-wrap">
                        {PRESET_COLORS.map((color) => (
                          <button
                            key={color}
                            onClick={() => {
                              // console.log('Color clicked:', color);
                              updateAppearance({ primaryColor: color });
                            }}
                            className={`colorPicker rounded-lg border-2 shadow-sm hover:scale-110 transition-transform ${
                              data.appearance.primaryColor === color 
                                ? 'border-purple-400' 
                                : 'border-gray-300'
                            }`}
                            style={{ 
                              backgroundColor: color,
                              borderColor: data.appearance.primaryColor === color ? '#a855f7' : '#d1d5db'
                            }}
                            title={`Select ${color}`}
                          />
                        ))}
                        {/* Rainbow gradient color picker */}
                        <div className="relative">
                          <input
                            type="color"
                            value={data.appearance.primaryColor}
                            onChange={(e) => {
                              console.log('Custom color selected:', e.target.value);
                              updateAppearance({ primaryColor: e.target.value });
                            }}
                            className="colorPicker rounded-lg border-2 shadow-sm cursor-pointer opacity-0 absolute z-10"
                          />
                          <div
                            className={`colorPicker rounded-lg border-2 shadow-sm hover:scale-110 transition-transform cursor-pointer ${
                              data.appearance.primaryColor && !PRESET_COLORS.includes(data.appearance.primaryColor)
                                ? 'border-purple-400' 
                                : 'border-gray-300'
                            }`}
                            style={{ 
                              backgroundImage: 'linear-gradient(to right, #ef4444, #f59e0b, #eab308, #22c55e, #06b6d4, #3b82f6, #8b5cf6, #ec4899)',
                              borderColor: data.appearance.primaryColor && !PRESET_COLORS.includes(data.appearance.primaryColor) ? '#a855f7' : '#d1d5db'
                            }}
                            title="Custom color picker"
                            onClick={() => {
                              console.log('Custom color picker clicked');
                              (document.querySelector('input[type="color"]') as HTMLInputElement)?.click();
                            }}
                          />
                        </div>
                      </div>
                    </div>

                  </div>
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
          className="col-lg-6 d-flex align-items-center justify-content-center step-3imgMain"
          style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}
        >
          <img
            className="img-fluid" 
            src="/assets/img/step-3img.svg"
            alt="Step Image"
          />
        </div>
      </div>
    </div>
  );
}
