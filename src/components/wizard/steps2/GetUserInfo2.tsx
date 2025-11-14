"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";
import { ArrowRightIcon2, PaperPlaneIcon } from "@/icons";
import { Link as LinkIcon, Folder } from "lucide-react";
import { filesToBlobs, validateFile } from "@/utils/fileUtils";
import CrawlModal from "../CrawlModal";
import axios from "axios";
import { createWorkspaceWithFiles } from "@/api/workspace";
import { io, Socket } from "socket.io-client";

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

  // Accepts a string filename or a File object (or undefined/null).
  // Returns a safe default icon if the name is missing.
  const getFileIcon = (file?: string | File | null) => {
    const name = typeof file === "string" ? file : (file && (file as File).name) || "";
    if (!name) return "📎";
    const extension = name.split(".").pop()?.toLowerCase() || "";
    switch (extension) {
      case "pdf":
        return "📄";
      case "doc":
      case "docx":
        return "📝";
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
        return "🖼️";
      case "csv":
      case "xls":
      case "xlsx":
        return "📊";
      default:
        return "📎";
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
  // Initialize with first URL if it exists, otherwise empty string
  const [newUrl, setNewUrl] = useState(urls[0] || "");
  const [urlError, setUrlError] = useState("");

  // Sync newUrl with urls prop when it changes (e.g., when switching tabs)
  useEffect(() => {
    // If there's a URL in the array, use it; otherwise keep current input
    if (urls.length > 0 && urls[0]) {
      // Only update if the current newUrl is empty or different
      if (!newUrl || newUrl !== urls[0]) {
        setNewUrl(urls[0]);
      }
    } else if (urls.length === 0 && newUrl) {
      // If URLs array is cleared but we have input, keep the input
      // Don't clear it
    }
  }, [urls]);

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
    
    // If URL already exists in array, just update it
    if (urls.includes(finalUrl)) {
      // URL already exists, no need to add again
      setUrlError("");
      return;
    }

    // Replace the first URL or add new one
    if (urls.length > 0) {
      onUrlsChange([finalUrl]);
    } else {
      onUrlsChange([finalUrl]);
    }
    setUrlError("");
  }, [newUrl, urls, onUrlsChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUrl(e.target.value);
    if (urlError) setUrlError("");
  };

  const handleBlur = () => {
    const trimmed = newUrl.trim();
    if (!trimmed) {
      // If input is cleared, update the URLs array to be empty
      if (urls.length > 0) {
        onUrlsChange([]);
      }
      return;
    }
    if (!validateUrl(trimmed)) return;
    const finalUrl = trimmed.startsWith('http') ? trimmed : `https://${trimmed}`;
    // Update the URLs array with the new URL
    onUrlsChange([finalUrl]);
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
              className={`w-full px-4 py-2 rounded-md w-100 text-gray-900 form-control ${
                urlError ? "border-red-500" : "border-gray-300"
              }`}
            />
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

    // Crawl API states
    const [showCrawlModal, setShowCrawlModal] = useState<boolean>(false);
    const [isCrawling, setIsCrawling] = useState<boolean>(false);
    const [crawlProgress, setCrawlProgress] = useState<number>(0);
    const [crawlError, setCrawlError] = useState<string | null>(null);
    const [crawlComplete, setCrawlComplete] = useState<boolean>(false);
    const [canProceed, setCanProceed] = useState<boolean>(false);
    const [socketInfo, setSocketInfo] = useState<{
      step?: string;
      data?: any;
      timestamp?: string;
      socketId?: string;
      connected?: boolean;
      userId?: string;
      eventType?: string;
      source?: string;
      // Add missing fields
      socketUrl?: string;
      socketPort?: number;
      socketEvent?: string;
    } | null>(null);

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
      const filesCount = data.knowledgeSources?.files?.length || 0;
      const hasWebsite = data.websiteUrl && data.websiteUrl.trim().length > 0 ? 1 : 0;
      return filesCount + hasWebsite;
    }, [data.knowledgeSources, data.websiteUrl]);

    // Submit to user-provided workspace API with WebSocket support
    const crawlWebsite = async (url?: string) => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:7001";
      const apiEndpoint = `${baseUrl}/workspace/kogent-bot`;

      const files = data.knowledgeSources?.files || [];
      const websiteUrl = (url && url.trim()) || data.websiteUrl || "";

      const companyName = data.companyName || "";
      const industry = data.industry || "";

      if (!websiteUrl && files.length === 0) {
        footerOptions.onNext();
        return;
      }

        setIsCrawling(true);
        setCrawlError(null);
        setCrawlProgress(0);
        setCrawlComplete(false);
        setCanProceed(false);
        
        // Show initial message
        setCrawlProgress(5); // Initial progress

      let progressInterval: NodeJS.Timeout | null = null;
      let socket: Socket | null = null;
      let userId: string | null = null;

      try {
        // Build multipart form data with all fields
        const form = new FormData();
        if (websiteUrl) form.append("websiteUrl", websiteUrl);
        
        // Required fields
        form.append("name", String(companyName || ""));
        const slug = (companyName || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
        form.append("slug", slug || "workspace");
        form.append("vertical", String(industry || ""));

        // New kogent-bot fields
        const d: any = data as any;
        const useCasesList = data.useCases || [];
        let businessValue: string | undefined = undefined;
        if (useCasesList.some((uc: string) => uc.startsWith("customer-support"))) {
          businessValue = "customer-support";
        } else if (useCasesList.some((uc: string) => uc.startsWith("lead-capture"))) {
          businessValue = "lead-capture";
        } else if (useCasesList.some((uc: string) => uc.startsWith("sales"))) {
          businessValue = "sales";
        }
        
        // Map Step 6 integration type to info field
        const integrationType = data.integration?.type || "";
        const integrationInfoMap: Record<string, string> = {
          "self-manage": "Do you manage your website yourself?",
          "technical-person": "I have a technical person to do this for me",
          "engineering-team": "Would you like our engineering team to do this for you?",
        };
        const infoValue = integrationType ? (integrationInfoMap[integrationType] || integrationType) : "";
        
        // Generate random brandId
        const generateBrandId = () => {
          const randomStr = Math.random().toString(36).substring(2, 15);
          const timestamp = Date.now().toString(36);
          return `brand-${randomStr}-${timestamp}`;
        };
        const brandId = generateBrandId();
        
        if (data.botname) form.append("botName", String(data.botname));
        if (businessValue) form.append("business", String(businessValue));
        if (data.name) form.append("fullName", String(data.name));
        if (data.email) form.append("emailAddress", String(data.email));
        if (data.phone) form.append("phoneNumber", String(data.phone));
        form.append("info", infoValue);
        form.append("brandId", brandId);
        if (d.infoCheckbox !== undefined) form.append("infoCheckbox", String(d.infoCheckbox));

        // Bot appearance fields
        if (data.appearance?.primaryColor) form.append("colors", String(data.appearance.primaryColor));
        if (data.botname) form.append("displayTitle", String(data.botname));
        if (data.appearance?.avatar) {
          const avatarUrl = String(data.appearance.avatar);
          // If it's a base64 data URL or absolute URL, use as-is
          // Otherwise, prepend base URL for relative paths
          if (avatarUrl.startsWith('data:') || avatarUrl.startsWith('http://') || avatarUrl.startsWith('https://')) {
            form.append("imageUrl", avatarUrl);
          } else {
            // Use https://kogents.ai as base URL for relative paths
            form.append("imageUrl", `https://kogents.ai${avatarUrl.startsWith('/') ? avatarUrl : '/' + avatarUrl}`);
          }
        }

        // Append uploaded files
        if (files && files.length > 0) {
          files.forEach((f: File) => {
            form.append("files", f, f.name);
          });
        }

        // ✅ Step 1: Connect to socket IMMEDIATELY (before API call completes)
        // Use default socket URL - will update when API response comes
        const defaultSocketUrl = baseUrl; // Use API base URL as default
        const defaultSocketPort = 3001; // Common socket port
        
        console.log('🔌 Connecting to socket (before API response)...');
        
        try {
          socket = io(defaultSocketUrl, {
            transports: ['websocket', 'polling'],
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionAttempts: 5,
            timeout: 20000,
          });

          // ✅ Show socket info immediately in modal
          setSocketInfo({
            connected: false,
            socketUrl: defaultSocketUrl,
            socketPort: defaultSocketPort,
            socketEvent: 'workspace:crawl-progress', // Default, will update from API
            userId: undefined,
            socketId: undefined,
          });

          socket.on('connect', () => {
            console.log('✅ Socket connected (before API response):', socket?.id);
            setSocketInfo((prev) => ({
              ...prev,
              connected: true,
              socketId: socket?.id || undefined,
            }));
            // Update progress to show socket is connected
            setCrawlProgress(20); // Show some progress
          });

          socket.on('connect_error', (error) => {
            console.warn('Socket connection error:', error);
            setSocketInfo((prev) => ({
              ...prev,
              connected: false,
            }));
          });

          socket.on('disconnect', () => {
            console.log('❌ Socket disconnected');
            setSocketInfo((prev) => ({
              ...prev,
              connected: false,
            }));
          });

          // ✅ COMMENTED OUT: Socket event listeners - not reading socket events anymore
          // Just showing simple static messages in modal
          /*
          socket.on('crawl-progress', (payload: any) => {
            console.log('📡 Event received:', payload.step, payload.data);
            
            // ✅ IMPORTANT: Don't filter events before userId is available
            // Only filter if we have both userId and payload.userId and they don't match
            if (userId && payload.userId && payload.userId !== userId) {
              console.log('⚠️ Ignoring event for different userId');
              return; // Ignore events for other users
            }
            
            // ✅ Log for debugging
            console.log('✅ Processing event:', payload.step);
            
            // Update socket info in real-time (preserve connection info)
            setSocketInfo((prev) => ({
              ...prev,
              connected: prev?.connected ?? socket?.connected ?? false,
              socketId: prev?.socketId ?? socket?.id ?? undefined,
              step: payload.step,
              data: payload.data,
              timestamp: payload.timestamp || new Date().toISOString(),
              userId: payload.userId || prev?.userId || userId || undefined,
              eventType: payload.eventType,
              source: payload.source,
            }));
            
            // Map step to progress percentage
            const stepProgressMap: Record<string, number> = {
              'kogent_bot_creation_started': 5,
              'upload_started': 10,
              'processing_files': 15,
              'uploading_to_supabase': 20,
              'file_uploaded_to_supabase': 25,
              'files_saved': 30,
              'starting_website_crawl': 30,
              'website_crawl_in_progress': 25,
              'website_crawl_completed': 50,
              'uploading_website_data_to_supabase': 60,
              'website_data_uploaded_to_supabase': 75,
              'sending_to_agent_builder': 80,
              'agent_builder_success': 90,
              'agent_builder_failed': 85,
              'agent_builder_error': 85,
              'agent_builder_service_unavailable': 80,
              'kogent_bot_creation_in_progress': 95,
              'kogent_bot_creation_success': 100,
            };
            
            // Use progress from payload.data if available
            const progress = payload.data?.progress !== undefined 
              ? payload.data.progress 
              : (stepProgressMap[payload.step] || 0);
            
            setCrawlProgress(progress);
            
            // Handle all events here
            switch (payload.step) {
              case 'kogent_bot_creation_started':
                console.log('🚀 Bot creation started');
                break;
              
              case 'slug_already_exists':
                console.log('⚠️ Slug already exists, generating unique slug...');
                break;
              
              case 'unique_slug_generated':
                console.log('✅ Unique slug generated:', payload.data?.newSlug);
                break;
              
              case 'upload_started':
                console.log('📤 Upload process started...');
                break;
              
              case 'processing_files':
                console.log(`📄 Processing ${payload.data?.fileCount || 0} files...`);
                break;
              
              case 'uploading_to_supabase':
                console.log(`📤 Uploading ${payload.data?.filename || 'file'} to Supabase...`);
                break;
              
              case 'file_uploaded_to_supabase':
                console.log(`✅ File uploaded successfully: ${payload.data?.filename || 'file'}`);
                break;
              
              case 'file_upload_error':
                console.error('❌ File upload error:', payload.data?.error);
                setCrawlError(payload.data?.message || payload.data?.error || 'File upload failed');
                break;
              
              case 'files_saved':
                console.log('✅ Files saved successfully');
                break;
              
              case 'starting_website_crawl':
                console.log('🌐 Starting crawl:', payload.data?.url);
                break;
              
              case 'website_crawl_in_progress':
                console.log('⏳ Crawling...', payload.data?.progress + '%');
                break;
              
              case 'website_crawl_completed':
                const pagesCount = payload.data?.pages || payload.data?.totalPages || 0;
                console.log('✅ Crawl completed:', pagesCount, 'pages');
                console.log('📄 Total Pages:', payload.data?.totalPages);
                console.log('📊 Pages Crawled:', payload.data?.pagesCrawled);
                console.log('💬 Message:', payload.data?.message);
                break;
              
              case 'uploading_website_data_to_supabase':
                console.log('📤 Uploading website data to Supabase...', payload.data?.progress + '%');
                break;
              
              case 'website_data_uploaded_to_supabase':
                console.log('✅ Website data uploaded successfully');
                break;
              
              case 'sending_to_agent_builder':
                console.log('🤖 Sending to agent builder...');
                break;
              
              case 'agent_builder_success':
                console.log('✅ Agent builder success:', payload.data?.brandId);
                break;
              
              case 'agent_builder_failed':
                console.warn('⚠️ Agent builder failed:', payload.data?.error);
                console.log('Using brandId:', payload.data?.usingBrandId || 'N/A');
                console.log('BrandId source:', payload.data?.brandIdSource || 'N/A');
                break;
              
              case 'agent_builder_error':
                console.warn('⚠️ Agent builder error:', payload.data?.error);
                console.log('Using brandId:', payload.data?.usingBrandId || 'N/A');
                break;
              
              case 'agent_builder_service_unavailable':
                console.warn('⚠️ Agent builder service unavailable');
                console.log('Using brandId:', payload.data?.usingBrandId || 'N/A');
                break;
              
              case 'frontend_brandid_received':
                console.log('✅ Using frontend brandId:', payload.data?.frontendBrandId || 'N/A');
                break;
              
              case 'random_brandid_generated':
                console.log('🔷 Generated random brandId:', payload.data?.generatedBrandId || 'N/A');
                break;
              
              case 'converting_description_to_file':
                console.log('📝 Converting description to file...');
                break;
              
              case 'description_conversion_failed':
                console.error('❌ Description conversion failed:', payload.data?.error);
                setCrawlError(payload.data?.message || payload.data?.error || 'Description conversion failed');
                break;
              
              case 'kogent_bot_creation_in_progress':
                console.log('⏳ Bot creation in progress...', payload.data);
                if (payload.data?.slug) {
                  console.log('📝 Slug:', payload.data.slug);
                }
                if (payload.data?.brandId) {
                  console.log('✅ Brand ID:', payload.data.brandId);
                }
                break;
              
              case 'kogent_bot_creation_success':
                console.log('🎉 Bot created successfully!');
                // Don't close modal here - let API response handler do it
                break;
              
              case 'kogent_bot_creation_error':
                console.error('❌ Bot creation error:', payload.data?.error);
                setCrawlError(payload.data?.message || payload.data?.error || 'Bot creation failed');
                setIsCrawling(false);
                break;
              
              case 'website_crawl_failed':
                console.error('❌ Crawl failed:', payload.data?.error);
                setCrawlError(payload.data?.message || payload.data?.error || 'Website crawl failed');
                setIsCrawling(false);
                break;
              
              case 'website_crawler_unavailable':
                console.warn('⚠️ Crawler unavailable:', payload.data?.message);
                setCrawlError(payload.data?.message || 'Crawler service unavailable');
                setIsCrawling(false);
                break;
              
              default:
                // Handle other events with generic message
                if (payload.data?.message) {
                  console.log('📊 Event:', payload.step, '-', payload.data.message);
                }
                if (payload.data?.progress !== undefined) {
                  console.log('📊 Progress:', payload.data.progress + '%');
                }
            }
          });
          */

          // ✅ COMMENTED OUT: Fallback listener for workspace-progress
          /*
          socket.on('workspace-progress', (payload: any) => {
            console.log('📡 [workspace-progress] Event received:', payload.step, payload.data);
            // Same handler as crawl-progress
            if (userId && payload.userId && payload.userId !== userId) {
              return;
            }
            setSocketInfo((prev) => ({
              ...prev,
              step: payload.step,
              data: payload.data,
              timestamp: payload.timestamp || new Date().toISOString(),
              userId: payload.userId || prev?.userId || undefined,
              eventType: payload.eventType,
              source: payload.source,
            }));
            // Map step to progress percentage (same as above)
            const stepProgressMap: Record<string, number> = {
              'kogent_bot_creation_started': 5,
              'upload_started': 10,
              'processing_files': 15,
              'uploading_to_supabase': 20,
              'file_uploaded_to_supabase': 25,
              'files_saved': 30,
              'starting_website_crawl': 30,
              'website_crawl_in_progress': 25,
              'website_crawl_completed': 50,
              'uploading_website_data_to_supabase': 60,
              'website_data_uploaded_to_supabase': 75,
              'sending_to_agent_builder': 80,
              'agent_builder_success': 90,
              'agent_builder_failed': 85,
              'agent_builder_error': 85,
              'agent_builder_service_unavailable': 80,
              'kogent_bot_creation_in_progress': 95,
              'kogent_bot_creation_success': 100,
            };
            const progress = payload.data?.progress !== undefined 
              ? payload.data.progress 
              : (stepProgressMap[payload.step] || 0);
            setCrawlProgress(progress);
            switch (payload.step) {
              case 'kogent_bot_creation_started':
                console.log('🚀 Bot creation started');
                break;
              
              case 'slug_already_exists':
                console.log('⚠️ Slug already exists, generating unique slug...');
                break;
              
              case 'unique_slug_generated':
                console.log('✅ Unique slug generated:', payload.data?.newSlug);
                break;
              
              case 'upload_started':
                console.log('📤 Upload process started...');
                break;
              
              case 'processing_files':
                console.log(`📄 Processing ${payload.data?.fileCount || 0} files...`);
                break;
              
              case 'uploading_to_supabase':
                console.log(`📤 Uploading ${payload.data?.filename || 'file'} to Supabase...`);
                break;
              
              case 'file_uploaded_to_supabase':
                console.log(`✅ File uploaded successfully: ${payload.data?.filename || 'file'}`);
                break;
              
              case 'file_upload_error':
                console.error('❌ File upload error:', payload.data?.error);
                setCrawlError(payload.data?.message || payload.data?.error || 'File upload failed');
                break;
              
              case 'files_saved':
                console.log('✅ Files saved successfully');
                break;
              
              case 'starting_website_crawl':
                console.log('🌐 Starting crawl:', payload.data?.url);
                break;
              
              case 'website_crawl_in_progress':
                console.log('⏳ Crawling...', payload.data?.progress + '%');
                break;
              
              case 'website_crawl_completed':
                const pagesCount = payload.data?.pages || payload.data?.totalPages || 0;
                console.log('✅ Crawl completed:', pagesCount, 'pages');
                console.log('📄 Total Pages:', payload.data?.totalPages);
                console.log('📊 Pages Crawled:', payload.data?.pagesCrawled);
                console.log('💬 Message:', payload.data?.message);
                break;
              
              case 'uploading_website_data_to_supabase':
                console.log('📤 Uploading website data to Supabase...', payload.data?.progress + '%');
                break;
              
              case 'website_data_uploaded_to_supabase':
                console.log('✅ Website data uploaded successfully');
                break;
              
              case 'sending_to_agent_builder':
                console.log('🤖 Sending to agent builder...');
                break;
              
              case 'agent_builder_success':
                console.log('✅ Agent builder success:', payload.data?.brandId);
                break;
              
              case 'agent_builder_failed':
                console.warn('⚠️ Agent builder failed:', payload.data?.error);
                console.log('Using brandId:', payload.data?.usingBrandId || 'N/A');
                console.log('BrandId source:', payload.data?.brandIdSource || 'N/A');
                break;
              
              case 'agent_builder_error':
                console.warn('⚠️ Agent builder error:', payload.data?.error);
                console.log('Using brandId:', payload.data?.usingBrandId || 'N/A');
                break;
              
              case 'agent_builder_service_unavailable':
                console.warn('⚠️ Agent builder service unavailable');
                console.log('Using brandId:', payload.data?.usingBrandId || 'N/A');
                break;
              
              case 'frontend_brandid_received':
                console.log('✅ Using frontend brandId:', payload.data?.frontendBrandId || 'N/A');
                break;
              
              case 'random_brandid_generated':
                console.log('🔷 Generated random brandId:', payload.data?.generatedBrandId || 'N/A');
                break;
              
              case 'converting_description_to_file':
                console.log('📝 Converting description to file...');
                break;
              
              case 'description_conversion_failed':
                console.error('❌ Description conversion failed:', payload.data?.error);
                setCrawlError(payload.data?.message || payload.data?.error || 'Description conversion failed');
                break;
              
              case 'kogent_bot_creation_in_progress':
                console.log('⏳ Bot creation in progress...', payload.data);
                if (payload.data?.slug) {
                  console.log('📝 Slug:', payload.data.slug);
                }
                if (payload.data?.brandId) {
                  console.log('✅ Brand ID:', payload.data.brandId);
                }
                break;
              
              case 'kogent_bot_creation_success':
                console.log('🎉 Bot created successfully!');
                // Don't close modal here - let API response handler do it
                break;
              
              case 'kogent_bot_creation_error':
                console.error('❌ Bot creation error:', payload.data?.error);
                setCrawlError(payload.data?.message || payload.data?.error || 'Bot creation failed');
                setIsCrawling(false);
                break;
              
              case 'website_crawl_failed':
                console.error('❌ Crawl failed:', payload.data?.error);
                setCrawlError(payload.data?.message || payload.data?.error || 'Website crawl failed');
                setIsCrawling(false);
                break;
              
              case 'website_crawler_unavailable':
                console.warn('⚠️ Crawler unavailable:', payload.data?.message);
                setCrawlError(payload.data?.message || 'Crawler service unavailable');
                setIsCrawling(false);
                break;
              
              default:
                // Handle other events with generic message
                if (payload.data?.message) {
                  console.log('📊 Event:', payload.step, '-', payload.data.message);
                }
                if (payload.data?.progress !== undefined) {
                  console.log('📊 Progress:', payload.data.progress + '%');
                }
            }
          });
          */
        } catch (socketError) {
          console.warn('Socket connection failed:', socketError);
        }

        // ✅ Step 2: Make API call (while socket is connecting)
        const response = await fetch(apiEndpoint, {
          method: "POST",
          body: form,
        });

        const result = await response.json().catch(() => ({}));

        if (!response.ok || (result && result.error)) {
          const errorMessage = (result && (result.error || result.message)) || `HTTP error! status: ${response.status}`;
          throw new Error(errorMessage);
        }

        // ✅ Step 3: Update socket info with actual values from API response
        userId = result.userId || result.data?.userId || d.userId || null;
        const socketEvent = result.socketEvent || 'workspace:crawl-progress';
        const socketUrl = result.socketUrl || baseUrl;
        const socketPort = result.socketPort || defaultSocketPort;
        
        console.log('✅ API Response received:', result);
        console.log('✅ Updating socket info with API response values');
        
        // Update socket info with actual values
        setSocketInfo((prev) => ({
          ...prev,
          socketUrl: socketUrl,
          socketPort: socketPort,
          socketEvent: socketEvent,
          userId: userId || undefined,
        }));

        // ✅ COMMENTED OUT: Socket reconnection and event listeners
        // Not reading socket events anymore - just showing simple messages
        /*
        if (socketUrl !== defaultSocketUrl && socket) {
          console.log('🔄 Reconnecting to correct socket URL:', socketUrl);
          socket.disconnect();
          
          socket = io(socketUrl, {
            transports: ['websocket', 'polling'],
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionAttempts: 5,
            timeout: 20000,
          });

          socket.on('connect', () => {
            console.log('✅ Socket reconnected to:', socketUrl, socket?.id);
            setSocketInfo((prev) => ({
              ...prev,
              connected: true,
              socketId: socket?.id || undefined,
            }));
            
            // Subscribe to crawl-progress room
            if (userId) {
              socket?.emit('crawl-progress', {
                userId: userId,
                action: 'subscribe'
              });
              console.log('📡 Subscribed to crawl-progress room for userId:', userId);
            }
          });

          socket.on('connect_error', (error) => {
            console.warn('Socket reconnection error:', error);
            setSocketInfo((prev) => ({
              ...prev,
              connected: false,
            }));
          });

          socket.on('disconnect', () => {
            console.log('❌ Socket disconnected');
            setSocketInfo((prev) => ({
              ...prev,
              connected: false,
            }));
          });

          // ✅ Sirf ek hi event listen karein - crawl-progress (same handler as above)
          // Copy the same crawl-progress listener here too
          socket.on('crawl-progress', (payload: any) => {
            console.log('📡 Event received (reconnected):', payload.step, payload.data);
            
            // ✅ IMPORTANT: Don't filter events before userId is available
            if (userId && payload.userId && payload.userId !== userId) {
              return;
            }
            
            // Update socket info in real-time
            setSocketInfo((prev) => ({
              ...prev,
              connected: prev?.connected ?? socket?.connected ?? false,
              socketId: prev?.socketId ?? socket?.id ?? undefined,
              socketUrl: prev?.socketUrl ?? socketUrl,
              socketPort: prev?.socketPort ?? socketPort,
              socketEvent: prev?.socketEvent ?? socketEvent,
              step: payload.step,
              data: payload.data,
              timestamp: payload.timestamp || new Date().toISOString(),
              userId: payload.userId || prev?.userId || userId || undefined,
              eventType: payload.eventType,
              source: payload.source,
            }));
            
            // Map step to progress percentage (same as above)
            const stepProgressMap: Record<string, number> = {
              'kogent_bot_creation_started': 5,
              'upload_started': 10,
              'processing_files': 15,
              'uploading_to_supabase': 20,
              'file_uploaded_to_supabase': 25,
              'files_saved': 30,
              'starting_website_crawl': 30,
              'website_crawl_in_progress': 25,
              'website_crawl_completed': 50,
              'uploading_website_data_to_supabase': 60,
              'website_data_uploaded_to_supabase': 75,
              'sending_to_agent_builder': 80,
              'agent_builder_success': 90,
              'agent_builder_failed': 85,
              'agent_builder_error': 85,
              'agent_builder_service_unavailable': 80,
              'kogent_bot_creation_in_progress': 95,
              'kogent_bot_creation_success': 100,
            };
            
            const progress = payload.data?.progress !== undefined 
              ? payload.data.progress 
              : (stepProgressMap[payload.step] || 0);
            
            setCrawlProgress(progress);
            
            // Handle all events (same switch statement as above)
            switch (payload.step) {
              case 'kogent_bot_creation_started':
                console.log('🚀 Bot creation started');
                break;
              
              case 'slug_already_exists':
                console.log('⚠️ Slug already exists, generating unique slug...');
                break;
              
              case 'unique_slug_generated':
                console.log('✅ Unique slug generated:', payload.data?.newSlug);
                break;
              
              case 'upload_started':
                console.log('📤 Upload process started...');
                break;
              
              case 'processing_files':
                console.log(`📄 Processing ${payload.data?.fileCount || 0} files...`);
                break;
              
              case 'uploading_to_supabase':
                console.log(`📤 Uploading ${payload.data?.filename || 'file'} to Supabase...`);
                break;
              
              case 'file_uploaded_to_supabase':
                console.log(`✅ File uploaded successfully: ${payload.data?.filename || 'file'}`);
                break;
              
              case 'file_upload_error':
                console.error('❌ File upload error:', payload.data?.error);
                setCrawlError(payload.data?.message || payload.data?.error || 'File upload failed');
                break;
              
              case 'files_saved':
                console.log('✅ Files saved successfully');
                break;
              
              case 'starting_website_crawl':
                console.log('🌐 Starting crawl:', payload.data?.url);
                break;
              
              case 'website_crawl_in_progress':
                console.log('⏳ Crawling...', payload.data?.progress + '%');
                break;
              
              case 'website_crawl_completed':
                const pagesCount = payload.data?.pages || payload.data?.totalPages || 0;
                console.log('✅ Crawl completed:', pagesCount, 'pages');
                console.log('📄 Total Pages:', payload.data?.totalPages);
                console.log('📊 Pages Crawled:', payload.data?.pagesCrawled);
                console.log('💬 Message:', payload.data?.message);
                break;
              
              case 'uploading_website_data_to_supabase':
                console.log('📤 Uploading website data to Supabase...', payload.data?.progress + '%');
                break;
              
              case 'website_data_uploaded_to_supabase':
                console.log('✅ Website data uploaded successfully');
                break;
              
              case 'sending_to_agent_builder':
                console.log('🤖 Sending to agent builder...');
                break;
              
              case 'agent_builder_success':
                console.log('✅ Agent builder success:', payload.data?.brandId);
                break;
              
              case 'agent_builder_failed':
                console.warn('⚠️ Agent builder failed:', payload.data?.error);
                console.log('Using brandId:', payload.data?.usingBrandId || 'N/A');
                console.log('BrandId source:', payload.data?.brandIdSource || 'N/A');
                break;
              
              case 'agent_builder_error':
                console.warn('⚠️ Agent builder error:', payload.data?.error);
                console.log('Using brandId:', payload.data?.usingBrandId || 'N/A');
                break;
              
              case 'agent_builder_service_unavailable':
                console.warn('⚠️ Agent builder service unavailable');
                console.log('Using brandId:', payload.data?.usingBrandId || 'N/A');
                break;
              
              case 'frontend_brandid_received':
                console.log('✅ Using frontend brandId:', payload.data?.frontendBrandId || 'N/A');
                break;
              
              case 'random_brandid_generated':
                console.log('🔷 Generated random brandId:', payload.data?.generatedBrandId || 'N/A');
                break;
              
              case 'converting_description_to_file':
                console.log('📝 Converting description to file...');
                break;
              
              case 'description_conversion_failed':
                console.error('❌ Description conversion failed:', payload.data?.error);
                setCrawlError(payload.data?.message || payload.data?.error || 'Description conversion failed');
                break;
              
              case 'kogent_bot_creation_in_progress':
                console.log('⏳ Bot creation in progress...', payload.data);
                if (payload.data?.slug) {
                  console.log('📝 Slug:', payload.data.slug);
                }
                if (payload.data?.brandId) {
                  console.log('✅ Brand ID:', payload.data.brandId);
                }
                break;
              
              case 'kogent_bot_creation_success':
                console.log('🎉 Bot created successfully!');
                // Don't close modal here - let API response handler do it
                break;
              
              case 'kogent_bot_creation_error':
                console.error('❌ Bot creation error:', payload.data?.error);
                setCrawlError(payload.data?.message || payload.data?.error || 'Bot creation failed');
                setIsCrawling(false);
                break;
              
              case 'website_crawl_failed':
                console.error('❌ Crawl failed:', payload.data?.error);
                setCrawlError(payload.data?.message || payload.data?.error || 'Website crawl failed');
                setIsCrawling(false);
                break;
              
              case 'website_crawler_unavailable':
                console.warn('⚠️ Crawler unavailable:', payload.data?.message);
                setCrawlError(payload.data?.message || 'Crawler service unavailable');
                setIsCrawling(false);
                break;
              
              default:
                // Handle other events with generic message
                if (payload.data?.message) {
                  console.log('📊 Event:', payload.step, '-', payload.data.message);
                }
                if (payload.data?.progress !== undefined) {
                  console.log('📊 Progress:', payload.data.progress + '%');
                }
            }
          });
        } else if (socket && socket.connected && userId) {
          // Socket already connected, subscribe now with userId
          socket.emit('crawl-progress', {
            userId: userId,
            action: 'subscribe'
          });
          console.log('📡 Subscribed to crawl-progress room with userId:', userId);
        }
        */

        // ✅ Step 4: API Response aaya - Show success message and close modal
        console.log('✅ API Response received:', result);
        console.log('✅ Workspace created successfully:', result.data?._id);
        
        // ✅ Store workspace _id for widget script
        const workspaceId = result.data?._id;
        if (workspaceId) {
          // Store in localStorage for widget script
          if (typeof window !== 'undefined') {
            localStorage.setItem('workspace_id', workspaceId);
            console.log('✅ Workspace ID stored:', workspaceId);
          }
          // Also update in wizard data
          onUpdate({
            workspaceId: workspaceId,
          } as any);
        }
        
        // Clean up any progress intervals
        if (progressInterval) {
          clearInterval(progressInterval);
        }
        
        // Show success message - keep isLoading true to show the message
        setCrawlProgress(100);
        setCrawlComplete(true);
        // Don't set isLoading to false yet - keep it true to show "Crawling is completed" message
        
        // ✅ Show "Crawling is completed" message for 2 seconds, then close modal
        setTimeout(() => {
          setIsCrawling(false); // Stop loading spinner
          setShowCrawlModal(false);
          
          // Disconnect socket
          if (socket) {
            if (userId) {
              socket.emit('crawl-progress', {
                userId: userId,
                action: 'unsubscribe'
              });
            }
            socket.disconnect();
          }
          
          // Proceed to next step
          footerOptions.onNext();
        }, 2000); // 2 seconds delay to show success message
        
        return;

      } catch (error) {
        if (progressInterval) {
          clearInterval(progressInterval);
        }
        if (socket) {
          if (userId) {
            socket.emit('crawl-progress', {
              userId: userId,
              action: 'unsubscribe'
            });
          }
          socket.disconnect();
        }
        setIsCrawling(false);
        setCrawlError(
          error instanceof Error ? error.message : "Failed to submit. Please try again."
        );
      }
    };

    // Handle "Activate Agent Now" button click
    const handleActivateAgent = async () => {
      // If URL tab is active and has URLs, show modal and trigger crawl
      if (activeTab === "urls" && data.knowledgeSources?.urls?.length > 0) {
        const url = data.knowledgeSources.urls[0];
        if (url && url.trim()) {
          setShowCrawlModal(true);
          await crawlWebsite(url);
        } else {
          // No URL, proceed directly
          footerOptions.onNext();
        }
      } else {
        // Files tab or no URL - still show modal and submit
        setShowCrawlModal(true);
        try {
          const wsFiles: File[] = (data.knowledgeSources?.files || []) as File[];
          const d: any = data as any;
          
          // Process Step 3 use cases - map to business string value
          const useCasesList = data.useCases || [];
          let businessValue: string | undefined = undefined;
          if (useCasesList.some((uc: string) => uc.startsWith("customer-support"))) {
            businessValue = "customer-support";
          } else if (useCasesList.some((uc: string) => uc.startsWith("lead-capture"))) {
            businessValue = "lead-capture";
          } else if (useCasesList.some((uc: string) => uc.startsWith("sales"))) {
            businessValue = "sales";
          }
          
          setIsCrawling(true);
          setCrawlProgress(0);
          setCrawlError(null);
          
          // Simulate progress for file upload
          const progressInterval = setInterval(() => {
            setCrawlProgress((prev) => {
              if (prev >= 90) {
                clearInterval(progressInterval);
                return prev;
              }
              return prev + 15;
            });
          }, 300);
          
          await createWorkspaceWithFiles({
            companyName: data.companyName || "",
            industry: data.industry || "",
            companySize: d.companySize || "",
            country: d.country || "",
            websiteUrl: (data.websiteUrl || "").trim(),
            files: wsFiles,
            botName: data.botname || "",
            business: businessValue,
            fullName: data.name || "",
            emailAddress: data.email || "",
            phoneNumber: data.phone || "",
            info: data.description || "",
          });
          
          clearInterval(progressInterval);
          setCrawlProgress(100);
          setCrawlComplete(true);
          setIsCrawling(false);
          
          setTimeout(() => {
            setShowCrawlModal(false);
            footerOptions.onNext();
          }, 1500);
        } catch (wsErr) {
          setIsCrawling(false);
          setCrawlError(wsErr instanceof Error ? wsErr.message : "Failed to submit");
        }
      }
    };

    // Add this useEffect at component level (near other useEffects)
    useEffect(() => {
      // Cleanup function
      return () => {
        // Cleanup will be handled in the crawlWebsite function's error handler
        // But we can also add a ref to track socket and cleanup here
      };
    }, []);

    // Custom handleNext - intercept Next button to call API first
    const handleNext = async () => {
      // Check if we have URL or files to crawl
      const files = data.knowledgeSources?.files || [];
      const websiteUrl = data.websiteUrl || data.knowledgeSources?.urls?.[0] || "";

      // If no URL and no files, proceed directly to next step
      if (!websiteUrl && files.length === 0) {
        footerOptions.onNext?.();
        return;
      }

      // Show modal immediately
      setShowCrawlModal(true);

      // Call crawlWebsite - it will handle API call and call footerOptions.onNext() when complete
      await crawlWebsite();
    };

    // Modify footerOptions to use custom handleNext
    const modifiedFooterOptions = {
      ...footerOptions,
      onNext: handleNext,
    };

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
                  <div className="chatbot-content mt--3">
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
                     {/* Note Section */}
                     <div className="mt-2">
                              <div className="text-secondary small">
                                <strong>Note option:</strong> Since it's a demo version trained only on your website/document, it only reflects 10-15% capability. To unlock full potential, our engineering team will gather your requirements in detail to execute the fully featured version ahead.
                              </div>
                            </div>
                            {/* Activate Agent Now Button */}
                            {/* <div className="mt-3">
                              <button
                                onClick={handleActivateAgent}
                                disabled={isCrawling || (activeTab === "urls" && !(data.websiteUrl && data.websiteUrl.trim().length > 0))}
                                className="buttonAnimation2 flex justify-center items-center gap-2 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                type="button"
                              >
                                <span>{isCrawling ? "Crawling..." : "Activate Agent Now"}</span>
                                {!isCrawling && <ArrowRightIcon2 style={{ height: "24px" }} />}
                              </button>
                            </div> */}

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
                <WizardNavigation2 {...modifiedFooterOptions} />
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
        {/* Crawl Modal */}
        <CrawlModal
          isOpen={showCrawlModal}
          isLoading={isCrawling}
          progress={crawlProgress}
          message={crawlComplete ? "Crawling is completed" : "Website pages is crawling......"}
          error={crawlError}
          socketInfo={socketInfo || undefined}
          onClose={() => {
            if (!isCrawling) {
              setShowCrawlModal(false);
              setCrawlError(null);
              setSocketInfo(null);
            }
          }}
        />
      </div>
    );
  }
);

GetUserInfo2.displayName = "GetUserInfo2";

