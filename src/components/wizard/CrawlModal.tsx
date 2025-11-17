"use client";

import React from "react";

interface CrawlModalProps {
  isOpen: boolean;
  isLoading: boolean;
  progress?: number;
  message?: string;
  error?: string | null;
  onClose?: () => void;
  socketInfo?: {
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
  };
}

const CrawlModal: React.FC<CrawlModalProps> = ({
  isOpen,
  isLoading,
  progress = 0,
  message = "Crawling website...",
  error,
  onClose,
  socketInfo,
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
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#1a1a2e",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "600px",
          width: "90%",
          border: "2px solid #a855f7",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {isLoading ? (
            <>
              {/* Hide spinner when progress is 100 (completed) */}
              {progress < 100 && (
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
              )}
              {progress >= 100 && (
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                  }}
                >
                  ✅
                </div>
              )}
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
              <p style={{ color: "#9ca3af", fontSize: "0.875rem", marginBottom: "1rem" }}>
                {progress > 0 ? `${Math.round(progress)}%` : "Starting..."}
              </p>
              
              {/* Simple Status Messages */}
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem",
                  backgroundColor: "#0f172a",
                  borderRadius: "8px",
                  border: "1px solid #334155",
                  textAlign: "left",
                }}
              >
                <div style={{ fontSize: "0.875rem", color: "#9ca3af", lineHeight: "1.8" }}>
                  {socketInfo && socketInfo.connected && (
                    <div style={{ marginBottom: "0.75rem", color: "#10b981" }}>
                      ✅ Socket is connected
                    </div>
                  )}
                  
                  <div style={{ marginBottom: "0.75rem", color: "#60a5fa" }}>
                    🌐 Website pages is crawling......
                  </div>
                  
                  {progress >= 100 && (
                    <div style={{ marginBottom: "0.75rem", color: "#10b981", fontWeight: "bold" }}>
                      ✅ Crawling is completed
                    </div>
                  )}
                </div>
              </div>
              
              {/* COMMENTED OUT: Socket.IO Runtime Information - Not showing detailed socket info anymore */}
              {false && socketInfo && (
                <div
                  style={{
                    marginTop: "1.5rem",
                    padding: "1rem",
                    backgroundColor: "#0f172a",
                    borderRadius: "8px",
                    border: "1px solid #334155",
                    textAlign: "left",
                  }}
                >
                  <h4
                    style={{
                      color: "#a855f7",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                      marginBottom: "0.75rem",
                    }}
                  >
                    🔌 Socket.IO Status
                  </h4>
                  <div style={{ fontSize: "0.75rem", color: "#9ca3af", lineHeight: "1.6" }}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span style={{ color: "#64748b" }}>Connection: </span>
                      <span style={{ color: socketInfo?.connected ? "#10b981" : "#ef4444" }}>
                        {socketInfo?.connected ? "✅ Connected" : "❌ Disconnected"}
                      </span>
                    </div>
                    {socketInfo?.socketUrl && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <span style={{ color: "#64748b" }}>Socket URL: </span>
                        <span style={{ color: "#60a5fa", fontSize: "0.7rem", wordBreak: "break-all" }}>
                          {socketInfo?.socketUrl}
                        </span>
                      </div>
                    )}
                    {socketInfo?.socketPort && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <span style={{ color: "#64748b" }}>Socket Port: </span>
                        <span style={{ color: "#fff" }}>{socketInfo?.socketPort}</span>
                      </div>
                    )}
                    {socketInfo?.socketEvent && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <span style={{ color: "#64748b" }}>Socket Event: </span>
                        <span style={{ color: "#a855f7", fontSize: "0.7rem", wordBreak: "break-all" }}>
                          {socketInfo?.socketEvent}
                        </span>
                      </div>
                    )}
                    {socketInfo?.socketId && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <span style={{ color: "#64748b" }}>Socket ID: </span>
                        <span style={{ color: "#fff" }}>{socketInfo?.socketId}</span>
                      </div>
                    )}
                    {socketInfo?.userId && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <span style={{ color: "#64748b" }}>User ID: </span>
                        <span style={{ color: "#fff", fontSize: "0.7rem", wordBreak: "break-all" }}>
                          {socketInfo?.userId}
                        </span>
                      </div>
                    )}
                    {socketInfo?.step && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <span style={{ color: "#64748b" }}>Current Step: </span>
                        <span style={{ color: "#a855f7", textTransform: "capitalize" }}>
                          {socketInfo?.step?.replace(/_/g, ' ')}
                        </span>
                      </div>
                    )}
                    {socketInfo?.timestamp && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <span style={{ color: "#64748b" }}>Last Update: </span>
                        <span style={{ color: "#fff" }}>
                          {socketInfo?.timestamp}
                        </span>
                      </div>
                    )}
                    {socketInfo?.data && (
                      <>
                        {socketInfo?.data.message && (
                          <div style={{ marginBottom: "0.5rem" }}>
                            <span style={{ color: "#64748b" }}>Message: </span>
                            <span style={{ color: "#10b981" }}>{socketInfo?.data.message}</span>
                          </div>
                        )}
                        {socketInfo?.data.status && (
                          <div style={{ marginBottom: "0.5rem" }}>
                            <span style={{ color: "#64748b" }}>Status: </span>
                            <span style={{ color: "#fff", textTransform: "capitalize" }}>
                              {socketInfo?.data.status}
                            </span>
                          </div>
                        )}
                        {socketInfo?.data.url && (
                          <div style={{ marginBottom: "0.5rem" }}>
                            <span style={{ color: "#64748b" }}>URL: </span>
                            <span style={{ color: "#60a5fa", wordBreak: "break-all", fontSize: "0.7rem" }}>
                              {socketInfo?.data.url}
                            </span>
                          </div>
                        )}
                        {socketInfo?.data.progress !== undefined && (
                          <div style={{ marginBottom: "0.5rem" }}>
                            <span style={{ color: "#64748b" }}>Progress: </span>
                            <span style={{ color: "#a855f7", fontWeight: "bold" }}>
                              {socketInfo?.data.progress}%
                            </span>
                          </div>
                        )}
                        
                        {/* Pages Count Display - Enhanced */}
                        {(socketInfo?.data.pages !== undefined || 
                          socketInfo?.data.totalPages !== undefined || 
                          socketInfo?.data.pagesCrawled !== undefined) && (
                          <div 
                            style={{ 
                              marginTop: "0.75rem", 
                              padding: "0.75rem", 
                              backgroundColor: "#1e293b", 
                              borderRadius: "6px",
                              border: "1px solid #334155"
                            }}
                          >
                            <div style={{ color: "#a855f7", fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                              📄 Pages Information
                            </div>
                            {socketInfo?.data.pages !== undefined && (
                              <div style={{ marginBottom: "0.4rem" }}>
                                <span style={{ color: "#64748b" }}>Pages: </span>
                                <span style={{ color: "#fff", fontWeight: "bold" }}>
                                  {socketInfo?.data.pages}
                                </span>
                              </div>
                            )}
                            {socketInfo?.data.totalPages !== undefined && (
                              <div style={{ marginBottom: "0.4rem" }}>
                                <span style={{ color: "#64748b" }}>Total Pages: </span>
                                <span style={{ color: "#fff", fontWeight: "bold" }}>
                                  {socketInfo?.data.totalPages}
                                </span>
                              </div>
                            )}
                            {socketInfo?.data.pagesCrawled !== undefined && (
                              <div style={{ marginBottom: "0.4rem" }}>
                                <span style={{ color: "#64748b" }}>Pages Crawled: </span>
                                <span style={{ color: "#10b981", fontWeight: "bold" }}>
                                  {socketInfo?.data.pagesCrawled}
                                  {socketInfo?.data.totalPages !== undefined && ` / ${socketInfo?.data.totalPages}`}
                                </span>
                              </div>
                            )}
                            {socketInfo?.data.sitemap && Array.isArray(socketInfo?.data.sitemap) && socketInfo?.data.sitemap.length > 0 && (
                              <div style={{ marginTop: "0.5rem", paddingTop: "0.5rem", borderTop: "1px solid #334155" }}>
                                <span style={{ color: "#64748b", fontSize: "0.7rem" }}>Sitemap URLs: </span>
                                <span style={{ color: "#60a5fa", fontSize: "0.7rem" }}>
                                  {socketInfo?.data.sitemap.length} URLs
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                        
                        <div style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid #334155" }}>
                          <span style={{ color: "#64748b", display: "block", marginBottom: "0.25rem" }}>
                            Full Data:
                          </span>
                          <pre
                            style={{
                              color: "#cbd5e1",
                              fontSize: "0.7rem",
                              margin: 0,
                              padding: "0.5rem",
                              backgroundColor: "#020617",
                              borderRadius: "4px",
                              overflow: "auto",
                              maxHeight: "150px",
                            }}
                          >
                            {JSON.stringify(socketInfo?.data, null, 2)}
                          </pre>
                        </div>
                      </>
                    )}
                    {socketInfo?.userId && (
                      <div style={{ marginTop: "0.5rem", paddingTop: "0.5rem", borderTop: "1px solid #334155" }}>
                        <span style={{ color: "#64748b" }}>User ID: </span>
                        <span style={{ color: "#fff" }}>{socketInfo?.userId}</span>
                      </div>
                    )}
                    {socketInfo?.eventType && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <span style={{ color: "#64748b" }}>Event Type: </span>
                        <span style={{ color: "#fff" }}>{socketInfo?.eventType}</span>
                      </div>
                    )}
                    {socketInfo?.source && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <span style={{ color: "#64748b" }}>Source: </span>
                        <span style={{ color: "#fff" }}>{socketInfo?.source}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
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

