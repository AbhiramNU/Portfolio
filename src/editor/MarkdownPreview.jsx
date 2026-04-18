import React from 'react';
import { Heart } from 'lucide-react';

export default function MarkdownPreview() {
  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto text-[#d4d4d4] font-sans">
      <div className="max-w-4xl mx-auto py-16 px-12">
        <h1 
          className="text-[64px] font-black text-white tracking-[-0.04em] mb-8 leading-none"
          style={{ fontFamily: "'Arial Black', 'Impact', sans-serif", letterSpacing: '-2px' }}
        >
          Abhiram Portfolio
        </h1>
        
        <p className="text-[#858585] text-lg mb-8 font-mono tracking-tight">
          Junior Software Developer @ EduVanceAI · India IN
        </p>

        <div className="flex flex-wrap gap-3 mb-16">
          <span className="flex items-center px-3 py-1.5 text-xs font-semibold border border-[#3776ab] text-[#3776ab] rounded hover:bg-[#3776ab]/10 cursor-pointer transition-colors">
            <span className="mr-2">🔵</span> Python
          </span>
          <span className="flex items-center px-3 py-1.5 text-xs font-semibold border border-[#3178c6] text-[#3178c6] rounded hover:bg-[#3178c6]/10 cursor-pointer transition-colors">
            <span className="mr-2">🔷</span> TypeScript
          </span>
          <span className="flex items-center px-3 py-1.5 text-xs font-semibold border border-[#009688] text-[#009688] rounded hover:bg-[#009688]/10 cursor-pointer transition-colors">
            <span className="mr-2">⚡</span> FastAPI
          </span>
          <span className="flex items-center px-3 py-1.5 text-xs font-semibold border border-[#d24982] text-[#d24982] rounded hover:bg-[#d24982]/10 cursor-pointer transition-colors">
            <span className="mr-2">🦜</span> LangChain
          </span>
          <span className="flex items-center px-3 py-1.5 text-xs font-semibold border border-[#ee4c2c] text-[#ee4c2c] rounded hover:bg-[#ee4c2c]/10 cursor-pointer transition-colors">
            <span className="mr-2">🔥</span> PyTorch
          </span>
        </div>

        <h2 className="text-2xl font-bold flex items-center text-white mb-6">
          <Heart fill="#a855f7" className="text-[#a855f7] mr-3" size={24} /> 
          About
        </h2>
      </div>
    </div>
  );
}
