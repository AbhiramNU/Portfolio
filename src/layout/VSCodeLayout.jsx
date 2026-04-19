import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import ActivityBar from '../components/ActivityBar';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import StatusBar from '../components/StatusBar';
import Editor from '../editor/Editor';
import Terminal from '../components/Terminal';
import SearchModal from '../components/SearchModal';
import { useTabs } from '../hooks/useTabs';

export default function VSCodeLayout() {
  const [activeActivityTab, setActiveActivityTab] = useState('files');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { openFile } = useTabs();

  const toggleActivityTab = (tab) => {
    if (activeActivityTab === tab && isSidebarOpen) {
      setIsSidebarOpen(false);
    } else {
      setActiveActivityTab(tab);
      setIsSidebarOpen(true);
    }
  };
  
  return (
    <div className="flex flex-col h-screen w-full bg-[#1e1e1e] overflow-hidden text-[#cccccc] font-sans relative">
      <TopBar 
        onSearchClick={() => setIsSearchOpen(true)}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onToggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
        onToggleCopilot={() => setIsAssistantOpen(!isAssistantOpen)}
        isSidebarOpen={isSidebarOpen}
        isTerminalOpen={isTerminalOpen}
        isAssistantOpen={isAssistantOpen}
      />
      <div className="flex flex-1 overflow-hidden min-h-0">
        <ActivityBar 
           activeActivityTab={activeActivityTab} 
           setActiveActivityTab={toggleActivityTab} 
           onSearchClick={() => setIsSearchOpen(true)}
           onCopilotClick={() => setIsAssistantOpen(true)}
           onDownloadClick={() => openFile('Abhiram_N_Udupa_Resume.pdf')}
        />
        <Sidebar isOpen={isSidebarOpen && activeActivityTab === 'files'} onCopilotClick={() => setIsAssistantOpen(true)} />
        <div className="flex-1 flex flex-col min-w-0">
          <Editor />
          {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}
        </div>
        {isAssistantOpen && <RightSidebar onClose={() => setIsAssistantOpen(false)} />}
      </div>
      <StatusBar 
        toggleAssistant={() => setIsAssistantOpen(!isAssistantOpen)} 
        isAssistantOpen={isAssistantOpen} 
      />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
