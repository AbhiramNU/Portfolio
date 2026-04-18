import React from 'react';
import Tabs from './Tabs';
import CodeViewer from './CodeViewer';
import Assistant from './Assistant';
import { useTabs } from '../hooks/useTabs';
import { FileCode2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Editor() {
  const { activeTab, files } = useTabs();
  const file = files.find(f => f.name === activeTab);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#1e1e1e] overflow-hidden relative">
      <Tabs />
      <div className="flex-1 overflow-hidden relative bg-[#1e1e1e]">
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
          ) : file.name === 'assistant.ai' ? (
            <motion.div
              key="assistant"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="h-full absolute inset-0"
            >
              <Assistant />
            </motion.div>
          ) : (
            <motion.div
              key={file.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="h-full absolute inset-0"
            >
              <CodeViewer content={file.content} type={file.type} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
