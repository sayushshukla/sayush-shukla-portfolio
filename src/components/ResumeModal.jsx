import React from "react";
import { X, Printer } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, socialLinks, skills, projects, education, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      style={{ zIndex: 1000 }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "800px",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          background: "#15100D",
          border: "1.5px solid var(--gold-primary)",
        }}
      >
        {/* Top Control Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1.75rem",
            borderBottom: "1px solid rgba(244, 196, 48, 0.2)",
            background: "#1C130E",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                color: "var(--gold-bright)",
                fontSize: "1.1rem",
              }}
            >
              Curriculum Vitae
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
              }}
            >
              // Sayush Shukla
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
            <button
              onClick={handlePrint}
              className="btn btn-secondary btn-sm"
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="btn-icon"
              style={{ width: "36px", height: "36px" }}
              aria-label="Close Resume"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div
          id="printable-resume"
          style={{
            padding: "2rem",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            color: "var(--text-primary)",
          }}
        >
          {/* Header Info */}
          <div
            style={{
              borderBottom: "2px solid rgba(244, 196, 48, 0.4)",
              paddingBottom: "1.25rem",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: "var(--gold-bright)",
                lineHeight: 1.1,
              }}
            >
              {personal.name}
            </h1>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-primary)",
                fontWeight: 600,
                marginTop: "0.35rem",
              }}
            >
              {personal.role} | {personal.subheading}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem",
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                marginTop: "0.75rem",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span>{personal.location}</span>
              <span>•</span>
              <a href={`mailto:${socialLinks.email}`} style={{ color: "var(--gold-primary)" }}>
                {socialLinks.email}
              </a>
              <span>•</span>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--gold-primary)" }}>
                LinkedIn Profile
              </a>
              <span>•</span>
              <a href={socialLinks.github} target="_blank" rel="noreferrer" style={{ color: "var(--gold-primary)" }}>
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2
              style={{
                fontSize: "1.1rem",
                fontFamily: "var(--font-mono)",
                color: "var(--gold-bright)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(244, 196, 48, 0.25)",
                paddingBottom: "0.35rem",
                marginBottom: "0.85rem",
              }}
            >
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                  <span style={{ color: "#F5F1E8", fontSize: "1rem" }}>{edu.institution}</span>
                  <span style={{ color: "var(--gold-primary)", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
                    {edu.metrics}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--gold-bright)", fontSize: "0.88rem" }}>
                  <span>{edu.degree}</span>
                  <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.82rem" }}>
                    {edu.timeline}
                  </span>
                </div>
                <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", marginTop: "0.3rem" }}>
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <h2
              style={{
                fontSize: "1.1rem",
                fontFamily: "var(--font-mono)",
                color: "var(--gold-bright)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(244, 196, 48, 0.25)",
                paddingBottom: "0.35rem",
                marginBottom: "0.85rem",
              }}
            >
              Technical Skills
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", fontSize: "0.88rem" }}>
              <div>
                <strong style={{ color: "var(--gold-bright)" }}>Languages: </strong>
                <span style={{ color: "var(--text-secondary)" }}>
                  {skills.programming.map((s) => s.name).join(", ")}
                </span>
              </div>
              <div>
                <strong style={{ color: "var(--gold-bright)" }}>Frontend: </strong>
                <span style={{ color: "var(--text-secondary)" }}>
                  {skills.frontend.map((s) => s.name).join(", ")}
                </span>
              </div>
              <div>
                <strong style={{ color: "var(--gold-bright)" }}>Backend &amp; Databases: </strong>
                <span style={{ color: "var(--text-secondary)" }}>
                  {[...skills.backend, ...skills.databases].map((s) => s.name).join(", ")}
                </span>
              </div>
              <div>
                <strong style={{ color: "var(--gold-bright)" }}>AI / Machine Learning: </strong>
                <span style={{ color: "var(--text-secondary)" }}>
                  {skills.aiml.map((s) => s.name).join(", ")}
                </span>
              </div>
              <div>
                <strong style={{ color: "var(--gold-bright)" }}>Tools &amp; Environments: </strong>
                <span style={{ color: "var(--text-secondary)" }}>
                  {skills.tools.map((s) => s.name).join(", ")}
                </span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2
              style={{
                fontSize: "1.1rem",
                fontFamily: "var(--font-mono)",
                color: "var(--gold-bright)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(244, 196, 48, 0.25)",
                paddingBottom: "0.35rem",
                marginBottom: "0.85rem",
              }}
            >
              Academic &amp; Independent Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: "1.15rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontWeight: 700, color: "#F5F1E8", fontSize: "0.98rem" }}>
                    {proj.title}
                  </span>
                  <span style={{ color: "var(--gold-primary)", fontSize: "0.78rem", fontFamily: "var(--font-mono)" }}>
                    {proj.badge} • {proj.status}
                  </span>
                </div>
                <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
                  {proj.fullDescription}
                </p>
                <div style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "var(--gold-bright)", marginTop: "0.25rem" }}>
                  Technologies: {proj.technologies.join(" • ")}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2
              style={{
                fontSize: "1.1rem",
                fontFamily: "var(--font-mono)",
                color: "var(--gold-bright)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(244, 196, 48, 0.25)",
                paddingBottom: "0.35rem",
                marginBottom: "0.85rem",
              }}
            >
              Certifications &amp; Achievements
            </h2>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              {certifications.map((c) => (
                <li key={c.id} style={{ marginBottom: "0.4rem" }}>
                  <strong style={{ color: "#F5F1E8" }}>{c.title}</strong> — {c.issuer} ({c.date})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
