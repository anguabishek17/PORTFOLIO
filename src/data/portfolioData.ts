import type { Project, Experience, EducationInfo, SkillCategory, TimelineEvent, Achievement } from '../types';

export const PERSONAL_INFO = {
  name: 'ANGU ABISHEK M',
  shortName: 'ANGU',
  monogram: 'ANGU',
  role: 'AI Developer & ECE Undergraduate',
  headline: 'AI Developer | Full Stack Developer | ECE Engineer | Embedded Enthusiast',
  eyebrow: 'ECE UNDERGRADUATE · AI DEVELOPER · BUILDER',
  location: 'Hosur, Tamil Nadu, India',
  email: 'anguabishek183@gmail.com',
  github: 'https://github.com/anguabishek17',
  linkedin: 'https://www.linkedin.com/in/angu-abishek-m-00748a311',
  tagline: 'Building intelligent systems, full-stack applications, and real-world engineering solutions at the intersection of AI and electronics.',
  aboutStatement: "I’m an Electronics & Communication Engineering undergraduate focused on building intelligent systems that connect AI with real-world engineering.",
  aboutParagraph: "Currently pursuing B.E. in Electronics & Communication Engineering at V.S.B Engineering College, Karur. My work combines artificial intelligence, full-stack development, computer vision, embedded systems, and engineering problem-solving. I enjoy turning complex ideas into practical products and participating in hackathons and technical projects that have real-world applications.",
  pillars: [
    { number: '01', title: 'ECE Undergraduate', desc: 'Solid foundation in electronic circuits, RF signals, digital logic, and communication architectures.' },
    { number: '02', title: 'AI / ML Enthusiast', desc: 'Deep learning, neural image restoration, graph-based anomaly detection, and multimodal NLP engines.' },
    { number: '03', title: 'Full-Stack Developer', desc: 'Crafting responsive, high-performance web systems with modern React, Vite, FastAPI, and robust databases.' },
    { number: '04', title: 'Hackathon Builder', desc: 'Rapid prototyping under pressure, converting abstract domain problems into working production models.' },
    { number: '05', title: 'Real-World Engineering', desc: 'Translating theory into industrial deployment—from smart manufacturing digital SOPs to sensor networks.' }
  ]
};

export const QUICK_STATS = [
  { label: 'CGPA', value: '8.51', numeric: 8.51, suffix: '', decimals: 2, subtext: 'Academic Excellence' },
  { label: 'Expected Graduation', value: '2029', numeric: 2029, suffix: '', decimals: 0, subtext: 'B.E. ECE' },
  { label: 'Current Year', value: 'III', numeric: 3, isRoman: true, suffix: ' Year', subtext: 'Undergraduate' },
  { label: 'Backlogs', value: 'NO', numeric: 0, textDisplay: '0', subtext: 'Clean Academic Record' },
];

export const PROJECTS: Project[] = [
  {
    id: 'sarquery-ai',
    number: '01',
    title: 'SARQUERY AI',
    displayName: 'SARQUERY AI',
    tagline: 'Satellite Imagery Intelligence & Multi-Sensor Change Detection',
    description: 'An intelligent natural-language platform for analyzing satellite imagery using dynamic task selection, optical and SAR analysis, building and water detection, spatial analysis, and bi-temporal change detection, with evidence-grounded AI responses.',
    category: 'AI / ML',
    featured: true,
    technologies: [
      'React', 'TypeScript', 'Vite', 'FastAPI', 'Python', 'PyTorch', 
      'YOLO', 'OpenCV', 'Rasterio', 'GDAL', 'GeoPandas', 'Shapely', 
      'NumPy', 'Gemini AI', 'MapLibre', 'Leaflet', 'GeoJSON'
    ],
    githubUrl: 'https://github.com/anguabishek17/SATQUERY-AI',
    metrics: ['Optical + SAR Analysis', 'Dynamic Task Routing', 'Bi-Temporal Change AI', 'Evidence Grounding'],
    architectureHighlights: [
      'Dual-Stream processing for SAR and high-res optical imagery',
      'Dynamic task router connecting Geospatial models with LLM reasoning',
      'Automated mask extraction for building footprints and hydrological bodies'
    ]
  },
  {
    id: 'jarvis-aml',
    number: '02',
    title: 'JARVIS-AML',
    displayName: 'JARVIS-AML — AI-Powered Financial Crime Investigation System',
    tagline: 'Graph-Based AML Investigation & Behavioral Fingerprinting',
    description: 'A graph-based AML investigation platform that detects suspicious financial patterns, reconstructs multi-hop money trails, infers probable account roles, and provides explainable evidence using temporal analysis and Money Trail DNA behavioural fingerprinting.',
    category: 'AI / ML',
    featured: true,
    technologies: [
      'Python', 'FastAPI', 'NetworkX', 'Pandas', 'NumPy', 'React', 
      'Vite', 'Cytoscape.js', 'HTML', 'CSS', 'JavaScript', 'REST API', 
      'ReportLab', 'SHA-256'
    ],
    githubUrl: 'https://github.com/anguabishek17/Jarvis-AML.git',
    metrics: ['Multi-Hop Flow Reconstruction', 'DNA Fingerprinting', 'Top 50 Hackathon Finalist', 'SHA-256 Audit Trail'],
    architectureHighlights: [
      'Directed multi-graph clustering with temporal window constraints',
      'Behavioral anomaly scoring on transactional velocity & fan-in/fan-out metrics',
      'Automated forensic PDF docket generation with cryptographic hash validation'
    ]
  },
  {
    id: 'semiconductor-inspection',
    number: '03',
    title: 'AI-BASED SEMICONDUCTOR INSPECTION IMAGE RESTORATION',
    displayName: 'Semiconductor Inspection Image Restoration',
    tagline: 'Deep U-Net Architecture for Grayscale Defect Analysis',
    description: 'A U-Net based image restoration pipeline designed to enhance grayscale semiconductor inspection images by reducing noise while preserving critical structural details required for automated defect analysis.',
    category: 'Computer Vision',
    featured: false,
    technologies: ['Python', 'PyTorch', 'NumPy', 'Matplotlib', 'Google Colab'],
    githubUrl: 'https://github.com/anguabishek17/AI-BASED-IMAGE-RESTORATION-FOR-SEMICONDUCTOR-INSPECTION-SEMICON-HACKATHON.git',
    metrics: ['Sub-Micron Edge Preservation', 'Noise Reduction', 'U-Net Skip Connections', 'Semicon Hackathon'],
    architectureHighlights: [
      'Custom perceptual and L1 loss balancing for preserving wafer edge fidelity',
      'High-throughput synthetic noise injection pipeline for extreme low-dose SEM simulation'
    ]
  },
  {
    id: 'log-anomaly-explainer',
    number: '04',
    title: 'AI-POWERED ROOT CAUSE ANALYSIS FOR LOG MONITORING',
    displayName: 'LOG ANOMALY EXPLAINER',
    tagline: 'RAG & Vector-Driven Observability Platform',
    description: 'An AI-powered observability platform that transforms raw application logs into meaningful insights using anomaly detection, Retrieval-Augmented Generation, vector search, and Google Gemini.',
    category: 'System Architecture',
    featured: false,
    technologies: [
      'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 
      'Google Gemini', 'LangChain', 'ChromaDB', 'PostgreSQL', 
      'Drain3', 'Isolation Forest', 'React Flow', 'Recharts'
    ],
    githubUrl: 'https://github.com/anguabishek17/Log-Anomaly-Explainer.git',
    metrics: ['Drain3 Template Mining', 'Vector Vector Embeddings', 'Isolation Forest AI', 'Visual DAG Flow'],
    architectureHighlights: [
      'Streaming log parsing and regex extraction with Drain3 parser',
      'Semantic anomaly indexing with ChromaDB and Gemini-guided remediation playbooks'
    ]
  },
  {
    id: 'maitri',
    number: '05',
    title: 'MAITRI',
    displayName: 'MAITRI — Multimodal Astronaut Wellness Monitoring System',
    tagline: 'Multimodal Psychological & Operational Support for Deep Space Missions',
    description: 'An enterprise-level multimodal AI platform designed to monitor and support astronaut psychological and operational wellness during deep-space missions through facial emotion recognition, voice stress analysis, and contextual conversational AI.',
    category: 'AI / ML',
    featured: true,
    technologies: [
      'Next.js 15', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Recharts', 
      'React Context API', 'JWT', 'FastAPI', 'Python', 'SQLite', 
      'SQLAlchemy', 'Alembic', 'DeepFace', 'OpenCV', 'TensorFlow', 
      'SpeechBrain', 'PyTorch', 'Torchaudio', 'Gemini'
    ],
    githubUrl: 'https://github.com/anguabishek17/MAITRI.git',
    metrics: ['Facial Emotion AI', 'Voice Stress Analysis', 'Contextual AI Companion', 'Zero-Latency Edge Design'],
    architectureHighlights: [
      'Dual pipeline: Acoustic spectrogram feature extraction + Facial micro-expression tracking',
      'Real-time stress level aggregation with local LLM therapeutic prompts'
    ]
  },
  {
    id: 'smart-care',
    number: '06',
    title: 'SMART CARE',
    displayName: 'SMART CARE — Hostel Management System',
    tagline: 'Comprehensive Campus Hostel Digital Management Architecture',
    description: 'Hostel Management System developed for V.S.B Engineering College, Karur. Facilitates digital room allocation, maintenance ticketing, gate pass tracking, and student attendance workflow.',
    category: 'Full-Stack',
    featured: false,
    technologies: ['React', 'JavaScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    githubUrl: 'https://github.com/anguabishek17/HOSTEL-CARE-.git',
    metrics: ['Campus-Wide Deployment', 'Role-Based Access', 'Real-Time Grievance Tracker'],
    architectureHighlights: [
      'Role-based granular access control for wardens, students, and maintenance personnel',
      'Automated digital outpass generation with SMS/notification dispatch'
    ]
  },
  {
    id: 'lora-sensor-network',
    number: '07',
    title: 'LoRa-Based Industrial Sensor Network',
    displayName: 'LoRa-Based Industrial Sensor Network',
    tagline: 'Long-Range RF Telemetry & Embedded Sensing Architecture',
    description: 'An embedded communication and industrial sensing project combining RF communication, LoRa technology, sensors, and communication protocols for long-distance telemetry in challenging manufacturing zones.',
    category: 'Embedded / ECE',
    featured: false,
    technologies: ['C++', 'LoRa RF', 'Embedded C', 'Microcontrollers', 'SPI/I2C Protocols', 'IoT Gateways', 'Sensor Interfacing'],
    metrics: ['Long-Range RF Link', 'Low-Power Node Architecture', 'Noise-Resilient Modulation'],
    architectureHighlights: [
      'Sub-GHz LoRa packetization with cyclic redundancy checks (CRC)',
      'Ultra-low power deep-sleep cycling on edge sensor nodes'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'unominda',
    company: 'UNOMINDA COMPANY LTD',
    division: 'Seating Division — Plant 2',
    position: 'Production Department Intern',
    duration: '1 Month',
    period: '4 June 2026 – 4 July 2026',
    location: 'Hosur, India',
    description: 'Production department internship involving exposure to industrial manufacturing workflows, assembly line cycle times, quality control checkpoints, and development of a digital SOP management platform.',
    keyResponsibilities: [
      'Gained hands-on exposure to high-volume automotive seating production pipelines and manufacturing quality controls.',
      'Conceptualized and engineered UNOMINDA—a modern digital Standard Operating Procedure (SOP) management platform.',
      'Implemented real-time stage-wise compliance verification and interactive assembly instruction execution.'
    ],
    project: {
      name: 'UNOMINDA Digital SOP Platform',
      description: 'A premium digital Standard Operating Procedure management and interactive instruction execution platform featuring a modern glassmorphic interface, real-time analytics, and secure stage-wise compliance verification.',
      liveUrl: 'https://unominda.vercel.app/'
    }
  },
  {
    id: 'titan',
    company: 'TITAN COMPANY LTD',
    division: 'Watches Division',
    position: 'Electronic Case Maintenance Intern',
    duration: '2 Weeks',
    period: 'June 2025',
    location: 'Hosur, India',
    description: 'Industrial internship experience focused on electronic case maintenance and exposure to precision electronics-oriented manufacturing, clean-room standards, and maintenance workflows.',
    keyResponsibilities: [
      'Studied precision micro-mechanical and electronic watch assembly lines and calibration tools.',
      'Analyzed electronic casing integrity testing, hermetic sealing methods, and automated testing rigs.',
      'Observed industrial diagnostics workflows and preventive maintenance protocols for electronic testing instrumentation.'
    ]
  }
];

export const EDUCATION_DATA: EducationInfo = {
  institution: 'V.S.B ENGINEERING COLLEGE, KARUR',
  degree: 'Bachelor of Engineering (B.E.)',
  major: 'Electronics & Communication Engineering',
  year: 'III Year',
  expectedGraduation: '2029',
  cgpa: '8.51',
  academicStatus: 'No Backlogs (100% Clear Standing)',
  location: 'Karur, Tamil Nadu, India',
  coreFocus: [
    'Digital Signal Processing',
    'Embedded Systems & Microcontrollers',
    'VLSI & Electronic Circuit Design',
    'Artificial Intelligence & Deep Learning',
    'Computer Communication Networks',
    'Control Systems & Sensor Interfacing'
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'LANGUAGES',
    description: 'Core programming languages for algorithmic systems and engineering',
    iconName: 'Code2',
    skills: [
      { name: 'Java', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'JavaScript', highlight: false },
      { name: 'TypeScript', highlight: true },
      { name: 'C / C++', highlight: false }
    ]
  },
  {
    title: 'AI / ML & VISION',
    description: 'Neural networks, computer vision, geospatial intelligence & NLP',
    iconName: 'Cpu',
    skills: [
      { name: 'PyTorch', highlight: true },
      { name: 'Computer Vision', highlight: true },
      { name: 'Machine Learning', highlight: true },
      { name: 'YOLO & OpenCV', highlight: true },
      { name: 'U-Net Architecture', highlight: false },
      { name: 'LangChain & RAG', highlight: false },
      { name: 'Gemini AI API', highlight: false }
    ]
  },
  {
    title: 'FRONTEND',
    description: 'Modern, high-performance, and responsive user interfaces',
    iconName: 'Layout',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Next.js', highlight: true },
      { name: 'Vite', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'Framer Motion', highlight: false },
      { name: 'HTML5 / CSS3', highlight: false }
    ]
  },
  {
    title: 'BACKEND & APIS',
    description: 'High-throughput async APIs, microservices, and network protocols',
    iconName: 'Server',
    skills: [
      { name: 'FastAPI', highlight: true },
      { name: 'Node.js', highlight: true },
      { name: 'RESTful Architecture', highlight: false },
      { name: 'WebSockets', highlight: false }
    ]
  },
  {
    title: 'DATABASES & STORAGE',
    description: 'Relational data stores, cloud databases, and vector stores',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'Supabase', highlight: true },
      { name: 'Neon', highlight: true },
      { name: 'ChromaDB (Vector)', highlight: false },
      { name: 'SQLite', highlight: false }
    ]
  },
  {
    title: 'DEV TOOLS & INFRA',
    description: 'Version control, containerization, and modern deployment pipelines',
    iconName: 'Wrench',
    skills: [
      { name: 'Git', highlight: true },
      { name: 'GitHub', highlight: true },
      { name: 'Vercel', highlight: true },
      { name: 'Docker', highlight: true },
      { name: 'Google Colab', highlight: false }
    ]
  },
  {
    title: 'ECE & EMBEDDED',
    description: 'Hardware protocols, telemetry, and microelectronic systems',
    iconName: 'Radio',
    skills: [
      { name: 'LoRa RF Telemetry', highlight: true },
      { name: 'Embedded C', highlight: true },
      { name: 'Microcontrollers (Arduino/ESP32)', highlight: true },
      { name: 'SPI / I2C / UART', highlight: false },
      { name: 'Sensor Interfacing', highlight: false }
    ]
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2024',
    title: 'Joined B.E. Electronics & Communication Engineering',
    type: 'Education',
    subtitle: 'V.S.B Engineering College, Karur',
    description: 'Commenced undergraduate engineering journey with a dual dedication to core electronics fundamentals and cutting-edge software systems.'
  },
  {
    year: '2025',
    month: 'June',
    title: 'Titan Company Ltd Internship',
    type: 'Internship',
    subtitle: 'Watches Division · Electronic Case Maintenance',
    description: 'Hands-on industrial training in high-precision electronic watch casing assembly, hermetic sealing validation, and preventive calibration workflows.'
  },
  {
    year: '2025',
    title: 'SIH Internal Finalist',
    type: 'Hackathon',
    subtitle: 'Smart India Hackathon College Level',
    description: 'Selected as Internal Finalist representing the institution for developing high-impact tech solutions addressing national problem statements.'
  },
  {
    year: '2025',
    title: 'Electronics & Applied Engineering Projects',
    type: 'Project',
    subtitle: 'Embedded Sensing & Image Processing Pipelines',
    description: 'Built foundational embedded communication modules (LoRa) and began deep learning explorations with U-Net image restoration.'
  },
  {
    year: '2026',
    title: 'KPRIET Ignitron 24-Hour Hackathon — Top 50 Teams',
    type: 'Hackathon',
    subtitle: 'National Level Hackathon · JARVIS-AML',
    description: 'Engineered JARVIS-AML under strict 24-hour sprint conditions, placing in the Top 50 teams nationally with a graph-based financial forensics engine.'
  },
  {
    year: '2026',
    month: 'June – July',
    title: 'Unominda Company Ltd Internship',
    type: 'Internship',
    subtitle: 'Seating Division Plant 2 · Production & Digital SOP Platform',
    description: 'Automotive manufacturing internship and authoring of the production-ready UNOMINDA Digital Standard Operating Procedure application.'
  },
  {
    year: '2026',
    title: 'Published Patent on Satellite AI Analysis',
    type: 'Patent',
    subtitle: 'Evidence-Grounded Multi-Temporal & Multi-Sensor Satellite Platform',
    description: 'Authored and published research patent covering natural-language multimodal interaction with optical and SAR satellite imagery.'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'patent-satellite',
    title: 'PATENT PUBLISHED',
    category: 'Intellectual Property / Research',
    organization: 'Published Patent',
    year: '2026',
    summary: 'An Intelligent Natural-Language Platform for Evidence-Grounded Multi-Temporal and Multi-Sensor Satellite Image Analysis',
    details: 'Groundbreaking framework enabling conversational discovery across multi-sensor SAR and optical satellite layers with spatial reasoning and verification.',
    isPatent: true,
    featured: true
  },
  {
    id: 'kpriet-ignitron',
    title: 'KPRIET IGNITRON 2026 FINALIST',
    category: 'National 24-Hour Hackathon',
    organization: 'KPRIET',
    year: '2026',
    summary: 'Ranked in Top 50 Teams Nationally for JARVIS-AML',
    details: 'Competed among hundreds of engineering teams building an end-to-end graph AML crime analysis engine with behavioral DNA fingerprints in 24 hours.',
    featured: true
  },
  {
    id: 'sih-finalist',
    title: 'SIH INTERNAL FINALIST',
    category: 'National Innovation Hackathon',
    organization: 'Smart India Hackathon',
    year: '2025',
    summary: 'Institutional Selection for National Representation',
    details: 'Qualified through rigorous internal evaluations pitching AI-driven engineering architectures for complex systemic problems.',
    featured: true
  }
];

export const PATENT_DETAILS = {
  title: 'An Intelligent Natural-Language Platform for Evidence-Grounded Multi-Temporal and Multi-Sensor Satellite Image Analysis',
  status: 'PUBLISHED PATENT',
  field: 'Artificial Intelligence · Satellite Remote Sensing · Geospatial Multi-Temporal Analysis',
  description: 'Research work focused on evidence-grounded natural-language interaction with multi-temporal and multi-sensor satellite imagery. The system bridges complex SAR and optical geospatial data with conversational reasoning engines, automating building footprint changes, water body shifts, and damage assessment with strict evidence grounding.',
  highlights: [
    'Multi-Sensor Data Fusion: Harmonizes Synthetic Aperture Radar (SAR) and high-resolution optical imagery.',
    'Bi-Temporal Change Detection: Identifies urban expansion, hydrological evolution, and vegetation changes over time.',
    'Evidence Grounding Engine: Guarantees that conversational answers reference specific spatial masks and confidence scores.',
    'Dynamic Query Decomposition: Automatically translates complex user questions into sequential raster and vector operations.'
  ],
  coordinates: '12.7409° N, 77.8253° E'
};
