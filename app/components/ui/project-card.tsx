"use client";

import Image from "next/image";

export type ProjectItem = {
  name: string;
  description: string;
  techStack?: string[];
  highlights?: string[];
  imageUrl: string;
  codeLink?: string;
  liveLink?: string;
};

const isLinkVisible = (value?: string) => {
  if (!value) return false;
  const sanitized = value.trim().toLowerCase();
  return sanitized !== "n/a" && sanitized !== "none";
};

export const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const availableLinks = [
    {
      label: "Live",
      url: project.liveLink,
      primary: true,
    },
    {
      label: "Code",
      url: project.codeLink,
      primary: false,
    },
  ].filter((link) => isLinkVisible(link.url));

  return (
    <article className="relative overflow-hidden bg-white border-4 border-black shadow-hard flex flex-col h-full">
      <div className="border-b-4 border-black bg-[#050505] px-4 py-2 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#b03b2f]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#b07f2f]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1d7b2c]" />
        </div>
        <span className="text-[0.65rem] tracking-[0.4em] uppercase font-black text-white select-none">
            {project.name}
        </span>
      </div>
      <div className="relative border-b-4 border-black">
        <div className="h-48 relative">
          <Image
            src={project.imageUrl}
            alt={`${project.name} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <header>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              {project.name}
            </h3>
            <p className="font-mono text-sm text-gray-700 mt-2">{project.description}</p>
          </header>

          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className="bg-neo-black text-white px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] border border-black"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2 text-sm font-mono text-gray-800">
              {project.highlights.map((item) => (
                <p key={item} className="flex items-start gap-3">
                  <span className="text-neo-green leading-none text-lg">▸</span>
                  <span className="leading-tight">{item}</span>
                </p>
              ))}
            </div>
          )}
        </div>

        {availableLinks.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {availableLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2 border-2 border-black font-bold uppercase text-xs tracking-[0.2em] shadow-hard transition-colors ${
                  link.primary
                    ? "bg-neo-green text-black hover:bg-black hover:text-neo-green"
                    : "bg-black text-white hover:bg-neo-green hover:text-black"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
