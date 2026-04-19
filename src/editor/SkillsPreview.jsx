import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, percent, color }) => (
  <div className="flex items-center justify-between mb-3.5 group">
    <div className="w-[35%] text-[11px] text-[#cccccc] font-sans whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-white transition-colors">{name}</div>
    <div className="flex-1 h-[1.5px] bg-[#2d2d2d] rounded-full mx-4 overflow-hidden relative">
      <motion.div 
        className="absolute top-0 left-0 h-full shadow-[0_0_10px_currentColor]"
        style={{ backgroundColor: color, color: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
    <div className="w-8 text-right text-[10px] font-bold" style={{ color }}>{percent}%</div>
  </div>
);

const SkillCategory = ({ title, skills }) => (
  <div className="mb-10">
    <h3 className="text-[#d7ba7d] font-bold tracking-widest text-[11px] uppercase mb-4 border-b border-[#3c3c3c] pb-2">{title}</h3>
    <div className="flex flex-col">
      {skills.map(s => <SkillBar key={s.name} {...s} />)}
    </div>
  </div>
);

export default function SkillsPreview() {
  const leftColumn = [
    {
      title: 'LANGUAGES',
      skills: [
        { name: 'Python', percent: 90, color: '#4ec9b0' },
        { name: 'Java', percent: 80, color: '#dcdcaa' },
        { name: 'JavaScript', percent: 85, color: '#ce9178' },
        { name: 'TypeScript', percent: 75, color: '#569cd6' },
        { name: 'SQL', percent: 85, color: '#c586c0' }
      ]
    },
    {
      title: 'AI - ML - DATA SCIENCE',
      skills: [
        { name: 'PyTorch', percent: 85, color: '#ff5500' },
        { name: 'TensorFlow', percent: 80, color: '#ce9178' },
        { name: 'scikit-learn', percent: 90, color: '#4ec9b0' },
        { name: 'Pandas', percent: 95, color: '#569cd6' },
        { name: 'NumPy', percent: 90, color: '#dcdcaa' },
        { name: 'OpenCV', percent: 80, color: '#c586c0' },
        { name: 'NLTK', percent: 75, color: '#4ec9b0' }
      ]
    },
    {
      title: 'DATABASES',
      skills: [
        { name: 'PostgreSQL', percent: 85, color: '#569cd6' },
        { name: 'MySQL', percent: 80, color: '#dcdcaa' },
        { name: 'MongoDB', percent: 75, color: '#ff5500' }
      ]
    },
    {
      title: 'DEVOPS & TOOLS',
      skills: [
        { name: 'Docker', percent: 80, color: '#569cd6' },
        { name: 'Git', percent: 90, color: '#ff5500' },
        { name: 'Linux', percent: 85, color: '#dcdcaa' },
        { name: 'AWS', percent: 75, color: '#ce9178' },
        { name: 'GitHub Actions', percent: 80, color: '#c586c0' },
        { name: 'Jupyter', percent: 90, color: '#ff5500' }
      ]
    },
    {
      title: 'DESIGN',
      skills: [
        { name: 'Figma', percent: 70, color: '#4ec9b0' },
        { name: 'UI / UX Prototyping', percent: 75, color: '#c586c0' }
      ]
    }
  ];

  const rightColumn = [
    {
      title: 'GENERATIVE AI & LLM FRAMEWORKS',
      skills: [
        { name: 'LangChain', percent: 85, color: '#4ec9b0' },
        { name: 'LangGraph', percent: 75, color: '#ce9178' },
        { name: 'RAG Pipelines', percent: 85, color: '#569cd6' },
        { name: 'Prompt Engineering', percent: 90, color: '#dcdcaa' },
        { name: 'Agentic Workflows', percent: 80, color: '#c586c0' },
        { name: 'Hugging Face', percent: 85, color: '#ff5500' }
      ]
    },
    {
      title: 'BACKEND & APIS',
      skills: [
        { name: 'FastAPI', percent: 90, color: '#4ec9b0' },
        { name: 'Flask', percent: 85, color: '#dcdcaa' },
        { name: 'Django', percent: 75, color: '#569cd6' },
        { name: 'Node.js', percent: 80, color: '#4ec9b0' }
      ]
    },
    {
      title: 'VECTOR DATABASES',
      skills: [
        { name: 'FAISS', percent: 80, color: '#569cd6' },
        { name: 'Pinecone', percent: 85, color: '#c586c0' },
        { name: 'ChromaDB', percent: 75, color: '#4ec9b0' }
      ]
    },
    {
      title: 'FRONTEND',
      skills: [
        { name: 'React', percent: 80, color: '#569cd6' },
        { name: 'Next.js', percent: 75, color: '#ce9178' },
        { name: 'TailwindCSS', percent: 85, color: '#4ec9b0' },
        { name: 'Responsive Design', percent: 90, color: '#dcdcaa' }
      ]
    },
    {
      title: 'DATA ANALYTICS',
      skills: [
        { name: 'Tableau', percent: 75, color: '#c586c0' },
        { name: 'Power BI', percent: 70, color: '#dcdcaa' }
      ]
    }
  ];

  const familiarWith = [
    'Pandas', 'NumPy', 'scikit-learn', 'spaCy', 'NLTK', 'Seaborn', 'Matplotlib',
    'OpenAI API', 'Tableau', 'Power BI', 'C++', 'Java', 'Redis', 'LLM Fine-tuning', 'Vector DBs'
  ];

  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto text-[#d4d4d4] font-mono p-10 custom-scrollbar">
      <div className="max-w-5xl mx-auto pl-4 pb-12">
        
        {/* Comment Header */}
        <p className="text-[#6a9955] mb-6 text-[13px] tracking-wide mt-2">
          // skills.json - frameworks & tools I actually use
        </p>

        <h1 className="text-[54px] leading-tight font-black tracking-tighter text-white drop-shadow-md mb-2" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
          Skills
        </h1>
        <p className="text-[#858585] text-[13px] tracking-wide mb-12 font-sans font-medium">
          {'{'} "status": "always_learning", "passion": "immeasurable" {'}'}
        </p>

        {/* Skills Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
          
          {/* Left Column */}
          <div>
            {leftColumn.map(cat => <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} />)}
          </div>
          
          {/* Right Column */}
          <div>
            {rightColumn.map(cat => <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} />)}
          </div>

        </div>

        {/* Familiar With Badges Row */}
        <div className="mt-4 mb-4">
          <h3 className="text-[#d7ba7d] font-bold tracking-widest text-[11px] uppercase mb-4 border-b border-[#3c3c3c] pb-2">
            ALSO FAMILIAR WITH
          </h3>
          <div className="flex flex-wrap gap-2">
            {familiarWith.map(skill => (
              <span key={skill} className="border border-[#3c3c3c] bg-[#1e1e1e] text-[#858585] px-3 py-1.5 rounded-[4px] text-[10px] hover:text-[#d4d4d4] hover:border-[#858585] transition-colors font-sans cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
