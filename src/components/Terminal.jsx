import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Terminal() {
  const [activeTab, setActiveTab] = useState('TERMINAL');

  return (
    <div className="h-64 w-full bg-[#1e1e1e] border-t border-[#2b2b2b] flex flex-col font-mono text-[13px] shrink-0 z-10">
      <div className="flex justify-between items-center px-4 h-9 mt-1">
        <div className="flex space-x-6 uppercase text-[11px] tracking-widest font-semibold flex-1">
          {['TERMINAL', 'PROBLEMS', 'OUTPUT'].map(tab => (
            <span 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-1 ${activeTab === tab ? 'text-[#e5e5e5] border-b border-[#007acc]' : 'text-[#858585] hover:text-[#d4d4d4]'}`}
            >
              {tab}
            </span>
          ))}
        </div>
        <X size={16} className="text-[#858585] cursor-pointer hover:text-white" />
      </div>
      <div className="flex-1 p-4 overflow-auto custom-scrollbar text-[#cccccc]">
        {activeTab === 'TERMINAL' && (
          <div className="leading-6">
            <div className="mb-2 opacity-60">
              cat &lt;file&gt; - view / open a file in the editor<br/>
              open &lt;file&gt; - same as cat<br/>
              whoami - who am I?<br/>
              echo &lt;text&gt; - print text<br/>
              date - show current date & time<br/>
              git log - show recent commits<br/>
              python --version - show Python version<br/>
              clear - clear the terminal<br/>
            </div>
            <div className="flex items-center text-[#569cd6]">
              <span className="text-[#4ec9b0] mr-2">abhiram @portfolio : ~ $</span>
              <span className="w-2 h-4 bg-[#cccccc] animate-pulse"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
