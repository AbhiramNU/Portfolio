import React, { useState } from 'react';
import { ExternalLink, Github, Users, X, Info, ChevronRight } from 'lucide-react';

export const projectsList = [
  {
    id: 'sahasranshu',
    title: 'Sahasranshu Technologies Corporate Website',
    category: 'FULL-STACK · DEFENCE TECH · ENTERPRISE',
    color: '#ff5500',
    problem: 'Defence & critical-infrastructure platforms require a sovereign, high-assurance web presence showcasing real-time data fusion.',
    solution: 'Developed and deployed the corporate website for Sahasranshu Technologies during internship, showcasing defense intelligence, geospatial analytics, and AI threat analysis.',
    keyFeatures: [
      'Component-driven React 18 & TypeScript frontend with static type safety & TanStack Router',
      'Showcases multi-source data fusion, real-time event processing, geospatial analytics, and sovereign deployments',
      'Optimized production bundle and continuous deployment pipeline on Vercel'
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Router', 'Vercel'],
    team: [
      { name: 'Siddarth Pai M (Founder)', linkedin: 'https://www.linkedin.com/in/siddarthpaim/' }
    ],
    github: 'https://github.com/AbhiramNU/Sahasranshu-Website',
    live: 'https://www.sahasranshu.com/'
  },
  {
    id: 'parixa',
    title: 'Parixa - AI-Powered Secure Assessment Platform',
    category: 'FULL-STACK · GENERATIVE AI · SECURITY',
    color: '#007acc',
    problem: 'Hosting online academic assessments securely requires automated anti-cheat mechanisms, real-time AI webcam proctoring, and reliable infrastructure.',
    solution: 'Next-generation AI-proctored online examination platform built for IWP coursework at NMAMIT, ensuring exam integrity via automated question shuffling & mandatory fullscreen proctoring.',
    keyFeatures: [
      'High-performance Express / Node.js REST API with MongoDB for authentication & automated question-set shuffling',
      'Serverless architecture on Vercel with custom DB initialization middleware resolving cold-start race conditions',
      'Strict browser security activation rules for mandatory fullscreen mode & real-time AI webcam monitoring feeds'
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Vercel', 'REST API', 'Web Security', 'AI Proctoring'],
    team: [
      { name: 'Adarsh Bhat', linkedin: 'https://www.linkedin.com/in/adarshbhat17/' },
      { name: 'Amar S Acharya', linkedin: 'https://www.linkedin.com/in/amar-s-acharya-6318aa278/' }
    ],
    github: 'https://github.com/ParixaEdutech/Parixa',
    live: 'https://parixa-xi.vercel.app'
  },
  {
    id: 'voltstrata',
    title: 'VoltStrata: AI-Driven Smart Grid Energy Intelligence Platform',
    category: 'AI / ML · SMART GRID · FULL-STACK',
    color: '#ff9900',
    problem: 'Smart grids require peak-load mitigation without installing intrusive hardware sensors across households.',
    solution: 'End-to-end predictive energy platform forecasting household electricity consumption and classifying demand levels in real-time, built as academic ML coursework at NMAMIT.',
    keyFeatures: [
      'Ensemble modeling pipeline (Random Forest Regressor & Classifier) trained on 2M+ UCI Household Power Consumption data points',
      'Autoregressive feature engineering with circular temporal encoding (sine/cosine for seasonality) & recursive Lag-1 demand features',
      '71.2% classification accuracy for real-time peak demand warning systems & 57% R² variance mapping score',
      'Decoupled microservice architecture: Python FastAPI engine (Render) + interactive React & Astro simulator (Vercel)'
    ],
    tech: ['Python', 'FastAPI', 'Scikit-Learn', 'Random Forest', 'React', 'Astro', 'Render', 'Vercel', 'Machine Learning'],
    team: [
      { name: 'Akash', linkedin: null }
    ],
    github: 'https://github.com/AbhiramNU/VoltStrata',
    live: 'https://volt-strata.vercel.app/'
  },
  {
    id: 'sentricam',
    title: 'SentriCam – AI-Powered Real-Time Biometric Surveillance System',
    category: 'COMPUTER VISION · AI / ML · SECURITY',
    color: '#4ec9b0',
    problem: 'Cloud-based facial recognition introduces 200-500ms latency, high recurring costs, and severe biometric data privacy risks.',
    solution: 'Production-grade, 100% on-device biometric surveillance platform performing real-time face detection, FaceNet recognition, and tracking at 30fps with zero cloud dependencies.',
    keyFeatures: [
      'Multi-threaded architecture: Decoupled camera capture (30fps Haar cascades), AI inference (FaceNet), and MJPEG streaming',
      'Google FaceNet (128D embeddings) via DeepFace with Cosine Similarity matching & multi-shot enrollment',
      'EMA-Smoothed Tracking & 15-frame TTL persistence buffer eliminating bounding box jitter',
      'Flask REST API & SQLite (WAL mode) dark-glass web dashboard with live color-coded reticles'
    ],
    tech: ['Python', 'TensorFlow', 'OpenCV 4.x', 'DeepFace (FaceNet)', 'Flask', 'SQLite', 'MJPEG'],
    team: [
      { name: 'Sumukh Bhat', linkedin: 'https://www.linkedin.com/in/sumukh-bhat-7801732a2/' },
      { name: 'Akash C', linkedin: null }
    ],
    github: 'https://github.com/AbhiramNU/SentriCam',
    live: null
  },
  {
    id: 'convolens',
    title: 'ConvoLens – AI‑Powered WhatsApp Chat Analyzer',
    category: 'FULL-STACK · GENERATIVE AI · SERVERLESS',
    color: '#c586c0',
    problem: 'Manual scrolling through thousands of WhatsApp messages to track decisions, owners, tasks, and deadlines is tedious and inefficient.',
    solution: 'A privacy-first web app that turns WhatsApp .txt exports into clean, structured briefs extracting Tasks, Deadlines, Decisions, and Owners using Google Gemini 1.5 Flash in seconds.',
    keyFeatures: [
      'Regex-based WhatsApp chat parser with timestamp, sender, and date-range filtering',
      'Google Gemini 1.5 Flash integration returning structured JSON snapshots',
      'Supabase Edge Functions (Deno) serverless backend for secure AI execution',
      'React 18, TypeScript, Tailwind CSS with HSL palette, glassmorphism UI, & Shadcn UI'
    ],
    tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase Edge Functions', 'Gemini 1.5 Flash', 'Regex', 'Vercel'],
    team: [],
    github: 'https://github.com/AbhiramNU/ConvoLens',
    live: 'https://convolensapp.vercel.app/'
  },
  {
    id: 'colorcraft',
    title: 'ColorCraft: Efficient Image Colorization Web App',
    category: 'FULL-STACK · DEEP LEARNING · COMPUTER VISION',
    color: '#4ec9b0',
    problem: 'Black-and-white photos lack realistic color depth, requiring intensive manual restoration or slow server-heavy processing.',
    solution: 'Full-stack web application enabling users to instantly transform black-and-white photos into vivid, realistic colorized images using a deep learning model integrated with OpenCV DNN and microservices.',
    keyFeatures: [
      'Neural network-driven image colorization via Flask & OpenCV DNN',
      'React frontend with drag-and-drop uploads, real-time visual comparison slider, and high-res downloads',
      'Spring Boot backend microservices with REST API integration and MySQL persistence'
    ],
    tech: ['React.js', 'Spring Boot', 'Python (Flask)', 'OpenCV DNN', 'MySQL', 'REST API', 'Deep Learning'],
    team: [],
    github: 'https://github.com/AbhiramNU/ColorCraft',
    live: null
  },
  {
    id: 'gitair',
    title: 'GitAIR 🎸 - Vision-Based Guitar Chord Recognition',
    category: 'COMPUTER VISION · MACHINE LEARNING · AR',
    color: '#ff5500',
    problem: 'Beginners struggle to learn guitar chords without instant feedback on finger placement. Traditional methods lack real-time visual guidance.',
    solution: 'Built a webcam-based system that recognizes guitar chords by analyzing hand landmarks in real-time. Users play "air guitar" and get instant chord feedback overlaid on their video feed.',
    keyFeatures: [
      'MediaPipe-powered hand landmark extraction (63D feature vectors)',
      'KNN classifier trained on chord-specific hand poses',
      'Live AR fretboard overlay for visual guidance (25+ FPS real-time feedback)'
    ],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'scikit-learn (KNN)', 'pygame', 'Machine Learning'],
    team: [
      { name: 'Anujith S Nayak', linkedin: 'https://www.linkedin.com/in/anujith-s-nayak-81b28528b/' }
    ],
    github: 'https://github.com/AbhiramNU/GitAIR',
    live: null
  }
];

export default function ProjectsPreview() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto text-[#d4d4d4] font-mono p-6 sm:p-10 custom-scrollbar relative">
      <div className="max-w-6xl mx-auto pb-12">
        
        {/* Header */}
        <div className="mb-8">
          <p className="text-[#6a9955] text-[13px] tracking-wide mb-1">
            // projects.js : things I've built & shipped
          </p>
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white drop-shadow-md" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
              Projects
            </h1>
            <span className="text-[#858585] text-xs font-mono">
              const projects = [ {projectsList.length} items ]
            </span>
          </div>
          <p className="text-[#858585] text-xs mt-1">
            Click any project card to view technical deep-dive, architecture details, & live links.
          </p>
        </div>

        {/* Compact Projects Grid (Fits smoothly on 1 screen) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsList.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="bg-[#252526] border border-[#3c3c3c] rounded-xl p-5 hover:border-[#007acc] transition-all cursor-pointer group flex flex-col justify-between hover:shadow-xl hover:-translate-y-0.5"
            >
              <div>
                {/* Header Tag & Quick Links */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: project.color || '#007acc' }}></div>
                    <span className="text-[10px] font-bold tracking-wider uppercase truncate" style={{ color: project.color || '#007acc' }}>
                      {project.category.split('·')[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#858585] hover:text-white p-1 rounded transition-colors"
                        title="GitHub Repo"
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#4fc1ff] hover:text-white p-1 rounded transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-bold mb-2 tracking-tight group-hover:text-[#4fc1ff] transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Brief Summary */}
                <p className="text-[#858585] text-xs font-sans mb-4 line-clamp-2 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t, idx) => (
                    <span key={idx} className="border border-[#3c3c3c] bg-[#1e1e1e] text-[#a0a0a0] px-2 py-0.5 rounded text-[10px] font-mono">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="border border-[#3c3c3c] bg-[#1e1e1e] text-[#858585] px-1.5 py-0.5 rounded text-[10px]">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-[#333] flex items-center justify-between text-xs text-[#858585] group-hover:text-[#cccccc] transition-colors">
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Info size={12} className="text-[#007acc]" />
                    View Details
                  </span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal / Inspector Drawer for Deep Dive Details */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[9990] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#252526] border border-[#3c3c3c] w-full max-w-2xl max-h-[85vh] rounded-2xl p-6 sm:p-8 overflow-y-auto custom-scrollbar shadow-2xl relative text-[#d4d4d4]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[#333] pb-4 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedProject.color || '#007acc' }}></div>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: selectedProject.color || '#007acc' }}>
                    {selectedProject.category}
                  </span>
                </div>
                <h2 className="text-white text-2xl font-black tracking-tight" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
                  {selectedProject.title}
                </h2>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-[#858585] hover:text-white p-1 rounded-lg bg-[#1e1e1e] border border-[#333] transition-colors shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-[#3c3c3c] bg-[#1e1e1e] text-white hover:border-[#ff5500] px-4 py-2 rounded-lg text-xs font-mono transition-colors"
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              )}

              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-[#007acc] bg-[#007acc]/20 text-[#4fc1ff] hover:bg-[#007acc]/40 px-4 py-2 rounded-lg text-xs font-mono transition-colors"
                >
                  <span>Launch Live Application</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>

            {/* Problem & Solution */}
            <div className="space-y-4 font-sans text-sm leading-relaxed mb-6 bg-[#1e1e1e] p-5 rounded-xl border border-[#333]">
              <div>
                <strong className="text-white font-mono text-xs uppercase tracking-wider block mb-1 text-[#e5c07b]">// Problem Statement</strong>
                <p className="text-[#cccccc]">{selectedProject.problem}</p>
              </div>
              <div className="pt-3 border-t border-[#2b2b2b]">
                <strong className="text-white font-mono text-xs uppercase tracking-wider block mb-1 text-[#4ec9b0]">// Architecture & Solution</strong>
                <p className="text-[#cccccc]">{selectedProject.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs uppercase font-mono tracking-wider text-[#858585] mb-3 font-bold">// Key Technical Highlights</h4>
                <ul className="space-y-2 font-sans text-xs text-[#b0b0b0]">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-[#1e1e1e]/60 p-2.5 rounded-lg border border-[#2d2d2d]">
                      <span className="text-[#007acc] font-bold">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-[#858585] mb-3 font-bold">// Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="border border-[#3c3c3c] bg-[#1e1e1e] text-[#4ec9b0] px-3 py-1 rounded-md text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Team Members */}
            {selectedProject.team && selectedProject.team.length > 0 && (
              <div className="pt-4 border-t border-[#333] flex items-center gap-2 text-xs font-sans text-[#858585]">
                <Users size={15} className="text-[#858585]" />
                <span className="font-mono">// Collaborators:</span>
                {selectedProject.team.map((member, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="text-[#666]">,</span>}
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#4ec9b0] hover:underline font-medium inline-flex items-center gap-1"
                      >
                        {member.name}
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <span className="text-[#cccccc] font-medium">
                        {member.name}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
