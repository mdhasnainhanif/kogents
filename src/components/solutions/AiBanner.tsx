export default function AiBanner() {
    return (
        <div
            className="position-relative sectionPadding bg-center bg-no-repeat bg-cover bannerShadowCenter"
            id="aiBanner"
        >
            <div className="container px-5 mx-auto xl:px-0">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-7">
                        <div className="flex flex-col items-center justify-center">
                            <p
                                // data-aos="fade-up"
                                className="subHeading">
                                Ready to assist your customers with
                            </p>
                            <h1
                                // data-aos="fade-up"

                                className="text-center mt-2 mb-6 headingSize "
                            >
                                7,000+ Specialized AI Agents for B2B Excellence
                            </h1>
                            <p
                                // data-aos="fade-up"

                                className="mb-8 paraColor text-base md:text-xl text-w-100 text-center"
                            >
                                Strengthen every client touchpoint, streamline operations, and
                                scale support functions using our robust suite of Kogents AI
                                agents. Built for teams, optimized for enterprise efficiency.
                            </p>
                            <div className="w_fit mx-auto d-flex flex-wrap gap-4 solutionSearchMain">
                                {/* 
                <div className="searchInputMain">
                  <input className="searchInput" type="text" placeholder="Search..." />
                  <img src="{{ asset('frontend/assets/img/search.svg') }}" alt="arrow" />
                </div> 
                */}
                                <a
                                    href="javascript:void(0);"
                                    className="w_fit searchBtn buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                                    data-modal-target="#welcomeModal"
                                >
                                    Enhance performance across CX, operations, and technical
                                    support.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
