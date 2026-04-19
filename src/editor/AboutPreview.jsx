import React from 'react';

export default function AboutPreview() {
  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto text-[#d4d4d4] font-mono p-10 custom-scrollbar">
      <div className="max-w-4xl mx-auto pl-4 pb-12">
        
        {/* Header Section */}
        <p className="text-[#6a9955] mb-6 text-[13px] tracking-wide">
          &lt;!-- about.html - Abhiram N Udupa --&gt;
        </p>

        <h1 className="text-[54px] leading-tight font-black tracking-tighter text-white drop-shadow-md mb-2" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
          About Me
        </h1>
        <p className="text-[#858585] text-[13px] tracking-wide mb-10">
          // who I am · what I do · where I build
        </p>

        {/* Intro Block */}
        <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-6 mb-10 shadow-sm">
          <p className="text-[#cccccc] text-[13px] leading-8">
            Hi! I'm <span className="text-[#4ec9b0] font-semibold">Abhiram</span>, a software developer living at the crossroads of <span className="text-[#4ec9b0] font-semibold">backend engineering</span>, <span className="text-[#4ec9b0] font-semibold">AI/ML</span>, and <span className="text-[#4ec9b0] font-semibold">data science</span>. I love building systems that are not just functional but genuinely <span className="text-[#4ec9b0] font-semibold">intelligent and scalable</span>. Currently exploring AI integrations and backend systems at <span className="text-[#ff5500] font-semibold">NMAMIT</span> that power seamless experiences for end-users.
          </p>
        </div>

        {/* Current Focus Section */}
        <h2 className="text-[#4ec9b0] font-semibold tracking-[0.2em] text-[12px] mb-4">CURRENT FOCUS</h2>
        <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-6 mb-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-[12px] text-[#cccccc] leading-relaxed">
            <div className="flex items-start">
              <span className="mr-3">🚀</span>
              <span>Building scalable backend systems & AI integrations at NMAMIT</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3">🌱</span>
              <span>Deep interest in NLP, LLMs & ML pipelines</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3">🔭</span>
              <span>Currently exploring RAG, MLOps & Vector Databases</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3">💬</span>
              <span>Talk to me about Python, APIs, Data Science</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3">⚡</span>
              <span>Making data stories non-data people actually get</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3">📫</span>
              <span>Always learning, always shipping</span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <h2 className="text-[#4ec9b0] font-semibold tracking-[0.2em] text-[12px] mb-4">EDUCATION</h2>
        
        {/* Education Item 1 */}
        <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-6 mb-4 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-white font-bold text-[14px] flex items-center font-sans tracking-wide">
              <span className="mr-2 shrink-0">🎓</span> NMAMIT, Nitte
            </h3>
            <span className="text-[#858585] text-[11px] shrink-0 pt-0.5">2021 - 2025</span>
          </div>
          <div className="text-[12px] text-[#858585] mb-1">Nitte Deemed to be University</div>
          <div className="text-[#007acc] text-[12px] font-semibold mb-1">Bachelor of Engineering in Computer Science</div>
          <div className="text-[#cccccc] text-[11px] mb-1">Minors: Artificial Intelligence & Machine Learning (AI/ML)</div>
          <div className="text-[#c586c0] text-[11px]">CGPA: 9.0+</div>
        </div>

        {/* Education Item 2 */}
        <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-white font-bold text-[14px] flex items-center font-sans tracking-wide">
              <span className="mr-2 shrink-0">🏫</span> Higher Secondary School
            </h3>
            <span className="text-[#858585] text-[11px] shrink-0 pt-0.5">2007 - 2021</span>
          </div>
          <div className="text-[#007acc] text-[12px] font-semibold mb-1">High School Education</div>
          <div className="text-[#cccccc] text-[11px]">Class 12th: 90%+ | Class 10th: 95%+</div>
        </div>

      </div>
    </div>
  );
}
