import {
  GraduationCap,
  Calendar,
  Award,
  CheckCircle2,
  BookOpen,
  Binary,
  Code,
  Server,
  Cpu,
  Atom,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education, certifications, currentlyLearning } = portfolioData;

  const learningIcons = {
    Binary,
    Code,
    Server,
    Cpu,
    Atom,
    Sparkles,
  };

  return (
    <section id="education" className="section-padding" style={{ position: "relative", zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic &amp; Continuous Learning</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span className="gold-accent">Credentials</span>
          </h2>
          <div className="section-divider" />
          <p className="section-description">
            Formal engineering degree coursework at PSIT, verified certifications, and active daily problem-solving practice.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div style={{ marginBottom: "4rem" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "var(--gold-bright)",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <BookOpen size={20} color="var(--gold-primary)" />
            <span>Academic Background</span>
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {education.map((edu) => (
              <div
                key={edu.id}
                className="luxury-card"
                style={{
                  padding: "1.75rem",
                  background: "linear-gradient(145deg, #1E140F 0%, #130D0A 100%)",
                  border: "1px solid var(--border-gold)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.1rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                  <div>
                    <span
                      style={{
                        fontSize: "0.74rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--gold-primary)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {edu.badge}
                    </span>
                    <h4
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginTop: "0.2rem",
                      }}
                    >
                      {edu.institution}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "var(--gold-bright)",
                        marginTop: "0.15rem",
                      }}
                    >
                      {edu.degree}
                    </p>
                  </div>

                  <span
                    style={{
                      padding: "0.3rem 0.75rem",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(244, 196, 48, 0.12)",
                      border: "1px solid var(--border-gold)",
                      color: "var(--gold-primary)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-mono)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {edu.metrics}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <Calendar size={14} color="var(--gold-primary)" />
                  <span>{edu.timeline}</span>
                </div>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {edu.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    marginTop: "auto",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid rgba(244, 196, 48, 0.12)",
                  }}
                >
                  {edu.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.55rem",
                        fontSize: "0.82rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <CheckCircle2 size={15} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Certifications */}
        <div style={{ marginBottom: "4rem" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "var(--gold-bright)",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <Award size={20} color="var(--gold-primary)" />
            <span>Verified Certifications</span>
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="luxury-card-interactive"
                style={{
                  padding: "1.4rem",
                  background: "linear-gradient(145deg, #1C130E 0%, #120C09 100%)",
                  border: "1px solid var(--border-gold)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--gold-primary)",
                      fontWeight: 600,
                    }}
                  >
                    {cert.category}
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {cert.date}
                  </span>
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.3,
                    }}
                  >
                    {cert.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--gold-bright)",
                      marginTop: "0.15rem",
                    }}
                  >
                    {cert.issuer}
                  </p>
                </div>

                <p
                  style={{
                    fontSize: "0.86rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                  }}
                >
                  {cert.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.35rem",
                    marginTop: "auto",
                    paddingTop: "0.5rem",
                  }}
                >
                  {cert.skills.map((s, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-secondary)",
                        background: "rgba(36, 23, 17, 0.7)",
                        border: "1px solid rgba(244, 196, 48, 0.12)",
                        padding: "0.15rem 0.55rem",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning / Daily Focus */}
        <div>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "var(--gold-bright)",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <Sparkles size={20} color="var(--gold-primary)" />
            <span>Active Focus &amp; Daily Practice</span>
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {currentlyLearning.map((item, idx) => {
              const Icon = learningIcons[item.icon] || Code;
              return (
                <div
                  key={idx}
                  className="luxury-card"
                  style={{
                    padding: "1.3rem 1.4rem",
                    background: "rgba(36, 23, 17, 0.65)",
                    border: "1px solid var(--border-gold)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(244, 196, 48, 0.12)",
                      border: "1px solid var(--border-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold-primary)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                      <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                        {item.title}
                      </h4>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontFamily: "var(--font-mono)",
                          color: "var(--gold-primary)",
                          background: "rgba(244, 196, 48, 0.08)",
                          padding: "0.15rem 0.5rem",
                          borderRadius: "var(--radius-full)",
                          border: "1px solid var(--border-gold)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.level}
                      </span>
                    </div>

                    <p style={{ fontSize: "0.82rem", color: "var(--gold-bright)", fontFamily: "var(--font-mono)" }}>
                      {item.focus}
                    </p>

                    <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      {item.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
