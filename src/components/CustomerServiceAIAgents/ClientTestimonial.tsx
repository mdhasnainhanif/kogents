"use client";

import React from "react";

interface Testimonial {
  id: number;
  quote: string;
  avatar: string;
  name: string;
  title: string;
  rating: number;
}

interface Statistic {
  id: number;
  icon: string;
  value: string;
  label: string;
}

interface ClientTestimonialProps {
  tag?: string;
  heading?: string;
  description?: string;
  testimonials?: Testimonial[];
  statistics?: Statistic[];
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const ClientTestimonial: React.FC<ClientTestimonialProps> = ({
  tag = "Reviews",
  heading = "Client Testimonials",
  description,
  showCTA = true,
  ctaText = "Get Started",
  ctaLink = "#",
  testimonials = [
    {
      id: 1,
      quote:
        "We've been using the AI service agent for about three months now, and the results are incredible. Our response times have dropped drastically, and customers actually appreciate how fast and accurate the answers are. The system also frees up up my team to focus on more complex cases instead of answering the same FAQs over and over again. It feels like we added an extra team member without the cost.",
      avatar: "MW",
      name: "Maxin Will",
      title: "Product Manager",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "I was skeptical at first, but the personalized support feature blew me away. It remembers past interactions and makes every conversation feel seamless.",
      avatar: "JR",
      name: "Jessica R.",
      title: "Operations Lead",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "The human-in-the-loop escalation is a lifesaver. Our customers never feel stuck talking to a bot — the system knows exactly when to bring in a real agent.",
      avatar: "AH",
      name: "Amir H.",
      title: "E-Commerce Owner",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "What stood out for me was how simple the setup was. Within just a few hours, the AI agent was already live and integrated with our CRM. Our agents no longer waste time creating tickets manually because everything is automated. After a week of using it, I could already see a 40% improvement in efficiency, and the cost savings compared to hiring additional staff are significant.",
      avatar: "SL",
      name: "Sophia L.",
      title: "Support Team Lead",
      rating: 5,
    },
  ],
  statistics = [
    {
      id: 1,
      icon: "⭐⭐⭐",
      value: "75%",
      label: "Increase in Customer Satisfaction",
    },
    {
      id: 2,
      icon: "⚙️⏰",
      value: "50%",
      label: "Reduction in Average Handling Time",
    },
  ],
}) => {
  const renderStars = (rating: number) => {
    return "★".repeat(rating);
  };

  return (
    <div className="sectionPadding">
      <div className="container clientTestimonialSection">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center mb-6">
            {/* Tag */}
            <span className="buttonAnimation green inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo mb-2">
              {tag}
            </span>

            {/* Main Heading */}
            <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize text-white">
              {heading}
            </h2>
            {description && (
              <p className="text-center text-white paraColor mb-16 mt-3">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Testimonials and Statistics Grid */}
        <div className="row g-4">
          {/* Top Row - Left: Long Testimonial */}
          <div className="col-lg-6 col-md-12">
            <div className="testimonial-card h-100 p-5 border border-b-600 bg-gd-tertiary rounded-lg">
              <div className="testimonial-content mb-4">
                <p className="text-white paraColor mb-0 fs-6 lh-base">
                  "{testimonials[0].quote}"
                </p>
              </div>
              <div className="testimonial-author d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="avatar-circle bg-purple-600 text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                    {testimonials[0].avatar}
                  </div>
                  <div>
                    <h6 className="text-white mb-1 fw-semibold">
                      {testimonials[0].name}
                    </h6>
                    <p className="text-white mb-0 small">
                      {testimonials[0].title}
                    </p>
                  </div>
                </div>
                <div className="rating text-warning">
                  {renderStars(testimonials[0].rating)}
                </div>
              </div>
            </div>
          </div>

          {/* Top Row - Right: Testimonial + Statistic */}
          <div className="col-lg-6 col-md-12">
            <div className="d-flex flex-column h-100">
              <div className="row h-100">
                <div className="col-lg-6 col-md-12">
                  <div className="testimonial-card flex-grow-1 p-4 border border-b-600 bg-gd-tertiary rounded-lg mb-3">
                    <div className="testimonial-content mb-3">
                      <p className="text-white paraColor mb-0 fs-6">
                        "{testimonials[1].quote}"
                      </p>
                    </div>
                    <div className="testimonial-author d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="avatar-circle bg-purple-600 text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                          {testimonials[1].avatar}
                        </div>
                        <div>
                          <h6 className="text-white mb-1 fw-semibold">
                            {testimonials[1].name}
                          </h6>
                          <p className="text-white mb-0 small">
                            {testimonials[1].title}
                          </p>
                        </div>
                      </div>
                      <div className="rating text-warning">
                        {renderStars(testimonials[1].rating)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 solutionstardivcol">
                  <div className="statistic-card p-4 border border-b-600 bg-gd-tertiary rounded-lg">
                    <div className="text-center">
                      <div className="statistic-icon mb-3">
                        <span className="fs-1 text-purple-400">⭐⭐⭐</span>
                      </div>
                      <div className="statistic-value mb-2">
                        <h2 className="text-white fw-bold mb-0">
                          {statistics[0].value}
                        </h2>
                      </div>
                      <div className="statistic-label">
                        <p className="text-white mb-0 fw-medium">
                          {statistics[0].label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Left: Statistic */}
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-12 reductiondivcol">
                <div className="statistic-card h-100 p-5 border border-b-600 bg-gd-tertiary rounded-lg">
                  <div className="text-center">
                    <div className="statistic-icon mb-4">
                      <div className="inline-block p-6 rounded-full bg_purple btn-border">
                        <img
                          alt="video image demo"
                          className="w-100"
                          src="/assets/img/icons/17.svg"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                    <div className="statistic-value mb-3">
                      <h2 className="text-white fw-bold mb-0">
                        {statistics[1].value}
                      </h2>
                    </div>
                    <div className="statistic-label">
                      <p className="text-white mb-0 fw-medium fs-5">
                        {statistics[1].label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="testimonial-card flex-grow-1 p-4 border border-b-600 bg-gd-tertiary rounded-lg mb-3">
                  <div className="testimonial-content mb-3">
                    <p className="text-white paraColor mb-0 fs-6">
                      "{testimonials[2].quote}"
                    </p>
                  </div>
                  <div className="testimonial-author d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="avatar-circle bg-purple-600 text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                        {testimonials[2].avatar}
                      </div>
                      <div>
                        <h6 className="text-white mb-1 fw-semibold">
                          {testimonials[2].name}
                        </h6>
                        <p className="text-white mb-0 small">
                          {testimonials[2].title}
                        </p>
                      </div>
                    </div>
                    <div className="rating text-warning">
                      {renderStars(testimonials[2].rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Right: Two Testimonials */}
          <div className="col-lg-6 col-md-12">
            <div className="d-flex flex-column h-100">
              {/* Top: Short Testimonial */}

              {/* Bottom: Long Testimonial */}
              <div className="testimonial-card flex-grow-1 p-4 border border-b-600 bg-gd-tertiary rounded-lg">
                <div className="testimonial-content mb-3">
                  <p className="text-white paraColor mb-0 fs-6 lh-base">
                    "{testimonials[3].quote}"
                  </p>
                </div>
                <div className="testimonial-author d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar-circle bg-purple-600 text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                      {testimonials[3].avatar}
                    </div>
                    <div>
                      <h6 className="text-white mb-1 fw-semibold">
                        {testimonials[3].name}
                      </h6>
                      <p className="text-white mb-0 small">
                        {testimonials[3].title}
                      </p>
                    </div>
                  </div>
                  <div className="rating text-warning">
                    {renderStars(testimonials[3].rating)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button Section */}
        {/* {showCTA && (
          <div className="row mt-8">
            <div className="col-12 text-center">
              <a 
                href={ctaLink}
                className="buttonAnimation2 mx-auto flex justify-center green items-center gap-2 mt-4 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit"
              >
                {ctaText}
              </a>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ClientTestimonial;
