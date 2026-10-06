import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isScrolled ? "0.85rem 0" : "1.25rem 0",
        backgroundColor: isScrolled ? "rgba(11, 9, 8, 0.92)" : "rgba(11, 9, 8, 0.65)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: isScrolled
          ? "1px solid rgba(244, 196, 48, 0.20)"
          : "1px solid rgba(244, 196, 48, 0.08)",
        boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.6)" : "none",
        transition: "all var(--transition-smooth)",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Simple Premium Golden "SS" Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            textDecoration: "none",
          }}
          aria-label="Sayush Shukla Portfolio Home"
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              background: "linear-gradient(145deg, #241711, #15100D)",
              border: "1.5px solid var(--gold-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 16px rgba(244, 196, 48, 0.22)",
              transition: "transform var(--transition-fast), box-shadow var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 22px rgba(244, 196, 48, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 16px rgba(244, 196, 48, 0.22)";
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                fontSize: "1.05rem",
                letterSpacing: "0.04em",
                color: "var(--gold-primary)",
              }}
            >
              SS
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.18rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              {portfolioData.personal.name}
            </span>
            <span
              style={{
                fontSize: "0.72rem",
                fontFamily: "var(--font-mono)",
                color: "var(--gold-primary)",
                letterSpacing: "0.05em",
              }}
            >
              portfolio // v2.0
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "2rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: "0.92rem",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--gold-primary)" : "var(--text-secondary)",
                  transition: "color var(--transition-fast)",
                  position: "relative",
                  padding: "0.35rem 0",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-bright)")}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? "var(--gold-primary)" : "var(--text-secondary)";
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      width: "100%",
                      height: "2px",
                      background: "linear-gradient(90deg, transparent, var(--gold-primary), transparent)",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={onOpenResume}
            className="btn btn-primary btn-sm desktop-only-btn"
            style={{ display: "none" }}
          >
            <FileText size={16} />
            <span>Resume</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
            style={{ border: "1px solid var(--border-gold)" }}
          >
            {mobileMenuOpen ? <X size={20} color="var(--gold-primary)" /> : <Menu size={20} color="var(--gold-primary)" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "rgba(21, 16, 13, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-gold)",
            boxShadow: "var(--shadow-lg)",
            padding: "1.5rem 1.5rem 2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            animation: "fadeIn 0.2s ease-out",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontSize: "1.05rem",
                fontWeight: activeSection === link.id ? 700 : 500,
                color: activeSection === link.id ? "var(--gold-bright)" : "var(--text-primary)",
                padding: "0.6rem 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(244, 196, 48, 0.12)",
                transition: "color var(--transition-fast)",
              }}
            >
              <span>{link.name}</span>
              {activeSection === link.id && <span style={{ color: "var(--gold-primary)" }}>●</span>}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "0.75rem" }}
          >
            <FileText size={18} />
            <span>View Resume</span>
          </button>
        </div>
      )}

      {/* Responsive Inline CSS */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-only-btn {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
