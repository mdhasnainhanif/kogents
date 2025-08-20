'use client';
import Image from 'next/image';

const ProductSection = () => {

  return (
    <section
      className="section_product-image w-layout-blockcontainer1 wrapper"
      id="sectionTilt"
    >
      <div className="container">
        <div className="position-relative">
          <div className="bg_product-bg is_bottom"></div>
          <div
            data-w-id="42972b79-e7c6-eecc-50b0-3013e4dfdf0d"
            className="bg_product-image tilt-card pt-0 visual-tilt-content"
          >
            <Image
              src="/assets/img/erp-011.svg"
              loading="lazy"
              alt="erp"
              className="image_product-cards"
             width={800} height={600} />
            <Image
              src="/assets/img/back-img.svg"
              loading="lazy"
              alt="background"
              className="image_product-bg"
             width={800} height={600} />
          </div>
        </div>
      </div>

      <section className="newSection pb-0">
        <div
          // data-aos="fade-up"
          className="hero-brand overflow-hidden whitespace-nowrap relative w-full lg:max-w-[62.5rem] mx-auto"
        >
          <div className="inline-flex logo_items animate-slides">
            <Image src="/assets/img/brand/1.svg" alt="brand1" className="mx-4"  width={800} height={600} />
            <Image src="/assets/img/brand/2.svg" alt="brand2" className="mx-4"  width={800} height={600} />
            <Image src="/assets/img/brand/3.svg" alt="brand3" className="mx-4"  width={800} height={600} />
            <Image src="/assets/img/brand/4.svg" alt="brand4" className="mx-4"  width={800} height={600} />
            <Image src="/assets/img/brand/5.svg" alt="brand5" className="mx-4"  width={800} height={600} />
            <Image src="/assets/img/brand/1.svg" alt="brand1" className="mx-4"  width={800} height={600} />
            <Image src="/assets/img/brand/2.svg" alt="brand2" className="mx-4"  width={800} height={600} />
            <Image src="/assets/img/brand/3.svg" alt="brand3" className="mx-4"  width={800} height={600} />
            <Image src="/assets/img/brand/4.svg" alt="brand4" className="mx-4"  width={800} height={600} />
            <Image src="/assets/img/brand/5.svg" alt="brand5" className="mx-4"  width={800} height={600} />
          </div>
        </div>
      </section>
    </section>

  );
};

export default ProductSection;
