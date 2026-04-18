import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import '../styles/prism-vsc-dark-plus.css';

export default function CodeViewer({ content, type }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [content, type]);

  // Map file extensions to Prism languages
  const getLanguage = (fileType) => {
    switch (fileType) {
      case 'tsx':
      case 'ts':
        return 'tsx';
      case 'javascript':
      case 'js':
        return 'javascript';
      case 'json':
        return 'json';
      case 'markdown':
      case 'md':
        return 'markdown';
      default:
        return 'javascript';
    }
  };

  const codeLang = getLanguage(type);
  const lines = content.split('\n');

  return (
    <div className="flex h-full w-full bg-[#1e1e1e] overflow-auto custom-scrollbar font-mono text-[14px] leading-[1.6] tracking-[0.3px]">
      <div className="flex flex-col text-[#858585] text-right py-4 pr-4 pl-2 select-none w-12 shrink-0 border-r border-[#404040]">
        {lines.map((_, i) => (
          <div key={i} className="h-[1.6em] leading-[1.6]">{i + 1}</div>
        ))}
      </div>
      <div className="flex-1 py-4 pl-4 text-left overflow-x-auto custom-scrollbar">
        <pre className="m-0 bg-transparent p-0">
          <code className={`language-${codeLang} !font-mono !leading-[1.6] !text-[14px]`}>
            {content}
          </code>
        </pre>
      </div>
    </div>
  );
}
