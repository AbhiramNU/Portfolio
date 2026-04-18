import React from 'react';
import { useTabs } from '../hooks/useTabs';
import { GitBranch, XCircle, AlertTriangle, CheckCheck, Bell } from 'lucide-react';

export default function StatusBar() {
  const { activeTab } = useTabs();
  const fileType = activeTab ? activeTab.split('.').pop().toUpperCase() : 'UI';

  return (
    <div className="h-[22px] w-full bg-vs-accent text-[#ffffff] flex items-center justify-between px-3 text-[12px] select-none shrink-0 font-sans cursor-pointer">
      <div className="flex items-center gap-4 h-full">
        <div className="flex items-center gap-[4px] hover:bg-white/20 px-1 py-0.5 rounded transition-colors">
          <GitBranch size={13} />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded transition-colors">
          <XCircle size={13} /> 0 <AlertTriangle size={13} className="ml-1" /> 0
        </div>
      </div>
      
      <div className="flex items-center gap-4 h-full">
        <div className="hidden md:flex items-center gap-4">
          <span className="hover:bg-white/20 px-1 py-0.5 rounded transition-colors">Ln 1, Col 1</span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded transition-colors">Spaces: 2</span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded transition-colors">UTF-8</span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded transition-colors">CRLF</span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded transition-colors font-bold">
            {fileType === 'AI' ? 'Assistant' : `React (${fileType})`}
          </span>
        </div>
        <div className="flex items-center gap-[4px] hover:bg-white/20 px-1 py-0.5 rounded transition-colors">
          <CheckCheck size={13} />
          <span className="hidden md:block">Prettier</span>
        </div>
        <Bell size={13} className="hover:text-gray-200 transition-colors mx-1" />
      </div>
    </div>
  );
}
