import React from 'react';

const NotebookCell = ({ index, code, title, issuer, date, link }) => (
  <div className="flex flex-col mb-8 font-sans">
    {/* Input Cell */}
    <div className="flex w-full group">
      <div className="w-12 pt-2 text-right pr-4 text-[12px] text-[#569cd6] font-mono opacity-80 group-hover:opacity-100">
        In [{index}]:
      </div>
      <div className="flex-1 bg-[#2d2d2d]/40 border border-[#3c3c3c] rounded p-3 font-mono text-[13px] text-[#d4d4d4]">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </div>
    
    {/* Output Cell */}
    <div className="flex w-full mt-3">
      <div className="w-12 pt-2 text-right pr-4 text-[12px] text-[#f88070] font-mono opacity-80">
        Out[{index}]:
      </div>
      <div className="flex-1">
        <div className="flex flex-col md:flex-row bg-[#252526] border border-[#3c3c3c] rounded overflow-hidden max-w-3xl hover:border-[#569cd6] transition-colors">
          {/* Image Placeholder */}
          <div className="w-full md:w-48 h-32 bg-[#1e1e1e] flex items-center justify-center border-b md:border-b-0 md:border-r border-[#3c3c3c] p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#569cd6]/10 to-[#c586c0]/10 opacity-50"></div>
            <span className="text-[#858585] text-xs font-mono z-10 flex flex-col items-center">
              <span className="text-2xl mb-1">📜</span>
              Image_Placeholder
            </span>
          </div>
          
          {/* Content */}
          <div className="p-4 flex flex-col justify-center flex-1">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-white font-bold text-lg">{title}</h3>
              <span className="text-[#858585] text-xs border border-[#3c3c3c] px-2 py-0.5 rounded-full">{date}</span>
            </div>
            <p className="text-[#cccccc] text-sm mb-3">Issued by: <span className="text-[#4ec9b0] font-medium">{issuer}</span></p>
            <div>
              <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center text-[11px] font-bold tracking-wider uppercase text-white bg-[#0e639c] hover:bg-[#1177bb] px-3 py-1.5 rounded transition-colors cursor-pointer">
                Verify Credential ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function CertificationsPreview() {
  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto p-4 custom-scrollbar">
      <div className="max-w-5xl mx-auto py-6">
        
        <div className="mb-10 pl-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#e37933] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">JUPYTER</span>
            <span className="text-[#cccccc] font-mono text-sm">certifications.ipynb</span>
          </div>
          <p className="text-[#858585] text-sm">Python 3.10.12 | Verified Credentials Output</p>
        </div>

        {/* Cell 1 */}
        <NotebookCell 
          index="1"
          code={`<span class="text-[#569cd6]">from</span> credentials <span class="text-[#569cd6]">import</span> fetch_certificate<br/><br/>cert = fetch_certificate(id=<span class="text-[#ce9178]">'AWS-SAA-C03'</span>)<br/>cert.render_badge()`}
          title="AWS Certified Solutions Architect"
          issuer="Amazon Web Services"
          date="2025"
          link="#"
        />

        {/* Cell 2 */}
        <NotebookCell 
          index="2"
          code={`<span class="text-[#569cd6]">import</span> coursera<br/><br/>coursera.verify(<span class="text-[#ce9178]">'Deep Learning Specialization'</span>).display()`}
          title="Deep Learning Specialization"
          issuer="Coursera / DeepLearning.AI"
          date="2024"
          link="#"
        />

        {/* Cell 3 */}
        <NotebookCell 
          index="3"
          code={`<span class="text-[#569cd6]">await</span> portfolio.load_cert(<span class="text-[#ce9178]">'Meta-Backend-Dev'</span>)`}
          title="Meta Backend Developer"
          issuer="Meta"
          date="2024"
          link="#"
        />
        
        {/* Empty input cell at the bottom to make it look like a real notebook */}
        <div className="flex w-full group mt-4">
          <div className="w-12 pt-2 text-right pr-4 text-[12px] text-[#569cd6] font-mono opacity-80">
            In [4]:
          </div>
          <div className="flex-1 bg-[#2d2d2d]/40 border border-[#007acc] rounded p-3 font-mono text-[13px] text-[#d4d4d4] flex items-center shadow-[0_0_0_1px_rgba(0,122,204,0.3)]">
            <span className="animate-pulse">|</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
