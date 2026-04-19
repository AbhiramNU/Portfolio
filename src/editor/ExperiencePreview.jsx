import React from 'react';

const ExperienceItem = ({ date, title, company, description, tags, isLast }) => (
  <div className="relative pl-8 mb-12 group">
    {/* Timeline Vertical Line */}
    {!isLast && (
      <div className="absolute left-[3.5px] top-6 bottom-[-24px] w-[1px] bg-[#3c3c3c] group-hover:bg-[#569cd6] transition-colors duration-500"></div>
    )}
    
    {/* Timeline Dot */}
    <div className="absolute left-[-2px] top-[4px] w-[12px] h-[12px] rounded-full border-2 border-[#858585] group-hover:border-[#569cd6] bg-[#1e1e1e] transition-colors duration-500 z-10 flex items-center justify-center">
       <div className="w-[4px] h-[4px] rounded-full bg-transparent group-hover:bg-[#569cd6] transition-colors duration-500"></div>
    </div>

    {/* Date */}
    <div className="text-[#858585] text-[12px] font-mono mb-2 flex items-center group-hover:text-[#d4d4d4] transition-colors duration-300">
      {date}
    </div>

    {/* Title */}
    <h2 className="text-white text-[24px] leading-none mb-2" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif", letterSpacing: '0.02em', transform: 'scaleX(1.1)', transformOrigin: 'left' }}>
      {title}
    </h2>

    {/* Company Link */}
    <div className="text-[#569cd6] text-[13px] font-bold font-mono mb-4 cursor-pointer hover:underline inline-block">
      @ {company}
    </div>

    {/* Description */}
    <p className="text-[#858585] text-[12px] leading-[1.8] font-sans mb-5 max-w-[650px] group-hover:text-[#cccccc] transition-colors duration-300">
      {description}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, idx) => (
        <span key={idx} className="border border-[#114b72] bg-[#0d2a40]/50 text-[#569cd6] px-2.5 py-1 rounded-[4px] text-[10px] font-mono group-hover:bg-[#114b72]/60 transition-colors">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default function ExperiencePreview() {
  const experiences = [
    {
      date: "2024 - Present",
      title: "Junior Software Developer",
      company: "NMAMIT",
      description: "Building intelligent backend systems and AI integrations for research platforms. ML-powered data structuring, RAG pipelines, and scalable APIs handling thousands of dynamic requests daily.",
      tags: ["FastAPI", "Python", "Django", "PostgreSQL", "Docker", "AWS", "GenAI", "React"]
    },
    {
      date: "May 2023 - Dec 2023",
      title: "Data Science Intern",
      company: "Zepto Digital Labs",
      description: "Designed statistical models and optimized dataset workflows leading to actionable insights. Engineered research-backed algorithmic improvements that minimized pipeline latency by 25%.",
      tags: ["Python", "Pandas", "Scikit-Learn", "Tableau", "SQL"]
    },
    {
      date: "Jun 2022 - Aug 2022",
      title: "Back End Intern",
      company: "InnovateTech Solutions",
      description: "Collaborated with senior engineers to implement robust server-side architecture. Focused on containerizing Node.js microservices and building an automated CI/CD deployment pipeline.",
      tags: ["Node.js", "Express", "Docker", "CI/CD", "MongoDB"]
    }
  ];

  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto text-[#d4d4d4] font-mono p-10 custom-scrollbar">
      <div className="max-w-4xl mx-auto pl-4 pb-12">
        
        {/* Comment Header */}
        <p className="text-[#6a9955] mb-6 text-[13px] tracking-wide mt-2">
          // experience.ts - professional journey
        </p>

        <h1 className="text-[58px] leading-none mb-3 text-white drop-shadow-md" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif", letterSpacing: '0.02em', transform: 'scaleX(1.1)', transformOrigin: 'left' }}>
          Experience
        </h1>
        <p className="text-[#858585] text-[13px] tracking-wide mb-16 font-sans">
          interface Career extends Timeline {'{ }'}
        </p>

        {/* Timeline Container */}
        <div className="mt-8 ml-2">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              {...exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
