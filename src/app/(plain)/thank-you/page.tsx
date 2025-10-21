import { ArrowRightIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Kogents AI",
  description: "Thank you for your interest in Kogents AI. Choose how you'd like to proceed with our AI solutions.",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return (
    <>
      <div>
        <header className="chatbot_header px-lg-0">
          <div className="container">
            <Link href="/">
              <img width={150} height={50} src="/assets/img/kogents-logo.svg" alt="logo" />
            </Link>
          </div>
        </header>
        <section
          className="py-3 bg-center bg-no-repeat bg-cover newBg desktop-section-show vh-100"
          id="aiAgentSection"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                {/* <span className="buttonAnimation yellow mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo aos-init aos-animate">
              Thank You
            </span> */}
                <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                  How Would You Like To Proceed?
                </h2>
              </div>
            </div>
            <div className="row rowGap justify-content-center mt-5">
              {/* Card 1 */}
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                  <Image
                    src="/assets/img/steps/live_chat.webp"
                    alt="Live Chat"
                    className="rounded-lg"
                    width={800}
                    height={600}
                  />
                  <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                    Live Chat
                  </h3>
                  <p className="text-white">
                    Let's Talk! Share your design requirements with one of our
                    designers to get a perfect logo that you envisioned for
                  </p>
                  <Link
                    href="/"
                    aria-label="KOGENTS - Go to homepage"
                    className="w_fit buttonAnimation2 pink mt-3 d-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
                  >
                    Request Access
                    <ArrowRightIcon style={{ height: 24 }} />
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                  <Image
                    src="/assets/img/steps/about_us.webp"
                    alt="About Us"
                    className="rounded-lg"
                    width={800}
                    height={600}
                  />
                  <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                    About Us
                  </h3>
                  <p className="text-white">
                    Let's Talk! Share your design requirements with one of our
                    designers to get a perfect logo that you envisioned for
                  </p>
                  <Link
                    href="/about"
                    className="w_fit buttonAnimation2 green mt-3 d-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
                  >
                    Request Access
                    <ArrowRightIcon style={{ height: 24 }} />
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                  <Image
                    src="/assets/img/steps/solutions.webp"
                    alt="Solutions"
                    className="rounded-lg"
                    width={800}
                    height={600}
                  />
                  <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">
                    Solutions
                  </h3>
                  <p className="text-white">
                    Let's Talk! Share your design requirements with one of our
                    designers to get a perfect logo that you envisioned for
                  </p>
                  <Link
                    href="/solutions"
                    className="w_fit buttonAnimation2 yellow mt-3 d-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
                  >
                    Request Access
                    <ArrowRightIcon style={{ height: 24 }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
