import { achievementContent, educationContent } from "@/content/hero";

export default function EducationAchievements() {
  return (
    <section
      id="education-achievements"
      className="py-24 px-4 max-w-7xl mx-auto border-x-4 border-black bg-white my-12 shadow-hard-lg relative overflow-hidden"
    >
      <div className="absolute top-8 left-8 w-10 h-10 bg-neo-blue border-4 border-black shadow-hard rotate-12" />
      <div className="absolute bottom-8 right-8 w-14 h-14 bg-neo-pink border-4 border-black shadow-hard rounded-full" />

      <div className="relative z-10">
        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-neo-blue mb-3">Data Capsule</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            Education <span className="text-neo-orange">&</span> Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <article className="bg-[#eaf3ff] border-4 border-black shadow-hard-lg p-6 md:p-8 rotate-[-0.5deg]">
            <div className="flex items-center justify-between mb-6 border-b-4 border-black pb-3">
              <h3 className="text-3xl font-black uppercase">{educationContent.title}</h3>
              <span className="font-mono text-[10px] uppercase bg-black text-neo-green px-2 py-1">Academic Ledger</span>
            </div>

            <div className="space-y-5">
              {educationContent.institutions.map((item, index) => (
                <div key={`${item.name}-${index}`} className="bg-white border-4 border-black shadow-hard p-4 md:p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="w-7 h-7 shrink-0 border-2 border-black bg-neo-blue text-white font-mono text-[11px] font-black grid place-items-center mt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-xl font-black leading-tight">{item.name}</h4>
                  </div>
                  <p className="font-mono text-sm md:text-base mb-3 pl-10">{item.degree}</p>
                  <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase pl-10">
                    <span className="border-2 border-black bg-gray-100 px-2 py-1">{item.duration}</span>
                    <span className="border-2 border-black bg-gray-100 px-2 py-1">{item.location}</span>
                    <span className="border-2 border-black bg-neo-green px-2 py-1 font-black">{item.percentage}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-[#fff3c9] border-4 border-black shadow-hard-lg p-6 md:p-8 rotate-[0.5deg]">
            <div className="flex items-center justify-between mb-6 border-b-4 border-black pb-3">
              <h3 className="text-3xl font-black uppercase">{achievementContent.title}</h3>
              <span className="font-mono text-[10px] uppercase bg-black text-neo-yellow px-2 py-1">Signal Boost</span>
            </div>

            <div className="space-y-5">
              {achievementContent.achievements.map((item, index) => (
                <div key={`${item.title}-${index}`} className="bg-neo-black text-white border-4 border-black shadow-hard p-4 md:p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="w-7 h-7 shrink-0 border-2 border-black bg-neo-orange text-black font-black text-xs grid place-items-center mt-0.5">
                      {index + 1}
                    </span>
                    <h4 className="text-xl font-black leading-tight">{item.title}</h4>
                  </div>
                  <p className="font-mono text-sm text-white/90 pl-10">{item.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}


