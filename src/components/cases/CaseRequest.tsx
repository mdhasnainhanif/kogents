import React from "react";

interface CaseRequestProps {
    tag?: string;
    heading: string;
    description: string;
    buttonText?: string;
    imageSrc?: string;
    onButtonClick?: () => void;
    buttonColor?: string;
}

const CaseRequest: React.FC<CaseRequestProps> = ({
    tag = "Security",
    heading = "Agentic Automation with the Best-in-Class Security Protocols",
    description = "The world is new to agentic automation; hence, we have left no stone unturned in our quest to provide the safest experience possible.",
    buttonText = "Go to Trust Center",
    onButtonClick,
    buttonColor = "bg-gd-secondary text-w-900", // default color classes
}) => {
    return (
        <div className="sectionPadding">
            <div className="container px-5 mx-auto xl:px-0">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <span className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
                            {tag}
                        </span>
                        <h1 className="text-center text-light headingSize">{heading}</h1>
                        <p className="mt-6 text-base text-center md:text-xl text-light">
                            {description}
                        </p>
                        <button
                            className={`buttonAnimation2 text-light mx-auto mt-4 flex justify-center pink items-center gap-2 lg:mb-14 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium ${buttonColor}`}
                            onClick={onButtonClick}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseRequest;
