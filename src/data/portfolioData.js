/**
 * Central Portfolio Data Configuration for Tanish Jangale
 * Black + Red Cinematic Personal Branding with Verified Assets and 9 Selected Projects
 */

export const personalInfo = {
  name: "TANISH JANGALE",
  firstName: "TANISH",
  lastName: "JANGALE",
  shortName: "TANISH.",
  smallLabel: "HELLO, I'M TANISH",
  roleSubtitle: "AI ENTHUSIAST | SOFTWARE DEVELOPER | CYBERSECURITY ENTHUSIAST",
  tagline: "Building intelligent digital experiences, exploring emerging technologies and turning ideas into practical solutions.",
  availability: "OPEN TO OPPORTUNITIES",

  // Real Assets
  portrait: "/assets/tanish-portrait.jpeg",
  foldedHandsPortrait: "/assets/photo.png",
  resumeUrl: "/assets/Tanish Manoj Jangale - CV.pdf",
  resumeFilename: "Tanish Manoj Jangale - CV.pdf",

  floatingTags: [
    { label: "AI", sub: "LLMs & Neural Nets" },
    { label: "SOFTWARE", sub: "Full-Stack Web" },
    { label: "CYBERSECURITY", sub: "Threat Analysis" },
    { label: "PYTHON", sub: "Core & Systems" },
    { label: "WEB DEV", sub: "React & Next.js" },
  ],

  about: {
    heading: "BEYOND THE CODE.",
    intro: "I'm a Bachelor of Computer Applications graduate from Amity University Maharashtra with an interest in software development, artificial intelligence and cybersecurity. I enjoy exploring new technologies and developing practical digital solutions.",
    educationDetail: "Bachelor of Computer Applications (BCA), Amity University Maharashtra — Completed 2026",
    interests: [
      "Artificial Intelligence & LLM Experimentation",
      "Cybersecurity & Threat Defense",
      "Software Engineering & Architecture",
      "Product Development & Modern Web Systems",
      "Relational Databases & Scalable APIs"
    ],
    careerFocus: "Focused on bridging secure software engineering with modern machine intelligence to create reliable, scalable, and intelligent software systems."
  },

  statistics: [
    {
      value: "2026",
      label: "BCA Graduate",
      subtext: "Amity University Maharashtra",
      highlight: true
    },
    {
      value: "9",
      label: "Selected Repositories",
      subtext: "Cybersecurity, AI & Web Platforms",
      highlight: false
    },
    {
      value: "3",
      label: "Core Pillars",
      subtext: "AI × Software × Cybersecurity",
      highlight: false
    }
  ],

  socials: {
    github: "https://github.com/tanish0545",
    linkedin: "https://www.linkedin.com/in/tanish-jangale-7025a3298/",
    email: "tanishjangale05@gmail.com",
  }
};

export const skillsData = [
  {
    category: "Programming",
    description: "Core languages for application logic, systems, and algorithms",
    skills: [
      { name: "Python", tag: "Primary" },
      { name: "JavaScript", tag: "Full-Stack" },
      { name: "TypeScript", tag: "Typed Web" },
      { name: "C++", tag: "Algorithms/Core" }
    ]
  },
  {
    category: "Frontend",
    description: "Modern, performant web interfaces and design systems",
    skills: [
      { name: "React.js", tag: "SPA Architecture" },
      { name: "Next.js", tag: "Modern SSR" },
      { name: "Tailwind CSS", tag: "Design Systems" },
      { name: "HTML5 & CSS3", tag: "Semantic Markup" }
    ]
  },
  {
    category: "Backend",
    description: "Robust API services, microframeworks, and server runtimes",
    skills: [
      { name: "Flask", tag: "Python Backend" },
      { name: "Node.js", tag: "JS Runtime" },
      { name: "REST APIs", tag: "Service Contracts" }
    ]
  },
  {
    category: "Databases",
    description: "Data persistence, schema design, and querying",
    skills: [
      { name: "MySQL", tag: "Relational DB" },
      { name: "SQL", tag: "Structured Queries" },
      { name: "SQLAlchemy", tag: "ORM" }
    ]
  },
  {
    category: "AI & LLM",
    description: "Practical intelligence integration and conversational flows",
    skills: [
      { name: "LLM Integration", tag: "Generative AI" },
      { name: "AI App Development", tag: "Intelligent Workflows" },
      { name: "Prompt Engineering", tag: "Context Optimization" }
    ]
  },
  {
    category: "Cybersecurity",
    description: "Threat evaluation and defensive software engineering",
    skills: [
      { name: "Threat Analysis", tag: "Vulnerability Scanning" },
      { name: "Cybersecurity Fundamentals", tag: "Defense Practices" },
      { name: "Static Code Analysis", tag: "Security Auditing" }
    ]
  },
  {
    category: "Tools",
    description: "Workflow tooling, source control, and collaborative prototyping",
    skills: [
      { name: "Git & GitHub", tag: "Version Control" },
      { name: "VS Code", tag: "Development Environment" },
      { name: "Figma", tag: "UI/UX Design" },
      { name: "Postman", tag: "API Testing" }
    ]
  }
];

export const projectsData = [
  {
    id: "leafly-tea-store",
    title: "Leafly Tea Store",
    repoName: "leafly-tea-store",
    brand: "Leafly",
    category: "Client Projects",
    categories: ["Client Projects", "E-commerce", "Web Development"],
    badge: "Completed",
    statusType: "completed",
    image: "/assets/leafly-hero-poster.webp",
    shortDescription: "A premium tea e-commerce website featuring an elegant shopping experience, modern responsive design and a premium brand identity.",
    fullDescription: "Leafly Tea Store is an artisanal client e-commerce platform built for Leafly, offering a premium tea shopping experience. Engineered with React.js, Vite, and Tailwind CSS, featuring sensory flavor profiles, curated organic collections, responsive product discovery, and modern e-commerce UI.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "TypeScript", "Firebase"],
    features: [
      { name: "Artisanal Product Catalog", description: "Curated tea varieties with origin details, oxidation tiers, and brewing temperatures." },
      { name: "Interactive Flavor Matrix", description: "Sensory attribute visualization highlighting aroma, body, and tasting notes." },
      { name: "Responsive Shopping Bag", description: "Real-time cart drawer with subtotal calculations and clean checkout UI." }
    ],
    plannedFeatures: [
      "Stripe payment gateway integration",
      "Personalized tea subscription box builder"
    ],
    githubUrl: "https://github.com/tanish0545/leafly-tea-store",
    liveDemoUrl: "https://leaflytea.in/",
    accentColor: "#E50914"
  },
  {
    id: "lifefitness-virar",
    title: "LifeFitness Virar",
    repoName: "Lifefitness-Virar",
    category: "Client Projects",
    categories: ["Client Projects", "Web Development"],
    badge: "Completed",
    statusType: "completed",
    shortDescription: "Production-ready modern web presence for Life Fitness Virar, a premier unisex fully AC fitness centre in Virar East.",
    fullDescription: "Built for Life Fitness Virar (Manvelpada, Virar East), this client platform features modern glassmorphism styling, Three.js 3D hero elements, interactive membership tier comparisons, verified business hours, facility amenities, and direct consultation contact triggers.",
    technologies: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "Three.js", "Lucide React"],
    features: [
      { name: "3D Interactive Hero Experience", description: "Hardware-accelerated Three.js canvas element welcoming gym enthusiasts." },
      { name: "Facility & Amenity Showcase", description: "Visual breakdown of cardio zones, heavy weight areas, and trainer stations." },
      { name: "Membership Tier Comparison", description: "Structured plan options with transparent pricing and direct WhatsApp/call inquiries." }
    ],
    plannedFeatures: [
      "Online membership renewal portal",
      "Trainer slot scheduler"
    ],
    githubUrl: "https://github.com/tanish0545/Lifefitness-Virar",
    liveDemoUrl: "https://lifefitness-virar.vercel.app",
    accentColor: "#E50914"
  },
  {
    id: "saloon",
    title: "Saloon",
    repoName: "Saloon",
    category: "Web Development",
    categories: ["Web Development", "Client Projects"],
    badge: "Completed",
    statusType: "completed",
    shortDescription: "A contemporary beauty lounge and hair salon web application with service catalogs, stylist portfolios, and consultation booking.",
    fullDescription: "Saloon is an elegant digital hub designed for boutique beauty and grooming establishments. It provides customers with comprehensive service menus, pricing schedules, stylist portfolios, and an effortless consultation booking flow.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Vercel"],
    features: [
      { name: "Interactive Service Menu", description: "Categorized hair, skin, and styling services with duration and pricing." },
      { name: "Stylist Portfolio Display", description: "Visual gallery of styling transformations and master stylist credentials." },
      { name: "Appointment Booking Interface", description: "Intuitive date and slot selector for salon appointments." }
    ],
    plannedFeatures: [
      "SMS reminder notification integration",
      "Loyalty rewards point tracking"
    ],
    githubUrl: "https://github.com/tanish0545/Saloon",
    liveDemoUrl: "https://saloon-three-tau.vercel.app",
    accentColor: "#E50914"
  },
  {
    id: "veloura",
    title: "Veloura",
    repoName: "veloura",
    category: "E-commerce",
    categories: ["E-commerce", "Web Development"],
    badge: "Prototype",
    statusType: "prototype",
    shortDescription: "A luxury lifestyle and modern apparel storefront concept emphasizing editorial typography, fluid collection grids, and minimalist aesthetic.",
    fullDescription: "Veloura explores high-end fashion e-commerce with a minimalist luxury design philosophy. Focuses on premium lookbooks, editorial garment storytelling, responsive filters by season, and smooth product inspection transitions.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    features: [
      { name: "Editorial Seasonal Lookbook", description: "Full-bleed imagery showcasing seasonal capsule collections." },
      { name: "Interactive Product Showcase", description: "Detailed sizing guides, fabric compositions, and quick-add actions." },
      { name: "Responsive Filter Matrix", description: "Sort by collection, occasion, and material with zero latency." }
    ],
    plannedFeatures: [
      "Virtual fitting room visualization",
      "Multi-currency international checkout"
    ],
    githubUrl: "https://github.com/tanish0545/veloura",
    liveDemoUrl: null,
    accentColor: "#E50914"
  },
  {
    id: "canvaskart",
    title: "CanvasKart",
    repoName: "CanvasKart",
    category: "E-commerce",
    categories: ["E-commerce", "AI & Cybersecurity"],
    badge: "Completed",
    statusType: "completed",
    shortDescription: "An AI-powered print-on-demand and custom merchandise platform enabling users to personalize, preview, and order premium printed goods.",
    fullDescription: "CanvasKart empowers creators and shoppers to design, customize, and order premium custom-printed merchandise. Features an interactive online product preview studio, automated print resolution validation, and high-performance ordering workflows.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Vercel"],
    features: [
      { name: "Custom Product Personalizer", description: "Real-time mockup generator overlaying custom artwork onto apparel and canvas." },
      { name: "Resolution & Print Checker", description: "Automated DPI and asset validation ensuring high-quality print production." },
      { name: "E-Commerce Checkout Flow", description: "Streamlined multi-item cart with shipping estimation." }
    ],
    plannedFeatures: [
      "Generative AI prompt-to-apparel artwork studio",
      "Direct drop-shipping vendor webhook integration"
    ],
    githubUrl: "https://github.com/tanish0545/CanvasKart",
    liveDemoUrl: "https://canvas-kart.vercel.app",
    accentColor: "#E50914"
  },
  {
    id: "octacore-brilliance",
    title: "Octacore Brilliance",
    repoName: "octacore-brilliance",
    category: "Web Development",
    categories: ["Web Development", "Client Projects"],
    badge: "In Development",
    statusType: "in_development",
    shortDescription: "A creative digital agency and tech solutions website architecture designed for high-conversion portfolio showcases and branding services.",
    fullDescription: "Octacore Brilliance is an agency web architecture designed for technology consultancies and creative studios. Emphasizes interactive service capabilities, case study deep-dives, metric dashboards, and client lead onboarding funnels.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    features: [
      { name: "Modern Agency Layout", description: "High-contrast clean presentation with modular service cards." },
      { name: "Interactive Service Matrix", description: "Engaging tabs showcasing digital marketing, web engineering, and brand strategy." },
      { name: "Client Discovery Funnel", description: "Structured questionnaire to qualify prospective software projects." }
    ],
    plannedFeatures: [
      "Client testimonial video showcase",
      "Live project budget calculator"
    ],
    githubUrl: "https://github.com/tanish0545/octacore-brilliance",
    liveDemoUrl: "https://octa-shine-core.lovable.app/",
    accentColor: "#E50914"
  },
  {
    id: "threatscope",
    title: "ThreatScope",
    repoName: "threatscope-frontend / threatscope-backend",
    category: "AI & Cybersecurity",
    categories: ["AI & Cybersecurity"],
    badge: "IN DEVELOPMENT",
    statusType: "in_development",
    shortDescription: "An AI-assisted cyber threat analysis platform designed to analyze files and URLs, assess potential threats and present risk insights.",
    fullDescription: "ThreatScope is an AI-assisted threat investigation workbench engineered to scan suspicious files, evaluate malicious URLs, and synthesize actionable security insights. Currently undergoing active error fixing, endpoint stabilization, and engine refinement prior to public release.",
    technologies: ["React", "Vite", "Chart.js", "Recharts", "Python", "Flask", "SQLAlchemy", "Socket.io"],
    caseStudy: {
      overview: "ThreatScope is an AI-assisted cyber threat analysis platform designed to analyze files and URLs, assess potential threats and present risk insights.",
      problem: "Individual developers and security analysts frequently lack lightweight, accessible tools to quickly triage suspicious URLs, evaluate uploaded payloads, and receive human-readable risk summaries without relying on complex, costly enterprise SIEM suites.",
      solution: "A unified full-stack application combining deterministic heuristic checks, entropy scanning, domain reputation auditing, and LLM-assisted threat explanations into a single dashboard.",
      technologies: ["React", "Vite", "Chart.js", "Recharts", "Python", "Flask", "SQLAlchemy", "Socket.io"],
      currentFeatures: [
        "File analysis module with file header verification and hash generation",
        "URL risk assessment checking syntax anomalies and redirects",
        "Deterministic heuristic scoring engine aggregating threat indicators",
        "Threat classification dashboard displaying risk levels and charts",
        "AI-assisted vulnerability explanations and mitigation insights"
      ],
      developmentProgress: "Backend Flask API and React frontend dashboard are architected and integrated. Currently undergoing bug fixing, API response stabilization, and security testing before deployment.",
      developmentChallenges: "Calibrating dynamic file inspection without compromising server security, and reducing latency on multi-engine URL reputation lookups.",
      futureImprovements: [
        "Sandboxed file dynamic execution logs",
        "Automated MITRE ATT&CK matrix technique alignment",
        "Automated webhook alerts for security event notifications"
      ]
    },
    githubFrontendUrl: "https://github.com/tanish0545/threatscope-frontend",
    githubBackendUrl: "https://github.com/tanish0545/threatscope-backend",
    githubUrl: "https://github.com/tanish0545/threatscope-frontend",
    liveDemoUrl: null, // Strictly no live demo button
    accentColor: "#E50914"
  }
];

export const journeyTimeline = [
  {
    period: "Completed 2026",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Amity University Maharashtra",
    type: "education",
    details: "Built solid foundations in Computer Science, Database Management Systems, Object-Oriented Programming, Data Structures, and Software Engineering. Focused academic projects on artificial intelligence applications and cybersecurity fundamentals."
  },
  {
    period: "2026 — Present",
    title: "Digital Marketing Executive / Technology Solutions",
    institution: "XQORA Technologies",
    type: "experience",
    details: "Driving digital marketing execution, technology platforms, modern web architecture, digital branding strategies, and client project deliverables. Collaborating on establishing clean development workflows and high-converting digital user experiences."
  },
  {
    period: "2024 — 2026",
    title: "Software & AI Engineering Initiatives",
    institution: "Independent & Open Projects",
    type: "projects",
    details: "Engineered ThreatScope (an AI-assisted cybersecurity platform) and full-stack client web systems including LifeFitness Virar,Octacore Brilliance, Saloon, and Leafly Tea Store."
  }
];
