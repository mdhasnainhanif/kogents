import Banner from "@/components/ai-whatsapp-agent/Banner";
import AwardSection from "@/components/CustomerServiceAIAgents/AwardSection";
import BrandLogoSlider from "@/components/CustomerServiceAIAgents/BrandLogoSlider";
import ClientTestimonial from "@/components/CustomerServiceAIAgents/ClientTestimonial";
import Counter from "@/components/CustomerServiceAIAgents/Counter";
import CustomerBenefitSection from "@/components/CustomerServiceAIAgents/CustomerBenefitSection";
import CustomerCards from "@/components/CustomerServiceAIAgents/CustomerCards";
import CustomerGrowthCards from "@/components/CustomerServiceAIAgents/CustomerGrowthCards";
import CustomerServiceCard from "@/components/CustomerServiceAIAgents/CustomerServiceCard";
import CustomerServiceFaqSection from "@/components/CustomerServiceAIAgents/CustomerServiceFaqSection";
import FaqWithImage from "@/components/CustomerServiceAIAgents/FaqWithImage";
import TechnologiesSlider from "@/components/CustomerServiceAIAgents/TechnologiesSlider";
import BLogList from "@/components/blog/BlogList";
import React from "react";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Best AI Teacher Assistant for Smarter Teaching | Kogents',
    description:
        'Support learning with our kogents AI teacher assistant that handles grading, planning, and student queries. Get started today.',
    keywords: [],

    alternates: {
        canonical: 'https://kogents.ai/solutions/ai-teacher-assistant',
        languages: {
            'en-US': 'https://kogents.ai/solutions/ai-teacher-assistant',
        },
    },

    openGraph: {
        title: 'Best AI Teacher Assistant for Smarter Teaching | Kogents',
        description:
            'Support learning with our kogents AI teacher assistant that handles grading, planning, and student queries. Get started today.',
        url: 'https://www.kogents.ai/solutions/ai-teacher-assistant',
        type: 'website',
        images: [
            {
                url: 'https://www.kogents.ai/assets/img/logo-new.svg',
                width: 1200,
                height: 630,
                alt: 'Team Kogents AI working together',
            },
        ],
        siteName: 'Kogents AI',
        locale: 'en_US',
    },
}

const page = () => {
    const breadcrumbItems = [
        { label: 'Solutions', href: '/solutions' },
        { label: 'AI Teacher Assistant', active: true }
    ];

    const pageData = {
        banner: {
            tag: "Teacher AI Agent",
            title: "Smarter AI Teacher Assistant for Modern Classrooms",
            button: {
                text: "Get AI Support",
                link: "/request-demo",
                iconSrc: "/assets/img/icons/arrow-right.svg",
                modalTarget: "#welcomeModal",
            },
            description:
                "When teachers get weighed down by tedious tasks, student engagement takes a hit. \n Kogents eases the burden of routine duties and simplifies daily work, allowing teachers to regain their time to focus on their time with students. \n Our intelligent AI teacher assistant is crafted to provide essential support, reducing stress, optimizing workflows, and bringing the focus back to genuine teaching. \n It makes sure lessons are organized, feedback is prompt, and classrooms operate smoothly. \n So let’s make every lesson smoother and every day lighter for teachers.",
            image: {
                src: "/assets/img/ai-teacher-assistant/banner.webp",
                alt: "Customer Service AI Agents",
                width: 800,
                height: 681,
                className: "mx-4",
            },
        },
    };
    return (
        <>
            {pageData.banner && <Banner data={pageData.banner} breadcrumbItems={breadcrumbItems} />}
            <Counter
                data={{
                    responseTime: 3,
                    supportTickets: 90,
                    resolutionRate: 2,
                    roi: 70,
                }}
                labels={{
                    responseTime: "Faster Lesson Planning",
                    supportTickets: "Automated Grading & Feedback",
                    resolutionRate: "Higher Student Engagement",
                    roi: "Less Admin Work",
                }}
                units={{
                    responseTime: "×",
                    supportTickets: "%",
                    resolutionRate: "×",
                    roi: "%",
                }}
                title=""
                subtitle=""
            />
            <CustomerCards
                showButton={true}
                buttonText="Test It In Class Now"
                tag="Benefits"
                colSize="col-lg-6 col-md-6 col-12"
                heading="Why an AI Classroom Assistant Transforms Teaching Flow"
                description={`An AI teaching assistant does things like score multiple-choice tests and keep track of how well students are doing. This lets teachers give more detailed feedback and lead discussions. Here's why an AI teacher assistant is needed to help with burnout and heavy workloads.`}
                benefits={[
                    {
                        id: 1,
                        icon: "/assets/img/ai-teacher-assistant/1.svg",
                        title: "Smarter Lesson Planning",
                        description:
                            "To make differentiated lesson plans and practice activities, a smart teaching assistant can do the work in minutes instead of hours. This leaves you with more time for creativity and student engagement.",
                    },
                    {
                        id: 2,
                        icon: "/assets/img/ai-teacher-assistant/2.svg",
                        title: "Faster Grading Feedback",
                        description:
                            "An AI grading assistant quickly grades objective tests and points out skill gaps, which lets teachers focus on more extensive instruction. This immediate feedback helps in improving your student performance while shortening assessment time.",
                    },
                    {
                        id: 3,
                        icon: "/assets/img/ai-teacher-assistant/3.svg",
                        title: "Lighter Teacher Workload",
                        description:
                            "Handing over repetitive tasks and planning work to a classroom assistant helps to lighten the load and reduce stress. This way, teachers regain energy to mentor and connect with their students.",
                    },
                    {
                        id: 4,
                        icon: "/assets/img/ai-teacher-assistant/4.svg",
                        title: "Reduce Administrative Burden",
                        description:
                            "Using AI tutoring agents to automate scheduling, tracking attendance, and keeping track of student progress cuts down on administrative work that needs to be done. Because of this, teachers can focus on the class instead of the paperwork.",
                    },
                ]}
            />
            <CustomerGrowthCards
                tag="Solutions"
                heading="AI Classroom Assistant Services to Balance Teaching and Time"
                description=""
                solutions={[
                    {
                        id: 1,
                        iconColor: "bg-pink-500",
                        title: "Insights to Boost Student Engagement",
                        description:
                            "AI in education, such as adaptive learning platforms, identifies when students face challenges or lose interest, allowing for immediate adjustments to maintain engagement for all learners.",
                    },
                    {
                        id: 2,
                        iconColor: "bg-purple-500",
                        title: "Automation That Lightens Teacher Workload",
                        description:
                            "An artificial intelligence assistant for lesson planning can put together differentiated lesson plans and practice exercises in a matter of minutes, freeing up hours that you would have spent on preparation.",
                    },
                    {
                        id: 3,
                        iconColor: "bg-teal-500",
                        title: "Support to Keep Teachers Focused",
                        description:
                            "When a digital assistant for teachers manages the behind-the-scenes tasks, teachers can remain fully engaged in the classroom, provide greater attention to their students, and concentrate on what matters most.",
                    },
                    {
                        id: 4,
                        iconColor: "bg-teal-500",
                        title: "Effortless Classroom Management",
                        description:
                            "Teachers can concentrate on connecting and teaching by using artificial intelligence to automate daily administrative tasks like tracking progress, recording attendance, and scheduling tasks.",
                    },
                ]}
                buttonText="Automate Your Tasks Now"
                buttonLink="#"
            />
            <BrandLogoSlider />
            <CustomerServiceCard
                tag="Why Kogents"
                heading="Why Our AI Classroom Assistant Leads the Way"
                description=""
                differentiators={[
                    {
                        id: 1,
                        icon: "/assets/img/ai-teacher-assistant/5.svg",
                        title: "Seamless Collaboration Across Classrooms",
                        description: [
                            "It shouldn't feel like extra work to share resources, lesson plans, and student progress. Our education AI assistant supports teamwork by keeping everyone on the same page and making sure teachers can work together without any extra stress."
                        ]
                    },
                    {
                        id: 2,
                        icon: "/assets/img/ai-teacher-assistant/6.svg",
                        title: "Simple Solutions for Complex Workloads",
                        description: [
                            "Teaching can be overwhelming with all of the paperwork, lesson planning, and grading. By utilizing technologies that are specifically designed to simplify and expedite daily tasks, teachers are able to concentrate on the most important aspects of their work.",
                        ]
                    },
                    {
                        id: 3,
                        icon: "/assets/img/ai-teacher-assistant/7.svg",
                        title: "Consistency in Every Classroom Task",
                        description:
                            "The intelligent AI teacher assistant is a game-changing innovation for classroom tasks because it helps with lesson organization, progress tracking, and reporting while maintaining consistency and minimizing errors, giving teachers peace of mind.",
                    },
                    {
                        id: 4,
                        icon: "/assets/img/ai-teacher-assistant/8.svg",
                        title: "Support That Never Slows Down",
                        description:
                            "To ensure that teachers never feel like they are managing their day on their own, the assistant is always ready to lend a hand and provide consistent and dependable support.",
                    },
                    {
                        id: 5,
                        icon: "/assets/img/ai-teacher-assistant/9.svg",
                        title: "Freedom From Repetitive Tasks",
                        description: [
                            "Time and energy that could be better spent engaging with students are drained by redundancy. The assistant takes care of the boring, monotonous duties behind the scenes so that teachers can focus on making the lessons fun and creative."],
                    }
                ]}
            />
            <AwardSection />
            <FaqWithImage
                tag="Process"
                heading="The Workflow Behind Our AI Classroom Assistant"
                description=""
                faqItems={[
                    {
                        id: 1,
                        q: "Define Teaching Goals",
                        a: "You should begin by outlining your goals for the class, including particular skills you hope your students will acquire and the specific results you hope to see. The AI tutoring agent bases all the next steps on these objectives.",
                        image: "/assets/img/ai-teacher-assistant/define-teaching-goals.webp",
                    },
                    {
                        id: 2,
                        q: "Organize Lesson Materials",
                        a: "Select or upload your teaching resources, slides, notes, activities, or references. The assistant organizes them into a structured library, ensuring that they are easily accessible when required.",
                        image: "/assets/img/ai-teacher-assistant/organize-lesson-materials.webp",
                    },
                    {
                        id: 3,
                        q: "Create Lesson Outlines",
                        a: "With objectives and resources in place, the assistant creates lesson outlines that progress in an orderly way. It provides you with a clear roadmap while leaving room for your own personal touch by suggesting activities, pacing, and checkpoints.",
                        image: "/assets/img/ai-teacher-assistant/create-lesson-outlines.webp",
                    },
                    {
                        id: 4,
                        q: "Automate Grading and Feedback",
                        a: "After lessons, the assistant evaluates tests and gives feedback on objective tasks quickly. This way, students get answers quickly, and teachers don't have to spend hours marking the same things over and over again.",
                        image: "/assets/img/ai-teacher-assistant/automate-grading-and-feedback.webp",
                    },
                    {
                        id: 5,
                        q: "Track Progress and Improve",
                        a: "Finally, the assistant gathers performance data, highlighting student strengths and areas where additional support is required. With this information, you can improve future lessons and keep every student progressing forward.",
                        image: "/assets/img/ai-teacher-assistant/track-progress-and-improve.webp",
                    }
                ]}


                rightImage="/assets/img/faq.png"
                rightImageAlt="Healthcare AI Implementation Process"
            />
            <TechnologiesSlider />
            <ClientTestimonial
                tag="Reviews"
                heading="Client Testimonials"
                description=""
                testimonials={[
                    {
                        id: 1,
                        quote:
                            "We've been using the healthcare AI agent for about four months now, and the results are incredible. Our patient response times have dropped dramatically, and patients actually appreciate how fast and accurate the medical information is. The system also frees up our medical staff to focus on complex patient care instead of answering the same appointment and billing questions over and over again. It feels like we added an extra team member without the cost, and the HIPAA compliance gives us peace of mind.",
                        avatar: "DR",
                        name: "Dr. Sarah Mitchell",
                        title: "Medical Director, City General Hospital",
                        rating: 5,
                    },
                    {
                        id: 2,
                        quote:
                            "I was skeptical at first, but the personalized patient support feature blew me away. It remembers past interactions and makes every conversation feel seamless while maintaining complete patient privacy.",
                        avatar: "JR",
                        name: "Jennifer Rodriguez",
                        title: "Practice Manager, Family Care Clinic",
                        rating: 5,
                    },
                    {
                        id: 3,
                        quote:
                            "The physician-in-the-loop escalation is a lifesaver. Our patients never feel stuck talking to a bot — the system knows exactly when to bring in a real healthcare provider for medical decisions.",
                        avatar: "AH",
                        name: "Dr. Amir Hassan",
                        title: "Cardiologist, Heart & Vascular Center",
                        rating: 5,
                    },
                    {
                        id: 4,
                        quote:
                            "What stood out for me was how simple the setup was with our existing EHR system. Within just a few days, the AI agent was already live and integrated with Epic. Our staff no longer waste time on routine administrative tasks because everything is automated. After a month of using it, I could already see a 60% improvement in patient satisfaction, and the cost savings compared to hiring additional administrative staff are significant.",
                        avatar: "SL",
                        name: "Dr. Sophia Lee",
                        title: "Chief Medical Officer, Regional Medical Center",
                        rating: 5,
                    },
                ]}
                statistics={[
                    {
                        id: 1,
                        icon: "⭐⭐⭐",
                        value: "85%",
                        label: "Increase in Patient Satisfaction",
                    },
                    {
                        id: 2,
                        icon: "⚙️⏰",
                        value: "65%",
                        label: "Reduction in Administrative Workload",
                    },
                ]}
            />
            <CustomerBenefitSection
                buttonText="Get Your Price Today"
                leftColumn={{
                    tag: "Start Now",
                    title: "Plan Faster, Grade Quicker, & Teach Better with Kogents",
                    subtitle: "Kogents AI Teacher Assistant streamlines lesson planning, grading, and progress tracking so every class runs with consistency, accuracy, and higher student engagement.",
                    appStoreImage: "/assets/img/app-section/6.png",
                    googlePlayImage: "/assets/img/app-section/7.png",
                }}
                rightColumn={{
                    appPreviewImage: "/assets/img/img-new.webp",
                    qrCodeImage: "/assets/img/app-section/5.png",
                    qrCodeText: "Scan to Download",
                }}
                backgroundImage="/assets/img/bc/video-bg.webp"
            />
            <CustomerServiceFaqSection
                tag="FAQs"
                heading="Frequently Asked Questions"
                description=""
                faqItems={[
                    {
                        q: "What makes the Kogents AI Teacher Assistant different from other AI tools?",
                        a: "Kogents is teacher-specific, not generic automation. Our assistant integrates lesson planning, grading, classroom management, and student engagement into one interface, unlike other AI platforms. It integrates seamlessly into classroom workflows, reducing teacher stress, saving time, and improving learning."
                    },
                    {
                        q: "How quickly can schools start using Kogents’ AI Teacher Assistant?",
                        a: "Many teachers can start using the assistant right away, and they don't even need to learn how to use it technically. Kogents is designed to work well with other tools already in the classroom. This means that teachers can start using it right away to improve lesson planning, grading, and student engagement."
                    },
                    {
                        q: "What is an AI teacher assistant?",
                        a: "An AI teacher assistant is a digital tool that helps teachers by taking care of time-consuming tasks like planning lessons, grading, and organizing the classroom. It doesn't take the place of teachers; instead, it helps them out by making daily tasks easier and giving them more time to focus on teaching and getting students involved."
                    },
                    {
                        q: "How do AI assistants help teachers?",
                        a: "AI assistants support teachers by simplifying repetitive tasks such as creating lesson outlines, grading quizzes, monitoring attendance, and offering prompt feedback. This lessens the administrative load, enhances classroom dynamics, and enables teachers to focus more on mentoring and guiding students."
                    },
                    {
                        q: "What are the benefits of AI in classrooms for teachers?",
                        a: "The benefits include lowering stress from administrative work, saving hours of preparation and grading time, and enhancing student engagement through prompt feedback and individualized support. Instructors have more time to concentrate on meaningful classroom interactions, creativity, and connections rather than dealing with paperwork."
                    },
                    {
                        q: "How do AI tools compare to human teaching assistants?",
                        a: "AI tools are better at speed, accuracy, and consistency with tasks that need to be done over and over again. Human teaching assistants, on the other hand, are better at empathy and interpersonal support. They work well together: AI does the routine tasks quickly, while human assistants focus on getting to know students, giving them emotional support, and building relationships with them."
                    },
                    {
                        q: "What are some examples of AI tools for educators?",
                        a: "Some examples are lesson planning assistants that help create structured outlines, grading systems that instantly check assignments, classroom management tools that keep track of progress, and platforms that recommend personalized practice exercises. These tools are here to make things easier and help teachers create better lessons."
                    }
                ]}
                buttonText="Connect With AI Agent"
            />
            <BLogList />
        </>
    );
};

export default page;
