import React from 'react';

const getEmbedUrl = (url) => {
  try {
    const urlObj = new URL(url);
    const basePath = urlObj.pathname.endsWith('/') ? urlObj.pathname : `${urlObj.pathname}/`;
    const imgIndex = urlObj.searchParams.get('img_index');
    let embedUrl = `https://www.instagram.com${basePath}embed/`;
    if (imgIndex) {
      embedUrl += `?img_index=${imgIndex}`;
    }
    return embedUrl;
  } catch (e) {
    return `${url}/embed/`;
  }
};

export default function ActivitiesPreview() {
  const activities = [
    {
      id: 1,
      name: "Incridea '27",
      role: "HEAD",
      roleColor: "bg-[#569cd6]/20 text-[#569cd6]",
      description: "Appointed Head of the Cultural Committee for Incridea'27, leading planning, coordination and execution of one of Karnataka's largest collegiate cultural festivals.",
      icon: "🎭",
      img: "/img1.jpeg",
      useImage: true,
      postUrl: "https://www.instagram.com/incridea/"
    },
    {
      id: 2,
      name: "Incridea '26",
      role: "CO-HEAD",
      roleColor: "bg-[#4ec9b0]/20 text-[#4ec9b0]",
      description: "Coordinated artists, volunteers and multiple event teams while managing logistics and on-ground execution for the annual cultural festival.",
      icon: "🎤",
      img: "/img2.jpeg",
      useImage: true,
      postUrl: "https://www.instagram.com/incridea/"
    },
    {
      id: 3,
      name: "Stereo Club",
      role: "DIGITAL MEDIA HEAD",
      roleColor: "bg-[#c586c0]/20 text-[#c586c0]",
      description: "Managed digital content, event promotions and branding while organizing music events, jam sessions and campus performances.",
      icon: "🎵",
      img: "",
      useImage: false,
      postUrl: "https://www.instagram.com/p/Da0BdhrlKhX/?img_index=6"
    },
    {
      id: 4,
      name: "Association of Computer Engineers",
      role: "JOINT CULTURAL SECRETARY",
      roleColor: "bg-[#dcdcaa]/20 text-[#dcdcaa]",
      description: "Planned and executed technical and cultural initiatives while collaborating with faculty and student committees across the department.",
      icon: "🏛️",
      img: "",
      useImage: false,
      postUrl: "https://www.instagram.com/p/DCpToLIM_RK/?img_index=5"
    }
  ];

  return (
    <div className="flex flex-col w-full h-full bg-[#1e1e1e] font-sans">
      
      {/* Top half: SQL Editor */}
      <div className="h-[40%] border-b border-[#3c3c3c] flex flex-col bg-[#1e1e1e]">
        <div className="flex items-center px-4 py-2 bg-[#252526] border-b border-[#3c3c3c] text-[11px] text-[#cccccc] font-medium tracking-wide">
          <span className="text-[#007acc] mr-2">▶</span> Run Query
        </div>
        <div className="flex-1 p-4 font-mono text-[14px] overflow-y-auto">
          <div className="flex">
            <div className="w-8 text-right pr-4 text-[#858585] select-none">1</div>
            <div className="text-[#d4d4d4]">
              <span className="text-[#569cd6]">SELECT</span> event_name, role, thumbnail, description
            </div>
          </div>
          <div className="flex">
            <div className="w-8 text-right pr-4 text-[#858585] select-none">2</div>
            <div className="text-[#d4d4d4]">
              <span className="text-[#569cd6]">FROM</span> leadership_campus_involvement
            </div>
          </div>
          <div className="flex">
            <div className="w-8 text-right pr-4 text-[#858585] select-none">3</div>
            <div className="text-[#d4d4d4]">
              <span className="text-[#569cd6]">WHERE</span> student_id <span className="text-[#d4d4d4]">=</span> <span className="text-[#ce9178]">'Abhiram'</span>
            </div>
          </div>
          <div className="flex">
            <div className="w-8 text-right pr-4 text-[#858585] select-none">4</div>
            <div className="text-[#d4d4d4]">
              <span className="text-[#569cd6]">ORDER BY</span> date <span className="text-[#569cd6]">DESC</span>;
            </div>
          </div>
        </div>
      </div>

      {/* Bottom half: Query Results (Table UI) */}
      <div className="flex-1 flex flex-col bg-[#1e1e1e] overflow-hidden">
        <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#3c3c3c] text-[11px] text-[#cccccc]">
          Query Results ({activities.length} rows)
        </div>
        
        <div className="flex-1 overflow-auto custom-scrollbar p-4">
          <table className="w-full text-left border-collapse text-[13px]">
            <thead>
              <tr className="border-b border-[#3c3c3c] text-[#858585] font-mono">
                <th className="py-2 px-4 font-normal w-[50px]">id</th>
                <th className="py-2 px-4 font-normal w-[120px]">thumbnail</th>
                <th className="py-2 px-4 font-normal w-[200px]">event_name</th>
                <th className="py-2 px-4 font-normal w-[150px]">role</th>
                <th className="py-2 px-4 font-normal">description</th>
              </tr>
            </thead>
            <tbody className="text-[#cccccc]">
              {activities.map((act) => (
                <tr key={act.id} className="border-b border-[#3c3c3c]/50 hover:bg-[#2a2d2e] transition-colors">
                  <td className="py-3 px-4 font-mono text-[#b5cea8]">{act.id}</td>
                  <td className="py-3 px-4">
                    {act.useImage ? (
                      <a 
                        href={act.postUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-[#2d2d2d] rounded flex items-center justify-center border border-[#3c3c3c] overflow-hidden hover:border-[#569cd6] transition-colors block cursor-pointer"
                        title="Click to view Instagram post"
                      >
                        <img 
                          src={act.img} 
                          alt={act.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23858585' stroke-width='2'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E";
                          }}
                        />
                      </a>
                    ) : (
                      <a 
                        href={act.postUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-[#2d2d2d] rounded border border-[#3c3c3c] hover:border-[#569cd6] transition-colors block cursor-pointer relative overflow-hidden"
                        title="Click to view Instagram post"
                      >
                        <iframe 
                          src={getEmbedUrl(act.postUrl)} 
                          className="absolute"
                          style={{
                            width: '320px',
                            height: '600px',
                            top: '-54px',
                            left: '0px',
                            transform: 'scale(0.2)',
                            transformOrigin: 'top left',
                            border: 'none',
                            pointerEvents: 'none'
                          }}
                          scrolling="no"
                        />
                      </a>
                    )}
                  </td>
                  <td className="py-3 px-4 font-bold text-white">{act.name}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold tracking-wider ${act.roleColor}`}>
                      {act.role}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-[#858585]">{act.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
