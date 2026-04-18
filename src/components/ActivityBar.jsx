import React from 'react';
import { Files, Search, GitMerge, Blocks, Settings, UserCircle } from 'lucide-react';

export default function ActivityBar({ activeActivityTab, setActiveActivityTab }) {
  const icons = [
    { name: 'files', icon: Files },
    { name: 'search', icon: Search },
    { name: 'git', icon: GitMerge },
    { name: 'extensions', icon: Blocks },
  ];

  return (
    <div className="w-12 h-full bg-vs-activity flex flex-col items-center justify-between py-4 border-r border-[#2b2b2b] shrink-0 z-10">
      <div className="flex flex-col gap-6">
        {icons.map(({ name, icon: Icon }) => (
          <div
            key={name}
            onClick={() => setActiveActivityTab(name)}
            className={`cursor-pointer p-2 rounded-md transition-colors relative group ${
              activeActivityTab === name ? 'text-white' : 'text-vs-text-muted hover:text-white'
            }`}
          >
            {activeActivityTab === name && (
              <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-vs-accent rounded-r" />
            )}
            <Icon size={26} strokeWidth={1.5} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-6 text-vs-text-muted">
        <UserCircle className="cursor-pointer hover:text-white transition-colors" size={26} strokeWidth={1.5} />
        <Settings className="cursor-pointer hover:text-white transition-colors" size={26} strokeWidth={1.5} />
      </div>
    </div>
  );
}
