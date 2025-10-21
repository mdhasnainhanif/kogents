"use client";

import React, { ChangeEvent, useState } from "react";
import {
  AlertCircle,
  FileInput,
  FileText,
  Link2,
  PlusIcon,
  Send,
  X,
} from "lucide-react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation3 } from "../WizardNavigation3";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

interface KnowledgeSourcesStepProps {
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  footerOptions: FooterOptions;
}

// Main component
export function KnowledgeSourcesStep3({
  data,
  onUpdate,
  errors,
  footerOptions,
}: KnowledgeSourcesStepProps) {

  const [curretnTab, setCurretnTab] = useState("url")

  const URLTab = () => {
    const [urlInput, setUrlInput] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setUrlInput(e.target.value);
    };
    return (
      <div>
        <label htmlFor="bot-name">Enter your company website</label>
        <div className="relative">
          <input
            id="bot-name"
            type="url"
            placeholder="https://example.com"
            value={urlInput}
            onChange={handleInputChange}
            className="chabot_url_input"
          />
          <button
            type="button"
            className="send_btn_chatbot2"
          >
            <Send size={16} />
          </button>
          <p className="text-sm mt-2">
            Don't have a website?{" "}
            <span
              className="text-purple underline cursor-pointer"
              onClick={() => setUrlInput("https://example.com")}
            >
              Use a sample website
            </span>
          </p>
        </div>
      </div>
    );
  };

  const FilesUploadTab = () => {
    const [uploadFiles, setUploadFiles] = useState<File[]>([]);

    const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      if (!files || files.length === 0) return;

      const fileArray = Array.from(files);

      // Filter out image files
      const nonImageFiles = fileArray.filter(
        (file) => !file.type.startsWith("image/")
      );

      if (nonImageFiles.length === 0) {
        alert("Only non-image files are allowed.");
        return;
      }

      // Optional: prevent duplicates based on file name
      const newFiles = nonImageFiles.filter(
        (file) => !uploadFiles.some((f) => f.name === file.name)
      );

      // Update state
      setUploadFiles((prev) => [...prev, ...newFiles]);

      console.log("Uploaded files:", [...uploadFiles, ...newFiles]);
    };

    const handleRemoveFile = (file: File) => {
      setUploadFiles((prev) =>
        prev.filter((f) => !(f.name === file.name && f.size === file.size))
      );
    };

    return (
      <>
        <div className="space-y-4">
          <p className="text-sm max-w-xs">
            Upload up to 5 documents. You can add more documents after
            onboarding.
          </p>
          <ul className="chatbot_upload_files">
            {uploadFiles.length > 0 &&
              uploadFiles.map((file, index) => (
                <li key={index}>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText size={16} />
                    <span>{file?.name}</span>
                  </div>
                  <span
                    className="cursor-pointer p-1"
                    onClick={() => handleRemoveFile(file)}
                  >
                    <X size={16} />
                  </span>
                </li>
              ))}
          </ul>
          <input
            type="file"
            id="file_upload_step"
            multiple
            accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,
          .xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
          .pdf,application/pdf"
            hidden
            onChange={handleUploadFile}
          />
          <label
            htmlFor="file_upload_step"
            className="flex items-center gap-2 cursor-pointer text-sm p-2 text-purple"
          >
            <PlusIcon className="h-4 w-4" /> Add
          </label>
        </div>
      </>
    );
  };

  const apps = [
    {
      name: "Notion",
      src: "/assets/img/notion.png",
    },
    {
      name: "OneDrive",
      src: "/assets/img/one-drive.png",
    },
    {
      name: "Google Drive",
      src: "/assets/img/google-drive.png",
    },
    {
      name: "Confluence",
      src: "/assets/img/confluence.png",
    },
    {
      name: "Salesforce",
      src: "/assets/img/salesforce.png",
    },
  ];

  const AppsTab = () => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          {apps.map((app) => (
            <button
              key={app.name}
              disabled
              className="border border-n-border-neutral-weak p-2 rounded-full"
              title={app.name}
            >
              <Image
                src={app.src}
                alt={app.name}
                width={24}
                height={24}
                style={{ color: "transparent" }}
              />
            </button>
          ))}
        </div>

        <p className="text-sm font-normal">
          <span>
            More data source options become available after onboarding is
            completed.
          </span>
          <br />
          <span>
            Please try training your bot via{" "}
            <span className="text-purple underline underline-offset-2 cursor-pointer"
              onClick={() => setCurretnTab("files")}
            >
              file upload
            </span>{" "}
            or{" "}
            <span
              onClick={() => setCurretnTab("url")}

              className="text-purple underline underline-offset-2 cursor-pointer">
              URLs
            </span>{" "}
            for now.
          </span>
        </p>
      </div>
    )
  }


  const TabsListing = [
    {
      id: "url",
      title: "URL",
      icon: <Link2 />,
      content: <URLTab />,
    },
    {
      id: "files",
      title: "Files",
      icon: <FileText />,
      content: <FilesUploadTab />,
    },
    {
      id: "apps",
      title: "Apps",
      icon: <FileInput />,
      content: <AppsTab />,
    },
  ];
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
                {/* Header */}
                <div className="mb-4">
                  <div className=" small">Step 2 of 3</div>
                  <h2 className="h4 fw-bold mt-1">
                    Provide Information to Train Your Bot
                  </h2>
                  <p className=" small mt-3">
                    Share details about your company to customize your experience
                    and receive tailored recommendations
                  </p>
                  <p className=" small mt-1">
                    You can add more content later.
                  </p>
                </div>

                {/* Company Name */}
                <div className="mb-4 d-flex flex-column flex-grow-1">
                  <label htmlFor="company-name" className="form-label">
                    Choose one of the following
                  </label>
                  <div>
                    {/* TAB HEADERS */}
                    <div
                      className="d-flex gap-2 bg-transparent"
                      style={{ height: "88px" }}
                      role="tablist"
                      aria-label="Knowledge source tabs"
                    >
                      {TabsListing.map((t) => {
                        const active = curretnTab === t.id;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            role="tab"
                            aria-selected={active}
                            aria-controls={`panel-${t.id}`}
                            id={`tab-${t.id}`}
                            onClick={() => setCurretnTab(t.id)}
                            className={`d-flex flex-column align-items-center justify-content-center gap-2 flex-grow-1 border rounded text-white transition ${active ? "active_url_bot_tab" : ""
                              }`}
                            style={{ height: "88px" }}
                          >
                            <span className="fw-semibold">{t.title}</span>
                            {t.icon}
                          </button>
                        );
                      })}
                    </div>

                    {/* ACTIVE TAB CONTENT */}
                    <div
                      id={`panel-${curretnTab}`}
                      role="tabpanel"
                      aria-labelledby={`tab-${curretnTab}`}
                      className="mt-4"
                    >
                      {TabsListing.find((t) => t.id === curretnTab)?.content}
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

        {/* Right Panel */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}>
          <img
            src="/assets/img/step3img.svg"
            alt="Preview"
            className="img-fluid mx-auto"
            style={{ maxWidth: "500px", height: "auto" }}
          />
        </div>
      </div>
    </div>

  );
}
