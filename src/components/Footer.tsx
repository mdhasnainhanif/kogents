import { Logo } from "@/icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-5 bg-center bg_footer bg-no-repeat bg-cover">
      <div className="container px-5 mx-auto xl:px-0">
        <div className="row">
          <div className="col">
            <div>
              <div className="text-center">
                <Logo
                  style={{
                    width: "220px",
                    height: "52px",
                    display: "inline-block",
                  }}
                />
              </div>
              <ul className="d-flex flex-wrap gap-5 align-items-center justify-content-center mt-4 footerUl">
                <li className="relative group">
                  <a
                    href="#"
                    className="inline-block font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                  >
                    home
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#aiAgentSection"
                    className="inline-block font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                  >
                    Ai Agents
                  </a>
                </li>
                <li className="cursor-pointer nav-item group integrationDropdownLi">
                  <a
                    href="/case-studies"
                    className="flex items-center gap-2 font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Case Studies
                  </a>
                </li>
                <li className="cursor-pointer group nav-item solutionDropdownLi">
                  <a
                    href="#benefitsSection"
                    className="flex items-center gap-2 font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Benefits
                  </a>
                </li>
                <li className="cursor-pointer nav-item group">
                  <a
                    href="#aiTemplateSection"
                    className="flex items-center gap-2 font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Ai Template
                  </a>
                </li>
                <li className="cursor-pointer nav-item group">
                  <a
                    href="#blogSection"
                    className="flex items-center gap-2 font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Blogs
                  </a>
                </li>
                <li className="cursor-pointer nav-item group">
                  <a
                    href="#faqSection"
                    className="flex items-center gap-2 font-semibold capitalize transition-all duration-300 text-w-100"
                  >
                    Faq
                  </a>
                </li>
              </ul>

              <div className="d-flex gap-2 align-items-center justify-content-center mt-4">
                <Image
                  width={160}
                  height={100}
                  src="/assets/img/app-section/6.png"
                  alt="icon"
                />
                <Image
                  height={100}
                  width={160}
                  src="/assets/img/app-section/7.png"
                  alt="icon"
                />
              </div>

              <ul className="d-flex align-items-center gap-3 justify-content-center mt-4">
                <li className="text-sm transition-all duration-300 text-w-100">
                  <Link className="text-light" href="/privacy-statement">
                    Privacy Policy
                  </Link>
                </li>
                <li className="text-sm transition-all duration-300 text-w-100">
                  <Link className="text-light" href="terms-and-condition">
                    Terms of Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
