
export const heroContent = {
    title: "SOFTWARE DEVELOPER",
    description: "I build digital products that refuse to be boring.",
    status: "SYSTEM STATUS: ONLINE",
    languages: "Python • JavaScript • Java • C++ • Node"
}

export const aboutContent = {
    title: "Who am I?",
    description: "I am a software engineer driven by the challenge of bridging the gap between cutting-edge AI research and scalable production environments. Whether it is fine-tuning LLMs for domain-specific tasks or architecting real-time collaboration platforms, I focus on building systems that are as technically robust as they are user-centric.",
    highlights: ["AI research", "real-time collaboration", "software engineer", "AI development", "full-stack mastery", "algorithmic excellence", "RAG", "LLMs", "robust architectures", "Knight on LeetCode", "Coders' FaceOff"],
    location: "Jharkhand, India",
    status: "Available for work",
    avatar_tag: "AVATAR.JPG",
    avatar: "Assets/images/drawing2.jpeg",
    "whatIBring": [
        {
            heading: "Production-Grade AI",
            description: "Experienced in developing RAG and fine-tuning LLMs"
        },
        {
            heading: "Full-Stack Mastery",
            description: "Proficient in creating seamless and robust architectures."
        },
        {
            heading: "Algorithmic Excellence",
            description: "A Knight on LeetCode (Top 9% globally) with a 1st place finish at Coders' FaceOff."
        }
    ]
}


export const skillsContent = {
    title: "domains.shell",
    tagline: "/// domain expertise ///",
    domains: [
        {
            name: "Languages",
            skills : [
                { name: "Python", proficiency: 92 },
                { name: "JavaScript", proficiency: 90 },
                { name: "TypeScript", proficiency: 88 },
                { name: "SQL", proficiency: 85 },
                { name: "C++", proficiency: 85 },
            ]
        },
        {
            name: "Frontend",
            skills : [
                { name: "React.js", proficiency: 90 },
                { name: "Next.js", proficiency: 86 },
                { name: "Redux"},
                { name: "Tailwind CSS"}
            ]
        },
        {
            name: "Backend",
            skills : [
                { name: "Node.js", proficiency: 88 },
                { name: "Express.js", proficiency: 85 },
                { name: "FastAPI", proficiency: 80 },
                { name: "Git", proficiency: 90 },
                { name: "Docker", proficiency: 85 },
            ]
        },
        {
            name: "Databases",
            skills : [
                { name: "MongoDB", proficiency: 88 },
                { name: "PostgreSQL", proficiency: 85 },
                { name: "SQL Server", proficiency: 85 },
                { name: "Redis", proficiency: 80 },
            ]
        },
        {
            name: "AI & Data",
            skills : [
                { name: "RAG Systems", proficiency: 90 },
                { name: "LLM Fine-tuning" },
                { name: "Data Analysis" },
                { name: "Pytorch, TensorFlow, Scikit-learn" }
            ]
        },
        {
            name: "Architecture & Design",
            skills : [
                { name: "Algorithmic Problem Solving" },
                { name: "Microservices"},
                { name: "Pub/Sub Systems" },
                { name: "Real-time Collaboration Systems"}
            ]
        }

    ]
}


export const journeyContent = {
    title: "Journey Timeline",
    experiences: [
        {
            company: "Fluencer Digital",
            role: "Data Analyst",
            duration: "May 2024 - July 2024",
            location: "Ranchi",
            description: [
                "Analyzed large-scale marketing datasets using Pandas and NumPy to identify key influencer engagement trends and performance metrics.",
                "Designed interactive dashboards that transformed raw campaign data into actionable insights for strategic decision-making.",
                "Standardized heterogeneous data sources to ensure high data quality for downstream statistical reporting."
            ]
        },
        {
            company: "Sleath Startup",
            role: "AI Research Intern",
            duration: "Feb 2025 - June 2025",
            location: "Lucknow",
            description: [
                 "Analyzed large-scale marketing datasets using Pandas and NumPy to identify key influencer engagement trends and performance metrics.",
                "Designed interactive dashboards that transformed raw campaign data into actionable insights for strategic decision-making.",
                "Standardized heterogeneous data sources to ensure high data quality for downstream statistical reporting."
            ]
        }, 
        {
            company: "Vanivert AI",
            role: "Full Stack Developer",
            duration: "July 2025 - Dec 2025",
            location: "Una",
            description: [
                "Architected a real-time conversational Voice Agent integrating STT, LLMs, and TTS engines to achieve human-like latency and intonation.",
                "Spearheaded a core backend migration from Django to FastAPI, significantly reducing API response times and optimizing asynchronous task handling.",
                "Developed a Full Stack internal tooling suite with Next.js and integrated the Gmail API to automate enterprise communication workflows.",
                "Established robust CI/CD pipelines using GitHub Actions, automating testing and deployment cycles to minimize production failures."
            ]
        },
        {
            company: "SGF-Tech",
            role: "Software Engineer Intern",
            duration: "Dec 2025 - Present",
            location: "Mumbai",
            description: [
                "Architecting a Headless E-commerce platform using Medusa.js and Mercurius, managing complex product logic within a scalable Monorepo.",
                "Automated product cataloging by building an intelligent PDF parser, reducing manual data entry time by 90% via structured entity extraction.",
                "Orchestrating end-to-end sales pipelines and inventory management across multiple digital storefronts while maintaining rigorous CI/CD standards."
            ]
        },
        {
            company: "Naalanda AI",
            role: "Backend Developer Intern",
            duration: "Feb 2026 - Present",
            location: "Bangalore",
            description: [
                "Developing a scalable RAG system for an EdTech platform, integrating vector databases and fine-tuning LLMs to deliver personalized learning experiences.",
                "Implementing a microservices architecture using FastAPI and RabbitMQ to handle high-throughput data processing and real-time user interactions.",
                "Collaborating with cross-functional teams to design and deploy AI-driven features while ensuring robust security and compliance standards."
            ]
        }
    ]
}


export const projectContent = {
    title: "Selected Works",
    repoLink: "https://github.com/roshan3101?tab=repositories",
    projects: [
        {
            name: "CollabTask",
            techStack: ["Next.js 16", "FastAPI", "WebSockets", "Redis", "PostgreSQL"],
            description: "Real-time enterprise collaboration platform with multi-tenant workspace architecture.",
            highlights: [
                "Engineered a high-performance event infrastructure using WebSockets, delivering sub-100ms real-time updates for team activity feeds.",
                "Resolved write conflicts in multi-user environments by implementing Optimistic Locking, ensuring data integrity without compromising throughput.",
                "Achieved end-to-end type safety by synchronizing Zod and Pydantic schemas, accelerating developer velocity by ~40%."
            ],
            imageUrl: "/assets/projects/collatask.png",
            codeLink: "https://github.com/roshan3101/CollabTask",
            liveLink: "https://collab-task-woad.vercel.app",

        },
        {
            name: "IntelliScrape",
            techStack: ["Next.js", "Node.js", "Prisma", "TypeScript", "DAG Engine"],
            description: "No-code web automation SaaS for designing and executing visual scraping workflows.",
            highlights: [
                "Developed an interactive visual builder that parses JSON-based Directed Acyclic Graphs (DAGs) to execute multi-step automation tasks.",
                "Designed a consumption-based credit system to track resource usage and prevent API abuse.",
                "Secured sensitive user credentials using AES-256 encryption at rest for safe injection into automation workflows."
            ],
            imageUrl: "/assets/projects/intelliscrape.png",
            codeLink: "https://github.com/roshan3101/IntelliScrape",
            liveLink: "https://intelliscrape.vercel.app/"
        },
        {
            name: "Slimnastics",
            techStack: ["MERN Stack", "Redux Toolkit", "Tailwind CSS", "Razorpay", "GCP"],
            description: "Comprehensive Gym Management & E-Commerce SaaS solution.",
            highlights: [
                "Architected a secure RBAC system and JWT httpOnly cookie flow to isolate data across Admin, Trainer, and Member roles.",
                "Integrated Razorpay with server-side validation for atomic transactions and order history management.",
                "Optimized frontend performance by ~35% using Redux Toolkit for global state caching and Vite for optimized bundling."
            ],
            imageUrl: "/assets/projects/slimnastics.png",
            codeLink: "https://github.com/roshan3101/Slimnastics",
            liveLink: "https://slimnastics.vercel.app/"
        },
        {
            name: "LLaMA 3.1 Fine-Tuning Pipeline",
            description: "Production-grade modular framework for training and deploying domain-specific Small Language Models (SLMs).",
            techStack: ["Python", "PyTorch", "Hugging Face", "QLoRA"],
            highlights: [
            "Developed a QLoRA fine-tuning pipeline for 8B+ parameter models, utilizing 4-bit quantization to reduce training costs by ~60%.",
            "Optimized inference for edge devices by quantizing models to INT4 GGUF format, enabling real-time CPU execution with <1GB RAM.",
            "Built an OpenAI-compatible API layer to serve local models as drop-in replacements for cloud-based LLMs."
            ],
            imageUrl: "/assets/projects/finetuning.png",
            codeLink: "https://github.com/roshan3101/llama-finetuning",
            liveLink: "N/A",
        },
        {
            name: "RAG chatbot",
            description: "A provider-agnostic Retrieval-Augmented Generation system for enterprise document intelligence.",
            techStack: ["FastAPI", "LangGraph", "Next.js", "Vector DBs", "SSE"],
            highlights: [
              "Architected a factory-pattern backend allowing runtime switching between LLM providers (OpenAI/Ollama) and Vector DBs (Chroma/Pinecone).",
                "Implemented real-time token streaming via Server-Sent Events (SSE), reducing perceived latency (TTFB) by ~60%.",
                "Engineered an ingestion pipeline with semantic chunking to optimize retrieval accuracy across diverse document types."
            ],
            imageUrl: "/assets/projects/rag-chatbot.png",
            codeLink: "https://github.com/roshan3101/rag-chatbot",
            liveLink: "https://rag-chatbot-liard-kappa.vercel.app/chat"
        },
        {
            name: "Parking Slot Detector",
            description: "Computer Vision system for real-time parking occupancy detection.",
            techStack: ["Python", "TensorFlow", "OpenCV", "Flask", "ResNet"],
            highlights: [
                "Utilized Transfer Learning with ResNet architecture to achieve high-accuracy classification with a custom-annotated dataset.",
                "Designed an interactive configuration GUI to dynamically define Regions of Interest (ROI) for rapid site deployment.",
                "Optimized inference loops to process live video frames efficiently, rendering real-time status overlays for client dashboards."
            ],
            imageUrl: "/assets/projects/parking-slot.png",
            codeLink: "https://github.com/roshan3101/Parking_slot",
            liveLink: "N/A"
        },
        {
            name: "Translingo",
            description: "A real-time multilingual chat platform facilitating seamless communication across language barriers.",
            techStack: ["React", "Socket.io", "Node.js", "MongoDB", "Redux Toolkit", "Cloudinary"],
            highlights: [
                "Engineered a full-stack real-time messaging architecture using Socket.io, supporting 1:1 direct messages and multi-user group channels.",
                "Implemented secure JWT-based authentication with HTTP-only cookies and BCrypt hashing to ensure enterprise-grade data protection.",
                "Architected an integrated file-sharing system with Cloudinary and Multer, enabling secure uploads of images and documents up to 10MB.",
                "Optimized system security and reliability by implementing API rate limiting, server-side input validation, and graceful error boundaries.",
                "Deployed a scalable distributed system using Vercel for the frontend and Google Cloud Run for the containerized backend."
            ],
            imageUrl: "/assets/projects/translingo.png",
            codeLink: "https://github.com/roshan3101/Translingo",
            liveLink: "https://translingo-mu.vercel.app/"
        }
    ]
}


export const contactContent = {
    description: "I am currently available for freelance work and open to full-time opportunities.",
    email: "imroshansahu31@gmail.com",
    location: "Bangalore, Karnataka, India",
    whatsapp: "+91 81020 51183",
    github: "https://github.com/roshan3101",
    linkedin: "https://www.linkedin.com/in/roshan-kumar-sahu-60069628a/",
    instagram: "https://www.instagram.com/im_roshansahu/",
    leetcode: "https://leetcode.com/roshan3101/",
    codeforces: "https://codeforces.com/profile/Roshan909"
}

export const reportEntries = [
  {
    id: "001",
    from: "Infrawave Solutions",
    when: "2025",
    role: "Founder / Product Lead",
    organization: "SmartCity Solutions",
    content: "Architected a production-grade Computer Vision Parking Slot Detector now managing real-time occupancy across 30+ commercial facilities with exceptional reliability."
  },
  {
    id: "002",
    from: "Founding Team",
    when: "2025",
    role: "Lead Engineers",
    organization: "Fixacity",
    content: "Developed a fine-tuned LLM blending career guidance with empathetic support, significantly improving user engagement and automated assistance quality."
  },
  {
    id: "003",
    from: "Management Team",
    when: "2025",
    role: "Product Strategy",
    organization: "Zepul",
    content: "Built a low-latency AI Voice Agent for virtual meetings, delivering natural interactions and optimized real-time communication performance."
  }
]