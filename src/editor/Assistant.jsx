import React, { useState, useEffect, useRef } from 'react';
import { useAssistant } from '../hooks/useAssistant';
import { Send, Bot, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Assistant() {
  const { messages, sendMessage, queryCount, limitReached } = useAssistant();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || limitReached) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] text-[#d4d4d4] relative pattern-dots p-4 md:p-8">
      <div className="flex-1 overflow-y-auto mb-4 custom-scrollbar space-y-6">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-3 max-w-full md:max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg ${
              msg.sender === 'user' ? 'bg-[#569cd6]' : 'bg-[#007acc]'
            }`}>
              {msg.sender === 'user' ? <User size={16} className="text-[#1e1e1e]" /> : <Bot size={16} className="text-white" />}
            </div>
            <div className={`px-5 py-3 rounded-lg text-sm shadow-md font-mono leading-relaxed tracking-wide ${
              msg.sender === 'user' ? 'bg-[#2d2d2d] border border-[#3c3c3c] text-white' : 'bg-[#252526] border border-[#007acc]/40 text-[#d4d4d4]'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="shrink-0 pt-4 border-t border-[#333]">
        <div className="flex items-center gap-3 mb-3 px-1">
          <span className="text-[11px] text-[#858585] font-mono uppercase tracking-wider font-bold">
            {3 - queryCount} Queries Remaining
          </span>
          <div className="flex-1 h-[4px] bg-[#333] rounded overflow-hidden">
            <motion.div 
              className="h-full bg-[#007acc]"
              initial={{ width: '0%' }}
              animate={{ width: `${(queryCount / 3) * 100}%` }}
            />
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="relative flex items-center group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={limitReached}
            placeholder={limitReached ? "Query limit reached." : "Ask me anything (e.g., 'skills', 'projects')..."}
            className="w-full bg-[#1e1e1e] border-2 border-[#333] rounded-md shadow-sm px-4 py-3 text-[14px] focus:outline-none focus:border-[#007acc] text-[#d4d4d4] font-mono disabled:opacity-50 transition-colors cursor-pointer"
          />
          <button 
            type="submit" 
            disabled={limitReached || !input.trim()}
            className="absolute right-3 p-2 text-[#007acc] hover:bg-[#007acc]/20 rounded transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
