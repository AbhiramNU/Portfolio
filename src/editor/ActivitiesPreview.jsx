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
              <span className="text-[#569cd6]">FROM</span> extra_curricular_activities
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
          Query Results (3 rows)
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
                    <span className="text-xs">📸</span>
                  </div>
                </td>
                <td className="py-3 px-4 font-bold text-white">Hackathon 2024</td>
                <td className="py-3 px-4"><span className="bg-[#569cd6]/20 text-[#569cd6] px-2 py-1 rounded-full text-[10px] font-bold tracking-wider">TEAM LEAD</span></td>
                <td className="py-3 px-4 text-[#858585]">Led a team of 4 to build a GenAI application in 24 hours. Won 1st place overall.</td>
              </tr>
              
              {/* Row 2 */}
              <tr className="border-b border-[#3c3c3c]/50 hover:bg-[#2a2d2e] transition-colors">
                <td className="py-3 px-4 font-mono text-[#b5cea8]">2</td>
                <td className="py-3 px-4">
                  <div className="w-16 h-12 bg-[#2d2d2d] rounded flex items-center justify-center border border-[#3c3c3c]">
                    <span className="text-xs">📸</span>
                  </div>
                </td>
                <td className="py-3 px-4 font-bold text-white">Tech Club Workshop</td>
                <td className="py-3 px-4"><span className="bg-[#4ec9b0]/20 text-[#4ec9b0] px-2 py-1 rounded-full text-[10px] font-bold tracking-wider">SPEAKER</span></td>
                <td className="py-3 px-4 text-[#858585]">Conducted a workshop on Python and API development for 50+ junior students.</td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-[#2a2d2e] transition-colors">
                <td className="py-3 px-4 font-mono text-[#b5cea8]">3</td>
                <td className="py-3 px-4">
                  <div className="w-16 h-12 bg-[#2d2d2d] rounded flex items-center justify-center border border-[#3c3c3c]">
                    <span className="text-xs">📸</span>
                  </div>
                </td>
                <td className="py-3 px-4 font-bold text-white">Open Source Contrib</td>
                <td className="py-3 px-4"><span className="bg-[#c586c0]/20 text-[#c586c0] px-2 py-1 rounded-full text-[10px] font-bold tracking-wider">CONTRIBUTOR</span></td>
                <td className="py-3 px-4 text-[#858585]">Merged 5 PRs into popular open source repositories improving backend efficiency.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
