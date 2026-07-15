import React from 'react';

export default function ActivitiesPreview() {
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
              <span className="text-[#569cd6]">SELECT</span> event_name, role, thumbnail, description, date
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
          Query Results (4 rows)
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

              {/* Row 1 */}
              <tr className="border-b border-[#3c3c3c]/50 hover:bg-[#2a2d2e] transition-colors">
                <td className="py-3 px-4 font-mono text-[#b5cea8]">1</td>
                <td className="py-3 px-4">
                  <div className="w-16 h-12 bg-[#2d2d2d] rounded flex items-center justify-center border border-[#3c3c3c]">
                    <span className="text-xs">🎭</span>
                  </div>
                </td>
                <td className="py-3 px-4 font-bold text-white">Incridea '27</td>
                <td className="py-3 px-4">
                  <span className="bg-[#569cd6]/20 text-[#569cd6] px-2 py-1 rounded-full text-[10px] font-bold tracking-wider">
                    HEAD
                  </span>
                </td>
                <td className="py-3 px-4 text-[#858585]">
                  Appointed Head of the Cultural Committee for Incridea'27, leading planning,
                  coordination and execution of one of Karnataka's largest collegiate cultural festivals.
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-b border-[#3c3c3c]/50 hover:bg-[#2a2d2e] transition-colors">
                <td className="py-3 px-4 font-mono text-[#b5cea8]">2</td>
                <td className="py-3 px-4">
                  <div className="w-16 h-12 bg-[#2d2d2d] rounded flex items-center justify-center border border-[#3c3c3c]">
                    <span className="text-xs">🎤</span>
                  </div>
                </td>
                <td className="py-3 px-4 font-bold text-white">Incridea '26</td>
                <td className="py-3 px-4">
                  <span className="bg-[#4ec9b0]/20 text-[#4ec9b0] px-2 py-1 rounded-full text-[10px] font-bold tracking-wider">
                    CO-HEAD
                  </span>
                </td>
                <td className="py-3 px-4 text-[#858585]">
                  Coordinated artists, volunteers and multiple event teams while managing
                  logistics and on-ground execution for the annual cultural festival.
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="border-b border-[#3c3c3c]/50 hover:bg-[#2a2d2e] transition-colors">
                <td className="py-3 px-4 font-mono text-[#b5cea8]">3</td>
                <td className="py-3 px-4">
                  <div className="w-16 h-12 bg-[#2d2d2d] rounded flex items-center justify-center border border-[#3c3c3c]">
                    <span className="text-xs">🎵</span>
                  </div>
                </td>
                <td className="py-3 px-4 font-bold text-white">Stereo Club</td>
                <td className="py-3 px-4">
                  <span className="bg-[#c586c0]/20 text-[#c586c0] px-2 py-1 rounded-full text-[10px] font-bold tracking-wider">
                    DIGITAL MEDIA HEAD
                  </span>
                </td>
                <td className="py-3 px-4 text-[#858585]">
                  Managed digital content, event promotions and branding while organizing
                  music events, jam sessions and campus performances.
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="border-b border-[#3c3c3c]/50 hover:bg-[#2a2d2e] transition-colors">
                <td className="py-3 px-4 font-mono text-[#b5cea8]">4</td>
                <td className="py-3 px-4">
                  <div className="w-16 h-12 bg-[#2d2d2d] rounded flex items-center justify-center border border-[#3c3c3c]">
                    <span className="text-xs">🏛️</span>
                  </div>
                </td>
                <td className="py-3 px-4 font-bold text-white">Association of Computer Engineers</td>
                <td className="py-3 px-4">
                  <span className="bg-[#dcdcaa]/20 text-[#dcdcaa] px-2 py-1 rounded-full text-[10px] font-bold tracking-wider">
                    JOINT CULTURAL SECRETARY
                  </span>
                </td>
                <td className="py-3 px-4 text-[#858585]">
                  Planned and executed technical and cultural initiatives while collaborating
                  with faculty and student committees across the department.
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
