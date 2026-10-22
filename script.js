/**
 * SKILL CIRCUIT — RESOURCE LIBRARY CORE ENGINE
 * Client-side search, filtering, modal viewers, deep-linking, and responsive UI.
 */

// Fallback Embedded Dataset for offline file:/// preview & GitHub Pages instant load
const EMBEDDED_DATA = {
  "brand": {
    "name": "Skill Circuit",
    "handle": "@skill_circuit",
    "instagram_url": "https://instagram.com/skill_circuit",
    "tagline": "High-Yield Tech Blueprints, Handcrafted Roadmaps & Verified Career Portals",
    "creator": "Manikanta Palla"
  },
  "categories": [
    "All Resources",
    "Roadmaps & Career Blueprints",
    "Verified Hiring & Internships",
    "Cheat Sheets & Toolkits",
    "Video Tutorials & Reels",
    "Curated Video Courses",
    "Verified Certifications"
  ],
  "stats": {
    "total_resources": 36,
    "pdf_guides": 13,
    "video_reels": 7,
    "curated_courses": 6,
    "official_portals": 4,
    "certificates": 6
  },
  "resources": [
    {
      "id": "pdf-data-analyst-roadmap",
      "file": "Data_Analyst_Complete_Roadmap_Skill_Circuit.pdf",
      "title": "Complete Data Analyst Roadmap 2026/2027",
      "category": "Roadmaps & Career Blueprints",
      "type": "PDF Guide",
      "badge": "Flagship Blueprint",
      "description": "Battle-tested 7-phase curriculum designed for college students and career switchers. Covers Advanced Excel, Applied Statistics, SQL, Python, Power BI, and real-world portfolio proof.",
      "author": "Skill Circuit (@skill_circuit)",
      "featured": true,
      "tags": [
        "Data Analytics",
        "SQL",
        "Python",
        "Power BI",
        "Roadmap",
        "Career Guide"
      ],
      "page_count": 7,
      "size_formatted": "1.6 MB",
      "url": "resources/pdfs/Data_Analyst_Complete_Roadmap_Skill_Circuit.pdf",
      "thumbnail": "assets/thumbnails/thumb_pdf-data-analyst-roadmap.png"
    },
    {
      "id": "pdf-ai-projects-guide",
      "file": "AI_Projects_Build_Guide_Skill_Circuit.pdf",
      "title": "5 AI Projects That Actually Get You Hired",
      "category": "Roadmaps & Career Blueprints",
      "type": "PDF Guide",
      "badge": "Production Grade",
      "description": "Stop building generic toy wrappers. 5 production-grade AI systems with real architectures, low-latency APIs, and ATS-optimized resume bullet points that land high-paying AI engineering roles.",
      "author": "Skill Circuit (@skill_circuit)",
      "featured": true,
      "tags": [
        "Artificial Intelligence",
        "LLM",
        "RAG",
        "Resume Bullets",
        "FastAPI",
        "Projects"
      ],
      "page_count": 7,
      "size_formatted": "2.88 MB",
      "url": "resources/pdfs/AI_Projects_Build_Guide_Skill_Circuit.pdf",
      "thumbnail": "assets/thumbnails/thumb_pdf-ai-projects-guide.png"
    },
    {
      "id": "pdf-dsa-sheet",
      "file": "Only Sheet You Need for DSA Preparation.pdf",
      "title": "The Only Sheet You Need for DSA Preparation",
      "category": "Roadmaps & Career Blueprints",
      "type": "PDF Guide",
      "badge": "32-Page Vault",
      "description": "Complete, zero-bloat roadmap for Data Structures & Algorithms. Curated topic breakdowns, top LeetCode patterns, step-by-step problem-solving sequences, and interview strategies.",
      "author": "Skill Circuit Community Edition",
      "featured": true,
      "tags": [
        "DSA",
        "LeetCode",
        "Algorithms",
        "FAANG",
        "Coding Interviews",
        "C++",
        "Java"
      ],
      "page_count": 32,
      "size_formatted": "10.67 MB",
      "url": "resources/pdfs/Only Sheet You Need for DSA Preparation.pdf",
      "thumbnail": "assets/thumbnails/thumb_pdf-dsa-sheet.png"
    },
    {
      "id": "pdf-llm-roadmap",
      "file": "LLM Roadmap from Beginner to Advanced Level - V2.pdf",
      "title": "LLM Roadmap: Absolute Beginner to Advanced (2nd Ed)",
      "category": "Roadmaps & Career Blueprints",
      "type": "PDF Guide",
      "badge": "170-Page Master Book",
      "description": "Comprehensive master volume covering Transformer architectures, self-attention mechanisms, PEFT/LoRA fine-tuning, RAG pipelines, Vector Databases, and production Agent frameworks.",
      "author": "Youssef Hosni (Curated by Skill Circuit)",
      "featured": false,
      "tags": [
        "LLM",
        "Transformers",
        "Fine-Tuning",
        "PEFT",
        "RAG",
        "AI Engineering"
      ],
      "page_count": 170,
      "size_formatted": "27.24 MB",
      "url": "resources/pdfs/LLM Roadmap from Beginner to Advanced Level - V2.pdf",
      "thumbnail": "assets/thumbnails/thumb_pdf-llm-roadmap.png"
    },
    {
      "id": "pdf-apple-internships",
      "file": "Apple_Global_Internships_Direct_Links_Skill_Circuit.pdf",
      "title": "Apple Global Internships 2026: Direct Application Guide",
      "category": "Verified Hiring & Internships",
      "type": "PDF Guide",
      "badge": "Direct Workday Portal",
      "description": "Verified application portals for Apple Silicon Design and Vision Group at Munich European R&D Hub. Spans Apple Vision Pro Generative AI, cellular baseband, and core systems.",
      "author": "Skill Circuit Career Intelligence",
      "featured": false,
      "tags": [
        "Apple",
        "Internships",
        "Munich",
        "Vision Pro",
        "Hardware",
        "Direct Links"
      ],
      "page_count": 3,
      "size_formatted": "834 KB",
      "url": "resources/pdfs/Apple_Global_Internships_Direct_Links_Skill_Circuit.pdf",
      "thumbnail": "assets/thumbnails/thumb_pdf-apple-internships.png"
    },
    {
      "id": "pdf-hp-internships",
      "file": "HP_Global_Internships_Direct_Links_Skill_Circuit.pdf",
      "title": "Top 5 HP Global Tech Internships 2026",
      "category": "Verified Hiring & Internships",
      "type": "PDF Guide",
      "badge": "Direct Workday Portal",
      "description": "Direct official Workday links, role descriptions, technical requirements, Workday ATS keywords, and LinkedIn employee referral outreach templates for HP Sant Cugat R&D Hub.",
      "author": "Skill Circuit Career Intelligence",
      "featured": false,
      "tags": [
        "HP",
        "Workday",
        "Internships",
        "Barcelona",
        "Data Science",
        "Firmware"
      ],
      "page_count": 3,
      "size_formatted": "1.13 MB",
      "url": "resources/pdfs/HP_Global_Internships_Direct_Links_Skill_Circuit.pdf",
      "thumbnail": "assets/thumbnails/thumb_pdf-hp-internships.png"
    },
    {
      "id": "pdf-intel-internships",
      "file": "Intel_Global_Internships_Direct_Links_Skill_Circuit.pdf",
      "title": "Intel Global Internships 2026: Direct Workday Guide",
      "category": "Verified Hiring & Internships",
      "type": "PDF Guide",
      "badge": "Direct Workday Portal",
      "description": "Official application portals for Intel Technology Poland (Gdansk R&D Hub) across Linux Core OS validation, Infrastructure QA automation, and Media AI software. Includes ATS keyword checklist.",
      "author": "Skill Circuit Career Intelligence",
      "featured": false,
      "tags": [
        "Intel",
        "Linux OS",
        "Workday",
        "Gdansk",
        "QA Automation",
        "Direct Links"
      ],
      "page_count": 3,
      "size_formatted": "693 KB",
      "url": "resources/pdfs/Intel_Global_Internships_Direct_Links_Skill_Circuit.pdf",
      "thumbnail": "assets/thumbnails/thumb_pdf-intel-internships.png"
    },
    {
      "id": "pdf-bangalore-hiring",
      "file": "Bangalore_Hiring_Alert_Direct_Links_Skill_Circuit.pdf",
      "title": "Bangalore Tech Hiring Alert: Thoughtworks, PwC & AtkinsRéalis",
      "category": "Verified Hiring & Internships",
      "type": "PDF Guide",
      "badge": "Fresher & Intern Roles",
      "description": "Direct official Greenhouse & Workday career application links for Thoughtworks Business Analysis, PwC India IB Data Associate, and AtkinsRéalis Data Science. No recruiter middlemen.",
      "author": "Skill Circuit (@skill_circuit)",
      "featured": false,
      "tags": [
        "Bangalore",
        "Thoughtworks",
        "PwC",
        "Hiring",
        "Freshers",
        "Greenhouse"
      ],
      "page_count": 5,
      "size_formatted": "1.3 MB",
      "url": "resources/pdfs/Bangalore_Hiring_Alert_Direct_Links_Skill_Circuit.pdf",
      "thumbnail": "assets/thumbnails/thumb_pdf-bangalore-hiring.png"
    },
    {
      "id": "pdf-bangalore-data",
      "file": "Bangalore_Data_Roles_Direct_Links_Skill_Circuit.pdf",
      "title": "Top 3 Verified Bangalore Data Roles & Salary Insights",
      "category": "Verified Hiring & Internships",
      "type": "PDF Guide",
      "badge": "Salary & ATS Breakdown",
      "description": "Direct official career links, compensation packages, Workday & Greenhouse ATS keyword optimization hacks, and cold LinkedIn outreach templates to maximize interview shortlists.",
      "author": "Skill Circuit (@skill_circuit)",
      "featured": false,
      "tags": [
        "Bangalore",
        "Data Science",
        "Salary Packages",
        "ATS Keywords",
        "LinkedIn Outreach"
      ],
      "page_count": 3,
      "size_formatted": "1.13 MB",
      "url": "resources/pdfs/Bangalore_Data_Roles_Direct_Links_Skill_Circuit.pdf",
      "thumbnail": "assets/thumbnails/thumb_pdf-bangalore-data.png"
    },
    {
      "id": "pdf-git-cheatsheet",
      "file": "Git_Cheat_Sheet_Skill_Circuit.pdf",
      "title": "Git & Version Control DevOps Cheat Sheet",
      "category": "Cheat Sheets & Toolkits",
      "type": "PDF Guide",
      "badge": "Modern DevOps",
      "description": "Clean, practical command reference for core architecture, staging lifecycle, undoing mistakes safely, interactive rebasing, merge conflicts, and curated YouTube learning channels.",
      "author": "Skill Circuit (@skill_circuit)",
      "featured": false,
      "tags": [
        "Git",
        "DevOps",
        "GitHub",
        "Version Control",
        "CLI",
        "Cheat Sheet"
      ],
      "page_count": 3,
      "size_formatted": "1.07 MB",
      "url": "resources/pdfs/Git_Cheat_Sheet_Skill_Circuit.pdf",
      "thumbnail": "assets/thumbnails/thumb_pdf-git-cheatsheet.png"
    },
    {
      "id": "pdf-sklearn-cheatsheet",
      "file": "Scikit_Learn_Cheat_Sheet_Skill_Circuit.pdf",
      "title": "Python Scikit-Learn Modern ML Workflow Cheat Sheet",
      "category": "Cheat Sheets & Toolkits",
      "type": "PDF Guide",
      "badge": "End-to-End Pipeline",
      "description": "7-step lifecycle: Load, Split, Preprocess, Model Instantiation, Fit, Predict, Evaluate. Complete code snippets for ColumnTransformer, Pipeline, GridSearchCV, and model metrics.",
      "author": "Skill Circuit (@skill_circuit)",
      "featured": false,
      "tags": [
        "Scikit-Learn",
        "Machine Learning",
        "Python",
        "Pipelines",
        "Data Science"
      ],
      "page_count": 3,
      "size_formatted": "1.23 MB",
      "url": "resources/pdfs/Scikit_Learn_Cheat_Sheet_Skill_Circuit.pdf",
      "thumbnail": "assets/thumbnails/thumb_pdf-sklearn-cheatsheet.png"
    },
    {
      "id": "pdf-numpy-pandas",
      "file": "NumPy & Pandas for AI and Machine Learning.pdf",
      "title": "NumPy & Pandas for AI & Machine Learning Guide",
      "category": "Cheat Sheets & Toolkits",
      "type": "PDF Guide",
      "badge": "37-Page Visual Guide",
      "description": "High-density visual cheatsheet for array broadcasting, vectorization, indexing, DataFrame manipulation, groupby aggregations, merge/join operations, and data cleaning tricks.",
      "author": "Skill Circuit Visual Series",
      "featured": false,
      "tags": [
        "NumPy",
        "Pandas",
        "Data Science",
        "Data Manipulation",
        "Visual Guide"
      ],
      "page_count": 37,
      "size_formatted": "13.2 MB",
      "url": "resources/pdfs/NumPy & Pandas for AI and Machine Learning.pdf",
      "thumbnail": "assets/thumbnails/thumb_pdf-numpy-pandas.png"
    },
    {
      "id": "pdf-vibe-coded-toolkit",
      "file": "4_Free_Sites_Fix_Vibe_Coded_Apps.pdf",
      "title": "The Design Upgrade Toolkit: Fix Your Vibe-Coded App",
      "category": "Cheat Sheets & Toolkits",
      "type": "PDF Guide",
      "badge": "Design Secret Sites",
      "description": "Turn amateur AI-generated apps (Cursor, v0, Bolt, Claude) into $10M venture-backed interfaces. The 4 free secret sites top designers use for animations, typography, and polish.",
      "author": "Skill Circuit (@skill_circuit)",
      "featured": false,
      "tags": [
        "UI/UX",
        "Design",
        "Cursor",
        "v0",
        "Frontend",
        "Typography",
        "Transitions"
      ],
      "page_count": 5,
      "size_formatted": "489 KB",
      "url": "resources/pdfs/4_Free_Sites_Fix_Vibe_Coded_Apps.pdf",
      "thumbnail": "assets/thumbnails/thumb_pdf-vibe-coded-toolkit.png"
    },
    {
      "id": "vid-dsa-vault",
      "src": "D:/content/faang_dsa_animated.mp4",
      "file": "faang_dsa_animated.mp4",
      "title": "FAANG DSA 32-Page Master Vault Reel",
      "category": "Video Tutorials & Reels",
      "type": "Video Reel",
      "badge": "Animated Reel",
      "description": "High-velocity visual breakdown of the complete 32-page DSA preparation strategy, LeetCode roadmap, and algorithmic problem-solving blueprint.",
      "author": "Skill Circuit Reels",
      "featured": true,
      "tags": [
        "DSA",
        "LeetCode",
        "FAANG",
        "Algorithms",
        "Video"
      ],
      "url": "resources/videos/faang_dsa_animated.mp4",
      "thumbnail": "assets/thumbnails/thumb_vid-dsa-vault.jpg",
      "size_formatted": "7.36 MB",
      "duration_sec": 20
    },
    {
      "id": "vid-apple-internships",
      "src": "D:/content/apple_internships_animated.mp4",
      "file": "apple_internships_animated.mp4",
      "title": "Apple Silicon & Vision Pro Internships 2026",
      "category": "Video Tutorials & Reels",
      "type": "Video Reel",
      "badge": "Animated Reel",
      "description": "Step-by-step video guide covering the Munich European Silicon Design team, Apple Vision Pro research positions, and direct Workday application tips.",
      "author": "Skill Circuit Reels",
      "featured": false,
      "tags": [
        "Apple",
        "Internships",
        "Vision Pro",
        "Munich",
        "Video"
      ],
      "url": "resources/videos/apple_internships_animated.mp4",
      "thumbnail": "assets/thumbnails/thumb_vid-apple-internships.jpg",
      "size_formatted": "5.7 MB",
      "duration_sec": 20
    },
    {
      "id": "vid-github-profile",
      "src": "D:/content/github_profile_animated.mp4",
      "file": "github_profile_animated.mp4",
      "title": "GitHub Profile Optimization for Tech Jobs",
      "category": "Video Tutorials & Reels",
      "type": "Video Reel",
      "badge": "Animated Reel",
      "description": "Transform your GitHub from an empty commit history into a high-converting portfolio that attracts FAANG recruiters and startup founders.",
      "author": "Skill Circuit Reels",
      "featured": false,
      "tags": [
        "GitHub",
        "Portfolio",
        "Open Source",
        "Recruiters",
        "Video"
      ],
      "url": "resources/videos/github_profile_animated.mp4",
      "thumbnail": "assets/thumbnails/thumb_vid-github-profile.jpg",
      "size_formatted": "7.83 MB",
      "duration_sec": 20
    },
    {
      "id": "vid-git-cheatsheet",
      "src": "D:/content/git_cheatsheet_animated.mp4",
      "file": "git_cheatsheet_animated.mp4",
      "title": "Git Architecture & Commands Masterclass Reel",
      "category": "Video Tutorials & Reels",
      "type": "Video Reel",
      "badge": "Animated Reel",
      "description": "Visualizing the 3 trees of Git (Working Directory, Staging Area, Repository), branch management, interactive rebasing, and emergency undo commands.",
      "author": "Skill Circuit Reels",
      "featured": false,
      "tags": [
        "Git",
        "DevOps",
        "Version Control",
        "CLI",
        "Video"
      ],
      "url": "resources/videos/git_cheatsheet_animated.mp4",
      "thumbnail": "assets/thumbnails/thumb_vid-git-cheatsheet.jpg",
      "size_formatted": "5.77 MB",
      "duration_sec": 20
    },
    {
      "id": "vid-llm-roadmap",
      "src": "D:/content/llm_roadmap_animated.mp4",
      "file": "llm_roadmap_animated.mp4",
      "title": "LLM Engineer Roadmap 2026/2027 Reel",
      "category": "Video Tutorials & Reels",
      "type": "Video Reel",
      "badge": "Animated Reel",
      "description": "Visual overview of the modern AI engineering stack: Transformers, tokenization, Vector DBs, RAG evaluation, and autonomous multi-agent systems.",
      "author": "Skill Circuit Reels",
      "featured": false,
      "tags": [
        "LLM",
        "AI Engineering",
        "RAG",
        "Agents",
        "Video"
      ],
      "url": "resources/videos/llm_roadmap_animated.mp4",
      "thumbnail": "assets/thumbnails/thumb_vid-llm-roadmap.jpg",
      "size_formatted": "5.39 MB",
      "duration_sec": 20
    },
    {
      "id": "vid-project-learning",
      "src": "D:/content/project_learning_animated.mp4",
      "file": "project_learning_animated.mp4",
      "title": "Escape Tutorial Hell: Project-Based Learning Reel",
      "category": "Video Tutorials & Reels",
      "type": "Video Reel",
      "badge": "Animated Reel",
      "description": "Why building 3 non-trivial real-world projects beats watching 100 tutorials. Includes project ideas across Python, Full Stack, and Machine Learning.",
      "author": "Skill Circuit Reels",
      "featured": false,
      "tags": [
        "Project Based Learning",
        "Career Growth",
        "Software Engineering",
        "Video"
      ],
      "url": "resources/videos/project_learning_animated.mp4",
      "thumbnail": "assets/thumbnails/thumb_vid-project-learning.jpg",
      "size_formatted": "6.95 MB",
      "duration_sec": 20
    },
    {
      "id": "vid-whatsapp-community",
      "src": "D:/new content/WhatsApp Video 2026-10-23 at 1.40.04 AM.mp4",
      "file": "community_reel_clip.mp4",
      "title": "Skill Circuit Creator & Community Behind the Scenes",
      "category": "Video Tutorials & Reels",
      "type": "Video Reel",
      "badge": "Community Video",
      "description": "Behind the scenes with the creator and community team behind @skill_circuit educational resources and tech career content.",
      "author": "Skill Circuit Community",
      "featured": false,
      "tags": [
        "Community",
        "Behind the Scenes",
        "Instagram",
        "Video"
      ],
      "url": "resources/videos/community_reel_clip.mp4",
      "thumbnail": "assets/thumbnails/thumb_vid-whatsapp-community.jpg",
      "size_formatted": "2.29 MB",
      "duration_sec": 20
    },
    {
      "id": "course-python-mosh",
      "title": "Python Tutorial for Beginners (Full 6-Hour Course)",
      "category": "Curated Video Courses",
      "type": "External Course",
      "badge": "YouTube Masterclass",
      "description": "The gold-standard beginner Python tutorial by Programming with Mosh. Teaches variables, control flow, functions, OOP, and practical real-world modules.",
      "author": "Programming with Mosh",
      "url": "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
      "thumbnail": "assets/thumbnails/python_mosh.jpg",
      "featured": false,
      "size_formatted": "6 Hours Free",
      "tags": [
        "Python",
        "Beginners",
        "Programming",
        "OOP",
        "YouTube Course"
      ]
    },
    {
      "id": "course-python-fcc-12hr",
      "title": "Python for Beginners – Comprehensive 12-Hour Course",
      "category": "Curated Video Courses",
      "type": "External Course",
      "badge": "12-Hour Course",
      "description": "Comprehensive zero-to-hero computer science fundamentals and practical Python projects by freeCodeCamp. Highly recommended for complete novices.",
      "author": "freeCodeCamp",
      "url": "https://www.youtube.com/watch?v=rfscVS0vtbw",
      "thumbnail": "assets/thumbnails/python_fcc_12.jpg",
      "featured": false,
      "size_formatted": "12 Hours Free",
      "tags": [
        "Python",
        "freeCodeCamp",
        "Computer Science",
        "Tutorial",
        "YouTube Course"
      ]
    },
    {
      "id": "course-js-supersimpledev",
      "title": "JavaScript Full Course (Beginner to Pro)",
      "category": "Curated Video Courses",
      "type": "External Course",
      "badge": "Hands-on Projects",
      "description": "Practical, project-driven JavaScript curriculum by SuperSimpleDev. Learn modern ES6+, DOM manipulation, asynchronous JavaScript, and build complete interactive apps.",
      "author": "SuperSimpleDev",
      "url": "https://www.youtube.com/watch?v=EerdGm-ehJQ",
      "thumbnail": "assets/thumbnails/js_supersimpledev.jpg",
      "featured": false,
      "size_formatted": "10 Hours Free",
      "tags": [
        "JavaScript",
        "Web Development",
        "DOM",
        "Frontend",
        "YouTube Course"
      ]
    },
    {
      "id": "course-js-shradha",
      "title": "Complete JavaScript Course in One Video",
      "category": "Curated Video Courses",
      "type": "External Course",
      "badge": "Community Favorite",
      "description": "High-yield, easy-to-follow JavaScript tutorial by Shradha Khapra (Apna College). Covers callbacks, promises, async/await, fetch APIs, and interview questions.",
      "author": "Shradha Khapra (Apna College)",
      "url": "https://www.youtube.com/watch?v=VlPiVmYuoqw",
      "thumbnail": "assets/thumbnails/js_shradha.jpg",
      "featured": false,
      "size_formatted": "11 Hours Free",
      "tags": [
        "JavaScript",
        "Apna College",
        "Web Dev",
        "Hindi/English",
        "YouTube Course"
      ]
    },
    {
      "id": "course-java-brocode",
      "title": "Java Full Course for Beginners (Zero to Mastery)",
      "category": "Curated Video Courses",
      "type": "External Course",
      "badge": "Complete Java",
      "description": "Clear, highly structured Java foundation series by Bro Code. Deep dive into OOP principles, inheritance, polymorphism, abstract classes, collections, and GUI apps.",
      "author": "Bro Code",
      "url": "https://www.youtube.com/watch?v=xk4_1vDrzzo",
      "thumbnail": "assets/thumbnails/java_brocode.jpg",
      "featured": false,
      "size_formatted": "12 Hours Free",
      "tags": [
        "Java",
        "OOP",
        "Software Engineering",
        "Bro Code",
        "YouTube Course"
      ]
    },
    {
      "id": "course-python-tech-with-tim",
      "title": "Python Intermediate & Advanced Concepts",
      "category": "Curated Video Courses",
      "type": "External Course",
      "badge": "Advanced Python",
      "description": "Master decorators, generators, metaclasses, multithreading, and dunder methods with Tech With Tim to write production-grade Python code.",
      "author": "Tech With Tim",
      "url": "https://www.youtube.com/watch?v=mDKM-JtUhhc",
      "thumbnail": "assets/thumbnails/python_tech_with_tim.jpg",
      "featured": false,
      "size_formatted": "4 Hours Free",
      "tags": [
        "Python",
        "Advanced",
        "Decorators",
        "Generators",
        "YouTube Course"
      ]
    },
    {
      "id": "portal-apple-careers",
      "title": "Apple Official European Silicon & Vision Pro Portal",
      "category": "Verified Hiring & Internships",
      "type": "External Portal",
      "badge": "Direct Workday Portal",
      "description": "Official Apple Jobs careers search for Munich European Silicon Design Hub and Apple Vision Pro spatial computing engineering teams.",
      "author": "Apple Careers (Official)",
      "url": "https://jobs.apple.com/en-us/search?location=munich-MUC",
      "thumbnail": "assets/thumbnails/thumb_pdf-apple-internships.png",
      "featured": false,
      "size_formatted": "Live Careers Link",
      "tags": [
        "Apple",
        "Munich",
        "Hardware",
        "Vision Pro",
        "Official Portal"
      ]
    },
    {
      "id": "portal-hp-workday",
      "title": "HP Inc. Global R&D Hub Official Workday Portal",
      "category": "Verified Hiring & Internships",
      "type": "External Portal",
      "badge": "Direct Workday Portal",
      "description": "Direct official HP Inc. Workday talent network for Software, Data Science, and Firmware Engineering Internships at Sant Cugat Hub.",
      "author": "HP Inc. Careers (Official)",
      "url": "https://hp.wd5.myworkdayjobs.com/ExternalCareerSite",
      "thumbnail": "assets/thumbnails/thumb_pdf-hp-internships.png",
      "featured": false,
      "size_formatted": "Live Careers Link",
      "tags": [
        "HP",
        "Workday",
        "Internships",
        "Sant Cugat",
        "Official Portal"
      ]
    },
    {
      "id": "portal-intel-workday",
      "title": "Intel Technology Poland R&D Official Career Portal",
      "category": "Verified Hiring & Internships",
      "type": "External Portal",
      "badge": "Direct Workday Portal",
      "description": "Official Intel campus portal for European Linux Core OS validation, Infrastructure QA automation, and GPU/Media AI software internships.",
      "author": "Intel Careers (Official)",
      "url": "https://intel.wd1.myworkdayjobs.com/External",
      "thumbnail": "assets/thumbnails/thumb_pdf-intel-internships.png",
      "featured": false,
      "size_formatted": "Live Careers Link",
      "tags": [
        "Intel",
        "Gdansk",
        "Linux OS",
        "Workday",
        "Official Portal"
      ]
    },
    {
      "id": "portal-thoughtworks",
      "title": "Thoughtworks India Official Greenhouse Application Hub",
      "category": "Verified Hiring & Internships",
      "type": "External Portal",
      "badge": "Greenhouse Portal",
      "description": "Official verified Greenhouse application page for Thoughtworks Bangalore campus graduate, consultant, and analyst positions.",
      "author": "Thoughtworks Careers (Official)",
      "url": "https://boards.greenhouse.io/thoughtworks",
      "thumbnail": "assets/thumbnails/thumb_pdf-bangalore-hiring.png",
      "featured": false,
      "size_formatted": "Live Careers Link",
      "tags": [
        "Thoughtworks",
        "Greenhouse",
        "Bangalore",
        "Official Portal"
      ]
    },
    {
      "id": "cert-unstop-ai-web",
      "file": "Ai Software & Web Development Unstop Manikanta.jpg",
      "title": "AI Software & Web Development Certificate",
      "category": "Verified Certifications",
      "type": "Certificate",
      "badge": "Unstop Verified",
      "description": "Awarded for proficiency in modern web architecture, AI API integration, and full-stack software development best practices.",
      "author": "Manikanta Palla (Unstop)",
      "featured": false,
      "tags": [
        "Web Development",
        "AI",
        "Full Stack",
        "Certification"
      ],
      "url": "resources/certificates/Ai Software & Web Development Unstop Manikanta.jpg",
      "thumbnail": "assets/thumbnails/thumb_cert_cert-unstop-ai-web.jpg",
      "page_count": 1,
      "size_formatted": "332 KB"
    },
    {
      "id": "cert-options-hackathon",
      "file": "Introductory Options Hackathon Unstop certificate.jpg",
      "title": "Introductory Options Hackathon - National Rank",
      "category": "Verified Certifications",
      "type": "Certificate",
      "badge": "National Hackathon",
      "description": "Awarded for financial engineering, algorithmic quantitative analysis, and mathematical modeling in high-velocity trading scenarios.",
      "author": "Manikanta Palla (Unstop)",
      "featured": false,
      "tags": [
        "Hackathon",
        "Algorithms",
        "Quantitative Finance",
        "Options Trading"
      ],
      "url": "resources/certificates/Introductory Options Hackathon Unstop certificate.jpg",
      "thumbnail": "assets/thumbnails/thumb_cert_cert-options-hackathon.jpg",
      "page_count": 1,
      "size_formatted": "362 KB"
    },
    {
      "id": "cert-quantopia-jodhpur",
      "file": "Quantopia by IIt ,Jodhpur Unstop.jpg",
      "title": "Quantopia National Challenge - IIT Jodhpur",
      "category": "Verified Certifications",
      "type": "Certificate",
      "badge": "IIT Jodhpur",
      "description": "Issued by IIT Jodhpur for distinction in statistical arbitrage modeling, risk optimization, and algorithmic simulation.",
      "author": "Manikanta Palla (IIT Jodhpur)",
      "featured": false,
      "tags": [
        "IIT Jodhpur",
        "Quant",
        "Machine Learning",
        "Data Modeling"
      ],
      "url": "resources/certificates/Quantopia by IIt ,Jodhpur Unstop.jpg",
      "thumbnail": "assets/thumbnails/thumb_cert_cert-quantopia-jodhpur.jpg",
      "page_count": 1,
      "size_formatted": "353 KB"
    },
    {
      "id": "cert-iiit-agartala",
      "file": "Tech Knowledge Challenge 2026 iiit agartala.jpg",
      "title": "Tech Knowledge Challenge 2026 - IIIT Agartala",
      "category": "Verified Certifications",
      "type": "Certificate",
      "badge": "IIIT Agartala",
      "description": "Recognition of advanced technical competency, data structures mastery, and computational logic.",
      "author": "Manikanta Palla (IIIT Agartala)",
      "featured": false,
      "tags": [
        "IIIT Agartala",
        "Data Structures",
        "Logic",
        "Engineering"
      ],
      "url": "resources/certificates/Tech Knowledge Challenge 2026 iiit agartala.jpg",
      "thumbnail": "assets/thumbnails/thumb_cert_cert-iiit-agartala.jpg",
      "page_count": 1,
      "size_formatted": "457 KB"
    },
    {
      "id": "cert-hackx-finalist",
      "file": "HackX_certificate.png",
      "title": "HackX National Hackathon - Finalist",
      "category": "Verified Certifications",
      "type": "Certificate",
      "badge": "National Finalist",
      "description": "Finalist award for designing and presenting scalable real-world software architecture under timed hackathon conditions.",
      "author": "Manikanta Palla (HackX)",
      "featured": false,
      "tags": [
        "Hackathon",
        "Finalist",
        "System Design",
        "Prototyping"
      ],
      "url": "resources/certificates/HackX_certificate.png",
      "thumbnail": "assets/thumbnails/thumb_cert_cert-hackx-finalist.jpg",
      "page_count": 1,
      "size_formatted": "212 KB"
    },
    {
      "id": "cert-iit-madras",
      "file": "Phase 1 - Storyboard & Concept iit madras.jpg",
      "title": "IIT Madras Shaastra - Storyboard & Concept",
      "category": "Verified Certifications",
      "type": "Certificate",
      "badge": "IIT Madras",
      "description": "Phase 1 distinction for technical conceptualization and storyboard presentation at IIT Madras Shaastra annual tech fest.",
      "author": "Manikanta Palla (IIT Madras)",
      "featured": false,
      "tags": [
        "IIT Madras",
        "Shaastra",
        "Concept Design",
        "Innovation"
      ],
      "url": "resources/certificates/Phase 1 - Storyboard & Concept iit madras.jpg",
      "thumbnail": "assets/thumbnails/thumb_cert_cert-iit-madras.jpg",
      "page_count": 1,
      "size_formatted": "453 KB"
    }
  ]
};

(function () {
  'use strict';

  // App State
  let appData = EMBEDDED_DATA;
  let activeCategory = 'All Resources';
  let activeFormat = 'all';
  let activeSort = 'featured';
  let searchQuery = '';
  let activeModal = null;

  // DOM Elements
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const formatSelect = document.getElementById('formatSelect');
  const sortSelect = document.getElementById('sortSelect');
  const categoryChipsContainer = document.getElementById('categoryChips');
  const resourceGrid = document.getElementById('resourceGrid');
  const spotlightGrid = document.getElementById('spotlightGrid');
  const resultsCountText = document.getElementById('resultsCountText');
  const activeFiltersRow = document.getElementById('activeFiltersRow');
  const emptyState = document.getElementById('emptyState');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const resetEmptyBtn = document.getElementById('resetEmptyBtn');
  
  // Mobile Nav Drawer
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
  
  // PDF Modal
  const pdfModal = document.getElementById('pdfModal');
  const pdfModalTitle = document.getElementById('pdfModalTitle');
  const pdfModalBadge = document.getElementById('pdfModalBadge');
  const pdfModalSize = document.getElementById('pdfModalSize');
  const pdfModalDownload = document.getElementById('pdfModalDownload');
  const pdfViewerFrame = document.getElementById('pdfViewerFrame');
  const pdfFullscreenBtn = document.getElementById('pdfFullscreenBtn');

  // Video Modal
  const videoModal = document.getElementById('videoModal');
  const videoModalTitle = document.getElementById('videoModalTitle');
  const videoModalDownload = document.getElementById('videoModalDownload');
  const videoPlayer = document.getElementById('videoPlayer');
  const videoSource = document.getElementById('videoSource');
  const videoLoopBtn = document.getElementById('videoLoopBtn');

  // Certificate Modal
  const certModal = document.getElementById('certModal');
  const certModalTitle = document.getElementById('certModalTitle');
  const certModalImage = document.getElementById('certModalImage');
  const certModalDownload = document.getElementById('certModalDownload');

  // Toast
  const toastContainer = document.getElementById('toastContainer');

  /**
   * Initialize Application
   */
  async function init() {
    // Attempt dynamic fetch if served over HTTP/HTTPS
    if (window.location.protocol.startsWith('http')) {
      try {
        const res = await fetch('resources/data/resources.json');
        if (res.ok) {
          const freshData = await res.json();
          if (freshData && freshData.resources) {
            appData = freshData;
          }
        }
      } catch (err) {
        console.warn('Using embedded dataset:', err);
      }
    }

    renderCategoryChips();
    renderSpotlight();
    parseUrlParams();
    renderFilteredResources();
    bindEvents();
    checkDirectDeepLink();
  }

  /**
   * Render Category Chips with Live Counts
   */
  function renderCategoryChips() {
    if (!categoryChipsContainer) return;
    categoryChipsContainer.innerHTML = '';

    const categories = appData.categories || ['All Resources'];
    
    categories.forEach(cat => {
      const count = cat === 'All Resources' 
        ? appData.resources.length 
        : appData.resources.filter(r => r.category === cat).length;

      const chip = document.createElement('button');
      chip.className = `filter-chip ${activeCategory === cat ? 'active' : ''}`;
      chip.setAttribute('type', 'button');
      chip.setAttribute('aria-label', `Filter by ${cat} (${count} resources)`);
      chip.innerHTML = `
        <span>${cat}</span>
        <span class="filter-chip-count">${count}</span>
      `;

      chip.addEventListener('click', () => {
        activeCategory = cat;
        updateCategoryChipActiveState();
        updateUrlParams();
        renderFilteredResources();
      });

      categoryChipsContainer.appendChild(chip);
    });
  }

  function updateCategoryChipActiveState() {
    const chips = categoryChipsContainer.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
      const text = chip.querySelector('span').textContent;
      if (text === activeCategory) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  }

  /**
   * Render Featured Spotlight (Top 3 Blueprints)
   */
  function renderSpotlight() {
    if (!spotlightGrid) return;
    spotlightGrid.innerHTML = '';

    const featured = appData.resources.filter(r => r.featured).slice(0, 3);
    
    featured.forEach(res => {
      const card = document.createElement('div');
      card.className = 'spotlight-card';
      
      const isPdf = res.type === 'PDF Guide';
      const isVideo = res.type === 'Video Reel';

      card.innerHTML = `
        <div class="spotlight-thumbnail-wrap">
          <img src="${res.thumbnail}" alt="${res.title}" class="spotlight-thumb-img" loading="lazy" />
          <span class="badge-featured">★ ${res.badge || 'Featured'}</span>
        </div>
        <div class="spotlight-body">
          <div class="spotlight-meta-row">
            <span class="pill-category">${res.category}</span>
            <span class="meta-size">${res.page_count ? `${res.page_count} Pages` : res.size_formatted}</span>
          </div>
          <h3 class="spotlight-title">${res.title}</h3>
          <p class="spotlight-desc">${res.description}</p>
          <div class="spotlight-actions">
            ${isPdf ? `
              <button class="btn-card-action btn-preview-pdf" data-id="${res.id}" type="button">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                Preview PDF
              </button>
              <a href="${res.url}" download class="btn-card-download" title="Download PDF" aria-label="Download ${res.title}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              </a>
            ` : isVideo ? `
              <button class="btn-card-action btn-watch-video" data-id="${res.id}" type="button">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Watch Reel
              </button>
            ` : `
              <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="btn-card-action">
                <span>Access Resource</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              </a>
            `}
          </div>
        </div>
      `;

      spotlightGrid.appendChild(card);
    });
  }

  /**
   * Filter & Sort Resources
   */
  function getFilteredResources() {
    let list = [...appData.resources];

    // Category Filter
    if (activeCategory !== 'All Resources') {
      list = list.filter(r => r.category === activeCategory);
    }

    // Format Filter
    if (activeFormat === 'pdf') {
      list = list.filter(r => r.type === 'PDF Guide');
    } else if (activeFormat === 'video') {
      list = list.filter(r => r.type === 'Video Reel');
    } else if (activeFormat === 'courses') {
      list = list.filter(r => r.type === 'External Course');
    } else if (activeFormat === 'portals') {
      list = list.filter(r => r.type === 'External Portal');
    } else if (activeFormat === 'certificates') {
      list = list.filter(r => r.type === 'Certificate');
    }

    // Search Query Filter
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(r => {
        const titleMatch = r.title.toLowerCase().includes(q);
        const descMatch = r.description.toLowerCase().includes(q);
        const authorMatch = (r.author || '').toLowerCase().includes(q);
        const catMatch = r.category.toLowerCase().includes(q);
        const tagsMatch = (r.tags || []).some(t => t.toLowerCase().includes(q));
        return titleMatch || descMatch || authorMatch || catMatch || tagsMatch;
      });
    }

    // Sort Logic
    if (activeSort === 'featured') {
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else if (activeSort === 'title-asc') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (activeSort === 'title-desc') {
      list.sort((a, b) => b.title.localeCompare(a.title));
    }

    return list;
  }

  /**
   * Render Filtered Resource Cards
   */
  function renderFilteredResources() {
    const filtered = getFilteredResources();

    // Results Counter
    if (resultsCountText) {
      resultsCountText.innerHTML = `Showing <strong>${filtered.length}</strong> of ${appData.resources.length} resources`;
    }

    // Active Filters Row
    renderActiveFilterBadges();

    // Empty State
    if (filtered.length === 0) {
      resourceGrid.style.display = 'none';
      emptyState.style.display = 'block';
      return;
    } else {
      resourceGrid.style.display = 'grid';
      emptyState.style.display = 'none';
    }

    resourceGrid.innerHTML = '';

    filtered.forEach(res => {
      const card = document.createElement('article');
      card.className = 'resource-card';
      card.setAttribute('data-id', res.id);

      const isPdf = res.type === 'PDF Guide';
      const isVideo = res.type === 'Video Reel';
      const isCourse = res.type === 'External Course';
      const isPortal = res.type === 'External Portal';
      const isCert = res.type === 'Certificate';

      const typeIcon = isPdf ? '📄 PDF' : isVideo ? '🎬 REEL' : isCourse ? '🎓 COURSE' : isPortal ? '💼 PORTAL' : '🏆 CERT';

      const tagsHtml = (res.tags || []).slice(0, 3).map(t => `<span class="tag-badge">#${t}</span>`).join('');

      card.innerHTML = `
        <div class="card-thumbnail-container">
          <img src="${res.thumbnail}" alt="${res.title}" class="card-thumbnail" loading="lazy" />
          <span class="card-type-badge">${typeIcon}</span>
          ${isVideo ? `
            <div class="card-play-overlay">
              <div class="play-circle-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>
              </div>
            </div>
          ` : ''}
        </div>
        <div class="card-body">
          <div class="card-meta-top">
            <span class="card-category-tag">${res.category}</span>
            <span class="card-length-tag">${res.page_count ? `${res.page_count} Pages` : res.size_formatted}</span>
          </div>
          <h3 class="card-title">${res.title}</h3>
          <p class="card-description">${res.description}</p>
          <div class="card-tags">${tagsHtml}</div>
          <div class="card-footer">
            <div class="author-info">
              <span class="author-label">Published By</span>
              <span class="author-name">${res.author}</span>
            </div>
            <div class="card-actions">
              ${isPdf ? `
                <button class="btn-card-action btn-preview-pdf" data-id="${res.id}" type="button" aria-label="Preview ${res.title}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  <span>Preview</span>
                </button>
                <a href="${res.url}" download class="btn-card-download" title="Download PDF" aria-label="Download ${res.title}">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </a>
              ` : isVideo ? `
                <button class="btn-card-action btn-watch-video" data-id="${res.id}" type="button" aria-label="Watch ${res.title}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  <span>Watch Reel</span>
                </button>
                <a href="${res.url}" download class="btn-card-download" title="Download Video" aria-label="Download ${res.title}">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </a>
              ` : isCert ? `
                <button class="btn-card-action btn-view-cert" data-id="${res.id}" type="button" aria-label="View Credential ${res.title}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  <span>View</span>
                </button>
                <a href="${res.url}" download class="btn-card-download" title="Download Credential" aria-label="Download Certificate">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </a>
              ` : `
                <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="btn-card-action" aria-label="Open ${res.title} in new tab">
                  <span>${isCourse ? 'Watch Free' : 'Open Portal'}</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </a>
              `}
              <button class="btn-card-download btn-share-link" data-id="${res.id}" title="Share Link" aria-label="Share resource link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;

      resourceGrid.appendChild(card);
    });
  }

  /**
   * Render Active Filter Chips Row
   */
  function renderActiveFilterBadges() {
    if (!activeFiltersRow) return;
    activeFiltersRow.innerHTML = '';

    const hasFilters = activeCategory !== 'All Resources' || activeFormat !== 'all' || searchQuery.trim().length > 0;

    if (!hasFilters) return;

    if (activeCategory !== 'All Resources') {
      addFilterPill(`Category: ${activeCategory}`, () => {
        activeCategory = 'All Resources';
        updateCategoryChipActiveState();
        updateUrlParams();
        renderFilteredResources();
      });
    }

    if (activeFormat !== 'all') {
      const label = formatSelect.options[formatSelect.selectedIndex].text;
      addFilterPill(`Format: ${label}`, () => {
        activeFormat = 'all';
        formatSelect.value = 'all';
        updateUrlParams();
        renderFilteredResources();
      });
    }

    if (searchQuery.trim().length > 0) {
      addFilterPill(`Search: "${searchQuery}"`, () => {
        searchQuery = '';
        searchInput.value = '';
        searchClearBtn.style.display = 'none';
        updateUrlParams();
        renderFilteredResources();
      });
    }

    const clearAll = document.createElement('button');
    clearAll.className = 'btn-reset-filters';
    clearAll.textContent = 'Clear All';
    clearAll.type = 'button';
    clearAll.addEventListener('click', resetAllFilters);
    activeFiltersRow.appendChild(clearAll);
  }

  function addFilterPill(text, onRemove) {
    const pill = document.createElement('span');
    pill.className = 'pill-category';
    pill.style.display = 'inline-flex';
    pill.style.alignItems = 'center';
    pill.style.gap = '6px';
    pill.style.cursor = 'pointer';
    pill.innerHTML = `${text} <span style="font-size:14px;line-height:1">&times;</span>`;
    pill.addEventListener('click', onRemove);
    activeFiltersRow.appendChild(pill);
  }

  function resetAllFilters() {
    activeCategory = 'All Resources';
    activeFormat = 'all';
    searchQuery = '';
    activeSort = 'featured';
    if (searchInput) searchInput.value = '';
    if (formatSelect) formatSelect.value = 'all';
    if (sortSelect) sortSelect.value = 'featured';
    if (searchClearBtn) searchClearBtn.style.display = 'none';
    updateCategoryChipActiveState();
    updateUrlParams();
    renderFilteredResources();
  }

  /**
   * PDF Modal Controls
   */
  function openPdfModal(resource) {
    if (!resource || !pdfModal) return;
    pdfModalTitle.textContent = resource.title;
    pdfModalBadge.textContent = resource.badge || 'PDF Guide';
    pdfModalSize.textContent = `${resource.page_count} Pages • ${resource.size_formatted}`;
    pdfModalDownload.href = resource.url;
    pdfModalDownload.setAttribute('download', resource.file || 'guide.pdf');
    pdfViewerFrame.src = resource.url;

    pdfModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    activeModal = pdfModal;
  }

  function closePdfModal() {
    if (!pdfModal) return;
    pdfModal.classList.remove('open');
    pdfViewerFrame.src = 'about:blank';
    document.body.style.overflow = '';
    activeModal = null;
  }

  /**
   * Video Modal Controls
   */
  function openVideoModal(resource) {
    if (!resource || !videoModal) return;
    videoModalTitle.textContent = resource.title;
    videoModalDownload.href = resource.url;
    videoModalDownload.setAttribute('download', resource.file || 'video.mp4');
    
    videoSource.src = resource.url;
    videoPlayer.load();
    videoPlayer.play().catch(e => console.log('Autoplay deferred:', e));

    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    activeModal = videoModal;
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoPlayer.pause();
    videoSource.src = '';
    videoModal.classList.remove('open');
    document.body.style.overflow = '';
    activeModal = null;
  }

  /**
   * Certificate Modal Controls
   */
  function openCertModal(resource) {
    if (!resource || !certModal) return;
    certModalTitle.textContent = resource.title;
    certModalImage.src = resource.url;
    certModalDownload.href = resource.url;
    certModalDownload.setAttribute('download', resource.file || 'certificate.jpg');

    certModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    activeModal = certModal;
  }

  function closeCertModal() {
    if (!certModal) return;
    certModalImage.src = '';
    certModal.classList.remove('open');
    document.body.style.overflow = '';
    activeModal = null;
  }

  /**
   * Toast Notification
   */
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  /**
   * Share Resource / Copy Deep Link
   */
  function shareResource(id) {
    const res = appData.resources.find(r => r.id === id);
    if (!res) return;

    const shareUrl = `${window.location.origin}${window.location.pathname}?id=${id}`;
    
    if (navigator.share) {
      navigator.share({
        title: `${res.title} — Skill Circuit`,
        text: res.description,
        url: shareUrl
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast('Direct resource link copied to clipboard!');
      }).catch(() => {
        prompt('Copy this link:', shareUrl);
      });
    }
  }

  /**
   * URL Parameter Synchronization for Instagram DM Deep Links
   */
  function updateUrlParams() {
    const params = new URLSearchParams();
    if (activeCategory !== 'All Resources') params.set('category', activeCategory);
    if (activeFormat !== 'all') params.set('format', activeFormat);
    if (searchQuery.trim().length > 0) params.set('search', searchQuery.trim());
    
    const newQuery = params.toString();
    const newUrl = newQuery ? `${window.location.pathname}?${newQuery}` : window.location.pathname;
    window.history.replaceState({}, '', newUrl);
  }

  function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('category')) {
      const cat = params.get('category');
      if (appData.categories.includes(cat)) {
        activeCategory = cat;
        updateCategoryChipActiveState();
      }
    }
    if (params.has('format')) {
      const fmt = params.get('format');
      if (['all', 'pdf', 'video', 'courses', 'portals', 'certificates'].includes(fmt)) {
        activeFormat = fmt;
        if (formatSelect) formatSelect.value = fmt;
      }
    }
    if (params.has('search')) {
      searchQuery = params.get('search');
      if (searchInput) searchInput.value = searchQuery;
      if (searchClearBtn) searchClearBtn.style.display = 'block';
    }
  }

  function checkDirectDeepLink() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('id')) {
      const id = params.get('id');
      const res = appData.resources.find(r => r.id === id);
      if (res) {
        setTimeout(() => {
          if (res.type === 'PDF Guide') {
            openPdfModal(res);
          } else if (res.type === 'Video Reel') {
            openVideoModal(res);
          } else if (res.type === 'Certificate') {
            openCertModal(res);
          }
        }, 400);
      }
    }
  }

  /**
   * Bind DOM Events
   */
  function bindEvents() {
    // Search input with debounce
    let debounceTimer;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          searchQuery = e.target.value;
          if (searchClearBtn) {
            searchClearBtn.style.display = searchQuery.length > 0 ? 'block' : 'none';
          }
          updateUrlParams();
          renderFilteredResources();
        }, 200);
      });
    }

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClearBtn.style.display = 'none';
        searchInput.focus();
        updateUrlParams();
        renderFilteredResources();
      });
    }

    // Format dropdown
    if (formatSelect) {
      formatSelect.addEventListener('change', (e) => {
        activeFormat = e.target.value;
        updateUrlParams();
        renderFilteredResources();
      });
    }

    // Sort dropdown
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        activeSort = e.target.value;
        renderFilteredResources();
      });
    }

    // Reset buttons
    if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetAllFilters);
    if (resetEmptyBtn) resetEmptyBtn.addEventListener('click', resetAllFilters);

    // Resource Cards Click Delegation
    document.addEventListener('click', (e) => {
      // PDF Preview
      const previewPdfBtn = e.target.closest('.btn-preview-pdf');
      if (previewPdfBtn) {
        const id = previewPdfBtn.getAttribute('data-id');
        const res = appData.resources.find(r => r.id === id);
        if (res) openPdfModal(res);
        return;
      }

      // Video Watch
      const watchVideoBtn = e.target.closest('.btn-watch-video, .card-play-overlay');
      if (watchVideoBtn) {
        const card = watchVideoBtn.closest('.resource-card, .spotlight-card');
        const id = watchVideoBtn.getAttribute('data-id') || (card ? card.getAttribute('data-id') : null);
        const res = appData.resources.find(r => r.id === id);
        if (res) openVideoModal(res);
        return;
      }

      // Certificate View
      const viewCertBtn = e.target.closest('.btn-view-cert');
      if (viewCertBtn) {
        const id = viewCertBtn.getAttribute('data-id');
        const res = appData.resources.find(r => r.id === id);
        if (res) openCertModal(res);
        return;
      }

      // Share Link
      const shareBtn = e.target.closest('.btn-share-link');
      if (shareBtn) {
        const id = shareBtn.getAttribute('data-id');
        shareResource(id);
        return;
      }
    });

    // Modal Close Buttons
    document.querySelectorAll('.btn-modal-close, .modal-backdrop').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target === el) {
          if (activeModal === pdfModal) closePdfModal();
          else if (activeModal === videoModal) closeVideoModal();
          else if (activeModal === certModal) closeCertModal();
        }
      });
    });

    // Fullscreen PDF
    if (pdfFullscreenBtn) {
      pdfFullscreenBtn.addEventListener('click', () => {
        if (pdfViewerFrame.requestFullscreen) {
          pdfViewerFrame.requestFullscreen();
        }
      });
    }

    // Video Loop Toggle
    if (videoLoopBtn) {
      videoLoopBtn.addEventListener('click', () => {
        videoPlayer.loop = !videoPlayer.loop;
        videoLoopBtn.style.color = videoPlayer.loop ? 'var(--accent-primary)' : 'inherit';
        showToast(videoPlayer.loop ? 'Video loop enabled' : 'Video loop disabled');
      });
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      // Escape to close modals
      if (e.key === 'Escape') {
        if (activeModal === pdfModal) closePdfModal();
        else if (activeModal === videoModal) closeVideoModal();
        else if (activeModal === certModal) closeCertModal();
        closeMobileNav();
      }

      // Ctrl + K or '/' to focus search
      if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== searchInput)) {
        e.preventDefault();
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      }
    });

    // Mobile Drawer Toggle
    if (menuToggleBtn) {
      menuToggleBtn.addEventListener('click', openMobileNav);
    }
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', closeMobileNav);
    }
    if (mobileNavBackdrop) {
      mobileNavBackdrop.addEventListener('click', closeMobileNav);
    }

    // Sticky Header Shadow
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.site-header');
      if (header) {
        if (window.scrollY > 10) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    }, { passive: true });
  }

  function openMobileNav() {
    if (mobileNavDrawer) mobileNavDrawer.classList.add('open');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (mobileNavDrawer) mobileNavDrawer.classList.remove('open');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Kickoff
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
