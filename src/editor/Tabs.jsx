import React from 'react';
import { useTabs } from '../hooks/useTabs';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
            <div className={`w-[8px] h-[8px] rounded-full mr-[8px] ${tab.name.endsWith('.ai') ? 'bg-[#007acc]' : 'bg-[#e3d04c]'}`} />
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
