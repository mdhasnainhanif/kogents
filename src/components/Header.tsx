"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false); // mobile menu toggle
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // track which dropdown is open
  const pathname = usePathname();

  const toggleMenu = () => setOpen(!open);
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // ✅ Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [pathname]);
  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-[9999] border border-w-900 border-opacity-[8%] bg-opacity-5 backdrop-blur-lg bg-w-900 sticky-header">
        <div className="container px-5 mx-auto xl:px-0 headerContainer">
          <div className="items-center justify-between hidden md:flex">
            <Link href="/" className="flex items-center justify-start gap-2">
              <Image
                width={150}
                height={50}
                src="/assets/img/kogents-logo.svg"
                className="logo1"
                alt="logo"
              />
            </Link>
            <nav>
              <ul className="flex items-center justify-center md:gap-4 lg:gap-8 relative">
                <li className="group nav-item">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-sm font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Home
                  </Link>
                </li>
                <li className="cursor-pointer group nav-item customDropdown">
                  <Link
                    href="javascript:void(0);"
                    className="flex items-center gap-2 text-sm font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Platform
                    <svg
                      className="transition-transform duration-300 transform down-svg group-hover:rotate-180"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 4.5 6 8 2.5 4.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <div className="megaMenuDropdown platform">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="dropdownImgMain">
                          <Image
                            width={300}
                            height={200}
                            className="w-100"
                            src="/assets/img/platform.webp"
                            alt="logo"
                          />
                        </div>
                      </div>
                      <div className="ps-4 d-flex flex-wrap gap4rem">
                        <div>
                          <p className="menuHeading">Channels</p>
                          <ul className="p-0 pe-4">
                            <li className="removeIcon">
                              <Link href="/ai-whatsapp-agent">
                                <Image
                                  width={50}
                                  height={50}
                                  src="/assets/img/icons/whatsapp.svg"
                                  alt=""
                                />
                                Whatsapp Agent
                              </Link>
                            </li>
                            <li className="removeIcon">
                              <Link href="/ai-whatsapp-agent">
                                <Image
                                  width={50}
                                  height={50}
                                  src="/assets/img/icons/instagram1.svg"
                                  alt=""
                                />
                                Instagram Agent
                              </Link>
                            </li>
                            <li className="removeIcon">
                              <Link href="/ai-whatsapp-agent">
                                <Image
                                  width={50}
                                  height={50}
                                  src="/assets/img/icons/messenger.svg"
                                  alt=""
                                />
                                Messenger Agent
                              </Link>
                            </li>
                            <li className="removeIcon">
                              <Link href="/ai-whatsapp-agent">
                                <Image
                                  width={50}
                                  height={50}
                                  src="/assets/img/icons/shopify.svg"
                                  alt=""
                                />
                                Shopify Agent
                              </Link>
                            </li>
                            <li className="removeIcon ms-4">
                              <Link
                                className="dropdownBtnNew flex justify-center items-center gap-2 text-base font-medium open-modal-btn w_fit"
                                href="/all-channels"
                              >
                                See All Channels
                                <i className="fa-solid fa-chevron-right"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="menuHeading">Integrations</p>
                          <ul className="p-0 pe-4">
                            <li className="removeIcon">
                              <Link href="/ai-whatsapp-agent">
                                <Image
                                  width={50}
                                  height={50}
                                  src="/assets/img/icons/hubspot.svg"
                                  alt=""
                                />
                                HubSpot
                              </Link>
                            </li>
                            <li className="removeIcon">
                              <Link href="/ai-whatsapp-agent">
                                <Image
                                  width={50}
                                  height={50}
                                  src="/assets/img/icons/zdesk-icon2.webp"
                                  alt=""
                                />
                                Zendesk
                              </Link>
                            </li>
                            <li className="removeIcon">
                              <Link href="/ai-whatsapp-agent">
                                <Image width={50} height={50} src="/assets/img/icons/jira.svg" alt="" />
                                Jira
                              </Link>
                            </li>
                            <li className="removeIcon">
                              <Link href="/ai-whatsapp-agent">
                                <Image
                                  width={50}
                                  height={50}
                                  src="/assets/img/icons/calendly.png"
                                  alt=""
                                />
                                Calendly
                              </Link>
                            </li>
                            <li className="removeIcon ms-4">
                              <a
                                className="dropdownBtnNew flex justify-center items-center gap-2 text-base font-medium open-modal-btn w_fit"
                                href="/channels"
                              >
                                See All Integrations
                                <i className="fa-solid fa-chevron-right"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="menuHeading">LLM Providers</p>
                          <ul className="p-0 pe-4">
                            <li className="removeIcon">
                              <Link href="/ai-whatsapp-agent">
                                <Image width={50} height={50} src="/assets/img/icons/openai.png" alt="" />
                                OpenAI
                              </Link>
                            </li>
                            <li className="removeIcon">
                              <Link href="/ai-whatsapp-agent">
                                <Image
                                  width={50}
                                  height={50}
                                  src="/assets/img/icons/anthropic.png"
                                  alt=""
                                />
                                Anthropic
                              </Link>
                            </li>
                            <li className="removeIcon">
                              <Link href="/ai-whatsapp-agent">
                                <Image width={50} height={50} src="/assets/img/icons/groq.png" alt="" />
                                Groq
                              </Link>
                            </li>
                            <li className="removeIcon">
                              <Link href="/ai-whatsapp-agent">
                                <Image
                                  width={50}
                                  height={50}
                                  src="/assets/img/icons/hugging-face.svg"
                                  alt=""
                                />
                                Hugging Face
                              </Link>
                            </li>
                            <li className="removeIcon ms-4">
                              <a
                                className="dropdownBtnNew flex justify-center items-center gap-2 text-base font-medium open-modal-btn w_fit"
                                href="/channels"
                              >
                                See All LLMs
                                <i className="fa-solid fa-chevron-right"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer group nav-item customDropdown">
                  <a
                    href="javascript:void(0);"
                    className="flex items-center gap-2 text-sm font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Solutions
                    <svg
                      className="transition-transform duration-300 transform down-svg group-hover:rotate-180"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 4.5 6 8 2.5 4.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <div className="megaMenuDropdown">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="dropdownImgMain">
                          <Image
                            width={300}
                            height={200}
                            className="w-100"
                            src="/assets/img/solutions.webp"
                            alt="logo"
                          />
                        </div>
                      </div>
                      <div className="ps-4 d-flex flex-wrap gap4rem">
                        <div>
                          <div>
                            <p className="menuHeading">By Industries</p>
                            <ul>
                              <li>
                                <Link href="/solutions">
                                  <div className="icon">
                                    <i className="fa-solid fa-pencil">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-pencil-line-icon lucide-pencil-line"
                                      >
                                        <path d="M13 21h8" />
                                        <path d="m15 5 4 4" />
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                      </svg>
                                    </i>
                                  </div>
                                  Healthcare AI Agents
                                </Link>
                              </li>
                              <li>
                                <Link href="/solutions">
                                  <div className="icon">
                                    <i className="fa-solid fa-pencil">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-pencil-line-icon lucide-pencil-line"
                                      >
                                        <path d="M13 21h8" />
                                        <path d="m15 5 4 4" />
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                      </svg>
                                    </i>
                                  </div>
                                  Customer Service AI Agent
                                </Link>
                              </li>
                              <li>
                                <Link href="/solutions">
                                  <div className="icon">
                                    <i className="fa-solid fa-pencil">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-pencil-line-icon lucide-pencil-line"
                                      >
                                        <path d="M13 21h8" />
                                        <path d="m15 5 4 4" />
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                      </svg>
                                    </i>
                                  </div>
                                  Education AI Agents
                                </Link>
                              </li>
                              <li>
                                <a href="#">
                                  <div className="icon">
                                    <i className="fa-solid fa-pencil">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-pencil-line-icon lucide-pencil-line"
                                      >
                                        <path d="M13 21h8" />
                                        <path d="m15 5 4 4" />
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                      </svg>
                                    </i>
                                  </div>
                                  HR AI Agents
                                </a>
                              </li>
                              <li className="removeIcon noHover">
                                <Link
                                  className="dropdownBtnNew flex justify-center items-center gap-2 text-base font-medium open-modal-btn w_fit"
                                  href="/solutions"
                                >
                                  See All Templates
                                  <i className="fa-solid fa-chevron-right"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p className="menuHeading">By Profession</p>
                            <ul>
                              <li>
                                <Link href="/solutions">
                                  <div className="icon">
                                    <i className="fa-solid fa-pencil">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-pencil-line-icon lucide-pencil-line"
                                      >
                                        <path d="M13 21h8" />
                                        <path d="m15 5 4 4" />
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                      </svg>
                                    </i>
                                  </div>
                                  Managers Agents
                                </Link>
                              </li>
                              <li>
                                <Link href="/solutions">
                                  <div className="icon">
                                    <i className="fa-solid fa-pencil">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-pencil-line-icon lucide-pencil-line"
                                      >
                                        <path d="M13 21h8" />
                                        <path d="m15 5 4 4" />
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                      </svg>
                                    </i>
                                  </div>
                                  Event Planners Agents
                                </Link>
                              </li>
                              <li>
                                <Link href="/solutions">
                                  <div className="icon">
                                    <i className="fa-solid fa-pencil">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-pencil-line-icon lucide-pencil-line"
                                      >
                                        <path d="M13 21h8" />
                                        <path d="m15 5 4 4" />
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                      </svg>
                                    </i>
                                  </div>
                                  Marketers Agents
                                </Link>
                              </li>
                              <li>
                                <Link href="/solutions">
                                  <div className="icon">
                                    <i className="fa-solid fa-pencil">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-pencil-line-icon lucide-pencil-line"
                                      >
                                        <path d="M13 21h8" />
                                        <path d="m15 5 4 4" />
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                      </svg>
                                    </i>
                                  </div>
                                  Teachers Agents
                                </Link>
                              </li>
                              <li className="removeIcon noHover">
                                <Link
                                  className="dropdownBtnNew flex justify-center items-center gap-2 text-base font-medium open-modal-btn w_fit"
                                  href="/solutions"
                                >
                                  See All Templates
                                  <i className="fa-solid fa-chevron-right"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p className="menuHeading">By Type</p>
                            <ul>
                              <li>
                                <Link href="/solutions">
                                  <div className="icon">
                                    <i className="fa-solid fa-pencil">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-pencil-line-icon lucide-pencil-line"
                                      >
                                        <path d="M13 21h8" />
                                        <path d="m15 5 4 4" />
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                      </svg>
                                    </i>
                                  </div>
                                  AI Dashboard Templates
                                </Link>
                              </li>
                              <li>
                                <Link href="/solutions">
                                  <div className="icon">
                                    <i className="fa-solid fa-pencil">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-pencil-line-icon lucide-pencil-line"
                                      >
                                        <path d="M13 21h8" />
                                        <path d="m15 5 4 4" />
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                      </svg>
                                    </i>
                                  </div>
                                  Application AI Agents
                                </Link>
                              </li>
                              <li>
                                <Link href="/solutions">
                                  <div className="icon">
                                    <i className="fa-solid fa-pencil">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-pencil-line-icon lucide-pencil-line"
                                      >
                                        <path d="M13 21h8" />
                                        <path d="m15 5 4 4" />
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                      </svg>
                                    </i>
                                  </div>
                                  Survey AI Agents
                                </Link>
                              </li>
                              <li>
                                <Link href="/solutions">
                                  <div className="icon">
                                    <i className="fa-solid fa-pencil">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-pencil-line-icon lucide-pencil-line"
                                      >
                                        <path d="M13 21h8" />
                                        <path d="m15 5 4 4" />
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                      </svg>
                                    </i>
                                  </div>
                                  Feedback AI Agents
                                </Link>
                              </li>
                              <li className="removeIcon noHover">
                                <Link
                                  className="dropdownBtnNew flex justify-center items-center gap-2 text-base font-medium open-modal-btn w_fit"
                                  href="/solutions"
                                >
                                  See All Templates
                                  <i className="fa-solid fa-chevron-right"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Commented section left as-is */}
                      </div>
                    </div>
                  </div>
                </li>

                <li className="cursor-pointer nav-item group">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-sm font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="cursor-pointer nav-item group">
                  <Link
                    href="/about"
                    className="flex items-center gap-2 text-sm font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    About Us
                  </Link>
                </li>
                <li className="cursor-pointer nav-item group">
                  <Link
                    href="/blogs"
                    className="flex items-center gap-2 text-sm font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center justify-end gap-2">
              <a
                href="javascript:void(0);"
                className="buttonAnimation2 inline-block px-4 py-2 text-sm font-medium capitalize transition-all duration-300 border rounded-full btn-border bg-gd-secondary hover:bg-transparent text-w-900 open-modal-btn"
                data-modal-target="#welcomeModal"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
      </header>
      <div
        className={`mobileMenu backdrop-blur-lg ${
          open ? "openMobileMenu" : "hidden"
        }`}
      >
        {/* Header with logo + close button */}
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <Image width={100} height={70} src="/assets/img/kogents-logo.svg" alt="logo" />
          </Link>
          <button onClick={toggleMenu}>
            {!open ? (
              <svg
                width="30"
                height="30"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"
                  fill="#fff"
                />
              </svg>
            ) : (
              <svg
                width={30}
                height={30}
                viewBox="0 0 24 24"
                data-name="Line Color"
                xmlns="http://www.w3.org/2000/svg"
                className="icon line-color"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 19 5 5"
                />
                <path
                  data-name="primary"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 5 5 19"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="mobileMenuItems">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>

            {/* Mobile Dropdown (same logic as desktop) */}
            <li
              className={`dropdownToggle ${
                openDropdown === "platform" ? "open" : ""
              }`}
            >
              <a
                onClick={() => toggleDropdown("platform")}
                className={`dropdownBtn flex items-center gap-2 capitalize transition-all duration-300 text-w-100 ${
                  openDropdown === "platform" ? "open" : ""
                }`}
              >
                Platform
              </a>
              <div
                className={`mobileDropdownUl transition-all overflow-hidden ${
                  openDropdown === "platform" ? "openDropdown" : "max-h-0"
                }`}
                style={{
                  maxHeight: openDropdown === "platform" ? "500px" : "0px",
                }}
              >
                <p className="menuHeading text-light">Channels</p>
                <ul>
                  <li>
                    <Link href="/ai-whatsapp-agent">Whatsapp Agent</Link>
                  </li>
                  <li>
                    <Link href="/ai-whatsapp-agent">Instagram Agent</Link>
                  </li>
                  <li>
                    <Link href="/ai-whatsapp-agent">Messenger Agent</Link>
                  </li>
                  <li>
                    <Link href="/ai-whatsapp-agent">Slack Agent</Link>
                  </li>
                  <li>
                    <Link href="/ai-whatsapp-agent">Shopify Agent</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li
              className={`dropdownToggle ${
                openDropdown === "solutions" ? "open" : ""
              }`}
            >
              <a
                onClick={() => toggleDropdown("solutions")}
                className={`dropdownBtn flex items-center gap-2 capitalize transition-all duration-300 text-w-100 ${
                  openDropdown === "solutions" ? "open" : ""
                }`}
              >
                Solutions
              </a>

              <div
                className={`mobileDropdownUl transition-all overflow-hidden ${
                  openDropdown === "solutions" ? "openDropdown" : "max-h-0"
                }`}
                style={{
                  maxHeight: openDropdown === "solutions" ? "500px" : "0px",
                }}
              >
                <p className="menuHeading text-light">By Industries</p>
                <ul className="p-0">
                  <li>
                    <Link href="/solutions">Healthcare AI Agents</Link>
                  </li>
                  <li>
                    <Link href="/solutions">Customer Service AI Agent</Link>
                  </li>
                  <li>
                    <Link href="/solutions">Education AI Agents</Link>
                  </li>
                </ul>

                <div className="mt-3">
                  <p className="menuHeading text-light">By Profession</p>
                  <ul className="p-0 mobileDropdownUl1">
                    <li>
                      <Link href="/solutions">Managers Agents</Link>
                    </li>
                    <li>
                      <Link href="/solutions">Event Planners Agents</Link>
                    </li>
                    <li>
                      <Link href="/solutions">Marketers Agents</Link>
                    </li>
                    <li>
                      <Link href="/solutions">Teachers Agents</Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-3">
                  <p className="menuHeading text-light">By Type</p>
                  <ul className="p-0 mobileDropdownUl1">
                    <li>
                      <Link href="/solutions">AI Dashboard Templates</Link>
                    </li>
                    <li>
                      <Link href="/solutions">Application AI Agents</Link>
                    </li>
                    <li>
                      <Link href="/solutions">Survey AI Agents</Link>
                    </li>
                    <li>
                      <Link href="/solutions">Feedback AI Agents</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
          </ul>

          <button className="buttonAnimation2 mt-3 text-light">
            Request Demo
          </button>
        </div>
      </div>
    </>
  );
}
