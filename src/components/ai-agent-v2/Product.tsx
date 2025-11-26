"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { BrowserView } from "react-device-detect";

gsap.registerPlugin(ScrollTrigger);

// Brand logos data array
const brandLogos = [
  {
    id: 1,
    src: "/assets/img/brand/1.svg",
    alt: "Brand Logo 1"
  },
  {
    id: 2,
    src: "/assets/img/brand/2.svg",
    alt: "Brand Logo 2"
  },
  {
    id: 3,
    src: "/assets/img/brand/3.svg",
    alt: "Brand Logo 3"
  },
  {
    id: 4,
    src: "/assets/img/brand/4.svg",
    alt: "Brand Logo 4"
  },
  {
    id: 5,
    src: "/assets/img/brand/5.svg",
    alt: "Brand Logo 5"
  }
];

const Product = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".visual-tilt-content",
      {
        scale: 0.6,
        transformOrigin: "center center",
      },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#sectionTilt",
          start: "top 95%",
          end: "bottom 90%",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section_product-image w-layout-blockcontainer1 wrapper d-none"
      id="sectionTilt"
    >
      <BrowserView>
        <div className="container">
          <div className="position-relative">
            <div className="bg_product-bg is_bottom"></div>
            <div
              className="bg_product-image tilt-card pt-0 visual-tilt-content"
              data-w-id="42972b79-e7c6-eecc-50b0-3013e4dfdf0d"
              style={{ scale: 0.6, transition: "ease-in-out" }}
            >
              {/* Chat Mockup Container */}
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '600px', gap: '2rem', flexWrap: 'wrap' }}>
                
                {/* AI Assistant Chat */}
                <div className="service-phone-mockup" style={{ 
                  width: '280px', 
                  height: '500px', 
                  background: 'linear-gradient(135deg, #5D51AF 0%, #8B7ED8 100%)',
                  borderRadius: '25px',
                  padding: '20px',
                  boxShadow: '0 20px 40px rgba(93, 81, 175, 0.3)',
                  position: 'relative'
                }}>
                  <div className="phone-screen" style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    height: '100%',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div className="phone-header" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '20px',
                      paddingBottom: '15px',
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      <div style={{
                        width: '35px',
                        height: '35px',
                        background: 'linear-gradient(135deg, #5D51AF 0%, #8B7ED8 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '16px'
                      }}>🤖</div>
                      <span style={{ fontWeight: '600', color: '#333', fontSize: '16px' }}>AI Assistant</span>
                    </div>
                    <div className="phone-messages" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div className="phone-message" style={{
                        background: '#f8f9fa',
                        padding: '12px 16px',
                        borderRadius: '18px 18px 18px 4px',
                        color: '#333',
                        fontSize: '14px',
                        maxWidth: '80%'
                      }}>Hello! How can I help?</div>
                      <div className="phone-message user-msg" style={{
                        background: 'linear-gradient(135deg, #5D51AF 0%, #8B7ED8 100%)',
                        padding: '12px 16px',
                        borderRadius: '18px 18px 4px 18px',
                        color: 'white',
                        fontSize: '14px',
                        maxWidth: '80%',
                        alignSelf: 'flex-end'
                      }}>I need support</div>
                      <div className="phone-message" style={{
                        background: '#f8f9fa',
                        padding: '12px 16px',
                        borderRadius: '18px 18px 18px 4px',
                        color: '#333',
                        fontSize: '14px',
                        maxWidth: '80%'
                      }}>I'm here to assist you...</div>
                    </div>
                  </div>
                </div>

                {/* AI Scheduler Chat */}
                <div className="service-phone-mockup" style={{ 
                  width: '280px', 
                  height: '500px', 
                  background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                  borderRadius: '25px',
                  padding: '20px',
                  boxShadow: '0 20px 40px rgba(40, 167, 69, 0.3)',
                  position: 'relative'
                }}>
                  <div className="phone-screen" style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    height: '100%',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div className="phone-header" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '20px',
                      paddingBottom: '15px',
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      <div style={{
                        width: '35px',
                        height: '35px',
                        background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '16px'
                      }}>📅</div>
                      <span style={{ fontWeight: '600', color: '#333', fontSize: '16px' }}>AI Scheduler</span>
                    </div>
                    <div className="phone-messages" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div className="phone-message" style={{
                        background: '#f8f9fa',
                        padding: '12px 16px',
                        borderRadius: '18px 18px 18px 4px',
                        color: '#333',
                        fontSize: '14px',
                        maxWidth: '80%'
                      }}>Schedule your appointment</div>
                      <div className="phone-message user-msg" style={{
                        background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                        padding: '12px 16px',
                        borderRadius: '18px 18px 4px 18px',
                        color: 'white',
                        fontSize: '14px',
                        maxWidth: '80%',
                        alignSelf: 'flex-end'
                      }}>Book meeting</div>
                      <div className="phone-message" style={{
                        background: '#f8f9fa',
                        padding: '12px 16px',
                        borderRadius: '18px 18px 18px 4px',
                        color: '#333',
                        fontSize: '14px',
                        maxWidth: '80%'
                      }}>Available slots found...</div>
                    </div>
                  </div>
                </div>

                {/* AI Sales Chat */}
                <div className="service-phone-mockup" style={{ 
                  width: '280px', 
                  height: '500px', 
                  background: 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)',
                  borderRadius: '25px',
                  padding: '20px',
                  boxShadow: '0 20px 40px rgba(220, 53, 69, 0.3)',
                  position: 'relative'
                }}>
                  <div className="phone-screen" style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    height: '100%',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div className="phone-header" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '20px',
                      paddingBottom: '15px',
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      <div style={{
                        width: '35px',
                        height: '35px',
                        background: 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '16px'
                      }}>💼</div>
                      <span style={{ fontWeight: '600', color: '#333', fontSize: '16px' }}>AI Sales</span>
                    </div>
                    <div className="phone-messages" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div className="phone-message" style={{
                        background: '#f8f9fa',
                        padding: '12px 16px',
                        borderRadius: '18px 18px 18px 4px',
                        color: '#333',
                        fontSize: '14px',
                        maxWidth: '80%'
                      }}>Looking for solutions?</div>
                      <div className="phone-message user-msg" style={{
                        background: 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)',
                        padding: '12px 16px',
                        borderRadius: '18px 18px 4px 18px',
                        color: 'white',
                        fontSize: '14px',
                        maxWidth: '80%',
                        alignSelf: 'flex-end'
                      }}>Show pricing</div>
                      <div className="phone-message" style={{
                        background: '#f8f9fa',
                        padding: '12px 16px',
                        borderRadius: '18px 18px 18px 4px',
                        color: '#333',
                        fontSize: '14px',
                        maxWidth: '80%'
                      }}>Here are our packages...</div>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Background decoration */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'linear-gradient(135deg, rgba(93, 81, 175, 0.05) 0%, rgba(139, 126, 216, 0.05) 100%)',
                borderRadius: '20px',
                zIndex: '-1'
              }}></div>
            </div>
          </div>
        </div>
      </BrowserView>

      <section className="newSection pb-0 mask">
        <div className="hero-brand overflow-hidden whitespace-nowrap relative w-full lg:max-w-[62.5rem] mx-auto">
          <div className="inline-flex logo_items animate-slides">
            {/* First set of logos */}
            {brandLogos.map((logo) => (
              <Image
                key={`first-${logo.id}`}
                src={logo.src}
                alt={logo.alt}
                className="mx-4"
                width={800}
                height={600}
                priority
                style={{ width: 'auto', height: 'auto' }}
              />
            ))}
            {/* Duplicate logos for seamless loop */}
            {brandLogos.map((logo) => (
              <Image
                key={`duplicate-${logo.id}`}
                src={logo.src}
                alt={logo.alt}
                className="mx-4"
                width={800}
                height={600}
                style={{ width: 'auto', height: 'auto' }}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Product;
