export default function Prelude() {
  return (
    <>
{/*Google Tag Manager (noscript)*/}
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TLNG322R" height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
    {/*End Google Tag Manager (noscript)*/}

    <div id="boot-loader" aria-live="polite">
        <div className="boot-panel">
            <p className="boot-title">booting portfolio kernel...</p>
            <div className="boot-log-wrap">
                <div id="boot-log"></div>
            </div>
            <div className="boot-progress">
                <span id="boot-progress-fill"></span>
            </div>
            <p id="boot-progress-text">[--------------------] 0%</p>
            <p className="boot-note">installing packages / compiling modules / linking ui runtime</p>
        </div>
    </div>

    <div id="cursor" className="w-6 h-6 bg-white rounded-full border-2 border-black hidden lg:block"></div>

    <div className="fixed top-0 left-0 h-2 bg-neo-green z-[60] border-b-2 border-black" id="progressBar" style={{ width: "0%" }}>
    </div>

    <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
            <a href="#"
                className="bg-neo-white border-2 border-black px-4 py-1 text-2xl font-black shadow-hard hover:bg-neo-yellow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-hover">
                Roshan.exe
            </a>

            <div className="hidden md:flex gap-4 bg-white border-2 border-black p-2 shadow-hard">
                <a href="#about"
                    className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover">/ABOUT</a>
                <a href="#skills"
                    className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover">/DOMAINS</a>
                <a href="#my-journey"
                    className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover">/JOURNEY</a>
                <a href="#projects"
                    className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover">/WORK</a>
                <a href="/peace"
                    className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover">/PEACE</a>
                <a href="/terminal"
                    className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover">/TERMINAL</a>
                <a href="#contact"
                    className="px-3 py-1 font-mono font-bold text-sm bg-neo-yellow border border-black hover:bg-neo-pink transition-colors cursor-hover">HIRE
                    ME</a>
            </div>
        </div>
    </nav>
    </>
  );
}
