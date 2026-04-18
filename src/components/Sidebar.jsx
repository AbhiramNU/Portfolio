import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileJson, FileText, FileCode, Bot } from 'lucide-react';
import { useTabs } from '../hooks/useTabs';

const getIcon = (name) => {
  if (name.endsWith('.ts') || name.endsWith('.tsx') || name.endsWith('.js')) return <FileCode size={16} className="text-[#e3d04c]" />;
  if (name.endsWith('.json')) return <FileJson size={16} className="text-[#519aba]" />;
  if (name.endsWith('.md')) return <FileText size={16} className="text-[#519aba]" />;
  if (name.endsWith('.ai')) return <Bot size={16} className="text-vs-accent" />;
  return <FileText size={16} className="text-gray-400" />;
};

export default function Sidebar({ isOpen }) {
  const [expanded, setExpanded] = useState(true);
  const { files, openFile, activeTab } = useTabs();

  if (!isOpen) return null;

  return (
    <div className="w-64 h-full bg-vs-sidebar border-r border-vs-border flex flex-col text-sm select-none shrink-0 hidden md:flex">
      <div className="px-4 py-3 uppercase text-[11px] text-vs-text-muted font-bold tracking-wider">
        Explorer
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div 
          className="flex items-center px-1 py-1 cursor-pointer hover:bg-vs-tab-bg text-white"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          <span className="font-bold ml-1 uppercase text-xs tracking-wider">Portfolio</span>
        </div>
        
        {expanded && (
          <div className="flex flex-col mt-[2px]">
            {files.map(file => (
              <div
                key={file.name}
                onClick={() => openFile(file.name)}
                className={`flex items-center px-6 py-[4px] cursor-pointer w-full transition-colors ${
                  activeTab === file.name ? 'bg-vs-tab-bg text-white' : 'text-vs-text-muted hover:bg-[#2d2d2d] hover:text-vs-text'
                }`}
              >
                {getIcon(file.name)}
                <span className="ml-[6px] font-mono text-[13px]">{file.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
