"use client";
import { Search } from "@/icons";
import React, { useState, useRef, useEffect } from "react";
interface AITopic {
    title: string;
    definition: string;
    technologies: string[];
    industries: string[];
    useCase: string;
}
interface AILetterSection {
    letter: string;
    topics: AITopic[];
}
const aiData: AILetterSection[] = [
    {
        letter: "A",
        topics: [
            {
                title: "Artificial Intelligence",
                definition: "The science of creating systems capable of performing tasks that normally require human intelligence.",
                technologies: ["Machine learning", "Neural networks", "Large language models (LLMs)", "Deep learning"],
                industries: ["Healthcare", "Education", "Human resources", "Marketing"],
                useCase: "In medical settings, AI analyzes medical images to assist doctors in detecting diseases more accurately and efficiently."
            },
            {
                title: "Agents",
                definition: "Autonomous software entities that can perceive, reason, and act toward achieving defined objectives.",
                technologies: ["Natural language processing (NLP)", "Reasoning algorithms", "Automation frameworks"],
                industries: ["Customer support", "Education", "Public services"],
                useCase: "In customer service, WhatsApp, Instagram, Messenger, and Slack agents respond to user queries through chat or voice interfaces, providing instant support and routing complex cases to humans."
            },
            {
                title: "Automation",
                definition: "The use of technology to perform repetitive processes with minimal human intervention.",
                technologies: ["Robotic process automation (RPA)", "APIs", "AI-driven workflow systems"],
                industries: ["HR", "Finance", "Logistics", "Healthcare"],
                useCase: "In HR, automation manages candidate data entry and screening to reduce administrative workload."
            },
            {
                title: "API Integration",
                definition: "The process of connecting different software systems to share data and functionality seamlessly.",
                technologies: ["RESTful APIs", "JSON", "Webhooks", "Authentication protocols"],
                industries: ["Education", "E-commerce", "Enterprise management"],
                useCase: "In education, APIs connect learning management systems with analytics tools to track student progress."
            },
            {
                title: "Analytics",
                definition: "The systematic examination of data to uncover meaningful insights and trends.",
                technologies: ["Data mining", "Predictive modeling", "Visualization tools"],
                industries: ["Marketing", "HR", "Healthcare"],
                useCase: "In marketing, analytics evaluates campaign data to optimize audience targeting and conversion rates."
            }
        ]
    },
    {
        letter: "B",
        topics: [
            {
                title: "Bots",
                definition: "Automated programs designed to simulate human interaction or perform predefined digital tasks.",
                technologies: ["NLP", "Dialogue management", "Machine learning models"],
                industries: ["E-commerce", "Banking", "Education"],
                useCase: "In e-commerce, bots guide customers through product selections and assist with checkout queries."
            },
            {
                title: "Business Intelligence",
                definition: "The practice of analyzing organizational data to support informed decision-making.",
                technologies: ["Data warehousing", "Dashboards", "AI-driven analytics"],
                industries: ["Finance", "Healthcare", "Retail"],
                useCase: "In finance, business intelligence tools visualize transaction data to monitor performance and detect irregularities."
            },
            {
                title: "Behavioral Modeling",
                definition: "The analysis of user actions to predict future behavior and preferences.",
                technologies: ["Predictive analytics", "Machine learning", "Data tracking tools"],
                industries: ["Marketing", "HR", "Education"],
                useCase: "In marketing, behavioral models predict customer churn to improve retention strategies."
            },
            {
                title: "Benchmarking",
                definition: "The process of comparing performance metrics to industry or internal standards for improvement.",
                technologies: ["Data analytics", "Performance monitoring systems"],
                industries: ["Manufacturing", "HR", "Education"],
                useCase: "In HR, benchmarking helps organizations assess employee productivity against industry averages."
            },
            {
                title: "Big Data Processing",
                definition: "Handling and analyzing large volumes of data too complex for traditional systems.",
                technologies: ["Distributed computing", "Hadoop", "Spark", "Data lakes"],
                industries: ["Healthcare", "Marketing", "Government"],
                useCase: "In healthcare, big data systems analyze patient records to identify patterns in population health trends."
            }
        ]
    },
    {
        letter: "C",
        topics: [
            {
                title: "Conversational AI",
                definition: "Systems that enable natural, human-like dialogue between users and machines.",
                technologies: ["NLP", "LLMs", "Speech recognition", "Intent classification"],
                industries: ["Customer service", "Healthcare", "Education"],
                useCase: "In education, conversational AI answers student questions and provides academic support 24/7."
            },
            {
                title: "Chatbot Framework",
                definition: "A platform or architecture used to build and manage chat-based virtual assistants.",
                technologies: ["NLP engines", "Dialogue flow management", "Integration APIs"],
                industries: ["Retail", "HR", "Public service"],
                useCase: "In retail, chatbots assist customers in tracking orders and processing returns."
            },
            {
                title: "Cloud Infrastructure",
                definition: "On-demand computing resources delivered via the internet to host applications and data.",
                technologies: ["Virtualization", "Kubernetes", "Cloud APIs"],
                industries: ["Education", "Finance", "Enterprise IT"],
                useCase: "In education, cloud platforms host learning portals accessible to students and teachers anywhere."
            },
            {
                title: "Customer Experience Automation",
                definition: "The application of AI and workflow tools to enhance every step of the customer journey.",
                technologies: ["Predictive analytics", "NLP", "CRM integrations"],
                industries: ["E-commerce", "Telecom", "Healthcare"],
                useCase: "In telecom, automation ensures personalized plan recommendations based on customer behavior."
            },
            {
                title: "Cognitive Search",
                definition: "AI-enhanced search that understands intent and context beyond keyword matching.",
                technologies: ["Embedding models", "Semantic search", "Knowledge graphs"],
                industries: ["Legal", "HR", "Research"],
                useCase: "In HR, cognitive search helps recruiters find candidates based on skill relevance rather than just keywords."
            }
        ]
    },
    {
        letter: "D",
        topics: [
            {
                title: "Data Analytics",
                definition: "The process of examining datasets to draw conclusions about their information.",
                technologies: ["Statistical modeling", "Machine learning", "Visualization tools"],
                industries: ["Healthcare", "Education", "Finance"],
                useCase: "In education, analytics evaluate learning outcomes to improve teaching methods."
            },
            {
                title: "Deep Learning",
                definition: "A branch of machine learning using neural networks with multiple layers to learn representations of data.",
                technologies: ["CNNs", "RNNs", "Transformers"],
                industries: ["Healthcare", "Manufacturing", "Autonomous systems"],
                useCase: "In healthcare, deep learning interprets MRI scans to detect anomalies automatically."
            },
            {
                title: "Data Security",
                definition: "Protecting digital information from unauthorized access, corruption, or theft.",
                technologies: ["Encryption", "Access control", "Threat detection AI"],
                industries: ["Finance", "Healthcare", "Government"],
                useCase: "In finance, AI systems monitor network traffic to detect potential data breaches."
            },
            {
                title: "Dialogue Management",
                definition: "The system controlling how conversational AI responds and transitions between topics.",
                technologies: ["NLP", "Intent recognition", "Context tracking"],
                industries: ["Customer support", "Education", "HR"],
                useCase: "In HR chatbots, dialogue management ensures employees get consistent answers about benefits or leave policies."
            },
            {
                title: "Domain Adaptation",
                definition: "The process of fine-tuning AI models for specific industries or datasets.",
                technologies: ["Transfer learning", "Supervised fine-tuning"],
                industries: ["Healthcare", "Education", "Retail"],
                useCase: "In healthcare, AI models are adapted to recognize terminology unique to medical records."
            }
        ]
    },
    {
        letter: "E",
        topics: [
            {
                title: "Edge AI",
                definition: "The deployment of artificial intelligence algorithms on devices or local servers close to the data source.",
                technologies: ["Edge computing", "IoT processors", "Lightweight neural networks"],
                industries: ["Healthcare", "Manufacturing", "Logistics"],
                useCase: "In healthcare, wearable devices with edge AI track patient vitals and provide real-time alerts to clinicians."
            },
            {
                title: "Entity Recognition",
                definition: "A natural language processing task that identifies and classifies key information like names or locations in text.",
                technologies: ["NLP", "Tokenization", "Named-entity recognition models"],
                industries: ["Legal", "HR", "Education"],
                useCase: "In HR, entity recognition extracts candidate names and qualifications from resumes for automated screening."
            },
            {
                title: "Ethical AI",
                definition: "The discipline ensuring that AI systems operate with fairness, accountability, and transparency.",
                technologies: ["Bias detection algorithms", "Model interpretability tools", "Privacy frameworks"],
                industries: ["All regulated sectors", "Healthcare", "Finance"],
                useCase: "In finance, ethical AI ensures loan approval algorithms remain free from demographic bias."
            },
            {
                title: "Embedding Models",
                definition: "Representations that map text, images, or other data into numerical vectors for semantic understanding.",
                technologies: ["Word2Vec", "BERT embeddings", "Vector databases"],
                industries: ["Search engines", "Education", "Marketing"],
                useCase: "In education platforms, embedding models helps match course materials to student queries based on meaning."
            },
            {
                title: "End-to-End Automation",
                definition: "Complete automation of a process from input to output without manual intervention.",
                technologies: ["Workflow orchestration", "RPA", "AI decision engines"],
                industries: ["HR", "Finance", "Logistics"],
                useCase: "In HR, end-to-end automation processes employee onboarding from document submission to system access."
            }
        ]
    },
    {
        letter: "F",
        topics: [
            {
                title: "Fine-Tuning",
                definition: "The process of training a pre-existing AI model on specialized data to improve its performance in a specific context.",
                technologies: ["Transfer learning", "Supervised training frameworks"],
                industries: ["Healthcare", "Customer service", "Education"],
                useCase: "In healthcare, fine-tuned models interpret medical terminology accurately for clinical documentation."
            },
            {
                title: "Forecasting",
                definition: "Predicting future trends based on historical and current data using AI models.",
                technologies: ["Regression analysis", "Time-series modeling", "ML forecasting tools"],
                industries: ["Finance", "HR", "Supply chain"],
                useCase: "In supply chain management, AI forecasting anticipates inventory demand to reduce shortages."
            },
            {
                title: "Feedback Loop",
                definition: "A system where AI performance is continually improved through user or system feedback.",
                technologies: ["Reinforcement learning", "Evaluation metrics"],
                industries: ["Customer service", "Education", "Marketing"],
                useCase: "In customer support, chatbots use feedback loops to refine their accuracy with each interaction."
            },
            {
                title: "Federated Learning",
                definition: "A decentralized ML approach where models train across multiple devices or servers without sharing raw data.",
                technologies: ["Secure aggregation protocols", "Distributed learning algorithms"],
                industries: ["Healthcare", "Banking", "Education"],
                useCase: "In healthcare, federated learning enables hospitals to train diagnostic models without exposing patient data."
            },
            {
                title: "Form Processing AI",
                definition: "The automation of reading, extracting, and validating information from digital or paper forms.",
                technologies: ["OCR", "NLP", "Computer vision"],
                industries: ["Government", "Healthcare", "HR"],
                useCase: "In government offices, AI form processors digitize applications for faster approval workflows."
            }
        ]
    },
    {
        letter: "G",
        topics: [
            {
                title: "Generative AI",
                definition: "A field of AI that creates new data, such as text, images, or audio, based on learned patterns.",
                technologies: ["Transformer architectures", "Diffusion models", "Generative adversarial networks (GANs)"],
                industries: ["Marketing", "Design", "Education"],
                useCase: "In marketing, generative AI creates personalized campaign content based on audience behavior data."
            },
            {
                title: "Graph Databases",
                definition: "Databases structured around relationships between data entities rather than traditional tables.",
                technologies: ["Neo4j", "RDF stores", "Knowledge graphs"],
                industries: ["HR", "Finance", "Research"],
                useCase: "In HR, graph databases map employee skills and roles to identify career growth opportunities."
            },
            {
                title: "Governance AI",
                definition: "Tools and frameworks ensuring AI compliance with policies and regulatory standards.",
                technologies: ["Model audit systems", "Compliance dashboards"],
                industries: ["Finance", "Healthcare", "Government"],
                useCase: "In finance, governance AI monitors algorithmic trading systems to meet compliance requirements."
            },
            {
                title: "Gradient Optimization",
                definition: "The mathematical process of minimizing loss functions to improve model accuracy during training.",
                technologies: ["Stochastic gradient descent (SGD)", "Adam optimizer"],
                industries: ["Machine learning", "NLP", "Robotics"],
                useCase: "In robotics, optimized gradients enhance motion prediction and path accuracy."
            },
            {
                title: "Globalization Support",
                definition: "Adapting AI systems to function across languages, cultures, and regions.",
                technologies: ["Multilingual NLP", "Translation models", "Localization APIs"],
                industries: ["E-commerce", "Education", "Customer support"],
                useCase: "In e-commerce, AI translation engines localize product listings for different markets."
            }
        ]
    },
    {
        letter: "H",
        topics: [
            {
                title: "Human-in-the-Loop (HITL)",
                definition: "A system design where humans supervise or correct AI outputs to improve accuracy and trust.",
                technologies: ["Feedback monitoring tools", "Annotation platforms"],
                industries: ["Healthcare", "Customer service", "Public administration"],
                useCase: "In healthcare, HITL workflows allow clinicians to validate AI-generated diagnoses before final reporting."
            },
            {
                title: "Hybrid Deployment",
                definition: "A model combining cloud and on-premise environments for running AI systems.",
                technologies: ["Containerization", "Edge computing", "Orchestration tools"],
                industries: ["Finance", "Healthcare", "Education"],
                useCase: "In finance, hybrid deployment supports secure local data processing with scalable cloud analytics."
            },
            {
                title: "Heuristic Modeling",
                definition: "Rule-based AI that uses experience-driven logic rather than pure statistical methods.",
                technologies: ["Decision trees", "Constraint satisfaction algorithms"],
                industries: ["Logistics", "Operations", "Automation systems"],
                useCase: "In logistics, heuristic models optimize delivery routes based on real-time constraints."
            },
            {
                title: "Healthcare Automation",
                definition: "The use of AI to improve efficiency and accuracy in medical processes.",
                technologies: ["NLP", "ML diagnostics", "Workflow automation"],
                industries: ["Healthcare"],
                useCase: "In hospitals, automation manages patient scheduling and data entry to free up staff time."
            },
            {
                title: "Hyperparameter Tuning",
                definition: "The process of adjusting parameters that govern model behavior to optimize performance.",
                technologies: ["Grid search", "Bayesian optimization", "AutoML"],
                industries: ["AI development", "Research", "Analytics"],
                useCase: "In AI model training, hyperparameter tuning increases model precision for predictive tasks."
            }
        ]
    },
    {
        letter: "I",
        topics: [
            {
                title: "Intelligent Agents",
                definition: "Autonomous systems that perceive their environment, reason, and act toward achieving specific goals.",
                technologies: ["Natural language understanding (NLU)", "Reinforcement learning", "Multi-agent systems"],
                industries: ["Customer service", "Logistics", "Education"],
                useCase: "In customer service, intelligent agents handle support queries, learn from user feedback, and escalate complex issues to human staff."
            },
            {
                title: "Integration API",
                definition: "A set of programmable interfaces that enable communication between AI systems and other software.",
                technologies: ["REST APIs", "GraphQL", "Middleware connectors"],
                industries: ["Education", "Enterprise systems", "Healthcare"],
                useCase: "In healthcare, APIs integrate patient management platforms with diagnostic AI for seamless data exchange."
            },
            {
                title: "Inference Engine",
                definition: "The part of an AI system that applies rules or models to data inputs to generate conclusions.",
                technologies: ["Knowledge representation", "Rule-based reasoning", "Neural inference frameworks"],
                industries: ["Expert systems", "Diagnostics", "Automation"],
                useCase: "In diagnostics, inference engines analyze medical data to suggest possible conditions based on patterns."
            },
            {
                title: "Intent Detection",
                definition: "Identifying the purpose or goal behind a user's input in a conversation or dataset.",
                technologies: ["NLP", "Transformer models", "Semantic analysis"],
                industries: ["Customer support", "HR", "Marketing"],
                useCase: "In HR chatbots, intent detection distinguishes between leave requests, job inquiries, and policy questions."
            },
            {
                title: "Interactive Voice Response (IVR)",
                definition: "Technology that allows users to interact with systems through voice or keypad input over telephony.",
                technologies: ["Speech recognition", "NLP", "Voice synthesis"],
                industries: ["Banking", "Healthcare", "Public services"],
                useCase: "In healthcare, IVR systems schedule appointments and share lab results through automated voice calls."
            }
        ]
    },
    {
        letter: "J",
        topics: [
            {
                title: "Journey Analytics",
                definition: "The analysis of user interactions across multiple touchpoints to understand experience patterns.",
                technologies: ["Data visualization", "Behavioral analytics", "Predictive modeling"],
                industries: ["Marketing", "E-commerce", "Customer experience"],
                useCase: "In e-commerce, journey analytics maps user paths from product search to checkout to improve conversions."
            },
            {
                title: "Job Automation",
                definition: "The use of AI and automation tools to handle repetitive or rule-based job functions.",
                technologies: ["RPA", "Machine learning", "Workflow orchestration"],
                industries: ["HR", "Manufacturing", "Logistics"],
                useCase: "In HR, job automation screens resumes and ranks candidates using AI-based scoring models."
            },
            {
                title: "JSON APIs",
                definition: "Lightweight data-interchange formats used for transmitting structured information between systems.",
                technologies: ["JSON schema", "RESTful API frameworks", "Webhooks"],
                industries: ["Web applications", "Education", "Analytics"],
                useCase: "In education, JSON APIs enable data sharing between learning management systems and reporting dashboards."
            },
            {
                title: "Judgment Modeling",
                definition: "Simulating expert reasoning by encoding decision-making logic into AI systems.",
                technologies: ["Expert systems", "Rule-based reasoning", "Probabilistic models"],
                industries: ["Legal", "Finance", "Healthcare"],
                useCase: "In finance, judgment models evaluate creditworthiness using structured decision rules."
            },
            {
                title: "Joint Learning",
                definition: "A machine learning technique where multiple tasks or models are trained simultaneously for mutual benefit.",
                technologies: ["Multi-task learning", "Parameter sharing networks"],
                industries: ["Research", "NLP", "Computer vision"],
                useCase: "In NLP research, joint learning allows sentiment and topic models to improve each other's accuracy."
            }
        ]
    },
    {
        letter: "K",
        topics: [
            {
                title: "Knowledge Graph",
                definition: "A structured representation of entities and their relationships for contextual reasoning.",
                technologies: ["RDF", "SPARQL", "Ontology management systems"],
                industries: ["Search engines", "HR", "Research analytics"],
                useCase: "In HR, knowledge graphs connect employee skills to training programs for career development."
            },
            {
                title: "Knowledge Base Automation",
                definition: "Automating the creation and maintenance of organizational knowledge repositories.",
                technologies: ["NLP", "Document parsing", "Semantic indexing"],
                industries: ["Customer support", "IT", "Education"],
                useCase: "In IT support, automated systems categorize tickets and update FAQs based on common user queries."
            },
            {
                title: "Keyword Extraction",
                definition: "The process of identifying important words or phrases from text for analysis or indexing.",
                technologies: ["NLP", "TF-IDF", "Embedding-based ranking"],
                industries: ["Marketing", "HR", "Publishing"],
                useCase: "In marketing, keyword extraction identifies trending terms from social media feedback for campaign optimization."
            },
            {
                title: "Kogents Platform Core",
                definition: "The foundational layer enabling multi-channel AI deployment, integration, and data orchestration.",
                technologies: ["APIs", "NLP", "Workflow automation", "Analytics engines"],
                industries: ["Healthcare", "Education", "HR", "E-commerce"],
                useCase: "In healthcare, the platform connects appointment scheduling, patient communication, and analytics modules into one ecosystem."
            },
            {
                title: "Key Performance Monitoring",
                definition: "Tracking performance indicators to measure system efficiency and reliability.",
                technologies: ["Data dashboards", "Analytics tools", "Log analysis"],
                industries: ["IT operations", "HR", "Manufacturing"],
                useCase: "In HR systems, key metrics monitor AI recruiting tools for accuracy and response speed."
            }
        ]
    },
    {
        letter: "L",
        topics: [
            {
                title: "Large Language Model (LLM)",
                definition: "AI models trained on vast text datasets to understand and generate human-like language.",
                technologies: ["Transformer architecture", "Attention mechanisms", "Text embeddings"],
                industries: ["Customer service", "Education", "Marketing"],
                useCase: "In education, LLMs power tutoring assistants that answer student questions and explain complex topics."
            },
            {
                title: "Language Understanding",
                definition: "The ability of AI to comprehend meaning, intent, and relationships within text.",
                technologies: ["NLP", "Syntax parsing", "Semantic modeling"],
                industries: ["Customer support", "HR", "Analytics"],
                useCase: "In customer support, AI interprets user messages to identify requests and provide accurate responses."
            },
            {
                title: "Learning Loop",
                definition: "A continuous process where AI systems improve through exposure to new data or feedback.",
                technologies: ["Reinforcement learning", "Data retraining pipelines"],
                industries: ["Customer experience", "Education", "Automation"],
                useCase: "In education technology, systems refine recommendations as students interact with learning materials."
            },
            {
                title: "Low-Code AI",
                definition: "Platforms allowing users to build and deploy AI models with minimal coding.",
                technologies: ["Drag-and-drop model builders", "APIs", "AutoML"],
                industries: ["HR", "Education", "Business analytics"],
                useCase: "In HR, low-code tools enable non-technical teams to automate reporting and candidate tracking."
            },
            {
                title: "Latency Optimization",
                definition: "Techniques to reduce the time delay in AI processing or response.",
                technologies: ["Edge computing", "Model compression", "Caching"],
                industries: ["E-commerce", "Telecommunications", "Healthcare"],
                useCase: "In e-commerce, latency optimization ensures real-time responses during peak shopping sessions."
            }
        ]
    },
    {
        letter: "M",
        topics: [
            {
                title: "Machine Learning (ML)",
                definition: "Algorithms that learn patterns from data to make predictions or decisions without explicit programming.",
                technologies: ["Supervised learning", "Unsupervised learning", "Reinforcement learning models"],
                industries: ["Finance", "Healthcare", "Marketing"],
                useCase: "In finance, ML models detect fraudulent transactions by recognizing unusual activity patterns."
            },
            {
                title: "Model Evaluation",
                definition: "Assessing AI model accuracy, performance, and reliability using test datasets.",
                technologies: ["Cross-validation", "Confusion matrices", "F1 scoring"],
                industries: ["AI development", "Healthcare", "Research"],
                useCase: "In healthcare, model evaluation ensures diagnostic tools meet safety and accuracy standards before deployment."
            },
            {
                title: "Multi-Modal AI",
                definition: "AI systems that combine data types like text, audio, and images for comprehensive understanding.",
                technologies: ["Multi-encoder transformers", "Data fusion networks"],
                industries: ["Education", "Media", "Healthcare"],
                useCase: "In education, multi-modal AI supports video-based learning analytics to assess student engagement."
            },
            {
                title: "Monitoring Dashboard",
                definition: "A visual interface displaying performance metrics for AI systems and workflows.",
                technologies: ["Data visualization frameworks", "APIs", "Alert systems"],
                industries: ["IT", "HR", "Operations"],
                useCase: "In IT, dashboards monitor AI uptime, latency, and processing loads in real time."
            },
            {
                title: "Model Deployment Pipeline",
                definition: "The automated process of moving trained AI models into production environments.",
                technologies: ["CI/CD tools", "Containerization", "Orchestration frameworks"],
                industries: ["Enterprise IT", "Analytics", "Cloud platforms"],
                useCase: "In enterprise analytics, deployment pipelines update AI models automatically with new data."
            }
        ]
    },
    {
        letter: "N",
        topics: [
            {
                title: "Natural Language Processing (NLP)",
                definition: "The field that enables computers to understand, interpret, and generate human language.",
                technologies: ["Tokenization", "Transformers", "Named-entity recognition"],
                industries: ["Education", "HR", "Customer service"],
                useCase: "In customer service, NLP interprets chat messages to deliver contextually relevant responses."
            },
            {
                title: "Neural Network",
                definition: "A computational model inspired by the human brain, composed of interconnected nodes that process data.",
                technologies: ["Deep learning architectures", "Activation functions", "Backpropagation"],
                industries: ["Healthcare", "Robotics", "Analytics"],
                useCase: "In healthcare, neural networks analyze radiology images to detect abnormalities."
            },
            {
                title: "Normalization",
                definition: "The process of adjusting and scaling data for consistency in AI models.",
                technologies: ["Min-max scaling", "Z-score normalization", "Feature engineering"],
                industries: ["Data analytics", "Finance", "Research"],
                useCase: "In finance, normalization standardizes transaction data to improve fraud detection accuracy."
            },
            {
                title: "Named Entity Linking",
                definition: "The task of connecting recognized entities in text to their corresponding entries in a knowledge base.",
                technologies: ["NLP", "Graph databases", "Entity disambiguation algorithms"],
                industries: ["Research", "Law", "HR"],
                useCase: "In research analysis, entity linking connects author names to institutional affiliations for citation tracking."
            },
            {
                title: "Network Optimization",
                definition: "Improving the efficiency and reliability of communication or computational networks.",
                technologies: ["Graph algorithms", "Bandwidth allocation models", "Load balancing"],
                industries: ["Telecommunications", "Cloud computing", "Logistics"],
                useCase: "In telecommunications, optimization algorithms ensure stable data transmission across AI-based systems."
            }
        ]
    },
    {
        letter: "O",
        topics: [
            {
                title: "Omnichannel Engagement",
                definition: "Coordinating customer interactions across multiple communication channels for a unified experience.",
                technologies: ["NLP", "CRM integrations", "Workflow automation"],
                industries: ["Retail", "Telecom", "Healthcare"],
                useCase: "In retail, omnichannel AI connects chat, email, and phone interactions to provide consistent customer support."
            },
            {
                title: "Ontology Management",
                definition: "Organizing and maintaining structured vocabularies that define relationships among data concepts.",
                technologies: ["RDF", "OWL", "Knowledge graph frameworks"],
                industries: ["Research", "Education", "Healthcare"],
                useCase: "In education, ontology management structures course and curriculum data for intelligent search and recommendation."
            },
            {
                title: "Operational AI",
                definition: "The application of AI models to support real-time business operations and decision-making.",
                technologies: ["Predictive analytics", "Process automation", "Data orchestration tools"],
                industries: ["Manufacturing", "Logistics", "HR"],
                useCase: "In logistics, operational AI predicts delivery delays and reroutes shipments dynamically."
            },
            {
                title: "Optimization Algorithm",
                definition: "A computational method that improves efficiency or accuracy by minimizing or maximizing specific objectives.",
                technologies: ["Gradient descent", "Genetic algorithms", "Bayesian optimization"],
                industries: ["Finance", "Robotics", "Analytics"],
                useCase: "In finance, optimization algorithms allocate investments for maximum return within risk constraints."
            },
            {
                title: "Orchestration Platform",
                definition: "A system that coordinates multiple AI services, data pipelines, and workflows.",
                technologies: ["Kubernetes", "Airflow", "API-based automation frameworks"],
                industries: ["IT", "Education", "Enterprise automation"],
                useCase: "In IT, orchestration platforms manage the deployment and scaling of AI microservices across environments."
            }
        ]
    },
    {
        letter: "P",
        topics: [
            {
                title: "Predictive Analytics",
                definition: "The practice of using historical data and AI models to forecast future events or behaviors.",
                technologies: ["Regression analysis", "Decision trees", "Neural networks"],
                industries: ["Healthcare", "Marketing", "Finance"],
                useCase: "In healthcare, predictive analytics identifies at-risk patients for early intervention."
            },
            {
                title: "Prompt Engineering",
                definition: "The method of designing effective inputs to guide large language models to desired outputs.",
                technologies: ["LLMs", "NLP", "Token optimization techniques"],
                industries: ["Customer service", "Education", "Content generation"],
                useCase: "In education, prompt engineering helps AI tutoring systems generate accurate and contextually relevant responses."
            },
            {
                title: "Personalization Engine",
                definition: "AI systems that customize content or experiences for individual users.",
                technologies: ["Recommendation algorithms", "Collaborative filtering", "Reinforcement learning"],
                industries: ["E-commerce", "Media", "Education"],
                useCase: "In e-commerce, personalization engines suggest products based on user browsing and purchase behavior."
            },
            {
                title: "Process Mining",
                definition: "Analyzing event logs to discover and optimize business processes.",
                technologies: ["Data mining", "Workflow analytics", "AI modeling"],
                industries: ["Manufacturing", "HR", "Finance"],
                useCase: "In HR, process mining identifies bottlenecks in employee onboarding workflows."
            },
            {
                title: "Privacy Preservation",
                definition: "Ensuring AI systems protect sensitive data throughout processing and storage.",
                technologies: ["Encryption", "Anonymization", "Federated learning"],
                industries: ["Healthcare", "Banking", "Government"],
                useCase: "In healthcare, privacy-preserving algorithms allow research on patient data without exposing identities."
            }
        ]
    },
    {
        letter: "Q",
        topics: [
            {
                title: "Quality Assurance AI",
                definition: "Automated validation systems ensure that AI outputs meet accuracy and performance standards.",
                technologies: ["Model testing frameworks", "Monitoring tools", "Anomaly detection"],
                industries: ["Software development", "Manufacturing", "Healthcare"],
                useCase: "In software testing, AI validates system performance under varying user conditions."
            },
            {
                title: "Query Optimization",
                definition: "Techniques used to improve the speed and efficiency of database queries.",
                technologies: ["Indexing", "Caching", "Query planning algorithms"],
                industries: ["Data analytics", "E-commerce", "Research"],
                useCase: "In e-commerce, query optimization speeds up product searches in large online catalogs."
            },
            {
                title: "Quantitative Modeling",
                definition: "Using mathematical and statistical models to simulate real-world processes or systems.",
                technologies: ["Regression", "Stochastic modeling", "Monte Carlo simulations"],
                industries: ["Finance", "Logistics", "Economics"],
                useCase: "In finance, quantitative models forecast market risks and portfolio performance."
            },
            {
                title: "Queue Management AI",
                definition: "Intelligent systems that predict and allocate resources to handle queues efficiently.",
                technologies: ["Predictive analytics", "Time-series modeling", "Dynamic scheduling"],
                industries: ["Healthcare", "Retail", "Public administration"],
                useCase: "In healthcare, queue management AI reduces patient wait times by optimizing appointment scheduling."
            },
            {
                title: "Quick-Start Deployment",
                definition: "Accelerated implementation methods for deploying AI models or systems.",
                technologies: ["Pre-trained models", "APIs", "Containerized workflows"],
                industries: ["Education", "HR", "Enterprise automation"],
                useCase: "In HR, quick-start deployment enables rapid integration of AI tools for recruitment and training management."
            }
        ]
    },
    {
        letter: "R",
        topics: [
            {
                title: "Reinforcement Learning",
                definition: "A type of ML where AI agents learn optimal actions through trial and error, guided by rewards.",
                technologies: ["Markov decision processes", "Policy gradient algorithms"],
                industries: ["Robotics", "Logistics", "Gaming"],
                useCase: "In logistics, reinforcement learning optimizes delivery routing to minimize travel time."
            },
            {
                title: "Responsible AI",
                definition: "Developing and using AI systems ethically, transparently, and safely.",
                technologies: ["Fairness metrics", "Explainable AI", "Compliance frameworks"],
                industries: ["Healthcare", "Government", "Finance"],
                useCase: "In government, responsible AI ensures citizen-facing systems operate transparently and without bias."
            },
            {
                title: "Retrieval-Augmented Generation (RAG)",
                definition: "Combining external data retrieval with generative AI to improve accuracy and relevance.",
                technologies: ["Vector databases", "Embeddings", "LLMs"],
                industries: ["Knowledge management", "Customer service", "Education"],
                useCase: "In customer service, RAG systems retrieve real-time company data to generate precise answers to user queries."
            },
            {
                title: "Risk Detection Model",
                definition: "AI systems that identify potential threats or anomalies in data.",
                technologies: ["Anomaly detection", "Predictive modeling", "ML classifiers"],
                industries: ["Finance", "Cybersecurity", "Healthcare"],
                useCase: "In finance, risk detection models identify suspicious transaction patterns to prevent fraud."
            },
            {
                title: "Response Optimization",
                definition: "Adjusting AI-generated outputs to improve accuracy, tone, or relevance.",
                technologies: ["Reinforcement learning", "Fine-tuning algorithms"],
                industries: ["Customer service", "Marketing", "HR"],
                useCase: "In marketing, AI optimizes messaging tone and timing for higher audience engagement."
            }
        ]
    },
    {
        letter: "S",
        topics: [
            {
                title: "Speech Recognition",
                definition: "Converting spoken language into text for machine processing.",
                technologies: ["Acoustic modeling", "Deep neural networks", "NLP"],
                industries: ["Healthcare", "Education", "Telecommunications"],
                useCase: "In healthcare, doctors use speech recognition to transcribe notes hands-free into electronic medical records."
            },
            {
                title: "Semantic Search",
                definition: "Search systems that understand the meaning and context behind user queries.",
                technologies: ["Embeddings", "Transformer models", "Vector databases"],
                industries: ["Research", "HR", "Education"],
                useCase: "In HR, semantic search identifies candidates based on skill relevance rather than exact keyword matches."
            },
            {
                title: "Scalability Framework",
                definition: "Infrastructure that allows AI systems to expand efficiently as data or demand grows.",
                technologies: ["Cloud computing", "Container orchestration", "Load balancing"],
                industries: ["Enterprise IT", "E-commerce", "Education"],
                useCase: "In e-commerce, scalability frameworks ensure AI recommendations remain fast during peak traffic."
            },
            {
                title: "Sentiment Analysis",
                definition: "The process of identifying emotions and opinions in text or speech.",
                technologies: ["NLP", "Text classification", "Transformer models"],
                industries: ["Marketing", "Customer support", "HR"],
                useCase: "In marketing, sentiment analysis measures customer reactions to brand campaigns on social media."
            },
            {
                title: "Secure Access Layer",
                definition: "A protective framework that ensures only authorized users can access AI systems or data.",
                technologies: ["Authentication protocols", "Encryption", "Identity management"],
                industries: ["Finance", "Healthcare", "Enterprise IT"],
                useCase: "In healthcare, secure access layers protect patient information within AI-driven systems."
            }
        ]
    },
    {
        letter: "T",
        topics: [
            {
                title: "Transformer Architecture",
                definition: "A neural network framework that processes sequential data efficiently through self-attention mechanisms.",
                technologies: ["Attention layers", "Positional encoding", "Deep learning"],
                industries: ["NLP", "Computer vision", "Audio processing"],
                useCase: "In NLP, transformers power language models that understand and generate complex human text."
            },
            {
                title: "Text Classification",
                definition: "Categorizing text into predefined groups for analysis or automation.",
                technologies: ["NLP", "Machine learning classifiers", "LLMs"],
                industries: ["HR", "Education", "Customer service"],
                useCase: "In HR, text classification filters resumes by job role and skill category automatically."
            },
            {
                title: "Task Automation",
                definition: "Applying AI to execute specific repetitive or rule-based tasks efficiently.",
                technologies: ["RPA", "APIs", "Workflow engines"],
                industries: ["HR", "Finance", "Logistics"],
                useCase: "In finance, AI automates invoice validation and payment processing."
            },
            {
                title: "Training Pipeline",
                definition: "The structured workflow for collecting, preparing, and training AI models on data.",
                technologies: ["Data preprocessing tools", "Model validation frameworks", "Orchestration systems"],
                industries: ["AI development", "Education", "Analytics"],
                useCase: "In AI research, training pipelines automate dataset updates and model retraining cycles."
            },
            {
                title: "Trustworthy AI",
                definition: "AI systems designed to operate reliably, transparently, and ethically under defined principles.",
                technologies: ["Explainable AI (XAI)", "Model validation", "Auditing tools"],
                industries: ["Healthcare", "Finance", "Public administration"],
                useCase: "In finance, trustworthy AI ensures loan prediction models remain fair and auditable."
            }
        ]
    },
    {
        letter: "U",
        topics: [
            {
                title: "User Experience Intelligence",
                definition: "The application of AI to analyze and enhance user interactions with digital systems.",
                technologies: ["Behavioral analytics", "Sentiment analysis", "Heat mapping"],
                industries: ["E-commerce", "Education", "Customer service"],
                useCase: "In e-commerce, AI evaluates navigation patterns to optimize website layouts and improve purchase completion rates."
            },
            {
                title: "Unstructured Data Processing",
                definition: "Techniques that analyze non-tabular data such as text, images, or audio.",
                technologies: ["NLP", "Computer vision", "Deep learning"],
                industries: ["Healthcare", "HR", "Research"],
                useCase: "In healthcare, AI processes unstructured clinical notes to extract key patient information for diagnosis support."
            },
            {
                title: "Usage Analytics",
                definition: "Monitoring and analyzing how users interact with applications or services.",
                technologies: ["Data tracking", "Event logging", "Machine learning analytics"],
                industries: ["Education", "Software", "Marketing"],
                useCase: "In education, analytics tracks student engagement with digital learning platforms to improve course design."
            },
            {
                title: "Unified Interface",
                definition: "A single access point combining multiple AI tools or data systems into one dashboard.",
                technologies: ["APIs", "Microservices", "Front-end frameworks"],
                industries: ["Enterprise IT", "Healthcare", "HR"],
                useCase: "In HR, a unified interface centralizes employee data, analytics, and communication tools for easy access."
            },
            {
                title: "Utility Bots",
                definition: "AI-driven programs that perform simple, specific tasks automatically.",
                technologies: ["RPA", "NLP", "Scripting engines"],
                industries: ["IT support", "HR", "Finance"],
                useCase: "In IT, utility bots reset user passwords and manage system updates automatically."
            }
        ]
    },
    {
        letter: "V",
        topics: [
            {
                title: "Virtual Assistant",
                definition: "AI applications that perform tasks or provide information through natural language interaction.",
                technologies: ["NLP", "Speech recognition", "Dialogue management"],
                industries: ["Healthcare", "Customer support", "Education"],
                useCase: "In healthcare, virtual assistants help patients schedule appointments and receive post-visit guidance."
            },
            {
                title: "Voice AI",
                definition: "Technology that enables machines to process and generate human speech.",
                technologies: ["Speech-to-text", "NLP", "Neural speech synthesis"],
                industries: ["Telecommunications", "Healthcare", "Customer service"],
                useCase: "In customer service, voice AI manages call routing and provides instant answers to user inquiries."
            },
            {
                title: "Vector Database",
                definition: "A database that stores high-dimensional vector embeddings for similarity search and AI retrieval tasks.",
                technologies: ["FAISS", "Pinecone", "Milvus"],
                industries: ["Search engines", "Customer support", "Education"],
                useCase: "In customer support, vector databases enable retrieval-augmented AI systems to find relevant documentation quickly."
            },
            {
                title: "Verification Models",
                definition: "AI systems that validate data integrity, identity, or document authenticity.",
                technologies: ["Computer vision", "Biometrics", "Anomaly detection"],
                industries: ["Finance", "Security", "Education"],
                useCase: "In finance, verification models confirm identity through facial recognition before approving digital transactions."
            },
            {
                title: "Vision AI",
                definition: "The use of AI to interpret and act on visual data such as images or video.",
                technologies: ["Convolutional neural networks (CNNs)", "Image segmentation", "Object detection"],
                industries: ["Healthcare", "Manufacturing", "Retail"],
                useCase: "In manufacturing, vision AI inspects products on assembly lines for defects in real time."
            }
        ]
    },
    {
        letter: "W",
        topics: [
            {
                title: "Workflow Automation",
                definition: "Streamlining business processes through rule-based AI execution.",
                technologies: ["RPA", "API orchestration", "Decision engines"],
                industries: ["HR", "Finance", "Healthcare"],
                useCase: "In finance, AI-driven workflow automation accelerates invoice processing and approvals."
            },
            {
                title: "Webhooks",
                definition: "Automated messages triggered by events that send real-time data between systems.",
                technologies: ["REST APIs", "HTTP protocols", "Event listeners"],
                industries: ["Education", "IT", "E-commerce"],
                useCase: "In education, webhooks notify teachers instantly when students submit assignments."
            },
            {
                title: "Workforce Analytics",
                definition: "The use of AI to evaluate and optimize workforce performance.",
                technologies: ["Predictive analytics", "Data visualization", "ML modeling"],
                industries: ["HR", "Manufacturing", "Public services"],
                useCase: "In HR, analytics forecast staffing needs and identify productivity gaps."
            },
            {
                title: "Wellness AI",
                definition: "AI systems that monitor and promote physical and mental well-being.",
                technologies: ["Predictive analytics", "Wearable sensors", "Health tracking algorithms"],
                industries: ["Healthcare", "HR", "Fitness"],
                useCase: "In corporate HR, wellness AI analyzes employee wellness data to recommend personalized health programs."
            },
            {
                title: "Watson Integration",
                definition: "Integration of IBM Watson AI capabilities within enterprise systems.",
                technologies: ["NLP APIs", "Machine learning services", "Cognitive computing frameworks"],
                industries: ["Healthcare", "Finance", "Customer service"],
                useCase: "In healthcare, Watson integrations assist in analyzing patient data and supporting clinical decision-making."
            }
        ]
    },
    {
        letter: "X",
        topics: [
            {
                title: "Explainable AI (XAI)",
                definition: "AI models are designed to make their decisions transparent and understandable to humans.",
                technologies: ["Model interpretability tools", "SHAP", "LIME"],
                industries: ["Finance", "Healthcare", "Public services"],
                useCase: "In finance, XAI explains why a loan application was approved or denied, improving accountability."
            },
            {
                title: "XML Pipelines",
                definition: "Frameworks for transforming and validating XML data through defined workflows.",
                technologies: ["XSLT", "XPath", "XML schema validation"],
                industries: ["Publishing", "Data exchange", "Education"],
                useCase: "In publishing, XML pipelines automate the formatting of manuscripts for multiple digital platforms."
            },
            {
                title: "Experience Design AI",
                definition: "The application of AI to personalize and optimize user interactions.",
                technologies: ["Behavioral analytics", "Recommendation engines", "NLP"],
                industries: ["E-commerce", "Education", "Marketing"],
                useCase: "In e-commerce, AI-driven design tools adjust website layout dynamically based on user behavior."
            },
            {
                title: "Execution Monitoring",
                definition: "Tracking and managing AI processes to ensure operational reliability.",
                technologies: ["System logs", "Anomaly detection", "Workflow monitors"],
                industries: ["IT", "Manufacturing", "Analytics"],
                useCase: "In IT operations, monitoring tools detect slow or failed AI processes for immediate remediation."
            },
            {
                title: "Experimental Models",
                definition: "Prototype AI models used for research and testing before large-scale deployment.",
                technologies: ["Deep learning frameworks", "Simulation environments", "Sandboxing tools"],
                industries: ["Research", "Education", "Product development"],
                useCase: "In education, experimental models test adaptive learning systems on pilot student groups before rollout."
            }
        ]
    },
    {
        letter: "Y",
        topics: [
            {
                title: "Yield Optimization",
                definition: "Improving output or returns using AI-driven decision systems.",
                technologies: ["Predictive analytics", "Optimization algorithms", "ML models"],
                industries: ["Marketing", "Manufacturing", "Finance"],
                useCase: "In marketing, AI allocates budgets across channels to maximize campaign ROI."
            },
            {
                title: "Yearly Model Review",
                definition: "The periodic evaluation of AI systems to maintain accuracy, compliance, and relevance.",
                technologies: ["Model retraining", "Audit tools", "Data validation"],
                industries: ["Finance", "Healthcare", "Enterprise IT"],
                useCase: "In healthcare, yearly model reviews ensure diagnostic AI remains effective with new medical data."
            },
            {
                title: "Youth Engagement AI",
                definition: "AI applications designed to enhance learning and communication among younger audiences.",
                technologies: ["Chatbots", "Gamification engines", "Adaptive learning algorithms"],
                industries: ["Education", "Public services"],
                useCase: "In education, youth engagement AI provides personalized tutoring and interactive learning experiences."
            },
            {
                title: "Yield-Based Forecasting",
                definition: "Predictive analysis that estimates outcomes based on historical performance data.",
                technologies: ["Time-series models", "Regression algorithms", "ML forecasting"],
                industries: ["Manufacturing", "Finance", "Agriculture"],
                useCase: "In manufacturing, forecasting predicts production yield to optimize raw material use."
            },
            {
                title: "Yes/No Classifier",
                definition: "A binary AI model that categorizes inputs into two distinct outcomes.",
                technologies: ["Logistic regression", "Neural networks", "Decision trees"],
                industries: ["HR", "Finance", "Customer service"],
                useCase: "In HR, yes/no classifiers determine whether candidates meet essential qualification criteria."
            }
        ]
    },
    {
        letter: "Z",
        topics: [
            {
                title: "Zero-Shot Learning",
                definition: "The ability of AI models to recognize and handle unseen data categories without prior examples.",
                technologies: ["Transfer learning", "LLM-based generalization"],
                industries: ["NLP", "Computer vision", "Research"],
                useCase: "In NLP, zero-shot learning enables models to classify new topics without retraining."
            },
            {
                title: "Zero-Downtime Deployment",
                definition: "Updating or replacing AI systems without interrupting service availability.",
                technologies: ["Blue-green deployment", "Container orchestration", "CI/CD pipelines"],
                industries: ["Enterprise IT", "Finance", "Healthcare"],
                useCase: "In finance, zero-downtime deployment ensures trading platforms remain active during software updates."
            },
            {
                title: "Zero-Trust Security",
                definition: "A cybersecurity model that verifies every request regardless of source or location.",
                technologies: ["Multi-factor authentication", "Encryption", "Identity access management"],
                industries: ["Government", "Finance", "Healthcare"],
                useCase: "In healthcare, zero-trust frameworks protect patient data from unauthorized internal and external access."
            },
            {
                title: "Zone Automation",
                definition: "Segmenting operations into zones for localized, independent AI-driven control.",
                technologies: ["IoT sensors", "Edge computing", "Process automation"],
                industries: ["Manufacturing", "Logistics", "Facility management"],
                useCase: "In manufacturing, each production zone uses AI to monitor machinery and optimize efficiency."
            },
            {
                title: "Zoom Integration",
                definition: "Embedding AI features into video conferencing platforms for enhanced collaboration.",
                technologies: ["NLP", "Voice recognition", "API integration"],
                industries: ["Education", "HR", "Corporate training"],
                useCase: "In education, Zoom integrations provide AI-based transcription and real-time lecture summaries for students."
            }
        ]
    }
];
export default function AIGlossaryPage() {
    const [filter, setFilter] = useState("");
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const handleScrollToLetter = (letter: string) => {
        const target = sectionRefs.current[letter];
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    const filteredData = aiData
        .map((section) => ({
            ...section,
            topics:
                filter.trim() === ""
                    ? section.topics
                    : section.topics.filter((t) =>
                        t.title.toLowerCase().includes(filter.toLowerCase())
                    ),
        }))
        .filter((section) => section.topics.length > 0);
    return (
        <section className="sectionPadding">
            <div className="container">
                <h1 className="me-auto mt-2 mb-6 headingSize">
                    AI Glossary by Kogents AI
                </h1>
                <div className="flex justify-between">
                    <div className="flex flex-wrap gap-3">
                        {alphabet.map((letter) => (
                            <button
                                key={letter}
                                onClick={() => handleScrollToLetter(letter)}
                                className="paraColor subHeading mt-2"
                            >
                                {letter}
                            </button>
                        ))}
                    </div>
                    <div className="relative flex items-center glossaryInput">
                        <span className="absolute"><Search /></span>
                        <input
                            type="text"
                            placeholder="SEARCH"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="newsletter-input"
                        />
                    </div>
                </div>
                {filteredData.length === 0 ? (
                    <p className="text-center mt-16 benefit-description">
                        No topics found for your search.
                    </p>
                ) : (
                    filteredData.map((section) => (
                        <div
                            key={section.letter}
                            id={section.letter}
                            ref={(el) => {
                                sectionRefs.current[section.letter] = el;
                            }}
                            className="mb-10 scroll-mt-24"
                        >
                            <div className="grid gap-6">
                                {section.topics.map((topic, idx) => (
                                    <div
                                        key={idx}
                                        className="pt-4"
                                    >
                                        <h3 className="benefit-title">
                                            {topic.title}
                                        </h3>
                                        <p className="benefit-description">
                                            <strong >Definition:</strong>{" "}
                                            {topic.definition}
                                        </p>
                                        <p className="benefit-description">
                                            <strong >Technologies:</strong>{" "}
                                            {topic.technologies.join(", ")}
                                        </p>
                                        <p className="benefit-description">
                                            <strong >Industries Used:</strong>{" "}
                                            {topic.industries.join(", ")}
                                        </p>
                                        <p className="benefit-description">
                                            <strong >Use Case:</strong>{" "}
                                            {topic.useCase}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
