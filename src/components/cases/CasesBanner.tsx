
"use client";
import { useModalStore } from "@/stores/useModalStore";
import React from "react";
import Breadcrumb from "../Breadcrumb";

interface CassesBannerProps {
    tag?: string;
    heading: string;
    description: string;
    buttonText?: string;
    imageSrc?: string;
    onButtonClick?: () => void;
    buttonColor?: string;
}


const CassesBanner: React.FC<CassesBannerProps> = ({
    tag = "Security",
    heading = "Agentic Automation with the Best-in-Class Security Protocols",
    description = "The world is new to agentic automation; hence, we have left no stone unturned in our quest to provide the safest experience possible.",
    buttonText = "Go to Trust Center",
    buttonColor = "bg-gd-secondary text-w-900",
}) => {
    const openModal = useModalStore((state) => state.openModal);
    const breadcrumbItems = [
        { label: 'Case Studies', active: true }
    ];
    return (
        <div className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')] relative contactBanner">
            <div className="container px-5 mx-auto xl:px-0">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <span className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
                            {tag}
                        </span>
                        <h1 className="text-center text-light headingSize">{heading}</h1>
                        <p className="text-base text-center md:text-xl text-light">
                            {description}
                        </p>
                        {buttonText && (
                            <button
                                className={`open-modal-btn buttonAnimation2 mb-3 text-light mx-auto mt-4 flex justify-center pink items-center gap-2 lg:mb-14 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium ${buttonColor}`}
                                onClick={openModal}
                            >
                                {buttonText}
                            </button>
                        )}
                    </div>
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </div>
        </div>
    );
};

export default CassesBanner;
