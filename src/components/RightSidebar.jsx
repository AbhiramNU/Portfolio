import React, { useState, useEffect, useRef } from 'react';
import { useAssistant } from '../hooks/useAssistant';
import { Send, Bot, User, PenSquare, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RightSidebar() {
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
    <div className="w-[320px] h-full bg-[#1e1e1e] border-l border-[#2b2b2b] flex flex-col shrink-0 font-sans">
      <div className="h-[40px] px-4 flex items-center justify-between border-b border-[#2b2b2b]">
        <div className="flex items-center text-[#e5e5e5] text-[12px] font-semibold">
          <Bot size={14} className="mr-2 text-[#a855f7]" />
          Abhiram's AI Assistant
        </div>
        <div className="flex items-center space-x-3 text-[#858585]">
          <PenSquare size={14} className="cursor-pointer hover:text-white" />
          <X size={16} className="cursor-pointer hover:text-white" />
        </div>
      </div>
      
      <div className="px-4 py-2 border-b border-[#2b2b2b]">
         <div className="text-[10px] text-[#858585] mb-1 font-bold">WORKSPACE</div>
         <div className="bg-[#2d2d2d] border border-[#3c3c3c] rounded px-2 py-1 text-[11px] text-[#007acc] inline-block">
            ● portfolio - abhiram
         </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
            {msg.sender === 'ai' && (
               <div className="flex items-center mb-1">
                 <div className="w-5 h-5 rounded-full bg-[#3c3c3c] flex items-center justify-center mr-2">
                   <Bot size={12} className="text-[#a855f7]" />
                 </div>
                 <span className="text-[11px] text-[#858585]">Abhiram's Copilot</span>
               </div>
            )}
            <div className={`px-4 py-3 rounded-lg text-[13px] leading-relaxed shadow-sm max-w-[90%] ${
              msg.sender === 'user' ? 'bg-[#2d2d2d] border border-[#3c3c3c] text-[#e5e5e5]' : 'border border-[#3c3c3c] text-[#cccccc]'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-[#2b2b2b] bg-[#1e1e1e]">
        <div className="flex items-center justify-center text-[11px] text-[#cca700] mb-3 font-semibold space-x-1">
           <span className="text-[#cca700]">⚡</span>
           <span>{3 - queryCount} message{3 - queryCount !== 1 ? 's' : ''} left, support Abhiram!</span>
        </div>

        <div className="space-y-1 mb-3">
           <div className="text-[11px] text-[#858585] hover:text-[#d4d4d4] cursor-pointer border border-[#3c3c3c] rounded px-2 py-1.5 flex items-center">
             <span className="mr-2">✨</span> tell me about Abhiram?
           </div>
           <div className="text-[11px] text-[#858585] hover:text-[#d4d4d4] cursor-pointer border border-[#3c3c3c] rounded px-2 py-1.5 flex items-center">
             <span className="mr-2">✨</span> What projects has Abhiram...
           </div>
        </div>
        
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={limitReached}
            placeholder={limitReached ? "Query limit reached." : "Ask about Abhiram's projects..."}
            className="w-full bg-[#2d2d2d] border border-[#3c3c3c] rounded-md px-3 py-2 text-[12px] text-[#cccccc] focus:outline-none focus:border-[#007acc] disabled:opacity-50"
          />
          <button 
            type="submit" 
            disabled={limitReached || !input.trim()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#a855f7] hover:text-[#c084fc] disabled:opacity-30 p-1"
          >
            <Send size={14} />
          </button>
        </form>
        <div className="text-[10px] text-[#858585] text-center mt-2">
           AI can make mistakes - Contact Abhiram directly
        </div>
      </div>
    </div>
  );
}
