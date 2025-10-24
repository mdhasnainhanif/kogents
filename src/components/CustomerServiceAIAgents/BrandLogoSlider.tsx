import Image from 'next/image'
import React from 'react'

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
            <Image
              src="/assets/img/brand/1.svg"
              alt="brand1"
              className="mx-4"
              width={200}
              height={100}
            />
            <Image
              src="/assets/img/brand/2.svg"
              alt="brand2"
              className="mx-4"
              width={200}
              height={100}
            />
            <Image
              src="/assets/img/brand/3.svg"
              alt="brand3"
              className="mx-4"
              width={200}
              height={100}
            />
            <Image
              src="/assets/img/brand/4.svg"
              alt="brand4"
              className="mx-4"
              width={200}
              height={100}
            />
            <Image
              src="/assets/img/brand/5.svg"
              alt="brand5"
              className="mx-4"
              width={200}
              height={100}
            />
            {/* Duplicate logos for seamless loop */}
            <Image
              src="/assets/img/brand/1.svg"
              alt="brand1"
              className="mx-4"
              width={200}
              height={100}
            />
            <Image
              src="/assets/img/brand/2.svg"
              alt="brand2"
              className="mx-4"
              width={200}
              height={100}
            />
            <Image
              src="/assets/img/brand/3.svg"
              alt="brand3"
              className="mx-4"
              width={200}
              height={100}
            />
            <Image
              src="/assets/img/brand/4.svg"
              alt="brand4"
              className="mx-4"
              width={200}
              height={100}
            />
            <Image
              src="/assets/img/brand/5.svg"
              alt="brand5"
              className="mx-4"
              width={200}
              height={100}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default BrandLogoSlider