import { ReportCard } from "@/app/components/ui/report-card";
import { reportEntries } from "@/content/home-sections/home";

const marqueeReports = [...reportEntries, ...reportEntries];

export default function Reports() {
  return (
    <section id="reports" className="py-24 bg-neo-black border-t-4 border-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-16 bg-white/5 border-2 border-white/10 p-4 inline-flex shadow-hard shadow-neo-blue/20">
          <div className="flex gap-2">
            <div className="h-3 w-3 bg-red-500 rounded-full border border-black"></div>
            <div className="h-3 w-3 bg-yellow-500 rounded-full border border-black"></div>
            <div className="h-3 w-3 bg-green-500 rounded-full border border-black"></div>
          </div>
          <h2 className="font-mono text-white text-xl font-bold ml-4 tracking-tighter">USER_REPORTS.txt</h2>
          <div className="ml-8 px-2 bg-neo-blue text-black text-[10px] font-black uppercase">LIVE_FEED</div>
        </div>
      </div>

      <div className="marquee-container group cursor-hover">
        <div className="marquee-content flex gap-8 py-12 px-4 select-none">
          {marqueeReports.map((report, index) => (
            <ReportCard key={`${report.id}-${index}`} {...report} />
          ))}
        </div>
      </div>
    </section>
  );
}
