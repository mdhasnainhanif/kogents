"use client";
import { AiAgentDashboard, ApplicationAiAgents, ChevronIcon, CustomerServiceAiAgent, EducationAiAgents, EventPlannersAgents, FeedbackAiAgents, HealthcareAiAgents, HrAiAgents, Logo, ManagersAgents, MarketersAgents, PencilIcon, SurveyAiAgents, TeachersAgents } from "@/icons";
import { useModalStore } from "@/stores/useModalStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import TopHeader from "./TopHeader";

type MenuItem = {
  title: string;
  href: string;
  icon: string;
};

type MenuSection = {
  heading: string;
  items: MenuItem[];
  className?: string;
  ulClassName?: string;
  liClassName?: string;
  link?: string;
  more?: {
    title: string;
    href: string;
  };
};

const platformMenu: MenuSection[] = [
  {
    heading: "Platforms",
    className: "platforms-section",
    ulClassName: "ulMarginTop",
    link: "platforms",
    liClassName: "",
    items: [
      {
        title: "Whatsapp Agent",
        href: "/platforms/whatsapp-ai-agent",
        icon: "/assets/img/icons/whatsapp.svg",
      },
      {
        title: "Instagram Agent",
        href: "/platforms/instagram-agent-ai",
        icon: "/assets/img/icons/instagram1.svg",
      },
      {
        title: "Messenger Agent",
        href: "/platforms/ai-agent-for-messenger",
        icon: "/assets/img/icons/messenger.svg",
      },
      {
        title: "Slack Agent",
        href: "/platforms/slack-ai-agent",
        icon: "/assets/img/icons/slack.svg",
      },
    ],
  },
  {
    heading: "Platforms",
    className: "platforms-section2",
    ulClassName: "ulMarginTopBorder",
    link: "platforms",
    liClassName: "",
    items: [
      {
        title: "Viber Agent",
        href: "/platforms/viber-ai-agent",
        icon: "/assets/img/icons/viber.svg",
      },
      {
        title: "Microsoft Teams",
        href: "/platforms/microsoft-teams-agents",
        icon: "/assets/img/icons/microsoft.svg",
      },
      {
        title: "Telegram",
        href: "/platforms/ai-telegram-agent",
        icon: "/assets/img/icons/telegram.svg",
      },
      {
        title: "Line",
        href: "/platforms/line-ai-agent",
        icon: "/assets/img/icons/line.svg",
      },
    ],
  },
  {
    heading: "Integrations",
    link: "platforms",
    items: [
      {
        title: "HubSpot",
        href: "/platforms/hubspot-ai-integration",
        icon: "/assets/img/icons/hubspot.svg",
      },
      {
        title: "Zendesk",
        href: "/platforms/zendesk-ai-integration",
        icon: "/assets/img/icons/zdesk-icon2.webp",
      },
      {
        title: "Jira",
        href: "/platforms/jira-ai-integration",
        icon: "/assets/img/icons/jira.svg",
      },
      {
        title: "Calendly",
        href: "/platforms/calendly-ai-integration",
        icon: "/assets/img/icons/calendly.png",
      },
    ],
  },
];

const solutionsMenu = {
  industries: [
    { title: "Healthcare AI Agents", class: "redIcon", href: "/solutions/healthcare-ai-agent", icon: <HealthcareAiAgents /> },
    { title: "Customer Service AI Agent", href: "/solutions/customer-service-ai-agent", icon: <CustomerServiceAiAgent /> },
    { title: "Education AI Agents", href: "/solutions/ai-agent-for-education", icon: <EducationAiAgents /> },
    { title: "HR AI Agents", href: "/solutions/ai-agent-for-hr", icon: <HrAiAgents /> },
  ],
  professions: [
    { title: "Event Planners Agents", href: "/solutions/ai-agent-event-planner", icon: <EventPlannersAgents /> },
    { title: "Marketers Agents", href: "/solutions/ai-agent-for-marketing", icon: <MarketersAgents /> },
    { title: "Teachers Agents", href: "/solutions/ai-teacher-assistant", icon: <TeachersAgents /> },
  ],
  types: [
    { title: "AI Agent Dashboard", href: "/solutions/ai-agent-dashboard", icon: <AiAgentDashboard /> },
    { title: "Survey AI Agents", href: "/solutions/survey-ai-agent", icon: <SurveyAiAgents /> },
  ],
};
export default function HeaderV2() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);
  const toggleDropdown = useCallback((menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const openModal = useModalStore((state) => state.openModal);

  return (
    <>
      <TopHeader />
      <header className="absolute top-0 left-0 right-0 z-[9999] border-b border-w-900 border-opacity-[8%] bg-opacity-5 backdrop-blur-lg bg-w-900 sticky-header">
        <div className="container px-5 mx-auto xl:px-0 headerContainer">
          <div className="items-center justify-between hidden md:flex">
            <Link
              href="/"
              className="flex items-center justify-start gap-2"
              aria-label="KOGENTS - Go to homepage"
            >

              <Image
                src="/assets/img/kogents-logo.svg"
                alt="Kogents Agentic AI Automation"
                width={150}
                height={50}
                priority
                style={{ width: '150px', height: '50px' }}
              />


            </Link>
            <nav>
              <ul className="flex items-center justify-center md:gap-4 lg:gap-8 relative">
                <li className="group nav-item">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-sm font-semibold capitalize transition-all duration-300 text-w-100"
                    aria-label="KOGENTS - Go to homepage"
                  >
                    Home
                  </Link>
                </li>
                <li className="cursor-pointer group nav-item customDropdown">
                  <Link
                    href="/platforms"
                    className="flex items-center gap-2 text-sm font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Platforms
                    <ChevronIcon />
                  </Link>
                  <div className="megaMenuDropdown platform">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="dropdownImgMain">
                          <Image
                            width={500}
                            height={500}
                            className="w-100"
                            src="/assets/img/platform.webp"
                            alt="Platform overview"
                            priority
                            style={{ aspectRatio: "1.00" }}
                          />
                        </div>
                      </div>
                      <div className="ps-4 d-flex flex-wrap gap4rem">
                        {platformMenu.map((section, idx) => (
                          <div key={idx}>
                            <p className={`menuHeading ${section.className || ""}`}>
                              {section.heading}
                            </p>

                            <ul className={`p-0 pe-5 ${section.ulClassName || ""}`}>
                              {section.items.map((item, i) => (
                                <li key={i} className="removeIcon">
                                  <Link href={item.href}>
                                    <Image
                                      width={50}
                                      height={50}
                                      src={item.icon}
                                      alt={item.title}
                                    />
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                              {section.more && (
                                <li className="removeIcon ms-4">
                                  <Link
                                    className="dropdownBtnNew flex justify-center items-center gap-2 text-base font-medium open-modal-btn w_fit"
                                    href={section.more.href}
                                  >
                                    {section.more.title}
                                    <i className="fa-solid fa-chevron-right"></i>
                                  </Link>
                                </li>
                              )}
                              <li className={`removeIcon noHover ${section.liClassName || ""}`}>
                                <Link
                                  className="dropdownBtnNew flex justify-center items-center gap-2 text-base font-medium open-modal-btn w_fit"
                                  href={`/${section.link}?filter=${section.heading.toLowerCase()}`}
                                >
                                  See All
                                  <i className="fa-solid fa-chevron-right"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer group nav-item customDropdown">
                  <a
                    href="/solutions"
                    className="flex items-center gap-2 text-sm font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Solutions
                    <ChevronIcon />
                  </a>
                  <div className="megaMenuDropdown megaMenuDropdownTwo">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="dropdownImgMain">
                          <Image
                            width={500}
                            height={500}
                            className="w-100"
                            src="/assets/img/solutions.webp"
                            alt="Solutions overview"
                            priority
                            style={{ aspectRatio: "1.00" }}
                          />
                        </div>
                      </div>
                      <div className="ps-4 d-flex flex-wrap gap4rem">
                        <div>
                          <p className="menuHeading">By Industries</p>
                          <ul className="">
                            {solutionsMenu.industries.map((industry, idx) => (
                              <li key={idx}>
                                <Link href={industry.href}>
                                  <div className="icon">
                                    <i className="">
                                      {industry?.icon}
                                    </i>
                                  </div>
                                  {industry.title}
                                </Link>
                              </li>
                            ))}
                            <li className="removeIcon noHover">
                              <Link
                                className="dropdownBtnNew flex justify-center items-center gap-2 text-base font-medium open-modal-btn w_fit"
                                href="/solutions?filter=industries"
                              >
                                See All
                                <i className="fa-solid fa-chevron-right"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <span className="hearderBorderRight"></span>
                        <div>
                          <p className="menuHeading">By Profession</p>
                          <ul className="">
                            {solutionsMenu.professions.map(
                              (profession, idx) => (
                                <li key={idx}>
                                  <Link href={profession.href}>
                                    <div className="icon">
                                      <i>
                                        {profession?.icon}
                                      </i>
                                    </div>
                                    {profession.title}
                                  </Link>
                                </li>
                              )
                            )}
                            <li className="removeIcon noHover">
                              <Link
                                className="dropdownBtnNew flex justify-center items-center gap-2 text-base font-medium open-modal-btn w_fit"
                                href="/solutions?filter=profession"
                              >
                                See All
                                <i className="fa-solid fa-chevron-right"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <span className="hearderBorderRight"></span>
                        <div>
                          <p className="menuHeading">By Type</p>
                          <ul>
                            {solutionsMenu.types.map((type, idx) => (
                              <li key={idx}>
                                <Link href={type.href}>
                                  <div className="icon">
                                    <i>
                                      {type?.icon}
                                    </i>
                                  </div>
                                  {type.title}
                                </Link>
                              </li>
                            ))}
                            <li className="removeIcon noHover">
                              <Link
                                className="dropdownBtnNew flex justify-center items-center gap-2 text-base font-medium open-modal-btn w_fit"
                                href="/solutions?filter=type"
                              >
                                See All
                                <i className="fa-solid fa-chevron-right"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer nav-item group">
                  <Link
                    href="/contact-us"
                    className="flex items-center gap-2 text-sm font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="cursor-pointer nav-item group">
                  <Link
                    href="/about-us"
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
            <div className="flex items-center justify-end gap-2">\
              <Link href="/chatbot/briefv2">
              <button
                type="button"
                className="buttonAnimation2 inline-block px-4 py-2 text-sm font-medium capitalize transition-all duration-300 border rounded-full btn-border bg-gd-secondary hover:bg-transparent text-w-900 open-modal-btn"
              >
                Request Demo
              </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`mobileMenu backdrop-blur-lg ${open ? "openMobileMenu" : "hidden"
          }`}
      >
        <div className="w-full flex items-center justify-between">
          <Link href="/" aria-label="KOGENTS - Go to homepage">
            <Logo style={{ width: 120, height: 30 }} />
          </Link>
          <button onClick={toggleMenu} aria-label="Toggle menu">
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
              <Link href="/" aria-label="KOGENTS - Go to homepage">Home</Link>
            </li>

            <li
              className={`dropdownToggle ${openDropdown === "platform" ? "open" : ""}`}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("platform")}
                className={`dropdownBtn flex items-center gap-2 capitalize transition-all duration-300 text-w-100 ${openDropdown === "platform" ? "open" : ""}`}
              >
                Platforms
              </button>

              <div
                className={`mobileDropdownUl transition-all overflow-hidden ${openDropdown === "platform" ? "openDropdown" : "max-h-0"}`}
                style={{
                  maxHeight: openDropdown === "platform" ? "1000px" : "0px",
                }}
              >
                {platformMenu.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="mt-3">
                    <p className="menuHeading text-light">{section.heading}</p>
                    <ul className="p-0 mobileDropdownUl1">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link href={item.href} className="flex items-center gap-2">
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>


            <li
              className={`dropdownToggle ${openDropdown === "solutions" ? "open" : ""
                }`}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("solutions")}
                className={`dropdownBtn flex items-center gap-2 capitalize transition-all duration-300 text-w-100 ${openDropdown === "solutions" ? "open" : ""
                  }`}
              >
                Solutions
              </button>

              <div
                className={`mobileDropdownUl transition-all overflow-hidden ${openDropdown === "solutions" ? "openDropdown" : "max-h-0"
                  }`}
                style={{
                  maxHeight: openDropdown === "solutions" ? "500px" : "0px",
                }}
              >
                <p className="menuHeading text-light">By Industries</p>
                <ul className="p-0">
                  {solutionsMenu.industries.map((industry, idx) => (
                    <li key={idx}>
                      <Link href={industry.href}>{industry.title}</Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-3">
                  <p className="menuHeading text-light">By Profession</p>
                  <ul className="p-0 mobileDropdownUl1">
                    {solutionsMenu.professions.map((profession, idx) => (
                      <li key={idx}>
                        <Link href={profession.href}>{profession.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3">
                  <p className="menuHeading text-light">By Type</p>
                  <ul className="p-0 mobileDropdownUl1">
                    {solutionsMenu.types.map((type, idx) => (
                      <li key={idx}>
                        <Link href={type.href}>{type.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
          </ul>

          <button
            type="button"
            className="buttonAnimation2 mt-3 text-light"
            onClick={openModal}
          >
            Request Demo
          </button>
        </div>
      </div>
    </>
  );
}

