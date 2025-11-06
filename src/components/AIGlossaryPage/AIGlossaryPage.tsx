"use client";
import { Search } from "@/icons";
import React, { useState, useRef, useEffect } from "react";
interface AITopic {
    title: string;
    definition: string;
    platforms?: string;
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
                technologies: ["Machine learning, neural networks, large language models (LLMs), and deep learning."],
                industries: ["Healthcare, education, human resources, and marketing."],
                useCase: "In medical settings, AI analyzes medical images to assist doctors in detecting diseases more accurately and efficiently."
            },
            {
                title: "Agents",
                definition: "Autonomous software entities that can perceive, reason, and act toward achieving defined objectives.",
                technologies: ["Natural language processing (NLP), reasoning algorithms, and automation frameworks."],
                industries: ["Customer support, education, and public services."],
                useCase: " In customer service, WhatsApp, Instagram, Messenger, and Slack agents respond to user queries through chat or voice interfaces, providing instant support and routing complex cases to humans. Also available for communication and enterprise use through Viber, Microsoft Teams, Telegram, and Line."
            },
            {
                title: "Automation",
                definition: "The use of technology to perform repetitive processes with minimal human intervention.",
                
                technologies: ["Robotic process automation (RPA), APIs, and AI-driven workflow systems."],
                industries: ["HR, finance, logistics, and healthcare."],
                useCase: "In HR, automation manages candidate data entry and screening to reduce administrative workload. You can also engage an AI automation agency for enterprise‑scale solutions."
            },
            {
                title: "API Integration",
                platforms: "HubSpot, Zendesk, Jira, Calendly.",
                definition: "The process of connecting different software systems to share data and functionality seamlessly.",
                technologies: ["RESTful APIs, JSON, webhooks, and authentication protocols."],
                industries: ["Education, e-commerce, and enterprise management."],
                useCase: "In education, APIs connect learning management systems with analytics tools to track student progress."
            },
            {
                title: "Analytics",
                definition: "The systematic examination of data to uncover meaningful insights and trends.",
                technologies: ["Data mining, predictive modeling, and visualization tools."],
                industries: ["Marketing, HR, and healthcare."],
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
                technologies: ["NLP, dialogue management, and machine learning models."],
                industries: ["E-commerce, banking, and education."],
                useCase: "In e-commerce, bots guide customers through product selections and assist with checkout queries."
            },
            {
                title: "Business Intelligence",
                definition: "The practice of analyzing organizational data to support informed decision-making.",
                technologies: ["Data warehousing, dashboards, and AI-driven analytics."],
                industries: ["Finance, healthcare, and retail."],
                useCase: "In finance, business intelligence tools visualize transaction data to monitor performance and detect irregularities."
            },
            {
                title: "Behavioral Modeling",
                definition: "The analysis of user actions to predict future behavior and preferences.",
                technologies: ["Predictive analytics, machine learning, and data tracking tools."],
                industries: ["Marketing, HR, and education."],
                useCase: "In marketing, behavioral models predict customer churn to improve retention strategies."
            },
            {
                title: "Benchmarking",
                definition: "The process of comparing performance metrics to industry or internal standards for improvement.",
                technologies: ["Data analytics and performance monitoring systems."],
                industries: ["Manufacturing, HR, and education."],
                useCase: "In HR, benchmarking helps organizations assess employee productivity against industry averages."
            },
            {
                title: "Big Data Processing",
                definition: "Handling and analyzing large volumes of data too complex for traditional systems.",
                technologies: ["Distributed computing, Hadoop, Spark, and data lakes."],
                industries: ["Healthcare, marketing, and government."],
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
                technologies: ["NLP, LLMs, speech recognition, and intent classification."],
                industries: ["Customer service, healthcare, and education."],
                useCase: "In education, conversational AI answers student questions and provides academic support 24/7."
            },
            {
                title: "Chatbot Framework",
                definition: "A platform or architecture used to build and manage chat-based virtual assistants.",
                technologies: ["NLP engines, dialogue flow management, and integration APIs."],
                industries: ["Retail, HR, and public service."],
                useCase: "In retail, chatbots assist customers in tracking orders and processing returns."
            },
            {
                title: "Cloud Infrastructure",
                definition: "On-demand computing resources delivered via the internet to host applications and data.",
                technologies: ["Virtualization, Kubernetes, and cloud APIs."],
                industries: ["Education, finance, and enterprise IT."],
                useCase: "In education, cloud platforms host learning portals accessible to students and teachers anywhere."
            },
            {
                title: "Customer Experience Automation",
                definition: "The application of AI and workflow tools to enhance every step of the customer journey.",
                technologies: ["Predictive analytics, NLP, and CRM integrations."],
                industries: ["E-commerce, telecom, and healthcare."],
                useCase: "In telecom, automation ensures personalized plan recommendations based on customer behavior."
            },
            {
                title: "Cognitive Search",
                definition: "AI-enhanced search that understands intent and context beyond keyword matching.",
                technologies: ["Embedding models, semantic search, and knowledge graphs."],
                industries: ["Legal, HR, and research."],
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
                technologies: ["Statistical modeling, machine learning, and visualization tools."],
                industries: ["Healthcare, education, and finance."],
                useCase: ": In education, analytics evaluate learning outcomes to improve teaching methods."
            },
            {
                title: "Deep Learning",
                definition: "A branch of machine learning using neural networks with multiple layers to learn representations of data.",
                technologies: ["CNNs, RNNs, and transformers."],
                industries: ["CNNs, RNNs, and transformers."],
                useCase: "In healthcare, deep learning interprets MRI scans to detect anomalies automatically."
            },
            {
                title: "Data Security",
                definition: "Protecting digital information from unauthorized access, corruption, or theft.",
                technologies: ["Encryption, access control, and threat detection AI."],
                industries: ["Finance, healthcare, government."],
                useCase: "In finance, AI systems monitor network traffic to detect potential data breaches."
            },
            {
                title: "Dialogue Management",
                definition: "The system controlling how conversational AI responds and transitions between topics.",
                technologies: ["NLP, intent recognition, and context tracking."],
                industries: ["Customer support, education, and HR."],
                useCase: "In HR chatbots, dialogue management ensures employees get consistent answers about benefits or leave policies."
            },
            {
                title: "Domain Adaptation",
                definition: "The process of fine-tuning AI models for specific industries or datasets.",
                technologies: ["Transfer learning and supervised fine-tuning."],
                industries: ["Healthcare, education, and retail."],
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
                technologies: ["Edge computing, IoT processors, and lightweight neural networks."],
                industries: ["Edge computing, IoT processors, and lightweight neural networks."],
                useCase: "In healthcare, wearable devices with edge AI track patient vitals and provide real-time alerts to clinicians."
            },
            {
                title: "Entity Recognition",
                definition: "A natural language processing task that identifies and classifies key information like names or locations in text.",
                technologies: ["NLP, tokenization, and named-entity recognition models."],
                industries: ["Legal, HR, and education."],
                useCase: "In HR, entity recognition extracts candidate names and qualifications from resumes for automated screening."
            },
            {
                title: "Ethical AI",
                definition: "The discipline ensuring that AI systems operate with fairness, accountability, and transparency.",
                technologies: ["Bias detection algorithms, model interpretability tools, and privacy frameworks."],
                industries: ["All regulated sectors, including healthcare and finance."],
                useCase: "In finance, ethical AI ensures loan approval algorithms remain free from demographic bias."
            },
            {
                title: "Embedding Models",
                definition: "Representations that map text, images, or other data into numerical vectors for semantic understanding.",
                technologies: ["Word2Vec, BERT embeddings, and vector databases."],
                industries: ["Search engines, education, and marketing."],
                useCase: "In education platforms, embedding models helps match course materials to student queries based on meaning."
            },
            {
                title: "End-to-End Automation",
                definition: "Complete automation of a process from input to output without manual intervention.",
                technologies: ["Workflow orchestration, RPA, and AI decision engines."],
                industries: ["HR, finance, and logistics."],
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
                technologies: ["Transfer learning and supervised training frameworks."],
                industries: ["Healthcare, customer service, and education."],
                useCase: "In healthcare, fine-tuned models interpret medical terminology accurately for clinical documentation."
            },
            {
                title: "Forecasting",
                definition: "Predicting future trends based on historical and current data using AI models.",
                technologies: ["Regression analysis, time-series modeling, and ML forecasting tools."],
                industries: ["Finance, HR, and supply chain."],
                useCase: "In supply chain management, AI forecasting anticipates inventory demand to reduce shortages."
            },
            {
                title: "Feedback Loop",
                definition: "A system where AI performance is continually improved through user or system feedback.",
                technologies: ["Reinforcement learning and evaluation metrics."],
                industries: ["Customer service, education, and marketing."],
                useCase: "In customer support, chatbots use feedback loops to refine their accuracy with each interaction."
            },
            {
                title: "Federated Learning",
                definition: "A decentralized ML approach where models train across multiple devices or servers without sharing raw data.",
                technologies: ["Secure aggregation protocols and distributed learning algorithms."],
                industries: ["Healthcare, banking, and education."],
                useCase: "In healthcare, federated learning enables hospitals to train diagnostic models without exposing patient data."
            },
            {
                title: "Form Processing AI",
                definition: "The automation of reading, extracting, and validating information from digital or paper forms.",
                technologies: ["OCR, NLP, and computer vision."],
                industries: ["Government, healthcare, HR."],
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
                technologies: ["Transformer architectures, diffusion models, and generative adversarial networks (GANs)."],
                industries: ["Marketing, design, and education."],
                useCase: "In marketing, generative AI creates personalized campaign content based on audience behavior data."
            },
            {
                title: "Graph Databases",
                definition: "Databases structured around relationships between data entities rather than traditional tables.",
                technologies: ["Neo4j, RDF stores, and knowledge graphs."],
                industries: ["HR, finance, and research."],
                useCase: " In HR, graph databases map employee skills and roles to identify career growth opportunities."
            },
            {
                title: "Governance AI",
                definition: "Tools and frameworks ensuring AI compliance with policies and regulatory standards.",
                technologies: ["Model audit systems and compliance dashboards."],
                industries: ["Finance, healthcare, government."],
                useCase: "In finance, governance AI monitors algorithmic trading systems to meet compliance requirements."
            },
            {
                title: "Gradient Optimization",
                definition: "The mathematical process of minimizing loss functions to improve model accuracy during training.",
                technologies: ["Stochastic gradient descent (SGD), Adam optimizer."],
                industries: ["Machine learning, NLP, and robotics."],
                useCase: "In robotics, optimized gradients enhance motion prediction and path accuracy."
            },
            {
                title: "Globalization Support",
                definition: "In robotics, optimized gradients enhance motion prediction and path accuracy.",
                technologies: ["Multilingual NLP, translation models, and localization APIs."],
                industries: ["Multilingual NLP, translation models, and localization APIs."],
                useCase: "In e-commerce, AI translation engines localize product listings for different markets, and companies hire AI agents to handle multilingual customer queries."
            }
        ]
    },
    {
        letter: "H",
        topics: [
            {
                title: "Human-in-the-Loop (HITL)",
                definition: "A system design where humans supervise or correct AI outputs to improve accuracy and trust.",
                technologies: ["Feedback monitoring tools and annotation platforms."],
                industries: ["Healthcare, customer service, and public administration."],
                useCase: "In healthcare, HITL workflows allow clinicians to validate AI-generated diagnoses before final reporting."
            },
            {
                title: "Hybrid Deployment",
                definition: "A model combining cloud and on-premise environments for running AI systems.",
                technologies: ["Containerization, edge computing, and orchestration tools."],
                industries: ["Finance, healthcare, and education."],
                useCase: "In finance, hybrid deployment supports secure local data processing with scalable cloud analytics."
            },
            {
                title: "Heuristic Modeling",
                definition: "Rule-based AI that uses experience-driven logic rather than pure statistical methods.",
                technologies: ["Decision trees and constraint satisfaction algorithms."],
                industries: ["Logistics, operations, and automation systems."],
                useCase: "In logistics, heuristic models optimize delivery routes based on real-time constraints."
            },
            {
                title: "Healthcare Automation",
                definition: "The use of AI to improve efficiency and accuracy in medical processes.",
                technologies: ["NLP, ML diagnostics, and workflow automation."],
                industries: ["Healthcare"],
                useCase: "In hospitals, automation manages patient scheduling and data entry to free up staff time."
            },
            {
                title: "Hyperparameter Tuning",
                definition: "The process of adjusting parameters that govern model behavior to optimize performance.",
                technologies: ["Grid search, Bayesian optimization, and AutoML."],
                industries: ["AI development, research, and analytics."],
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
                technologies: ["Natural language understanding (NLU), reinforcement learning, and multi-agent systems."],
                industries: ["Customer service, logistics, and education."],
                useCase: "In customer service, intelligent agents handle support queries, learn from user feedback, and escalate complex issues to human staff."
            },
            {
                title: "Integration API",
                definition: "A set of programmable interfaces that enable communication between AI systems and other software.",
                technologies: ["REST APIs, GraphQL, and middleware connectors."],
                industries: ["Education, enterprise systems, and healthcare."],
                useCase: "In healthcare, APIs integrate patient management platforms with diagnostic AI for seamless data exchange."
            },
            {
                title: "Inference Engine",
                definition: "The part of an AI system that applies rules or models to data inputs to generate conclusions.",
                technologies: ["The part of an AI system that applies rules or models to data inputs to generate conclusions."],
                industries: ["Expert systems, diagnostics, and automation."],
                useCase: "In diagnostics, inference engines analyze medical data to suggest possible conditions based on patterns."
            },
            {
                title: "Intent Detection",
                definition: "Identifying the purpose or goal behind a user’s input in a conversation or dataset.",
                technologies: ["NLP, transformer models, and semantic analysis."],
                industries: ["Customer support, HR, and marketing."],
                useCase: "In HR chatbots, intent detection distinguishes between leave requests, job inquiries, and policy questions."
            },
            {
                title: "Interactive Voice Response (IVR)",
                definition: "Technology that allows users to interact with systems through voice or keypad input over telephony.",
                technologies: ["Speech recognition, NLP, and voice synthesis."],
                industries: ["Banking, healthcare, and public services."],
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
                technologies: ["Data visualization, behavioral analytics, and predictive modeling."],
                industries: ["Marketing, e-commerce, and customer experience."],
                useCase: "In e-commerce, journey analytics maps user paths from product search to checkout to improve conversions."
            },
            {
                title: "Job Automation",
                definition: "The use of AI and automation tools to handle repetitive or rule-based job functions.",
                technologies: ["RPA, machine learning, and workflow orchestration."],
                industries: ["HR, manufacturing, and logistics."],
                useCase: "In HR, job automation screens resumes and ranks candidates using AI-based scoring models."
            },
            {
                title: "JSON APIs",
                definition: "Lightweight data-interchange formats used for transmitting structured information between systems.",
                technologies: ["JSON schema, RESTful API frameworks, and webhooks."],
                industries: ["Web applications, education, and analytics."],
                useCase: "In education, JSON APIs enable data sharing between learning management systems and reporting dashboards."
            },
            {
                title: "Judgment Modeling",
                definition: "Simulating expert reasoning by encoding decision-making logic into AI systems.",
                technologies: ["Expert systems, rule-based reasoning, and probabilistic models."],
                industries: ["Legal, finance, and healthcare."],
                useCase: "In finance, judgment models evaluate creditworthiness using structured decision rules."
            },
            {
                title: "Joint Learning",
                definition: "A machine learning technique where multiple tasks or models are trained simultaneously for mutual benefit.",
                technologies: ["Multi-task learning and parameter sharing networks."],
                industries: ["Research, NLP, and computer vision."],
                useCase: "In NLP research, joint learning allows sentiment and topic models to improve each other’s accuracy."
            }
        ]
    },
    {
        letter: "K",
        topics: [
            {
                title: "Knowledge Graph",
                definition: "A structured representation of entities and their relationships for contextual reasoning.",
                technologies: ["RDF, SPARQL, and ontology management systems."],
                industries: ["Search engines, HR, and research analytics."],
                useCase: "In HR, knowledge graphs connect employee skills to training programs for career development."
            },
            {
                title: "Knowledge Base Automation",
                definition: "Automating the creation and maintenance of organizational knowledge repositories.",
                technologies: ["NLP, document parsing, and semantic indexing."],
                industries: ["Customer support, IT, and education."],
                useCase: "In IT support, automated systems categorize tickets and update FAQs based on common user queries."
            },
            {
                title: "Keyword Extraction",
                definition: "The process of identifying important words or phrases from text for analysis or indexing.",
                technologies: ["NLP, TF-IDF, and embedding-based ranking."],
                industries: ["Marketing, HR, and publishing."],
                useCase: "In marketing, keyword extraction identifies trending terms from social media feedback for campaign optimization."
            },
            {
                title: "Kogents Platform Core",
                definition: "The foundational layer enabling multi-channel AI deployment, integration, and data orchestration.",
                technologies: ["APIs, NLP, workflow automation, and analytics engines."],
                industries: ["Healthcare, education, HR, and e-commerce."],
                useCase: "In healthcare, the platform connects appointment scheduling, patient communication, and analytics modules into one ecosystem."
            },
            {
                title: "Key Performance Monitoring",
                definition: "Tracking performance indicators to measure system efficiency and reliability.",
                technologies: ["Data dashboards, analytics tools, and log analysis."],
                industries: ["IT operations, HR, and manufacturing."],
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
                technologies: ["Transformer architecture, attention mechanisms, and text embeddings."],
                industries: ["Customer service, education, and marketing."],
                useCase: "In education, LLMs power tutoring assistants that answer student questions and explain complex topics."
            },
            {
                title: "Language Understanding",
                definition: "The ability of AI to comprehend meaning, intent, and relationships within text.",
                technologies: ["NLP, syntax parsing, and semantic modeling."],
                industries: ["Customer support, HR, and analytics."],
                useCase: "In customer support, AI interprets user messages to identify requests and provide accurate responses."
            },
            {
                title: "Learning Loop",
                definition: "A continuous process where AI systems improve through exposure to new data or feedback.",
                technologies: ["Reinforcement learning and data retraining pipelines."],
                industries: ["Customer experience, education, and automation."],
                useCase: ": In education technology, systems refine recommendations as students interact with learning materials."
            },
            {
                title: "Low-Code AI",
                definition: "Platforms allowing users to build and deploy AI models with minimal coding.",
                technologies: ["Drag-and-drop model builders, APIs, and AutoML."],
                industries: ["HR, education, and business analytics."],
                useCase: " In HR, low-code tools enable non-technical teams to automate reporting and candidate tracking, often integrated with AI recruiting assistants for smarter hiring workflows."
            },
            {
                title: "Latency Optimization",
                definition: "Techniques to reduce the time delay in AI processing or response.",
                technologies: ["Edge computing, model compression, and caching."],
                industries: ["E-commerce, telecommunications, and healthcare."],
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
                technologies: ["Supervised, unsupervised, and reinforcement learning models."],
                industries: ["Finance, healthcare, and marketing."],
                useCase: "In finance, ML models detect fraudulent transactions by recognizing unusual activity patterns."
            },
            {
                title: "Model Evaluation",
                definition: "Assessing AI model accuracy, performance, and reliability using test datasets.",
                technologies: ["Cross-validation, confusion matrices, and F1 scoring."],
                industries: ["AI development, healthcare, and research."],
                useCase: "In healthcare, model evaluation ensures diagnostic tools meet safety and accuracy standards before deployment."
            },
            {
                title: "Multi-Modal AI",
                definition: "AI systems that combine data types like text, audio, and images for comprehensive understanding.",
                technologies: ["Multi-encoder transformers and data fusion networks."],
                industries: ["Education, media, and healthcare."],
                useCase: "In education, multi-modal AI supports video-based learning analytics to assess student engagement."
            },
            {
                title: "Monitoring Dashboard",
                definition: "A visual interface displaying performance metrics for AI systems and workflows.",
                technologies: ["Data visualization frameworks, APIs, and alert systems."],
                industries: ["IT, HR, and operations."],
                useCase: "In IT, dashboards monitor AI uptime, latency, and processing loads in real time."
            },
            {
                title: "Model Deployment Pipeline",
                definition: "The automated process of moving trained AI models into production environments.",
                technologies: ["CI/CD tools, containerization, and orchestration frameworks."],
                industries: ["Enterprise IT, analytics, and cloud platforms."],
                useCase: ": In enterprise analytics, deployment pipelines update AI models automatically with new data."
            }
        ]
    },
    {
        letter: "N",
        topics: [
            {
                title: "Natural Language Processing (NLP)",
                definition: "The field that enables computers to understand, interpret, and generate human language.",
                technologies: ["Tokenization, transformers, and named-entity recognition."],
                industries: ["Education, HR, and customer service."],
                useCase: "In customer service, NLP interprets chat messages to deliver contextually relevant responses."
            },
            {
                title: "Neural Network",
                definition: "A computational model inspired by the human brain, composed of interconnected nodes that process data.",
                technologies: ["Deep learning architectures, activation functions, and backpropagation."],
                industries: ["Healthcare, robotics, and analytics."],
                useCase: "In healthcare, neural networks analyze radiology images to detect abnormalities."
            },
            {
                title: "Normalization",
                definition: "The process of adjusting and scaling data for consistency in AI models.",
                technologies: ["Min-max scaling, z-score normalization, and feature engineering."],
                industries: ["Data analytics, finance, and research."],
                useCase: "In finance, normalization standardizes transaction data to improve fraud detection accuracy."
            },
            {
                title: "Named Entity Linking",
                definition: "The task of connecting recognized entities in text to their corresponding entries in a knowledge base.",
                technologies: ["NLP, graph databases, and entity disambiguation algorithms."],
                industries: ["Research, law, and HR."],
                useCase: "In research analysis, entity linking connects author names to institutional affiliations for citation tracking."
            },
            {
                title: "Network Optimization",
                definition: "Improving the efficiency and reliability of communication or computational networks.",
                technologies: ["Graph algorithms, bandwidth allocation models, and load balancing."],
                industries: ["Telecommunications, cloud computing, and logistics."],
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
                technologies: ["NLP, CRM integrations, and workflow automation."],
                industries: ["Retail, telecom, and healthcare."],
                useCase: " In retail, omnichannel AI connects chat, email, and phone interactions to provide consistent customer support."
            },
            {
                title: "Ontology Management",
                definition: "Organizing and maintaining structured vocabularies that define relationships among data concepts.",
                technologies: ["RDF, OWL, and knowledge graph frameworks."],
                industries: ["Research, education, and healthcare."],
                useCase: "In education, ontology management structures course and curriculum data for intelligent search and recommendation."
            },
            {
                title: "Operational AI",
                definition: "The application of AI models to support real-time business operations and decision-making.",
                technologies: ["Predictive analytics, process automation, and data orchestration tools."],
                industries: ["Manufacturing, logistics, and HR."],
                useCase: "In logistics, operational AI predicts delivery delays and reroutes shipments dynamically."
            },
            {
                title: "Optimization Algorithm",
                definition: "A computational method that improves efficiency or accuracy by minimizing or maximizing specific objectives.",
                technologies: ["Gradient descent, genetic algorithms, and Bayesian optimization."],
                industries: ["Finance, robotics, and analytics."],
                useCase: "In finance, optimization algorithms allocate investments for maximum return within risk constraints."
            },
            {
                title: "Orchestration Platform",
                definition: "A system that coordinates multiple AI services, data pipelines, and workflows.",
                technologies: ["Kubernetes, Airflow, and API-based automation frameworks."],
                industries: ["IT, education, and enterprise automation."],
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
                technologies: ["Regression analysis, decision trees, and neural networks."],
                industries: ["Healthcare, marketing, and finance."],
                useCase: "In healthcare, predictive analytics identifies at-risk patients for early intervention."
            },
            {
                title: "Prompt Engineering",
                definition: "The method of designing effective inputs to guide large language models to desired outputs.",
                technologies: ["LLMs, NLP, and token optimization techniques."],
                industries: ["Customer service, education, and content generation."],
                useCase: "In education, prompt engineering helps AI tutoring systems generate accurate and contextually relevant responses."
            },
            {
                title: "Personalization Engine",
                definition: "AI systems that customize content or experiences for individual users.",
                technologies: ["Recommendation algorithms, collaborative filtering, and reinforcement learning."],
                industries: [" E-commerce, media, and education."],
                useCase: "In e-commerce, personalization engines suggest products based on user browsing and purchase behavior."
            },
            {
                title: "Process Mining",
                definition: "Analyzing event logs to discover and optimize business processes.",
                technologies: ["Data mining, workflow analytics, and AI modeling."],
                industries: ["Manufacturing, HR, and finance."],
                useCase: "In HR, process mining identifies bottlenecks in employee onboarding workflows."
            },
            {
                title: "Privacy Preservation",
                definition: "Ensuring AI systems protect sensitive data throughout processing and storage.",
                technologies: ["Encryption, anonymization, and federated learning."],
                industries: ["Healthcare, banking, and government."],
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
                technologies: ["Model testing frameworks, monitoring tools, and anomaly detection."],
                industries: ["Software development, manufacturing, and healthcare."],
                useCase: "In software testing, AI validates system performance under varying user conditions."
            },
            {
                title: "Query Optimization",
                definition: "Techniques used to improve the speed and efficiency of database queries.",
                technologies: ["Indexing, caching, and query planning algorithms."],
                industries: ["Data analytics, e-commerce, and research."],
                useCase: "In e-commerce, query optimization speeds up product searches in large online catalogs."
            },
            {
                title: "Quantitative Modeling",
                definition: "Using mathematical and statistical models to simulate real-world processes or systems.",
                technologies: ["Regression, stochastic modeling, and Monte Carlo simulations."],
                industries: ["Finance, logistics, and economics."],
                useCase: " In finance, quantitative models forecast market risks and portfolio performance."
            },
            {
                title: "Queue Management AI",
                definition: "Intelligent systems that predict and allocate resources to handle queues efficiently.",
                technologies: ["Predictive analytics, time-series modeling, and dynamic scheduling."],
                industries: ["Healthcare, retail, and public administration."],
                useCase: " In healthcare, queue management AI reduces patient wait times by optimizing appointment scheduling."
            },
            {
                title: "Quick-Start Deployment",
                definition: "Accelerated implementation methods for deploying AI models or systems.",
                technologies: ["Pre-trained models, APIs, and containerized workflows."],
                industries: ["Education, HR, and enterprise automation."],
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
                technologies: ["Markov decision processes and policy gradient algorithms."],
                industries: ["Robotics, logistics, and gaming."],
                useCase: "In logistics, reinforcement learning optimizes delivery routing to minimize travel time."
            },
            {
                title: "Responsible AI",
                definition: "Developing and using AI systems ethically, transparently, and safely.",
                technologies: ["Fairness metrics, explainable AI, and compliance frameworks."],
                industries: ["Healthcare, government, and finance."],
                useCase: "In government, responsible AI ensures citizen-facing systems operate transparently and without bias."
            },
            {
                title: "Retrieval-Augmented Generation (RAG)",
                definition: "Combining external data retrieval with generative AI to improve accuracy and relevance.",
                technologies: ["Vector databases, embeddings, and LLMs."],
                industries: ["Knowledge management, customer service, and education."],
                useCase: "In customer service, RAG systems retrieve real-time company data to generate precise answers to user queries."
            },
            {
                title: "Risk Detection Model",
                definition: "AI systems that identify potential threats or anomalies in data.",
                technologies: ["Anomaly detection, predictive modeling, and ML classifiers."],
                industries: [" Finance, cybersecurity, and healthcare."],
                useCase: "In finance, risk detection models identify suspicious transaction patterns to prevent fraud."
            },
            {
                title: "Response Optimization",
                definition: "Adjusting AI-generated outputs to improve accuracy, tone, or relevance.",
                technologies: ["Reinforcement learning and fine-tuning algorithms."],
                industries: ["Customer service, marketing, and HR."],
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
                technologies: ["Acoustic modeling, deep neural networks, and NLP."],
                industries: ["Healthcare, education, and telecommunications."],
                useCase: "In healthcare, doctors use speech recognition to transcribe notes hands-free into electronic medical records."
            },
            {
                title: "Semantic Search",
                definition: "Search systems that understand the meaning and context behind user queries.",
                technologies: ["Embeddings, transformer models, and vector databases."],
                industries: ["Research, HR, and education."],
                useCase: "In HR, semantic search identifies candidates based on skill relevance rather than exact keyword matches."
            },
            {
                title: "Scalability Framework",
                definition: "Infrastructure that allows AI systems to expand efficiently as data or demand grows.",
                technologies: ["Cloud computing, container orchestration, and load balancing."],
                industries: ["Enterprise IT, e-commerce, and education."],
                useCase: "In e-commerce, scalability frameworks ensure AI recommendations remain fast during peak traffic."
            },
            {
                title: "Sentiment Analysis",
                definition: "The process of identifying emotions and opinions in text or speech.",
                technologies: ["NLP, text classification, and transformer models."],
                industries: ["Marketing, customer support, and HR."],
                useCase: " In marketing, sentiment analysis measures customer reactions to brand campaigns on social media."
            },
            {
                title: "Secure Access Layer",
                definition: "A protective framework that ensures only authorized users can access AI systems or data.",
                technologies: ["Authentication protocols, encryption, and identity management."],
                industries: ["Finance, healthcare, and enterprise IT."],
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
                technologies: ["Attention layers, positional encoding, and deep learning."],
                industries: ["NLP, computer vision, and audio processing."],
                useCase: " In NLP, transformers power language models that understand and generate complex human text."
            },
            {
                title: "Text Classification",
                definition: "Categorizing text into predefined groups for analysis or automation.",
                technologies: ["NLP, machine learning classifiers, and LLMs."],
                industries: ["HR, education, and customer service."],
                useCase: "In HR, text classification filters resumes by job role and skill category automatically."
            },
            {
                title: "Task Automation",
                definition: "Applying AI to execute specific repetitive or rule-based tasks efficiently.",
                technologies: ["RPA, APIs, and workflow engines."],
                industries: ["HR, finance, and logistics."],
                useCase: "In finance, AI automates invoice validation and payment processing."
            },
            {
                title: "Training Pipeline",
                definition: "The structured workflow for collecting, preparing, and training AI models on data.",
                technologies: ["Data preprocessing tools, model validation frameworks, and orchestration systems."],
                industries: ["AI development, education, and analytics."],
                useCase: "In AI research, training pipelines automate dataset updates and model retraining cycles."
            },
            {
                title: "Trustworthy AI",
                definition: "AI systems designed to operate reliably, transparently, and ethically under defined principles.",
                technologies: ["Explainable AI (XAI), model validation, and auditing tools."],
                industries: ["Healthcare, finance, and public administration."],
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
                technologies: ["Behavioral analytics, sentiment analysis, and heat mapping."],
                industries: ["E-commerce", "Education", "Customer service"],
                useCase: "In e-commerce, AI evaluates navigation patterns to optimize website layouts and improve purchase completion rates."
            },
            {
                title: "Unstructured Data Processing",
                definition: "Techniques that analyze non-tabular data such as text, images, or audio.",
                technologies: ["NLP, computer vision, and deep learning."],
                industries: ["Healthcare, HR, and research."],
                useCase: " In healthcare, AI processes unstructured clinical notes to extract key patient information for diagnosis support."
            },
            {
                title: "Usage Analytics",
                definition: "Monitoring and analyzing how users interact with applications or services.",
                technologies: ["Data tracking, event logging, and machine learning analytics."],
                industries: ["Education, software, and marketing."],
                useCase: "In education, analytics tracks student engagement with digital learning platforms to improve course design."
            },
            {
                title: "Unified Interface",
                definition: "A single access point combining multiple AI tools or data systems into one dashboard.",
                technologies: ["APIs, microservices, and front-end frameworks."],
                industries: ["Enterprise IT, healthcare, and HR."],
                useCase: "In HR, a unified interface centralizes employee data, analytics, and communication tools for easy access."
            },
            {
                title: "Utility Bots",
                definition: "AI-driven programs that perform simple, specific tasks automatically.",
                technologies: ["RPA, NLP, and scripting engines."],
                industries: ["IT support, HR, and finance."],
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
                technologies: ["NLP, speech recognition, and dialogue management."],
                industries: ["Healthcare, customer support, and education."],
                useCase: "In healthcare, virtual assistants help patients schedule appointments and receive post-visit guidance."
            },
            {
                title: "Voice AI",
                definition: "Technology that enables machines to process and generate human speech.",
                technologies: ["Speech-to-text, NLP, and neural speech synthesis."],
                industries: ["Telecommunications, healthcare, and customer service."],
                useCase: "In customer service, voice AI manages call routing and provides instant answers to user inquiries."
            },
            {
                title: "Vector Database",
                definition: "A database that stores high-dimensional vector embeddings for similarity search and AI retrieval tasks.",
                technologies: ["FAISS, Pinecone, and Milvus."],
                industries: ["Search engines, customer support, and education."],
                useCase: "In customer support, vector databases enable retrieval-augmented AI systems to find relevant documentation quickly."
            },
            {
                title: "Verification Models",
                definition: "AI systems that validate data integrity, identity, or document authenticity.",
                technologies: ["Computer vision, biometrics, and anomaly detection."],
                industries: ["Finance, security, and education."],
                useCase: "In finance, verification models confirm identity through facial recognition before approving digital transactions."
            },
            {
                title: "Vision AI",
                definition: "The use of AI to interpret and act on visual data such as images or video.",
                technologies: ["Convolutional neural networks (CNNs), image segmentation, and object detection."],
                industries: ["Healthcare, manufacturing, and retail."],
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
                technologies: ["RPA, API orchestration, and decision engines."],
                industries: [" HR, finance, and healthcare."],
                useCase: "In finance, AI-driven workflow automation accelerates invoice processing and approvals."
            },
            {
                title: "Webhooks",
                definition: "Automated messages triggered by events that send real-time data between systems.",
                technologies: ["REST APIs, HTTP protocols, and event listeners."],
                industries: ["Education, IT, and e-commerce."],
                useCase: " In education, webhooks notify teachers instantly when students submit assignments."
            },
            {
                title: "Workforce Analytics",
                definition: "The use of AI to evaluate and optimize workforce performance.",
                technologies: ["Predictive analytics, data visualization, and ML modeling."],
                industries: ["HR, manufacturing, and public services."],
                useCase: "In HR, analytics forecast staffing needs and identify productivity gaps."
            },
            {
                title: "Wellness AI",
                definition: "AI systems that monitor and promote physical and mental well-being.",
                technologies: ["Predictive analytics, wearable sensors, and health tracking algorithms."],
                industries: ["Healthcare, HR, and fitness."],
                useCase: "In corporate HR, wellness AI analyzes employee wellness data to recommend personalized health programs."
            },
            {
                title: "Watson Integration",
                definition: "Integration of IBM Watson AI capabilities within enterprise systems.",
                technologies: ["NLP APIs, machine learning services, and cognitive computing frameworks."],
                industries: ["Healthcare, finance, and customer service."],
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
                technologies: ["Model interpretability tools, SHAP, and LIME."],
                industries: ["Finance, healthcare, and public services."],
                useCase: "In finance, XAI explains why a loan application was approved or denied, improving accountability."
            },
            {
                title: "XML Pipelines",
                definition: "Frameworks for transforming and validating XML data through defined workflows.",
                technologies: ["XSLT, XPath, and XML schema validation."],
                industries: ["Publishing, data exchange, and education."],
                useCase: "In publishing, XML pipelines automate the formatting of manuscripts for multiple digital platforms."
            },
            {
                title: "Experience Design AI",
                definition: "The application of AI to personalize and optimize user interactions.",
                technologies: ["Behavioral analytics, recommendation engines, and NLP."],
                industries: ["E-commerce, education, and marketing."],
                useCase: "In e-commerce, AI-driven design tools adjust website layout dynamically based on user behavior."
            },
            {
                title: "Execution Monitoring",
                definition: "Tracking and managing AI processes to ensure operational reliability.",
                technologies: ["System logs, anomaly detection, and workflow monitors."],
                industries: ["IT, manufacturing, and analytics."],
                useCase: "In IT operations, monitoring tools detect slow or failed AI processes for immediate remediation."
            },
            {
                title: "Experimental Models",
                definition: "Prototype AI models used for research and testing before large-scale deployment.",
                technologies: ["Deep learning frameworks, simulation environments, and sandboxing tools."],
                industries: ["Research, education, and product development."],
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
                technologies: ["Predictive analytics, optimization algorithms, and ML models."],
                industries: ["Marketing, manufacturing, and finance."],
                useCase: "In marketing, AI allocates budgets across channels to maximize campaign ROI."
            },
            {
                title: "Yearly Model Review",
                definition: "The periodic evaluation of AI systems to maintain accuracy, compliance, and relevance.",
                technologies: ["Model retraining, audit tools, and data validation."],
                industries: ["Finance, healthcare, and enterprise IT."],
                useCase: "In healthcare, yearly model reviews ensure diagnostic AI remains effective with new medical data."
            },
            {
                title: "Youth Engagement AI",
                definition: "AI applications designed to enhance learning and communication among younger audiences.",
                technologies: ["Chatbots, gamification engines, and adaptive learning algorithms."],
                industries: ["Education and public services."],
                useCase: "In education, youth engagement AI provides personalized tutoring and interactive learning experiences."
            },
            {
                title: "Yield-Based Forecasting",
                definition: "Predictive analysis that estimates outcomes based on historical performance data.",
                technologies: ["Time-series models, regression algorithms, and ML forecasting."],
                industries: ["Manufacturing, finance, and agriculture."],
                useCase: "In manufacturing, forecasting predicts production yield to optimize raw material use."
            },
            {
                title: "Yes/No Classifier",
                definition: "A binary AI model that categorizes inputs into two distinct outcomes.",
                technologies: ["Logistic regression, neural networks, and decision trees."],
                industries: ["HR, finance, and customer service."],
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
                technologies: ["Transfer learning and LLM-based generalization."],
                industries: ["NLP, computer vision, and research."],
                useCase: "In NLP, zero-shot learning enables models to classify new topics without retraining."
            },
            {
                title: "Zero-Downtime Deployment",
                definition: "Updating or replacing AI systems without interrupting service availability.",
                technologies: ["Blue-green deployment, container orchestration, and CI/CD pipelines."],
                industries: ["Enterprise IT, finance, and healthcare."],
                useCase: "In finance, zero-downtime deployment ensures trading platforms remain active during software updates."
            },
            {
                title: "Zero-Trust Security",
                definition: "A cybersecurity model that verifies every request regardless of source or location.",
                technologies: ["Multi-factor authentication, encryption, and identity access management."],
                industries: ["Government, finance, and healthcare."],
                useCase: "In healthcare, zero-trust frameworks protect patient data from unauthorized internal and external access."
            },
            {
                title: "Zone Automation",
                definition: "Segmenting operations into zones for localized, independent AI-driven control.",
                technologies: ["IoT sensors, edge computing, and process automation."],
                industries: ["Manufacturing, logistics, and facility management."],
                useCase: "In manufacturing, each production zone uses AI to monitor machinery and optimize efficiency."
            },
            {
                title: "Zoom Integration",
                definition: "Embedding AI features into video conferencing platforms for enhanced collaboration.",
                technologies: ["NLP, voice recognition, and API integration."],
                industries: [" Education, HR, and corporate training."],
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
                                className="subHeading mt-2"
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
                                        {topic.title === "API Integration" && (
                                            <p className="benefit-description">
                                                <strong>Platforms:</strong>{" "}
                                                {topic.platforms}
                                            </p>
                                        )}
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
