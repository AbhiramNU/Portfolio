import React from 'react';

export default function TopBar() {
  return (
    <div className="h-8 w-full bg-[#1e1e1e] flex items-center justify-between px-3 text-[#cccccc] text-[13px] border-b border-[#2b2b2b] select-none shrink-0 font-sans">
      <div className="flex items-center h-full">
        {/* Fake Mac Buttons */}
        <div className="flex items-center space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="hidden md:flex items-center space-x-1 text-[13px] text-[#cccccc]">
          <span className="cursor-pointer hover:bg-white/10 px-2 py-0.5 rounded">File</span>
          <span className="cursor-pointer hover:bg-white/10 px-2 py-0.5 rounded">Edit</span>
          <span className="cursor-pointer hover:bg-white/10 px-2 py-0.5 rounded">View</span>
          <span className="cursor-pointer hover:bg-white/10 px-2 py-0.5 rounded">Go</span>
          <span className="cursor-pointer hover:bg-white/10 px-2 py-0.5 rounded">Run</span>
          <span className="cursor-pointer hover:bg-white/10 px-2 py-0.5 rounded">Terminal</span>
          <span className="cursor-pointer hover:bg-white/10 px-2 py-0.5 rounded">Help</span>
          <span className="cursor-pointer hover:bg-white/10 px-2 py-0.5 rounded">Copilot</span>
        </div>
      </div>
      <div className="flex-1 flex justify-center max-w-lg absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-[#2d2d2d] text-[#cccccc] border border-[#3c3c3c] rounded-md px-3 py-[2px] text-[12px] flex items-center justify-center w-[300px] shadow-sm">
          <span className="mr-2 text-[#007acc]">🔍</span>
          <span>abhiram : portfolio <span className="opacity-50 ml-2">Ctrl P</span></span>
        </div>
      </div>
      <div className="flex items-center">
        {/* Profile icon placeholder */}
        <div className="w-6 h-6 rounded-full bg-[#a855f7] flex items-center justify-center text-[10px] font-bold text-white">
          AB
        </div>
      </div>
    </div>
  );
}
