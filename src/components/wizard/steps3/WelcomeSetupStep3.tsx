"use client";

import { useState } from "react";
import { MessageSquare, Plus, X, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation3 } from "../WizardNavigation3";

interface WelcomeSetupStepProps {
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  footerOptions: FooterOptions;
}

const SUGGESTED_PROMPTS = [
  "How can I get started?",
  "What services do you offer?",
  "I need help with...",
  "Tell me about pricing",
  "How do I contact support?",
  "What are your hours?",
  "Can you help me with my order?",
  "I have a technical question",
];

export function WelcomeSetupStep3({
  data,
  onUpdate,
  errors,
  footerOptions,
}: WelcomeSetupStepProps) {
  const [newPrompt, setNewPrompt] = useState("");

  const updateWelcome = (updates: Partial<ChatbotWizardData["welcome"]>) => {
    onUpdate({
      welcome: {
        ...data.welcome,
        ...updates,
      },
    });
  };

  const addPrompt = (prompt: string) => {
    if (prompt.trim() && !data.welcome.initialPrompts.includes(prompt.trim())) {
      updateWelcome({
        initialPrompts: [...data.welcome.initialPrompts, prompt.trim()],
      });
      setNewPrompt("");
    }
  };

  const removePrompt = (index: number) => {
    const newPrompts = data.welcome.initialPrompts.filter(
      (_, i) => i !== index
    );
    updateWelcome({ initialPrompts: newPrompts });
  };

  const addSuggestedPrompt = (prompt: string) => {
    addPrompt(prompt);
  };

  return (
    <div className="container-fluid py-4">
      <div>
        <h2 className="h2">Welcome & Prompts</h2>
        <p className="text-secondary">
          Set up the first impression and guide users on how to interact with your chatbot.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-6 position-relative mb-4">
          {/* Welcome Message */}
          <div className="mb-4">
            <div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <MessageSquare className="me-2" />
                <strong>Welcome Message</strong>
              </div>
              <div>The first message users will see when they start a conversation</div>
            </div>
            <div className="mt-3">
              <label htmlFor="welcome-message" className="form-label">Message *</label>
              <textarea
                id="welcome-message"
                placeholder="Hello! I'm here to help you with any questions you might have. How can I assist you today?"
                value={data.welcome.message}
                onChange={(e) => updateWelcome({ message: e.target.value })}
                className={`form-control ${errors.some((e) => e.includes("welcome message")) ? "is-invalid" : ""}`}
                rows={4}
              />
              <div className="form-text">
                Keep it friendly and let users know what your bot can help with
              </div>
            </div>
          </div>

          {/* Initial Prompts */}
          <div className="mb-5">
            <div>
              <h5>Initial Prompts</h5>
              <div className="text-muted mb-3">Quick action buttons to help users get started</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Add Custom Prompt</label>
              <div className="d-flex gap-2">
                <input
                  type="text"
                  placeholder="e.g., How do I reset my password?"
                  value={newPrompt}
                  onChange={(e) => setNewPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addPrompt(newPrompt)}
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => addPrompt(newPrompt)}
                  disabled={!newPrompt.trim()}
                  aria-label="Add custom prompt"
                >
                  <Plus className="bi bi-plus" />
                </button>
              </div>
            </div>

            {data.welcome.initialPrompts.length > 0 && (
              <div className="mb-4">
                <label>Current Prompts</label>
                <div className="list-group mt-2">
                  {data.welcome.initialPrompts.map((prompt, index) => (
                    <div
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span>{prompt}</span>
                      <button
                        type="button"
                        onClick={() => removePrompt(index)}
                        className="btn btn-outline-danger btn-sm"
                        aria-label={`Remove prompt: ${prompt}`}
                      >
                        <X className="bi bi-x" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="d-flex align-items-center gap-2 mb-2">
                <Lightbulb className="me-2" />
                Suggested Prompts
              </label>
              <div className="d-flex flex-wrap gap-2">
                {SUGGESTED_PROMPTS.filter(
                  (prompt) => !data.welcome.initialPrompts.includes(prompt)
                ).map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => addSuggestedPrompt(prompt)}
                    className="btn btn-sm btn-outline-secondary"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="position-absolute bottom-0 start-0 w-100">
            <WizardNavigation3 {...footerOptions} />
          </div>
        </div>

        {/* Live Preview */}
        <div className="col-lg-6 position-sticky" style={{ top: '1rem' }}>
          <div className="mb-3">
            <h5>Preview</h5>
            <p className="text-muted">How the welcome experience will look</p>
          </div>

          <div className="border rounded p-4 bg-light" style={{ minHeight: '400px' }}>
            <div className="mb-4">
              {/* Chat Header */}
              <div
                className="d-flex align-items-center gap-3 p-3 rounded"
                style={{ backgroundColor: data.appearance.primaryColor + "10" }}
              >
                <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center overflow-hidden" style={{ width: '32px', height: '32px' }}>
                  {data.appearance.avatar ? (
                    <img
                      src={data.appearance.avatar || "/assets/img/placeholder.svg"}
                      alt="Bot"
                      className="w-100 h-100 object-fit-cover"
                    />
                  ) : (
                    <MessageSquare className="text-muted" style={{ width: '16px', height: '16px' }} />
                  )}
                </div>
                <div>
                  <div className="fw-medium small">{data.name || "Your Chatbot"}</div>
                  <div className="text-muted small">Online</div>
                </div>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="d-flex gap-2 mb-3 align-items-start">
              <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '24px', height: '24px' }}>
                {data.appearance.avatar ? (
                  <img
                    src={data.appearance.avatar || "/assets/img/placeholder.svg"}
                    alt="Bot"
                    className="w-100 h-100 object-fit-cover rounded-circle"
                  />
                ) : (
                  <MessageSquare className="text-muted" style={{ width: '12px', height: '12px' }} />
                )}
              </div>
              <div
                className="px-3 py-2 rounded-3"
                style={{ maxWidth: '90%', backgroundColor: data.appearance.secondaryColor }}
              >
                <small>{data.welcome.message || "Hello! How can I help you today?"}</small>
              </div>
            </div>

            {/* Initial Prompts */}
            {data.welcome.initialPrompts.length > 0 && (
              <div>
                <div className="text-muted small px-2 mb-2">Quick actions:</div>
                <div className="d-grid gap-2">
                  {data.welcome.initialPrompts.slice(0, 4).map((prompt, index) => (
                    <button
                      key={index}
                      type="button"
                      className="btn btn-outline-secondary text-start text-truncate"
                      style={{ borderColor: data.appearance.primaryColor + "30" }}
                    >
                      {prompt}
                    </button>
                  ))}
                  {data.welcome.initialPrompts.length > 4 && (
                    <div className="text-muted small px-2">
                      +{data.welcome.initialPrompts.length - 4} more...
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
}
