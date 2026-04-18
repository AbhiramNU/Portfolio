import React from 'react';
import Tabs from './Tabs';
import FileRouter from './FileRouter';
import { useTabs } from '../hooks/useTabs';
import { FileCode2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Editor() {
  const { activeTab, files } = useTabs();
  const file = files.find(f => f.name === activeTab);

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#1e1e1e] relative shrink-0">
      <Tabs />
      <div className="flex-1 min-h-0 overflow-hidden relative bg-[#1e1e1e]">
        <AnimatePresence mode="wait">
          {!file ? (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center h-full text-[#858585] flex-col select-none"
            >
              <FileCode2 size={120} strokeWidth={0.5} className="mb-6 opacity-10" />
              <p className="text-xl font-light opacity-50 tracking-wide font-sans">Select a file to start exploring</p>
            </motion.div>
          ) : (
            <motion.div
              key={file.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="h-full absolute inset-0 flex"
            >
              <FileRouter content={file.content} type={file.type} name={file.name} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
