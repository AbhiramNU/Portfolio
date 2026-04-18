import React, { useState } from 'react';
import { useTabs } from '../hooks/useTabs';
import { GitBranch, XCircle, AlertTriangle, CheckCheck, Bot } from 'lucide-react';

export default function StatusBar({ toggleAssistant, isAssistantOpen }) {
  const { activeTab } = useTabs();
  
  return (
    <div className="h-[22px] w-full bg-[#007acc] text-[#ffffff] flex items-center justify-between px-3 text-[12px] select-none shrink-0 font-sans z-50">
      <div className="flex items-center gap-2 h-full">
        {/* Assistant Toggle Button */}
        <div 
          onClick={toggleAssistant}
          className={`flex items-center gap-1.5 px-2 py-0.5 rounded cursor-pointer transition-colors ${isAssistantOpen ? 'bg-[#311c47] text-[#e5e5e5]' : 'hover:bg-white/20'}`}
        >
          <Bot size={13} className={isAssistantOpen ? 'text-[#a855f7]' : 'text-[#ffffff]'} />
          <span className="font-semibold tracking-wide">Abhiram's Copilot</span>
          <span className="text-[10px] opacity-80 border border-white/30 px-1 rounded-sm ml-1">AI</span>
        </div>
        
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer transition-colors ml-2">
          <GitBranch size={13} />
          <span>main</span>
        </div>
        
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer transition-colors ml-2">
          <XCircle size={13} /> 0 <AlertTriangle size={13} className="ml-1" /> 0
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer transition-colors ml-3 font-medium">
          <span className="mx-1">🔄</span> Abhiram's Portfolio
        </div>
      </div>
      
      <div className="flex items-center gap-4 h-full">
        <div className="hidden md:flex items-center gap-3">
          <span className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer transition-colors tracking-wide">Copilot</span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer transition-colors tracking-wide">TypeScript React</span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer transition-colors tracking-wide">UTF-8</span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer transition-colors tracking-wide">Prettier</span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer transition-colors tracking-wide font-medium flex items-center text-[#c296e6]">
            <Heart fill="#c296e6" size={12} className="mr-1.5" /> Abhiram Dark
          </span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer transition-colors tracking-wide">10:31</span>
        </div>
      </div>
    </div>
  );
}

const Heart = ({ fill, size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);
