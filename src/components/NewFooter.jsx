"use client";
import React, { useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Logo,
  TwitterXIcon,
  YoutubeIcon,
  PinterestIcon,
  TikTokIcon,
} from "@/icons";
import Link from "next/link";
import Image from "next/image";

const NewFooter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    console.log("Newsletter form submitted with email:", email);

    if (!email) {
      setError("Email is required");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      console.log("Sending newsletter subscription request...");
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email: email,
          phone: "",
          project_need: "Newsletter subscription request",
          gclid: "",
          fbclid: "",
          igclid: "",
          ttclid: "",
          fingerprint: "",
          chat: "",
          stable_session_id: "",
          fingerprintdata: "",
        }),
      });

      console.log("Response status:", response.status);
      const result = await response.json();
      console.log("Response result:", result);

      if (result.status === "success") {
        setSuccess("Thank you for subscribing to our newsletter!");
        setEmail("");
        
        // Auto-hide success message after 4 seconds
        setTimeout(() => {
          setSuccess(null);
        }, 4000);
      } else {
        setError(result.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="footer-main bg-center bg_footer new bg-no-repeat bg-cover">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-top-container">
          <div className="footer-brand">
            <Logo style={{ width: 150, height: 50 }} />
            <p className="footer-description">
              Kogents AI develops agents that streamline workflows and drive
              innovation across industries.
            </p>
            <div className="app-download-buttons">
              <a href="#" className="app-btn">
                <Image
                  src="/assets/img/app-section/6.png"
                  alt="Google Play"
                  width={140}
                  height={50}
                />
              </a>
              <a href="#" className="app-btn">
                <Image
                  src="/assets/img/app-section/7.png"
                  alt="App Store"
                  width={140}
                  height={50}
                />
              </a>
            </div>
          </div>
          <div className="footer-engagement">
            <div className="newsletter-section">
              <h5>Subscribe to our Newsletter</h5>

              {/* Success Message */}
              {success && (
                <div
                  className="alert alert-success mb-3 w_fit p-3"
                  style={{
                    background: "#0f5132",
                    borderColor: "#badbcc",
                    color: "#d1e7dd",
                  }}
                >
                  <p className="m-0">{success}</p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div
                  className="alert alert-danger mb-3"
                  style={{
                    background: "#5c2623",
                    borderColor: "#f5c2c7",
                    color: "#f8d7da",
                  }}
                >
                  <p className="m-0">
                    <strong>Error:</strong> {error}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => {
                    console.log("Email changed:", e.target.value);
                    setEmail(e.target.value);
                  }}
                  className="newsletter-input"
                  required
                />
                <button
                  type="submit"
                  className="buttonAnimation2 px-4"
                  disabled={isLoading}
                  onClick={() => console.log("Subscribe button clicked")}
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            </div>
            <div className="social-section">
              <h5>Get in Touch</h5>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/company/kogentsai/"
                  target="_blank"
                  className="social-icon"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="https://www.facebook.com/kogents/"
                  target="_blank"
                  className="social-icon"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://x.com/kogentsai"
                  target="_blank"
                  className="social-icon"
                >
                  <TwitterXIcon />
                </a>
                <a
                  href="https://www.youtube.com/@kogentsai"
                  target="_blank"
                  className="social-icon"
                >
                  <YoutubeIcon />
                </a>
                <a
                  href="https://www.instagram.com/kogentsai/"
                  target="_blank"
                  className="social-icon"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.pinterest.com/kogentsai/"
                  target="_blank"
                  className="social-icon"
                >
                  <PinterestIcon />
                </a>
                <a
                  href="https://www.tiktok.com/@kogentsai"
                  target="_blank"
                  className="social-icon"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Navigation Links */}
      <div className="footer-middle">
        <div className="footer-grid">
          <div className="footer-column">
            <h6>Channels</h6>
            <div className="footer-links">
              {/* <h6 className="footer-subheading">Channels</h6> */}
              <ul>
                <li>
                  <Link href="/platforms/whatsapp-ai-agent">
                    Whatsapp Agents
                  </Link>
                </li>
                <li>
                  <Link href="/platforms/instagram-agent-ai">
                    Instagram Agents
                  </Link>
                </li>
                <li>
                  <Link href="/platforms/ai-agent-for-messenger">
                    Messenger Agents
                  </Link>
                </li>
                <li>
                  <Link href="/platforms/slack-ai-agent">Slack Agents</Link>
                </li>
                <li className="text-primary">
                  <Link href="/platforms">See All</Link>
                </li>
                {/* <li>
                  <Link href="/platforms/viber-ai-agent">Viber Agents</Link>
                </li>
                <li>
                  <Link href="/platforms/microsoft-teams-agents">
                    Microsoft Teams Agents
                  </Link>
                </li>
                <li>
                  <Link href="/platforms/ai-telegram-agent">
                    Telegram Agents
                  </Link>
                </li>
                <li>
                  <Link href="/platforms/line-ai-agent">Line Agents</Link>
                </li> */}
              </ul>
              <h6 className="footCate">Resources</h6>
              <ul>
                <li>
                  <Link href="/security">Security</Link>
                </li>
                {/* <li><Link href="/pricing">Pricing</Link></li> */}
                <li>
                  <Link href="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link href="/">Documentation</Link>
                </li>
                <li>
                  <Link href="/">API</Link>
                </li>
                <li>
                  <Link href="/case-studies">Use Cases</Link>
                </li>
                <li>
                  <Link href="/">Agentic Insights</Link>
                </li>
                <li>
                  <Link href="/">Status</Link>
                </li>
              </ul>
              
            </div>
          </div>

          <div className="footer-column">
            <h6>Integrations</h6>
            <div className="footer-links">
              {/* <h6 className="footer-subheading">By Industries</h6> */}
              <ul>
                <li>
                  <Link href="/platforms/hubspot-ai-integration">Hubspot</Link>
                </li>
                <li>
                  <Link href="/platforms/zendesk-ai-integration">Zendesk</Link>
                </li>
                <li>
                  <Link href="/platforms/jira-ai-integration">Jira</Link>
                </li>
                <li>
                  <Link href="/platforms/calendly-ai-integration">
                    Calendly
                  </Link>
                </li>
              </ul>
              <h6 className="footCate1">Company</h6>
              <ul>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link href="/platforms">Platforms</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link href="/">Request Demo</Link>
                </li>
                <li>
                  <Link href="/client-testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link href="/kogents-sitemap">Sitemap</Link>
                </li>
              </ul>
             
              
            </div>
          </div>

          <div className="footer-column">
            <h6>By Industries</h6>
            <div className="footer-links">
            <ul>
                <li>
                  <Link href="/solutions/healthcare-ai-agent">
                    Healthcare AI Agents
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/customer-service-ai-agent">
                    Customer Service AI Agents
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/ai-agent-for-education">
                    Education AI Agents
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/ai-agent-for-hr">HR AI Agents</Link>
                </li>
                <li className="text-primary">
                  <Link href="/solutions">See All</Link>
                </li>
              </ul>
              <h6 className="footCate">Legal</h6>
              <ul>
                <li>
                  <Link href="/privacy-statement">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-and-condition">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/security">Security</Link>
                </li>
                <li>
                  <Link href="/data-protection">Data Protection</Link>
                </li>
                <li>
                  <Link href="/refund-policy">Refund Policy</Link>
                </li>
                <li>
                  <Link href="/">Imprint</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <h6>By Professions</h6>
            <div className="footer-links">
            <ul>
                {/* <li>
                  <Link href="/solutions/ai-agent-event-planner">
                    Manager AI Agents
                  </Link>
                </li> */}
                <li>
                  <Link href="/solutions/ai-agent-event-planner">
                    Event Planner AI Agents
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/ai-agent-for-marketing">
                    Marketer AI Agents
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/ai-teacher-assistant">
                    Teacher AI Agents
                  </Link>
                </li>
              </ul>
              
            </div>
          </div>

          <div className="footer-column">
            <h6>By Type</h6>
            <div className="footer-links">
            <ul>
                <li>
                  <Link href="/solutions/ai-agent-dashboard">
                    AI Dashboard Templates
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/survey-ai-agent">
                    Survey AI Agents
                  </Link>
                </li>
                {/* <li>
                  <Link href="/solutions">Feedback AI Agents</Link>
                </li>
                <li>
                  <Link href="/solutions">Application AI Agents</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © Kogents AI. All Rights Reserved 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
