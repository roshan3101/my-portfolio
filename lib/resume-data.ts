export const resumeData = {
"Full Stack Developer": {
    "skills": {
      "Frontend": ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Vite", "Framer Motion"],
      "Backend": ["Node.js", "Express", "FastAPI", "REST APIs", "JWT Authentication"],
      "Databases": ["MongoDB", "PostgreSQL", "Prisma"],
      "DevOps & Cloud": ["Docker", "Docker Compose", "GCP Cloud Run", "Vercel", "CI/CD"],
      "System Design": ["RBAC", "Monorepo Architecture", "Scalable APIs"],
      "Others": ["TypeScript", "Zod", "WebSockets", "Payment Gateway Integration"]
    },
"projects": [
{
"title": "Slimnastics (Gym Management & E-Commerce)",
"highlights": [
"Built end-to-end MERN platform with RBAC (Admin/Trainer/Member) and httpOnly JWT cookies for secure sessions.",
"Integrated Razorpay payments and custom e-commerce flow with server-side validation and order history.",
"Improved frontend performance (~35%) using Redux Toolkit + Vite; deployed frontend on Vercel and backend on GCP Cloud Run."
],
"codeUrl": "https://github.com/roshan3101/Slimnastics",
"liveUrl": "https://slimnastics.vercel.app/",
"tags": ["MERN", "RBAC", "Payments", "Redux", "GCP", "Vercel"],
"roles": ["Full Stack Developer", "Product Engineer"]
},
{
"title": "CollabTask (Real-Time Collaboration)",
"highlights": [
"Built a Next.js + FastAPI collaboration app with sub-100ms real-time updates using WebSockets and optimistic UI.",
"Enforced end-to-end type safety (TypeScript/Zod ↔ Pydantic) and implemented Kanban drag-and-drop with virtualized lists.",
"Containerized dev→prod pipeline (Docker Compose) and deployed multi-service stack with CI/CD."
],
"codeUrl": "https://github.com/roshan3101/CollabTask",
"liveUrl": "https://collab-task-woad.vercel.app/",
"tags": ["Next.js", "FastAPI", "WebSockets", "TypeScript", "CI/CD"],
"roles": ["Full Stack Developer", "Frontend Engineer"]
},
{
"title": "IntelliScrape (No-Code Web Automation SaaS)",
"highlights": [
"Built a visual DAG workflow builder (React) with backend orchestration for browser automation and real-time execution logs.",
"Implemented consumption-based credit metering, secure credentials (AES-256 at rest) and extensible plugin actions.",
"Scaled execution engine & optimized DB by using Prisma ORM and indexed schemas for low-latency retrieval."
],
"codeUrl": "https://github.com/roshan3101/IntelliScrape",
"liveUrl": "https://intelliscrape.vercel.app/",
"tags": ["React", "Prisma", "SaaS", "Workflow", "Security"],
"roles": ["Full Stack Developer", "Product Engineer"]
}
],
"experience": [
{
"company": "SGF-Tech",
"role": "Full Stack Developer",
"start": "Dec 2025",
"end": "Present",
"highlights": [
"Built headless e-commerce architecture with Medusa.js; automated product ingestion from PDFs to DB.",
"Maintained monorepo CI/CD and accelerated feature delivery.",
"Collaborated with product and ops teams to ship features safely in a multi-tenant environment while keeping core APIs backward compatible."
],
"tags": ["Medusa.js", "Monorepo", "Automation"]
},
{
"company": "Vanivert AI",
"role": "Full Stack Developer",
"start": "Jul 2025",
"end": "Dec 2025",
"highlights": [
"Developed voice agent UI and internal tooling (Next.js + FastAPI) and automated Gmail integrations.",
"Integrated AI retrieval and inference pipelines into production systems, enabling low-latency, high-throughput request handling.",
"Implemented Celery-style background task queues and async workflows to offload long-running jobs and keep core APIs responsive."
],
"tags": ["Next.js", "FastAPI", "Voice AI"]
}
]
},
"Backend Developer": {
    "skills": {
      "Backend Core": ["Node.js", "Express", "FastAPI", "REST APIs", "Async Programming"],
      "Databases": ["PostgreSQL", "MongoDB", "Redis"],
      "System Design": ["Multi-Tenant Architecture", "Rate Limiting", "Job Queues", "Audit Logging"],
      "Security": ["JWT", "CSRF Protection", "Secrets Encryption", "API Hardening"],
      "DevOps": ["Docker", "Cloud Run", "Autoscaling", "CI/CD"],
      "Others": ["WebSockets", "Cron Jobs", "Observability"]
    },
"projects": [
{
"title": "Slimnastics (Backend)",
"highlights": [
"Designed scalable REST API in Node/Express with centralized middleware (validation, logging, error handling).",
"Implemented JWT access/refresh flow, CSRF protections and hardened endpoints against common attacks.",
"Optimized MongoDB schema and indexing for analytics queries; deployed via Docker → GCP Cloud Run with autoscaling."
],
"codeUrl": "https://github.com/roshan3101/Slimnastics",
"liveUrl": "https://slimnastics.vercel.app/",
"tags": ["Node.js", "Express", "MongoDB", "JWT", "GCP"],
"roles": ["Backend Developer", "SDE I"]
},
{
"title": "CollabTask (Scalable Multi-Tenant Backend)",
"highlights": [
"Architected multi-tenant PostgreSQL schema and Role-Level Security for strict data isolation per org.",
"Implemented Redis-backed rate limiter (sliding window) and immutable audit logging for compliance.",
"Built a custom WebSocket manager supporting thousands of concurrent connections with connection pooling."
],
"codeUrl": "https://github.com/roshan3101/CollabTask",
"liveUrl": "https://collab-task-woad.vercel.app/",
"tags": ["PostgreSQL", "Redis", "WebSockets", "Rate Limiting"],
"roles": ["Backend Engineer", "SRE Collaboration"]
},
{
"title": "IntelliScrape (Orchestration Engine)",
"highlights": [
"Engineered DAG-based orchestration to parse and execute multi-step automation jobs with state transitions and retry logic.",
"Implemented credit-ledger metering to ensure fair resource usage and billable accounting per task.",
"Secured secrets handling (AES encryption) and optimized job queue throughput for concurrent workflows."
],
"codeUrl": "https://github.com/roshan3101/IntelliScrape",
"liveUrl": "https://intelliscrape.vercel.app/",
"tags": ["Orchestration", "Job Queues", "Security", "Prisma"],
"roles": ["Backend Developer", "System Designer"]
}
],
"experience": [
{
"company": "Vanivert AI",
"role": "Full Stack / Backend",
"start": "Jul 2025",
"end": "Dec 2025",
"highlights": [
"Led migration from Django monolith → FastAPI microservices to reduce API latency and support async tasks.",
"Implemented containerized FastAPI services with Docker and CI/CD pipelines, improving deployment reliability.",
"Introduced async processing and caching layers that reduced p95 latency and improved overall throughput."
],
"tags": ["FastAPI", "Async", "API Migration"]
},
{
"company": "Stealth Startup (Fashion Tech)",
"role": "AI & Backend Engineer",
"start": "Feb 2025",
"end": "Jun 2025",
"highlights": [
"Built CV inference pipelines and secure backend APIs for VTON with rate limiting and cron jobs.",
"Designed FastAPI microservices for model serving, containerized with Docker and monitored in production.",
"Established versioned training-to-serving pipelines enabling reproducible deployments and quick rollbacks."
],
"tags": ["CV", "API Security", "Cron"]
}
]
},
"Frontend Developer": {
    "skills": {
      "Frontend Core": ["React", "Next.js App Router", "TypeScript", "JavaScript (ES6+)"],
      "State & Data": ["Redux Toolkit", "Zod", "Optimistic UI"],
      "UI/UX": ["Tailwind CSS", "shadcn/ui", "Accessibility (a11y)", "Responsive Design"],
      "Performance": ["Virtualization", "Memoization", "Render Optimization"],
      "Realtime": ["WebSockets", "Live Data Streaming"],
      "Others": ["Framer Motion", "Component Architecture"]
    },
"projects": [
{
"title": "Translingo (Real-Time Messaging UI)",
"highlights": [
"Built a responsive React client with Redux Toolkit to sync auth, active chats and notifications reliably.",
"Implemented live file-upload workflow to Cloudinary with client-side validation and non-blocking UX.",
"Delivered accessible UI using Tailwind CSS and Framer Motion with consistent 60fps rendering."
],
"codeUrl": "https://github.com/roshan3101/Translingo",
"liveUrl": "https://translingo-mu.vercel.app/",
"tags": ["React", "Redux", "Tailwind", "WebSockets"],
"roles": ["Frontend Developer", "UI Engineer"]
},
{
"title": "CollabTask (Frontend / App Router)",
"highlights": [
"Built modern, accessible UI in Next.js App Router with shadcn/ui components and performant drag-and-drop Kanban.",
"End-to-end type safety via Zod + shared schemas to prevent contract mismatches and reduce runtime errors.",
"Virtualized large lists and optimized render paths for smooth UX on large datasets."
],
"codeUrl": "https://github.com/roshan3101/CollabTask",
"liveUrl": "https://collab-task-woad.vercel.app/",
"tags": ["Next.js", "Zod", "Accessibility", "Virtualization"],
"roles": ["Frontend Developer", "Product UI"]
},
{
"title": "IntelliScrape (Workflow Builder UI)",
"highlights": [
"Implemented drag-and-drop DAG node editor in React enabling non-technical users to build scraping workflows.",
"Built real-time log streaming UI (WebSockets) to show execution phases and debug info live.",
"Ensured extensibility with plugin-based UI components for new action types without core refactor."
],
"codeUrl": "https://github.com/roshan3101/IntelliScrape",
"liveUrl": "https://intelliscrape.vercel.app/",
"tags": ["React", "DAG Editor", "WebSockets", "Usability"],
"roles": ["Frontend Developer", "UX Engineer"]
}
],
"experience": [
{
"company": "Vanivert AI",
"role": "Full Stack Developer (UI tooling)",
"start": "Jul 2025",
"end": "Dec 2025",
"highlights": [
"Built internal Next.js tooling and UI for conversational agent management.",
"Collaborated closely with backend teams to design APIs that kept UI responsive even under high traffic.",
"Optimized rendering performance and state management in complex internal dashboards to keep interactions smooth."
],
"tags": ["Next.js", "Internal Tools"]
}
]
},
"SDE": {
    "skills": {
      "Programming": ["JavaScript", "TypeScript", "Python"],
      "System Design": ["Distributed Systems", "Microservices", "Concurrency Control"],
      "Backend": ["FastAPI", "Node.js", "WebSockets"],
      "Databases": ["PostgreSQL", "MongoDB", "Indexing Strategies"],
      "Scalability & Reliability": ["Autoscaling", "Rate Limiting", "Fault Tolerance"],
      "DevOps": ["Docker", "CI/CD", "Cloud Deployment"],
      "Others": ["Observability", "Logging", "Metrics"]
    },
"projects": [
{
"title": "CollabTask (Distributed Systems / SDE)",
"highlights": [
"Designed event infrastructure and concurrency control (optimistic locking) to handle multi-user edits without row locks.",
"Built audit logging and observability pipeline to trace and replay events for debugging and compliance.",
"Implemented containerized CI workflows and production deployment patterns for high availability."
],
"codeUrl": "https://github.com/roshan3101/CollabTask",
"liveUrl": "https://collab-task-woad.vercel.app/",
"tags": ["Distributed Systems", "Optimistic Locking", "Observability"],
"roles": ["SDE", "Backend Engineer"]
},
{
"title": "Slimnastics (Scalable System Design)",
"highlights": [
"Architected stateless microservices with JWT auth and RBAC; used Cloud Run autoscaling to handle burst traffic.",
"Implemented aggregation pipelines for analytics and optimized indexes to reduce query latency.",
"Built payment microservice ensuring ACID-like consistency for transactions and webhook verification."
],
"codeUrl": "https://github.com/roshan3101/Slimnastics",
"liveUrl": "https://slimnastics.vercel.app/",
"tags": ["Microservices", "Autoscaling", "Payments"],
"roles": ["SDE", "System Designer"]
},
{
"title": "Translingo (Realtime Reliability)",
"highlights": [
"Implemented connection pooling, rate limiting, and graceful reconnection strategies to ensure message reliability.",
"Deployed serverless socket backend with containerized worker processes to scale horizontally.",
"Instrumented metrics and logs to detect message delivery failures and auto-recover connections."
],
"codeUrl": "https://github.com/roshan3101/Translingo",
"liveUrl": "https://translingo-mu.vercel.app/",
"tags": ["Realtime", "Scaling", "Reliability"],
"roles": ["SDE", "Realtime Engineer"]
}
],
"experience": [
  {
"company": "Vanivert AI",
"role": "Full Stack Developer",
"start": "Jul 2025",
"end": "Dec 2025",
"highlights": [
"Led backend migration to FastAPI and implemented production CI/CD to reduce push failures.",
"Implemented observability (logging/metrics) around critical services to detect regressions early.",
"Worked with cross-functional teams to design fault-tolerant flows and graceful degradation strategies."
],
"tags": ["FastAPI", "CI/CD"]
},
{
"company": "Stealth Startup (AI/Fashion Tech)",
"role": "AI & Backend Engineer",
"start": "Feb 2025",
"end": "Jun 2025",
"highlights": [
"Converted research VTON prototypes into production pipelines and implemented daily embedding update cron jobs.",
"Designed and deployed Python FastAPI microservices containerized with Docker, targeting 99.9% uptime in production.",
"Built scalable data processing pipelines with caching and optimized query paths to keep inference latency low."
],
"tags": ["Production ML", "Pipelines"]
}
]
},
"ML/DS Engineer": {
    "skills": {
      "Machine Learning": ["Supervised Learning", "Transfer Learning", "Model Evaluation"],
      "Deep Learning": ["CNNs", "ResNet", "Transformers"],
      "NLP": ["Text Summarization", "HuggingFace", "Pegasus"],
      "Computer Vision": ["OpenCV", "Image Classification", "Face Detection"],
      "MLOps": ["MLflow", "Model Deployment", "Experiment Tracking"],
      "Data": ["Pandas", "NumPy", "Data Visualization"],
      "Backend": ["FastAPI", "Flask"]
    },
"projects": [
{
"title": "Text Summarizer (HuggingFace & MLOps)",
"highlights": [
"Built abstractive summarization pipeline using Pegasus (HuggingFace) with modular ingestion → training → eval stages.",
"Containerized training and integrated MLflow tracking; evaluated models with ROUGE metrics to drive improvements.",
"Exposed model via FastAPI with production readiness (logging, error handling, batching)."
],
"codeUrl": "https://github.com/your-username/text-summarizer",
"liveUrl": "https://summarizer.example.com",
"tags": ["NLP", "Pegasus", "MLOps", "FastAPI"],
"roles": ["ML Engineer", "Data Scientist"]
},
{
"title": "Parking Slot Detector (Computer Vision)",
"highlights": [
"Collected and annotated video frames with OpenCV; trained transfer-learned ResNet for parking occupancy detection.",
"Deployed model behind Flask API for live inference; optimized preprocessing for low-latency on CPU.",
"Built a GUI tool to define ROIs and automate dataset augmentation for new parking sites."
],
"codeUrl": "https://github.com/roshan3101/Parking_slot",
"liveUrl": "N/A",
"tags": ["OpenCV", "Transfer Learning", "ResNet", "Deployment"],
"roles": ["CV Engineer", "ML Engineer"]
},
{
"title": "Age & Gender Prediction (Biometrics)",
"highlights": [
"Implemented face detection + CNN pipeline fine-tuned on public datasets (Adience/IMDB-WIKI) for demographic inference.",
"Optimized inference via blob preprocessing and frame-skipping to reach real-time performance on CPU.",
"Packaged as modular CLI/web service for batch and live processing."
],
"codeUrl": "https://github.com/your-username/age-gender",
"liveUrl": "https://demographics.example.com",
"tags": ["CNN", "Face Detection", "Real-Time"],
"roles": ["ML Engineer", "Data Scientist"]
}
],
"experience": [
{
"company": "Fluencer-Digital",
"role": "Data Analyst",
"start": "May 2024",
"end": "Jul 2024",
"highlights": [
"Analyzed influencer campaign data to surface engagement KPIs and built dashboards used for campaign optimization.",
"Built automated Python pipelines for data ingestion, preprocessing, and analysis, reliably processing thousands of records per day.",
"Partnered with business stakeholders to translate raw data into reports and dashboards that informed marketing decisions."
],
"tags": ["Pandas", "Data Viz"]
},
{
"company": "Stealth Startup (AI/Fashion Tech)",
"role": "AI Engineer",
"start": "Feb 2025",
"end": "Jun 2025",
"highlights": [
"Implemented VTON and body-shape models and productionized inference pipelines.",
"Collaborated with researchers to turn experimental models into reliable services with monitoring and alerting.",
"Helped tune model inference paths and hardware utilization to balance cost with latency and accuracy."
],
"tags": ["CV", "VTON", "Production ML"]
}
]
},
"AI Engineer": {
    "skills": {
      "LLMs": ["LLaMA", "Transformers", "Prompt Engineering"],
      "RAG Systems": ["Vector Databases", "Chunking Strategies", "Embedding Pipelines"],
      "Fine-Tuning": ["QLoRA", "PEFT", "Quantization"],
      "MLOps": ["Model Versioning", "Evaluation Pipelines", "Monitoring"],
      "Backend": ["FastAPI", "SSE Streaming", "Async APIs"],
      "AI Infra": ["GPU/CPU Inference", "Caching", "Latency Optimization"],
      "Others": ["HuggingFace Hub", "Safety Filters"]
    },
"projects": [
{
"title": "Modular RAG Chatbot (Production RAG system)",
"highlights": [
"Built provider-agnostic RAG infra enabling runtime swapping of LLM providers (OpenAI/Anthropic/Ollama) and vector DBs.",
"Implemented async ingestion pipeline for PDF/Markdown with configurable chunking strategies to improve retrieval relevance.",
"Implemented SSE streaming for token-level response streaming and reduced perceived TTFB by ~60%."
],
"codeUrl": "https://github.com/roshan3101/rag-chatbot",
"liveUrl": "https://rag-chatbot-liard-kappa.vercel.app/chat",
"tags": ["RAG", "Vector DB", "FastAPI", "SSE"],
"roles": ["AI Engineer", "ML Infra"]
},
{
"title": "LLaMA 3.1 Fine-Tuning Pipeline (QLoRA)",
"highlights": [
"Implemented QLoRA fine-tuning pipeline (bitsandbytes, PEFT) to train 8B+ models on constrained GPU memory, reducing costs by ~60%.",
"Added safety filtering and automated eval loops; exported quantized GGUF/INT4 artifacts for CPU inference.",
"Integrated HuggingFace Hub CI to version adapters and streamline deployment."
],
"codeUrl": "https://github.com/roshan3101/llama-finetuning",
"liveUrl": "N/A",
"tags": ["LLM", "QLoRA", "PEFT", "Quantization"],
"roles": ["LLM Engineer", "AI Research Engineer"]
},
{
"title": "Text Summarizer (NLP Production)",
"highlights": [
"Fine-tuned Pegasus for abstractive summarization on SAMSum and built evaluation pipeline with ROUGE to iterate quickly.",
"Deployed model as a streaming API and integrated model monitoring/metrics for drift detection.",
"Packaged pipeline with CI/CD and MLflow for reproducible experiments."
],
"codeUrl": "https://github.com/your-username/text-summarizer-ai",
"liveUrl": "https://nlp.example.com/summarize",
"tags": ["Transformers", "Pegasus", "MLOps", "Monitoring"],
"roles": ["AI Engineer", "NLP Engineer"]
} as const
],
"experience": [
{
"company": "Vanivert AI",
"role": "Full Stack / AI Engineer",
"start": "Jul 2025",
"end": "Dec 2025",
"highlights": [
"Developed voice agent orchestration combining STT, LLMs, and TTS; built tooling to manage conversational flows.",
"Integrated retrieval-augmented generation and vector search into production agents to improve response relevance.",
"Worked on evaluation and monitoring loops to track latency, quality, and failures across AI pipelines."
],
"tags": ["Speech AI", "LLMs", "Orchestration"]
},
{
"company": "Stealth Startup (AI/Fashion Tech)",
"role": "AI & Backend Engineer",
"start": "Feb 2025",
"end": "Jun 2025",
"highlights": [
"Implemented VTON CV models and recommendation pipelines; productionized nightly embedding updates and retraining triggers.",
"Designed robust APIs and background jobs to keep recommendation quality fresh without impacting live traffic.",
"Collaborated with product and data teams to iterate on ranking and personalization strategies."
],
"tags": ["VTON", "Recommendations", "Inference"]
}
]
},
"AI + Backend Engineer": {
    "skills": {
      "AI Systems": ["LLMs", "RAG Pipelines", "Inference Optimization"],
      "Backend Engineering": ["FastAPI", "Async Python", "REST APIs", "WebSockets"],
      "Databases": ["PostgreSQL", "Vector Databases", "Prisma"],
      "MLOps": ["Model Deployment", "Versioning", "Retraining Pipelines"],
      "Computer Vision": ["VTON", "Image Embeddings", "Inference APIs"],
      "System Design": ["DAG Orchestration", "Job Queues", "Credit-Based Metering"],
      "DevOps": ["Docker", "CI/CD", "Production Monitoring"]
    },
    "projects": [
      {
        "title": "Modular RAG Chatbot (Production-Grade AI Backend)",
        "highlights": [
          "Designed and implemented a production-grade RAG backend with pluggable LLM providers (OpenAI, Anthropic, Ollama) and vector databases.",
          "Built async document ingestion and embedding pipelines with configurable chunking, improving retrieval relevance and latency.",
          "Exposed scalable inference APIs using FastAPI with SSE streaming, caching, and request-level observability."
        ],
        "codeUrl": "https://github.com/roshan3101/rag-chatbot",
        "liveUrl": "https://rag-chatbot-liard-kappa.vercel.app/chat",
        "tags": ["RAG", "LLM", "FastAPI", "Vector DB", "Async"],
        "roles": ["AI Engineer", "Backend Engineer"]
      },
      {
        "title": "IntelliScrape (AI-Driven Automation Backend)",
        "highlights": [
          "Built a DAG-based execution engine to orchestrate AI-assisted scraping and automation workflows with retries and state recovery.",
          "Integrated LLM-powered content extraction and normalization with secure secrets handling and credit-based usage metering.",
          "Optimized job queues and database schemas to support high-concurrency automation tasks with predictable latency."
        ],
        "codeUrl": "https://github.com/roshan3101/IntelliScrape",
        "liveUrl": "https://intelliscrape.vercel.app/",
        "tags": ["Orchestration", "LLM", "Job Queues", "Prisma", "Security"],
        "roles": ["AI Engineer", "Backend Engineer"]
      },
      {
        "title": "Virtual Try-On (AI Inference & Backend Services)",
        "highlights": [
          "Developed backend services to serve VTON and body-shape estimation models with optimized inference pipelines.",
          "Implemented batch and real-time inference APIs with GPU/CPU fallbacks, caching, and request throttling.",
          "Automated nightly embedding refresh and model versioning pipelines to ensure consistent recommendation quality."
        ],
        "codeUrl": "https://github.com/your-username/vton-backend",
        "liveUrl": "https://ai-fashion.example.com",
        "tags": ["Computer Vision", "VTON", "Inference", "FastAPI", "MLOps"],
        "roles": ["AI Engineer", "Backend Engineer"]
      }
    ],
    "experience": [
      {
        "company": "Vanivert AI",
        "role": "AI & Backend Engineer",
        "start": "Jul 2025",
        "end": "Dec 2025",
        "highlights": [
          "Built scalable AI backends combining LLMs, speech models, and FastAPI services for production voice agents.",
          "Implemented async pipelines, caching, and observability to support real-time AI workloads.",
          "Collaborated with frontend and product teams to design APIs that exposed complex AI capabilities in a simple, reliable way."
        ],
        "tags": ["LLM", "Speech AI", "FastAPI", "Async"]
      },
      {
        "company": "Stealth Startup (Fashion Tech)",
        "role": "AI & Backend Engineer",
        "start": "Feb 2025",
        "end": "Jun 2025",
        "highlights": [
          "Productionized VTON and recommendation models with secure inference APIs and scheduled retraining pipelines.",
          "Designed job queues and scheduling strategies to refresh embeddings and models without impacting SLAs.",
          "Worked closely with infra teams to monitor resource usage and keep GPU/CPU utilization within budget."
        ],
        "tags": ["Computer Vision", "VTON", "Production ML", "Backend"]
      }
    ]
  }

}
