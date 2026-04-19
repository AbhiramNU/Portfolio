import React from 'react';
import { Heart } from 'lucide-react';

export default function MarkdownPreview() {
  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto text-[#d4d4d4] font-sans custom-scrollbar">
      <div className="max-w-4xl mx-auto py-16 px-6 lg:px-12">
        <h1 
          className="text-[42px] lg:text-[54px] font-black text-white tracking-[-0.04em] mb-4 leading-none"
          style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}
        >
          Abhiram N Udupa
        </h1>
        
        <p className="text-[#858585] text-sm mb-6 flex items-center font-mono tracking-tight pb-6 border-b border-[#3c3c3c]">
          Junior Software Developer @ NMAMIT · India IN
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <span className="flex items-center px-2 py-1 text-[11px] font-semibold border border-[#3776ab] text-[#3776ab] rounded hover:bg-[#3776ab]/10 cursor-pointer transition-colors bg-[#3776ab]/5">
            <span className="mr-2 text-[#3776ab] text-[14px]">●</span> Python
          </span>
          <span className="flex items-center px-2 py-1 text-[11px] font-semibold border border-[#3178c6] text-[#3178c6] rounded hover:bg-[#3178c6]/10 cursor-pointer transition-colors bg-[#3178c6]/5">
            <span className="mr-2 text-[#3178c6] text-[14px]">♦</span> TypeScript
          </span>
          <span className="flex items-center px-2 py-1 text-[11px] font-semibold border border-[#009688] text-[#009688] rounded hover:bg-[#009688]/10 cursor-pointer transition-colors bg-[#009688]/5">
            <span className="mr-2 text-[#009688] text-[14px]">⚡</span> FastAPI
          </span>
          <span className="flex items-center px-2 py-1 text-[11px] font-semibold border border-[#d24982] text-[#d24982] rounded hover:bg-[#d24982]/10 cursor-pointer transition-colors bg-[#d24982]/5">
            <span className="mr-2 text-[#d24982] text-[14px]">●</span> LangChain
          </span>
          <span className="flex items-center px-2 py-1 text-[11px] font-semibold border border-[#ee4c2c] text-[#ee4c2c] rounded hover:bg-[#ee4c2c]/10 cursor-pointer transition-colors bg-[#ee4c2c]/5">
            <span className="mr-2 text-[#ee4c2c] text-[14px]">✔</span> PyTorch
          </span>
        </div>

        <h2 className="text-[22px] font-bold flex items-center text-white mb-4">
          <Heart fill="#a855f7" strokeWidth={0} className="text-[#a855f7] mr-3" size={20} /> 
          About
        </h2>
        
        <p className="text-[#858585] text-[12px] leading-relaxed mb-6 font-mono max-w-3xl">
          Hi, Abhiram on this side! I am an aspiring computer engineer and am curious to learn new things about life every day! Perfection is something I always aim for. Being big on integrity and authenticity is something I always believe in. I enjoy painting, photography, designing, and editing. Growing up, I have always loved spending quality time making music on the keyboard. Glad to see you, cheers!
        </p>

        <ul className="text-[#858585] text-[12px] space-y-2.5 font-mono mb-14">
          <li className="flex items-center"><span className="mr-3 text-[14px]">🔭</span> Building <span className="text-white font-bold mx-1">scalable AI integrations</span> at NMAMIT</li>
          <li className="flex items-center"><span className="mr-3 text-[14px]">🧠</span> NLP, LLMs, RAG pipelines, Vector DBs</li>
          <li className="flex items-center"><span className="mr-3 text-[14px]">⚡</span> Making data stories non-data people get</li>
          <li className="flex items-center"><span className="mr-3 text-[14px]">📫</span> Always learning, always shipping</li>
        </ul>

        {/* Stack */}
        <h2 className="text-[24px] font-bold text-white mb-6" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>Stack</h2>
        
        <div className="flex flex-col space-y-3 font-mono text-[11px] mb-14">
          <div className="flex items-center">
            <div className="w-[100px] text-[#cccccc] font-bold">Languages:</div>
            <div className="flex flex-wrap gap-2 text-[#a0a0a0]">
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">Python</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">TypeScript</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">SQL</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">JavaScript</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">Java</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[100px] text-[#cccccc] font-bold">AI / ML:</div>
            <div className="flex flex-wrap gap-2 text-[#a0a0a0]">
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">PyTorch</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">LangChain</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">HuggingFace</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">scikit-learn</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">TensorFlow</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[100px] text-[#cccccc] font-bold">Backend:</div>
            <div className="flex flex-wrap gap-2 text-[#a0a0a0]">
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">FastAPI</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">Flask</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">Django</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">PostgreSQL</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">Redis</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[100px] text-[#cccccc] font-bold">DevOps:</div>
            <div className="flex flex-wrap gap-2 text-[#a0a0a0]">
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">Docker</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">AWS</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">Linux</span> 
              <span className="bg-[#2d2d2d] border border-[#3c3c3c] px-2 py-0.5 rounded-[2px]">Git</span>
            </div>
          </div>
        </div>

        {/* Connect */}
        <h2 className="text-[24px] font-bold text-white mb-6" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>Connect</h2>
        
        <div className="font-mono text-[12px] space-y-3 mb-24 text-[#858585]">
          <div className="flex items-center"><span className="w-24 text-[#cccccc]">Email:</span> <a href="mailto:abhiramnudupa@gmail.com" className="text-white font-bold hover:underline">abhiramnudupa@gmail.com</a></div>
          <div className="flex items-center"><span className="w-24 text-[#cccccc]">Github:</span> <a href="https://github.com/abhiramnudupa" target="_blank" rel="noreferrer" className="text-white font-bold hover:underline">abhiramnudupa</a></div>
          <div className="flex items-center"><span className="w-24 text-[#cccccc]">LinkedIn:</span> <a href="https://linkedin.com/in/abhiram-n-udupa" target="_blank" rel="noreferrer" className="text-white font-bold hover:underline">abhiram-n-udupa</a></div>
          <div className="flex items-center"><span className="w-24 text-[#cccccc]">Tableau:</span> <a href="https://public.tableau.com/app/profile/abhiram.udupa" target="_blank" rel="noreferrer" className="text-white font-bold hover:underline">abhiram.udupa</a></div>
        </div>

        {/* Footer */}
        <div className="w-full flex justify-center pb-8 border-t border-[#3c3c3c] pt-12 items-center text-[#858585] text-[11px] font-mono tracking-widest">
           Made with <span className="text-white text-[10px] mx-2">🤍</span> by Abhiram · 2026
        </div>

      </div>
    </div>
  );
}
