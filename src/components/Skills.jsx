import React, { useState } from "react";
import {
  Code2,
  FileCode2,
  Terminal,
  FileJson,
  Globe,
  Palette,
  Sparkles,
  Layout,
  Atom,
  Server,
  Layers,
  Database,
  Boxes,
  Brain,
  Cpu,
  Network,
  GitBranch,
  Laptop,
  Container,
  Smartphone,
  Wrench,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("all");

  const iconMap = {
    Code2,
    FileCode2,
    Terminal,
    FileJson,
    Globe,
    Palette,
    Sparkles,
    Layout,
    Atom,
    Server,
    Layers,
    Database,
    Boxes,
    Brain,
    Cpu,
    Network,
    GitBranch,
    Github: GithubIcon,
    Laptop,
    Container,
    Smartphone,
  };

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "programming", label: "Programming", list: skills.programming },
    { id: "frontend", label: "Frontend", list: skills.frontend },
    { id: "backend", label: "Backend", list: skills.backend },
    { id: "databases", label: "Database", list: skills.databases },
    { id: "aiml", label: "AI / Machine Learning", list: skills.aiml },
    { id: "tools", label: "Tools", list: skills.tools },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return [
        { catTitle: "Programming", items: skills.programming },
        { catTitle: "Frontend", items: skills.frontend },
        { catTitle: "Backend", items: skills.backend },
        { catTitle: "Database", items: skills.databases },
        { catTitle: "AI / Machine Learning", items: skills.aiml },
        { catTitle: "Tools", items: skills.tools },
      ];
    }
    const cat = categories.find((c) => c.id === activeCategory);
    return cat ? [{ catTitle: cat.label, items: cat.list }] : [];
  };

  return (
    <section id="skills" className="section-padding" style={{ position: "relative", zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Wrench size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Technical <span className="gold-accent">Skills</span>
          </h2>
          <div className="section-divider" />
          <p className="section-description">
            Hands-on expertise across foundational programming, modern web frameworks, AI/ML libraries, and development tools.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.65rem",
            marginBottom: "2.5rem",
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "0.5rem 1.15rem",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-body)",
                  fontWeight: isActive ? 700 : 500,
                  borderRadius: "var(--radius-full)",
                  cursor: "pointer",
                  border: isActive ? "1px solid var(--gold-primary)" : "1px solid var(--border-gold)",
                  background: isActive ? "var(--gold-primary)" : "rgba(36, 23, 17, 0.6)",
                  color: isActive ? "var(--text-dark)" : "var(--text-primary)",
                  boxShadow: isActive ? "0 4px 14px rgba(244, 196, 48, 0.3)" : "none",
                  transition: "all var(--transition-fast)",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grouped Skills Display */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.75rem" }}>
          {getFilteredSkills().map((group, gIdx) => (
            <div key={gIdx}>
              {activeCategory === "all" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--gold-primary)",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--gold-bright)",
                      fontFamily: "var(--font-heading)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {group.catTitle}
                  </h3>
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background: "linear-gradient(90deg, rgba(244, 196, 48, 0.25), transparent)",
                    }}
                  />
                </div>
              )}

              {/* Skill Cards Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: "1.15rem",
                }}
              >
                {group.items.map((skill, sIdx) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={sIdx}
                      className="luxury-card-interactive"
                      style={{
                        padding: "1.15rem 1.25rem",
                        background: "linear-gradient(145deg, #241711 0%, #17100D 100%)",
                        border: "1px solid var(--border-gold)",
                        borderRadius: "var(--radius-md)",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        boxShadow: "var(--shadow-sm)",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--gold-primary)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.5), 0 0 18px rgba(244, 196, 48, 0.16)";
                        e.currentTarget.style.transform = "translateY(-4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-gold)";
                        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {/* Small Technology Icon */}
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "10px",
                          background: "rgba(58, 36, 24, 0.65)",
                          border: "1px solid rgba(244, 196, 48, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--gold-primary)",
                          flexShrink: 0,
                          transition: "transform var(--transition-fast)",
                        }}
                      >
                        <Icon size={20} />
                      </div>

                      {/* Content */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem", overflow: "hidden" }}>
                        <span
                          style={{
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: "#F5F1E8",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {skill.name}
                        </span>
                        <span
                          style={{
                            fontSize: "0.76rem",
                            color: "var(--text-secondary)",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                          }}
                        >
                          {skill.level}
                        </span>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontFamily: "var(--font-mono)",
                            color: "var(--gold-primary)",
                            fontWeight: 500,
                          }}
                        >
                          • {skill.stage}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
