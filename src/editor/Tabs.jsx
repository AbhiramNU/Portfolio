import React from 'react';
import { useTabs } from '../hooks/useTabs';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const getFileIcon = (name) => {
  const base = "w-[16px] h-[16px] flex items-center justify-center rounded-[3px] font-bold text-[9px] mr-[6px] flex-shrink-0 tracking-tighter";
  if (name.endsWith('.tsx')) return <span className="text-[#61dafb] mr-[6px] font-bold text-[15px] leading-none flex-shrink-0 mb-[1px]">⚛</span>;
  if (name.endsWith('.ts')) return <span className={`${base} bg-[#3178c6] text-white`}>TS</span>;
  if (name.endsWith('.js')) return <span className={`${base} bg-[#f7df1e] text-black`}>JS</span>;
  if (name.endsWith('.html')) return <span className={`${base} bg-[#e34f26] text-white`}>5</span>;
  if (name.endsWith('.json')) return <span className={`${base} bg-[#4d5a2e] text-[#a8cb76]`}>{'{ }'}</span>;
  if (name.endsWith('.css')) return <span className={`${base} bg-[#264de4] text-white`}>3</span>;
  if (name.endsWith('.md')) return <span className={`${base} bg-[#1d5c7b] text-[#56b6c2] tracking-normal`}>M↓</span>;
  if (name.endsWith('.pdf')) return <span className={`${base} border border-[#f14c4c] text-[#f14c4c] text-[8px] tracking-normal bg-transparent`}>PDF</span>;
  return <div className={`w-[8px] h-[8px] rounded-full mr-[8px] flex-shrink-0 bg-[#e3d04c]`} />;
};

export default function Tabs() {
  const { openTabs, activeTab, setActiveTab, closeTab } = useTabs();

  return (
    <div className="h-9 w-full bg-[#252526] flex overflow-x-auto custom-scrollbar select-none shrink-0 border-b border-vs-border">
      <AnimatePresence>
        {openTabs.map(tab => (
          <motion.div
            key={tab.name}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center h-full min-w-fit px-3 cursor-pointer group w-auto ${
              activeTab === tab.name
                ? 'bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]'
                : 'bg-transparent text-[#858585] hover:bg-[#2d2d2d] border-t-2 border-t-transparent border-r border-r-[#3c3c3c]'
            }`}
          >
            {getFileIcon(tab.name)}
            <span className="text-[13px] font-mono mr-[8px] whitespace-nowrap">{tab.name}</span>
            <div
              className={`p-[2px] rounded hover:bg-[#3c3c3c] transition-colors ${
                activeTab === tab.name ? 'opacity-100 text-white' : 'opacity-0 group-hover:opacity-100 text-[#858585]'
              }`}
              onClick={(e) => closeTab(tab.name, e)}
            >
              <X size={14} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
