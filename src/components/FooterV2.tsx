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
import AwardSection from "./CustomerServiceAIAgents/AwardSection";

const FooterV2 = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to: email }),
    });
    const data = await res.json();
    if (!res.ok) { throw new Error(data.error || "Failed to send email") }
    else {
      setSuccess("Subscribed successfully!");
      setEmail("");
      setTimeout(() => setSuccess(null), 3000);
    }
  }
  
  return (
    <footer className="footer-main bg-center bg_footer new bg-no-repeat bg-cover">
      <div className="footer-top">
        <div className="footer-top-container container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-brand">
                <Logo style={{ width: 150, height: 50 }} />
                <p className="footer-description">
                  Kogents AI develops agents that streamline workflows and drive
                  innovation across industries.
                </p>
                <div className="app-download-buttons">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <a href="#" className="app-btn">
                      <Image
                        src="/assets/img/app-section/6.png"
                        alt="Google Play"
                        width={140}
                        height={50}
                      />
                    </a>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        marginTop: "4px",
                      }}
                    >
                      Coming Soon
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <a href="#" className="app-btn">
                      <Image
                        src="/assets/img/app-section/7.png"
                        alt="App Store"
                        width={140}
                        height={50}
                      />
                    </a>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        marginTop: "4px",
                      }}
                    >
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <AwardSection className="awardSectionFooter"/>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-engagement">
            <div className="newsletter-section">
              <p className="h5">Subscribe to our Newsletter</p>
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
                  className="buttonAnimation2 px-4 subscribeBtn"
                  disabled={isLoading}
                  onClick={() => console.log("Subscribe button clicked")}
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              {success && (
                <p className="m-0 mt-2" style={{ color: "#22c55e" }}>{success}</p>
              )}
              {error && (
                <p className="m-0 mt-2" style={{ color: "#ef4444" }}>{error}</p>
              )}
            </div>
            <div className="social-section">
              <p className="h5">Get in Touch</p>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/company/kogentsai/"
                  target="_blank"
                  className="social-icon"
                  aria-label="Linkedin"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="https://www.facebook.com/kogents/"
                  target="_blank"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://x.com/kogentsai"
                  target="_blank"
                  className="social-icon"
                  aria-label="Twitter"
                >
                  <TwitterXIcon />
                </a>
                <a
                  href="https://www.youtube.com/@kogentsai"
                  target="_blank"
                  className="social-icon"
                  aria-label="Youtube"
                >
                  <YoutubeIcon />
                </a>
                <a
                  href="https://www.instagram.com/kogentsai/"
                  target="_blank"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.pinterest.com/kogentsai/"
                  target="_blank"
                  className="social-icon"
                  aria-label="Pinterest"
                >
                  <PinterestIcon />
                </a>
                <a
                  href="https://www.tiktok.com/@kogentsai"
                  target="_blank"
                  className="social-icon"
                  aria-label="TikTok"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-grid container">
          <div className="footer-column">
            <p className="h6">Channels</p>
            <div className="footer-links">
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
              </ul>
              <p className="h6 footCate">Resources</p>
              <ul>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
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
            <p className="h6">Integrations</p>
            <div className="footer-links">
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
              <p className="h6 footCate1">Company</p>
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
            <p className="h6">By Industries</p>
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
              <p className="h6 footCate">Legal</p>
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
            <p className="h6">By Professions</p>
            <div className="footer-links">
              <ul>
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
              <p className="h6 glossary">Glossary</p>
              <ul>
                <li>
                  <Link href="/ai-glossary">
                    AI Glossary
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <p className="h6">By Type</p>
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
              </ul>
              <p className="h6 companyInfo">Company Info</p>
              <ul className="company-info-list">
                <li>
                  <Link
                    className="d-flex align-items-center gap-2"
                    href="mailto:info@kogents.ai"
                  >
                    <Image
                      width={20}
                      height={20}
                      className=""
                      src="/assets/img/email.svg"
                      alt="icon"
                    />{" "}
                    info@kogents.ai
                  </Link>
                </li>
                <li>
                  <Link href="#">AI Automation</Link>
                </li>
                <li>
                  <Link href="#">AI Recruiting</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © Kogents AI. All Rights Reserved 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;
