import Image from 'next/image';
const AgentOS = () => {
    return (
        <div
            className="d-none d-sm-block lg:py-24 py-8 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/updates&media-bg.png')] pt0Mobile"
        >
            <div className="container px-5 mx-auto xl:px-0">
                <span
                    // data-aos="fade-up"
                    className="buttonAnimation width_fit purple d-block px-4 py-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo mx-auto"
                >
                    Agent OS
                </span>
                <h2
                    // data-aos="fade-up"
                    className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize"
                >
                    Autonomous Doesn&apos;t Mean Isolated
                </h2>
                <p
                    className="w-75 mb-16 text-center m-auto mt-3 subHeading paraColor"
                    // data-aos="fade-up"
                >
                    Your AI Agents share signals&#44; escalate across channels&#44; and optimize
                    workflows together. Think of it as a mesh network of AI — tailored to your
                    business.
                </p>
                <div className="rainbowImage">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img1">
                                <div className="img1InnerDiv"></div>
                                <div className="bothImgMain">
                                    <Image src="/assets/img/t1.png" alt=""  width={80} height={80} />
                                    <Image className="boxSvg" src="/assets/img/box-01.svg" alt=""  width={800} height={600} />
                                    <p className="boxSvgText">Email Triage Ai Agent</p>
                                </div>
                            </div>
                            <div className="img2">
                                <div className="bothImgMain">
                                    <Image src="/assets/img/t2.png" alt=""  width={80} height={80} />
                                    <Image className="boxSvg" src="/assets/img/box-01.svg" alt=""  width={800} height={600} />
                                    <p className="boxSvgText">Customer Service Ai Agent</p>
                                </div>
                            </div>
                            <div className="img3">
                                <div className="bothImgMain">
                                    <Image src="/assets/img/t3.png" alt=""  width={80} height={80} />
                                    <Image className="boxSvg" src="/assets/img/box-01.svg" alt=""  width={800} height={600} />
                                    <p className="boxSvgText">Data Extraction Ai Agent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <div className="img4">
                                <div className="bothImgMain">
                                    <Image src="/assets/img/t4.png" alt=""  width={80} height={80} />
                                    <Image className="boxSvg" src="/assets/img/box-01.svg" alt=""  width={800} height={600} />
                                    <p className="boxSvgText">Order Management Ai Agent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img5">
                                <div className="bothImgMain">
                                    <Image src="/assets/img/t5.png" alt=""  width={80} height={80} />
                                    <Image className="boxSvg" src="/assets/img/box-01.svg" alt=""  width={800} height={600} />
                                    <p className="boxSvgText">Sales Operation Ai Agent</p>
                                </div>
                            </div>
                            <div className="img6">
                                <div className="bothImgMain">
                                    <Image src="/assets/img/t6.png" alt=""  width={80} height={80} />
                                    <Image className="boxSvg" src="/assets/img/box-01.svg" alt=""  width={800} height={600} />
                                    <p className="boxSvgText">Sales Manager</p>
                                </div>
                            </div>
                            <div className="img7">
                                <div className="bothImgMain">
                                    <Image src="/assets/img/t7.png" alt=""  width={80} height={80} />
                                    <Image className="boxSvg" src="/assets/img/box-01.svg" alt=""  width={800} height={600} />
                                    <p className="boxSvgText">Product Listing Ai Agent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}   

export default AgentOS;