import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { useTabs } from '../hooks/useTabs';

export default function Terminal({ onClose }) {
  const [activeTab, setActiveTab] = useState('TERMINAL');
  const { files, openFile } = useTabs();

  const [inputVal, setInputVal] = useState('');
  const [currentDir, setCurrentDir] = useState('~');
  const [history, setHistory] = useState([
    { type: 'text', content: "Welcome! Type 'help' to see available commands." }
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(cmdHistory[nextIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(cmdHistory[nextIndex] || '');
      }
    }
  };

  const executeCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    const promptText = `abhiram@portfolio:${currentDir}$`;
    
    // Add command line to terminal output
    const newHistory = [...history, { type: 'cmd', prompt: promptText, command: rawCmd }];
    
    if (trimmed) {
      setCmdHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);
    }

    if (!trimmed) {
      setHistory(newHistory);
      return;
    }

    const parts = trimmed.split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output = null;

    switch (command) {
      case 'help':
        output = (
          <div className="text-[#cccccc] space-y-1 my-1">
            <p className="text-[#4ec9b0] font-semibold">Available commands:</p>
            <p><span className="text-[#ce9178] inline-block w-24">ls</span> - list files in current directory</p>
            <p><span className="text-[#ce9178] inline-block w-24">pwd</span> - print working directory</p>
            <p><span className="text-[#ce9178] inline-block w-24">cd &lt;dir&gt;</span> - change directory (cd .. to go up)</p>
            <p><span className="text-[#ce9178] inline-block w-24">cat &lt;file&gt;</span> - view / open a file in the editor</p>
            <p><span className="text-[#ce9178] inline-block w-24">open &lt;file&gt;</span> - same as cat</p>
            <p><span className="text-[#ce9178] inline-block w-24">whoami</span> - who am I?</p>
            <p><span className="text-[#ce9178] inline-block w-24">echo &lt;text&gt;</span> - print text</p>
            <p><span className="text-[#ce9178] inline-block w-24">date</span> - show current date & time</p>
            <p><span className="text-[#ce9178] inline-block w-24">git log</span> - show recent commits</p>
            <p><span className="text-[#ce9178] inline-block w-24">python</span> - show Python version (--version)</p>
            <p><span className="text-[#ce9178] inline-block w-24">clear</span> - clear the terminal</p>
          </div>
        );
        break;

      case 'ls':
        output = (
          <div className="flex flex-wrap gap-x-6 gap-y-1 my-1 text-[#4ec9b0]">
            {files.map(f => (
              <span key={f.name} className="hover:underline cursor-pointer" onClick={() => openFile(f.name)}>
                {f.name}
              </span>
            ))}
          </div>
        );
        break;

      case 'pwd':
        output = `/home/abhiram/portfolio${currentDir === '~' ? '' : '/' + currentDir}`;
        break;

      case 'cd':
        const targetDir = args[0];
        if (!targetDir || targetDir === '~' || targetDir === '/') {
          setCurrentDir('~');
        } else if (targetDir === '..') {
          setCurrentDir('~');
        } else {
          output = `cd: no such file or directory: ${targetDir}`;
        }
        break;

      case 'cat':
      case 'open':
        if (args.length === 0) {
          output = `usage: ${command} <file>`;
        } else {
          const fileNameInput = args[0].toLowerCase();
          const foundFile = files.find(
            f => f.name.toLowerCase() === fileNameInput || f.name.toLowerCase().startsWith(fileNameInput)
          );
          if (foundFile) {
            openFile(foundFile.name);
            output = (
              <div className="my-1">
                <p className="text-[#4ec9b0]">✓ Opened {foundFile.name} in the editor window.</p>
                <pre className="mt-1 p-2 bg-[#181818] rounded border border-[#333] text-[#d4d4d4] max-h-40 overflow-auto text-xs">
                  {foundFile.content}
                </pre>
              </div>
            );
          } else {
            output = `${command}: ${args[0]}: No such file or directory`;
          }
        }
        break;

      case 'whoami':
        output = 'abhiram (Full Stack & AI Developer @ Sahasranshu Technologies)';
        break;

      case 'echo':
        output = args.join(' ');
        break;

      case 'date':
        output = new Date().toString();
        break;

      case 'git':
        if (args[0] === 'log') {
          output = (
            <div className="text-xs space-y-1 my-1">
              <p><span className="text-[#ce9178]">commit a7f3b89</span> (HEAD -&gt; main)</p>
              <p>Author: Abhiram N Udupa &lt;abhiram@portfolio.dev&gt;</p>
              <p>Date: {new Date().toLocaleDateString()}</p>
              <p className="pl-4 text-[#4ec9b0]">feat: added interactive terminal & ultra-fast custom cursor</p>
            </div>
          );
        } else {
          output = `git: '${args.join(' ')}' is not a git command. See 'git --help'.`;
        }
        break;

      case 'python':
      case 'python3':
        output = 'Python 3.11.4 (main, Jun 2026) [GCC 11.2.0]';
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'sudo':
        output = 'abhiram is not in the sudoers file. This incident will be reported.';
        break;

      default:
        output = `command not found: ${command}. Type 'help' to see available commands.`;
        break;
    }

    if (output !== null) {
      newHistory.push({ type: 'output', content: output });
    }

    setHistory(newHistory);
  };

  return (
    <div 
      className="h-64 w-full bg-[#1e1e1e] border-t border-[#2b2b2b] flex flex-col font-mono text-[13px] shrink-0 z-10 box-border"
      onClick={handleContainerClick}
    >
      <div className="flex justify-between items-center px-4 h-9 mt-1 shrink-0 bg-[#252526] border-b border-[#2b2b2b]">
        <div className="flex space-x-6 uppercase text-[11px] tracking-widest font-semibold flex-1">
          {['TERMINAL', 'PROBLEMS', 'OUTPUT'].map(tab => (
            <span 
              key={tab}
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab(tab);
              }}
              className={`cursor-pointer pb-1 ${activeTab === tab ? 'text-[#e5e5e5] border-b border-[#007acc]' : 'text-[#858585] hover:text-[#d4d4d4]'}`}
            >
              {tab}
            </span>
          ))}
        </div>
        <X 
          size={16} 
          className="text-[#858585] cursor-pointer hover:text-white" 
          onClick={(e) => {
            e.stopPropagation();
            onClose && onClose();
          }} 
        />
      </div>

      <div className="flex-1 p-4 overflow-auto custom-scrollbar text-[#cccccc]">
        {activeTab === 'TERMINAL' && (
          <div className="leading-6 min-h-full">
            {history.map((item, idx) => {
              if (item.type === 'text') {
                return (
                  <div key={idx} className="mb-2 text-[#858585]">
                    {item.content}
                  </div>
                );
              }
              if (item.type === 'cmd') {
                return (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-[#4ec9b0] font-semibold">{item.prompt}</span>
                    <span className="text-[#e5e5e5]">{item.command}</span>
                  </div>
                );
              }
              if (item.type === 'output') {
                return (
                  <div key={idx} className="mb-2 text-[#cccccc]">
                    {item.content}
                  </div>
                );
              }
              return null;
            })}

            {/* Input Line */}
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-[#4ec9b0] font-semibold">abhiram@portfolio:{currentDir}$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none border-none text-[#e5e5e5] font-mono text-[13px] caret-[#007acc]"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        )}

        {activeTab === 'PROBLEMS' && (
          <div className="text-[#858585] italic">No problems detected in workspace. 0 errors, 0 warnings.</div>
        )}

        {activeTab === 'OUTPUT' && (
          <div className="text-[#858585]">
            [Build] Portfolio compiled successfully.<br/>
            [Vite] Ready in 180ms.
          </div>
        )}
      </div>
    </div>
  );
}
