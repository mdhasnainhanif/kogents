'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from '@/app/sample/page.module.css';

interface Message {
  id: number;
  sender: string;
  senderIcon: string;
  text: string;
  time: string;
  isAgent: boolean;
  isUser?: boolean;
  isSystem?: boolean;
  showStatus: boolean;
}

export interface ChatWidgetProps {
  botName?: string;
  avatar?: string;
  primaryColor?: string;
  companyName?: string;
  step?: number;
  customMessages?: Message[]; // Add this prop
}

export function ChatWidget({ 
  botName = 'Sarah', 
  avatar, 
  primaryColor = '#4a90e2',
  companyName,
  step,
  customMessages // Add this
}: ChatWidgetProps) {
  const [avatarError, setAvatarError] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([]);

  // Update messages when companyName changes (Basic Setup step)
  useEffect(() => {
    // If customMessages provided, use them directly (for Step 3)
    if (customMessages && customMessages.length > 0) {
      setMessages(customMessages);
      return;
    }
    const currentTime = new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    if (step === 1) {
      // Step 1: Only one agent message (grey bubble) - simple default
      setMessages([
        {
          id: 1,
          sender: 'System',
          senderIcon: 'outlet',
          text: 'Connected to AI Agent',
          time: '',
          isAgent: false,
          isSystem: true,
          showStatus: false,
        },
        {
          id: 2,
          sender: botName || 'Sarah',
          senderIcon: '👤',
          text: 'Hey there, how can i help you?',
          time: '4:18 PM',
          isAgent: false,
          isUser: false,
          showStatus: false,
        },
      ]);
    } else if (step === 2) {
      // Basic Setup step messages
      setMessages([
        {
          id: 1,
          sender: 'System',
          senderIcon: 'outlet',
          text: 'Connected to AI Agent',
          time: '',
          isAgent: false,
          isSystem: true,
          showStatus: false,
        },
        {
          id: 2,
          sender: botName || 'Sarah',
          senderIcon: '👤',
          text: `Welcome to "${companyName}"!`,
          time: currentTime,
          isAgent: false,
          isUser: false,
          showStatus: false,
        },
      ]);
    } else {
      // Default messages (other steps) - when no step specified
      setMessages([
        {
          id: 1,
          sender: 'System',
          senderIcon: 'outlet',
          text: 'Connected to AI Agent',
          time: '',
          isAgent: false,
          isSystem: true,
          showStatus: false,
        },
        {
          id: 2,
          sender: botName || 'Sarah',
          senderIcon: '👤',
          text: 'Hey there, how can i help you?',
          time: '4:18 PM',
          isAgent: false,
          isUser: false,
          showStatus: false,
        },
        {
          id: 3,
          sender: 'You',
          senderIcon: '👤',
          text: "My order hasn't arrived yet.",
          time: '4:20 PM',
          isAgent: false,
          isUser: true,
          showStatus: false,
        },
        {
          id: 4,
          sender: botName || 'Sarah',
          senderIcon: '👤',
          text: "I'm sorry to hear that! Can you share your order number",
          time: '4:21 PM',
          isAgent: false,
          isUser: false,
          showStatus: false,
        },
        {
          id: 5,
          sender: 'You',
          senderIcon: '👤',
          text: "Yes, it's #5421",
          time: '4:22 PM',
          isAgent: false,
          isUser: true,
          showStatus: false,
        },
      ]);
    }
  }, [companyName, botName, step, customMessages]); // Add customMessages to dependencies

  const [inputValue, setInputValue] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset avatar error when avatar changes
  useEffect(() => {
    setAvatarError(false);
  }, [avatar]);

  const sendMessage = () => {
    if (inputValue.trim()) {
      const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      const newMessage: Message = {
        id: messages.length + 1,
        sender: 'You',
        senderIcon: '👤',
        text: inputValue.trim(),
        time: currentTime,
        isAgent: false,
        isUser: true,
        showStatus: false,
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Electrical outlet icon component
  const OutletIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}
    >
      {/* Main rectangle body with rounded corners */}
      <rect
        x="5"
        y="11"
        width="14"
        height="9"
        rx="2"
        stroke="#166534"
        strokeWidth="2"
        fill="none"
      />
      {/* Top curved element (ground pin) - curves to the left */}
      <path
        d="M12 11 L12 7 Q12 5 10 5"
        stroke="#166534"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left socket hole (oval) */}
      <ellipse
        cx="9.5"
        cy="15.5"
        rx="2"
        ry="1.5"
        fill="#166534"
      />
      {/* Right socket hole (oval) */}
      <ellipse
        cx="14.5"
        cy="15.5"
        rx="2"
        ry="1.5"
        fill="#166534"
      />
    </svg>
  );

  return (
    <div>
      <div className={styles.chatContainer} ref={containerRef}>
        <div 
          className={styles.chatHeader}
          style={{ 
            background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)` 
          }}
        >
          <div className={styles.avatar}>
            {avatar && !avatarError ? (
              <img 
                src={avatar} 
                alt="Bot Avatar" 
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={() => setAvatarError(true)}
              />
            ) : (
              <span>👩</span>
            )}
          </div>
          <div className={styles.headerInfo}>
            <div className={styles.headerName}>{(botName || 'Sarah')}</div>
            <div className={styles.headerStatus}>
              <span className={styles.statusDot}></span>
              Online
            </div>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.headerBtn} onClick={toggleFullscreen}>
              ⛶
            </button>
            <button className={styles.headerBtn}>—</button>
          </div>
        </div>

        <div className={styles.chatMessages}>
          {messages.map((message) => {
            // System message (centered, green bubble)
            if (message.isSystem) {
              return (
                <div key={message.id} className={styles.messageGroup} style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className={styles.statusMessage}>
                    {message.senderIcon === 'outlet' ? <OutletIcon /> : message.senderIcon} {message.text}
                  </div>
                </div>
              );
            }

            // User message (right aligned, blue bubble)
            if (message.isUser) {
              return (
                <div key={message.id} className={styles.messageGroup} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <div
                    className={styles.messageBubble}
                    style={{
                      background: primaryColor,
                      color: 'white',
                      marginLeft: 0,
                      marginRight: 0,
                      maxWidth: '70%',
                      borderRadius: '8px',
                    }}
                  >
                    <div className={styles.messageText} style={{ color: 'white' }}>
                      {message.text}
                    </div>
                  </div>
                  {message.time && (
                    <div className={styles.messageTime} style={{ marginLeft: 0, marginRight: 0, textAlign: 'right' }}>
                      {message.time}
                    </div>
                  )}
                </div>
              );
            }

            // Agent message (left aligned, grey bubble)
            return (
              <div key={message.id} className={styles.messageGroup}>
                <div className={styles.messageSender}>
                  {avatar && !avatarError ? (
                    <img 
                      src={avatar} 
                      alt="Avatar" 
                      className={styles.senderIcon}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        padding: 0,
                        background: 'transparent'
                      }}
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <div className={styles.senderIcon}>{message.senderIcon}</div>
                  )}
                  {message.sender}
                </div>
                <div className={styles.messageBubble} style={{ background: '#f5f5f5' }}>
                  <div className={styles.messageText} style={{ color: '#333', fontWeight: 'bold' }}>{message.text}</div>
                </div>
                {message.time && (
                  <div className={styles.messageTime}>{message.time}</div>
                )}
                {message.showStatus && (
                  <div className={styles.statusMessage}>
                    🔒 Connected to {botName || 'Sarah'}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* <div className={styles.chatInputContainer}>
          <input
            type="text"
            className={styles.chatInput}
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className={styles.sendBtn} onClick={sendMessage}>
            ✈
          </button>
        </div> */}
      </div>

      <button className={styles.floatingBtn}>N</button>
    </div>
  );
}

