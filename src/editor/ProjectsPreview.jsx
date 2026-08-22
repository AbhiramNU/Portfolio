import React from 'react';
import { ExternalLink, Github, Users } from 'lucide-react';

export const projectsList = [
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
    live: null // No live link -> hide live button
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
  }
];

export default function ProjectsPreview() {
  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto text-[#d4d4d4] font-mono p-6 sm:p-10 custom-scrollbar">
      <div className="max-w-5xl mx-auto pb-12">
        
        {/* Comment Header */}
        <p className="text-[#6a9955] mb-4 text-[13px] tracking-wide mt-2">
          // projects.js : things I've built & shipped
        </p>

        <h1 className="text-4xl sm:text-[54px] leading-tight font-black tracking-tighter text-white drop-shadow-md mb-2" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
          Projects
        </h1>
        <p className="text-[#858585] text-[13px] tracking-wide mb-8">
          const projects = [ ...shipped, ...building ]
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projectsList.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#252526] border border-[#3c3c3c] rounded-xl p-6 sm:p-8 transition-all hover:border-[#ff5500]/70 group shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Header Strip & Links */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.color || '#007acc' }}></div>
                    <span className="text-[11px] font-bold tracking-wider uppercase" style={{ color: project.color || '#007acc' }}>
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 border border-[#3c3c3c] bg-[#1e1e1e] text-[#cccccc] hover:text-white hover:border-[#ff5500] px-3 py-1 rounded-md text-xs transition-colors"
                      >
                        <Github size={13} />
                        <span>GitHub</span>
                        <ExternalLink size={11} className="opacity-60" />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 border border-[#3c3c3c] bg-[#007acc]/20 text-[#4fc1ff] hover:bg-[#007acc]/40 px-3 py-1 rounded-md text-xs transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-white text-2xl sm:text-3xl font-black mb-4 tracking-tight" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
                  {project.title}
                </h2>

                {/* Description / Problem & Solution */}
                <div className="text-[#cccccc] text-sm leading-relaxed mb-5 font-sans space-y-2">
                  <p><strong className="text-white">Problem:</strong> {project.problem}</p>
                  <p><strong className="text-white">Solution:</strong> {project.solution}</p>
                </div>

                {/* Key Features */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="mb-6 bg-[#1e1e1e] p-4 rounded-lg border border-[#333]">
                    <p className="text-xs uppercase tracking-wider text-[#858585] font-mono mb-2 font-bold">// Key Highlights</p>
                    <ul className="list-disc list-inside text-xs text-[#b0b0b0] font-sans space-y-1">
                      {project.keyFeatures.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer: Tech Stack & Team Partner */}
              <div className="pt-4 border-t border-[#333] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="border border-[#3c3c3c] bg-[#1e1e1e] text-[#a0a0a0] px-2.5 py-1 rounded-md text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {project.team && project.team.length > 0 && (
                  <div className="flex items-center gap-1.5 text-xs font-sans text-[#858585]">
                    <Users size={14} className="text-[#858585]" />
                    <span>Partner:</span>
                    {project.team.map((member, idx) => (
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
                            <ExternalLink size={10} />
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
          ))}
        </div>

      </div>
    </div>
  );
}
