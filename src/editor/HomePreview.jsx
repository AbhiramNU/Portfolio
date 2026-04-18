import React, { useState, useEffect } from 'react';
import { Terminal, User, Mail, Github, Linkedin, Monitor, Database, Infinity, ArrowUp, Briefcase, Link as LinkIcon, Instagram, Youtube } from 'lucide-react';

export default function HomePreview() {
  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto text-[#d4d4d4] font-mono p-10 custom-scrollbar">
      <div className="max-w-4xl mx-auto pl-4">
        
        {/* Comment Header */}
        <p className="text-[#6a9955] mb-5 mt-2 text-[13px] tracking-wide">
          <span className="opacity-50 mr-2">1</span> // hello world !! Welcome to my portfolio
        </p>
        
        {/* Main Content Layout Node */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          
          {/* Left Column Text Group */}
          <div className="flex flex-col pt-2 flex-1 max-w-2xl pr-8">
            <h1 className="text-[76px] leading-[0.9] font-black tracking-tighter mb-6" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
              <div className="text-white drop-shadow-md">Abhiram</div>
              <div className="text-[#ff5500] drop-shadow-md">N Udupa</div>
            </h1>

            <div className="flex flex-wrap gap-[6px] mb-4 text-[11px] font-sans font-medium w-max max-w-full">
              <span className="flex items-center px-4 py-1.5 bg-[#1e1e1e] border border-[#3c3c3c] rounded text-[#cccccc]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#4ec9b0] mr-2"></div> Backend Engineer
              </span>
              <span className="flex items-center px-4 py-1.5 bg-[#1e1e1e] border border-[#3c3c3c] rounded text-[#cccccc]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#c586c0] mr-2"></div> AI / ML Dev
              </span>
              <span className="flex items-center px-4 py-1.5 bg-[#1e1e1e] border border-[#3c3c3c] rounded text-[#cccccc]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#007acc] mr-2"></div> Data Scientist
              </span>
              <a href="https://nitte.edu.in/nmamit/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-1.5 bg-[#1e1e1e] border border-[#3c3c3c] rounded text-[#ff5500] hover:bg-[#3c3c3c]/50 transition-colors cursor-pointer">
                <div className="w-[6px] h-[6px] rounded-full bg-[#ff5500] mr-2 shadow-[0_0_8px_#ff5500]"></div> @ NMAMIT
              </a>
            </div>

            {/* Perfect vertical centering between labels and long text */}
            <div className="h-8 flex items-center mt-6 mb-6">
              <TypewriterTagline />
            </div>

            <p className="text-[#858585] mb-12 font-mono text-[13px] leading-7">
              I live at the crossroads of <span className="text-[#4ec9b0] font-semibold">backend engineering</span>, <span className="text-[#4ec9b0] font-semibold">AI/ML</span>, and <span className="text-[#4ec9b0] font-semibold">data science</span>. I build systems that are genuinely <span className="text-[#4ec9b0] font-semibold">intelligent and scalable</span>.
            </p>

            <div className="flex gap-4 mb-10 font-sans">
               <button className="flex items-center px-5 py-2.5 bg-[#007acc] hover:bg-[#005a9e] text-white text-[12px] font-semibold rounded cursor-pointer transition-colors shadow-sm">
                  <span className="mr-2 px-[6px] py-[2px] bg-[#1e1e1e]/20 text-[#007acc] rounded-[2px] text-[10px] fill-current">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5" fill="white"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  </span> Projects
               </button>
               <button className="flex items-center px-5 py-2.5 bg-[#2d2d2d] hover:bg-[#3c3c3c] border border-[#3c3c3c] text-[#cccccc] text-[12px] font-semibold rounded cursor-pointer transition-colors">
                  <User size={14} className="mr-2 text-[#ff5500]" /> About Me
               </button>
               <button className="flex items-center px-5 py-2.5 bg-[#2d2d2d] hover:bg-[#3c3c3c] border border-[#3c3c3c] text-[#cccccc] text-[12px] font-semibold rounded cursor-pointer transition-colors">
                  <Mail size={14} className="mr-2" /> Contact
               </button>
            </div>
          </div>
          
          {/* Right Column Image Node */}
          <div className="mt-6 md:mt-0 flex-shrink-0">
            <AnimatedProfileImage />
          </div>
        </div>

        {/* Bottom Elements */}
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

const AnimatedProfileImage = () => {
  const [revealPercentage, setRevealPercentage] = useState(0);
  const [decoding, setDecoding] = useState(true);

  useEffect(() => {
    // Generate/Stream image effect revealing progressively
    if (revealPercentage < 100) {
      const timer = setTimeout(() => {
        // Organic stream speed variation to simulate chunk loading
        setRevealPercentage(prev => Math.min(prev + (Math.random() * 8 + 3), 100));
      }, 70); 
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setDecoding(false), 500); // slight pause holding the scanline before clearing
    }
  }, [revealPercentage]);

  return (
    <div className="md:mr-4 p-1 rounded-xl border border-[#3c3c3c] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] relative w-[300px] h-[300px] flex flex-col items-center justify-center bg-[#1e1e1e] overflow-hidden ml-4">
      
      {/* Container window control styling */}
      <div className="absolute top-3 right-3 flex space-x-1.5 z-20">
        <div className="w-[8px] h-[8px] rounded-full bg-[#ff5f56]"></div>
        <div className="w-[8px] h-[8px] rounded-full bg-[#ffbd2e]"></div>
        <div className="w-[8px] h-[8px] rounded-full bg-[#27c93f]"></div>
      </div>

      <div className="relative w-full h-full rounded-lg overflow-hidden flex items-end justify-center bg-[radial-gradient(circle_at_center,_#3a2015_0%,_#0a0a0a_100%)]">
        
        {/* subtle grid overlay for tech vibe */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]" />

        {/* Placeholder background missing frame (larger scaled) */}
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ 
            backgroundImage: "url('/profile.png')",
            opacity: 0.15,
            filter: "grayscale(100%) blur(4px)",
            transform: "translateY(30px) scale(1.2)"
          }}
        />
        
        {/* Progressive Render Layer */}
        <div 
          className="absolute top-0 left-0 w-full bg-cover bg-top bg-no-repeat"
          style={{ 
            backgroundImage: "url('/profile.png')",
            height: `${revealPercentage}%`,
            // Giving the person an orange glowing aura drop-shadow so it separates from the dark background
            filter: decoding ? "sepia(70%) hue-rotate(-50deg) saturate(200%) drop-shadow(0 0 15px #ff5500)" : "drop-shadow(0 0 12px rgba(255,85,0,0.3))", 
            transform: "translateY(30px) scale(1.2)",
            transition: decoding ? "height 0.07s linear" : "filter 1.5s ease" 
          }}
        />

        {/* Lead Scanline Cursor */}
        {decoding && (
          <div 
            className="absolute left-0 w-full bg-white h-[4px]"
            style={{ 
              top: `${revealPercentage}%`, 
              boxShadow: "0 0 15px 4px #ff5500, 0 0 5px 2px white"
            }} 
          />
        )}
      </div>

      {/* Generating Status Text Overlay */}
      <AnimatePresence>
        {decoding && (
          <div className="absolute font-mono text-[10px] font-bold text-[#ff5500] bg-[#1e1e1e]/90 border border-[#ff5500]/50 px-2 py-1 z-30 bottom-3 right-3 flex items-center backdrop-blur-md rounded shadow-lg">
            GEN_IMG {Math.floor(revealPercentage)}% <span className="w-1.5 h-2.5 bg-[#ff5500] animate-(pulse) ml-1" />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Helper for fading out the generation label cleanly
function AnimatePresence({ children }) {
   if (!children) return null;
   return children;
}

const TypewriterTagline = () => {
  const words = [
    "Turning data into decisions 🧠",
    "Building intelligent backends ⚡",
    "Engineering scalable AI 🤖",
    "Transforming code into impact 🚀"
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const pauseTimeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(pauseTimeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <p className="text-[#cccccc] font-sans text-sm tracking-tight flex items-center">
      {`${words[index].substring(0, subIndex)}`}
      <span className={`inline-block w-[6px] h-[14px] bg-[#ff5500] ml-1 ${blink ? 'opacity-100' : 'opacity-0'}`} />
    </p>
  );
};

