import React, { useState, createContext, useContext } from 'react';
import { initialFiles } from '../data/files';

const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [files] = useState(initialFiles);
  const [activeTab, setActiveTab] = useState('home.tsx');
  const [openTabs, setOpenTabs] = useState([files[0]]);

  const openFile = (fileName) => {
    const file = files.find(f => f.name === fileName);
    if (!file) return;
    if (!openTabs.find(t => t.name === fileName)) {
      setOpenTabs([...openTabs, file]);
    }
    setActiveTab(fileName);
  };

  const closeTab = (fileName, e) => {
    e && e.stopPropagation();
    const newTabs = openTabs.filter(t => t.name !== fileName);
    setOpenTabs(newTabs);
    
    if (activeTab === fileName) {
      if (newTabs.length > 0) setActiveTab(newTabs[newTabs.length - 1].name);
      else setActiveTab(null);
    }
  };

  const closeAllTabs = () => {
    setOpenTabs([]);
    setActiveTab(null);
  };

  return (
    <TabContext.Provider value={{ files, openTabs, activeTab, openFile, closeTab, closeAllTabs, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabs = () => useContext(TabContext);
