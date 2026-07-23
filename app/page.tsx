"use client";

// ============================================================================
// TestAS Mastery — Official Documentation & Publication Guide
// Enhanced with interactive UI, live search, dark/light theme, TOC sidebar,
// and 5 high-resolution app screenshots in stylized browser windows.
// ============================================================================

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Grid,
  Activity,
  Cpu,
  Flame,
  Timer,
  Library,
  Bot,
  Trophy,
  Globe,
  ArrowRight,
  Shield,
  ChevronRight,
  Layers,
  Search,
  Moon,
  Sun,
  Maximize2,
  X,
  ExternalLink,
  CheckCircle2,
  Zap,
  Brain,
  Clock,
  BarChart3,
  Lock,
  Volume2,
  Stethoscope,
  Wrench,
  FileText,
  LayoutDashboard,
  Copy,
  Check,
  Share2,
  Sparkle
} from "lucide-react";

const CONFIG = {
  liveAppUrl: "https://testasprep.netlify.app",
  officialDocsUrl: "https://testasprepdocs.vercel.app",
  githubOrgUrl: "https://github.com/testasprep",
  repoUrl: "https://github.com/testasprep/docs",
  mediumBlogUrl: "https://testasmastery.blogspot.com/2026/07/testas-exam-prep-for-german-university.html",
  contactEmail: "testasprepsupport@gmail.com",
};

interface ScreenshotItem {
  id: string;
  title: string;
  src: string;
  caption: string;
  badge: string;
  url: string;
}

const GALLERY_IMAGES: ScreenshotItem[] = [
  {
    id: "latinsquare",
    title: "Latin Square Solver & Quiz Sandbox",
    src: "/images/latinsquare.png",
    caption: "Procedural logic matrix generator with backtracking verification, variable grid sizes (4x4 to 7x7), and dual practice/quiz modes.",
    badge: "Core Module",
    url: "https://testasprep.netlify.app/core/latin-square",
  },
  {
    id: "figuresequences",
    title: "Figure Sequences Subtest Generator",
    src: "/images/figuresequences.png",
    caption: "Spatial reasoning laboratory with dynamic shape rotation, scaling, shading, mirroring, and duplicate-suppression filters.",
    badge: "Core Module",
    url: "https://testasprep.netlify.app/core/figure-sequences",
  },
  {
    id: "math",
    title: "Mathematical & Quantitative Reasoning Lab",
    src: "/images/math.png",
    caption: "Non-calculator math lab covering linear systems, quantitative relationships, and higher-order numeric sequence patterns.",
    badge: "Core Module",
    url: "https://testasprep.netlify.app/core/quantitative",
  },
  {
    id: "everydaytask",
    title: "30-Task Everyday Practice & Streak Engine",
    src: "/images/everydaytask.png",
    caption: "Balanced daily check delivering exactly 30 questions across math, figure sequences, and Latin squares with XP bonus rewards.",
    badge: "Daily Routine",
    url: "https://testasprep.netlify.app/daily-task",
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard & Cognitive Radar",
    src: "/images/dashboard.png",
    caption: "Real-time user stats, XP level ranking (Novice to Grandmaster), daily streak tracking, and 6-axis cognitive profile radar.",
    badge: "Analytics Hub",
    url: "https://testasprep.netlify.app/dashboard",
  },
];

interface DocSection {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ComponentType<any>;
  badge?: string;
  summary: string;
  image?: ScreenshotItem;
}

export default function DocsPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("overview");
  const [lightboxImage, setLightboxImage] = useState<ScreenshotItem | null>(null);
  const [subjectTab, setSubjectTab] = useState<"engineering" | "medicine">("engineering");
  const [copiedLink, setCopiedLink] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  // Scroll spy & reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);

      const sectionIds = [
        "overview",
        "philosophy",
        "latin-square",
        "figure-sequences",
        "math-reasoning",
        "subject-modules",
        "everyday-task",
        "dashboard-analytics",
        "exam-simulator",
        "ai-tutor",
        "study-library",
        "global-settings",
        "accounts-pricing",
        "gallery",
        "walkthrough-links",
      ];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const sectionsList: DocSection[] = useMemo(
    () => [
      {
        id: "overview",
        title: "Platform Overview & Mission",
        shortTitle: "Overview",
        icon: GraduationCap,
        badge: "Intro",
        summary: "Introduction to TestAS Mastery — the all-in-one preparation engine built to empower international candidates.",
      },
      {
        id: "philosophy",
        title: "Design Philosophy: Cognitive Training Over Memorization",
        shortTitle: "Design Philosophy",
        icon: Brain,
        badge: "Pedagogy",
        summary: "Why procedural question generation beats static question banks for standardized logic exams.",
      },
      {
        id: "latin-square",
        title: "Latin Square Practice & Solver",
        shortTitle: "Latin Squares",
        icon: Grid,
        badge: "Core Subtest",
        summary: "Row-column symbol matrices powered by backtracking validation engines.",
        image: GALLERY_IMAGES[0],
      },
      {
        id: "figure-sequences",
        title: "Figure Sequences Subtest",
        shortTitle: "Figure Sequences",
        icon: Layers,
        badge: "Core Subtest",
        summary: "Visual transformations, multi-tier spatial reasoning rules, and duplicate-suppression.",
        image: GALLERY_IMAGES[1],
      },
      {
        id: "math-reasoning",
        title: "Mathematical & Quantitative Reasoning",
        shortTitle: "Math Reasoning",
        icon: Activity,
        badge: "Core Subtest",
        summary: "Non-calculator math lab covering linear systems, quantitative relationships, and sequence patterns.",
        image: GALLERY_IMAGES[2],
      },
      {
        id: "subject-modules",
        title: "Subject-Specific Modules: Interactive Labs",
        shortTitle: "Subject Labs",
        icon: Cpu,
        badge: "Engineering & Med",
        summary: "Dedicated lab environments for Engineering and Medicine streams with dynamic case studies.",
      },
      {
        id: "everyday-task",
        title: "Everyday Task Module & Streak Engine",
        shortTitle: "Everyday Task",
        icon: Flame,
        badge: "Habit Engine",
        summary: "Exactly 30 daily cognitive tasks across math, figures, and Latin squares with XP bonus incentives.",
        image: GALLERY_IMAGES[3],
      },
      {
        id: "dashboard-analytics",
        title: "Dashboard & Cognitive Profile Analytics",
        shortTitle: "Dashboard Analytics",
        icon: BarChart3,
        badge: "Progress",
        summary: "Real-time accuracy tracking, XP levels (Novice to Grandmaster), and 6-dimensional cognitive profile radar.",
        image: GALLERY_IMAGES[4],
      },
      {
        id: "exam-simulator",
        title: "Time-Bound Exam Simulator",
        shortTitle: "Exam Simulator",
        icon: Timer,
        badge: "Exam Replica",
        summary: "High-pressure timed testing environment with low-time warning system and post-exam diagnostics.",
      },
      {
        id: "ai-tutor",
        title: "Premium AI Tutor & Study Buddy",
        shortTitle: "AI Tutor",
        icon: Bot,
        badge: "AI Infrastructure",
        summary: "Step-by-step logic breakdown and global chat assistant running on paid production AI pipelines.",
      },
      {
        id: "study-library",
        title: "Secure DRM Study Library",
        shortTitle: "Study Library",
        icon: Library,
        badge: "Resources",
        summary: "Encrypted streaming document reader with mobile panning, keyword search, and favorite bookmarks.",
      },
      {
        id: "global-settings",
        title: "Global Accessibility & Settings Engine",
        shortTitle: "Global Settings",
        icon: Globe,
        badge: "Localization",
        summary: "100+ language selector, dual dark/light themes, sound effects, and server-side profile syncing.",
      },
      {
        id: "accounts-pricing",
        title: "Accounts & Pricing Tiers",
        shortTitle: "Accounts & Pricing",
        icon: Shield,
        badge: "Tiers",
        summary: "Free trial access and simple, nominal non-recurring premium passes starting at ₹499.",
      },
      {
        id: "gallery",
        title: "Interactive Platform Visual Gallery",
        shortTitle: "Visual Gallery",
        icon: Maximize2,
        badge: "Screenshots",
        summary: "Explore high-resolution screenshots of every subtest and feature inside TestAS Mastery.",
      },
      {
        id: "walkthrough-links",
        title: "Video Walkthrough & Official Resources",
        shortTitle: "Video & Links",
        icon: FileText,
        badge: "Links",
        summary: "Official links, netlify live app, docs portal, GitHub repository, and video tutorial.",
      },
    ],
    []
  );

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sectionsList;
    const q = searchQuery.toLowerCase();
    return sectionsList.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.shortTitle.toLowerCase().includes(q)
    );
  }, [searchQuery, sectionsList]);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "var(--accent-primary)",
          width: `${scrollProgress}%`,
          zIndex: 100,
          transition: "width 0.1s ease-out",
        }}
      />

      {/* Top Navbar Header */}
      <header
        className="glass-panel"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid var(--border-subtle)",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: "linear-gradient(135deg, #4f46e5 0%, #0d9488 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(79, 70, 229, 0.25)",
            }}
          >
            <GraduationCap size={22} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.01em", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: 6 }}>
              TestAS Mastery
              <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4, background: "var(--accent-light)", color: "var(--accent-primary)" }}>
                DOCS
              </span>
            </div>
            <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>Official Guide & Platform Documentation</div>
          </div>
        </div>

        {/* Global Search Bar */}
        <div style={{ flex: "0 1 400px", position: "relative", display: "flex", alignItems: "center" }}>
          <Search size={15} style={{ position: "absolute", left: 12, color: "var(--text-tertiary)" }} />
          <input
            type="text"
            placeholder="Search documentation (e.g., Latin Square, AI Tutor, Pricing)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 12px 8px 36px",
              borderRadius: 8,
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-subtle)",
              color: "var(--text-primary)",
              fontSize: 13,
              outline: "none",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--border-focus)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              style={{
                position: "absolute",
                right: 10,
                background: "none",
                border: "none",
                color: "var(--text-tertiary)",
                cursor: "pointer",
                padding: 2,
              }}
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Quick Nav Action Items */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a
            href={CONFIG.liveAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "7px 14px",
              borderRadius: 8,
              background: "var(--accent-primary)",
              color: "#ffffff",
              fontSize: 13,
              fontWeight: 700,
              boxShadow: "0 2px 8px rgba(79, 70, 229, 0.3)",
              transition: "transform 0.2s ease, background 0.2s ease",
            }}
          >
            Open App <ExternalLink size={13} />
          </a>

          <button
            onClick={copyShareLink}
            title="Share documentation link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              borderRadius: 8,
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-surface)",
              color: "var(--text-secondary)",
              cursor: "pointer",
            }}
          >
            {copiedLink ? <Check size={16} style={{ color: "var(--emerald-primary)" }} /> : <Share2 size={16} />}
          </button>

          <button
            onClick={toggleTheme}
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              borderRadius: 8,
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-surface)",
              color: "var(--text-secondary)",
              cursor: "pointer",
              transition: "color 0.2s ease, background 0.2s ease",
            }}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>

      {/* Main Layout Container: Sidebar + Content */}
      <div style={{ maxWidth: 1380, margin: "0 auto", padding: "32px 24px", display: "grid", gridTemplateColumns: "280px 1fr", gap: 40 }}>
        
        {/* Sticky Table of Contents Sidebar */}
        <aside style={{ position: "sticky", top: 84, height: "calc(100vh - 108px)", overflowY: "auto", paddingRight: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-tertiary)", marginBottom: 14 }}>
            Documentation Index
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {filteredSections.map((sec) => {
              const IconComp = sec.icon;
              const isActive = activeSection === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 12px",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "var(--accent-primary)" : "var(--text-secondary)",
                    background: isActive ? "var(--accent-light)" : "transparent",
                    borderLeft: isActive ? "3px solid var(--accent-primary)" : "3px solid transparent",
                    transition: "all 0.15s ease",
                  }}
                >
                  <IconComp size={15} style={{ color: isActive ? "var(--accent-primary)" : "var(--text-tertiary)" }} />
                  <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {sec.shortTitle}
                  </span>
                  {sec.badge && (
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        padding: "2px 5px",
                        borderRadius: 4,
                        background: isActive ? "rgba(99, 102, 241, 0.2)" : "var(--bg-subtle)",
                        color: isActive ? "var(--accent-primary)" : "var(--text-tertiary)",
                      }}
                    >
                      {sec.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          <div
            style={{
              marginTop: 32,
              padding: 16,
              borderRadius: 12,
              border: "1px solid var(--accent-border)",
              background: "var(--accent-light)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: "var(--accent-primary)", marginBottom: 6 }}>
              <Sparkles size={14} /> Ready to practice?
            </div>
            <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, margin: "0 0 12px 0" }}>
              Join thousands of international students preparing for the TestAS exam with procedural logic labs.
            </p>
            <a
              href={CONFIG.liveAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                padding: "8px 12px",
                borderRadius: 8,
                background: "var(--accent-primary)",
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              Start Free Practice
            </a>
          </div>
        </aside>

        {/* Main Article & Content Container */}
        <main style={{ minWidth: 0 }}>
          
          {/* Hero Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              marginBottom: 48,
              paddingBottom: 32,
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--accent-primary)",
                background: "var(--accent-light)",
                border: "1px solid var(--accent-border)",
                padding: "6px 14px",
                borderRadius: 999,
                marginBottom: 20,
              }}
            >
              <Sparkles size={14} /> Publication Grade Complete Guide
            </div>

            <h1
              style={{
                fontSize: 40,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                margin: "0 0 16px 0",
                color: "var(--text-primary)",
              }}
            >
              TestAS Exam Free Prep for German University Admission: The Complete TestAS Mastery Guide
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: "var(--text-secondary)",
                fontStyle: "italic",
                margin: "0 0 24px 0",
              }}
            >
              A complete, publication-grade walkthrough of every module, interactive feature, and design philosophy behind the platform — built to help international students conquer the TestAS.
            </p>

            {/* Publication Metadata & Author Bar */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 16,
                padding: "12px 18px",
                borderRadius: 10,
                background: "var(--bg-subtle)",
                border: "1px solid var(--border-subtle)",
                fontSize: 13,
                color: "var(--text-secondary)",
                marginBottom: 28,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 600 }}>
                <Brain size={15} style={{ color: "var(--accent-primary)" }} />
                By TestAS Mastery Academic Team
              </div>
              <span style={{ color: "var(--border-strong)" }}>•</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Clock size={15} style={{ color: "var(--emerald-primary)" }} />
                12 min read
              </div>
              <span style={{ color: "var(--border-strong)" }}>•</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <CheckCircle2 size={15} style={{ color: "var(--emerald-primary)" }} />
                Official 2026 Edition
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a
                href={CONFIG.liveAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  borderRadius: 10,
                  background: "var(--accent-primary)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  boxShadow: "0 4px 14px rgba(79, 70, 229, 0.35)",
                }}
              >
                👉 Start Practicing Today (testasprep.netlify.app) <ArrowRight size={16} />
              </a>

              <a
                href={CONFIG.mediumBlogUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 20px",
                  borderRadius: 10,
                  border: "1px solid var(--border-strong)",
                  background: "var(--bg-surface)",
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Read Original Blog Article <ExternalLink size={14} />
              </a>
            </div>
          </motion.header>

          {/* Quick Highlight Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              marginBottom: 48,
            }}
          >
            {[
              { title: "Core Modules", desc: "Latin Square, Figures & Quantitative Math", icon: Grid, color: "var(--accent-primary)" },
              { title: "Subject Labs", desc: "Engineering & Medicine Interactive Cases", icon: Cpu, color: "var(--emerald-primary)" },
              { title: "Exam Simulator", desc: "Timed standard test replica with analytics", icon: Timer, color: "var(--amber-primary)" },
              { title: "AI Tutor & Buddy", desc: "Paid enterprise pipeline step-by-step logic", icon: Bot, color: "var(--rose-primary)" },
            ].map((card) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={card.title}
                  style={{
                    padding: 16,
                    borderRadius: 12,
                    border: "1px solid var(--border-subtle)",
                    background: "var(--bg-surface)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "var(--bg-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: card.color,
                      }}
                    >
                      <CardIcon size={18} />
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>{card.title}</div>
                  </div>
                  <p style={{ fontSize: 12, color: "var(--text-secondary)", margin: 0, lineHeight: 1.4 }}>
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Intro Text Section */}
          <section id="overview" style={{ scrollMarginTop: 100, marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <GraduationCap size={24} style={{ color: "var(--accent-primary)" }} />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                1. Platform Overview & Background
              </h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 16 }}>
              Preparing for the <b>TestAS (Test for Academic Studies)</b> exam can be a daunting barrier for international students aiming to study in Germany. The exam is demanding, highly competitive, and unique. Traditional preparation methods fall short: static PDFs quickly become repetitive, question banks are often recycle-heavy, and high-quality simulation tools are locked behind expensive paywalls.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)" }}>
              <b>TestAS Mastery</b> was built from the ground up to solve this. It is a full-stack, browser-based preparation suite covering all Core Module subtests, both major Subject-Specific Modules (Engineering and Medicine), a real exam simulator, an AI-guided tutor, and a globally accessible settings engine. This article provides a comprehensive tour of how the platform works, its core features, and the educational logic powering its design.
            </p>
          </section>

          {/* Section 2: Design Philosophy */}
          <section id="philosophy" style={{ scrollMarginTop: 100, marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Brain size={24} style={{ color: "var(--emerald-primary)" }} />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                🎨 Design Philosophy: Cognitive Training Over Memorization
              </h2>
            </div>
            
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 20 }}>
              Many test-takers make the mistake of memorizing questions. However, the official TestAS exam uses dynamic logic where sequence types and grid parameters shift. If you practice with static resources, you train <em>pattern recall</em> rather than <em>pattern recognition</em>.
            </p>

            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 24 }}>
              TestAS Mastery addresses this by using <b>procedural question generation</b>. Rather than pulling from a static database, the core logic engines generate fresh, unique problems in real-time, verifying solvability through backtracking algorithms. You never solve the same puzzle twice, ensuring that you build authentic, exam-ready logic skills.
            </p>

            {/* Cognitive Callout Box */}
            <div
              style={{
                padding: 24,
                borderRadius: 14,
                borderLeft: "4px solid var(--accent-primary)",
                background: "var(--accent-light)",
                borderTop: "1px solid var(--accent-border)",
                borderRight: "1px solid var(--accent-border)",
                borderBottom: "1px solid var(--accent-border)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 700, color: "var(--accent-primary)", marginBottom: 8 }}>
                <Zap size={18} /> Why this matters for your TestAS score:
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-primary)", margin: 0 }}>
                Cognitive scientists have long distinguished between <em>recognition memory</em> (spotting something you&apos;ve seen before) and <em>transferable skill</em> (applying a rule to something new). Standardized reasoning tests like the TestAS are explicitly designed to measure the latter — which is exactly why cramming a fixed question bank produces diminishing returns after the first pass.
              </p>
            </div>
          </section>

          {/* Section 3: Core Modules Breakdown */}
          <section id="latin-square" style={{ scrollMarginTop: 100, marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Grid size={24} style={{ color: "var(--accent-primary)" }} />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                🧩 Deep Dive: Core Modules
              </h2>
            </div>
            
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 24 }}>
              The Core Module is mandatory for all TestAS candidates. TestAS Mastery breaks it down into three specialized practice labs equipped with procedural parameters.
            </p>

            {/* Subtest 1: Latin Square */}
            <div style={{ marginBottom: 40, padding: 24, borderRadius: 16, border: "1px solid var(--border-subtle)", background: "var(--bg-surface)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "var(--accent-primary)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Core Subtest 01</span>
                  <h3 style={{ fontSize: 22, fontWeight: 800, margin: "4px 0 0 0", color: "var(--text-primary)" }}>1. Latin Square Practice & Quiz</h3>
                </div>
                <span style={{ padding: "4px 10px", borderRadius: 6, background: "var(--accent-light)", color: "var(--accent-primary)", fontSize: 12, fontWeight: 700 }}>
                  Backtracking Engine Validated
                </span>
              </div>

              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: 16 }}>
                Latin Squares are logic grids filled with symbols where each symbol must appear exactly once in each row and column (similar to Sudoku, but utilizing letters or shapes). It is widely regarded as one of the most challenging parts of the Core Module.
              </p>

              <ul style={{ paddingLeft: 20, color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                <li><b>Procedural Grid Generation</b>: Grids are generated on the fly, scaling cell complexity and constraints dynamically.</li>
                <li><b>Two Core Modes</b>:
                  <ul style={{ marginTop: 6, marginBottom: 6 }}>
                    <li><b>Practice Mode</b>: An untimed, open sandbox. You choose board size and difficulty tier to experiment with elimination chains at your own pace.</li>
                    <li><b>Quiz Mode</b>: Standardized exam format. Instead of completing the whole grid, you are presented with a partially filled board and must identify the value of a single designated cell under strict time limits.</li>
                  </ul>
                </li>
                <li><b>Difficulty Selector</b>: Features four levels — <b>Easy, Medium, Hard, and Expert</b>. The selector dynamically dictates grid sizes (scaling from 4×4 up to 7×7) and determines clue density, adjusting the ratio of visible clues to empty spaces.</li>
              </ul>

              {/* Embedded Image Browser Showcase */}
              <ScreenshotWindow
                item={GALLERY_IMAGES[0]}
                onZoom={() => setLightboxImage(GALLERY_IMAGES[0])}
              />
            </div>

            {/* Subtest 2: Figure Sequences */}
            <div id="figure-sequences" style={{ scrollMarginTop: 100, marginBottom: 40, padding: 24, borderRadius: 16, border: "1px solid var(--border-subtle)", background: "var(--bg-surface)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "var(--emerald-primary)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Core Subtest 02</span>
                  <h3 style={{ fontSize: 22, fontWeight: 800, margin: "4px 0 0 0", color: "var(--text-primary)" }}>2. Figure Sequences</h3>
                </div>
                <span style={{ padding: "4px 10px", borderRadius: 6, background: "var(--emerald-light)", color: "var(--emerald-primary)", fontSize: 12, fontWeight: 700 }}>
                  Spatial Reasoning Lab
                </span>
              </div>

              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: 16 }}>
                This subtest evaluates visual pattern recognition and spatial reasoning under time pressure. The engine combines multiple transformation rules:
              </p>

              <ul style={{ paddingLeft: 20, color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                <li><b>Dynamic Transformations</b>: Shapes are rotated, scaled, mirrored, shaded, or translated according to complex interleaved patterns.</li>
                <li><b>Difficulty Selector</b>: Features five tiers — <b>Easy, Medium, Hard, Expert, and Master</b>. Difficulty configurations control active simultaneous transformations.</li>
                <li><b>Duplicate-Suppression Logic</b>: The generator ensures that rule combinations do not repeat during a single session, keeping your brain searching for new visual rules.</li>
              </ul>

              {/* Embedded Image Browser Showcase */}
              <ScreenshotWindow
                item={GALLERY_IMAGES[1]}
                onZoom={() => setLightboxImage(GALLERY_IMAGES[1])}
              />
            </div>

            {/* Subtest 3: Math Reasoning */}
            <div id="math-reasoning" style={{ scrollMarginTop: 100, padding: 24, borderRadius: 16, border: "1px solid var(--border-subtle)", background: "var(--bg-surface)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "var(--amber-primary)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Core Subtest 03</span>
                  <h3 style={{ fontSize: 22, fontWeight: 800, margin: "4px 0 0 0", color: "var(--text-primary)" }}>3. Mathematical / Quantitative Reasoning</h3>
                </div>
                <span style={{ padding: "4px 10px", borderRadius: 6, background: "var(--amber-light)", color: "var(--amber-primary)", fontSize: 12, fontWeight: 700 }}>
                  Non-Calculator Environment
                </span>
              </div>

              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: 16 }}>
                A math logic lab focused on solving quantitative problems without calculators, exactly like the real exam. It integrates:
              </p>

              <ul style={{ paddingLeft: 20, color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                <li><b>Core Categories</b>:
                  <ul style={{ marginTop: 6, marginBottom: 6 }}>
                    <li><em>Equations & Systems</em>: Solve linear systems, quadratics, and algebraic unknowns.</li>
                    <li><em>Quantitative Logic</em>: Multi-variable relationships and logic word problems.</li>
                    <li><em>Sequences & Patterns</em>: High-order numerical sequences and series.</li>
                  </ul>
                </li>
                <li><b>Difficulty Selector</b>: Features five distinct tiers — <b>Easy, Medium, Advanced, Expert, and Master</b> (with a comprehensive &apos;All&apos; option). Includes live per-session accuracy tracking.</li>
              </ul>

              {/* Embedded Image Browser Showcase */}
              <ScreenshotWindow
                item={GALLERY_IMAGES[2]}
                onZoom={() => setLightboxImage(GALLERY_IMAGES[2])}
              />
            </div>
          </section>

          {/* Section 4: Subject-Specific Modules */}
          <section id="subject-modules" style={{ scrollMarginTop: 100, marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Cpu size={24} style={{ color: "var(--rose-primary)" }} />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                🔬 Subject-Specific Modules: Interactive Labs
              </h2>
            </div>

            <div
              style={{
                padding: 16,
                borderRadius: 12,
                background: "var(--amber-light)",
                border: "1px solid var(--amber-primary)",
                color: "var(--text-primary)",
                fontSize: 14,
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Zap size={18} style={{ color: "var(--amber-primary)", flexShrink: 0 }} />
              <div>
                <b>Important Architectural Distinction:</b> Unlike the Core Module logic labs, Subject-Specific Modules do <em>not</em> feature manual difficulty selectors. Instead, they are organized directly into structured academic topics and dynamic case study simulations.
              </div>
            </div>

            {/* Interactive Tab Switcher for Engineering & Medicine */}
            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
              <button
                onClick={() => setSubjectTab("engineering")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  borderRadius: 10,
                  border: subjectTab === "engineering" ? "2px solid var(--accent-primary)" : "1px solid var(--border-subtle)",
                  background: subjectTab === "engineering" ? "var(--accent-light)" : "var(--bg-surface)",
                  color: subjectTab === "engineering" ? "var(--accent-primary)" : "var(--text-secondary)",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                <Wrench size={16} /> 🛠️ The Engineering Lab
              </button>

              <button
                onClick={() => setSubjectTab("medicine")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  borderRadius: 10,
                  border: subjectTab === "medicine" ? "2px solid var(--emerald-primary)" : "1px solid var(--border-subtle)",
                  background: subjectTab === "medicine" ? "var(--emerald-light)" : "var(--bg-surface)",
                  color: subjectTab === "medicine" ? "var(--emerald-primary)" : "var(--text-secondary)",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                <Stethoscope size={16} /> 🧪 The Medicine Lab
              </button>
            </div>

            {/* Engineering Tab Panel */}
            {subjectTab === "engineering" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ padding: 24, borderRadius: 16, border: "1px solid var(--border-subtle)", background: "var(--bg-surface)" }}
              >
                <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 12px 0", color: "var(--text-primary)" }}>
                  🛠️ Engineering Stream Preparation
                </h3>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>
                  Tailored for students entering technical, mechanical, and computer engineering fields in Germany:
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
                  {[
                    { title: "Vector Mechanics", text: "Static force systems, mechanical structures, loading calculations." },
                    { title: "Thermodynamics", text: "Temperature scales, thermal expansion, gas laws, cyclic processes." },
                    { title: "Electrical Circuits", text: "DC/AC networks, voltage divider rules, signals, transient states." },
                    { title: "Material Science", text: "Stress, strain, shear modulus, material property diagrams." },
                    { title: "Dynamic Case Studies", text: "Generates interactive loading schematics under exam timing." },
                  ].map((item) => (
                    <div key={item.title} style={{ padding: 14, borderRadius: 10, background: "var(--bg-subtle)", border: "1px solid var(--border-subtle)" }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "var(--accent-primary)", marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{item.text}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Medicine Tab Panel */}
            {subjectTab === "medicine" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ padding: 24, borderRadius: 16, border: "1px solid var(--border-subtle)", background: "var(--bg-surface)" }}
              >
                <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 12px 0", color: "var(--text-primary)" }}>
                  🧪 Medicine & Life Sciences Stream
                </h3>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>
                  Simulates scientific comprehension for prospective medical candidates:
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
                  {[
                    { title: "Human Anatomy", text: "Organ structures, cardiovascular system mechanics, skeletal frame." },
                    { title: "Physiology & Endocrine", text: "Respiratory cycles, central nervous system, hormone pathways." },
                    { title: "Cell Biology & Genetics", text: "Inheritance grids, DNA replication, immunology pathways." },
                    { title: "Biochemistry", text: "Enzyme kinetics, ATP metabolic synthesis cycles." },
                    { title: "Medical Physics & Fluidics", text: "Blood pressure fluid dynamics, radiation physics, ECG signals." },
                    { title: "Interactive Case Studies", text: "SA Node cardiac rhythm simulator, oxygen dissociation curves." },
                  ].map((item) => (
                    <div key={item.title} style={{ padding: 14, borderRadius: 10, background: "var(--bg-subtle)", border: "1px solid var(--border-subtle)" }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "var(--emerald-primary)", marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{item.text}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </section>

          {/* Section 5: Everyday Task Module */}
          <section id="everyday-task" style={{ scrollMarginTop: 100, marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Flame size={24} style={{ color: "var(--amber-primary)" }} />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                📅 Everyday Task Module & Streak Engine
              </h2>
            </div>

            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 20 }}>
              Consistency is the key to memory retention. The <b>Everyday Task Module</b> serves as a balanced daily check, presenting exactly <b>30 cognitive tasks</b> distributed across various difficulties to maintain a steady habit:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 24 }}>
              <div style={{ padding: 16, borderRadius: 12, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: "var(--accent-primary)" }}>10 Math Tasks</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
                  1 easy, 2 medium, 3 advanced, 2 expert, 2 master problems.
                </div>
              </div>
              <div style={{ padding: 16, borderRadius: 12, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: "var(--emerald-primary)" }}>10 Figure Sequences</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
                  1 easy, 2 medium, 3 advanced, 2 expert, 2 master spatial rules.
                </div>
              </div>
              <div style={{ padding: 16, borderRadius: 12, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: "var(--amber-primary)" }}>10 Latin Squares</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
                  1 easy (4×4), 2 medium (5×5), 4 hard (5×5), 3 expert (6×6 / 7×7).
                </div>
              </div>
            </div>

            {/* Embedded Image Browser Showcase */}
            <ScreenshotWindow
              item={GALLERY_IMAGES[3]}
              onZoom={() => setLightboxImage(GALLERY_IMAGES[3])}
            />
          </section>

          {/* Section 6: Dashboard & Analytics */}
          <section id="dashboard-analytics" style={{ scrollMarginTop: 100, marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <BarChart3 size={24} style={{ color: "var(--accent-primary)" }} />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                📊 Dashboard & Cognitive Profile Analytics
              </h2>
            </div>

            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 20 }}>
              Progress is tracked securely to help you analyze your preparation curves:
            </p>

            <ul style={{ paddingLeft: 20, color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
              <li><b>Interactive Dashboard</b>: Displays your level and XP ranking (ranging from <em>Novice</em> up to <em>Grandmaster</em>), daily streak status, weekly snapstats, and personal best records.</li>
              <li><b>Cognitive Profile Analytics</b>: Maps performance across six key dimensions: <b>Figure Reasoning, Math Logic, Verbal Logic, Speed, Accuracy, and Consistency</b>. This allows you to easily identify which subtest requires more focus.</li>
            </ul>

            {/* Embedded Image Browser Showcase */}
            <ScreenshotWindow
              item={GALLERY_IMAGES[4]}
              onZoom={() => setLightboxImage(GALLERY_IMAGES[4])}
            />
          </section>

          {/* Section 7: Time-Bound Exam Simulator */}
          <section id="exam-simulator" style={{ scrollMarginTop: 100, marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Timer size={24} style={{ color: "var(--amber-primary)" }} />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                ⏱️ The Time-Bound Exam Simulator
              </h2>
            </div>

            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 20 }}>
              Practicing questions individually is only half the battle; managing your time is the other. The <b>Exam Simulator</b> is a full-fidelity replica of the actual TestAS testing environment:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              <div style={{ padding: 20, borderRadius: 12, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: "var(--text-primary)", marginBottom: 6 }}>
                  Standard Exam Pacing
                </div>
                <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  Limits you to exactly 25 minutes per subtest section for the Core Module, and a full 90 minutes for Subject-Specific Modules.
                </div>
              </div>

              <div style={{ padding: 20, borderRadius: 12, background: "var(--rose-light)", border: "1px solid var(--rose-primary)" }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: "var(--rose-primary)", marginBottom: 6 }}>
                  Low-Time Warning System
                </div>
                <div style={{ fontSize: 14, color: "var(--text-primary)", lineHeight: 1.6 }}>
                  When your countdown timer drops under 2 minutes, the UI transitions to a flashing red active warning state to train pressure control.
                </div>
              </div>

              <div style={{ padding: 20, borderRadius: 12, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: "var(--text-primary)", marginBottom: 6 }}>
                  Performance Diagnostics
                </div>
                <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  Full review showing correct/incorrect choices, speed-per-question metrics, skipped question log, and score percentiles.
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: AI Tutor */}
          <section id="ai-tutor" style={{ scrollMarginTop: 100, marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Bot size={24} style={{ color: "var(--rose-primary)" }} />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                🧠 Premium AI Tutor & Study Buddy
              </h2>
            </div>

            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 20 }}>
              To ensure you never get stuck, conversational AI assistance is deeply integrated into the platform:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
              <div style={{ padding: 20, borderRadius: 14, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 16, color: "var(--accent-primary)", marginBottom: 8 }}>
                  <Sparkle size={16} /> On-Demand Explanations
                </div>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  Staring at a wrong answer? Click the &quot;AI Tutor&quot; button to receive a step-by-step breakdown of the logical path to the correct option.
                </p>
              </div>

              <div style={{ padding: 20, borderRadius: 14, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 16, color: "var(--emerald-primary)", marginBottom: 8 }}>
                  <Bot size={16} /> Global Study Buddy
                </div>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  A collapsible chat assistant available on every page. You can ask it for strategy advice, formulas, or translation assistance.
                </p>
              </div>

              <div style={{ padding: 20, borderRadius: 14, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 16, color: "var(--amber-primary)", marginBottom: 8 }}>
                  <Zap size={16} /> Paid Enterprise Infrastructure
                </div>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  All AI features are routed through high-priority, paid production model pipelines. This ensures low response latency, high uptime, and deep reasoning capabilities.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Secure Study Library */}
          <section id="study-library" style={{ scrollMarginTop: 100, marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Library size={24} style={{ color: "var(--accent-primary)" }} />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                📚 Secure Study Library
              </h2>
            </div>

            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 20 }}>
              A clean, built-in document reader for structured study booklets:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              <div style={{ padding: 16, borderRadius: 12, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)", marginBottom: 4 }}>Encrypted Streaming</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>DRM-style encryption prevents raw document downloads.</div>
              </div>
              <div style={{ padding: 16, borderRadius: 12, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)", marginBottom: 4 }}>Mobile Panning & Zoom</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>Zoom-locked dragging makes it easy to read dense diagrams.</div>
              </div>
              <div style={{ padding: 16, borderRadius: 12, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)", marginBottom: 4 }}>In-Document Search</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>Debounced search engine highlights keywords instantly across pages.</div>
              </div>
            </div>
          </section>

          {/* Section 10: Global Settings */}
          <section id="global-settings" style={{ scrollMarginTop: 100, marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Globe size={24} style={{ color: "var(--emerald-primary)" }} />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                🌍 Global Accessibility & Settings
              </h2>
            </div>

            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 20 }}>
              TestAS candidates come from every corner of the globe. The platform&apos;s settings provide an identical, high-quality experience everywhere:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              <div style={{ padding: 16, borderRadius: 12, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--emerald-primary)", marginBottom: 4 }}>100+ Languages</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>Flag-coded language selector localizes layout into native tongues.</div>
              </div>
              <div style={{ padding: 16, borderRadius: 12, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--accent-primary)", marginBottom: 4 }}>Sleek Dual Themes</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>Toggle instantly between Dark Mode and Light Mode.</div>
              </div>
              <div style={{ padding: 16, borderRadius: 12, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--amber-primary)", marginBottom: 4 }}>Interactive Audio</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>Subtle sound feedback for correct choices and victories.</div>
              </div>
              <div style={{ padding: 16, borderRadius: 12, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--rose-primary)", marginBottom: 4 }}>Cloud Synchronization</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>Streak, XP, and history sync seamlessly across all devices.</div>
              </div>
            </div>
          </section>

          {/* Section 11: Accounts & Pricing Tiers */}
          <section id="accounts-pricing" style={{ scrollMarginTop: 100, marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Shield size={24} style={{ color: "var(--accent-primary)" }} />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                💳 Accounts & Pricing Tiers
              </h2>
            </div>

            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 24 }}>
              TestAS Mastery is designed to be universally accessible. It offers flexible tier options, ensuring high-quality preparation is available at a fraction of traditional course costs:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              <div style={{ padding: 24, borderRadius: 16, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-tertiary)", textTransform: "uppercase" }}>Free Tier</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", margin: "6px 0 12px 0" }}>Free Trial Access</div>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>
                  Instant access upon registration via Google Sign-In or OTP. Includes 3-day full access pass, followed by basic dashboard tracking and 5 questions/day limit per module.
                </p>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--emerald-primary)", display: "flex", alignItems: "center", gap: 6 }}>
                  <CheckCircle2 size={14} /> No Credit Card Required
                </div>
              </div>

              <div style={{ padding: 24, borderRadius: 16, background: "var(--accent-light)", border: "2px solid var(--accent-primary)" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent-primary)", textTransform: "uppercase" }}>Recommended Tier</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", margin: "6px 0 4px 0" }}>Premium Access</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--accent-primary)", marginBottom: 12 }}>
                  Starting at ₹499/mo or ₹999 for 3 Months (One-Time Payment)
                </div>
                <p style={{ fontSize: 14, color: "var(--text-primary)", lineHeight: 1.6, marginBottom: 16 }}>
                  Unlocks unlimited practice across all Core & Subject Modules, complete Time-Bound Exam Simulator, full DRM Study Library access, and step-by-step AI Tutor.
                </p>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--accent-primary)", display: "flex", alignItems: "center", gap: 6 }}>
                  <CheckCircle2 size={14} /> Non-Recurring Simple Payment
                </div>
              </div>
            </div>
          </section>

          {/* Section 12: Visual Showcase Gallery */}
          <section id="gallery" style={{ scrollMarginTop: 100, marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Maximize2 size={24} style={{ color: "var(--emerald-primary)" }} />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                🖼️ Interactive Platform Visual Gallery
              </h2>
            </div>

            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 24 }}>
              Click on any screenshot below to inspect high-resolution UI details of TestAS Mastery:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {GALLERY_IMAGES.map((img) => (
                <motion.div
                  key={img.id}
                  whileHover={{ y: -4 }}
                  onClick={() => setLightboxImage(img)}
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    border: "1px solid var(--border-subtle)",
                    background: "var(--bg-surface)",
                    cursor: "pointer",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <div style={{ position: "relative", height: 180, overflow: "hidden", background: "var(--bg-subtle)" }}>
                    <img
                      src={img.src}
                      alt={img.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        padding: "4px 8px",
                        borderRadius: 6,
                        background: "rgba(0, 0, 0, 0.65)",
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 700,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {img.badge}
                    </div>
                  </div>
                  <div style={{ padding: 14 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)", marginBottom: 4 }}>
                      {img.title}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.4 }}>
                      {img.caption}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 13: Video Walkthrough & External Links */}
          <section id="walkthrough-links" style={{ scrollMarginTop: 100, marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <FileText size={24} style={{ color: "var(--amber-primary)" }} />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                🎥 Video Walkthrough & Resource Hub
              </h2>
            </div>

            {/* Video Placeholder Card */}
            <div
              style={{
                padding: 24,
                borderRadius: 16,
                border: "1px dashed var(--accent-border)",
                background: "var(--accent-light)",
                marginBottom: 32,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "var(--accent-primary)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Timer size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 16, color: "var(--text-primary)" }}>
                  📺 YouTube Video Walkthrough — Coming Soon
                </div>
                <div style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 4 }}>
                  Stay tuned! An in-depth video guide demonstrating how to navigate the Exam Simulator, Latin Square solver, and AI Tutor will be linked here shortly.
                </div>
              </div>
            </div>

            {/* Link Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              <a
                href={CONFIG.liveAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: 20,
                  borderRadius: 12,
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-surface)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 15, color: "var(--accent-primary)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  🌐 Live Application <ExternalLink size={14} style={{ marginLeft: "auto" }} />
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>testasprep.netlify.app</div>
              </a>

              <a
                href={CONFIG.officialDocsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: 20,
                  borderRadius: 12,
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-surface)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 15, color: "var(--emerald-primary)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  📄 Official Docs Portal <ExternalLink size={14} style={{ marginLeft: "auto" }} />
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>testasprepdocs.vercel.app</div>
              </a>

              <a
                href={CONFIG.githubOrgUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: 20,
                  borderRadius: 12,
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-surface)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text-primary)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  🐙 GitHub Repository <ExternalLink size={14} style={{ marginLeft: "auto" }} />
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>github.com/testasprep</div>
              </a>
            </div>
          </section>

          {/* Footer Disclaimer */}
          <footer
            style={{
              paddingTop: 32,
              borderTop: "1px solid var(--border-subtle)",
              fontSize: 13,
              color: "var(--text-tertiary)",
              lineHeight: 1.6,
            }}
          >
            <p style={{ margin: "0 0 12px 0" }}>
              <em>Disclaimer: TestAS Mastery is an independent preparation platform. It is not affiliated with, sponsored by, or endorsed by ITB Consulting GmbH or g.a.s.t. All official TestAS trademarks are the property of their respective owners.</em>
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <div>© 2026 TestAS Mastery. All rights reserved.</div>
              <a href={`mailto:${CONFIG.contactEmail}`} style={{ color: "var(--accent-primary)", fontWeight: 600 }}>
                {CONFIG.contactEmail}
              </a>
            </div>
          </footer>

        </main>
      </div>

      {/* Lightbox Image Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="browser-window"
              style={{
                maxWidth: 1000,
                width: "100%",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                background: "var(--bg-surface)",
              }}
            >
              <div className="browser-header">
                <div className="browser-dot red" />
                <div className="browser-dot yellow" />
                <div className="browser-dot green" />
                <div className="browser-url-bar">{lightboxImage.url}</div>
                <button
                  onClick={() => setLightboxImage(null)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--text-tertiary)",
                    cursor: "pointer",
                    padding: 4,
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{ padding: 16, overflowY: "auto", flex: 1, textAlign: "center" }}>
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  style={{ maxWidth: "100%", maxHeight: "65vh", borderRadius: 8, objectFit: "contain" }}
                />
                <div style={{ marginTop: 16, textAlign: "left" }}>
                  <div style={{ fontWeight: 800, fontSize: 18, color: "var(--text-primary)", marginBottom: 4 }}>
                    {lightboxImage.title}
                  </div>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0 }}>
                    {lightboxImage.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Subcomponent: Styled Browser Frame for Screenshots
function ScreenshotWindow({
  item,
  onZoom,
}: {
  item: ScreenshotItem;
  onZoom: () => void;
}) {
  return (
    <div className="browser-window" style={{ marginTop: 16, marginBottom: 16 }}>
      <div className="browser-header">
        <div className="browser-dot red" />
        <div className="browser-dot yellow" />
        <div className="browser-dot green" />
        <div className="browser-url-bar">{item.url}</div>
        <button
          onClick={onZoom}
          title="Zoom image"
          style={{
            background: "none",
            border: "none",
            color: "var(--text-tertiary)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          <Maximize2 size={13} /> Expand
        </button>
      </div>

      <div
        onClick={onZoom}
        className="zoomable-img"
        style={{ position: "relative", overflow: "hidden", background: "var(--bg-subtle)" }}
      >
        <img
          src={item.src}
          alt={item.title}
          style={{ width: "100%", display: "block", height: "auto" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            background: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(6px)",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Maximize2 size={12} /> Click to View Fullscreen
        </div>
      </div>

      <div style={{ padding: "12px 16px", borderTop: "1px solid var(--border-subtle)", background: "var(--bg-subtle)", fontSize: 13, color: "var(--text-secondary)" }}>
        📷 <b>Screenshot Preview:</b> {item.caption}
      </div>
    </div>
  );
}
