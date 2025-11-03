"use client";

import Image from "next/image";
import { BrowserView, MobileView } from "react-device-detect";

export default function WorkflowsSection() {
  return (
    <section className="sectionPadding bg-center bg-no-repeat bg-cover">
      <div className="container paddingOnMobile">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <span className="buttonAnimation yellow mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
              Workflow
            </span>
            <h2 className=" text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
              Workflows That Talk to Each Other
            </h2>
            <p className="maxWidth39 mb-16 text-center paraColor subHeading mx-auto">
              Kogents doesn’t stop at handling support. It learns from patterns, flags recurring friction, and keeps your FAQs alive without you touching a doc.
            </p>
          </div>
        </div>
        <div
          className="row justify-content-center animationSectionMain rowGap mt-5"
          style={{ zIndex: 3 }}
        >
          <div className="col-lg-11 d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                {/* <BrowserView> */}
                  <div
                    className="hideOn768 d-flex flex-column align-items-end position-relative marginZeroMobile wfullMobile"
                    style={{ marginRight: "32px" }}
                  >
                    <div className="googleFeatureBtn">
                      <div>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 shrink-0 lg:mr-2"
                          aria-hidden="true"
                        >
                          <path
                            d="M10.9941 3.29308L7.70808 2.92798L3.69183 3.29308L3.32666 6.94423L3.69176 10.5954L7.34291 11.0518L10.9941 10.5954L11.3592 6.853L10.9941 3.29308Z"
                            fill="white"
                          ></path>
                          <path
                            d="M5.19003 8.95693C4.91712 8.77254 4.72815 8.50331 4.625 8.1473L5.2585 7.88625C5.31601 8.10533 5.41639 8.27508 5.55971 8.39558C5.70213 8.51608 5.87555 8.57539 6.07819 8.57539C6.2854 8.57539 6.46341 8.5124 6.61214 8.38642C6.76087 8.26044 6.83579 8.09978 6.83579 7.9054C6.83579 7.70644 6.75726 7.54391 6.60028 7.418C6.44329 7.29209 6.24614 7.22903 6.01062 7.22903H5.64462V6.60198H5.97316C6.17579 6.60198 6.34652 6.54725 6.48526 6.43771C6.624 6.32818 6.69337 6.17847 6.69337 5.9877C6.69337 5.81795 6.63128 5.68282 6.50718 5.58153C6.38307 5.48025 6.22602 5.42913 6.03525 5.42913C5.84905 5.42913 5.70116 5.47845 5.59162 5.57793C5.48208 5.67741 5.40265 5.79971 5.3525 5.94393L4.72545 5.68289C4.80849 5.44737 4.96096 5.23926 5.18455 5.05945C5.4082 4.87964 5.69387 4.78925 6.04073 4.78925C6.29719 4.78925 6.52813 4.83857 6.73264 4.93805C6.93707 5.03753 7.09774 5.17537 7.21366 5.3506C7.32958 5.52673 7.38708 5.72395 7.38708 5.94296C7.38708 6.16661 7.33325 6.35551 7.22552 6.51069C7.11779 6.66588 6.98542 6.7845 6.82844 6.86761V6.905C7.03565 6.99171 7.2045 7.12407 7.33776 7.30208C7.47012 7.48009 7.53672 7.69278 7.53672 7.94106C7.53672 8.18934 7.47373 8.41112 7.34775 8.60556C7.22177 8.80001 7.04744 8.95332 6.82657 9.06466C6.60479 9.176 6.3556 9.23261 6.07902 9.23261C5.75866 9.23351 5.46293 9.14132 5.19003 8.95693Z"
                            fill="#1A73E8"
                          ></path>
                          <path
                            d="M9.07726 5.81344L8.38536 6.31638L8.0376 5.78882L9.28538 4.88879H9.76369V9.1341H9.07726V5.81344Z"
                            fill="#1A73E8"
                          ></path>
                          <path
                            d="M10.9944 13.8809L14.2803 10.5949L12.6373 9.86469L10.9944 10.5949L10.2642 12.2379L10.9944 13.8809Z"
                            fill="#EA4335"
                          ></path>
                          <path
                            d="M2.96094 12.2375L3.69114 13.8805H10.9934V10.5945H3.69114L2.96094 12.2375Z"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M1.50106 0.00622559C0.895939 0.00622559 0.405762 0.496403 0.405762 1.10153V10.5944L2.04875 11.3246L3.69174 10.5944V3.2922H10.994L11.7242 1.64921L10.994 0.00622559H1.50106Z"
                            fill="#4285F4"
                          ></path>
                          <path
                            d="M0.405762 10.5945V12.7852C0.405762 13.3904 0.895939 13.8805 1.50106 13.8805H3.69174V10.5945H0.405762Z"
                            fill="#188038"
                          ></path>
                          <path
                            d="M10.9941 3.29282V10.595H14.2801V3.29282L12.6371 2.56262L10.9941 3.29282Z"
                            fill="#FBBC04"
                          ></path>
                          <path
                            d="M14.2801 3.2922V1.10153C14.2801 0.496333 13.7899 0.00622559 13.1848 0.00622559H10.9941V3.2922H14.2801Z"
                            fill="#1967D2"
                          ></path>
                        </svg>
                        Google Calendar
                      </div>
                      <p>
                        Keeps your schedule organized and updates appointments
                        with smart precision.
                      </p>
                    </div>
                    <div
                      id="syncLineRight2"
                      className="sync-line-right2 d-none d-md-block relative z-20 inline-flex h-12 w-6 overflow-hidden [mask-image:url('/images/gif2.gif')] [mask-size:cover] sm:w-10 md:h-14 lg:w-24"
                    >
                      <div>
                        <svg
                          width="400"
                          height="9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <radialGradient id="b" cx=".5" cy=".5" r=".5">
                              <stop
                                offset="0%"
                                stopColor="#fff"
                                stopOpacity=".7"
                              ></stop>
                              <stop
                                offset="100%"
                                stopColor="#fff"
                                stopOpacity="0"
                              ></stop>
                            </radialGradient>
                            <linearGradient
                              id="a"
                              x1="0"
                              y1="10"
                              x2="300"
                              y2="10"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0%" stopColor="#332f4b"></stop>
                              <stop
                                offset="100%"
                                stopColor="#6d63a7"
                                stopOpacity=".2"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <path
                            stroke="url(#a)"
                            strokeWidth="4"
                            d="M0 10h300"
                          ></path>
                          <circle r="5" cy="10" fill="url(#b)">
                            <animate
                              attributeName="cx"
                              from="-10"
                              to="310"
                              dur="2s"
                              repeatCount="indefinite"
                            ></animate>
                          </circle>
                        </svg>
                      </div>
                    </div>
                    <div className="googleFeatureBtn ml-auto">
                      <div>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 17 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 shrink-0 lg:mr-2"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.12564 11.9264L2.81047 13.1093C2.95277 13.3583 3.15733 13.554 3.39746 13.6963L5.84326 9.46283H0.95166C0.95166 9.73854 1.02281 10.0142 1.16511 10.2633L2.12564 11.9264Z"
                            fill="#0066DA"
                          ></path>
                          <path
                            d="M8.71597 4.48261L6.27017 0.249146C6.03003 0.391447 5.82548 0.587111 5.68317 0.836138L1.16511 8.6627C1.02543 8.90636 0.951846 9.18229 0.95166 9.46315H5.84326L8.71597 4.48261Z"
                            fill="#00AC47"
                          ></path>
                          <path
                            d="M14.0336 13.6967C14.2737 13.5544 14.4783 13.3587 14.6206 13.1097L14.9052 12.6205L16.2659 10.2636C16.4082 10.0146 16.4794 9.7389 16.4794 9.4632H11.5874L12.6283 11.5088L14.0336 13.6967Z"
                            fill="#EA4335"
                          ></path>
                          <path
                            d="M8.71533 4.4825L11.1611 0.249035C10.921 0.106734 10.6453 0.0355835 10.3607 0.0355835H7.06998C6.78537 0.0355835 6.50966 0.115628 6.26953 0.249035L8.71533 4.4825Z"
                            fill="#00832D"
                          ></path>
                          <path
                            d="M11.5887 9.46283H5.84326L3.39746 13.6963C3.63759 13.8386 3.9133 13.9097 4.19791 13.9097H13.234C13.5186 13.9097 13.7943 13.8297 14.0345 13.6963L11.5887 9.46283Z"
                            fill="#2684FC"
                          ></path>
                          <path
                            d="M14.0072 4.74942L11.7481 0.836138C11.6058 0.587111 11.4013 0.391447 11.1611 0.249146L8.71533 4.48261L11.588 9.46315H16.4707C16.4707 9.18744 16.3996 8.91173 16.2573 8.6627L14.0072 4.74942Z"
                            fill="#FFBA00"
                          ></path>
                        </svg>
                        Google Drive
                      </div>
                      <p>
                        Sorts, syncs, and surfaces your files using smart
                        tagging and instant recall.
                      </p>
                    </div>
                    <div
                      id="syncLineRight"
                      className="sync-line-right d-none d-md-block relative z-20 inline-flex h-12 w-6 overflow-hidden [mask-image:url('/images/gif2.gif')] [mask-size:cover] sm:w-10 md:h-14 lg:w-24"
                    >
                      <div>
                        <svg
                          width="400"
                          height="9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <radialGradient id="b" cx=".5" cy=".5" r=".5">
                              <stop
                                offset="0%"
                                stopColor="#fff"
                                stopOpacity=".7"
                              ></stop>
                              <stop
                                offset="100%"
                                stopColor="#fff"
                                stopOpacity="0"
                              ></stop>
                            </radialGradient>
                            <linearGradient
                              id="a"
                              x1="0"
                              y1="10"
                              x2="300"
                              y2="10"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0%" stopColor="#332f4b"></stop>
                              <stop
                                offset="100%"
                                stopColor="#6d63a7"
                                stopOpacity=".2"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <path
                            stroke="url(#a)"
                            strokeWidth="4"
                            d="M0 10h300"
                          ></path>
                          <circle r="5" cy="10" fill="url(#b)">
                            <animate
                              attributeName="cx"
                              from="-10"
                              to="310"
                              dur="2s"
                              repeatCount="indefinite"
                            ></animate>
                          </circle>
                        </svg>
                      </div>
                    </div>
                  </div>
                {/* </BrowserView> */}
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <div>
                  <div className="d-flex gap-3 justify-content-center position-relative flexColumnOnIpad">
                    <BrowserView>
                      <div
                        className="newLineAnimation"
                        style={{
                          position: "absolute",
                          zIndex: -1,
                          bottom: "-48px",
                          left: "0px",
                          transform: "rotate(90deg)",
                        }}
                      >
                        <svg
                          width="141"
                          height="3"
                          viewBox="0 0 141 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:block max-w-[100%]"
                        >
                          <line
                            x1="0.608887"
                            y1="1.66377"
                            x2="140.319"
                            y2="1.66377"
                            stroke="url(#animatedGradient)"
                            strokeWidth="2"
                            strokeDasharray="7 3"
                          ></line>
                          <defs>
                            <linearGradient
                              id="animatedGradient"
                              x1="1.3296"
                              y1="9.38818"
                              x2="139.032"
                              y2="12.3073"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#332f4b"></stop>
                              <stop
                                offset="1"
                                stopColor="#6d63a7"
                                stopOpacity="0.14"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <animate
                            attributeName="stroke-dashoffset"
                            to="-30"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animate>
                        </svg>
                      </div>
                    </BrowserView>
                    <MobileView>
                      <div
                        className="newLineAnimation"
                        style={{
                          position: "absolute",
                          zIndex: -1,
                          bottom: "-48px",
                          left: "0px",
                          transform: "rotate(90deg)",
                        }}
                      >
                        <svg
                          width="141"
                          height="3"
                          viewBox="0 0 141 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:block max-w-[100%]"
                        >
                          <line
                            x1="0.608887"
                            y1="1.66377"
                            x2="140.319"
                            y2="1.66377"
                            stroke="url(#animatedGradient)"
                            strokeWidth="2"
                            strokeDasharray="7 3"
                          ></line>
                          <defs>
                            <linearGradient
                              id="animatedGradient"
                              x1="1.3296"
                              y1="9.38818"
                              x2="139.032"
                              y2="12.3073"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#332f4b"></stop>
                              <stop
                                offset="1"
                                stopColor="#6d63a7"
                                stopOpacity="0.14"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </MobileView>
                    <div className="googleFeatureBtn">
                      <div>
                        <svg
                          width="25"
                          height="25"
                          xmlns="http://www.w3.org/2000/svg"
                          data-name="Layer 1"
                          viewBox="0 0 32 32"
                          id="gmail"
                          className="size-4 shrink-0 lg:mr-2"
                          aria-hidden="true"
                        >
                          <path
                            fill="#ea4435"
                            d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
                          ></path>
                          <path
                            fill="#00ac47"
                            d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
                            transform="rotate(180 26.5 16)"
                          ></path>
                          <path
                            fill="#ffba00"
                            d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"
                          ></path>
                          <path
                            fill="#4285f4"
                            d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
                          ></path>
                          <path
                            fill="#c52528"
                            d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"
                          ></path>
                        </svg>
                        Gmail
                      </div>
                      <p>
                        Drafts, replies, and declutters your inbox with
                        Al-powered message control.
                      </p>
                    </div>
                    <div className="sync-line-down relative z-20 inline-flex h-6 w-10 overflow-hidden [mask-image:url('https://www.cognosys.ai/images/features/top-lines.png')] [mask-size:contain] sm:h-10 md:w-14 lg:h-16 lg:w-24">
                      <div>
                        <svg
                          width="7"
                          height="300"
                          viewBox="0 0 20 300"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <radialGradient id="b" cx=".5" cy=".5" r=".5">
                              <stop
                                offset="0%"
                                stopColor="#fff"
                                stopOpacity=".7"
                              />
                              <stop
                                offset="100%"
                                stopColor="#fff"
                                stopOpacity="0"
                              />
                            </radialGradient>
                            <linearGradient
                              id="a"
                              x1="10"
                              y1="0"
                              x2="10"
                              y2="300"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0%" stopColor="#332f4b" />
                              <stop
                                offset="100%"
                                stopColor="#6d63a7"
                                stopOpacity=".2"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            stroke="url(#a)"
                            strokeWidth="4"
                            d="M10 0v450"
                          />
                          <circle r="8" cx="10" fill="url(#b)">
                            <animate
                              attributeName="cy"
                              from="-10"
                              to="310"
                              dur="1.5s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </svg>
                      </div>
                    </div>

                    <div className="googleFeatureBtn ml-auto">
                      <div>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 shrink-0 lg:mr-2"
                          aria-hidden="true"
                        >
                          <path
                            d="M3.25781 3.11684C3.67771 3.45796 3.83523 3.43193 4.62369 3.37933L12.0571 2.93299C12.2147 2.93299 12.0836 2.77571 12.0311 2.74957L10.7965 1.85711C10.56 1.67347 10.2448 1.46315 9.64083 1.51576L2.44308 2.04074C2.18059 2.06677 2.12815 2.19801 2.2327 2.30322L3.25781 3.11684ZM3.7041 4.84917V12.6704C3.7041 13.0907 3.91415 13.248 4.38693 13.222L12.5562 12.7493C13.0292 12.7233 13.0819 12.4341 13.0819 12.0927V4.32397C13.0819 3.98306 12.9508 3.79921 12.6612 3.82545L4.12422 4.32397C3.80918 4.35044 3.7041 4.50803 3.7041 4.84917ZM11.7688 5.26872C11.8212 5.50518 11.7688 5.74142 11.5319 5.76799L11.1383 5.84641V11.6205C10.7965 11.8042 10.4814 11.9092 10.2188 11.9092C9.79835 11.9092 9.69305 11.7779 9.37812 11.3844L6.80345 7.34249V11.2532L7.61816 11.437C7.61816 11.437 7.61816 11.9092 6.96086 11.9092L5.14879 12.0143C5.09615 11.9092 5.14879 11.647 5.33259 11.5944L5.80546 11.4634V6.29276L5.1489 6.24015C5.09625 6.00369 5.22739 5.66278 5.5954 5.63631L7.53935 5.50528L10.2188 9.5998V5.97765L9.53564 5.89924C9.4832 5.61018 9.69305 5.40028 9.95576 5.37425L11.7688 5.26872ZM1.83874 1.33212L9.32557 0.780787C10.245 0.701932 10.4815 0.754753 11.0594 1.17452L13.4492 2.85424C13.8436 3.14309 13.975 3.22173 13.975 3.53661V12.7493C13.975 13.3266 13.7647 13.6681 13.0293 13.7203L4.33492 14.2454C3.78291 14.2717 3.52019 14.193 3.23111 13.8253L1.47116 11.5419C1.1558 11.1216 1.02466 10.8071 1.02466 10.4392V2.25041C1.02466 1.77825 1.23504 1.38441 1.83874 1.33212Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        Notion
                      </div>
                      <p>
                        Captures, organizes, and updates pages with smart
                        prompts and task logic.
                      </p>
                    </div>
                    <BrowserView>
                      <div
                        className="newLineAnimation"
                        style={{
                          position: "absolute",
                          zIndex: -1,
                          bottom: "-48px",
                          right: "0px",
                          transform: "rotate(90deg)",
                        }}
                      >
                        <svg
                          width="141"
                          height="3"
                          viewBox="0 0 141 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:block max-w-[100%]"
                        >
                          <line
                            x1="0.608887"
                            y1="1.66377"
                            x2="140.319"
                            y2="1.66377"
                            stroke="url(#animatedGradient)"
                            strokeWidth="2"
                            strokeDasharray="7 3"
                          ></line>
                          <defs>
                            <linearGradient
                              id="animatedGradient"
                              x1="1.3296"
                              y1="9.38818"
                              x2="139.032"
                              y2="12.3073"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#332f4b"></stop>
                              <stop
                                offset="1"
                                stopColor="#6d63a7"
                                stopOpacity="0.14"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <animate
                            attributeName="stroke-dashoffset"
                            to="-30"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animate>
                        </svg>
                      </div>
                    </BrowserView>
                    <MobileView>
                      <div
                        className="newLineAnimation"
                        style={{
                          position: "absolute",
                          zIndex: -1,
                          bottom: "-48px",
                          right: "0px",
                          transform: "rotate(90deg)",
                        }}
                      >
                        <svg
                          width="141"
                          height="3"
                          viewBox="0 0 141 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:block max-w-[100%]"
                        >
                          <line
                            x1="0.608887"
                            y1="1.66377"
                            x2="140.319"
                            y2="1.66377"
                            stroke="url(#animatedGradient)"
                            strokeWidth="2"
                            strokeDasharray="7 3"
                          ></line>
                          <defs>
                            <linearGradient
                              id="animatedGradient"
                              x1="1.3296"
                              y1="9.38818"
                              x2="139.032"
                              y2="12.3073"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#332f4b"></stop>
                              <stop
                                offset="1"
                                stopColor="#6d63a7"
                                stopOpacity="0.14"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </MobileView>
                    <div className="sync-line-down2 relative z-20 inline-flex h-6 w-10 overflow-hidden [mask-image:url('https://www.cognosys.ai/images/features/top-lines.png')] [mask-size:contain] sm:h-10 md:w-14 lg:h-16 lg:w-24">
                      <div>
                        <svg
                          width="7"
                          height="300"
                          viewBox="0 0 20 300"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <radialGradient id="b" cx=".5" cy=".5" r=".5">
                              <stop
                                offset="0%"
                                stopColor="#fff"
                                stopOpacity=".7"
                              />
                              <stop
                                offset="100%"
                                stopColor="#fff"
                                stopOpacity="0"
                              />
                            </radialGradient>
                            <linearGradient
                              id="a"
                              x1="10"
                              y1="0"
                              x2="10"
                              y2="300"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0%" stopColor="#332f4b" />
                              <stop
                                offset="100%"
                                stopColor="#6d63a7"
                                stopOpacity=".2"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            stroke="url(#a)"
                            strokeWidth="4"
                            d="M10 0v450"
                          />
                          <circle r="8" cx="10" fill="url(#b)">
                            <animate
                              attributeName="cy"
                              from="-10"
                              to="310"
                              dur="1.5s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="centerWrapper">
                    <div className="centerBox d-flex align-items-center gap-2">
                      <Image loading="lazy"
                        src="/assets/img/agent-01.svg"
                        alt="brand"
                        className="mx-4"
                        width={800}
                        height={600}
                      />
                      <div>
                        <h3 className="text-light">AI Agents</h3>
                        {/*<h4 className="text-secondary">Tools Agents</h4>*/}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-3 justify-content-center position-relative mb-md-0 mb-5">
                    <div
                      id="syncLineUp"
                      className="sync-line-up relative z-20 inline-flex h-6 w-14 overflow-hidden [mask-image:url('https://www.cognosys.ai/images/features/top-lines.png')] [mask-size:contain] sm:h-10 lg:h-16 lg:w-24"
                    >
                      <div>
                        <svg
                          width="7"
                          height="300"
                          viewBox="0 0 20 300"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <radialGradient id="b" cx=".5" cy=".5" r=".5">
                              <stop
                                offset="0%"
                                stopColor="#fff"
                                stopOpacity=".7"
                              />
                              <stop
                                offset="100%"
                                stopColor="#fff"
                                stopOpacity="0"
                              />
                            </radialGradient>
                            <linearGradient
                              id="a"
                              x1="10"
                              y1="0"
                              x2="10"
                              y2="300"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="0%"
                                stopColor="#332f4b"
                                stopOpacity=".2"
                              />
                              <stop offset="100%" stopColor="#6d63a7" />
                            </linearGradient>
                          </defs>
                          <path
                            stroke="url(#a)"
                            strokeWidth="4"
                            d="M10 0v450"
                          />
                          <circle r="8" cx="10" fill="url(#b)">
                            <animate
                              attributeName="cy"
                              from="310"
                              to="-10"
                              dur="1.3s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </svg>
                      </div>
                    </div>
                    <BrowserView>
                      <div
                        className="newLineAnimation"
                        style={{
                          position: "absolute",
                          zIndex: -1,
                          top: "-48px",
                          left: "0px",
                          transform: "rotate(90deg)",
                        }}
                      >
                        <svg
                          width="141"
                          height="3"
                          viewBox="0 0 141 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:block max-w-[100%]"
                        >
                          <line
                            x1="0.608887"
                            y1="1.66377"
                            x2="140.319"
                            y2="1.66377"
                            stroke="url(#animatedGradient)"
                            strokeWidth="2"
                            strokeDasharray="7 3"
                          ></line>
                          <defs>
                            <linearGradient
                              id="animatedGradient"
                              x1="1.3296"
                              y1="9.38818"
                              x2="139.032"
                              y2="12.3073"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#332f4b"></stop>
                              <stop
                                offset="1"
                                stopColor="#6d63a7"
                                stopOpacity="0.14"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <animate
                            attributeName="stroke-dashoffset"
                            to="-30"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animate>
                        </svg>
                      </div>
                    </BrowserView>
                    <MobileView>
                      <div
                        className="newLineAnimation"
                        style={{
                          position: "absolute",
                          zIndex: -1,
                          top: "-48px",
                          left: "0px",
                          transform: "rotate(90deg)",
                        }}
                      >
                        <svg
                          width="141"
                          height="3"
                          viewBox="0 0 141 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:block max-w-[100%]"
                        >
                          <line
                            x1="0.608887"
                            y1="1.66377"
                            x2="140.319"
                            y2="1.66377"
                            stroke="url(#animatedGradient)"
                            strokeWidth="2"
                            strokeDasharray="7 3"
                          ></line>
                          <defs>
                            <linearGradient
                              id="animatedGradient"
                              x1="1.3296"
                              y1="9.38818"
                              x2="139.032"
                              y2="12.3073"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#332f4b"></stop>
                              <stop
                                offset="1"
                                stopColor="#6d63a7"
                                stopOpacity="0.14"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </MobileView>
                    <div className="googleFeatureBtn mt-0">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 10 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 shrink-0 lg:mr-2"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.74414 10.6508C3.17221 11.1862 3.60818 11.8594 3.83633 12.266C4.11418 12.7946 4.22939 13.1515 4.43608 13.7908C4.55693 14.1409 4.67213 14.2471 4.91384 14.2471C5.17813 14.2471 5.29899 14.0686 5.3916 13.7908C5.58474 13.191 5.73383 12.7347 5.96989 12.2999C6.88024 10.5831 8.36435 9.36325 9.20016 7.69165C9.20016 7.69165 9.75021 6.67061 9.75021 5.24071C9.75021 3.90794 9.20806 2.98178 9.20806 2.98178L2.74753 10.6621L2.74414 10.6508Z"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M0.554781 7.5108C1.07546 8.69673 2.06826 9.73584 2.74594 10.6507L6.33764 6.39263C6.33764 6.39263 5.83051 7.05675 4.91451 7.05675C3.89348 7.05675 3.06219 6.24354 3.06219 5.21573C3.06219 4.50868 3.48348 4.01849 3.48348 4.01849C0.840536 4.41155 0.987366 5.05195 0.546875 7.50854L0.554781 7.5108Z"
                            fill="#FBBC04"
                          ></path>
                          <path
                            d="M6.3812 0.59491C7.57844 0.980057 8.59495 1.79214 9.20486 2.97808L6.33603 6.40035C6.33603 6.40035 6.75732 5.90791 6.75732 5.20312C6.75732 4.15385 5.87182 3.3621 4.91629 3.3621C4.00933 3.3621 3.49316 4.01832 3.49316 4.01832C3.71341 3.51683 5.98928 0.765459 6.38459 0.596039L6.3812 0.59491Z"
                            fill="#4285F4"
                          ></path>
                          <path
                            d="M1.20996 2.10055C1.92378 1.25119 3.17523 0.372467 4.90331 0.372467C5.73798 0.372467 6.37161 0.593842 6.37161 0.593842L3.49148 4.01612C3.29721 3.91074 1.40197 2.43487 1.20996 2.09603V2.10055Z"
                            fill="#1A73E8"
                          ></path>
                          <path
                            d="M0.553018 7.51087C0.553018 7.51087 0.0820312 6.57567 0.0820312 5.22935C0.0820312 3.95306 0.581254 2.83489 1.2115 2.11203L3.49301 4.03212L0.556406 7.51087H0.553018Z"
                            fill="#EA4335"
                          ></path>
                        </svg>
                        Google Maps
                      </div>
                      <p>
                        Finds routes, flags delays, and auto-suggests places
                        with smart tracking.
                      </p>
                    </div>
                    <BrowserView>
                      <div
                        className="newLineAnimation"
                        style={{
                          position: "absolute",
                          zIndex: -1,
                          top: "-48px",
                          right: "0px",
                          transform: "rotate(90deg)",
                        }}
                      >
                        <svg
                          width="141"
                          height="3"
                          viewBox="0 0 141 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:block max-w-[100%]"
                        >
                          <line
                            x1="0.608887"
                            y1="1.66377"
                            x2="140.319"
                            y2="1.66377"
                            stroke="url(#animatedGradient)"
                            strokeWidth="2"
                            strokeDasharray="7 3"
                          ></line>
                          <defs>
                            <linearGradient
                              id="animatedGradient"
                              x1="1.3296"
                              y1="9.38818"
                              x2="139.032"
                              y2="12.3073"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#332f4b"></stop>
                              <stop
                                offset="1"
                                stopColor="#6d63a7"
                                stopOpacity="0.14"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <animate
                            attributeName="stroke-dashoffset"
                            to="-30"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animate>
                        </svg>
                      </div>
                    </BrowserView>
                    <MobileView>
                      <div
                        className="newLineAnimation"
                        style={{
                          position: "absolute",
                          zIndex: -1,
                          top: "-48px",
                          right: "0px",
                          transform: "rotate(90deg)",
                        }}
                      >
                        <svg
                          width="141"
                          height="3"
                          viewBox="0 0 141 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:block max-w-[100%]"
                        >
                          <line
                            x1="0.608887"
                            y1="1.66377"
                            x2="140.319"
                            y2="1.66377"
                            stroke="url(#animatedGradient)"
                            strokeWidth="2"
                            strokeDasharray="7 3"
                          ></line>
                          <defs>
                            <linearGradient
                              id="animatedGradient"
                              x1="1.3296"
                              y1="9.38818"
                              x2="139.032"
                              y2="12.3073"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#332f4b"></stop>
                              <stop
                                offset="1"
                                stopColor="#6d63a7"
                                stopOpacity="0.14"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </MobileView>
                    <div
                      id="syncLineUp2"
                      className="sync-line-up2 relative z-20 inline-flex h-6 w-14 overflow-hidden [mask-image:url('https://www.cognosys.ai/images/features/top-lines.png')] [mask-size:contain] sm:h-10 lg:h-16 lg:w-24"
                    >
                      <div>
                        <svg
                          width="7"
                          height="300"
                          viewBox="0 0 20 300"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <radialGradient id="b" cx=".5" cy=".5" r=".5">
                              <stop
                                offset="0%"
                                stopColor="#fff"
                                stopOpacity=".7"
                              />
                              <stop
                                offset="100%"
                                stopColor="#fff"
                                stopOpacity="0"
                              />
                            </radialGradient>
                            <linearGradient
                              id="a"
                              x1="10"
                              y1="0"
                              x2="10"
                              y2="300"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="0%"
                                stopColor="#332f4b"
                                stopOpacity=".2"
                              />
                              <stop offset="100%" stopColor="#6d63a7" />
                            </linearGradient>
                          </defs>
                          <path
                            stroke="url(#a)"
                            strokeWidth="4"
                            d="M10 0v450"
                          />
                          <circle r="8" cx="10" fill="url(#b)">
                            <animate
                              attributeName="cy"
                              from="310"
                              to="-10"
                              dur="1.3s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </svg>
                      </div>
                    </div>
                    <div className="googleFeatureBtn ml-auto mt-0">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          className="size-4 shrink-0 lg:mr-2"
                          aria-hidden="true"
                        >
                          <path d="M88,144a16,16,0,1,1,16-16A16,16,0,0,1,88,144Zm144-24v88a16,16,0,0,1-5,11.61,8.8,8.8,0,0,1-.72.65A15.93,15.93,0,0,1,216,224H88a16,16,0,0,1-16-16V192H40a16,16,0,0,1-16-16V80A16,16,0,0,1,40,64H96V48a16,16,0,0,1,16-16h80a16,16,0,0,1,16,16v56h8a15.94,15.94,0,0,1,10,3.54l.08.07.14.11a6.78,6.78,0,0,1,.74.68A15.93,15.93,0,0,1,232,120ZM112,64h24a16,16,0,0,1,16,16v74.13l40-28.89V48H112ZM88,160a32,32,0,1,0-32-32A32,32,0,0,0,88,160Zm111.26,48L152,173.87V176a16,16,0,0,1-16,16H88v16ZM216,127.65,165.66,164,216,200.35Z"></path>
                        </svg>
                        Outlook
                      </div>
                      <p>
                        Sorts emails, schedules meetings, and adds reminders
                        with contextual Al.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-center">
                <div className="stepBoxMain">
                  <div className="stepBox position-relative">
                    <BrowserView>
                      <div
                        className="newLineAnimation hide_mobile"
                        style={{
                          position: "absolute",
                          zIndex: -1,
                          top: "-48px",
                          right: "0px",
                          transform: "rotate(90deg)",
                        }}
                      >
                        <svg
                          width="141"
                          height="3"
                          viewBox="0 0 141 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:block max-w-[100%]"
                        >
                          <line
                            x1="0.608887"
                            y1="1.66377"
                            x2="140.319"
                            y2="1.66377"
                            stroke="url(#animatedGradient)"
                            strokeWidth="2"
                            strokeDasharray="7 3"
                          ></line>
                          <defs>
                            <linearGradient
                              id="animatedGradient"
                              x1="1.3296"
                              y1="9.38818"
                              x2="139.032"
                              y2="12.3073"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#332f4b"></stop>
                              <stop
                                offset="1"
                                stopColor="#6d63a7"
                                stopOpacity="0.14"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <animate
                            attributeName="stroke-dashoffset"
                            to="-30"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animate>
                        </svg>
                      </div>
                      <div
                        className="newLineAnimation hide_mobile"
                        style={{
                          position: "absolute",
                          zIndex: -1,
                          top: "-48px",
                          left: "0px",
                          transform: "rotate(90deg)",
                        }}
                      >
                        <svg
                          width="141"
                          height="3"
                          viewBox="0 0 141 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:block max-w-[100%]"
                        >
                          <line
                            x1="0.608887"
                            y1="1.66377"
                            x2="140.319"
                            y2="1.66377"
                            stroke="url(#animatedGradient)"
                            strokeWidth="2"
                            strokeDasharray="7 3"
                          ></line>
                          <defs>
                            <linearGradient
                              id="animatedGradient"
                              x1="1.3296"
                              y1="9.38818"
                              x2="139.032"
                              y2="12.3073"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#332f4b"></stop>
                              <stop
                                offset="1"
                                stopColor="#6d63a7"
                                stopOpacity="0.14"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <animate
                            attributeName="stroke-dashoffset"
                            to="-30"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animate>
                        </svg>
                      </div>
                    </BrowserView>
                    <MobileView>
                      <div
                        className="newLineAnimation hide_mobile"
                        style={{
                          position: "absolute",
                          zIndex: -1,
                          top: "-48px",
                          right: "0px",
                          transform: "rotate(90deg)",
                        }}
                      >
                        <svg
                          width="141"
                          height="3"
                          viewBox="0 0 141 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:block max-w-[100%]"
                        >
                          <line
                            x1="0.608887"
                            y1="1.66377"
                            x2="140.319"
                            y2="1.66377"
                            stroke="url(#animatedGradient)"
                            strokeWidth="2"
                            strokeDasharray="7 3"
                          ></line>
                          <defs>
                            <linearGradient
                              id="animatedGradient"
                              x1="1.3296"
                              y1="9.38818"
                              x2="139.032"
                              y2="12.3073"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#332f4b"></stop>
                              <stop
                                offset="1"
                                stopColor="#6d63a7"
                                stopOpacity="0.14"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <div
                        className="newLineAnimation hide_mobile"
                        style={{
                          position: "absolute",
                          zIndex: -1,
                          top: "-48px",
                          left: "0px",
                          transform: "rotate(90deg)",
                        }}
                      >
                        <svg
                          width="141"
                          height="3"
                          viewBox="0 0 141 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:block max-w-[100%]"
                        >
                          <line
                            x1="0.608887"
                            y1="1.66377"
                            x2="140.319"
                            y2="1.66377"
                            stroke="url(#animatedGradient)"
                            strokeWidth="2"
                            strokeDasharray="7 3"
                          ></line>
                          <defs>
                            <linearGradient
                              id="animatedGradient"
                              x1="1.3296"
                              y1="9.38818"
                              x2="139.032"
                              y2="12.3073"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#332f4b"></stop>
                              <stop
                                offset="1"
                                stopColor="#6d63a7"
                                stopOpacity="0.14"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </MobileView>
                    <div className="stepBoxIcon">
                      <div className="yellowIcon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="#FFD60A"
                          viewBox="0 0 256 256"
                          className="size-4 text-amber-10"
                          aria-hidden="true"
                        >
                          <path d="M12,111l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,0,0,0-13.9l-112-64a8,8,0,0,0-7.94,0l-112,64A8,8,0,0,0,12,111ZM128,49.21,223.87,104,128,158.79,32.13,104ZM246.94,140A8,8,0,0,1,244,151L132,215a8,8,0,0,1-7.94,0L12,151A8,8,0,0,1,20,137.05l108,61.74,108-61.74A8,8,0,0,1,246.94,140Z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3>Workflow</h3>
                        <p>Runs one time</p>
                      </div>
                    </div>
                    <div className="steps">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="#30A46C"
                          viewBox="0 0 256 256"
                          className="text-primary mr-2 size-3.5"
                          aria-hidden="true"
                        >
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                        <p>Step 1</p>
                      </div>
                      <div className="bg-neutral-20 h-5 w-full rounded-sm"></div>
                    </div>
                    <div className="steps">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="#30A46C"
                          viewBox="0 0 256 256"
                          className="text-primary mr-2 size-3.5"
                          aria-hidden="true"
                        >
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                        <p>Step 1</p>
                      </div>
                      <div className="bg-neutral-20 h-5 w-full rounded-sm"></div>
                    </div>
                    <div className="lineAnimtion1">
                      <svg
                        width="141"
                        height="3"
                        viewBox="0 0 141 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:block max-w-[100%]"
                      >
                        <line
                          x1="0.608887"
                          y1="1.66377"
                          x2="140.319"
                          y2="1.66377"
                          stroke="url(#animatedGradient)"
                          strokeWidth="2"
                          strokeDasharray="7 3"
                        ></line>
                        <defs>
                          <linearGradient
                            id="animatedGradient"
                            x1="1.3296"
                            y1="9.38818"
                            x2="139.032"
                            y2="12.3073"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#332f4b"></stop>
                            <stop
                              offset="1"
                              stopColor="#6d63a7"
                              stopOpacity="0.14"
                            ></stop>
                          </linearGradient>
                        </defs>
                        <animate
                          attributeName="stroke-dashoffset"
                          to="-30"
                          dur="1s"
                          repeatCount="indefinite"
                        ></animate>
                      </svg>
                    </div>
                  </div>
                  <BrowserView>
                    <div className="stepBox position-relative">
                      <div className="stepBoxIcon">
                        <div className="yellowIcon blue">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="#3C61DD"
                            viewBox="0 0 256 256"
                            className="size-4 text-indigo-9"
                            aria-hidden="true"
                          >
                            <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3>Workflow</h3>
                          <p>Runs one time</p>
                        </div>
                      </div>
                      <div className="steps">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="#30A46C"
                            viewBox="0 0 256 256"
                            className="text-primary mr-2 size-3.5"
                            aria-hidden="true"
                          >
                            <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                          <p>Step 1</p>
                        </div>
                        <div className="bg-neutral-20 h-5 w-full rounded-sm"></div>
                      </div>
                      <div className="steps">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="#30A46C"
                            viewBox="0 0 256 256"
                            className="text-primary mr-2 size-3.5"
                            aria-hidden="true"
                          >
                            <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                          <p>Step 1</p>
                        </div>
                        <div className="bg-neutral-20 h-5 w-full rounded-sm"></div>
                      </div>
                      <div className="lineAnimtion2">
                        <svg
                          width="141"
                          height="3"
                          viewBox="0 0 141 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:block max-w-[100%]"
                        >
                          <line
                            x1="0.608887"
                            y1="1.66377"
                            x2="140.319"
                            y2="1.66377"
                            stroke="url(#animatedGradient)"
                            strokeWidth="2"
                            strokeDasharray="7 3"
                          ></line>
                          <defs>
                            <linearGradient
                              id="animatedGradient"
                              x1="1.3296"
                              y1="9.38818"
                              x2="139.032"
                              y2="12.3073"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#332f4b"></stop>
                              <stop
                                offset="1"
                                stopColor="#6d63a7"
                                stopOpacity="0.14"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <animate
                            attributeName="stroke-dashoffset"
                            to="-30"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animate>
                        </svg>
                      </div>
                    </div>
                  </BrowserView>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
