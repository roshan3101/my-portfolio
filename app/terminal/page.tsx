import Script from "next/script";
import "./terminal.css";
import TerminalRuntimeLoader from "./terminal-runtime-loader";

export default function TerminalPage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap"
      />

      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="close"></span>
            <span className="minimize"></span>
            <span className="maximize"></span>
          </div>
          <div className="terminal-title">roshan@portfolio: ~/terminal</div>
          <div className="terminal-controls">
            <a href="/" id="terminal-back" className="terminal-back" title="Back to Home">
              <i className="fa-solid fa-arrow-left"></i>
            </a>
            <div className="theme-selector">
              <i className="fa-solid fa-palette" id="theme-toggle"></i>
            </div>
            <div className="language-selector">
              <i className="fa-solid fa-globe" id="language-toggle"></i>
            </div>
          </div>
        </div>

        <div className="terminal-container">
          <div className="terminal-content">
            <div id="output"></div>
            <div className="input-line">
              <span className="prompt">&gt;</span>
              <input type="text" id="command-input" autoFocus />
            </div>
          </div>
        </div>

        <div className="terminal-footer">
          <a href="/" className="resume-link">
            <i className="fas fa-file-alt"></i> View Portfolio
          </a>
          <a href="/" className="resume-link">
            <i className="fas fa-shapes"></i> Igniter Home
          </a>
        </div>

        <div className="context-menu">
          <div className="menu-item" data-action="split-h">
            Split Horizontally
          </div>
          <div className="menu-item" data-action="split-v">
            Split Vertically
          </div>
          <div className="menu-item" data-action="close-split">
            Close Split
          </div>
        </div>
      </div>

      <div id="theme-modal" className="modal">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <h2>Select Theme</h2>
          <div className="theme-options">
            <div className="theme-option" data-theme="default">
              <div className="theme-preview default-theme"></div>
              <span>Default</span>
            </div>
            <div className="theme-option" data-theme="dracula">
              <div className="theme-preview dracula-theme"></div>
              <span>Dracula</span>
            </div>
            <div className="theme-option" data-theme="solarized">
              <div className="theme-preview solarized-theme"></div>
              <span>Solarized</span>
            </div>
            <div className="theme-option" data-theme="nord">
              <div className="theme-preview nord-theme"></div>
              <span>Nord</span>
            </div>
          </div>
        </div>
      </div>

      <div id="language-modal" className="modal">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <h2>Select Language</h2>
          <div className="language-options">
            <div className="language-option" data-lang="en">
              English
            </div>
            <div className="language-option" data-lang="de">
              Deutsch
            </div>
            <div className="language-option" data-lang="fr">
              Francais
            </div>
            <div className="language-option" data-lang="sq">
              Albanian
            </div>
          </div>
        </div>
      </div>

      <div id="projects-modal" className="modal">
        <div className="modal-content projects-modal-content">
          <span className="close-button">&times;</span>
          <h2>Projects</h2>
          <div className="projects-container"></div>
        </div>
      </div>

      <div id="skills-modal" className="modal">
        <div className="modal-content skills-modal-content">
          <span className="close-button">&times;</span>
          <h2>Skills Visualization</h2>
          <div className="skills-container"></div>
        </div>
      </div>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js"
        strategy="afterInteractive"
      />
      <TerminalRuntimeLoader />
    </>
  );
}
