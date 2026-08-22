import React from 'react';
import { Files, Search, GitMerge, FileDown, Sparkles, Settings, UserCircle } from 'lucide-react';

export default function ActivityBar({ 
  activeActivityTab, 
  setActiveActivityTab, 
  onSearchClick, 
  onCopilotClick, 
  onDownloadClick,
  onAccountClick,
  onSettingsClick 
}) {
  const icons = [
    { name: 'files', icon: Files, title: 'Explorer' },
    { name: 'search', icon: Search, onClick: onSearchClick, title: 'Search Files' },
    { 
      name: 'github', 
      icon: GitMerge, 
      onClick: () => window.open('https://github.com/AbhiramNU', '_blank'),
      animClass: "hover:rotate-12 hover:scale-110 hover:text-[#007acc] transition-all duration-300",
      title: 'GitHub Profile'
    },
    { 
      name: 'download', 
      icon: FileDown, 
      onClick: onDownloadClick,
      animClass: "hover:translate-y-[2px] transition-transform duration-200",
      title: 'Download Resume'
    },
    { 
      name: 'copilot', 
      icon: Sparkles, 
      onClick: onCopilotClick,
      animClass: "hover:rotate-180 hover:text-[#a855f7] transition-all duration-500",
      title: "Abhiram's Copilot AI"
    },
  ];

  return (
    <div className="w-12 h-full bg-vs-activity flex flex-col items-center justify-between py-4 border-r border-[#2b2b2b] shrink-0 z-10">
      <div className="flex flex-col gap-6">
        {icons.map(({ name, icon: Icon, onClick, animClass, title }) => {
          const isActive = activeActivityTab === name && !onClick;
          
          return (
            <div
              key={name}
              title={title}
              onClick={() => {
                if (onClick) onClick();
                else setActiveActivityTab(name);
              }}
              className={`cursor-pointer p-2 rounded-md relative group flex justify-center items-center ${
                isActive ? 'text-white' : 'text-vs-text-muted hover:text-white transition-colors'
              }`}
            >
              {isActive && (
                <div className="absolute left-[-2px] inset-y-0 w-[2px] bg-vs-accent rounded-r" />
              )}
              <div className={animClass || ''}>
                 <Icon size={26} strokeWidth={1.5} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-6 text-vs-text-muted items-center pb-2">
        <UserCircle 
          onClick={onAccountClick}
          className="cursor-pointer hover:text-white hover:scale-110 transition-all duration-200" 
          size={26} 
          strokeWidth={1.5} 
          title="Account / Developer Profile"
        />
        <Settings 
          onClick={onSettingsClick}
          className="cursor-pointer hover:text-white hover:rotate-90 transition-transform duration-300" 
          size={26} 
          strokeWidth={1.5} 
          title="Preferences & Settings"
        />
      </div>
    </div>
  );
}
