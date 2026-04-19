import React, { useState, useRef, useEffect } from 'react';
import { useTabs } from '../hooks/useTabs';

const MenuItem = ({ label, shortcut, onClick, className = "", bold = false }) => (
  <div 
    className={`flex items-center justify-between px-6 py-[4px] cursor-pointer hover:bg-[#007acc] hover:text-white transition-none ${className} ${bold ? 'font-semibold' : ''}`}
    onClick={(e) => {
      e.stopPropagation();
      onClick && onClick();
    }}
  >
    <span>{label}</span>
    {shortcut && <span className="text-[11px] opacity-60 ml-8 tracking-wider">{shortcut}</span>}
  </div>
);

const MenuDivider = () => <div className="h-[1px] bg-[#3c3c3c] my-1"></div>;

const PanelLeftIcon = ({ active }) => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" />
    <path d="M1.5 3C1.5 2.17 2.17 1.5 3 1.5H5.5V14.5H3C2.17 14.5 1.5 13.82 1.5 13V3Z" fill="currentColor" stroke="none" opacity={active ? 1 : 0.3}/>
    <line x1="5.5" y1="1.5" x2="5.5" y2="14.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const PanelBottomIcon = ({ active }) => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" />
    <path d="M1.5 10.5H14.5V13C14.5 13.82 13.82 14.5 13 14.5H3C2.17 14.5 1.5 13.82 1.5 13V10.5Z" fill="currentColor" stroke="none" opacity={active ? 1 : 0.3}/>
    <line x1="1.5" y1="10.5" x2="14.5" y2="10.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const PanelRightIcon = ({ active }) => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" />
    <path d="M10.5 1.5H13C13.82 1.5 14.5 2.17 14.5 3V13C14.5 13.82 13.82 14.5 13 14.5H10.5V1.5Z" fill="currentColor" stroke="none" opacity={active ? 1 : 0.3}/>
    <line x1="10.5" y1="1.5" x2="10.5" y2="14.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export default function TopBar({ onSearchClick, onToggleSidebar, onToggleTerminal, onToggleCopilot, isSidebarOpen, isTerminalOpen, isAssistantOpen }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);
  const { files, openFile, activeTab, closeTab, closeAllTabs } = useTabs();

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleZoom = (val) => {
    const currentZoom = parseFloat(document.body.style.zoom || 1);
    document.body.style.zoom = currentZoom + val;
    setActiveMenu(null);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setActiveMenu(null);
  };

  const TopButton = ({ name }) => (
    <div className="relative">
      <div 
        className={`cursor-pointer px-2 py-[2px] rounded text-[13px] ${activeMenu === name ? 'bg-white/10 text-white' : 'hover:bg-white/10 text-[#cccccc]'}`}
        onClick={() => setActiveMenu(activeMenu === name ? null : name)}
      >
        {name}
      </div>

      {activeMenu === 'File' && name === 'File' && (
        <div className="absolute top-full left-0 mt-[2px] bg-[#252526] border border-[#3c3c3c] shadow-2xl min-w-[240px] rounded-md py-1.5 z-50 whitespace-nowrap text-[#cccccc]">
          <MenuItem label="New Tab" shortcut="Ctrl+T" onClick={() => setActiveMenu(null)} />
          <MenuItem label="Open File..." shortcut="Ctrl+P" onClick={onSearchClick} />
          <MenuDivider />
          <MenuItem label="Close Tab" shortcut="Ctrl+W" onClick={() => { if (activeTab) closeTab(activeTab); setActiveMenu(null); }} />
          <MenuItem label="Close All Tabs" onClick={() => { closeAllTabs(); setActiveMenu(null); }} />
          <MenuDivider />
          <div className="px-6 py-2 text-[10px] text-[#858585] tracking-widest font-bold">OPEN RECENT</div>
          {files.slice(0, 4).map(f => (
            <MenuItem key={f.name} label={f.name} onClick={() => { openFile(f.name); setActiveMenu(null); }} bold={true} />
          ))}
          <MenuDivider />
          <MenuItem label="Download Resume" onClick={() => { openFile('Abhiram_N_Udupa_Resume.pdf'); setActiveMenu(null); }} />
        </div>
      )}

      {activeMenu === 'Edit' && name === 'Edit' && (
        <div className="absolute top-full left-0 mt-[2px] bg-[#252526] border border-[#3c3c3c] shadow-2xl min-w-[230px] rounded-md py-1.5 z-50 whitespace-nowrap text-[#cccccc]">
          <MenuItem label="Find..." shortcut="Ctrl+P" onClick={onSearchClick} />
          <MenuDivider />
          <MenuItem label="Select All" shortcut="Ctrl+A" onClick={() => { document.getSelection().selectAllChildren(document.body); setActiveMenu(null); }} />
          <MenuItem label="Copy" shortcut="Ctrl+C" onClick={() => { document.execCommand('copy'); setActiveMenu(null); }} />
        </div>
      )}

      {activeMenu === 'View' && name === 'View' && (
        <div className="absolute top-full left-0 mt-[2px] bg-[#252526] border border-[#3c3c3c] shadow-2xl min-w-[260px] rounded-md py-1.5 z-50 whitespace-nowrap text-[#cccccc]">
          <MenuItem label="Command Palette" shortcut="Ctrl+P" onClick={onSearchClick} />
          <MenuItem label="Toggle Sidebar" shortcut="Ctrl+B" onClick={() => { onToggleSidebar(); setActiveMenu(null); }} />
          <MenuItem label="Toggle Terminal" shortcut="Ctrl+`" onClick={() => { onToggleTerminal(); setActiveMenu(null); }} />
          <MenuItem label="✨ Abhiram's Copilot" shortcut="Ctrl+Shift+C" onClick={() => { onToggleCopilot(); setActiveMenu(null); }} className="text-[#c084fc]" />
          <MenuDivider />
          <MenuItem label="Enter Full Screen" shortcut="F11" onClick={handleFullscreen} />
          <MenuItem label="Zoom In" shortcut="Ctrl++" onClick={() => handleZoom(0.1)} />
          <MenuItem label="Zoom Out" shortcut="Ctrl+-" onClick={() => handleZoom(-0.1)} />
          <MenuItem label="Reset Zoom" onClick={() => { document.body.style.zoom = 1; setActiveMenu(null); }} />
        </div>
      )}

      {activeMenu === 'Go' && name === 'Go' && (
        <div className="absolute top-full left-0 mt-[2px] bg-[#252526] border border-[#3c3c3c] shadow-2xl min-w-[240px] rounded-md py-1.5 z-50 whitespace-nowrap text-[#cccccc]">
          <MenuItem label="Go to File..." shortcut="Ctrl+P" onClick={onSearchClick} />
          <MenuDivider />
          <div className="px-6 py-2 text-[10px] text-[#858585] tracking-widest font-bold">FILES</div>
          {files.map(f => (
            <MenuItem 
              key={f.name} 
              label={f.name} 
              onClick={() => { openFile(f.name); setActiveMenu(null); }} 
              bold={true}
            />
          ))}
        </div>
      )}

      {activeMenu === 'Run' && name === 'Run' && (
        <div className="absolute top-full left-0 mt-[2px] bg-[#252526] border border-[#3c3c3c] shadow-2xl min-w-[280px] rounded-md py-1.5 z-50 whitespace-nowrap text-[#cccccc]">
          <MenuItem label="Start Debugging ▷" shortcut="F5" onClick={() => { window.open('https://youtu.be/QDia3e12czc?si=1hBJ9M3LvK9GDi_5', '_blank'); setActiveMenu(null); }} />
          <MenuItem label="Run Without Debugging ▷" shortcut="Ctrl+F5" onClick={() => { window.open('https://youtu.be/QDia3e12czc?si=1hBJ9M3LvK9GDi_5', '_blank'); setActiveMenu(null); }} />
        </div>
      )}

      {activeMenu === 'Terminal' && name === 'Terminal' && (
        <div className="absolute top-full left-0 mt-[2px] bg-[#252526] border border-[#3c3c3c] shadow-2xl min-w-[240px] rounded-md py-1.5 z-50 whitespace-nowrap text-[#cccccc]">
          <MenuItem label="New Terminal" shortcut="Ctrl+`" onClick={() => { onToggleTerminal(); setActiveMenu(null); }} />
          <MenuItem label="Toggle Terminal" shortcut="Ctrl+`" onClick={() => { onToggleTerminal(); setActiveMenu(null); }} />
          <MenuDivider />
          <MenuItem label="Clear Terminal" onClick={() => setActiveMenu(null)} />
        </div>
      )}

      {activeMenu === 'Help' && name === 'Help' && (
        <div className="absolute top-full left-0 mt-[2px] bg-[#252526] border border-[#3c3c3c] shadow-2xl min-w-[300px] rounded-md py-1.5 z-50 whitespace-nowrap text-[#cccccc]">
          <MenuItem label="Command Palette" shortcut="Ctrl+P" onClick={onSearchClick} />
          <MenuDivider />
          <div className="flex gap-4 px-6 py-2 text-[11px] text-[#858585] tracking-widest font-bold">
            <span>KEYBOARD</span> <span>SHORTCUTS</span>
          </div>
          <div className="px-6 py-1"><span className="bg-[#3c3c3c]/50 text-[#cccccc] px-2 py-0.5 rounded text-[11px] font-mono mr-4 inline-block w-[110px] text-center">Ctrl+P</span> <span className="text-[#858585]">Go to file</span></div>
          <div className="px-6 py-1"><span className="bg-[#3c3c3c]/50 text-[#cccccc] px-2 py-0.5 rounded text-[11px] font-mono mr-4 inline-block w-[110px] text-center">Ctrl+B</span> <span className="text-[#858585]">Toggle sidebar</span></div>
          <div className="px-6 py-1"><span className="bg-[#3c3c3c]/50 text-[#cccccc] px-2 py-0.5 rounded text-[11px] font-mono mr-4 inline-block w-[110px] text-center">Ctrl+`</span> <span className="text-[#858585]">Toggle terminal</span></div>
          <div className="px-6 py-1"><span className="bg-[#3c3c3c]/50 text-[#cccccc] px-2 py-0.5 rounded text-[11px] font-mono mr-4 inline-block w-[110px] text-center">Ctrl+Shift+C</span> <span className="text-[#858585]">Toggle Copilot ✨</span></div>
          <div className="px-6 py-1"><span className="bg-[#3c3c3c]/50 text-[#cccccc] px-2 py-0.5 rounded text-[11px] font-mono mr-4 inline-block w-[110px] text-center">Esc</span> <span className="text-[#858585]">Close overlay</span></div>
          <MenuDivider />
          <MenuItem label="GitHub ↗" onClick={() => { window.open('https://github.com/abhiramnudupa', '_blank'); setActiveMenu(null); }} />
          <MenuItem label="About" onClick={() => { openFile('about.html'); setActiveMenu(null); }} />
        </div>
      )}
    </div>
  );

  return (
    <div className="h-9 w-full bg-[#1e1e1e] flex items-center justify-between px-3 text-[#cccccc] text-[13px] border-b border-[#2b2b2b] select-none shrink-0 font-sans z-50">
      <div className="flex items-center h-full" ref={menuRef}>
        {/* Fake Mac Buttons */}
        <div className="flex items-center space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="hidden md:flex items-center space-x-1.5 text-[13px] text-[#cccccc]">
          <TopButton name="File" />
          <TopButton name="Edit" />
          <TopButton name="View" />
          <TopButton name="Go" />
          <TopButton name="Run" />
          <TopButton name="Terminal" />
          <TopButton name="Help" />
        </div>
      </div>
      <div className="flex-1 flex justify-center absolute left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-3">
          <div onClick={onSearchClick} className="bg-[#2d2d2d] hover:bg-[#333333] cursor-pointer text-[#cccccc] border border-[#3c3c3c] hover:border-[#569cd6] rounded-md px-3 py-[3px] text-[12px] flex items-center justify-center w-[320px] shadow-sm transition-colors">
            <span className="mr-2 text-[#007acc]">🔍</span>
            <span>abhiram : portfolio <span className="opacity-40 ml-4 font-mono">Ctrl P</span></span>
          </div>
          <div className="hidden lg:flex items-center gap-0.5">
            <div onClick={onToggleSidebar} className={`cursor-pointer p-1 rounded hover:bg-white/10 transition-colors ${isSidebarOpen ? 'text-[#cccccc]' : 'text-[#858585]'}`}>
              <PanelLeftIcon active={isSidebarOpen} />
            </div>
            <div onClick={onToggleTerminal} className={`cursor-pointer p-1 rounded hover:bg-white/10 transition-colors ${isTerminalOpen ? 'text-[#cccccc]' : 'text-[#858585]'}`}>
              <PanelBottomIcon active={isTerminalOpen} />
            </div>
            <div onClick={onToggleCopilot} className={`cursor-pointer p-1 rounded hover:bg-white/10 transition-colors ${isAssistantOpen ? 'text-[#cccccc]' : 'text-[#858585]'}`}>
              <PanelRightIcon active={isAssistantOpen} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        {/* Profile icon placeholder */}
        <div className="w-[20px] h-[20px] rounded-full bg-[#a855f7] flex items-center justify-center text-[9px] font-bold text-white shadow-md">
          AB
        </div>
      </div>
    </div>
  );
}
