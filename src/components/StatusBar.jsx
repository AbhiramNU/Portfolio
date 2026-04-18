import React from 'react';
import { useTabs } from '../hooks/useTabs';
import { GitBranch, XCircle, AlertTriangle, CheckCheck } from 'lucide-react';

export default function StatusBar() {
  const { activeTab } = useTabs();
  
  return (
    <div className="h-[22px] w-full bg-[#007acc] text-[#ffffff] flex items-center justify-between px-3 text-[12px] select-none shrink-0 font-sans cursor-pointer z-50">
      <div className="flex items-center gap-4 h-full">
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded transition-colors">
          <XCircle size={13} /> 0 <AlertTriangle size={13} className="ml-1" /> 0
        </div>
        <div className="flex items-center gap-[4px] hover:bg-white/20 px-1 py-0.5 rounded transition-colors">
          <GitBranch size={13} />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded transition-colors">
          <span className="mx-1">🔄</span> Abhiram's Portfolio
        </div>
      </div>
      
      <div className="flex items-center gap-4 h-full">
        <div className="hidden md:flex items-center gap-4">
          <span className="hover:bg-white/20 px-1 py-0.5 rounded transition-colors tracking-wide">Copilot</span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded transition-colors tracking-wide">Markdown</span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded transition-colors tracking-wide">UTF-8</span>
          <div className="flex items-center gap-[4px] hover:bg-white/20 px-1 py-0.5 rounded transition-colors">
            <CheckCheck size={13} />
            <span className="tracking-wide">Prettier</span>
          </div>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded transition-colors tracking-wide font-medium flex items-center">
            <Heart fill="#fff" size={12} className="mr-1" /> Abhiram Dark
          </span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded transition-colors tracking-wide">10:26</span>
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
