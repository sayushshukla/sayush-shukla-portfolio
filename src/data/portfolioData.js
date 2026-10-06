export const portfolioData = {
  personal: {
    name: "Sayush Shukla",
    shortName: "Sayush",
    initials: "SS",
    role: "Computer Science Engineering Student",
    subheading: "Full Stack Developer | AI/ML Enthusiast",
    degree: "B.Tech Computer Science Engineering",
    college: "PRANVEER SINGH INSTITUTE OF TECHNOLOGY (PSIT)",
    currentSemester: "3rd Semester",

    location: "Kanpur, Uttar Pradesh, India",
    availability: "Open to Internships & Projects",
    shortDescription:
      "I'm a B.Tech Computer Science student passionate about building modern web applications and intelligent systems. I enjoy solving programming problems, learning new technologies, and turning ideas into practical projects.",
    stats: [
      { id: "sem", value: "3rd", label: "Semester", sub: "B.Tech in CSE" },
      { id: "projects", value: "3+", label: "Key Projects", sub: "ML & Software" },
      { id: "tech", value: "15+", label: "Technologies", sub: "Languages & Tools" },
    ],
    aboutText: [
      "I am a passionate Computer Science and Engineering undergraduate currently in my 3rd semester at Pranveer Singh Institute of Technology (PSIT). My technical curiosity spans across Full Stack Web Development and Artificial Intelligence / Machine Learning.",
      "I actively practice Data Structures and Algorithms while developing hands-on applications in Python, C++, and modern JavaScript ecosystems. I value clean code, systematic problem solving, and building tools that make an impact.",
      "Rather than claiming to be an expert in everything, I take pride in being a dedicated, fast-learning engineer who turns theoretical concepts into working prototypes through constant practice and real projects.",
    ],
  },

  socialLinks: {
    email: "shuklasayush@gmail.com",
    linkedin: "https://linkedin.com/in/sayush-shukla-a1675440b",
    github: "https://github.com/sayushshukla",
    leetcode: "https://leetcode.com/u/sayush777/",
  },

  skills: {
    programming: [
      { name: "C", level: "Core & Systems", stage: "Working with", icon: "Code2" },
      { name: "C++", level: "DSA & Problem Solving", stage: "Active Practice", icon: "FileCode2" },
      { name: "Python", level: "Scripting & AI/ML", stage: "Working with", icon: "Terminal" },
      { name: "JavaScript", level: "Modern ES6+ / Web", stage: "Working with", icon: "FileJson" },
    ],
    frontend: [
      { name: "HTML5", level: "Semantic Markup & SEO", stage: "Proficient", icon: "Globe" },
      { name: "CSS3", level: "Responsive & Flex/Grid", stage: "Proficient", icon: "Palette" },
      { name: "Tailwind CSS", level: "Utility-First Design", stage: "Working with", icon: "Sparkles" },
      { name: "Bootstrap", level: "Component Layouts", stage: "Working with", icon: "Layout" },
      { name: "React", level: "Component Architecture & Hooks", stage: "Actively Learning", icon: "Atom" },
    ],
    backend: [
      { name: "Node.js", level: "Runtime & REST APIs", stage: "Learning & Building", icon: "Server" },
      { name: "Django", level: "Python Web Framework", stage: "Learning & Building", icon: "Layers" },
    ],
    databases: [
      { name: "MySQL", level: "Relational Queries & Schemas", stage: "Working with", icon: "Database" },
      { name: "MongoDB", level: "Document Storage & NoSQL", stage: "Learning & Building", icon: "Boxes" },
    ],
    aiml: [
      { name: "PyTorch", level: "Deep Learning Foundations", stage: "Learning & Building", icon: "Brain" },
      { name: "TensorFlow", level: "Neural Network Pipelines", stage: "Learning & Building", icon: "Cpu" },
      { name: "Machine Learning", level: "Algorithms, Prep & Metrics", stage: "Hands-on Projects", icon: "Network" },
    ],
    tools: [
      { name: "Git", level: "Version Control & Branching", stage: "Daily Use", icon: "GitBranch" },
      { name: "GitHub", level: "Repositories & Open Source", stage: "Active", icon: "Github" },
      { name: "VS Code", level: "Primary Development IDE", stage: "Daily Use", icon: "Laptop" },
      { name: "Docker", level: "Containerization Basics", stage: "Exploring", icon: "Container" },
      { name: "Android Studio", level: "Mobile Dev & Tooling", stage: "Exploration", icon: "Smartphone" },
    ],
  },

  projects: [
    {
      id: "credit-card-fraud-detection",
      title: "Credit Card Fraud Detection",
      status: "Completed",
      badge: "Machine Learning",
      statusColor: "emerald",
      image: "/images/project-fraud.jpg",
      shortDescription:
        "Detects potentially fraudulent credit card transactions using machine learning techniques to minimize financial losses and protect customer security.",
      fullDescription:
        "This project focuses on identifying anomalous and fraudulent credit card transactions from high-volume transaction datasets. It features comprehensive data cleaning, feature scaling, addressing severe class imbalance (frauds representing <0.2% of transactions), and training classification models evaluated with ROC-AUC and Precision-Recall metrics.",
      technologies: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
      highlights: [
        "Handles severe class imbalance in real-world transaction datasets",
        "Evaluated with ROC-AUC and Precision-Recall tradeoffs",
        "Feature scaling and outlier detection pipeline",
      ],
      githubUrl: "https://github.com/sayushshukla",
      isLive: false,
      placeholderNote: "GitHub repository link placeholder — easily updated once public",
    },
    {
      id: "social-media-sentiment-analysis",
      title: "Social Media Sentiment Analysis",
      status: "Completed",
      badge: "NLP / AI",
      statusColor: "emerald",
      image: "/images/project-sentiment.jpg",
      shortDescription:
        "Analyzes social media text data and classifies sentiments as positive, negative, or neutral to understand public opinion and audience trends.",
      fullDescription:
        "A natural language processing pipeline designed to ingest unstructured social media commentary, clean and normalize text (stopwords removal, stemming, tokenization), and extract polarity scores. Helps classify user sentiments towards brands, topics, and events with high interpretability.",
      technologies: ["Python", "NLP", "Machine Learning", "NLTK", "Scikit-Learn", "Pandas"],
      highlights: [
        "Text normalization, tokenization, and lemmatization pipeline",
        "Multi-class sentiment classification (Positive / Neutral / Negative)",
        "Visual sentiment distribution dashboards",
      ],
      githubUrl: "https://github.com/sayushshukla",
      isLive: false,
      placeholderNote: "GitHub repository link placeholder — easily updated once public",
    },
    {
      id: "face-recognition-system",
      title: "Face Recognition System",
      status: "Work in Progress",
      badge: "Computer Vision",
      statusColor: "amber",
      image: "/images/project-face-rec.jpg",
      shortDescription:
        "A computer vision based face recognition system for real-time face detection, feature landmarking, and identity matching.",
      fullDescription:
        "An active computer vision project engineered to capture video streams, localize human faces with high accuracy, generate 128-d face embeddings, and match incoming faces against a known identity database in real time. Built to explore practical biometric security and camera-based authentication.",
      technologies: ["Python", "Computer Vision", "OpenCV", "Deep Learning", "Machine Learning"],
      highlights: [
        "Real-time webcam video stream processing",
        "Facial landmark extraction & bounding-box alignment",
        "Active development: optimizing inference speed and lighting robustness",
      ],
      githubUrl: "https://github.com/sayushshukla",
      isLive: false,
      placeholderNote: "GitHub repository link placeholder — active project under development",
    },
  ],

  education: [
    {
      id: "btech",
      institution: "PRANVEER SINGH INSTITUTE OF TECHNOLOGY (PSIT)",
      degree: "B.Tech Computer Science Engineering",
      timeline: "2024 - Present (Current: 3rd Semester)",
      badge: "Undergraduate",
      metrics: "3rd Semester",
      description:
        "Pursuing core computer science curriculum covering Data Structures, Algorithms, Object-Oriented Analysis, Computer Architecture, and Operating Systems. Actively involved in campus tech events and collaborative development.",
      highlights: [
        "Active member of departmental technical learning forums",
        "Focused on algorithmic problem-solving and software architecture",
      ],
    },
    {
      id: "school",
      institution: "LVM Education Centre",
      degree: "Higher Secondary & Secondary Education",
      timeline: "Completed in 2024",
      badge: "Schooling",
      metrics: "Class XII (2024)",
      description:
        "Built a strong foundation in Mathematics, Physics, and Computer Science fundamentals that catalyzed an ongoing passion for software engineering and algorithms.",
      highlights: [
        "Strong quantitative and logical reasoning foundation",
        "Early exposure to programming and computer science principles",
      ],
    },
  ],

  certifications: [
    {
      id: "ml-spec",
      title: "Machine Learning Specialization",
      issuer: "Coursera / DeepLearning.AI",
      category: "Artificial Intelligence",
      description:
        "Comprehensive foundational curriculum taught by Andrew Ng covering supervised learning, regularized regression, neural networks, decision trees, and unsupervised learning best practices.",
      skills: ["Supervised Learning", "Neural Networks", "Logistic Regression", "Model Tuning"],
      date: "Certified",
    },
    {
      id: "hackerrank-cpp",
      title: "HackerRank C++",
      issuer: "HackerRank",
      category: "Programming & Problem Solving",
      description:
        "Validation of core C++ language proficiency, memory management concepts, object-oriented programming, and standard template library (STL) usage.",
      skills: ["C++ STL", "Object-Oriented Programming", "Pointers & Memory", "Problem Solving"],
      date: "Proficiency Verified",
    },
    {
      id: "prompt-eng",
      title: "Prompt Engineering with GPT",
      issuer: "Industry Specialization",
      category: "Generative AI",
      description:
        "Modern techniques for structuring prompts, chain-of-thought prompting, role-prompting, few-shot conditioning, and LLM application development.",
      skills: ["LLM Prompting", "Few-Shot Learning", "Chain-of-Thought", "AI Workflows"],
      date: "Specialized Training",
    },
    {
      id: "hackathon",
      title: "College Hackathon / Techexpo",
      issuer: "PSIT Tech Events",
      category: "Hackathon & Innovation",
      description:
        "Participated in collegiate technology exhibitions and hackathons, collaborating under time constraints to present software solutions and functional prototypes.",
      skills: ["Rapid Prototyping", "Team Collaboration", "Pitching & Presentation", "Agile Execution"],
      date: "College Participation",
    },
  ],

  currentlyLearning: [
    {
      title: "Data Structures & Algorithms (DSA)",
      focus: "Trees, Graphs, Recursion, LeetCode Problem Solving",
      icon: "Binary",
      status: "In Progress",
      level: "Active Daily Practice",
      details: "Strengthening core problem-solving speed and algorithmic intuition on platforms like LeetCode.",
    },
    {
      title: "Modern JavaScript (ES6+)",
      focus: "Asynchronous JS, Promises, Async/Await, Event Loop, Closures",
      icon: "Code",
      status: "In Progress",
      level: "Core Web Foundation",
      details: "Deepening mastery over asynchronous programming, modern APIs, and clean functional patterns.",
    },
    {
      title: "Backend Development",
      focus: "REST APIs, Node.js, Express, Django, Authentication & Security",
      icon: "Server",
      status: "In Progress",
      level: "Architecture & Integration",
      details: "Designing scalable backend routes, database connectors, and secure authentication flows.",
    },
    {
      title: "Machine Learning & Deep Learning",
      focus: "Model evaluation, PyTorch tensors, NLP fundamentals & Computer Vision",
      icon: "Cpu",
      status: "In Progress",
      level: "AI Specialization",
      details: "Transitioning from traditional Scikit-Learn pipelines to neural networks and computer vision models.",
    },
    {
      title: "React & Component Architecture",
      focus: "React 19, Hooks, State Management, Responsive UI Patterns",
      icon: "Atom",
      status: "In Progress",
      level: "Modern Frontend",
      details: "Mastering reusable UI components, performant rendering, and interactive developer interfaces.",
    },
    {
      title: "Modern CSS & Responsive Systems",
      focus: "Tailwind CSS, Flexbox/Grid, Glassmorphism, Micro-Animations",
      icon: "Sparkles",
      status: "In Progress",
      level: "Design & UX",
      details: "Polishing modern aesthetics, dark mode themes, accessibility, and fluid animations.",
    },
  ],
};
