export const portfolioData = {
  profile: {
    name: "Roshan Kumar Sahu",
    tagline: "Full Stack Developer | AI Engineer | Competitive Programmer",
    bio: "I am a software engineer driven by the challenge of bridging the gap between cutting-edge AI research and scalable production environments. Whether it is fine-tuning LLMs for domain-specific tasks or architecting real-time collaboration platforms, I focus on building systems that are as technically robust as they are user-centric.",
    whatIBringToTable: [
      "Production-Grade AI: Experienced in developing Retrieval-Augmented Generation (RAG) systems and fine-tuning models like LLaMA 3.1 using QLoRA to achieve high performance on constrained hardware.",
      "Full-Stack Mastery: From building headless e-commerce architectures with Medusa.js to orchestrating real-time communication via WebSockets and FastAPI, I create seamless end-to-end experiences.",
      "Algorithmic Excellence: A Knight on LeetCode (Top 9% globally) with a 1st place finish at Coders' FaceOff, I approach every problem with algorithmic precision and performance in mind.",
      "Strategic Experience: I have spearheaded backend migrations from Django to FastAPI , deployed Computer Vision models for fashion-tech , and automated enterprise workflows that reduce manual labor by 90%",
    ],
    links: {
      email: "mailto:imroshansahu31@gmail.com",
      linkedin: "https://www.linkedin.com/in/roshan-kumar-sahu-60069628a",
      github: "https://github.com/roshan3101",
      portfolio: "https://roshan31.vercel.app"
    }
  },
  education: [
    {
      institution: "Indian Institute of Information Technology, Una",
      degree: "B.Tech in Electronics and Communication Engineering",
      duration: "2022 – 2026",
      location: "Una, India",
      cgpa: "8.90"
    },
    {
      institution: "Delhi Public School, Ranchi",
      degree: "Senior Secondary",
      year: "2021",
      score: "96.2%"
    },
    {
      institution: "Oxford Public School, Ranchi",
      degree: "Secondary School",
      year: "2019",
      score: "97.2%"
    }
  ],
  experience: [
  {
    "company": "SGF-Tech",
    "role": "Full Stack Developer",
    "duration": "Dec 2025 – Present",
    "location": "Remote",
    "highlights": [
      "Architecting a Headless E-commerce platform using Medusa.js and Mercurius, managing complex product logic within a scalable Monorepo.",
      "Automated product cataloging by building an intelligent PDF parser, reducing manual data entry time by 90% via structured entity extraction.",
      "Orchestrating end-to-end sales pipelines and inventory management across multiple digital storefronts while maintaining rigorous CI/CD standards."
    ]
  },
  {
    "company": "Vanivert AI",
    "role": "Full Stack Developer",
    "duration": "July 2025 – Dec 2025",
    "location": "Remote",
    "highlights": [
      "Architected a real-time conversational Voice Agent integrating STT, LLMs, and TTS engines to achieve human-like latency and intonation.",
      "Spearheaded a core backend migration from Django to FastAPI, significantly reducing API response times and optimizing asynchronous task handling.",
      "Developed a Full Stack internal tooling suite with Next.js and integrated the Gmail API to automate enterprise communication workflows.",
      "Established robust CI/CD pipelines using GitHub Actions, automating testing and deployment cycles to minimize production failures."
    ]
  },
  {
    "company": "Stealth Startup (AI/Fashion Tech)",
    "role": "AI & Backend Engineer",
    "duration": "Feb 2025 – June 2025",
    "location": "Remote",
    "highlights": [
      "Translated academic research into production-ready Computer Vision pipelines for Virtual Try-On (VTON) and Body Shape Analysis.",
      "Engineered a Hybrid Recommendation System with automated Cron jobs to update user metadata and product embeddings daily.",
      "Hardened backend security by implementing custom middleware for Rate Limiting, JWT authentication, and input validation to ensure data integrity."
    ]
  },
  {
    "company": "Fluencer-Digital",
    "role": "Data Analyst",
    "duration": "May 2024 – July 2024",
    "location": "Remote",
    "highlights": [
      "Analyzed large-scale marketing datasets using Pandas and NumPy to identify key influencer engagement trends and performance metrics.",
      "Designed interactive dashboards that transformed raw campaign data into actionable insights for strategic decision-making.",
      "Standardized heterogeneous data sources to ensure high data quality for downstream statistical reporting."
    ]
  }
],
  projects: [
    {
    "name": "CollabTask",
    "description": "Real-time enterprise collaboration platform with multi-tenant workspace architecture.",
    "techStack": ["Next.js 16", "FastAPI", "WebSockets", "Redis", "PostgreSQL"],
    "highlights": [
      "Engineered a high-performance event infrastructure using WebSockets, delivering sub-100ms real-time updates for team activity feeds.",
      "Resolved write conflicts in multi-user environments by implementing Optimistic Locking, ensuring data integrity without compromising throughput.",
      "Achieved end-to-end type safety by synchronizing Zod and Pydantic schemas, accelerating developer velocity by ~40%."
    ],
    "githubUrl": "https://github.com/roshan3101/CollabTask",
    "liveUrl": "https://collab-task-woad.vercel.app/",
    "image": {
      "light": "/collatask-light.png",
      "dark": "/collabtask-dark.png"
    }
  },
  {
    "name": "IntelliScrape",
    "description": "No-code web automation SaaS for designing and executing visual scraping workflows.",
    "techStack": ["Next.js", "Node.js", "Prisma", "TypeScript", "DAG Engine"],
    "highlights": [
      "Developed an interactive visual builder that parses JSON-based Directed Acyclic Graphs (DAGs) to execute multi-step automation tasks.",
      "Designed a consumption-based credit system to track resource usage and prevent API abuse.",
      "Secured sensitive user credentials using AES-256 encryption at rest for safe injection into automation workflows."
    ],
    "githubUrl": "https://github.com/roshan3101/IntelliScrape",
    "liveUrl": "https://intelliscrape.vercel.app/",
    "image": {
      "light": "/intelliscrape-light.png",
      "dark": "/intelliscrape-dark.png"
    }
  },
  {
    "name": "Slimnastics",
    "description": "Comprehensive Gym Management & E-Commerce SaaS solution.",
    "techStack": ["MERN Stack", "Redux Toolkit", "Tailwind CSS", "Razorpay", "GCP"],
    "highlights": [
      "Architected a secure RBAC system and JWT httpOnly cookie flow to isolate data across Admin, Trainer, and Member roles.",
      "Integrated Razorpay with server-side validation for atomic transactions and order history management.",
      "Optimized frontend performance by ~35% using Redux Toolkit for global state caching and Vite for optimized bundling."
    ],
    "githubUrl": "https://github.com/roshan3101/Slimnastics",
    "liveUrl": "https://slimnastics.vercel.app/",
    "image": {
      "light": "/slimnastics-light.png",
      "dark": "/slimnastics-dark.png"
    }
  },
  {
    "name": "LLaMA 3.1 Fine-Tuning Pipeline",
    "description": "Production-grade modular framework for training and deploying domain-specific Small Language Models (SLMs).",
    "techStack": ["Python", "PyTorch", "Hugging Face", "QLoRA", "PEFT", "GGUF"],
    "highlights": [
      "Developed a QLoRA fine-tuning pipeline for 8B+ parameter models, utilizing 4-bit quantization to reduce training costs by ~60%.",
      "Optimized inference for edge devices by quantizing models to INT4 GGUF format, enabling real-time CPU execution with <1GB RAM.",
      "Built an OpenAI-compatible API layer to serve local models as drop-in replacements for cloud-based LLMs."
    ],
    "githubUrl": "https://github.com/roshan3101/llama-finetuning",
    "liveUrl": "N/A",
    "image": "/finetuning.png"
  },
  {
    "name": "Modular RAG Chatbot",
    "description": "A provider-agnostic Retrieval-Augmented Generation system for enterprise document intelligence.",
    "techStack": ["FastAPI", "LangGraph", "Next.js", "Vector DBs", "SSE"],
    "highlights": [
      "Architected a factory-pattern backend allowing runtime switching between LLM providers (OpenAI/Ollama) and Vector DBs (Chroma/Pinecone).",
      "Implemented real-time token streaming via Server-Sent Events (SSE), reducing perceived latency (TTFB) by ~60%.",
      "Engineered an ingestion pipeline with semantic chunking to optimize retrieval accuracy across diverse document types."
    ],
    "githubUrl": "https://github.com/roshan3101/rag-chatbot",
    "liveUrl": "https://rag-chatbot-liard-kappa.vercel.app/chat",
    "image": "/rag-chatbot.png"
  },
  {
    "name": "Parking Slot Detector",
    "description": "Computer Vision system for real-time parking occupancy detection.",
    "techStack": ["Python", "TensorFlow", "OpenCV", "Flask", "ResNet"],
    "highlights": [
      "Utilized Transfer Learning with ResNet architecture to achieve high-accuracy classification with a custom-annotated dataset.",
      "Designed an interactive configuration GUI to dynamically define Regions of Interest (ROI) for rapid site deployment.",
      "Optimized inference loops to process live video frames efficiently, rendering real-time status overlays for client dashboards."
    ],
    "githubUrl": "https://github.com/roshan3101/Parking_slot",
    "liveUrl": "N/A",    
    "image": "/parking-slot.png"
  },
  {
  "name": "Translingo",
  "description": "A real-time multilingual chat platform facilitating seamless communication across language barriers.",
  "techStack": ["React", "Socket.io", "Node.js", "MongoDB", "Redux Toolkit", "Cloudinary"],
  "highlights": [
    "Engineered a full-stack real-time messaging architecture using Socket.io, supporting 1:1 direct messages and multi-user group channels.",
    "Implemented secure JWT-based authentication with HTTP-only cookies and BCrypt hashing to ensure enterprise-grade data protection.",
    "Architected an integrated file-sharing system with Cloudinary and Multer, enabling secure uploads of images and documents up to 10MB.",
    "Optimized system security and reliability by implementing API rate limiting, server-side input validation, and graceful error boundaries.",
    "Deployed a scalable distributed system using Vercel for the frontend and Google Cloud Run for the containerized backend."
  ],
  "githubUrl": "https://github.com/roshan3101/Translingo",
  "liveUrl": "https://translingo-mu.vercel.app/",
  "image": "/translingo.png"
}
],
  achievements: [
  "Achieved 'Knight' status on LeetCode by solving 600+ problems, ranking in the top 9% of competitive programmers globally.",
  "Awarded 1st Position at Coders' FaceOff (IIIT Una, 2024), demonstrating proficiency in advanced data structures and algorithms.",
  "Secured 3rd Position at Electrothon (NIT Hamirpur, 2024), developing a high-impact solution within a 48-hour sprint.",
  "Selected as a finalist and participant in premier hackathons including HackTU 5.0 (Thapar) and HackTheHills (IIIT Una)."
],
  skills: {
    languages: ["Python", "C++", "JavaScript", "TypeScript"],
    backend: ["FastAPI", "Node.js", "Express.js", "Django", "Next.js"],
    frontend: ["React", "Tailwind CSS", "Redux", "Shadcn/UI", "Next.js"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"],
    devops: ["Docker", "Git", "GitHub", "AWS (S3, EC2)", "CI/CD", "Linux"],
    ml_ai: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "RAG", "Fine-Tuning"]
  },
  leadership: [
  {
    "role": "Lead Organizer",
    "organization": "TechFest '24",
    "impact": "Orchestrated a 200+ participant hackathon, managing end-to-end event logistics, technical judging panels, and sponsor relations."
  },
  {
    "role": "Technical Mentor",
    "organization": "Data Science Bootcamp",
    "impact": "Facilitated technical growth for 30+ juniors by delivering workshops on Pythonic patterns, SQL optimization, and foundational ML principles."
  }
],
  freelance: [
    {
      title: "Full-Stack Web Development",
      summary: "End-to-end product development for startups and small businesses.",
      focus: [
        "MVPs, dashboards, and internal tools",
        "High-performance landing pages and marketing sites",
        "Integrations with Stripe/Razorpay, auth, and third-party APIs"
      ],
      stack: ["Next.js", "React", "Node.js", "FastAPI", "PostgreSQL", "MongoDB"],
      availability: "4–8 hrs/week · Remote only"
    },
    {
      title: "AI & Automation Consulting",
      summary: "Practical AI features that plug into existing products.",
      focus: [
        "Chatbots, RAG systems, and internal assistants",
        "Process automation using Python scripts and APIs",
        "Model selection, evaluation, and prompt engineering"
      ],
      stack: ["Python", "LLMs", "RAG", "LangChain", "Vector DBs"],
      availability: "Short-term projects & retained consulting"
    }
  ],
  testimonials: [
  {
    "name": "Infrawave Solutions",
    "role": "Founder / Product Lead",
    "organization": "SmartCity Solutions",
    "content": "Roshan was instrumental in architecting our Computer Vision-based Parking Slot Detector. The system is exceptionally reliable and has been successfully integrated into our primary product, currently managing real-time occupancy for over 30 commercial parking facilities across Jaipur. His ability to deliver production-ready AI is outstanding."
  },
  {
    "name": "Founding Team",
    "role": "Lead Engineers",
    "organization": "Fixacity",
    "content": "Roshan developed a specialized fine-tuned LLM for our platform, focusing on the delicate intersection of career guidance and emotional support. He managed to capture a nuanced tone that feels both professional and empathetic, significantly enhancing our user engagement and the quality of our automated support."
  },
  {
    "name": "Management Team",
    "role": "Product Strategy",
    "organization": "Zepul",
    "content": "We tasked Roshan with building a high-performance AI Voice Agent for virtual meetings, and the results exceeded our expectations. He successfully optimized the agent for low-latency, natural-sounding interactions, proving his deep expertise in orchestrating complex real-time AI communication pipelines."
  }
]
}

export type PortfolioData = typeof portfolioData
