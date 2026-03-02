import type { Metadata } from "next";

const RESUME_PATH = "/Assets/Resume/ROSHAN_KUMAR_SAHU_2026.pdf";

export const metadata: Metadata = {
  title: "Resume | ROSHAN",
  description: "View Roshan Kumar Sahu's resume directly in the portfolio.",
};

export default function ResumePage() {
  return (
    <main className="resume-root">
      <div className="resume-bg" aria-hidden="true" />

      <section className="resume-shell">
        <header className="resume-header">
          <a href="/" className="resume-back">
            {"< Back"}
          </a>
          <div className="resume-title-wrap">
            <p className="resume-kicker">Portfolio</p>
            <h1>Resume Viewer</h1>
          </div>
          <a href={RESUME_PATH} download className="resume-download">
            Download PDF
          </a>
        </header>

        <div className="resume-frame-wrap">
          <iframe
            src={RESUME_PATH}
            title="Roshan Resume"
            className="resume-frame"
          />
        </div>
      </section>

      <style>{`
        .resume-root {
          min-height: 100vh;
          padding: 28px 14px;
          background: var(--neo-white);
          position: relative;
          overflow: hidden;
        }

        .resume-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
        }

        .resume-shell {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .resume-header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 12px;
          border: 4px solid #000;
          background: #fff;
          box-shadow: 8px 8px 0 #000;
          padding: 14px;
          margin-bottom: 14px;
        }

        .resume-back,
        .resume-download {
          text-decoration: none;
          border: 2px solid #000;
          padding: 8px 10px;
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .resume-back {
          color: #fff;
          background: #121212;
        }

        .resume-download {
          color: #121212;
          background: var(--neo-yellow);
        }

        .resume-title-wrap {
          text-align: center;
        }

        .resume-kicker {
          margin: 0 0 3px;
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #3b82f6;
          font-weight: 700;
        }

        .resume-title-wrap h1 {
          margin: 0;
          font-size: clamp(1.3rem, 4.5vw, 2.1rem);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 1;
        }

        .resume-frame-wrap {
          border: 4px solid #000;
          box-shadow: 10px 10px 0 #000;
          background: #fff;
          height: calc(100vh - 154px);
          min-height: 620px;
          overflow: hidden;
        }

        .resume-frame {
          border: 0;
          width: 100%;
          height: 100%;
          background: #fff;
        }

        @media (max-width: 860px) {
          .resume-header {
            grid-template-columns: 1fr;
            justify-items: stretch;
            text-align: center;
          }

          .resume-back,
          .resume-download {
            text-align: center;
          }

          .resume-frame-wrap {
            height: calc(100vh - 246px);
            min-height: 520px;
          }
        }
      `}</style>
    </main>
  );
}

