'use client';

import Link from "next/link";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import { useModalStore } from "@/stores/useModalStore";
import { ArrowRightIcon } from "@/icons";

const CaseStudySection = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("tabScroll1");
  // refs (TOP)
  const stackCardsRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const scrollingFnRef = useRef<(() => void) | null>(null);
  const scrollingRef = useRef<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null); // ✅ moved up
  const openModal = useModalStore((state) => state.openModal);


  // Helper functions
  const hasClass = (el: HTMLElement, className: string): boolean => {
    if (el.classList) return el.classList.contains(className);
    else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
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
    if (!items || items.length === 0) return;

    // Reset all transformations if not desktop
    if (!isDesktop) {
      element.style.paddingBottom = '0px';
      for (let i = 0; i < items.length; i++) {
        if (items[i]) {
          items[i].style.transform = 'none';
          // Remove stack card classes on mobile
          items[i].classList.remove('service-scrollerItemContainer', 'stack-cards__item', 'js-stack-cards__item');
          // Show all items on mobile
          items[i].style.display = 'block';
        }
      }
      return;
    }

    // Desktop setup - show all items with stack effect
    for (let i = 0; i < items.length; i++) {
      if (items[i]) {
        items[i].style.display = 'block';
        items[i].style.transition = 'transform 0.1s ease-out'; // ✅ Add smooth transition
        // Ensure classes are present on desktop (don't add if already there)
        if (!items[i].classList.contains('service-scrollerItemContainer')) {
          items[i].classList.add('service-scrollerItemContainer', 'stack-cards__item', 'js-stack-cards__item');
        }
      }
    }

    // Check if we have at least one item before calling getComputedStyle
    if (!items[0]) return;

    const marginYValue = getComputedStyle(element).getPropertyValue('--stack-cards-gap');
    const marginY = getIntegerFromProperty(marginYValue, element);
    const elementHeight = element.offsetHeight;

    const cardStyle = getComputedStyle(items[0]);
    const cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue('top')));
    const cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue('height')));

    if (isNaN(marginY)) {
      element.style.paddingBottom = '0px';
    } else {
      element.style.paddingBottom = (marginY * (items.length - 1)) + 'px';
    }

    for (let i = 0; i < items.length; i++) {
      if (items[i]) {
        if (isNaN(marginY)) {
          items[i].style.transform = 'none';
        } else {
          items[i].style.transform = `translateY(${marginY * i}px)`;
        }
      }
    }
  };

  const getIntegerFromProperty = (value: string, element: HTMLElement): number => {
    const node = document.createElement('div');
    node.setAttribute('style', 'opacity:0; visbility: hidden;position: absolute; height:' + value);
    element.appendChild(node);
    const intValue = parseInt(getComputedStyle(node).getPropertyValue('height'));
    element.removeChild(node);
    return intValue;
  };

  const syncActiveByVisibility = () => {
    const list = stackCardsRef.current;
    if (!list) return;
    const cards = Array.from(list.querySelectorAll<HTMLElement>("li[id^='tabScroll']"));
    if (!cards.length) return;

    const rootEl = scrollContainerRef.current;
    const rootRect = rootEl && rootEl.scrollHeight > rootEl.clientHeight
      ? rootEl.getBoundingClientRect()
      : new DOMRect(0, 0, window.innerWidth, window.innerHeight);

    let bestId = activeTab, best = 0;
    for (const el of cards) {
      const r = el.getBoundingClientRect();
      const top = Math.max(r.top, rootRect.top);
      const bottom = Math.min(r.bottom, rootRect.bottom);
      const visible = Math.max(0, bottom - top);
      const ratio = r.height ? visible / r.height : 0;
      if (ratio > best) { best = ratio; bestId = el.id; }
    }
    if (bestId !== activeTab) setActiveTab(bestId);
  };

  useEffect(() => {
    if (isDesktop) return; // desktop pe stack math hi chalegi
    const root: any = scrollContainerRef.current ?? window;
    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(syncActiveByVisibility); };
    root.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    syncActiveByVisibility();
    return () => { root.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, [isDesktop]);

  // ✅ New function to maintain scale based on current position
  const maintainStackCardsScale = (): void => {
    if (!isDesktop) return;

    const element = stackCardsRef.current;
    if (!element) return;

    const items = itemsRef.current;
    if (!items || items.length === 0 || !items[0]) return;

    const marginYValue = getComputedStyle(element).getPropertyValue('--stack-cards-gap');
    const marginY = getIntegerFromProperty(marginYValue, element);
    if (isNaN(marginY)) return;

    const top = element.getBoundingClientRect().top;
    const cardStyle = getComputedStyle(items[0]);
    const cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue('top')));
    const cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue('height')));

    for (let i = 0; i < items.length; i++) {
      if (!items[i]) continue;
      
      const scrolling = cardTop - top - i * (cardHeight + marginY);

      if (scrolling > 0) {
        const scaling = i === items.length - 1 ? 1 : (cardHeight - scrolling * 0.05) / cardHeight;
        const boundedScaling = Math.max(0.7, Math.min(1, scaling));
        items[i].style.transform = `translateY(${marginY * i}px) scale(${boundedScaling})`;
      } else {
        items[i].style.transform = `translateY(${marginY * i}px)`;
      }
    }
  };

  const animateStackCards = (): void => {
    if (!isDesktop) {
      scrollingRef.current = false;
      syncActiveByVisibility();
      return;
    }

    const element = stackCardsRef.current;
    if (!element) return;

    const items = itemsRef.current;
    if (!items || items.length === 0 || !items[0]) {
      scrollingRef.current = false;
      return;
    }

    const marginYValue = getComputedStyle(element).getPropertyValue('--stack-cards-gap');
    const marginY = getIntegerFromProperty(marginYValue, element);
    if (isNaN(marginY)) { scrollingRef.current = false; return; }

    const top = element.getBoundingClientRect().top;
    const cardStyle = getComputedStyle(items[0]);
    const cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue('top')));
    const cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue('height')));
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;

    if (cardTop - top + windowHeight - elementHeight - cardHeight + marginY + marginY * items.length > 0) {
      scrollingRef.current = false;
      return;
    }

    let bestIndex = 0;
    let bestDist = Infinity;

    for (let i = 0; i < items.length; i++) {
      if (!items[i]) continue;
      
      const scrolling = cardTop - top - i * (cardHeight + marginY);

      if (scrolling > 0) {
        const scaling = i === items.length - 1 ? 1 : (cardHeight - scrolling * 0.05) / cardHeight;
        items[i].style.transform = `translateY(${marginY * i}px) scale(${scaling})`;
      } else {
        items[i].style.transform = `translateY(${marginY * i}px)`;
      }

      const dist = Math.abs(scrolling);
      if (dist < bestDist) { bestDist = dist; bestIndex = i; }
    }

    const id = `tabScroll${bestIndex + 1}`;
    if (id !== activeTab) setActiveTab(id);

    scrollingRef.current = false;
  };


  const stackCardsScrolling = (): void => {
    if (!isDesktop || scrollingRef.current) return;
    scrollingRef.current = true;
    animationFrameRef.current = requestAnimationFrame(animateStackCards);
  };

  const initStackCardsEffect = (): void => {
    // Only initialize if we have the required elements
    if (stackCardsRef.current && itemsRef.current && itemsRef.current.length > 0) {
      setStackCards();
      if (!isDesktop) return;

      window.addEventListener('scroll', stackCardsScrolling);
    }
  };

  const cleanupStackCards = (): void => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    window.removeEventListener('scroll', stackCardsScrolling);
  };



  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const target = document.getElementById(tabId);
    if (!target) return;

    const scroller = scrollContainerRef.current;

    // Prefer container scroll if it's actually scrollable
    if (scroller && scroller.scrollHeight > scroller.clientHeight) {
      const targetRect = target.getBoundingClientRect();
      const scrollerRect = scroller.getBoundingClientRect();
      const current = scroller.scrollTop;
      const delta = targetRect.top - scrollerRect.top; // distance inside the box
      scroller.scrollTo({ top: current + delta, behavior: "smooth" });
      return;
    }

    // Fallback: page scroll
    const y =
      window.scrollY +
      target.getBoundingClientRect().top -
      80; // adjust if you have a sticky header
    window.scrollTo({ top: y, behavior: "smooth" });
  };


  // helper: fetch all card <li> by known ids (order preserved)
  const getCardEls = () => (
    ["tabScroll1", "tabScroll2", "tabScroll3", "tabScroll4", "tabScroll5", "tabScroll6"]
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
  );

  // compute visible ratio of an element inside a root rect
  const ratioInRoot = (rect: DOMRect, rootRect: DOMRect) => {
    const top = Math.max(rect.top, rootRect.top);
    const bottom = Math.min(rect.bottom, rootRect.bottom);
    const visible = Math.max(0, bottom - top);
    return rect.height > 0 ? visible / rect.height : 0;
  };

  // 🔁 robust scroll-based sync (no IO)
  useEffect(() => {
    const rootEl = scrollContainerRef.current ?? null;

    // if right panel actually scrolls, use it as root; else viewport
    const getRootRect = () =>
      rootEl && rootEl.scrollHeight > rootEl.clientHeight
        ? rootEl.getBoundingClientRect()
        : new DOMRect(0, 0, window.innerWidth, window.innerHeight);

    let raf = 0;

    const selectMostVisible = () => {
      const cards = getCardEls();
      if (!cards.length) return;

      const rootRect = getRootRect();
      let bestId = activeTab;
      let best = 0;

      for (const el of cards) {
        const r = el.getBoundingClientRect();
        const ratio = ratioInRoot(r, rootRect);
        if (ratio > best) {
          best = ratio;
          bestId = el.id;
        }
      }

      // little hysteresis to avoid flicker
      if (bestId !== activeTab && best >= 0.35) setActiveTab(bestId);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(selectMostVisible);
    };

    // attach to both roots so desktop/mobile both covered
    (rootEl ?? window).addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // initial sync
    selectMostVisible();

    return () => {
      (rootEl ?? window).removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [scrollContainerRef.current]); // only rewire if the scrolling root changes

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);

      // Clean up and reinitialize
      cleanupStackCards();
      // Add a small delay to ensure DOM is ready
      setTimeout(() => {
        initStackCardsEffect();
      }, 100);
    };

    // Initial setup
    const desktop = window.innerWidth >= 1024;
    setIsDesktop(desktop);

    // Initialize only if not reduced motion and after a delay to ensure DOM is ready
    if (!osHasReducedMotion()) {
      setTimeout(() => {
        initStackCardsEffect();
      }, 200);
    }

    // Set up resize listener
    let resizeTimeout: NodeJS.Timeout;
    const resizeListener = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 500);
    };

    window.addEventListener('resize', resizeListener);

    // Clean up
    return () => {
      cleanupStackCards();
      window.removeEventListener('resize', resizeListener);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, [isDesktop, activeTab]);

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

  // Initialize items ref
  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      if (stackCardsRef.current) {
        itemsRef.current = Array.from(
          stackCardsRef.current.getElementsByClassName('js-stack-cards__item')
        ) as HTMLLIElement[];

        // Only call setStackCards on mobile to remove classes
        if (!isDesktop && itemsRef.current.length > 0) {
          setStackCards();
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isDesktop]);

  // ✅ Add intersection observer or interval to maintain scale when not scrolling
  useEffect(() => {
    if (!isDesktop) return;
    
    const intervalId = setInterval(() => {
      if (!scrollingRef.current) {
        maintainStackCardsScale();
      }
    }, 16); // Check every 16ms (60fps) when not actively scrolling

    return () => clearInterval(intervalId);
  }, [isDesktop]);


  return (
    <div className="pb_8 sectionPadding bg-[url('../img/bc/revolutionize-bg.png')] bg-cover mobile-padding-bottom-0">
      <section className="sectionPaddingCase pt-0 mobile-padding-bottom-0">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-10 text-center">
              <span className="buttonAnimation yellow inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                Case Studies
              </span>
              <h2 className="tracking-[-0.02em] mb-16 lg:leading-[4rem] md:text-5xl font-semibold headingSize lineHeight-1 text-center">
                Every Agent, Built to Perform
              </h2>
            </div>
          </div>
          <div className="container">
            <div className="row tabSection">
              <div className="col-xl-5 col-lg-12 col-md-12">
                <div className="px-md-3 rounded scroll2 right-column hideOnipad">
                  <p className="paraColor subHeading">
                    Your team spends 40% of their time answering repeat
                    questions, chasing status updates, and managing delays.
                    Kogents AI wipes that clean.
                  </p>

                  <div className="d-flex align-items-start mt-2">
                    <div
                      className="d-flex nav d-grid flex-column nav-pills me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <Link
                        className={`nav-link scrollAnchor ps-3 ${activeTab === "tabScroll1" ? "active2" : ""}`}
                        href="#tabScroll1"
                        onClick={(e) => e.preventDefault()}
                      >
                        WhatsApp AI Agent
                      </Link>
                      <Link
                        className={`nav-link scrollAnchor ps-3 ${activeTab === "tabScroll2" ? "active2" : ""}`}
                        href="#tabScroll2"
                        onClick={(e) => e.preventDefault()}
                      >
                        Phone AI Agent
                      </Link>
                      <Link
                        className={`nav-link scrollAnchor ps-3 ${activeTab === "tabScroll3" ? "active2" : ""}`}
                        href="#tabScroll3"
                        onClick={(e) => e.preventDefault()}
                      >
                        Shopify AI Agent
                      </Link>
                      <Link
                        className={`nav-link scrollAnchor ps-3 ${activeTab === "tabScroll4" ? "active2" : ""}`}
                        href="#tabScroll4"
                        onClick={(e) => e.preventDefault()}
                      >
                        AI Assistant App
                      </Link>
                      <Link
                        className={`nav-link scrollAnchor ps-3 ${activeTab === "tabScroll5" ? "active2" : ""}`}
                        href="#tabScroll5"
                        onClick={(e) => e.preventDefault()}
                      >
                        Voice + Chatbot Agents
                      </Link>
                      <Link
                        className={`nav-link scrollAnchor ps-3 ${activeTab === "tabScroll6" ? "active2" : ""}`}
                        href="#tabScroll6"
                        onClick={(e) => e.preventDefault()}
                      >
                        Standalone AI Agent
                      </Link>

                    </div>
                  </div>
                  <div className="col-12 text-center mt-4">
                    <button
                      className="text-light buttonAnimation2 flex justify-center green items-center gap-2 mt-4 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit open-modal-btn"
                      onClick={openModal}
                    >
                      Request Demo
                      <ArrowRightIcon/>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-12 col-md-12 text-light">
                <div className="px-4 tabBgbox" ref={scrollContainerRef}>
                  <ul
                    className="service-scrollerArea stack-cards js-stack-cards"
                    id="serviceScrollerArea"
                    ref={stackCardsRef}
                  >
                    {/* WhatsApp AI Agent */}
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll1"
                    >
                      <div className="row rowGap scrollerItem py-4" style={{ minHeight: '400px' }}>
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> WhatsApp AI Agent
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Turn Conversations into Revenue on the World's
                              Most Active Messaging App
                            </h3>
                            <p className="text-white">
                              Your WhatsApp AI Agent replies in real time,
                              detects high-intent behavior, and nurtures
                              customers through every stage of the funnel —
                              without you typing a word.
                            </p>

                            <h3 className="heading1">
                              Fast Answers. Smarter Follow-Ups. Full Coverage.
                            </h3>

                            <p>
                              From product inquiries to payment reminders, this
                              agent handles it all instantly using your
                              knowledge base, ticket history, and real-time
                              business logic.
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/iconss.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/icon2.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/icon3.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Follows up automatically when Shopify agent
                              detects cart abandonment
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Escalates chats to Phone Agent when urgency is
                              high
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Updates CRM after conversations using Standalone
                              Agent logic
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Triggers Voice Agent callbacks for verification or
                              follow-up sales
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Phone AI Agent */}
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll2"
                    >
                      <div className="row rowGap scrollerItem py-4" style={{ minHeight: '400px' }}>
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> Phone AI Agent
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Every Call Answered, Routed, and Resolved — No
                              Waiting, No Voicemail
                            </h3>
                            <p className="text-white">
                              With human-sounding voice AI, your phone agent
                              picks up 24/7, handles routine inquiries, books
                              appointments, and transfers complex issues to the
                              right human.
                            </p>

                            <h3 className="heading1">
                              No Missed Opportunities, No Repetition — Just
                              Resolution at Scale
                            </h3>

                            <p>
                              Built to mirror your tone and powered by real
                              data, it brings down hold times and clears up your
                              team's schedule without sacrificing service
                              quality.
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/iconss.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/icon2.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/icon3.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Connects with WhatsApp Agent to follow up on
                              missed or dropped call
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Books meetings directly into your Google Calendar
                              via Assistant App
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Sends post-call summaries to Standalone Agent for
                              future insights
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Flags high-volume issues to Chatbot Agent for
                              proactive site messaging
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Shopify AI Agent */}
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll3"
                    >
                      <div className="row rowGap scrollerItem py-4" style={{ minHeight: '400px' }}>
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> Shopify AI Agent
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              From Cart to Confirmation — This Agent Owns the
                              Post-Sale Journey
                            </h3>
                            <p className="text-white">
                              Whether it's order status, refund requests, or
                              shipping delays, your Shopify AI Agent handles
                              them instantly by syncing with your store data in
                              real time.
                            </p>

                            <h3 className="heading1">
                              More Orders Completed, Fewer Tickets Created
                            </h3>

                            <p>
                              By resolving customer issues before they ever hit
                              your support team, it not only saves hours — it
                              boosts satisfaction and retention where it matters
                              most.
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/iconss.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/icon2.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/icon3.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Flags abandoned checkouts for WhatsApp Agent to
                              follow up
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Syncs with Voice Agent to resolve high-friction
                              returns
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Surfaces product feedback to Assistant App for
                              on-the-go reviews
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Notifies Chatbot Agent to update product FAQs
                              automatically
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* AI Assistant App */}
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll4"
                    >
                      <div className="row rowGap scrollerItem py-4" style={{ minHeight: '400px' }}>
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> AI Assistant App
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              The Smartest Teammate in Your Pocket — Always
                              Ready, Always Synced
                            </h3>
                            <p className="text-white">
                              Whether you're in the field, remote, or in-store,
                              your Assistant App gives you instant access to
                              internal data, documents, and workflows — using
                              voice or text.
                            </p>

                            <h3 className="heading1">
                              Work Faster, Smarter, and from Anywhere Without
                              Logging Into Anything
                            </h3>

                            <p>
                              This mobile-first agent transforms how you
                              interact with your backend: need a document,
                              insight, or task managed? Just ask — it's already
                              done.
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/iconss.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/icon2.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/icon3.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Pulls live customer context from Chatbot Agent
                              when updates are needed
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Logs answers from Voice Agent for internal
                              knowledge access
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Adds calendar events triggered by Phone Agent
                              bookings
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Syncs insights from Standalone Agent to update
                              playbooks on the go
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Voice + Chatbot Agents */}
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll5"
                    >
                      <div className="row rowGap scrollerItem py-4" style={{ minHeight: '400px' }}>
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> Voice + Chatbot Agents
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Your Always-On Brand Voice, No Matter How People
                              Reach You
                            </h3>
                            <p className="text-white">
                              Whether it's a voice command or a typed question,
                              this hybrid agent delivers answers that feel
                              human, contextual, and instantly accurate across
                              all channels.
                            </p>

                            <h3 className="heading1">
                              Reduce Human Load, Raise Response Quality — 24/7,
                              Multilingual, Multiplatform
                            </h3>

                            <p>
                              Trained on real conversations and support history,
                              these agents not only talk — they listen, learn,
                              and adapt to every interaction in real time.
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/iconss.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/icon2.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/icon3.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Detects trending questions and signals Assistant
                              App to update support scripts
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Collaborates with Phone Agent to handle
                              language-specific inquiries
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Pushes recurring feedback to Shopify Agent for
                              product improvement
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Syncs resolved tickets with WhatsApp Agent for
                              follow-up or upsell offers
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Standalone AI Agent */}
                    <li
                      className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                      id="tabScroll6"
                    >
                      <div className="row rowGap scrollerItem py-4" style={{ minHeight: '400px' }}>
                        <div className="col-md-6 d-flex flex-column">
                          <button className="hrButton">
                            <span>.</span> Standalone AI Agent
                          </button>
                          <div className="margin-20 h_fit">
                            <h3 className="heading1">
                              Deploy One Link and Deliver Full-Service AI — No
                              Platform Needed
                            </h3>
                            <p className="text-white">
                              Whether you're running lean or building fast, this
                              browser-based agent handles customer queries,
                              sales, and workflows independently — just plug and
                              launch.
                            </p>

                            <h3 className="heading1">
                              Perfect for Onboarding, Support, Sales, or
                              Internal Use — It Adapts to Your Flow
                            </h3>

                            <p>
                              It learns from each interaction, pulls data from
                              integrated tools, and evolves to support every
                              part of your business with zero dev effort.
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/iconss.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/icon2.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                              <div className="greyIcon">
                                <Image 
                                  src="/assets/img/icon3.png" 
                                  alt="icon" 
                                  width={30} 
                                  height={30}
                                  style={{ width: '30px', height: '30px' }}
                                  priority={false}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Agentic Workflow</h4>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/iconss.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Shares real-time feedback to Chatbot Agent for web
                              knowledge accuracy
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Informs Phone Agent of user preferences before
                              callbacks
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon3.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Pushes lead data to WhatsApp Agent for nurturing
                            </p>
                          </div>
                          <div className="tabBox">
                            <div>
                              <Image src="/assets/img/icon2.png" alt="icon" width={30} height={30} />
                            </div>
                            <p>
                              Feeds insights into Assistant App for mobile
                              access and action
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