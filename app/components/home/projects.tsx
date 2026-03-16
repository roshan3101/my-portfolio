"use client";

import { projectContent } from "@/content/home-sections/home";
import { ProjectCard } from "../ui/project-card";

export default function Projects() {

  const projects = projectContent.projects.slice(0, 4);

  return (
    <>
      <section
        id="projects"
        className="py-16 sm:py-20 lg:py-24 bg-neo-yellow border-t-4 border-black px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-10 sm:mb-14 md:mb-16 uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-stroke-black"
            style={{ WebkitTextStroke: "3px black" }}
          >
            Selected Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.name ?? index} project={project} />
            ))}
          </div>

          <div className="text-center mt-16 sm:mt-20 md:mt-24">
            <a
              href={projectContent.repoLink}
              className="inline-block bg-neo-black text-white px-12 py-5 font-bold font-mono text-xl hover:bg-neo-white hover:text-black border-4 border-black transition-all shadow-hard hover:shadow-none cursor-hover"
            >
              VIEW ALL REPOS ON GITHUB
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
