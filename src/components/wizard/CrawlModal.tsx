"use client";

import React from "react";

interface CrawlModalProps {
  isOpen: boolean;
  isLoading: boolean;
  progress?: number;
  message?: string;
  error?: string | null;
  onClose?: () => void;
}

const CrawlModal: React.FC<CrawlModalProps> = ({
  isOpen,
  isLoading,
  progress = 0,
  message = "Crawling website...",
  error,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking the backdrop itself, not the modal content
    if (e.target === e.currentTarget && onClose && !isLoading) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        style={{
          backgroundColor: "#1a1a2e",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "500px",
          width: "90%",
          border: "2px solid #a855f7",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {isLoading ? (
            <>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  border: "4px solid #6b7280",
                  borderTop: "4px solid #a855f7",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                  margin: "0 auto 1.5rem",
                }}
              />
              <style jsx>{`
                @keyframes spin {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
              `}</style>
              <h3
                style={{
                  color: "#fff",
                  marginBottom: "1rem",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                {message}
              </h3>
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  backgroundColor: "#374151",
                  borderRadius: "4px",
                  overflow: "hidden",
                  marginBottom: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    backgroundColor: "#a855f7",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
              <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
                {progress > 0 ? `${Math.round(progress)}%` : "Starting..."}
              </p>
            </>
          ) : error ? (
            <>
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                }}
              >
                ❌
              </div>
              <h3
                style={{
                  color: "#ef4444",
                  marginBottom: "1rem",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                Error
              </h3>
              <p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>
                {error}
              </p>
              {onClose && (
                <button
                  onClick={onClose}
                  style={{
                    backgroundColor: "#a855f7",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.75rem 1.5rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#9333ea";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#a855f7";
                  }}
                >
                  Close
                </button>
              )}
            </>
          ) : (
            <>
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                }}
              >
                ✅
              </div>
              <h3
                style={{
                  color: "#10b981",
                  marginBottom: "1rem",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                Crawling Complete!
              </h3>
              <p style={{ color: "#9ca3af" }}>
                Your website has been successfully crawled.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrawlModal;

