import Image from "next/image";
import React from "react";

interface Brand {
    src: string;
    alt?: string;
}

interface AboutUsBanner1Props {
    tag?: string;
    heading?: string;
    description?: string;
    brands?: Brand[];
    showSlider?: boolean;
    className?: string;
}

const defaultBrands: Brand[] = [
    { src: "/assets/img/brand/1.svg", alt: "brand" },
    { src: "/assets/img/brand/2.svg", alt: "brand" },
    { src: "/assets/img/brand/3.svg", alt: "brand" },
    { src: "/assets/img/brand/4.svg", alt: "brand" },
    { src: "/assets/img/brand/5.svg", alt: "brand" },
];

const AboutUsBanner1: React.FC<AboutUsBanner1Props> = ({
    tag = "About Us",
    heading = "Who We Are",
    description = "At Kogents, we build intelligent AI agents that help organizations everywhere work smarter, faster, and more efficiently. Our mission is to empower teams to reach their full potential by automating routine tasks, simplifying workflows, and creating seamless customer experiences, all without the need to grow headcount.",
    brands = defaultBrands,
    showSlider = true,
    className = "",
}) => {
    return (
        <div className={`sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')] relative contactBanner ${className}`}>
            <div className="container px-5 mx-auto xl:px-0">
                <span className="buttonAnimation purple width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
                    {tag}
                </span>
                <h2 className="text-center text-light headingSize">
                    {heading}
                    <span className="inline-block lg:block"> </span>
                </h2>
                <p className="mx-auto mt-2 text-base text-center md:text-xl text-b-100 mb-1 text-light">
                    {description.split('\n').map((line, idx) => (
                        <span key={idx}>
                            {line}
                            {idx !== description.split('\n').length - 1 && <br />}
                        </span>
                    ))}
                </p>
                {showSlider && (
                    <div className="hero-brand overflow-hidden whitespace-nowrap relative w-full lg:max-w-[1000px] mx-auto aboutBrandSlide">
                        <div className="inline-flex logo_items animate-slides">
                            {brands.map((brand, idx) => (
                                <Image
                                    key={`brand1-${idx}`}
                                    src={brand.src}
                                    alt={brand.alt || "brand"}
                                    className="mx-4"
                                    height={100}
                                    width={200}
                                    loading="lazy"
                                />
                            ))}
                        </div>
                        <div className="inline-flex lg:ml-20 logo_items animate-slides">
                            {brands.map((brand, idx) => (
                                <Image
                                    key={`brand2-${idx}`}
                                    src={brand.src}
                                    alt={brand.alt || "brand"}
                                    className="mx-4"
                                    height={100}
                                    width={200}
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AboutUsBanner1;
