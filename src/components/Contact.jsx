import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { LinkedinIcon, GithubIcon, LeetcodeIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personal, socialLinks } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: "relative", zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="section-title">
            Get In <span className="gold-accent">Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="section-description">
            Interested in discussing full-stack development, software engineering internships, or machine learning projects? Let's connect.
          </p>
        </div>

        {/* Contact Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "2.5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Channels & Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              className="luxury-card"
              style={{
                padding: "2rem",
                background: "linear-gradient(145deg, #1C130E 0%, #120C09 100%)",
                border: "1px solid var(--border-gold)",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Direct Channels
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Feel free to reach out directly via email or connect on LinkedIn and GitHub.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div
                style={{
                  padding: "1rem 1.25rem",
                  background: "rgba(36, 23, 17, 0.7)",
                  border: "1px solid var(--border-gold)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", overflow: "hidden" }}>
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
                    <Mail size={18} />
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      Personal Email
                    </div>
                    <a
                      href={`mailto:${socialLinks.email}`}
                      style={{
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        color: "var(--gold-bright)",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        display: "block",
                      }}
                    >
                      {socialLinks.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn-icon"
                  style={{ width: "36px", height: "36px", flexShrink: 0 }}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={16} color="var(--gold-bright)" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location & Status Info */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <MapPin size={16} color="var(--gold-primary)" />
                  <span>{personal.location}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
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
                  <span style={{ color: "var(--gold-bright)", fontWeight: 600 }}>
                    {personal.availability}
                  </span>
                </div>
              </div>

              {/* Social Channels List */}
              <div style={{ paddingTop: "0.75rem", borderTop: "1px solid rgba(244, 196, 48, 0.12)" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  Profiles:
                </span>

                <div style={{ display: "flex", gap: "0.85rem" }}>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ gap: "0.45rem" }}
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ gap: "0.45rem" }}
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={socialLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ gap: "0.45rem" }}
                  >
                    <LeetcodeIcon size={16} />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div
            className="luxury-card"
            style={{
              padding: "2rem",
              background: "linear-gradient(145deg, #1A120D 0%, #110B08 100%)",
              border: "1px solid var(--border-gold)",
            }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.4rem",
              }}
            >
              Send a Message
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Leave your name, email, and inquiry. I will get back to you promptly.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(244, 196, 48, 0.12)",
                  border: "1px solid var(--gold-primary)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <Check size={32} color="var(--gold-bright)" />
                <h4 style={{ color: "var(--gold-bright)", fontSize: "1.1rem" }}>Message Sent Successfully</h4>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                  Thank you for reaching out, {formData.name || "friend"}! I'll reply to your email soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.15rem" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Sayush, I came across your portfolio and wanted to reach out regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: "0.5rem" }}
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
