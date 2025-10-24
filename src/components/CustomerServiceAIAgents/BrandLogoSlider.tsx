import Image from 'next/image'
import React from 'react'

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
]

const BrandLogoSlider = () => {
  return (
    <>
      <section>
        <div className="text-center mb-8">
          <span className="buttonAnimation pink inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo mb-6">
            Customers
          </span>
        </div>
        <div className="hero-brand overflow-hidden whitespace-nowrap relative w-full lg:max-w-[62.5rem] mx-auto">
          <div className="inline-flex logo_items item-scroll-left">
            {/* First set of logos with priority loading */}
            {brandLogos.map((logo, index) => (
              <Image
                key={`first-${logo.id}`}
                src={logo.src}
                alt={logo.alt}
                className="mx-4"
                width={200}
                height={100}
                priority={index < 3} 
                style={{ width: '100%', height: 'auto' }}
              />
            ))}
            {/* Duplicate logos for seamless loop */}
            {brandLogos.map((logo) => (
              <Image
                key={`duplicate-${logo.id}`}
                src={logo.src}
                alt={logo.alt}
                className="mx-4"
                width={200}
                height={100}
                style={{ width: '100%', height: 'auto' }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BrandLogoSlider