'use client';
import Link from "next/link";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";

const CaseStudySection = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("tabScroll1");
  const stackCardsRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const scrollingRef = useRef<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);

  // Helper functions
  const hasClass = (el: HTMLElement, className: string): boolean => {
    if (el.classList) return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  };

  const addClass = (el: HTMLElement, className: string): void => {
    const classList = className.split(' ');
    if (el.classList) el.classList.add(classList[0]);
    else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
    if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
  };

  const removeClass = (el: HTMLElement, className: string): void => {
    const classList = className.split(' ');
    if (el.classList) el.classList.remove(classList[0]);
    else if (hasClass(el, classList[0])) {
      const reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
    if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
  };

  const osHasReducedMotion = (): boolean => {
    if (!window.matchMedia) return false;
    const matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (matchMediaObj) return matchMediaObj.matches;
    return false;
  };

  // Stack Cards functions
  const setStackCards = (): void => {
    const element = stackCardsRef.current;
    if (!element) return;

    const items = itemsRef.current;

    if (!isDesktop) {
      element.style.paddingBottom = '0px';
      for (let i = 0; i < items.length; i++) {
        items[i].style.transform = 'none';
        items[i].classList.remove('service-scrollerItemContainer', 'stack-cards__item', 'js-stack-cards__item');
        items[i].style.display = 'block';
      }
      return;
    }

    for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'block';
      if (!items[i].classList.contains('service-scrollerItemContainer')) {
        items[i].classList.add('service-scrollerItemContainer', 'stack-cards__item', 'js-stack-cards__item');
      }
    }

    const marginYValue = getComputedStyle(element).getPropertyValue('--stack-cards-gap');
    const marginY = getIntegerFromProperty(marginYValue, element);
    const cardStyle = getComputedStyle(items[0]);
    const cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue('top')));
    const cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue('height')));

    if (isNaN(marginY)) {
      element.style.paddingBottom = '0px';
    } else {
      element.style.paddingBottom = `${marginY * (items.length - 1)}px`;
    }

    for (let i = 0; i < items.length; i++) {
      if (isNaN(marginY)) {
        items[i].style.transform = 'none';
      } else {
        items[i].style.transform = `translateY(${marginY * i}px)`;
      }
    }
  };

  const getIntegerFromProperty = (value: string, element: HTMLElement): number => {
    const node = document.createElement('div');
    node.setAttribute('style', `opacity:0; visibility: hidden; position: absolute; height:${value}`);
    element.appendChild(node);
    const intValue = parseInt(getComputedStyle(node).getPropertyValue('height'));
    element.removeChild(node);
    return intValue;
  };

  const animateStackCards = (): void => {
    if (!isDesktop) {
      scrollingRef.current = false;
      return;
    }
    const element = stackCardsRef.current;
    if (!element) return;

    const items = itemsRef.current;
    const marginYValue = getComputedStyle(element).getPropertyValue('--stack-cards-gap');
    const marginY = getIntegerFromProperty(marginYValue, element);

    if (isNaN(marginY)) {
      scrollingRef.current = false;
      return;
    }

    const top = element.getBoundingClientRect().top;
    const cardStyle = getComputedStyle(items[0]);
    const cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue('top')));
    const cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue('height')));
    const windowHeight = window.innerHeight;

    // Update active tab based on visibility
    let newActiveTab = activeTab;
    for (let i = 0; i < items.length; i++) {
      const itemTop = items[i].getBoundingClientRect().top;
      if (itemTop >= top && itemTop <= top + windowHeight * 0.3) {
        newActiveTab = `tabScroll${i + 1}`;
        break;
      }
    }

    if (newActiveTab !== activeTab) {
      setActiveTab(newActiveTab);
    }

    for (let i = 0; i < items.length; i++) {
      const scrolling = cardTop - top - i * (cardHeight + marginY);
      if (scrolling > 0) {
        const scaling = i === items.length - 1 ? 1 : (cardHeight - scrolling * 0.05) / cardHeight;
        items[i].style.transform = `translateY(${marginY * i}px) scale(${scaling})`;
      } else {
        items[i].style.transform = `translateY(${marginY * i}px)`;
      }
    }
    scrollingRef.current = false;
  };

  const stackCardsScrolling = (): void => {
    if (!isDesktop || scrollingRef.current) return;
    scrollingRef.current = true;
    animationFrameRef.current = requestAnimationFrame(animateStackCards);
  };

  const initStackCardsEffect = (): void => {
    setStackCards();
    if (!isDesktop) return;

    window.addEventListener('scroll', stackCardsScrolling);
  };

  const cleanupStackCards = (): void => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    window.removeEventListener('scroll', stackCardsScrolling);
  };

  // Handle tab click for mobile and desktop
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      if (isDesktop) {
        const container = stackCardsRef.current;
        if (container) {
          const itemTop = element.getBoundingClientRect().top;
          const containerTop = container.getBoundingClientRect().top;
          container.scrollTo({
            top: itemTop - containerTop + container.scrollTop,
            behavior: 'smooth',
          });
        }
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      cleanupStackCards();
      initStackCardsEffect();
    };

    const desktop = window.innerWidth >= 1024;
    setIsDesktop(desktop);

    if (!osHasReducedMotion()) {
      initStackCardsEffect();
    }

    let resizeTimeout: NodeJS.Timeout;
    const resizeListener = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 500);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      cleanupStackCards();
      window.removeEventListener('resize', resizeListener);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, [isDesktop]);

  // Update service scroller class
  useEffect(() => {
    const updateServiceScrollerClass = () => {
      const el = document.getElementById("serviceScrollerArea");
      if (!el) return;
      if (window.innerWidth > 1024) {
        removeClass(el as HTMLElement, "service-scrollerArea");
      } else {
        addClass(el as HTMLElement, "service-scrollerArea");
      }
    };
    updateServiceScrollerClass();
    window.addEventListener("resize", updateServiceScrollerClass);
    return () => {
      window.removeEventListener("resize", updateServiceScrollerClass);
    };
  }, []);

  // Initialize items ref and intersection observer
  useEffect(() => {
    if (stackCardsRef.current) {
      itemsRef.current = Array.from(
        stackCardsRef.current.getElementsByClassName('js-stack-cards__item')
      ) as HTMLLIElement[];

      if (!isDesktop && itemsRef.current.length > 0) {
        setStackCards();
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const tabId = entry.target.id;
              if (tabId !== activeTab) {
                setActiveTab(tabId);
              }
            }
          });
        },
        {
          root: isDesktop ? stackCardsRef.current : null,
          threshold: 0.3, // Lowered threshold for more responsive tab switching
          rootMargin: '0px 0px -30% 0px', // Adjust to trigger earlier
        }
      );

      itemsRef.current.forEach((item) => observer.observe(item));

      return () => {
        itemsRef.current.forEach((item) => observer.unobserve(item));
      };
    }
  }, [isDesktop, activeTab]);

  return (
    <div className="sectionPadding pb-0 bg-[url('../img/bc/revolutionize-bg.png')] bg-cover">
      <section className="sectionPadding pt-0 pb_8">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-10 text-center">
              <span className="buttonAnimation yellow inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                Agentic Workflows
              </span>
              <h2 className="tracking-[-0.02em] mb-16 lg:leading-[4rem] md:text-5xl font-semibold headingSize lineHeight-1 text-center">
                Instant AI Solutions That Work for You
              </h2>
            </div>
          </div>
          <div className="container">
            <div className="row tabSection">
              <div className="col-xl-5 col-lg-12 col-md-12">
                <div className="px-md-3 rounded scroll2 right-column hideOnipad">
                  <p className="paraColor subHeading">
                    Kogents AI adapts across industries — from eCommerce to healthcare, real estate to finance — automating support, bookings, and transactions through interconnected agents that deliver instant, accurate service and streamline operations at every customer touchpoint.
                  </p>
                  <div className="d-flex align-items-start mt-2">
                    <div
                      className="nav flex-column nav-pills me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <Link
                        className={`nav-link scrollAnchor ps-3 ${activeTab === "tabScroll1" ? "active2" : ""}`}
                        href="#tabScroll1"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick("tabScroll1");
                        }}
                      >
                        eCommerce & D2C
                      </Link>
                      <Link
                        className={`nav-link scrollAnchor ps-3 ${activeTab === "tabScroll2" ? "active2" : ""}`}
                        href="#tabScroll2"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick("tabScroll2");
                        }}
                      >
                        Healthcare & Clinics
                      </Link>
                      <Link
                        className={`nav-link scrollAnchor ps-3 ${activeTab === "tabScroll3" ? "active2" : ""}`}
                        href="#tabScroll3"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick("tabScroll3");
                        }}
                      >
                        Real Estate & Property Management
                      </Link>
                      <Link
                        className={`nav-link scrollAnchor ps-3 ${activeTab === "tabScroll4" ? "active2" : ""}`}
                        href="#tabScroll4"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick("tabScroll4");
                        }}
                      >
                        Education & EdTech
                      </Link>
                      <Link
                        className={`nav-link scrollAnchor ps-3 ${activeTab === "tabScroll5" ? "active2" : ""}`}
                        href="#tabScroll5"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick("tabScroll5");
                        }}
                      >
                        Logistics, Delivery & Transport
                      </Link>
                      <Link
                        className={`nav-link scrollAnchor ps-3 ${activeTab === "tabScroll6" ? "active2" : ""}`}
                        href="#tabScroll6"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick("tabScroll6");
                        }}
                      >
                        Financial Services & Insurance
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 text-center mt-4">
                    <button
                      className="buttonAnimation2 flex justify-center green items-center gap-2 mt-4 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      Request Demo
                      <Image src="/assets/img/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-12 col-md-12 text-light">
                <div className="px-4 tabBgbox">
                  <ul
                    className="service-scrollerArea stack-cards js-stack-cards"
                    id="serviceScrollerArea"
                    ref={stackCardsRef}
                    style={{ overflowY: isDesktop ? 'auto' : 'visible', maxHeight: isDesktop ? '600px' : 'none' }}
                  >
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll1"
                    >
                      <div className="row rowGap scrollerItem py-4">
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> eCommerce & D2C
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Deliver Support That Converts — From Product Page to Post-Sale
                            </h3>
                            <p className="text-white">
                              AI agents respond instantly to product questions, solve checkout issues, and manage returns — without ever escalating to your team.
                            </p>
                            <h3 className="heading1">
                              Reduce Cart Abandonment, Maximize Repeat Purchases
                            </h3>
                            <p>
                              Faster answers = faster decisions. Kogents builds buyer confidence at every stage of the funnel.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image src="/assets/img/iconss.png" alt="" width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon3.png" alt="" width={30} height={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Chatbot handles product queries → Shopify agent triggers order
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              WhatsApp agent follows up on abandoned carts
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Voice agent resolves shipping inquiries
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Assistant app pushes refund data to CRM in real time
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll2"
                    >
                      <div className="row rowGap scrollerItem py-4">
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> Healthcare & Clinics
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Book, Confirm, and Follow Up — Without Touching a Phone
                            </h3>
                            <p className="text-white">
                              Patients get automated appointment confirmations, pre-check triage, and instant answers to FAQs — all handled by your AI.
                            </p>
                            <h3 className="heading1">
                              Reduce No-Shows, Improve Patient Experience, Free Up Staff
                            </h3>
                            <p>
                              Let your team focus on care, while AI handles scheduling, calls, and information flow
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image src="/assets/img/iconss.png" alt="" width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon3.png" alt="" width={30} height={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Phone agent books consultations and reminders
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              WhatsApp agent handles follow-up and document requests
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Chatbot explains procedures and insurance basics
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Assistant app equips mobile staff with instant updates
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll3"
                    >
                      <div className="row rowGap scrollerItem py-4">
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> Real Estate & Property Management
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Capture Every Lead, Qualify Every Prospect — Even at 2 AM
                            </h3>
                            <p className="text-white">
                              From rental inquiries to maintenance requests, Kogents AI handles the frontlines across messaging, voice, and web.
                            </p>
                            <h3 className="heading1">
                              Streamline Viewings, Contracts, and Tenant Support at Scale
                            </h3>
                            <p>
                              AI ensures no one gets left on read, and every question gets answered instantly — from both sides of the deal.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image src="/assets/img/iconss.png" alt="" width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon3.png" alt="" width={30} height={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Messenger agent qualifies buyers/renters
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Voice agent schedules property tours
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              WhatsApp agent follows up with listings
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Standalone agent processes tenant support queries 24/7
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll4"
                    >
                      <div className="row rowGap scrollerItem py-4">
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> Education & EdTech
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Onboard Students, Answer FAQs, and Automate Admin Chaos
                            </h3>
                            <p className="text-white">
                              AI helps with admissions, scheduling, and course queries — freeing up faculty and staff from operational overload.
                            </p>
                            <h3 className="heading1">
                              Keep Students Engaged and Informed — Without Extra Hires
                            </h3>
                            <p>
                              Every channel stays responsive, consistent, and aligned with institutional standards.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image src="/assets/img/iconss.png" alt="" width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon3.png" alt="" width={30} height={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Chatbot answers curriculum & enrollment questions
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Phone agent confirms class schedules
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              WhatsApp agent sends deadline reminders
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Assistant app helps staff manage student cases on the go
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll5"
                    >
                      <div className="row rowGap scrollerItem py-4">
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> Logistics, Delivery & Transport
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Track, Update, and Resolve — Before Anyone Asks
                            </h3>
                            <p className="text-white">
                              Kogents AI handles shipment queries, route changes, and delivery updates — cutting down inbound calls and delays
                            </p>
                            <h3 className="heading1">
                              Optimize Fleet Support and Customer Communication, End to End
                            </h3>
                            <p>
                              No more “where’s my order?” — AI agents keep everyone in the loop in real time.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image src="/assets/img/iconss.png" alt="" width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon3.png" alt="" width={30} height={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Shopify agent provides live order tracking
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Voice agent resolves last-mile delivery issues
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Messenger agent collects feedback post-delivery
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Assistant app supports drivers with location updates
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll6"
                    >
                      <div className="row rowGap scrollerItem py-4">
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> Financial Services & Insurance
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Turn Complex Questions into Clear, Trusted Answers
                            </h3>
                            <p className="text-white">
                              From loan queries to claim updates, AI agents deliver fast, compliant, and reassuring responses.
                            </p>
                            <h3 className="heading1">
                              Automate Client Interaction Without Compromising Security
                            </h3>
                            <p>
                              Handle high-volume customer engagement with built-in privacy, audit trails, and decision logic.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image src="/assets/img/iconss.png" alt="" width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                              </div>
                              <div className="greyIcon">
                                <Image src="/assets/img/icon3.png" alt="" width={30} height={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Chatbot explains policy or loan options
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Phone agent routes fraud inquiries to secure teams
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              WhatsApp agent pushes claim status updates
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="" width={30} height={30} />
                            </div>
                            <p>
                              Standalone agent syncs user documents and IDs safely
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudySection;