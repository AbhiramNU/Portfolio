import React from 'react';
import { X, ExternalLink, Mail, Phone, MapPin, Award, Github, Linkedin, Briefcase, GraduationCap } from 'lucide-react';
import { useTabs } from '../hooks/useTabs';

export default function AccountModal({ isOpen, onClose }) {
  const { openFile } = useTabs();

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9990] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#252526] border border-[#3c3c3c] w-full max-w-md rounded-2xl p-6 shadow-2xl relative text-[#d4d4d4] font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#3c3c3c] pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4ec9b0] animate-pulse"></span>
            <span className="text-xs font-mono text-[#858585] uppercase tracking-wider font-bold">Developer Profile</span>
          </div>
          <button 
            onClick={onClose}
            className="text-[#858585] hover:text-white p-1 rounded-lg bg-[#1e1e1e] border border-[#333] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4 mb-6">
          <img 
            src="/profile.png" 
            alt="Abhiram N Udupa" 
            className="w-16 h-16 rounded-full border-2 border-[#007acc] object-cover shadow-md shrink-0"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/img1.jpeg";
            }}
          />
          <div>
            <h2 className="text-white text-xl font-bold tracking-tight">Abhiram N Udupa</h2>
            <p className="text-[#4ec9b0] text-xs font-mono">Full-Stack & AI/ML Developer</p>
            <p className="text-[#858585] text-[11px] font-mono mt-0.5">Software Dev Intern @ Sahasranshu Tech</p>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-2 mb-6 bg-[#1e1e1e] p-3 rounded-xl border border-[#333] text-center font-mono text-xs">
          <div>
            <p className="text-[#007acc] font-bold text-sm">7</p>
            <p className="text-[#858585] text-[10px]">Projects</p>
          </div>
          <div className="border-x border-[#333]">
            <p className="text-[#4ec9b0] font-bold text-sm">8.9</p>
            <p className="text-[#858585] text-[10px]">NMAMIT CGPA</p>
          </div>
          <div>
            <p className="text-[#c586c0] font-bold text-sm">7</p>
            <p className="text-[#858585] text-[10px]">Certificates</p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-2.5 text-xs font-mono mb-6 text-[#cccccc] bg-[#1e1e1e]/60 p-4 rounded-xl border border-[#333]">
          <div className="flex items-center gap-3">
            <Mail size={14} className="text-[#007acc]" />
            <a href="mailto:abhiram.udupa@gmail.com" className="hover:underline text-white">abhiram.udupa@gmail.com</a>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={14} className="text-[#4ec9b0]" />
            <span>+91 9686145752</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={14} className="text-[#ce9178]" />
            <span>India IN</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button 
            onClick={() => {
              openFile('Abhiram_N_Udupa_Resume.pdf');
              onClose();
            }}
            className="w-full bg-[#007acc] hover:bg-[#005a9e] text-white py-2.5 rounded-lg text-xs font-mono font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Open Resume PDF</span>
            <ExternalLink size={13} />
          </button>
          
          <div className="flex gap-2">
            <a 
              href="https://github.com/AbhiramNU" 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 border border-[#3c3c3c] bg-[#1e1e1e] hover:bg-[#2d2d2d] text-[#cccccc] hover:text-white py-2 rounded-lg text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
            >
              <Github size={13} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/abhiramnu" 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 border border-[#3c3c3c] bg-[#1e1e1e] hover:bg-[#2d2d2d] text-[#cccccc] hover:text-white py-2 rounded-lg text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
            >
              <Linkedin size={13} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
