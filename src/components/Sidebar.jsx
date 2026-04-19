import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight, FileJson, FileText, FileCode, Bot } from 'lucide-react';
import { useTabs } from '../hooks/useTabs';
import { getFileIcon } from '../editor/Tabs';
import { Sparkles } from 'lucide-react';

export default function Sidebar({ isOpen, onCopilotClick }) {
  const [expanded, setExpanded] = useState(true);
  const { files, openFile, activeTab } = useTabs();

  if (!isOpen) return null;

  return (
    <div className="w-60 h-full bg-[#252526] border-r border-[#2b2b2b] flex flex-col text-sm select-none shrink-0 hidden md:flex">
      <div className="px-4 py-3 uppercase text-[11px] text-[#cccccc] font-semibold tracking-wider flex items-center justify-between">
        <span>Portfolio</span>
        <span className="text-[#858585] text-[16px] leading-none mb-1">...</span>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div 
          className="flex items-center px-1 py-1 cursor-pointer hover:bg-[#2d2d2d] text-[#cccccc]"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          <span className="font-bold ml-1 uppercase text-[11px] tracking-wider">PORTFOLIO</span>
        </div>
        
        {expanded && (
          <div className="flex flex-col mt-[2px]">
            {files.map(file => (
              <div
                key={file.name}
                onClick={() => openFile(file.name)}
                className={`flex items-center px-6 py-[4px] cursor-pointer w-full transition-colors ${
                  activeTab === file.name ? 'bg-[#37373d] text-white' : 'text-[#cccccc] hover:bg-[#2a2d2e]'
                }`}
              >
                <div className="flex items-center justify-center w-5">
                  {getFileIcon(file.name)}
                </div>
                <span className="ml-[6px] font-sans text-[13px]">{file.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Copilot Button */}
      <div className="p-4 mt-auto border-t border-[#3c3c3c]/30">
        <div 
          onClick={onCopilotClick}
          className="w-full bg-[#1e1e1e] border border-[#3c3c3c] hover:border-[#a855f7]/60 hover:bg-[#2d1b4e]/30 rounded-md py-2.5 px-3 flex items-center justify-between cursor-pointer group transition-all"
        >
          <div className="flex items-center text-[#a855f7] font-semibold text-[12px] group-hover:text-[#c084fc] transition-colors">
            <Sparkles size={14} className="mr-2" />
            Abhiram's Copilot
          </div>
          <span className="text-[10px] text-[#858585] font-bold group-hover:text-[#a855f7] transition-colors">AI</span>
        </div>
      </div>
    </div>
  );
}
