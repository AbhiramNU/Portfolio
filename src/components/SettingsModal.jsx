import React, { useState } from 'react';
import { X, Palette, MousePointer, Volume2, RotateCcw, Check } from 'lucide-react';
import { useTabs } from '../hooks/useTabs';

export default function SettingsModal({ isOpen, onClose }) {
  const { openFile, closeAllTabs } = useTabs();
  
  const [activeTheme, setActiveTheme] = useState('VS Code Dark+');
  const [soundEnabled, setSoundEnabled] = useState(true);

  if (!isOpen) return null;

  const themes = [
    { name: 'VS Code Dark+', color: '#007acc', tag: 'Default' },
    { name: 'One Dark Pro', color: '#61afef', tag: 'Atom Dark' },
    { name: 'Monokai Pro', color: '#ffd866', tag: 'Gold Accent' },
    { name: 'Cyberpunk Neon', color: '#ff007f', tag: 'Neon Pink' },
    { name: 'Emerald Matrix', color: '#4ec9b0', tag: 'Mint Green' }
  ];

  const handleThemeSelect = (themeName) => {
    setActiveTheme(themeName);
  };

  const handleResetWorkspace = () => {
    closeAllTabs();
    openFile('home.tsx');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[9990] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#252526] border border-[#3c3c3c] w-full max-w-lg rounded-2xl p-6 shadow-2xl relative text-[#d4d4d4] font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#3c3c3c] pb-4 mb-5">
          <div className="flex items-center gap-2">
            <Palette size={16} className="text-[#007acc]" />
            <span className="text-xs font-mono text-white uppercase tracking-wider font-bold">Preferences & Settings</span>
          </div>
          <button 
            onClick={onClose}
            className="text-[#858585] hover:text-white p-1 rounded-lg bg-[#1e1e1e] border border-[#333] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Section 1: Color Accent Theme */}
        <div className="mb-6">
          <label className="text-xs font-mono uppercase tracking-wider text-[#858585] font-bold block mb-3">
            // Color Accent Theme
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {themes.map((t) => (
              <div 
                key={t.name}
                onClick={() => handleThemeSelect(t.name)}
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                  activeTheme === t.name 
                    ? 'bg-[#1e1e1e] border-[#007acc] text-white shadow-md' 
                    : 'bg-[#1e1e1e]/60 border-[#333] text-[#858585] hover:text-[#cccccc] hover:border-[#555]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full shrink-0" style={{ backgroundColor: t.color }}></span>
                  <span className="text-xs font-mono font-medium">{t.name}</span>
                </div>
                {activeTheme === t.name && <Check size={14} className="text-[#007acc]" />}
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Audio & Feedback */}
        <div className="mb-6 bg-[#1e1e1e] p-4 rounded-xl border border-[#333] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Volume2 size={18} className="text-[#4ec9b0]" />
            <div>
              <p className="text-xs font-mono font-bold text-white">Keyboard Audio Feedback</p>
              <p className="text-[11px] text-[#858585] font-sans">Subtle click sounds when typing in terminal or opening tabs</p>
            </div>
          </div>
          <button 
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`w-11 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer ${
              soundEnabled ? 'bg-[#007acc]' : 'bg-[#3c3c3c]'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
              soundEnabled ? 'translate-x-5' : 'translate-x-0'
            }`} />
          </button>
        </div>

        {/* Section 3: Reset Workspace */}
        <div className="pt-4 border-t border-[#333] flex items-center justify-between">
          <div>
            <p className="text-xs font-mono font-bold text-white">Reset IDE Workspace</p>
            <p className="text-[11px] text-[#858585] font-sans">Reset open tabs and return to home screen</p>
          </div>
          <button 
            onClick={handleResetWorkspace}
            className="inline-flex items-center gap-1.5 border border-[#3c3c3c] bg-[#1e1e1e] hover:bg-[#ff5500]/20 hover:border-[#ff5500] text-[#cccccc] hover:text-white px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        </div>

      </div>
    </div>
  );
}
