import { aboutContent } from "@/content/home-sections/home";
import { LocateFixed, BadgeInfo } from "lucide-react";

export default function About() {
  const highlightClasses = [
    "highlight-yellow",
    "highlight-cyan",
    "highlight-pink",
    "highlight-green",
  ];

  const highlightMap = new Map(
    aboutContent.highlights.map((word, index) => [
      word.toLowerCase(),
      highlightClasses[index % highlightClasses.length],
    ])
  );

  const escapeRegExp = (value: string) =>
    value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const highlightRegex = new RegExp(
    `(${aboutContent.highlights
      .slice()
      .sort((a, b) => b.length - a.length)
      .map(escapeRegExp)
      .join("|")})`,
    "gi"
  );

  const renderHighlightedText = (text: string) =>
    text.split(highlightRegex).map((part, index) => {
      const className = highlightMap.get(part.toLowerCase());
      if (!className) return <span key={`${part}-${index}`}>{part}</span>;
      return (
        <span key={`${part}-${index}`} className={`highlight ${className}`}>
          {part}
        </span>
      );
    });

  return (
    <>
<section id="about"
        className="py-24 px-4 max-w-7xl mx-auto border-x-4 border-black bg-white my-12 shadow-hard-lg relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 reveal">
                <div className="aspect-square bg-gray-200 border-4 border-black relative shadow-hard group">
                    <img src={aboutContent.avatar} alt="outline-image"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <span
                        className="absolute top-2 left-2 bg-neo-red text-white px-2 font-mono text-xs border border-black z-10">{aboutContent.avatar_tag}</span>
                    <div className="about-float about-float-code hidden md:flex">
                        <span>&lt;/&gt;</span>
                    </div>
                    <div className="about-float about-float-terminal hidden md:flex">
                        <span>&gt;_</span>
                    </div>
                    <div className="about-float about-float-stack hidden md:flex">
                        <span>{"{ }"}</span>
                    </div>
                </div>
            </div>
            <div className="md:col-span-8 flex flex-col justify-center reveal">
                <h2 className="text-6xl font-black uppercase mb-6">{aboutContent.title}</h2>
                <p className="font-mono text-xl leading-relaxed mb-6 about-text">
                    {renderHighlightedText(aboutContent.description)}
                </p>
                <div className="font-mono text-lg mb-8 text-gray-600 border-l-4 border-neo-purple pl-4 about-text">
                {
                    aboutContent.whatIBring.map((item, index) => (
                        <p key={index} className="font-mono text-lg mb-4 text-gray-600 about-text">
                            &lt;/&gt; <span className="text-neo-purple font-bold">{item.heading}</span>: {renderHighlightedText(item.description)}
                        </p>
                    ))
                }
                </div>

                <div className="flex gap-4">
                    <div className="flex gap-2 justify-center bg-neo-black text-white px-4 py-2 font-mono text-sm border-2 border-transparent">
                        <LocateFixed /> {aboutContent.location}
                    </div>
                    <div className="flex gap-2 justify-center bg-neo-green text-black px-4 py-2 font-mono text-sm border-2 border-black">
                        <BadgeInfo />  {aboutContent.status}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
