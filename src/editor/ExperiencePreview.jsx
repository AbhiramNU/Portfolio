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
      date: "June 2026 - Present",
      title: "Software Development Intern",
      company: "Sahasranshu Technologies",
      description: "Working as a Software Development Intern on enterprise-grade software solutions, contributing to backend development using Java, Spring Boot, and PostgreSQL. Responsible for developing and testing REST APIs, writing unit and component tests, improving code quality through refactoring, debugging backend services, and collaborating in Agile development workflows. Regularly participate in code reviews, API validation, secure coding practices, and production-ready software development while working closely with cross-functional engineering teams to deliver scalable and maintainable backend applications.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Agile", "Backend"]
    },
    {
      date: "January 2026 - March 2026",
      title: "Full Stack Developer",
      company: "Akash Shipping Agency",
      description: "Designed and developed the complete digital presence for Akash Shipping Agency, delivering both a modern corporate website and an internal management system. Built a responsive, SEO-friendly website to strengthen the company's online branding while developing a custom software solution to streamline vessel operations, shipment tracking, employee management, client records, and day-to-day administrative workflows. Worked across both frontend and backend to deliver an efficient, scalable, and user-friendly solution tailored to the organization's operational requirements.",
      tags: ["React", "HTML5", "CSS3", "JavaScript", "Full Stack", "SEO"]
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
