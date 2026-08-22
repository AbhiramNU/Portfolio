import React, { useState, useEffect } from 'react';

const NotebookCell = ({ index, code, title, issuer, date, credentialId, skills, link }) => (
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
          {/* Badge Icon / Emblem */}
          <div className="w-full md:w-48 h-36 bg-[#1e1e1e] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#3c3c3c] p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#569cd6]/10 to-[#c586c0]/10 opacity-50"></div>
            <span className="text-[#858585] text-xs font-mono z-10 flex flex-col items-center text-center">
              <span className="text-3xl mb-1.5">📜</span>
              <span className="font-bold text-[10px] uppercase tracking-wide opacity-80">{issuer}</span>
              <span className="text-[9px] mt-0.5 opacity-60">Verified Credential</span>
            </span>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col justify-center flex-1">
            <div className="flex justify-between items-start mb-2 gap-4">
              <h3 className="text-white font-bold text-[15px] font-sans leading-snug">{title}</h3>
              <span className="text-[#858585] text-[10px] border border-[#3c3c3c] px-2 py-0.5 rounded-full shrink-0 font-mono">{date}</span>
            </div>

            <div className="space-y-1 mb-4 text-[12px]">
              <p className="text-[#cccccc]">Issued by: <span className="text-[#4ec9b0] font-semibold">{issuer}</span></p>
              {credentialId && (
                <p className="text-[#858585] font-mono text-[11px]">Credential ID: <span className="text-[#ce9178]">{credentialId}</span></p>
              )}
              {skills && (
                <p className="text-[#858585] text-[11px]">
                  Skills: <span className="text-[#569cd6]">{skills}</span>
                </p>
              )}
            </div>

            <div>
              <a
                href={link || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-[10px] font-bold tracking-wider uppercase text-white bg-[#0e639c] hover:bg-[#1177bb] px-3.5 py-2 rounded transition-colors cursor-pointer"
              >
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
  const [typedCode, setTypedCode] = useState('');
  const targetCode = "import certifications\ncertifications.load_credentials(filter='VERIFIED', sort='DESC')";
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    if (typingIndex < targetCode.length) {
      const timeout = setTimeout(() => {
        setTypedCode(prev => prev + targetCode[typingIndex]);
        setTypingIndex(prev => prev + 1);
      }, 35);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

  // Certificates sorted in decreasing chronological order (newest first)
  const certificationsList = [
    {
      index: "2",
      code: `<span class="text-[#569cd6]">cert</span> = fetch_credential(id=<span class="text-[#ce9178]">'W96SVXIZ30SM'</span>)<br/>cert.display()`,
      title: "Deployment and DevOps",
      issuer: "Microsoft (Coursera)",
      date: "May 29, 2026",
      credentialId: "W96SVXIZ30SM",
      skills: "DevOps, Continuous Deployment, Azure Workflows",
      link: "https://coursera.org/verify/W96SVXIZ30SM"
    },
    {
      index: "3",
      code: `<span class="text-[#569cd6]">cert</span> = fetch_credential(id=<span class="text-[#ce9178]">'UC-c63e9668-6f26-487d-a95b-acd6f4ac8501'</span>)<br/>cert.display()`,
      title: "Secure Code in Java and Spring Boot: Build Resilient Apps",
      issuer: "Udemy",
      date: "Nov 22, 2025",
      credentialId: "UC-c63e9668-6f26-487d-a95b-acd6f4ac8501",
      skills: "Java, Spring Boot, Spring Security, App Security",
      link: "https://ude.my/UC-c63e9668-6f26-487d-a95b-acd6f4ac8501"
    },
    {
      index: "4",
      code: `<span class="text-[#569cd6]">cert</span> = fetch_credential(id=<span class="text-[#ce9178]">'UC-ba1d0f2c-eab4-464d-8a7d-b5777a47a1d1'</span>)<br/>cert.display()`,
      title: "Data Analyst: Professional Certificate in Data Analysis",
      issuer: "Udemy (MTF Institute)",
      date: "Oct 30, 2025",
      credentialId: "UC-ba1d0f2c-eab4-464d-8a7d-b5777a47a1d1",
      skills: "Data Analysis, Business Intelligence, Data Analytics",
      link: "https://ude.my/UC-ba1d0f2c-eab4-464d-8a7d-b5777a47a1d1"
    },
    {
      index: "5",
      code: `<span class="text-[#569cd6]">cert</span> = fetch_credential(id=<span class="text-[#ce9178]">'45OKX8CRLWF7'</span>)<br/>cert.display()`,
      title: "Introduction to MongoDB",
      issuer: "MongoDB Inc. (Coursera)",
      date: "Oct 16, 2025",
      credentialId: "45OKX8CRLWF7",
      skills: "MongoDB, NoSQL Databases, Document Querying",
      link: "https://coursera.org/verify/45OKX8CRLWF7"
    },
    {
      index: "6",
      code: `<span class="text-[#569cd6]">cert</span> = fetch_credential(id=<span class="text-[#ce9178]">'VNVEVWFK2VO8'</span>)<br/>cert.display()`,
      title: "Advanced React",
      issuer: "Meta (Coursera)",
      date: "Aug 24, 2025",
      credentialId: "VNVEVWFK2VO8",
      skills: "React.js, Advanced Hooks, Component Architecture, State Management",
      link: "https://coursera.org/verify/VNVEVWFK2VO8"
    },
    {
      index: "7",
      code: `<span class="text-[#569cd6]">cert</span> = fetch_credential(id=<span class="text-[#ce9178]">'9WC94D7KABK3'</span>)<br/>cert.display()`,
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI & Stanford University (Coursera)",
      date: "Jun 7, 2025",
      credentialId: "9WC94D7KABK3",
      skills: "Supervised Learning, Linear/Logistic Regression, Scikit-Learn",
      link: "https://coursera.org/verify/9WC94D7KABK3"
    },
    {
      index: "8",
      code: `<span class="text-[#569cd6]">cert</span> = fetch_credential(id=<span class="text-[#ce9178]">'UC-5e22fc58-b023-4d87-be50-2ac2d6a3c297'</span>)<br/>cert.display()`,
      title: "Complete Ethical Hacking Bootcamp",
      issuer: "Udemy",
      date: "Jan 7, 2025",
      credentialId: "UC-5e22fc58-b023-4d87-be50-2ac2d6a3c297",
      skills: "Ethical Hacking, Cybersecurity, Penetration Testing",
      link: "https://ude.my/UC-5e22fc58-b023-4d87-be50-2ac2d6a3c297"
    }
  ];

  return (
    <div className="flex-1 w-full h-full bg-[#1e1e1e] overflow-y-auto p-4 custom-scrollbar">
      <div className="max-w-5xl mx-auto py-6">

        <div className="mb-10 pl-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#e37933] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">JUPYTER</span>
            <span className="text-[#cccccc] font-mono text-sm">certifications.ipynb</span>
          </div>
          <p className="text-[#858585] text-sm">Python 3.10.12 | Verified Credentials Output (Sorted: Descending Date)</p>
        </div>

        {/* Typing Input Cell at the very top */}
        <div className="flex flex-col mb-8 font-sans">
          <div className="flex w-full group">
            <div className="w-12 pt-2 text-right pr-4 text-[12px] text-[#569cd6] font-mono opacity-80">
              In [1]:
            </div>
            <div className="flex-1 bg-[#2d2d2d]/40 border border-[#007acc] rounded p-3 font-mono text-[13px] text-[#d4d4d4] flex items-center shadow-[0_0_0_1px_rgba(0,122,204,0.3)] min-h-[70px] whitespace-pre-wrap leading-relaxed">
              <span>{typedCode}</span>
              {typingIndex < targetCode.length && (
                <span className="inline-block w-[2px] h-[14px] bg-[#007acc] ml-0.5 animate-pulse" />
              )}
            </div>
          </div>
        </div>

        {/* Display Certificates */}
        {certificationsList.map(cert => (
          <NotebookCell
            key={cert.index}
            index={cert.index}
            code={cert.code}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            credentialId={cert.credentialId}
            skills={cert.skills}
            link={cert.link}
          />
        ))}

      </div>
    </div>
  );
}
