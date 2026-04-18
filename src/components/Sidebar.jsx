import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight, FileJson, FileText, FileCode, Bot } from 'lucide-react';
import { useTabs } from '../hooks/useTabs';

const getIcon = (name) => {
  if (name.endsWith('.tsx') || name.endsWith('.ts')) return <span className="text-[#3178c6] font-bold text-[10px] w-4 text-center">TS</span>;
  if (name.endsWith('.js')) return <span className="text-[#f7df1e] font-bold text-[10px] w-4 text-center">JS</span>;
  if (name.endsWith('.json')) return <FileJson size={14} className="text-[#cbcc56]" />;
  if (name.endsWith('.css')) return <span className="text-[#264de4] font-bold text-[10px] w-4 text-center">#</span>;
  if (name.endsWith('.html')) return <span className="text-[#e34c26] font-bold text-[10px] w-4 text-center">&lt;&gt;</span>;
  if (name.endsWith('.md')) return <FileText size={14} className="text-[#007acc]" />;
  return <FileText size={14} className="text-gray-400" />;
};

export default function Sidebar({ isOpen }) {
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
                  {getIcon(file.name)}
                </div>
                <span className="ml-[6px] font-sans text-[13px]">{file.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
