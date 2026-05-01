import React from 'react';
import CodeViewer from './CodeViewer';
import MarkdownPreview from './MarkdownPreview';
import HomePreview from './HomePreview';
import AboutPreview from './AboutPreview';
import ProjectsPreview from './ProjectsPreview';
import SkillsPreview from './SkillsPreview';
import ExperiencePreview from './ExperiencePreview';
import ContactPreview from './ContactPreview';
import ResumePreview from './ResumePreview';

import { ShieldAlert } from 'lucide-react';

export default function FileRouter({ content, type, name }) {
  if (name === '404_ERROR.log') {
    return (
      <div className="flex-1 w-full h-full bg-[#1e1e1e] p-8 font-mono text-[14px] overflow-y-auto custom-scrollbar">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-[#f14c4c] mb-6">
            <ShieldAlert size={28} />
            <h2 className="text-2xl font-bold tracking-wide">Uncaught TypeError: File Not Found</h2>
          </div>
          <div className="text-[#cccccc] space-y-2 ml-2 border-l border-[#3c3c3c] pl-6 py-2">
            <p>at Object.search <span className="text-[#858585]">(d:\vscode-portfolio\src\components\SearchModal.jsx:42:15)</span></p>
            <p>at User.request <span className="text-[#858585]">(brain: memory access violation)</span></p>
            <p>at Portfolio.query <span className="text-[#858585]">(attempting to read non-existent module)</span></p>
            
            <div className="mt-8 text-[#e3d04c] text-sm border-l-4 border-[#e3d04c] pl-4 py-3 bg-[#e3d04c]/10 rounded-r-md">
              <strong className="text-lg block mb-2 text-white">System Diagnostics:</strong>
              The requested feature or file does not currently exist in the repository. <br/><br/>
              <span className="text-white">Action required:</span> <a href="mailto:abhiramnudupa@gmail.com" className="text-[#569cd6] hover:underline font-bold">Hire Abhiram N Udupa</a> to build it for you.
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === 'README.md') {
    return <MarkdownPreview />;
  }
  if (name === 'home.tsx') {
    return <HomePreview />;
  }
  if (name === 'about.html') {
    return <AboutPreview />;
  }
  if (name === 'projects.js') {
    return <ProjectsPreview />;
  }
  if (name === 'skills.json') {
    return <SkillsPreview />;
  }
  if (name === 'experience.ts') {
    return <ExperiencePreview />;
  }
  if (name === 'contact.css') {
    return <ContactPreview />;
  }
  if (name === 'Abhiram_N_Udupa_Resume.pdf') {
    return <ResumePreview />;
  }
  return <CodeViewer content={content} type={type} />;
}
