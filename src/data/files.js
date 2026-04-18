export const initialFiles = [
  {
    name: 'about.tsx',
    type: 'tsx',
    content: `import React from 'react';

const Developer = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>Hello, I'm a Senior Frontend Engineer</h1>
      <p>I build exceptional digital experiences.</p>
      <p>I excel in creating modular UI components and immersive layouts.</p>
    </div>
  );
};

export default Developer;`
  },
  {
    name: 'skills.ts',
    type: 'typescript',
    content: `export interface Skills {
  frontend: string[];
  backend: string[];
  cloud: string[];
  tools: string[];
}

export const mySkills: Skills = {
  frontend: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
  backend: ['Node.js', 'Express', 'Python', 'Go'],
  cloud: ['AWS', 'GCP', 'Vercel', 'Docker'],
  tools: ['Git', 'VS Code', 'Figma', 'Prism.js']
};`
  },
  {
    name: 'projects.json',
    type: 'json',
    content: `[
  {
    "name": "Dev Portfolio IDE",
    "description": "A VS Code themed developer portfolio imitating a full editor environment.",
    "tech": ["React", "Tailwind CSS", "Framer Motion", "Prism.js"]
  },
  {
    "name": "AI Assistant Component",
    "description": "An integrated AI editor assistant simulating contextual intelligence.",
    "tech": ["React", "Custom Hooks"]
  },
  {
    "name": "Enterprise Dashboard",
    "description": "A dense analytics dashboard deployed globally for large enterprise data.",
    "tech": ["Next.js", "Redux", "GraphQL", "Tailwind"]
  }
]`
  },
  {
    name: 'experience.md',
    type: 'markdown',
    content: `# Experience

## Senior Frontend Engineer @ Tech Corp (2020 - Present)
- Led frontend transition to React and Next.js
- Improved application performance by 40%
- Mentored junior developers and established CI/CD routines

## Frontend Developer @ Web Solutions (2018 - 2020)
- Developed responsive UI components from Figma files
- Integrated RESTful backend APIs
- Maintained legacy codebases during progressive rewrite`
  },
  {
    name: 'contact.js',
    type: 'javascript',
    content: `const contactInfo = {
  email: "hello@developer.com",
  github: "https://github.com/developer",
  linkedin: "https://linkedin.com/in/developer",
  twitter: "@dev_engineer",
  status: "Open to new opportunities"
};

/**
 * Returns available contact methods
 * @returns {Object} User contact details
 */
export const getContactInfo = () => {
  return contactInfo;
};`
  },
  {
    name: 'assistant.ai',
    type: 'ai',
    content: ''
  }
];
