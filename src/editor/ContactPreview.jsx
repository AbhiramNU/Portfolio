import React from 'react';
import { Mail, Linkedin, Github, Monitor, Database, Link as LinkIcon, Youtube, Instagram, ArrowUpRight } from 'lucide-react';

const SocialLink = ({ platform, link, icon: Icon, colorClass, borderHoverClass }) => (
  <a href={link.startsWith('http') ? link : `https://${link}`} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between border-b border-[#3c3c3c] py-4 group hover:bg-[#252526] px-3 transition-colors -mx-3 rounded-sm`}>
    <div className="flex items-center">
      <div className={`w-8 h-8 rounded border border-[#3c3c3c] flex items-center justify-center mr-4 bg-[#1e1e1e] transition-colors ${borderHoverClass}`}>
        <Icon size={14} className={colorClass} />
      </div>
      <div className="flex flex-col justify-center">
        <div className={`text-[11px] font-bold ${colorClass.includes('white') || colorClass.includes('cccccc') ? 'text-[#cccccc]' : colorClass} uppercase tracking-widest mb-1`}>{platform}</div>
        <div className="text-[#858585] text-[11px] group-hover:text-[#d4d4d4] transition-colors">{link}</div>
      </div>
    </div>
    <ArrowUpRight size={14} className="text-[#3c3c3c] group-hover:text-[#858585] transition-colors" />
  </a>
);

export default function ContactPreview() {
  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto text-[#d4d4d4] font-mono p-10 custom-scrollbar">
      <div className="max-w-5xl mx-auto pl-4 pb-12">
        
        {/* Comment Header */}
        <p className="text-[#6a9955] mb-6 text-[13px] tracking-wide mt-2">
          /* contact.css - let's build something */
        </p>

        <h1 className="text-[58px] leading-none mb-4 text-white drop-shadow-md" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif", letterSpacing: '0.02em', transform: 'scaleX(1.1)', transformOrigin: 'left' }}>
          Contact
        </h1>
        <p className="text-[#858585] text-[13px] tracking-wide mb-16 font-sans">
          // open to work, collabs & good conversations
        </p>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 ml-2">
          
          {/* Left Column: FIND ME ON */}
          <div>
            <h2 className="text-[#4ec9b0] font-bold tracking-widest text-[12px] uppercase mb-4">FIND ME ON</h2>
            
            <div className="flex flex-col border-t border-[#3c3c3c]">
              <SocialLink 
                platform="Gmail" 
                link="abhiramnudupa@gmail.com" 
                icon={Mail} 
                colorClass="text-[#4ec9b0]" 
                borderHoverClass="group-hover:border-[#4ec9b0]"
              />
              <SocialLink 
                platform="LinkedIn" 
                link="linkedin.com/in/abhiram-n-udupa" 
                icon={Linkedin} 
                colorClass="text-[#0a66c2]" 
                borderHoverClass="group-hover:border-[#0a66c2]"
              />
              <SocialLink 
                platform="GitHub" 
                link="github.com/abhiramnudupa" 
                icon={Github} 
                colorClass="text-[#cccccc]" 
                borderHoverClass="group-hover:border-[#cccccc]"
              />
              <SocialLink 
                platform="Medium" 
                link="medium.com/@abhiramnudupa" 
                icon={Monitor} 
                colorClass="text-[#cccccc]" 
                borderHoverClass="group-hover:border-[#cccccc]"
              />
              <SocialLink 
                platform="Tableau" 
                link="Tableau Public Vizzes" 
                icon={Database} 
                colorClass="text-[#e97b39]" 
                borderHoverClass="group-hover:border-[#e97b39]"
              />
              <SocialLink 
                platform="LeetCode" 
                link="leetcode.com/abhiramnudupa" 
                icon={LinkIcon} 
                colorClass="text-[#ffa116]" 
                borderHoverClass="group-hover:border-[#ffa116]"
              />
              <SocialLink 
                platform="YouTube" 
                link="youtube.com/@abhiramnudupa" 
                icon={Youtube} 
                colorClass="text-[#ff0000]" 
                borderHoverClass="group-hover:border-[#ff0000]"
              />
              <SocialLink 
                platform="Instagram" 
                link="instagram.com/abhiramnudupa" 
                icon={Instagram} 
                colorClass="text-[#e1306c]" 
                borderHoverClass="group-hover:border-[#e1306c]"
              />
            </div>
          </div>

          {/* Right Column: SEND A MESSAGE */}
          <div>
            <h2 className="text-[#4ec9b0] font-bold tracking-widest text-[12px] uppercase mb-4">SEND A MESSAGE</h2>
            
            <form action="https://formspree.io/f/mzdygyyn" method="POST" className="mt-4 flex flex-col space-y-6">
              <div>
                <label className="block text-[#858585] text-[11px] font-mono mb-2.5 font-bold tracking-wide">
                  // YOUR_NAME <span className="text-[#f14c4c]">*</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="string" 
                  className="w-full bg-[#1e1e1e] border border-[#3c3c3c] p-3 text-[#d4d4d4] text-[12px] font-mono focus:outline-none focus:border-[#007acc] placeholder-[#569cd6]/60 rounded-sm shadow-inner transition-colors" 
                  required 
                />
              </div>

              <div>
                <label className="block text-[#858585] text-[11px] font-mono mb-2.5 font-bold tracking-wide">
                  // YOUR_EMAIL <span className="text-[#f14c4c]">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="string" 
                  className="w-full bg-[#1e1e1e] border border-[#3c3c3c] p-3 text-[#d4d4d4] text-[12px] font-mono focus:outline-none focus:border-[#007acc] placeholder-[#569cd6]/60 rounded-sm shadow-inner transition-colors" 
                  required 
                />
              </div>

              <div>
                <label className="block text-[#858585] text-[11px] font-mono mb-2.5 font-bold tracking-wide">
                  // SUBJECT
                </label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="string" 
                  className="w-full bg-[#1e1e1e] border border-[#3c3c3c] p-3 text-[#d4d4d4] text-[12px] font-mono focus:outline-none focus:border-[#007acc] placeholder-[#569cd6]/60 rounded-sm shadow-inner transition-colors" 
                />
              </div>

              <div>
                <label className="block text-[#858585] text-[11px] font-mono mb-2.5 font-bold tracking-wide">
                  // MESSAGE <span className="text-[#f14c4c]">*</span>
                </label>
                <textarea 
                  rows={5} 
                  name="message"
                  placeholder='""" your message """' 
                  className="w-full bg-[#1e1e1e] border border-[#3c3c3c] p-3 text-[#d4d4d4] text-[12px] font-mono focus:outline-none focus:border-[#007acc] placeholder-[#ce9178]/60 rounded-sm shadow-inner transition-colors resize-none" 
                  required 
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#007acc] hover:bg-[#005a9e] text-white py-3 mt-2 text-[12px] font-bold font-mono transition-colors rounded-sm flex items-center justify-center shadow-md active:scale-[0.99]"
              >
                + send_message()
              </button>
              
              <p className="text-[#858585] text-[10px] mt-1 font-mono tracking-widest text-center md:text-left">
                // Powered by Formspree (lands directly in my inbox) :p
              </p>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
