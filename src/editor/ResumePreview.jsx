import React from 'react';

export default function ResumePreview() {
  const handleDownload = () => {
    // For now, this is just a placeholder. 
    // Later, you can swap the href to the actual PDF uploaded in the public folder.
    alert("This is a placeholder! Once you provide the real PDF, it will download here.");
  };

  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] flex flex-col items-center justify-center text-[#d4d4d4] font-mono">
      
      {/* Icon Wrapper */}
      <div className="w-32 h-32 mb-8 bg-[#252526] rounded-xl border border-[#3c3c3c] flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
        <div className="flex flex-col items-center">
          <div className="text-[54px] mb-[-10px]">📄</div>
          <span className="bg-[#f14c4c] text-white text-[10px] font-black px-2 py-0.5 rounded-sm tracking-widest uppercase mt-2">
            PDF
          </span>
        </div>
      </div>

      <h2 className="text-white text-2xl mb-3 font-semibold tracking-tight font-sans">
        Abhiram_N_Udupa_Resume.pdf
      </h2>
      
      <p className="text-[#858585] text-[13px] mb-10 max-w-md text-center leading-relaxed">
        This file is currently sitting as a placeholder. Once you drop the final resume document into the system, this will serve it directly.
      </p>

      <button 
        onClick={handleDownload}
        className="bg-[#007acc] hover:bg-[#005a9e] text-white px-8 py-3 rounded-[2px] flex items-center transition-colors font-bold tracking-wide shadow-md"
      >
        <span className="mr-3 text-lg leading-none mt-[-2px]">↓</span> 
        Download Resume
      </button>

      <div className="mt-12 text-[#3c3c3c] text-[10px] uppercase tracking-widest font-sans">
        Encrypted &middot; Zero Bytes &middot; Secure Sandbox
      </div>
      
    </div>
  );
}
