import Image from "next/image";
import React from "react";

const ContactSection = () => {
  return (
    <div className="lg:py-24 py-8 bg-center bg-no-repeat bg-cover bg-[url('img/bc/contact-bg.png')]">
      <div className="container">
        <div className="row rowGap">
          {/* Left Column */}
          <div className="col-lg-6 contact_boxes_height">
            {/* Contact Box 1 */}
            <div className="contactBox border rounded-lg md:p-12 bg-gd-tertiary border-b-600 aos-init aos-animate">
              <span
                // 
                className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo mx-auto"
              >
                Find By Industry
              </span>
              <a className="number text-light">+1 405 644 3883</a>
              <p className="text-light h4 text-center mt-2">
                AI Agent Assistance Available
              </p>
              <div className="contactSocial">
                <a
                  className="whatsapp"
                  href="#"
                  style={{ background: "#208459" }}
                >
                  Whatsapp
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/Icons_Whatsapp.svg"
                    alt="icon"
                  />
                </a>
                <a
                  className="messenger"
                  href="#"
                  style={{ background: "#1877f2" }}
                >
                  Messenger
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/Icons_Messenger.svg"
                    alt="icon"
                  />
                </a>
                <a className="Zoom" href="#" style={{ background: "#0046c7" }}>
                  Zoom
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/Icons_Zoom.svg"
                    alt="icon"
                  />
                </a>
                <a className="Voice" href="#" style={{ background: "#252d5b" }}>
                  Voice
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/Icons_Voice.svg"
                    alt="icon"
                  />
                </a>
                <a className="Chat" href="#" style={{ background: "#7923dd" }}>
                  Chat
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/Icons_Chat.svg"
                    alt="icon"
                  />
                </a>
                <a className="Phone" href="#" style={{ background: "#0075e3" }}>
                  Phone
                  <Image
                    width={50}
                    height={50}
                    className="w-full"
                    src="/assets/img/Icons_Phone.svg"
                    alt="icon"
                  />
                </a>
              </div>
            </div>

            {/* Contact Box 2 */}
            <div className="contactBox mt-4 border rounded-lg md:p-12 bg-gd-tertiary border-b-600 aos-init aos-animate">
              <div className="w-75 mx-auto">
                <p className="text-light h3 text-center mt-2 fw-bold">
                  Dedicated Support for Enterprises
                </p>
                <p className="supportText">
                  Jotform Enterprise clients receive real-time support with
                  priority access to our AI engineers. Book a consultation to
                  discuss custom integrations&#44; enterprise-grade AI workflows&#44;
                  and support for cross-functional implementation.
                </p>
                <a
                  href="#"
                  className="w-100 buttonAnimation2 flex justify-center items-center gap-2 px-6 py-[14px] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit mt-3 open-modal-btn"
                  data-modal-target="#welcomeModal"
                >
                  Contact Sales
                  <Image
                    width={25}
                    height={25}
                    src="/assets/img/icons/arrow-right.svg"
                    alt="arrow"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="contactFormMain p-5 w-full md:max-w-[630px] rounded-lg bg-gd-tertiary border border-b-600">
              <h2 className="headingSize mb-1 contactFormHeading">
                Book a <span>Free</span> Consultation
              </h2>
              <p className="text-light">
                Our experts will connect with you to understand your pain
                points&#44; identify automation opportunities&#44; and explore how
                Kogents AI agents can deliver measurable ROI.
              </p>
              <form
                className="flex flex-col gap-3 contactForm"
                id="contact_form2"
              >
                <div className="w-100">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name Here"
                    required
                  />
                  <span className="validation-error text-light d-none"></span>
                </div>
                <div className="w-100">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                  <span className="validation-error text-light d-none"></span>
                </div>
                <div className="w-100">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Your Phone Number"
                    required
                  />
                  <span className="validation-error text-light d-none"></span>
                </div>
                <div className="w-100">
                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    placeholder="Enter your message here"
                    required
                  ></textarea>
                  <span className="validation-error text-light d-none"></span>
                </div>
                <button className="w-100 buttonAnimation2 flex justify-center items-center gap-2 px-6 py-[14px] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit">
                  Submit
                  <Image
                    width={25}
                    height={25}
                    src="/assets/img/icons/arrow-right.svg"
                    alt="arrow"
                  />
                </button>
                <div className="col-lg-12 mt--10">
                  <div className="success-box" style={{ display: "none" }}>
                    <div className="alert p-1 m-0">
                      <p className="form-messege m-0 text-light">
                        Congratulations. Your message has been sent
                        successfully.
                      </p>
                    </div>
                  </div>
                  <div className="error-box" style={{ display: "none" }}>
                    <div className="alert alert-warning">
                      <p className="form-messege">
                        Error&#44; please retry. Your message has not been sent.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
