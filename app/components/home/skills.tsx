import { skillsContent } from "@/content/home-sections/home";

export default function Skills() {
  return (
    <>
<section id="skills" className="py-20 bg-neo-black text-neo-white border-y-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-white pb-4">
                <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter">
                    TECH<span className="text-neo-green">_DOMAINS</span>
                </h2>
                <div className="flex items-center gap-2 mb-2 md:mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="font-mono text-neo-green text-sm font-bold">{skillsContent.tagline}</p>
                </div>
            </div>

            <div className="domain-terminal">
                <div className="domain-terminal-head">
                    <span className="domain-dot bg-neo-red"></span>
                    <span className="domain-dot bg-neo-yellow"></span>
                    <span className="domain-dot bg-neo-green"></span>
                    <span className="domain-head-label">{skillsContent.title}</span>
                </div>

                <div className="domain-tree-wrap">
                    <div className="tree-grid">

                        {
                            skillsContent.domains.map((domain, index) => (
                                <article key={index} className="tree-domain">
                                    <h3>&gt; {domain.name}_</h3>
                                    <ul className="tree-list">
                                        {domain.skills.map((skill, idx) => (
                                            <li key={idx} className={skill.proficiency ? "with-bar" : ""}>
                                                <span className="tree-name">{skill.name}</span>
                                                {skill.proficiency && (
                                                    <>
                                                        <div className="tree-bar"><i style={{ width: `${skill.proficiency}%` }}></i></div>
                                                        <span className="tree-pct">{skill.proficiency}%</span>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))
                        }
                    </div>
                </div>

                <div className="domain-terminal-foot">
                    <span>&gt;&gt; Always open to learning new technologies and expanding my skill set.</span>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
