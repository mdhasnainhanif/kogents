import Image from "next/image";

interface Technology {
  id: number;
  name: string;
  logo: string;
  description: string;
}

interface TechnologiesSliderProps {
  tag?: string;
  heading?: string;
  description?: string;
  technologies?: Technology[];
}

const TechnologiesSlider: React.FC<TechnologiesSliderProps> = ({
  tag = "Technologies",
  heading = "Technologies We Use",
  description,
  technologies = [
    // Row 1 - Scrolling Left
    {
      id: 1,
      name: "Node.js",
      logo: "/assets/img/technology-slider/node.svg",
      description: "Runtime",
    },
    {
      id: 2,
      name: "Express",
      logo: "/assets/img/technology-slider/ex.svg",
      description: "Framework",
    },
    {
      id: 3,
      name: "NestJS",
      logo: "/assets/img/technology-slider/nest-js.svg",
      description: "Framework",
    },
    {
      id: 4,
      name: "TypeScript",
      logo: "/assets/img/technology-slider/ts.svg",
      description: "Strong Typing",
    },
    {
      id: 5,
      name: "Socket.IO",
      logo: "/assets/img/technology-slider/nest-js.svg",
      description: "Real-Time Chat",
    },
    {
      id: 6,
      name: "WebSocket",
      logo: "/assets/img/technology-slider/web-socket.svg",
      description: "Real-Time Chat",
    },
    {
      id: 7,
      name: "BullMQ",
      logo: "/assets/img/technology-slider/bull.svg",
      description: "Queues, Jobs",
    },

    // Row 2 - Scrolling Right
    {
      id: 8,
      name: "Redis",
      logo: "/assets/img/technology-slider/reddis.svg",
      description: "Queues, Jobs, Sessions",
    },
    {
      id: 9,
      name: "OpenAI",
      logo: "/assets/img/technology-slider/open-ai.svg",
      description: "(LLMs)",
    },
    {
      id: 10,
      name: "Anthropic API",
      logo: "/assets/img/technology-slider/anthropic.svg",
      description: "(LLMs)",
    },
    {
      id: 11,
      name: "LangChain",
      logo: "/assets/img/technology-slider/langchain.svg",
      description: "Prompt Orchestration, RAG",
    },
    {
      id: 12,
      name: "LlamaIndex",
      logo: "/assets/img/technology-slider/lama.svg",
      description: "Prompt Orchestration, RAG",
    },

    // Row 3 - Scrolling Left
    {
      id: 13,
      name: "PostgreSQL",
      logo: "/assets/img/technology-slider/postgre.svg",
      description: "+ Prisma ORM",
    },
    {
      id: 14,
      name: "Redis",
      logo: "/assets/img/technology-slider/reddis.svg",
      description: "Cache, Session",
    },
    {
      id: 15,
      name: "MongoDB",
      logo: "/assets/img/technology-slider/mongo.svg",
      description: "Optional Alternative",
    },
    {
      id: 16,
      name: "S3",
      logo: "/assets/img/technology-slider/s3.svg",
      description: "File Storage For KB Docs",
    },
    {
      id: 17,
      name: "Cloudflare R2",
      logo: "/assets/img/technology-slider/cloudfair.svg",
      description: "File Storage For KB Docs",
    },
  ],
}) => {
  // Split technologies into three rows
  const row1 = technologies.slice(0, 7); // First 7 - scroll left
  const row2 = technologies.slice(7, 12); // Next 5 - scroll right
  const row3 = technologies.slice(12); // Remaining - scroll left

  return (
    <div className="sectionPadding p-0">
      <div className="container-fluid p-md-0">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            {/* Tag */}
            <span className="buttonAnimation pink inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo mb-6">
              {tag}
            </span>

            {/* Main Heading */}
            <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize text-white mb125 mb-4">
              {heading}
            </h2>
            
            {/* Description - Only show if provided */}
            {description && (
              <p className="maxWidth39 mb-16 text-center paraColor mt125 subHeading mx-auto aos-init aos-animate">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Technology Rows */}
        <div className="technologies-container technologySliderFade">
          {/* Row 1 - Scrolling Left */}
          <div className="tech-row tech-row-left">
            <div className="tech-track">
              {[...row1, ...row1].map((tech, index) => (
                <div key={`${tech.id}-${index}`} className="tech-card">
                  <div className="tech-logo">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="tech-icon"
                    />
                  </div>
                  <div>
                    <h4 className="tech-name">{tech.name}</h4>
                    <p className="tech-description">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolling Right */}
          <div className="tech-row tech-row-right">
            <div className="tech-track">
              {[...row2, ...row2].map((tech, index) => (
                <div key={`${tech.id}-${index}`} className="tech-card">
                  <div className="tech-logo">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="tech-icon"
                    />
                  </div>
                  <div>
                    <h4 className="tech-name">{tech.name}</h4>
                    <p className="tech-description">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="tech-row tech-row-left">
            <div className="tech-track">
              {[...row3, ...row3].map((tech, index) => (
                <div key={`${tech.id}-${index}`} className="tech-card">
                  <div className="tech-logo">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="tech-icon"
                    />
                  </div>
                  <div>
                    <h4 className="tech-name">{tech.name}</h4>
                    <p className="tech-description">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSlider;
