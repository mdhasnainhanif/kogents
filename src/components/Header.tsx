"use client";
import { AiAgentDashboard, ApplicationAiAgents, ChevronIcon, CustomerServiceAiAgent, EducationAiAgents, EventPlannersAgents, FeedbackAiAgents, HealthcareAiAgents, HrAiAgents, Logo, ManagersAgents, MarketersAgents, PencilIcon, SurveyAiAgents, TeachersAgents } from "@/icons";
import { useModalStore } from "@/stores/useModalStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

// Define types
type MenuItem = {
  title: string;
  href: string;
  icon: string;
};

type MenuSection = {
  heading: string;
  items: MenuItem[];
  more?: {
    title: string;
    href: string;
  };
};

const platformMenu: MenuSection[] = [
  {
    heading: "Platfarms",
    items: [
      {
        title: "Whatsapp Agent",
        href: "/platform/whatsapp-agent",
        icon: "/assets/img/icons/whatsapp.svg",
      },
      {
        title: "Instagram Agent",
        href: "/platform/instagram-agent",
        icon: "/assets/img/icons/instagram1.svg",
      },
      {
        title: "Messenger Agent",
        href: "/platform/messenger-agent",
        icon: "/assets/img/icons/messenger.svg",
      },
      {
        title: "Slack Agent",
        href: "/platform/ai-slack-agent",
        icon: "/assets/img/icons/slack.svg",
      },
    ],
    // more: { title: "See All Channels", href: "/platfarms" },
  },
  {
    heading: "Platfarms",
    items: [
      {
        title: "Viber Agent",
        href: "/platform/ai-viber-agent",
        icon: "/assets/img/icons/viber.svg",
      },
      {
        title: "Microsoft Teams",
        href: "/platform/microsoft-teams-ai-agents",
        icon: "/assets/img/icons/microsoft.svg",
      },
      {
        title: "Telegram",
        href: "/platform/ai-telegram-agent",
        icon: "/assets/img/icons/telegram.svg",
      },
      {
        title: "Line",
        href: "/platform/ai-line-agent",
        icon: "/assets/img/icons/line.svg",
      },
    ],
    // more: { title: "See All Channels", href: "/platfarms" },
  },
  {
    heading: "Integrations",
    items: [
      {
        title: "HubSpot",
        href: "/platform/hubspot",
        icon: "/assets/img/icons/hubspot.svg",
      },
      {
        title: "Zendesk",
        href: "/platform/zendesk",
        icon: "/assets/img/icons/zdesk-icon2.webp",
      },
      {
        title: "Jira",
        href: "/platform/jira",
        icon: "/assets/img/icons/jira.svg",
      },
      {
        title: "Calendly",
        href: "/platform/calendly",
        icon: "/assets/img/icons/calendly.png",
      },
    ],
    // more: { title: "See All Integrations", href: "/platfarms" },
  },
  // {
  //   heading: "LLM Providers",
  //   items: [
  //     { title: "OpenAI", href: "/platform/openai", icon: "/assets/img/icons/openai.png" },
  //     { title: "Anthropic", href: "/platform/anthropic", icon: "/assets/img/icons/anthropic.png" },
  //     { title: "Groq", href: "/platform/groq", icon: "/assets/img/icons/groq.png" },
  //     { title: "Hugging Face", href: "/platform/hugging-face", icon: "/assets/img/icons/hugging-face.svg" },
  //   ],
  //   more: { title: "See All LLMs", href: "/platfarms" },
  // },
];

const solutionsMenu = {
  industries: [
    { title: "Healthcare AI Agents", class: "redIcon", href: "/solutions/healthcare-ai-agent", icon: <HealthcareAiAgents /> },
    { title: "Customer Service AI Agent", href: "/solutions/customer-service-ai-agents", icon: <CustomerServiceAiAgent /> },
    { title: "Education AI Agents", href: "/solutions/ai-agent-for-education", icon: <EducationAiAgents /> },
    { title: "HR AI Agents", href: "/solutions/ai-agent-for-hr", icon: <HrAiAgents /> },
  ],
  professions: [
    { title: "Managers Agents", href: "/solutions/ai-agent-event-planner", icon: <ManagersAgents /> },
    { title: "Event Planners Agents", href: "/solutions/ai-agent-event-planner", icon: <EventPlannersAgents /> },
    { title: "Marketers Agents", href: "/solutions/ai-agent-for-marketing", icon: <MarketersAgents /> },
    { title: "Teachers Agents", href: "/solutions/ai-teacher-assistant", icon: <TeachersAgents /> },
  ],
  types: [
    { title: "AI Agent Dashboard", href: "/solutions/ai-agent-dashboard", icon: <AiAgentDashboard /> },
    { title: "Application AI Agents", href: "/solutions/application-agents", icon: <ApplicationAiAgents /> },
    { title: "Survey AI Agents", href: "/solutions/survey-ai-agent", icon: <SurveyAiAgents /> },
    { title: "Feedback AI Agents", href: "/solutions/feedback-agents", icon: <FeedbackAiAgents /> },
  ],
};
// const solutionsMenu = {
//   industries: [
//     { title: "Healthcare AI Agents", href: "/solutions/healthcare-ai-agent", icon: "/assets/img/dropdwon_linear_icons/healthcare-ai-agents.svg" },
//     { title: "Customer Service AI Agent", href: "/solutions/customer-service-ai-agents", icon: "/assets/img/dropdwon_linear_icons/customer-service-ai-agent.svg" },
//     { title: "Education AI Agents", href: "/solutions/ai-agent-for-education", icon: "/assets/img/dropdwon_linear_icons/education-ai-agents.svg" },
//     { title: "HR AI Agents", href: "/solutions/ai-agent-for-hr", icon: "/assets/img/dropdwon_linear_icons/hr-ai-agents.svg" },
//   ],
//   professions: [
//     { title: "Managers Agents", href: "/solutions/managers", icon: "/assets/img/dropdwon_linear_icons/managers-agents.svg" },
//     { title: "Event Planners Agents", href: "/solutions/ai-agent-event-planner", icon: "/assets/img/dropdwon_linear_icons/event-planners-agents.svg" },
//     { title: "Marketers Agents", href: "/solutions/ai-agent-for-marketing", icon: "/assets/img/dropdwon_linear_icons/marketers-agents.svg" },
//     { title: "Teachers Agents", href: "/solutions/ai-teacher-assistant", icon: "/assets/img/dropdwon_linear_icons/teachers-agents.svg" },
//   ],
//   types: [
//     { title: "AI Agent Dashboard", href: "/solutions/ai-agent-dashboard", icon: "/assets/img/dropdwon_linear_icons/ai-agent-dashboard.svg" },
//     { title: "Application AI Agents", href: "/solutions/application-agents", icon: "/assets/img/dropdwon_linear_icons/application-ai-agents.svg" },
//     { title: "Survey AI Agents", href: "/solutions/survey-ai-agent", icon: "/assets/img/dropdwon_linear_icons/survey-ai-agents.svg" },
//     { title: "Feedback AI Agents", href: "/solutions/feedback-agents", icon: "/assets/img/dropdwon_linear_icons/feedback-ai-agents.svg" },
//   ],
// };

export default function Header() {
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
      <header className="absolute top-0 left-0 right-0 z-[9999] border-b border-w-900 border-opacity-[8%] bg-opacity-5 backdrop-blur-lg bg-w-900 sticky-header">
        <div className="container px-5 mx-auto xl:px-0 headerContainer">
          <div className="items-center justify-between hidden md:flex">
            <Link
              href="/"
              className="flex items-center justify-start gap-2"
              aria-label="KOGENTS - Go to homepage"
            >
              <Logo style={{ width: 150, height: 50 }} />
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
                    href="/platfarms"
                    className="flex items-center gap-2 text-sm font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Platform
                    <ChevronIcon />
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
                            alt="Platform overview"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="ps-4 d-flex flex-wrap gap4rem">
                        {platformMenu.map((section, idx) => (
                          <div key={idx}>
                            <p className="menuHeading">{section.heading}</p>
                            <ul className="p-0 pe-4">
                              {section.items.map((item, i) => (
                                <li key={i} className="removeIcon">
                                  <Link href={item.href}>
                                    <Image
                                      width={50}
                                      height={50}
                                      src={item.icon}
                                      alt={item.title}
                                      loading="lazy"
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
                            </ul>
                          </div>
                        ))}
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
                    <ChevronIcon />
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
                            alt="Solutions overview"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="ps-4 d-flex flex-wrap gap4rem">
                        <div>
                          <p className="menuHeading">By Industries</p>
                          <ul>
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
                                href="/solutions"
                              >
                                See All Templates
                                <i className="fa-solid fa-chevron-right"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="menuHeading">By Profession</p>
                          <ul>
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
                                href="/solutions"
                              >
                                See All Templates
                                <i className="fa-solid fa-chevron-right"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
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
                                href="/solutions"
                              >
                                See All Templates
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
              <button
                type="button"
                className="buttonAnimation2 inline-block px-4 py-2 text-sm font-medium capitalize transition-all duration-300 border rounded-full btn-border bg-gd-secondary hover:bg-transparent text-w-900 open-modal-btn"
                onClick={openModal}
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
      </header>
      <div
        className={`mobileMenu backdrop-blur-lg ${open ? "openMobileMenu" : "hidden"
          }`}
      >
        <div className="w-full flex items-center justify-between">
          <Link href="/" aria-label="KOGENTS - Go to homepage">
            <Logo style={{ width: 100, height: 25 }} />
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
              className={`dropdownToggle ${openDropdown === "platform" ? "open" : ""
                }`}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("platform")}
                className={`dropdownBtn flex items-center gap-2 capitalize transition-all duration-300 text-w-100 ${openDropdown === "platform" ? "open" : ""
                  }`}
              >
                Platform
              </button>

              <div
                className={`mobileDropdownUl transition-all overflow-hidden ${openDropdown === "platform" ? "openDropdown" : "max-h-0"
                  }`}
                style={{
                  maxHeight: openDropdown === "platform" ? "1000px" : "0px",
                }}
              >
                {platformMenu.map((section, sectionIdx) => (
                  <div key={sectionIdx}>
                    <p
                      className="menuHeading text-light mb-0"
                      style={{ fontSize: 14 }}
                    >
                      {section.heading}
                    </p>
                    <ul>
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            href={item.href}
                            className="flex items-center gap-2"
                          >
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
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
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
