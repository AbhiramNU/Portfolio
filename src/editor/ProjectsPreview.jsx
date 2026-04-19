import React from 'react';

export default function ProjectsPreview() {
  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto text-[#d4d4d4] font-mono p-10 custom-scrollbar">
      <div className="max-w-5xl mx-auto pl-4 pb-12">
        
        {/* Comment Header */}
        <p className="text-[#6a9955] mb-6 text-[13px] tracking-wide mt-2">
          // projects.js : things I've built & shipped
        </p>

        <h1 className="text-[54px] leading-tight font-black tracking-tighter text-white drop-shadow-md mb-2" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
          Projects
        </h1>
        <p className="text-[#858585] text-[13px] tracking-wide mb-10">
          const projects = [ ...shipped, ...building ]
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          
          {/* Project 1: VoltStrata */}
          <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-7 hover:border-[#ff5500] transition-colors group">
            <div className="w-8 h-1 rounded-full bg-[#ff5500] mb-5"></div>
            
            <div className="flex justify-between items-start mb-3">
              <div className="text-[#ff5500] text-[10px] font-bold tracking-widest uppercase">
                AI / ML <span className="text-[#858585] px-1">·</span> BACKEND <span className="text-[#858585] px-1">·</span> DATA SCIENCE
              </div>
              <div className="flex gap-2">
                <span className="border border-[#3c3c3c] bg-[#1e1e1e] text-[#858585] hover:text-white cursor-pointer px-2 py-0.5 rounded text-[10px] transition-colors">GitHub ↗</span>
                <span className="border border-[#3c3c3c] bg-[#1e1e1e] text-[#858585] hover:text-white cursor-pointer px-2 py-0.5 rounded text-[10px] transition-colors">Live ↗</span>
              </div>
            </div>
            
            <h2 className="text-white text-2xl font-black mb-3 tracking-tight" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
              VoltStrata Energy Intel
            </h2>
            
            <p className="text-[#858585] text-[12px] leading-relaxed mb-6 h-16 font-sans">
              Deployed a robust machine learning platform for energy intelligence. Automated binary classification parameters and integrated absolute path resolution for reliable cloud deployment logic.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="border border-[#3c3c3c] text-[#858585] px-2 py-1 rounded text-[10px]">Python</span>
              <span className="border border-[#3c3c3c] text-[#858585] px-2 py-1 rounded text-[10px]">Machine Learning</span>
              <span className="border border-[#3c3c3c] text-[#858585] px-2 py-1 rounded text-[10px]">Scikit-Learn</span>
            </div>
          </div>

          {/* Project 2: SentriCam */}
          <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-7 hover:border-[#4ec9b0] transition-colors group">
            <div className="w-8 h-1 rounded-full bg-[#4ec9b0] mb-5"></div>
            
            <div className="flex justify-between items-start mb-3">
              <div className="text-[#4ec9b0] text-[10px] font-bold tracking-widest uppercase">
                FULL STACK <span className="text-[#858585] px-1">·</span> SECURITY <span className="text-[#858585] px-1">·</span> VISION
              </div>
              <div className="flex gap-2">
                <span className="border border-[#3c3c3c] bg-[#1e1e1e] text-[#858585] hover:text-white cursor-pointer px-2 py-0.5 rounded text-[10px] transition-colors">GitHub ↗</span>
                <span className="border border-[#3c3c3c] bg-[#1e1e1e] text-[#858585] hover:text-white cursor-pointer px-2 py-0.5 rounded text-[10px] transition-colors">Live ↗</span>
              </div>
            </div>
            
            <h2 className="text-white text-2xl font-black mb-3 tracking-tight" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
              SentriCam Dashboard
            </h2>
            
            <p className="text-[#858585] text-[12px] leading-relaxed mb-6 h-16 font-sans">
              Headless FastAPI backend streaming live video to a Next.js frontend dashboard. Features browser-based face enrollment and real-time event logging via Prisma SQLite.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="border border-[#3c3c3c] text-[#858585] px-2 py-1 rounded text-[10px]">FastAPI</span>
              <span className="border border-[#3c3c3c] text-[#858585] px-2 py-1 rounded text-[10px]">Next.js</span>
              <span className="border border-[#3c3c3c] text-[#858585] px-2 py-1 rounded text-[10px]">Prisma</span>
              <span className="border border-[#3c3c3c] text-[#858585] px-2 py-1 rounded text-[10px]">SQLite</span>
            </div>
          </div>

          {/* Project 3: Parixa */}
          <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-7 hover:border-[#c586c0] transition-colors group">
            <div className="w-8 h-1 rounded-full bg-[#c586c0] mb-5"></div>
            
            <div className="flex justify-between items-start mb-3">
              <div className="text-[#c586c0] text-[10px] font-bold tracking-widest uppercase">
                FULL STACK <span className="text-[#858585] px-1">·</span> DEVOPS <span className="text-[#858585] px-1">·</span> SERVERLESS
              </div>
              <div className="flex gap-2">
                <span className="border border-[#3c3c3c] bg-[#1e1e1e] text-[#858585] hover:text-white cursor-pointer px-2 py-0.5 rounded text-[10px] transition-colors">GitHub ↗</span>
                <span className="border border-[#3c3c3c] bg-[#1e1e1e] text-[#858585] hover:text-white cursor-pointer px-2 py-0.5 rounded text-[10px] transition-colors">Live ↗</span>
              </div>
            </div>
            
            <h2 className="text-white text-2xl font-black mb-3 tracking-tight" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
              Parixa Platform
            </h2>
            
            <p className="text-[#858585] text-[12px] leading-relaxed mb-6 h-16 font-sans">
              End-to-end full stack architecture deployed using Vercel serverless functions. Optimized for ultra-low latency and scalable database operations.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="border border-[#3c3c3c] text-[#858585] px-2 py-1 rounded text-[10px]">React</span>
              <span className="border border-[#3c3c3c] text-[#858585] px-2 py-1 rounded text-[10px]">Vercel</span>
              <span className="border border-[#3c3c3c] text-[#858585] px-2 py-1 rounded text-[10px]">Node.js</span>
            </div>
          </div>

          {/* Project 4: PaperSmith */}
          <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-7 hover:border-[#007acc] transition-colors group">
            <div className="w-8 h-1 rounded-full bg-[#007acc] mb-5"></div>
            
            <div className="flex justify-between items-start mb-3">
              <div className="text-[#007acc] text-[10px] font-bold tracking-widest uppercase">
                TOOLING <span className="text-[#858585] px-1">·</span> GENERATIVE AI <span className="text-[#858585] px-1">·</span> BACKEND
              </div>
              <div className="flex gap-2">
                <span className="border border-[#3c3c3c] bg-[#1e1e1e] text-[#858585] hover:text-white cursor-pointer px-2 py-0.5 rounded text-[10px] transition-colors">GitHub ↗</span>
              </div>
            </div>
            
            <h2 className="text-white text-2xl font-black mb-3 tracking-tight" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
              PaperSmith Templates
            </h2>
            
            <p className="text-[#858585] text-[12px] leading-relaxed mb-6 h-16 font-sans">
              An in-place template editor feature allowing the robust generation of dynamic structures. Empowered by a seamless AI-driven structural framework.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="border border-[#3c3c3c] text-[#858585] px-2 py-1 rounded text-[10px]">Generative AI</span>
              <span className="border border-[#3c3c3c] text-[#858585] px-2 py-1 rounded text-[10px]">Templating</span>
              <span className="border border-[#3c3c3c] text-[#858585] px-2 py-1 rounded text-[10px]">Python</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
