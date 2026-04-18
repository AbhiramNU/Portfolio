import React from 'react';
import { Terminal, User, Mail, Github, Linkedin, Monitor, Database, Infinity, ArrowUp, Briefcase, Link as LinkIcon, Instagram, Youtube } from 'lucide-react';

export default function HomePreview() {
  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto text-[#d4d4d4] font-mono p-10 custom-scrollbar">
      <div className="max-w-4xl mx-auto pl-4">
        <p className="text-[#6a9955] mb-8 mt-4 text-[13px] tracking-wide">
          <span className="opacity-50 mr-2">1</span> // hello world !! Welcome to my portfolio
        </p>
        
        <h1 className="text-[76px] leading-[0.9] font-black tracking-tighter" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
          <div className="text-white drop-shadow-md">Abhiram</div>
          <div className="text-[#e237a6] drop-shadow-md">Portfolio</div>
        </h1>

        <div className="flex flex-wrap gap-[6px] mt-10 mb-8 text-[11px] font-sans font-medium w-max max-w-full">
          <span className="flex items-center px-4 py-1.5 bg-[#1e1e1e] border border-[#3c3c3c] rounded text-[#cccccc]">
             <div className="w-[6px] h-[6px] rounded-full bg-[#4ec9b0] mr-2"></div> Backend Engineer
          </span>
          <span className="flex items-center px-4 py-1.5 bg-[#1e1e1e] border border-[#3c3c3c] rounded text-[#cccccc]">
             <div className="w-[6px] h-[6px] rounded-full bg-[#c586c0] mr-2"></div> AI / ML Dev
          </span>
          <span className="flex items-center px-4 py-1.5 bg-[#1e1e1e] border border-[#3c3c3c] rounded text-[#cccccc]">
             <div className="w-[6px] h-[6px] rounded-full bg-[#007acc] mr-2"></div> Data Scientist
          </span>
          <span className="flex items-center px-4 py-1.5 bg-[#1e1e1e] border border-[#3c3c3c] rounded text-[#c586c0]">
             <div className="w-[6px] h-[6px] rounded-full bg-[#c586c0] mr-2"></div> @ EduVanceAI
          </span>
        </div>

        <p className="text-[#cccccc] mb-8 font-sans text-sm">Turning data into decisions 🧠</p>

        <p className="text-[#858585] mb-12 font-mono text-[13px] leading-7 max-w-[650px]">
          I live at the crossroads of <span className="text-[#4ec9b0] font-semibold">backend engineering</span>, <span className="text-[#4ec9b0] font-semibold">AI/ML</span>, and <span className="text-[#4ec9b0] font-semibold">data science</span>. I build systems that are genuinely <span className="text-[#4ec9b0] font-semibold">intelligent and scalable</span>.
        </p>

        <div className="flex gap-4 mb-16 font-sans">
           <button className="flex items-center px-5 py-2.5 bg-[#007acc] hover:bg-[#005a9e] text-white text-[12px] font-semibold rounded cursor-pointer transition-colors shadow-sm">
              <span className="mr-2 px-[6px] py-[2px] bg-[#1e1e1e]/20 text-[#007acc] rounded-[2px] text-[10px] fill-current">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5" fill="white"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </span> Projects
           </button>
           <button className="flex items-center px-5 py-2.5 bg-[#2d2d2d] hover:bg-[#3c3c3c] border border-[#3c3c3c] text-[#cccccc] text-[12px] font-semibold rounded cursor-pointer transition-colors">
              <User size={14} className="mr-2 text-[#a855f7]" /> About Me
           </button>
           <button className="flex items-center px-5 py-2.5 bg-[#2d2d2d] hover:bg-[#3c3c3c] border border-[#3c3c3c] text-[#cccccc] text-[12px] font-semibold rounded cursor-pointer transition-colors">
              <Mail size={14} className="mr-2" /> Contact
           </button>
        </div>

        <div className="grid grid-cols-4 bg-[#252526] border border-[#3c3c3c] rounded-lg p-8 mb-12 text-center items-center shadow-md">
            <div className="flex flex-col items-center justify-center border-r border-[#3c3c3c]">
               <div className="text-3xl font-black text-white mb-3 font-sans tracking-wide">3+</div>
               <div className="text-[10px] text-[#858585] tracking-[0.2em] font-sans font-bold">YEARS</div>
            </div>
            <div className="flex flex-col items-center justify-center border-r border-[#3c3c3c]">
               <div className="text-3xl font-black text-white mb-3 font-sans tracking-wide">10+</div>
               <div className="text-[10px] text-[#858585] tracking-[0.2em] font-sans font-bold">PROJECTS</div>
            </div>
            <div className="flex flex-col items-center justify-center border-r border-[#3c3c3c]">
               <div className="text-3xl font-black text-white mb-3 font-sans"><Infinity size={32} /></div>
               <div className="text-[10px] text-[#858585] tracking-[0.2em] font-sans font-bold">CURIOSITY</div>
            </div>
            <div className="flex flex-col items-center justify-center">
               <div className="text-3xl font-black text-white mb-3 font-sans tracking-wide flex justify-center"><ArrowUp size={32} /></div>
               <div className="text-[10px] text-[#858585] tracking-[0.2em] font-sans font-bold">ALWAYS LEARNING</div>
            </div>
        </div>

        <div className="flex flex-wrap gap-3 font-sans max-w-4xl pb-10">
            <SocialBadge platform="GitHub" icon={<Github size={14} />} />
            <SocialBadge platform="LinkedIn" icon={<Linkedin size={14} className="text-[#0a66c2]" />} />
            <SocialBadge platform="Medium" icon={<Monitor size={14} />} />
            <SocialBadge platform="Tableau" icon={<Database size={14} className="text-[#e97b39]" />} />
            <SocialBadge platform="LeetCode" icon={<LinkIcon size={14} className="text-[#ffa116]" />} />
            <SocialBadge platform="Instagram" icon={<Instagram size={14} className="text-[#e1306c]" />} />
            <SocialBadge platform="Email" icon={<Mail size={14} className="text-[#4ec9b0]" />} />
            <SocialBadge platform="Youtube" icon={<Youtube size={14} className="text-[#ff0000]" />} />
        </div>
      </div>
    </div>
  );
}

function SocialBadge({ platform, icon }) {
  return (
    <div className="px-4 py-2 border border-[#3c3c3c] rounded bg-[#1e1e1e] hover:bg-[#2d2d2d] cursor-pointer text-[#cccccc] text-[12px] flex items-center shadow-sm transition-colors">
      <span className="mr-2">{icon}</span> {platform}
    </div>
  );
}
