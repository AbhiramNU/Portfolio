export const initialFiles = [
  {
    name: 'home.tsx',
    type: 'tsx',
    content: `import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col">
      <h1>Welcome to My Portfolio</h1>
      <p>Building high-performance applications.</p>
    </div>
  );
};

export default Home;`
  },
  {
    name: 'about.html',
    type: 'html',
    content: `<!DOCTYPE html>
<html>
<head>
  <title>About Me</title>
</head>
<body>
  <main class="about-section">
    <h1>About Abhiram</h1>
    <p>Junior Software Developer from India.</p>
  </main>
</body>
</html>`
  },
  {
    name: 'projects.js',
    type: 'javascript',
    content: `export const projects = [
  {
    title: "Sahasranshu Technologies Corporate Website",
    category: "FULL-STACK · DEFENCE TECH · ENTERPRISE",
    problem: "Defence & critical-infrastructure platforms require a sovereign web presence showcasing real-time data fusion.",
    solution: "Developed & deployed corporate site during internship, showcasing defense intelligence, geospatial analytics, & AI threat analysis.",
    keyFeatures: [
      "Component-driven React 18 & TypeScript frontend with TanStack Router",
      "Multi-source data fusion, real-time event processing, & sovereign deployment features",
      "Optimized production bundle & Vercel deployment pipeline"
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Router", "Vercel"],
    team: [
      { name: "Siddarth Pai M (Founder)", linkedin: "https://www.linkedin.com/in/siddarthpaim/" }
    ],
    github: "https://github.com/AbhiramNU/Sahasranshu-Website",
    live: "https://www.sahasranshu.com/"
  },
  {
    title: "Parixa - AI-Powered Secure Assessment Platform",
    category: "FULL-STACK · GENERATIVE AI · SECURITY",
    problem: "Hosting online academic assessments securely requires automated anti-cheat mechanisms & reliable infrastructure.",
    solution: "AI-proctored online examination platform ensuring exam integrity via automated question shuffling & mandatory fullscreen proctoring.",
    keyFeatures: [
      "Express/Node.js REST API with MongoDB for secure auth & question set shuffling",
      "Vercel serverless deployment with custom DB initialization middleware for cold-start race conditions",
      "Browser security activation rules for mandatory fullscreen mode & real-time AI webcam proctoring"
    ],
    tech: ["Node.js", "Express", "MongoDB", "React", "Vercel", "REST API", "Web Security"],
    team: [
      { name: "Adarsh Bhat", linkedin: "https://www.linkedin.com/in/adarshbhat17/" },
      { name: "Amar S Acharya", linkedin: "https://www.linkedin.com/in/amar-s-acharya-6318aa278/" }
    ],
    github: "https://github.com/ParixaEdutech/Parixa",
    live: "https://parixa-xi.vercel.app"
  },
  {
    title: "VoltStrata: AI-Driven Smart Grid Energy Intelligence Platform",
    category: "AI / ML · SMART GRID · FULL-STACK",
    problem: "Smart grids require peak-load mitigation without installing intrusive hardware sensors.",
    solution: "Predictive energy platform forecasting household power consumption & classifying demand levels in real-time.",
    keyFeatures: [
      "Ensemble modeling pipeline (Random Forest Regressor & Classifier) on 2M+ UCI data points",
      "Circular temporal encoding (seasonality) & recursive Lag-1 demand features",
      "71.2% classification accuracy for peak warning & 57% R² variance mapping score",
      "Decoupled architecture: Python FastAPI engine (Render) + React/Astro simulator (Vercel)"
    ],
    tech: ["Python", "FastAPI", "Scikit-Learn", "Random Forest", "React", "Astro", "Render", "Vercel"],
    team: [
      { name: "Akash", linkedin: null }
    ],
    github: "https://github.com/AbhiramNU/VoltStrata",
    live: "https://volt-strata.vercel.app/"
  },
  {
    title: "SentriCam – AI-Powered Real-Time Biometric Surveillance System",
    category: "COMPUTER VISION · AI / ML · SECURITY",
    problem: "Cloud facial recognition introduces 200-500ms API latency and severe biometric privacy risks.",
    solution: "100% on-device biometric surveillance platform performing face detection, FaceNet recognition, and tracking at 30fps.",
    keyFeatures: [
      "Multi-threaded capture (30fps Haar), FaceNet inference, and MJPEG streaming",
      "Google FaceNet (128D embeddings) via DeepFace with Cosine Similarity matching",
      "EMA-Smoothed Tracking & 15-frame TTL persistence buffer",
      "Flask REST API & SQLite dark-glass web dashboard"
    ],
    tech: ["Python", "TensorFlow", "OpenCV 4.x", "DeepFace (FaceNet)", "Flask", "SQLite", "MJPEG"],
    team: [
      { name: "Sumukh Bhat", linkedin: "https://www.linkedin.com/in/sumukh-bhat-7801732a2/" },
      { name: "Akash C", linkedin: null }
    ],
    github: "https://github.com/AbhiramNU/SentriCam",
    live: null
  },
  {
    title: "ConvoLens – AI‑Powered WhatsApp Chat Analyzer",
    category: "FULL-STACK · GENERATIVE AI · SERVERLESS",
    problem: "Manual scrolling through WhatsApp messages to track decisions, owners, tasks, and deadlines is tedious.",
    solution: "Privacy-first web app that turns WhatsApp .txt exports into structured JSON briefs extracting tasks & deadlines using Gemini 1.5 Flash.",
    keyFeatures: [
      "Regex-based WhatsApp chat parser with timestamp, sender, and date-range filtering",
      "Google Gemini 1.5 Flash integration returning structured JSON snapshots",
      "Supabase Edge Functions (Deno) serverless backend for secure AI execution"
    ],
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Supabase Edge Functions", "Gemini 1.5 Flash", "Regex", "Vercel"],
    team: [],
    github: "https://github.com/AbhiramNU/ConvoLens",
    live: "https://convolensapp.vercel.app/"
  },
  {
    title: "ColorCraft: Efficient Image Colorization Web App",
    category: "FULL-STACK · DEEP LEARNING · COMPUTER VISION",
    problem: "Black-and-white photos lack realistic color depth, requiring manual restoration or slow server processing.",
    solution: "Full-stack web app transforming black-and-white photos into vivid colorized images using OpenCV DNN.",
    keyFeatures: [
      "Neural network-driven image colorization via Flask & OpenCV DNN",
      "React frontend with drag-and-drop & before/after visual comparison slider",
      "Spring Boot microservice & MySQL data persistence"
    ],
    tech: ["React.js", "Spring Boot", "Python (Flask)", "OpenCV DNN", "MySQL", "REST API"],
    team: [],
    github: "https://github.com/AbhiramNU/ColorCraft",
    live: null
  },
  {
    title: "GitAIR 🎸 - Vision-Based Guitar Chord Recognition",
    category: "COMPUTER VISION · MACHINE LEARNING · AR",
    problem: "Beginners struggle to learn guitar chords without instant feedback on finger placement.",
    solution: "Webcam-based system that recognizes guitar chords by analyzing hand landmarks in real-time.",
    keyFeatures: [
      "MediaPipe-powered 63D hand landmark feature extraction",
      "KNN classifier trained on chord-specific hand poses",
      "Live AR fretboard overlay (25+ FPS real-time feedback)"
    ],
    tech: ["Python", "OpenCV", "MediaPipe", "scikit-learn (KNN)", "pygame"],
    team: [
      { name: "Anujith S Nayak", linkedin: "https://www.linkedin.com/in/anujith-s-nayak-81b28528b/" }
    ],
    github: "https://github.com/AbhiramNU/GitAIR",
    live: null
  }
];`
  },
  {
    name: 'skills.json',
    type: 'json',
    content: `{
  "languages": ["Python", "TypeScript"],
  "frameworks": ["FastAPI", "React", "Next.js"],
  "ai_ml": ["LangChain", "PyTorch"]
}`
  },
  {
    name: 'certifications.ipynb',
    type: 'ipynb',
    content: `// Placeholder`
  },
  {
    name: 'leadership.sql',
    type: 'sql',
    content: `// Placeholder`
  },
  {
    name: 'experience.ts',
    type: 'typescript',
    content: `export const experiences = [
  {
    company: "Sahasranshu Technologies",
    role: "Software Development Intern",
    duration: "June 2026 – Present",
    description: "Working on enterprise-grade backend applications using Java, Spring Boot, and PostgreSQL."
  },
  {
    company: "Akash Shipping Agency",
    role: "Full Stack Developer",
    duration: "January 2026 – March 2026",
    description: "Designed and developed corporate site and custom internal vessel operations tracking system."
  }
];`
  },
  {
    name: 'contact.css',
    type: 'css',
    content: `.contact-card {
  display: flex;
  background: #1e1e1e;
  border-radius: 8px;
  padding: 20px;
}
.btn-primary {
  color: #007acc;
}`
  },
  {
    name: 'README.md',
    type: 'markdown',
    content: `# Abhiram's Portfolio

Welcome to my interactive developer portfolio.`
  },
  {
    name: 'Abhiram_N_Udupa_Resume.pdf',
    type: 'pdf',
    content: `// Placeholder for PDF`
  },
  {
    name: '404_ERROR.log',
    type: 'log',
    content: `// Dynamic 404 Stack Trace`
  }
];
