import React from 'react';
import { Download, ExternalLink, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function ResumePreview() {
  const resumeUrl = "/Abhiram_resume_.pdf";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Abhiram_N_Udupa_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto text-[#d4d4d4] font-mono p-6 sm:p-10 custom-scrollbar">
      <div className="max-w-5xl mx-auto pb-12">
        
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#3c3c3c] pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#f14c4c] text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest">
                VERIFIED PDF
              </span>
              <span className="text-[#858585] text-xs font-mono">Abhiram_N_Udupa_Resume.pdf</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
              Curriculum Vitae
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 bg-[#007acc] hover:bg-[#005a9e] text-white px-5 py-2.5 rounded-md font-bold text-xs transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#3c3c3c] bg-[#252526] hover:bg-[#2d2d2d] text-[#cccccc] hover:text-white px-4 py-2.5 rounded-md text-xs font-mono transition-colors"
            >
              <span>Full Screen</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Overview Summary Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#252526] border border-[#3c3c3c] rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#007acc]/20 text-[#4fc1ff] flex items-center justify-center shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <p className="text-[11px] text-[#858585] uppercase tracking-wider font-bold">Education</p>
              <p className="text-white font-bold text-xs font-sans">NMAMIT (B.Tech CSE)</p>
              <p className="text-[#4ec9b0] font-mono text-[11px]">CGPA: 8.9 / 10</p>
            </div>
          </div>

          <div className="bg-[#252526] border border-[#3c3c3c] rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#ff5500]/20 text-[#ff7733] flex items-center justify-center shrink-0">
              <Briefcase size={20} />
            </div>
            <div>
              <p className="text-[11px] text-[#858585] uppercase tracking-wider font-bold">Experience</p>
              <p className="text-white font-bold text-xs font-sans">Sahasranshu Tech</p>
              <p className="text-[#ce9178] font-mono text-[11px]">Software Dev Intern</p>
            </div>
          </div>

          <div className="bg-[#252526] border border-[#3c3c3c] rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#c586c0]/20 text-[#c586c0] flex items-center justify-center shrink-0">
              <Award size={20} />
            </div>
            <div>
              <p className="text-[11px] text-[#858585] uppercase tracking-wider font-bold">Leadership</p>
              <p className="text-white font-bold text-xs font-sans">Incridea '27 Cultural Head</p>
              <p className="text-[#cccccc] font-mono text-[11px]">Stereo Club Media Head</p>
            </div>
          </div>
        </div>

        {/* Embedded Interactive PDF Viewer */}
        <div className="w-full bg-[#252526] border border-[#3c3c3c] rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[750px]">
          <div className="bg-[#1e1e1e] px-4 py-3 border-b border-[#3c3c3c] flex items-center justify-between font-mono text-xs text-[#858585]">
            <div className="flex items-center gap-2">
              <FileText size={14} className="text-[#007acc]" />
              <span>Interactive PDF Preview</span>
            </div>
            <span className="text-[#4ec9b0] text-[11px] font-bold">✓ PDF Rendered</span>
          </div>

          <iframe
            src={`${resumeUrl}#toolbar=0&navpanes=0`}
            title="Abhiram N Udupa Resume PDF"
            className="w-full flex-1 border-none bg-white"
          />
        </div>

      </div>
    </div>
  );
}
