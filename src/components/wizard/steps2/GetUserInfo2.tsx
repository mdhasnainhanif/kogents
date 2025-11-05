"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";
import { PaperPlaneIcon } from "@/icons";
import { Link as LinkIcon, Folder } from "lucide-react";
import { filesToBlobs, validateFile } from "@/utils/fileUtils";

interface BasicInfoStepProps {
  footerOptions: FooterOptions;
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
}

// Session storage utility functions
const setSessionStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(key, value);
  }
};

const getSessionStorage = (key: string): string | null => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
};

const removeSessionStorage = (keys: string[]) => {
  if (typeof window !== 'undefined') {
    keys.forEach(key => sessionStorage.removeItem(key));
  }
};

// Generate stable session ID
const generateStableSessionId = (): string => {
  if (typeof window !== 'undefined') {
    let stableSessionId = localStorage.getItem('stable_session_id');
    if (!stableSessionId) {
      stableSessionId = 'sid_' + Math.random().toString(36).substr(2, 9) + Date.now();
      localStorage.setItem('stable_session_id', stableSessionId);
    }
    return stableSessionId;
  }
  return '';
};

// File upload component
const FileUploadSection = ({
  files,
  onFilesChange,
  onFileRemove,
}: {
  files: File[];
  onFilesChange: (files: File[]) => void;
  onFileRemove: (index: number) => void;
}) => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      const droppedFiles = Array.from(e.dataTransfer.files);
      const validFiles = droppedFiles.filter(
        (file) =>
          file.type === "text/plain" ||
          file.type === "application/pdf" ||
          file.type === "text/csv" ||
          file.name.endsWith(".md") ||
          file.name.endsWith(".txt") ||
          file.name.endsWith(".docx")
      );

      if (validFiles.length > 0) {
        onFilesChange([...files, ...validFiles]);
      }
    },
    [files, onFilesChange]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(e.target.files || []);
      if (selectedFiles.length > 0) {
        onFilesChange([...files, ...selectedFiles]);
      }
      e.target.value = "";
    },
    [files, onFilesChange]
  );

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "pdf":
        return "📄";
      case "txt":
      case "md":
        return "📝";
      case "csv":
        return "📊";
      default:
        return "📁";
    }
  };

  return (
    <div className="space-y-4">
      <div
        className={`stepUploadSection rounded-lg p-3 text-center transition-all duration-200 relative cursor-pointer ${
          dragActive
            ? "border-blue-500 bg-blue-50 scale-[1.02]"
            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={(e) => {
          if (!(e.target as Element).closest('.file-item')) {
            if (fileInputRef.current) {
              fileInputRef.current.click();
            }
          }
        }}
      >
        {files.length === 0 && (
          <>
            <div className="text-4xl mb-1 fs_20">📁</div>
            <div className="space-y-2">
              <p className="text-lg font-medium">
                {dragActive ? "Drop files here" : "Drop files here or click to upload"}
              </p>
              <p className="text-sm text-gray-500">
                Supports PDF, TXT, CSV, Markdown, and DOCX files (max 10MB each)
              </p>
            </div>
          </>
        )}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.txt,.csv,.md,.docx"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ pointerEvents: 'none' }}
        />
        {files.length > 0 && (
          <div className="mt-1 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                Uploaded Files ({files.length})
              </span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {files.reduce((acc, file) => acc + file.size, 0) > 1024 * 1024
                  ? `${(
                      files.reduce((acc, file) => acc + file.size, 0) /
                      (1024 * 1024)
                    ).toFixed(1)} MB`
                  : `${Math.round(
                      files.reduce((acc, file) => acc + file.size, 0) / 1024
                    )} KB`}
              </span>
            </div>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {files.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="file-item flex items-center justify-between px-3 py-2 mt-1 bg-gray-50 rounded-lg border"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-lg">{getFileIcon(file.name)}</span><span className="text-sm">{file.name}</span>
                    <div className="min-w-0">
                      <div className="text-xs text-gray-500">
                        {formatFileSize(file.size)}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onFileRemove(index);
                    }}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 p-1 rounded"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// URL management component
const URLManagementSection = ({
  urls,
  onUrlsChange,
}: {
  urls: string[];
  onUrlsChange: (urls: string[]) => void;
}) => {
  const [newUrl, setNewUrl] = useState("");
  const [urlError, setUrlError] = useState("");

  const validateUrl = (url: string): boolean => {
    try {
      const urlToValidate = url.startsWith('http') ? url : `https://${url}`;
      new URL(urlToValidate);
      return true;
    } catch {
      return false;
    }
  };

  const addUrl = useCallback(() => {
    const trimmedUrl = newUrl.trim();

    if (!trimmedUrl) {
      setUrlError("Please enter a URL");
      return;
    }

    if (!validateUrl(trimmedUrl)) {
      setUrlError("Please enter a valid URL (e.g., https://example.com)");
      return;
    }

    const finalUrl = trimmedUrl.startsWith('http') ? trimmedUrl : `https://${trimmedUrl}`;
    
    if (urls.includes(finalUrl)) {
      setUrlError("This URL has already been added");
      return;
    }

    onUrlsChange([...urls, finalUrl]);
    setNewUrl("");
    setUrlError("");
  }, [newUrl, urls, onUrlsChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUrl(e.target.value);
    if (urlError) setUrlError("");
  };

  const handleBlur = () => {
    const trimmed = newUrl.trim();
    if (!trimmed) return;
    if (!validateUrl(trimmed)) return;
    const finalUrl = trimmed.startsWith('http') ? trimmed : `https://${trimmed}`;
    if (urls.includes(finalUrl)) return;
    onUrlsChange([finalUrl, ...urls]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addUrl();
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex gap-2">
          <div className="flex-1 w-100 relative">
            <input
              type="text"
              placeholder="Enter your website URL"
              value={newUrl}
              autoComplete="off"
              onChange={handleInputChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className={`w-full px-4 py-2 rounded-md w-100 text-gray-900 ${
                urlError ? "border-red-500" : "border-gray-300"
              }`}
            />
          <button
            onClick={addUrl}
            disabled={!newUrl.trim()}
            className="bg-purple-600 text-white hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center paperPlaneIconBtn"
            >
            <PaperPlaneIcon />
          </button>
          </div>
        </div>
          <div className="d-block">
            {urlError && (
              <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                ⚠️ {urlError}
              </p>
            )}
          </div>
      </div>
    </div>
  );
};

export const GetUserInfo2 = React.memo<BasicInfoStepProps>(
  ({ data, onUpdate, errors = [], footerOptions }) => {
    const [activeTab, setActiveTab] = useState("urls");
    const [trackingData, setTrackingData] = useState({
      gclid: '',
      fbclid: '',
      igclid: '',
      ttclid: '',
      fingerprint: '',
      stableSessionId: '',
      fingerprintData: null as string | null
    });

    // Initialize tracking parameters
    useEffect(() => {
      const initializeTracking = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const gclid = urlParams.get('gclid') || '';
        const fbclid = urlParams.get('fbclid') || '';
        const igclid = urlParams.get('igclid') || '';
        const ttclid = urlParams.get('ttclid') || '';
        const fingerprint = urlParams.get('fingerprint') || '';

        if (gclid !== "") {
          setSessionStorage('gclid', gclid);
          removeSessionStorage(['fbclid', 'igclid', 'ttclid']);
        }

        if (fbclid !== "") {
          setSessionStorage('fbclid', fbclid);
          removeSessionStorage(['gclid', 'igclid', 'ttclid']);
        }

        if (igclid !== "") {
          setSessionStorage('igclid', igclid);
          removeSessionStorage(['gclid', 'fbclid', 'ttclid']);
        }

        if (ttclid !== "") {
          setSessionStorage('ttclid', ttclid);
          removeSessionStorage(['gclid', 'fbclid', 'igclid']);
        }

        const sessionGclid = getSessionStorage('gclid') || '';
        const sessionFbclid = getSessionStorage('fbclid') || '';
        const sessionIgclid = getSessionStorage('igclid') || '';
        const sessionTtclid = getSessionStorage('ttclid') || '';
        const stableSessionId = generateStableSessionId();

        setTrackingData({
          gclid: sessionGclid,
          fbclid: sessionFbclid,
          igclid: sessionIgclid,
          ttclid: sessionTtclid,
          fingerprint: fingerprint,
          stableSessionId: stableSessionId,
          fingerprintData: null
        });
      };

      initializeTracking();
    }, []);

    // Initialize FingerprintJS
    useEffect(() => {
      const initializeFingerprint = async () => {
        try {
          const script = document.createElement("script");
          script.src = "/assets/js/fp.min.js";
          script.async = true;

          script.onload = async function () {
            if ((window as any).FingerprintJS) {
              try {
                const fpPromise = (window as any).FingerprintJS.load();
                const fp = await fpPromise;
                const result = await fp.get();
                const visitorId = result.visitorId;

                const components = result.components || {};

                const fingerprintData = {
                  fingerprint: visitorId,
                  device: components.platform?.value || "Unknown",
                  timezone: components.timezone?.value || "Unknown",
                };

                const fingerprintJson = JSON.stringify(fingerprintData);

                setTrackingData(prev => ({
                  ...prev,
                  fingerprint: visitorId,
                  fingerprintData: fingerprintJson
                }));

                (window as any).fingerprint = visitorId;
              } catch (error) {
                console.error("Error generating fingerprint:", error);
              }
            }
          };

          script.onerror = function () {
            console.error("Error loading FingerprintJS script");
          };

          document.head.appendChild(script);
        } catch (error) {
          console.error("Error initializing fingerprint:", error);
        }
      };

      initializeFingerprint();
    }, []);

    // Update wizard data with tracking information
    useEffect(() => {
      onUpdate({
        gclid: trackingData.gclid,
        fbclid: trackingData.fbclid,
        igclid: trackingData.igclid,
        ttclid: trackingData.ttclid,
        fingerprint: trackingData.fingerprint,
        stableSessionId: trackingData.stableSessionId,
        fingerprintData: trackingData.fingerprintData || ""
      });
    }, [trackingData, onUpdate]);

    const handleFilesChange = useCallback(
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

    const handleFileRemove = useCallback(
      (index: number) => {
        const newFiles = data.knowledgeSources.files.filter(
          (_, i) => i !== index
        );
        handleFilesChange(newFiles);
      },
      [data.knowledgeSources.files, handleFilesChange]
    );

    const handleUrlsChange = useCallback(
      (urls: string[]) => {
        const normalized = urls
          .map((u) => (u || "").trim())
          .filter((u) => u.length > 0)
          .map((u) => (u.startsWith("http://") || u.startsWith("https://") ? u : `https://${u}`));

        const websiteUrl = normalized[0] || "";

        onUpdate({
          knowledgeSources: {
            ...data.knowledgeSources,
            urls: normalized,
          },
          websiteUrl,
        });
      },
      [data.knowledgeSources, onUpdate]
    );

    const knowledgeSourcesCount = useMemo(() => {
      const filesCount = data.knowledgeSources.files.length;
      const urlsCount = data.knowledgeSources.urls.length;
      const hasText = data.knowledgeSources.textContent.trim().length > 0 ? 1 : 0;
      return filesCount + urlsCount + hasText;
    }, [data.knowledgeSources]);

    return (
      <div>
        {/* Hidden tracking fields */}
        <input name="gclid" id="gclid" type="hidden" value={trackingData.gclid} readOnly />
        <input name="fbclid" id="fbclid" type="hidden" value={trackingData.fbclid} readOnly />
        <input name="igclid" id="igclid" type="hidden" value={trackingData.igclid} readOnly />
        <input name="ttclid" id="ttclid" type="hidden" value={trackingData.ttclid} readOnly />
        <input name="fingerprint" id="fingerprint" type="hidden" value={trackingData.fingerprint} readOnly />
        <input name="chat" id="chat" type="hidden" value="" readOnly />
        <input name="stable_session_id" type="hidden" value={trackingData.stableSessionId} readOnly />
        {trackingData.fingerprintData && (
          <input name="fingerprintdata" type="hidden" value={trackingData.fingerprintData} readOnly />
        )}
        
        <div className="container-fluid getUserInfoContainer">
          <div className="row">
            <div className="col-lg-12 chatbot-left-content-wrapper">
              <InViewAnimate animClass="fade-up-200" className="chatbot-content-wrapper">
                  <div className="chatbot-content">
                    <div className="ps-0 pt-0">
                      <div className="stepText my-2">Step 4 of 6</div>
                      <div className="h4 fw-bold">Provide Information to Train Your Bot</div>
                      <div className="mb-4">
                        Start by giving your bot a webpage or some files to kickstart your bot's learning.
                      </div>
                      <div className="mb-4">
                        You can add more content later.
                      </div>
                      {knowledgeSourcesCount > 0 && (
                        <div className="mb-4">
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            Choose one of the following
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Tab Buttons */}
                    <div className="mb-6">
                      <div className="flex gap-2 mb-4">
                        <button
                          onClick={() => setActiveTab("urls")}
                          className={`flex flex-col items-center px-4 py-3 rounded-lg transition-all ${
                            activeTab === "urls"
                              ? "border-purple-500 bg-purple-50 text-purple-700 forthTab forthTabActive"
                              : "forthTab"
                          }`}
                        >
                          <div className="text-2xl mb-2">🔗</div>
                          <span className="text-sm font-medium">URL</span>
                        </button>
                        <button
                          onClick={() => setActiveTab("files")}
                          className={`flex flex-col items-center px-4 py-3 rounded-lg transition-all ${
                            activeTab === "files"
                              ? "border-purple-500 bg-purple-50 text-purple-700 forthTab forthTabActive"
                              : "forthTab"
                          }`}
                        >
                          <div className="text-2xl mb-2">📁</div>
                          <span className="text-sm font-medium">Files</span>
                        </button>
                      </div>

                      {/* Tab Content */}
                      {activeTab === "urls" && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Enter your company website</label>
                            <URLManagementSection
                              urls={data.knowledgeSources.urls}
                              onUrlsChange={handleUrlsChange}
                            />
                          </div>
                        </div>
                      )}

                      {activeTab === "files" && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Upload files</label>
                            <FileUploadSection
                              files={data.knowledgeSources.files}
                              onFilesChange={handleFilesChange}
                              onFileRemove={handleFileRemove}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {errors.length > 0 && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center gap-2 text-red-800 mb-2">
                          <span>⚠️</span>
                          <div className="font-medium">Please fix the following issues:</div>
                        </div>
                        <ul className="text-sm text-red-700 list-disc list-inside space-y-1">
                          {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </InViewAnimate>

              <div className="chatbot-content-wrapper footer">
                <WizardNavigation2 {...footerOptions} />
              </div>
            </div>

            {/* Right Panel */}
            {/* <div
              className="col-lg-6 d-flex align-items-center justify-content-center hideOnMobile"
              style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}
            >
              <img
                className="img-fluid"
                src="/assets/img/step3img.svg"
                alt="Step Image"
                width={500}
                height={382}
              />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
);

GetUserInfo2.displayName = "GetUserInfo2";
