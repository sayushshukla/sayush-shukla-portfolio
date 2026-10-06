import React, { useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Hero({ onOpenResume }) {
  const { personal, socialLinks } = portfolioData;
  const [imgSrc, setImgSrc] = useState("/pic.jpeg");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageError = () => {
    if (imgSrc === "/pic.jpeg") {
      setImgSrc("/hero.jpg");
    } else if (imgSrc === "/hero.jpg") {
      setImgSrc("/profile-placeholder.svg");
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "7.5rem",
        paddingBottom: "4.5rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Introduction & CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
            {/* Availability Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.4rem 1.1rem",
                borderRadius: "var(--radius-full)",
                background: "rgba(36, 23, 17, 0.75)",
                border: "1px solid var(--border-gold)",
                width: "fit-content",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--gold-primary)",
                  display: "inline-block",
                }}
                className="animate-gold-pulse"
              />
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-mono)",
                  color: "var(--gold-bright)",
                  letterSpacing: "0.03em",
                }}
              >
                {personal.availability}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-secondary)",
                  display: "block",
                  marginBottom: "0.4rem",
                  letterSpacing: "0.02em",
                }}
              >
                Hi, I'm
              </span>
              <h1
                style={{
                  fontSize: "clamp(2.7rem, 5.5vw, 4.3rem)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                <span className="gold-gradient-text">{personal.name}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.22rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                lineHeight: 1.5,
              }}
            >
              <span>Computer Science Engineering Student</span>{" "}
              <span style={{ color: "var(--gold-primary)", margin: "0 0.35rem" }}>|</span>{" "}
              <span>Full Stack Developer</span>{" "}
              <span style={{ color: "var(--gold-primary)", margin: "0 0.35rem" }}>|</span>{" "}
              <span style={{ color: "var(--gold-bright)" }}>AI/ML Enthusiast</span>
            </p>

            {/* Short Introduction */}
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "580px",
              }}
            >
              {personal.shortDescription}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                paddingTop: "0.5rem",
              }}
            >
              {/* Primary button: Golden background + dark text */}
              <button
                onClick={() => scrollTo("projects")}
                className="btn btn-primary"
                id="hero-view-projects-btn"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </button>

              {/* Secondary button: Transparent/dark background + golden border */}
              <button
                onClick={onOpenResume}
                className="btn btn-secondary"
                id="hero-download-resume-btn"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </button>

              {/* Contact Button */}
              <button
                onClick={() => scrollTo("contact")}
                className="btn btn-outline"
                id="hero-contact-btn"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons Bar Underneath */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                paddingTop: "0.75rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Connect:
              </span>

              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                {/* GitHub */}
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  title="GitHub Profile"
                  aria-label="GitHub"
                >
                  <GithubIcon size={19} />
                </a>

                {/* LinkedIn */}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={19} />
                </a>

                {/* LeetCode */}
                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  title="LeetCode Profile (sayush777)"
                  aria-label="LeetCode"
                >
                  <LeetcodeIcon size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Professional Profile Image */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="hero-image-col"
          >
            {/* Subtle Rotating Gold Orbital Ring */}
            <div
              style={{
                position: "absolute",
                width: "min(410px, 92vw)",
                height: "min(410px, 92vw)",
                borderRadius: "50%",
                border: "1px dashed rgba(244, 196, 48, 0.28)",
                pointerEvents: "none",
                animation: "subtleFloat 6s ease-in-out infinite",
              }}
            />

            {/* Ambient Warm Golden Backlight */}
            <div
              style={{
                position: "absolute",
                width: "min(340px, 80vw)",
                height: "min(340px, 80vw)",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(244, 196, 48, 0.16) 0%, rgba(36, 23, 17, 0.4) 60%, transparent 80%)",
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />

            {/* Profile Image Wrapper */}
            <div
              className="hero-photo-wrapper animate-subtle-float"
              style={{
                position: "relative",
                width: "min(360px, 82vw)",
                height: "min(360px, 82vw)",
                borderRadius: "50%",
                padding: "6px",
                background: "linear-gradient(145deg, rgba(244, 196, 48, 0.6) 0%, rgba(36, 23, 17, 0.8) 50%, rgba(244, 196, 48, 0.3) 100%)",
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.75), 0 0 32px rgba(244, 196, 48, 0.20)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "var(--bg-dark-brown)",
                  border: "2.5px solid var(--gold-primary)",
                  position: "relative",
                }}
              >
                <img
                  src={imgSrc}
                  alt={personal.name}
                  onError={handleImageError}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Floating Luxury Glass Badge 1: Focus Area */}
              <div
                className="luxury-card hero-float-badge-1"
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "-20px",
                  padding: "0.65rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-gold)",
                  background: "rgba(21, 16, 13, 0.92)",
                  boxShadow: "var(--shadow-md), 0 0 16px rgba(244, 196, 48, 0.14)",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(244, 196, 48, 0.12)",
                    border: "1px solid var(--border-gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-primary)",
                  }}
                >
                  <Sparkles size={16} />
                </div>
                <div>
                  <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    Focus
                  </div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    Full Stack &amp; AI/ML
                  </div>
                </div>
              </div>

              {/* Floating Luxury Glass Badge 2: Academic Record */}
              <div
                className="luxury-card hero-float-badge-2"
                style={{
                  position: "absolute",
                  bottom: "-15px",
                  left: "-20px",
                  padding: "0.65rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-gold)",
                  background: "rgba(21, 16, 13, 0.92)",
                  boxShadow: "var(--shadow-md), 0 0 16px rgba(244, 196, 48, 0.14)",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(244, 196, 48, 0.12)",
                    border: "1px solid var(--border-gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-primary)",
                  }}
                >
                  <GraduationCap size={16} />
                </div>
                <div>
                  <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    Academic Record
                  </div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    PSIT • 7.6 CGPA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .hero-image-col {
            order: -1;
            margin-bottom: 1rem;
          }
          .hero-float-badge-1 {
            top: -10px !important;
            right: 0px !important;
          }
          .hero-float-badge-2 {
            bottom: -10px !important;
            left: 0px !important;
          }
        }
      `}</style>
    </section>
  );
}
