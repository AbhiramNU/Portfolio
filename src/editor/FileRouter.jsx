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

export default function FileRouter({ content, type, name }) {
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
