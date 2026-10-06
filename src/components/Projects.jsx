import React, { useState } from "react";
import { ExternalLink, Code2, CheckCircle2, X } from "lucide-react";
import { GithubIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding" style={{ position: "relative", zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Practical Engineering</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gold-accent">Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="section-description">
            Hands-on machine learning, natural language processing, and computer vision systems built with real-world datasets and robust software design.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              style={{
                position: "relative",
              }}
            >
              {/* Project Image Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "210px",
                  overflow: "hidden",
                  backgroundColor: "var(--bg-dark-brown)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />

                {/* Subtle vignette gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(17, 11, 8, 0.95) 0%, rgba(17, 11, 8, 0.2) 60%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Badges on Image */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    right: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pointerEvents: "none",
                  }}
                >
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(11, 9, 8, 0.85)",
                      border: "1px solid var(--border-gold)",
                      color: "var(--gold-primary)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-mono)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {project.badge}
                  </span>

                  <span
                    style={{
                      padding: "0.22rem 0.65rem",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(11, 9, 8, 0.85)",
                      border:
                        project.status === "Completed"
                          ? "1px solid rgba(16, 185, 129, 0.4)"
                          : "1px solid rgba(245, 158, 11, 0.4)",
                      color: project.status === "Completed" ? "#34d399" : "#fbbf24",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-mono)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: project.status === "Completed" ? "#10b981" : "#f59e0b",
                      }}
                    />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  gap: "1.1rem",
                }}
              >
                <div>
                  <h3
                    className="project-title"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                      marginBottom: "0.5rem",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {project.shortDescription}
                  </p>
                </div>

                {/* Key Highlights */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {project.highlights.map((hl, hIdx) => (
                    <div
                      key={hIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.55rem",
                        fontSize: "0.82rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <CheckCircle2
                        size={15}
                        color="var(--gold-primary)"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.45rem",
                    marginTop: "auto",
                    paddingTop: "0.5rem",
                  }}
                >
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: "0.74rem",
                        fontFamily: "var(--font-mono)",
                        color: "#F5F1E8",
                        background: "rgba(36, 23, 17, 0.8)",
                        border: "1px solid rgba(244, 196, 48, 0.15)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Buttons */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid rgba(244, 196, 48, 0.12)",
                  }}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ gap: "0.5rem" }}
                  >
                    <GithubIcon size={15} />
                    <span>Repository</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-secondary btn-sm"
                    style={{ gap: "0.4rem" }}
                  >
                    <span>Details</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              padding: "1.75rem 2rem",
              background: "#15100D",
              border: "1px solid var(--gold-primary)",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "1.25rem",
                borderBottom: "1px solid rgba(244, 196, 48, 0.18)",
                paddingBottom: "1rem",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--gold-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {selectedProject.badge} • {selectedProject.status}
                </span>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    marginTop: "0.25rem",
                  }}
                >
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="btn-icon"
                aria-label="Close Modal"
                style={{ width: "36px", height: "36px" }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: "100%",
                  maxHeight: "260px",
                  objectFit: "cover",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-gold)",
                }}
              />

              <div>
                <h4 style={{ fontSize: "1rem", color: "var(--gold-bright)", marginBottom: "0.5rem" }}>
                  Overview &amp; Architecture
                </h4>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                  {selectedProject.fullDescription}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "1rem", color: "var(--gold-bright)", marginBottom: "0.5rem" }}>
                  Technical Highlights
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {selectedProject.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--gold-primary)" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: "1rem", color: "var(--gold-bright)", marginBottom: "0.5rem" }}>
                  Technologies Used
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-mono)",
                        color: "#F5F1E8",
                        background: "rgba(36, 23, 17, 0.9)",
                        border: "1px solid var(--border-gold)",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(244, 196, 48, 0.18)",
                  marginTop: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {selectedProject.placeholderNote}
                </span>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <GithubIcon size={16} />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
