import Image from "next/image";
import React from "react";

// Team data array
const teamMembers = [
  {
    id: 1,
    name: "Wade Warren",
    position: "Founder & CEO",
    image: "/assets/img/team/1.png",
    skills: ["Digital Strategist", "Chief Digital Officer", "Corporate Restructuring"]
  },
  {
    id: 2,
    name: "Theresa Webb",
    position: "Founder & CEO",
    image: "/assets/img/team/2.png",
    skills: ["Digital Strategist", "Chief Digital Officer", "Corporate Restructuring"]
  },
  {
    id: 3,
    name: "Guy Hawkins",
    position: "Founder & CEO",
    image: "/assets/img/team/3.png",
    skills: ["Digital Strategist", "Chief Digital Officer", "Corporate Restructuring"]
  },
  {
    id: 4,
    name: "Wade Warren",
    position: "Founder & CEO",
    image: "/assets/img/team/4.png",
    skills: ["Digital Strategist", "Chief Digital Officer", "Corporate Restructuring"]
  },
  {
    id: 5,
    name: "Wade Warren",
    position: "Founder & CEO",
    image: "/assets/img/team/5.png",
    skills: ["Digital Strategist", "Chief Digital Officer", "Corporate Restructuring"]
  },
  {
    id: 6,
    name: "Wade Warren",
    position: "Founder & CEO",
    image: "/assets/img/team/6.png",
    skills: ["Digital Strategist", "Chief Digital Officer", "Corporate Restructuring"]
  }
];

const OurTeam = () => {
  return (
    <section>
      <div
        className="mobile-padding-top-0 sectionPadding bg-center bg-no-repeat bg-cover bg-[url('img/bc/video-bg.png')] bg-b-900"
        id="benefitsSection">
        <div className="container px-5 mx-auto p-md-0">
          <div className="flex flex-col items-center justify-center">
            <span
              className="buttonAnimation yellow inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
            >
              Team
            </span>
            <h2
              className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize"
            >
              Our Team
              {/* <span className="inline-block lg:block"></span>With Tremendous Benefits */}
            </h2>
            <p
              className="maxWidth39 mb-16 text-center paraColor subHeading"
              // 
            >
              We are a cross-functional team of AI engineers, product operators,
              and service professionals who understand what's at stake when
              technology slows a business down. Our focus is simple: build
              reliable automation that delivers measurable outcomes.
            </p>

            <div className="row rowGap w-100 mt-5 teamCards">
              {teamMembers.map((member) => (
                <div key={member.id} className="col-lg-6 col-md-6">
                  <div
                    // 
                    className="flex flex-col gap-12 p-6 border rounded-lg lg:flex-row border-b-600 bg-gd-tertiary aos-init aos-animate teamCards_ipadpro teamCards_ipad"
                  >
                    <Image
                      loading="lazy"
                      width={300}
                      height={200}
                      src={member.image}
                      className="rounded-lg"
                      alt="team member"
                    />
                    <div className="flex flex-col items-start justify-start md:justify-center">
                      <h3 className="text-2xl font-medium text-w-500">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-base text-w-100">{member.position}</p>
                      <div className="flex flex-row gap-4 mt-6 mb-12 teamsocialicon">
                        <a href="https://www.linkedin.com/feed/">
                          <Image
                            loading="lazy"
                            width={24}
                            height={24}
                            src="/assets/img/icons/linkedin.svg"
                            alt="linkedin"
                          />
                        </a>
                        <a href="https://x.com/home?lang=en">
                          <Image
                            loading="lazy" 
                            width={24}
                            height={24}
                            src="/assets/img/icons/x.svg" 
                            alt="twitter" 
                          />
                        </a>
                      </div>
                      <ul className="list-disc p-0">
                        {member.skills.map((skill, index) => (
                          <li key={index} className="lead text-w-100">{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
