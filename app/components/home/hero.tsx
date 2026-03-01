import { heroContent } from "@/content/home-sections/home";

export default function Hero() {

  const title = heroContent.title.split(" ");
  const title1 = title[0];
  const title2 = title[1];

  return (
    <>
<section
        className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 relative overflow-hidden border-b-4 border-black">
        <div
            className="absolute top-1/3 left-[10%] w-16 h-16 bg-neo-blue border-4 border-black shadow-hard animate-bounce hidden lg:block rotate-12">
        </div>
        <div
            className="absolute bottom-1/3 right-[10%] w-24 h-24 bg-neo-pink rounded-full border-4 border-black shadow-hard hidden lg:block animate-pulse">
        </div>
        <div className="absolute top-20 right-20 text-9xl opacity-5 font-black select-none pointer-events-none">CODE</div>

        <div className="relative z-10 text-center max-w-5xl">
            <div
                className="inline-block bg-neo-white border-2 border-black px-4 py-1 mb-6 shadow-hard rotate-[-2deg] reveal">
                <span className="font-mono font-bold text-neo-green bg-black px-2 mr-2">●</span>
                <span className="font-mono font-bold">{heroContent.status}</span>
            </div>

            <h1
                className="text-[13vw] md:text-[10vw] leading-[0.8] font-black uppercase tracking-tighter mb-6 reveal mix-blend-darken">
                {title1}<br />
                <span className="text-white text-stroke-black" style={{ WebkitTextStroke: "3px black" }}>{title2}</span>
            </h1>

            <p
                className="font-mono text-lg md:text-2xl max-w-2xl mx-auto mb-10 bg-neo-yellow border-2 border-black p-4 shadow-hard reveal rotate-1">
                <span className="text-md">{heroContent.description}</span><br />
                <b>{heroContent.languages}</b>
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 reveal">
                <a href="#projects"
                    className="bg-black text-white border-2 border-black px-10 py-5 text-xl font-bold shadow-hard hover:bg-neo-green hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover">
                    VIEW DATABASE
                </a>
                <a href="Assets/Resume/ROSHAN_KUMAR_SAHU_2026.pdf" download
                    className="bg-neo-white text-black border-2 border-black px-10 py-5 text-xl font-bold shadow-hard hover:bg-neo-pink hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover flex items-center justify-center gap-2">
                    <i className="ri-download-line"></i> DOWNLOAD CV
                </a>
            </div>
        </div>
    </section>

    <div className="border-b-4 border-black bg-neo-blue py-3 relative z-20">
        <div className="marquee-container font-mono font-bold text-2xl text-white">
            <div className="marquee-content">
                /// OPEN FOR WORK /// FULL STACK DEVELOPMENT /// BACKEND DEVELOPER /// AI ENGINEER /// DATA ANALYST /// FAST ///
                SECURE /// OPEN FOR WORK /// FULL STACK DEVELOPMENT ///
            </div>
        </div>
    </div>
    </>
  );
}

