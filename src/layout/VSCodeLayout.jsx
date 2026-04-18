import React, { useState } from 'react';
import ActivityBar from '../components/ActivityBar';
import Sidebar from '../components/Sidebar';
import StatusBar from '../components/StatusBar';
import Editor from '../editor/Editor';

export default function VSCodeLayout() {
  const [activeActivityTab, setActiveActivityTab] = useState('files');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleActivityTab = (tab) => {
    if (activeActivityTab === tab && isSidebarOpen) {
      setIsSidebarOpen(false);
    } else {
      setActiveActivityTab(tab);
      setIsSidebarOpen(true);
    }
  };
  
  return (
    <div className="flex flex-col h-screen w-full bg-vs-bg overflow-hidden text-white">
      <div className="flex flex-1 overflow-hidden">
        <ActivityBar activeActivityTab={activeActivityTab} setActiveActivityTab={toggleActivityTab} />
        <Sidebar isOpen={isSidebarOpen && activeActivityTab === 'files'} />
        <Editor />
      </div>
      <StatusBar />
    </div>
  );
}
