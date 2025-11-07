"use client";

import React, { useState, useEffect, useCallback } from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";
import { filesToBlobs } from "@/utils/fileUtils";
import { Link, FileText } from "lucide-react";

interface TrainingDataStepProps {
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  footerOptions: FooterOptions;
  onValidationChange?: (isValid: boolean) => void;
  onValidate?: (validateFn: () => boolean) => void;
}

export const TrainingDataStep = React.memo<TrainingDataStepProps>(
  ({ data, onUpdate, errors, footerOptions, onValidationChange, onValidate }) => {
    const [trainingMethod, setTrainingMethod] = useState<"url" | "files">("url");
    const [websiteUrl, setWebsiteUrl] = useState<string>("");
    const [validationError, setValidationError] = useState<string>("");
    const [hasAttemptedNext, setHasAttemptedNext] = useState<boolean>(false);

    // Initialize from data
    useEffect(() => {
      if (data.knowledgeSources?.urls?.length > 0) {
        setTrainingMethod("url");
        setWebsiteUrl(data.knowledgeSources.urls[0] || "");
      } else if (data.knowledgeSources?.files?.length > 0) {
        setTrainingMethod("files");
      }
    }, []);

    const handleMethodSelect = (method: "url" | "files") => {
      setTrainingMethod(method);
      setWebsiteUrl("");
      setValidationError("");
    };

    const handleUrlChange = (url: string) => {
      setWebsiteUrl(url);
      // Normalize URL (add https:// if missing)
      const normalizedUrl = url.trim() 
        ? (url.startsWith('http') ? url : `https://${url}`)
        : "";
      
      onUpdate({
        knowledgeSources: {
          ...data.knowledgeSources,
          urls: normalizedUrl ? [normalizedUrl] : [],
        },
      });
      
      if (url.trim().length > 0 && hasAttemptedNext) {
        setValidationError("");
      }
    };

    const handleFileChange = useCallback(
      async (files: File[]) => {
        try {
          const blobFiles = await filesToBlobs(files);
          onUpdate({
            knowledgeSources: {
              ...data.knowledgeSources,
              files,
            },
            blobData: {
              ...data.blobData,
              trainingFiles: blobFiles,
            },
          });
        } catch (error) {
          console.error('Error converting files to blobs:', error);
          onUpdate({
            knowledgeSources: {
              ...data.knowledgeSources,
              files,
            },
          });
        }
      },
      [data.knowledgeSources, data.blobData, onUpdate]
    );

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(e.target.files || []);
      if (selectedFiles.length > 0) {
        handleFileChange([...data.knowledgeSources?.files || [], ...selectedFiles]);
      }
    };

    // Validation function
    const validateSelection = () => {
      setHasAttemptedNext(true);
      
      if (trainingMethod === "url") {
        if (!websiteUrl || websiteUrl.trim().length === 0) {
          setValidationError("Please enter your website URL to continue.");
          return false;
        }
      } else if (trainingMethod === "files") {
        if (!data.knowledgeSources?.files || data.knowledgeSources.files.length === 0) {
          setValidationError("Please upload at least one file to continue.");
          return false;
        }
      }
      
      setValidationError("");
      return true;
    };

    // Notify parent component about validation status
    useEffect(() => {
      const isValid = trainingMethod === "url" 
        ? (websiteUrl && websiteUrl.trim().length > 0)
        : (data.knowledgeSources?.files && data.knowledgeSources.files.length > 0);
      
      if (onValidationChange) {
        onValidationChange(true); // Always allow clicking Next
      }
    }, [trainingMethod, websiteUrl, data.knowledgeSources?.files, onValidationChange]);

    // Pass validation function to parent component
    useEffect(() => {
      if (onValidate) {
        onValidate(validateSelection);
      }
    }, [onValidate, trainingMethod, websiteUrl, data.knowledgeSources?.files]);

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
                    <div className="stepText my-2">Step 4 of 6</div>
                    <h2 className="h4 fw-bold text-white">
                      In order to train your agent, provide your website URL or company profile document
                    </h2>
                    <p className="text-secondary">
                      No errors should be produced and process whatever data the customer gives
                    </p>
                  </div>

                  {/* Method Selection Buttons */}
                  <div className="mb-4 d-flex gap-3">
                    <button
                      onClick={() => handleMethodSelect("url")}
                      className={`btn flex-1 d-flex flex-column align-items-center justify-content-center p-4 ${
                        trainingMethod === "url" ? "btn-primary" : "btn-outline-secondary"
                      }`}
                      style={{
                        backgroundColor: trainingMethod === "url" ? "#BE9FE8" : "transparent",
                        borderColor: trainingMethod === "url" ? "#BE9FE8" : "#666",
                        color: trainingMethod === "url" ? "#fff" : "#999",
                        minHeight: "120px",
                      }}
                    >
                      <Link size={32} className="mb-2" />
                      <span>URL</span>
                    </button>
                    <button
                      onClick={() => handleMethodSelect("files")}
                      className={`btn flex-1 d-flex flex-column align-items-center justify-content-center p-4 ${
                        trainingMethod === "files" ? "btn-primary" : "btn-outline-secondary"
                      }`}
                      style={{
                        backgroundColor: trainingMethod === "files" ? "#BE9FE8" : "transparent",
                        borderColor: trainingMethod === "files" ? "#BE9FE8" : "#666",
                        color: trainingMethod === "files" ? "#fff" : "#999",
                        minHeight: "120px",
                      }}
                    >
                      <FileText size={32} className="mb-2" />
                      <span>Files</span>
                    </button>
                  </div>

                  {/* URL Input */}
                  {trainingMethod === "url" && (
                    <div className="mb-4">
                      <label htmlFor="websiteUrl" className="form-label">
                        Enter your company website
                      </label>
                      <input
                        type="text"
                        id="websiteUrl"
                        value={websiteUrl}
                        autoComplete="off"
                        onChange={(e) => handleUrlChange(e.target.value)}
                        placeholder="Enter Your Website URL"
                        className="form-control mt-2"
                      />
                    </div>
                  )}

                  {/* File Upload */}
                  {trainingMethod === "files" && (
                    <div className="mb-4">
                      <label className="form-label d-block mb-3">
                        Upload Company Profile Documents
                      </label>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.txt,.md"
                        onChange={handleFileInput}
                        className="form-control mt-2"
                      />
                      {data.knowledgeSources?.files && data.knowledgeSources.files.length > 0 && (
                        <div className="mt-3">
                          <p className="text-white mb-2">Uploaded Files:</p>
                          <ul className="list-unstyled">
                            {data.knowledgeSources.files.map((file, index) => (
                              <li key={index} className="text-secondary">
                                {file.name} ({(file.size / 1024).toFixed(2)} KB)
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Note */}
                  <div className="mb-4 p-3 bg-dark rounded">
                    <p className="text-secondary small mb-0">
                      <strong>Note:</strong> Since this is a demo version trained only on your website/document. It only reflects 10-15% capability. To unlock full potential, our engineering team will gather your requirements in detail to execute the fully featured version ahead.
                    </p>
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
              <img
                className="img-fluid"
                src="/assets/img/chat-img-2.svg"
                alt="Preview"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

TrainingDataStep.displayName = "TrainingDataStep";

