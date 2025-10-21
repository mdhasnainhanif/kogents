import React from "react";

interface SecurityBanner1Props {
    tag?: string;
    heading: string;
    description: string;
    buttonText?: string;
    imageSrc?: string;
    onButtonClick?: () => void;
    buttonColor?: string;
    noBgImage?: boolean;
}

const SecurityBanner1: React.FC<SecurityBanner1Props> = ({
    tag = "Security",
    heading = "Agentic Automation with the Best-in-Class Security Protocols",
    description = "The world is new to agentic automation; hence, we have left no stone unturned in our quest to provide the safest experience possible.",
    buttonText = "Go to Trust Center",
    imageSrc = "",
    onButtonClick,
    buttonColor = "bg-gd-secondary text-w-900", // default color classes
    noBgImage = false,
}) => {
    return (
        <div className={`sectionPadding relative contactBanner${noBgImage ? '' : ' bg-center bg-no-repeat bg-cover bg-[url(../img/bc/hero-bgtwo.png)]'}`}>
            <div className="container px-5 mx-auto xl:px-0">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <span className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
                            {tag}
                        </span>
                        <h2 className="text-center text-light headingSize">{heading}</h2>
                        <p className="mt-6 text-base text-center md:text-xl text-light">
                            {description}
                        </p>
                        <button
                            className={`buttonAnimation2 text-light mx-auto mt-4 flex justify-center pink items-center gap-2 lg:mb-14 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium ${buttonColor}`}
                            onClick={onButtonClick}
                        >
                            {buttonText}
                        </button>
                        {imageSrc && (
                            <img className="mt-4 mx-auto" width={500} height={285} src={imageSrc} alt="banner" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecurityBanner1;
