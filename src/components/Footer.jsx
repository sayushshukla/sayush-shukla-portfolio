import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { personal, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#0B0908",
        borderTop: "1px solid rgba(244, 196, 48, 0.16)",
        paddingTop: "3.5rem",
        paddingBottom: "2.5rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid rgba(244, 196, 48, 0.1)",
          }}
        >
          {/* Brand & Brief */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "linear-gradient(145deg, #241711, #15100D)",
                border: "1.5px solid var(--gold-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gold-primary)",
                fontWeight: 900,
                fontSize: "1rem",
                fontFamily: "var(--font-heading)",
              }}
            >
              SS
            </div>

            <div>
              <div
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {personal.name}
              </div>
              <div
                style={{
                  fontSize: "0.76rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--gold-primary)",
                }}
              >
                Computer Science Engineering Student • PSIT
              </div>
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              title="LeetCode"
              aria-label="LeetCode"
            >
              <LeetcodeIcon size={18} />
            </a>

            <button
              onClick={scrollToTop}
              className="btn-icon"
              title="Back to Top"
              aria-label="Back to top"
              style={{ border: "1px solid var(--gold-primary)", color: "var(--gold-primary)" }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "2rem",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © {currentYear} {personal.name}. All rights reserved.
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
            Crafted with <span style={{ color: "var(--gold-primary)" }}>Luxury &amp; Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
