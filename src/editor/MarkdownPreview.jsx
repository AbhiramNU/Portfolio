import React from 'react';
import { Heart, Sparkles, Terminal, Code, Cpu, Globe } from 'lucide-react';

export default function MarkdownPreview() {
  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto text-[#d4d4d4] font-sans custom-scrollbar">
      <div className="max-w-4xl mx-auto py-16 px-6 lg:px-12">
        
        {/* Header */}
        <h1 
          className="text-[42px] lg:text-[54px] font-black text-white tracking-[-0.04em] mb-3 leading-none"
          style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}
        >
          Abhiram N Udupa
        </h1>
        
        <p className="text-[#4ec9b0] text-sm mb-6 flex items-center font-mono tracking-tight pb-6 border-b border-[#3c3c3c]">
          Full-Stack & AI/ML Developer · Software Engineering Intern @ Sahasranshu Technologies · NMAMIT
        </p>

        {/* Quick Tech Badges */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          <span className="flex items-center px-2.5 py-1 text-[11px] font-semibold border border-[#3776ab] text-[#3776ab] rounded bg-[#3776ab]/10 font-mono">
            ● Python
          </span>
          <span className="flex items-center px-2.5 py-1 text-[11px] font-semibold border border-[#3178c6] text-[#3178c6] rounded bg-[#3178c6]/10 font-mono">
            ♦ TypeScript
          </span>
          <span className="flex items-center px-2.5 py-1 text-[11px] font-semibold border border-[#61dafb] text-[#61dafb] rounded bg-[#61dafb]/10 font-mono">
            ⚛ React 18
          </span>
          <span className="flex items-center px-2.5 py-1 text-[11px] font-semibold border border-[#009688] text-[#009688] rounded bg-[#009688]/10 font-mono">
            ⚡ FastAPI & Node.js
          </span>
          <span className="flex items-center px-2.5 py-1 text-[11px] font-semibold border border-[#ee4c2c] text-[#ee4c2c] rounded bg-[#ee4c2c]/10 font-mono">
            🧠 TensorFlow & OpenCV
          </span>
        </div>

        {/* About Section */}
        <h2 className="text-[22px] font-bold flex items-center text-white mb-4">
          <Heart fill="#a855f7" strokeWidth={0} className="text-[#a855f7] mr-3" size={20} /> 
          About Me
        </h2>
        
        <p className="text-[#cccccc] text-[13px] leading-relaxed mb-6 font-mono max-w-3xl">
          Hi, I'm Abhiram! I am a full-stack and AI/ML software engineer passionate about building high-performance, real-time intelligence platforms, computer vision applications, and responsive web systems. I am big on engineering integrity, clean architecture, and delivering polished, production-grade applications.
        </p>

        <ul className="text-[#858585] text-[12px] space-y-2.5 font-mono mb-12">
          <li className="flex items-center"><span className="mr-3 text-[14px]">🔭</span> Currently building <strong className="text-white mx-1">defence & critical-infrastructure intelligence platforms</strong> at Sahasranshu Technologies.</li>
          <li className="flex items-center"><span className="mr-3 text-[14px]">🧠</span> Specialized in <strong className="text-white mx-1">Computer Vision (OpenCV, MediaPipe, FaceNet)</strong>, ML forecasting, and LLM integrations.</li>
          <li className="flex items-center"><span className="mr-3 text-[14px]">⚡</span> Full-stack web development with <strong className="text-white mx-1">React, Node.js, Express, FastAPI, Spring Boot, & PostgreSQL / MongoDB / SQLite</strong>.</li>
          <li className="flex items-center"><span className="mr-3 text-[14px]">📫</span> Passionate about photography, music synthesis, and shipping clean software.</li>
        </ul>

        {/* Technical Stack Section */}
        <h2 className="text-[24px] font-bold text-white mb-6" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>Technical Stack</h2>
        
        <div className="flex flex-col space-y-4 font-mono text-[12px] mb-14 bg-[#252526] p-6 rounded-xl border border-[#3c3c3c]">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="w-[120px] text-[#4ec9b0] font-bold mb-1 sm:mb-0">Languages:</div>
            <div className="flex flex-wrap gap-2 text-[#cccccc]">
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">Python</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">TypeScript</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">JavaScript</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">SQL</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">Java</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="w-[120px] text-[#ce9178] font-bold mb-1 sm:mb-0">AI / ML & CV:</div>
            <div className="flex flex-wrap gap-2 text-[#cccccc]">
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">TensorFlow</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">OpenCV 4.x</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">MediaPipe</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">scikit-learn</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">DeepFace (FaceNet)</span>
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">Gemini 1.5 Flash</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="w-[120px] text-[#569cd6] font-bold mb-1 sm:mb-0">Full-Stack:</div>
            <div className="flex flex-wrap gap-2 text-[#cccccc]">
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">React 18</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">Node.js</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">Express</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">FastAPI</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">Spring Boot</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">MongoDB</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">MySQL</span>
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">SQLite</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="w-[120px] text-[#c586c0] font-bold mb-1 sm:mb-0">DevOps & Tools:</div>
            <div className="flex flex-wrap gap-2 text-[#cccccc]">
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">Vercel</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">Render</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">Supabase</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">Docker</span> 
              <span className="bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-1 rounded">Git & GitHub</span>
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <h2 className="text-[24px] font-bold text-white mb-6" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>Connect</h2>
        
        <div className="font-mono text-[13px] space-y-3 mb-20 text-[#858585]">
          <div className="flex items-center"><span className="w-28 text-[#cccccc] font-semibold">Email:</span> <a href="mailto:abhiram.udupa@gmail.com" className="text-white font-bold hover:underline">abhiram.udupa@gmail.com</a></div>
          <div className="flex items-center"><span className="w-28 text-[#cccccc] font-semibold">GitHub:</span> <a href="https://github.com/AbhiramNU" target="_blank" rel="noreferrer" className="text-[#4ec9b0] font-bold hover:underline">github.com/AbhiramNU</a></div>
          <div className="flex items-center"><span className="w-28 text-[#cccccc] font-semibold">LinkedIn:</span> <a href="https://linkedin.com/in/abhiramnu" target="_blank" rel="noreferrer" className="text-[#4ec9b0] font-bold hover:underline">linkedin.com/in/abhiramnu</a></div>
          <div className="flex items-center"><span className="w-28 text-[#cccccc] font-semibold">Medium:</span> <a href="https://medium.com/@abhiram.udupa" target="_blank" rel="noreferrer" className="text-[#4ec9b0] font-bold hover:underline">medium.com/@abhiram.udupa</a></div>
          <div className="flex items-center"><span className="w-28 text-[#cccccc] font-semibold">LeetCode:</span> <a href="https://leetcode.com/u/AbhiramNU/" target="_blank" rel="noreferrer" className="text-[#4ec9b0] font-bold hover:underline">leetcode.com/u/AbhiramNU</a></div>
        </div>

        {/* Footer */}
        <div className="w-full flex justify-center pb-8 border-t border-[#3c3c3c] pt-10 items-center text-[#858585] text-[11px] font-mono tracking-widest">
           Built with <span className="text-white text-[10px] mx-2">🤍</span> by Abhiram N Udupa · 2026
        </div>

      </div>
    </div>
  );
}
