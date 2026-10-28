import React, { useState } from "react";
import { Award, BookOpen, Code2, Layers, MapPin, GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { personal } = portfolioData;
  const [imgSrc, setImgSrc] = useState("/pic.jpeg");

  const handleImageError = () => {
    if (imgSrc === "/pic.jpeg") {
      setImgSrc("/hero.jpg");
    } else if (imgSrc === "/hero.jpg") {
      setImgSrc("/profile-placeholder.svg");
    }
  };

  const statIcons = {
    cgpa: Award,
    sem: BookOpen,
    projects: Code2,
    tech: Layers,
  };

  return (
    <section id="about" className="section-padding" style={{ position: "relative", zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="section-title">
            About <span className="gold-accent">Me</span>
          </h2>
          <div className="section-divider" />
          <p className="section-description">
            A dedicated Computer Science student building practical software solutions with clean code and modern AI foundations.
          </p>
        </div>

        {/* Main About Card: Dark brown card with subtle golden borders */}
        <div
          className="luxury-card"
          style={{
            padding: "clamp(1.5rem, 3.5vw, 2.75rem)",
            background: "linear-gradient(145deg, #1D140F 0%, #130D0A 100%)",
            border: "1px solid var(--border-gold)",
            boxShadow: "var(--shadow-lg), 0 0 30px rgba(244, 196, 48, 0.05)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.8fr 1.2fr",
              gap: "2.75rem",
              alignItems: "center",
            }}
            className="about-grid"
          >
            {/* Left Column: Photo & Academic Identity */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1.25rem",
              }}
            >
              {/* Photo Frame */}
              <div
                style={{
                  position: "relative",
                  width: "190px",
                  height: "190px",
                  borderRadius: "50%",
                  padding: "4px",
                  background: "linear-gradient(135deg, var(--gold-primary), #3A2418, var(--gold-muted))",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.6), 0 0 20px rgba(244, 196, 48, 0.16)",
                }}
              >
                <img
                  src={imgSrc}
                  alt={personal.name}
                  onError={handleImageError}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    backgroundColor: "var(--bg-dark-brown)",
                    display: "block",
                  }}
                />
              </div>

              {/* Title & College */}
              <div>
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {personal.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--gold-primary)",
                    fontWeight: 500,
                  }}
                >
                  B.Tech Computer Science Engineering
                </p>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-secondary)",
                    marginTop: "0.25rem",
                  }}
                >
                  {personal.college}
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    marginTop: "0.5rem",
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                  }}
                >
                  <MapPin size={13} color="var(--gold-primary)" />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Bio Narrative & 4 Factual Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.95rem" }}>
                {personal.aboutText.map((paragraph, index) => (
                  <p
                    key={index}
                    style={{
                      fontSize: "0.98rem",
                      lineHeight: 1.75,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Factual Stats Grid: 2nd Year, 3+ Projects, Multiple Technologies */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1rem",
                  paddingTop: "0.5rem",
                }}
                className="about-stats-grid"
              >
                {personal.stats.map((stat) => {
                  const Icon = statIcons[stat.id] || Award;
                  return (
                    <div
                      key={stat.id}
                      style={{
                        padding: "1rem 1.15rem",
                        background: "rgba(36, 23, 17, 0.65)",
                        border: "1px solid var(--border-gold)",
                        borderRadius: "var(--radius-md)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.9rem",
                        transition: "all var(--transition-fast)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-gold-hover)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-gold)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
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
                        <Icon size={18} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "1.35rem",
                            fontWeight: 800,
                            fontFamily: "var(--font-heading)",
                            color: "var(--gold-bright)",
                            lineHeight: 1.1,
                          }}
                        >
                          {stat.value}
                        </div>
                        <div
                          style={{
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                          }}
                        >
                          {stat.label}
                        </div>
                        <div
                          style={{
                            fontSize: "0.72rem",
                            fontFamily: "var(--font-mono)",
                            color: "var(--text-muted)",
                          }}
                        >
                          {stat.sub}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .about-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
