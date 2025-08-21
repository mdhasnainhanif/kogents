import Image from 'next/image';
const KogentBenefits = () => {
    return (
        <div
            id="benefitsSection"
            className="paddingOnMobile2 sectionPadding bg-center bg-no-repeat bg-cover bg-[url('/img/bc/video-bg.webp')]"
        >
            <div className="container px-5 mx-auto xl:px-0">
                <div className="flex flex-col items-center justify-center">
                    <span
                        
                        className="buttonAnimation yellow inline-block px-4 py-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo"
                    >
                        Benefits
                    </span>

                    <h2
                        
                        className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize"
                    >
                        Built for Speed. Trained to Scale.
                    </h2>

                    <p
                        
                        className="w-75 mb-16 text-center paraColor subHeading"
                    >
                        Power every customer touchpoint with intelligent agents that never sleep.
                    </p>
                    <p
                        
                        className="w-75 mb-16 text-center paraColor subHeading"
                    >
                       From voice to chat, they think, learn, and scale — so you don’t have to.
                    </p>

                    <div className="row appMain mt-4 rowGap">
                        {/* Left column */}
                        <div className="col-md-7 p-md-0 appMainFirst">
                            <div className="p-md-5">
                                <span
                                    
                                    className="buttonAnimation inline-block px-4 py-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo"
                                >
                                    Trusted By Many Clients
                                </span>

                                <h2 className="text-light mt-2">Kogents AI Agent App</h2>
                                <p className="text-light">
                                    Scan or Visit To Download App Now For Free
                                </p>

                                <div
                                    className="d-flex align-items-center gap-3 mt-2 position-relative flex-md-nowrap flex-wrap appstoreMain"
                                    style={{ width: "100%" }}
                                >
                                    <Image width={160} src="/assets/img/app-section/6.png" alt="App Store"  height={600} />
                                    <Image width={160} src="/assets/img/app-section/7.png" alt="Google Play"  height={600} />
                                </div>
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="col-md-5 p-md-0">
                            <div>
                                <Image className="appImage" src="/assets/img/img.webp" alt="App Preview"  width={800} height={600} />
                                <div className="qrCode text-light">
                                    <Image src="/assets/img/app-section/5.png" alt="QR Code"  width={800} height={600} />
                                    <p className="m-0 mt-1">Scan Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default KogentBenefits;