import Image from 'next/image';
const KogentBenefits = () => {
    return (
        <div
            id="benefitsSection"
            className="pt-0 paddingOnMobile2 sectionPadding bg-center bg-no-repeat bg-cover bg-[url('/assets/img/bc/video-bg.webp')]"
        >
            <div className="container px-5 mx-auto xl:px-0">
                <div className="flex flex-col items-center justify-center">
                    {/* <span

                        className="buttonAnimation yellow inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
                    >
                        Benefits
                    </span>
                    <h2

                        className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize"
                    >
                        The Final Pitch
                    </h2>
                    <p

                        className="w-75 mb-16 text-center paraColor subHeading"
                    >
                        You don’t need to hire more people to grow.
                    </p>
                    <p

                        className="w-75 mb-16 text-center paraColor subHeading"
                    >
                        You need to deploy AI that thinks, acts, and adapts like a team — instantly.
                    </p> */}
                    <div className="row appMain mt-4 rowGap home">
                        {/* Left column */}
                        <div className="col-md-7 p-md-0 appMainFirst">
                            <div className="p-md-5">
                                <span
                                    className="buttonAnimation inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
                                >
                                    Start Now
                                </span>
                                <h2 className="text-light mt-2">The Final Pitch</h2>
                                <p className="text-light mt-2">
                                    You don’t need to hire more people to grow.
                                </p>
                                <p className='text-light w-75 mt-0'>
                                    You need to deploy AI that thinks, acts, and adapts like a team, instantly.
                                </p>

                                <div
                                    className="d-flex align-items-center gap-3 mt-2 position-relative flex-md-nowrap flex-wrap home appstoreMain"
                                    style={{ width: "100%" }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Image
                                            loading="lazy"
                                            width={160}
                                            src="/assets/img/app-section/6.png"
                                            alt="App Store"
                                            height={60}
                                            style={{ width: '160px', height: '60px', objectFit: 'contain', marginTop: '10px' }}
                                            priority={false}
                                        />
                                        <span style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>Coming Soon</span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Image
                                            loading="lazy"
                                            width={160}
                                            src="/assets/img/app-section/7.png"
                                            alt="Google Play"
                                            height={60}
                                            style={{ width: '160px', height: '60px', objectFit: 'contain', marginTop: '10px' }}
                                            priority={false}
                                        />
                                        <span style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>Coming Soon</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="col-md-5 p-md-0">
                            <div>
                                <Image
                                    loading="lazy"
                                    className="appImage home"
                                    src="/assets/img/img-new.webp"
                                    alt="App Preview"
                                    width={800}
                                    height={600}
                                    style={{ width: '100%', height: 'auto' }}
                                    priority={false}
                                />
                                <div className="qrCode text-light">
                                    <Image
                                        loading="lazy"
                                        src="/assets/img/app-section/5.png"
                                        alt="QR Code"
                                        width={150}
                                        height={150}
                                        style={{ width: '150px', height: '150px', objectFit: 'contain' }}
                                        priority={false}
                                    />
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