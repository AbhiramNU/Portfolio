import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useTabs } from '../hooks/useTabs';
import { getFileIcon } from '../editor/Tabs';

export default function SearchModal({ isOpen, onClose }) {
  const { files, openFile } = useTabs();
  const [query, setQuery] = useState('');

  // Handle escape key to clear or close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = files.filter(f => f.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/40 backdrop-blur-[1px]" onClick={onClose}>
      <div 
        className="bg-[#252526] w-[600px] rounded-md shadow-2xl border border-[#3c3c3c] flex flex-col font-sans" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-[#3c3c3c]">
          <Search size={16} className="text-[#858585] mr-3" />
            <input 
              autoFocus
              type="text" 
              placeholder="Search files by name (e.g. projects.js)"
              className="flex-1 bg-transparent border-none outline-none text-[#d4d4d4] text-[14px]"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  if (filtered.length > 0) {
                    openFile(filtered[0].name);
                    onClose();
                  } else if (query.trim().length > 0) {
                    openFile('404_ERROR.log');
                    onClose();
                  }
                }
              }}
            />
        </div>
        <div className="max-h-[350px] overflow-y-auto py-1 custom-scrollbar">
          {filtered.length === 0 && (
            <div 
              className="px-5 py-4 text-[#f14c4c] text-[13px] hover:bg-[#4d1c1c] cursor-pointer flex flex-col transition-colors border-l-2 border-[#f14c4c] ml-1 bg-[#f14c4c]/5"
              onClick={() => {
                 openFile('404_ERROR.log');
                 onClose();
              }}
            >
              <span className="font-bold text-[14px]">File not found: '{query}'</span>
              <span className="opacity-70 mt-1">Press Enter or click here to execute search anyway...</span>
            </div>
          )}
          {filtered.map(f => (
            <div 
              key={f.name}
              className="flex items-center px-5 py-2.5 cursor-pointer hover:bg-[#04395e] hover:text-white text-[#cccccc] transition-colors group"
              onClick={() => {
                openFile(f.name);
                onClose();
              }}
            >
              <div className="w-[18px] flex justify-center">{getFileIcon(f.name)}</div>
              <span className="ml-[10px] text-[13px]">{f.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
