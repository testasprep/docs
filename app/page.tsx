"use client";

// ============================================================
// TestAS Mastery — Official Documentation Portal (Interactive)
// Powered by Next.js client animations & premium typography
// ============================================================

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Grid,
  Activity,
  Cpu,
  Beaker,
  Flame,
  Timer,
  Library,
  Bot,
  Trophy,
  Globe,
  ArrowRight,
  Shield,
  ChevronRight,
  BookmarkCheck,
  Award,
  Layers,
  Heart,
  Sliders,
  Sparkle
} from "lucide-react";

const CONFIG = {
  liveAppUrl: "https://testasprep.netlify.app",
  githubOrgUrl: "https://github.com/testasprep",
  mediumBlogUrl: "https://medium.com/@testasprepsupport/testas-mastery-the-free-all-in-one-prep-platform-for-the-testas-exam-2026-deep-dive-1ab54ea08368",
  repoUrl: "https://github.com/testasprep/docs",
  contactEmail: "testasprepsupport@gmail.com",
};

interface SectionItem {
  h: string;
  p: string;
  badge?: string;
  subItems?: string[];
}

interface Section {
  id: string;
  title: string;
  body: string;
  items?: SectionItem[];
}

const sections: Section[] = [
  {
    id: "overview",
    title: "Platform Overview",
    body: `TestAS Mastery is a premier, browser-based exam preparation platform for the TestAS (Test for Academic Studies) exam, engineered to support international students applying to German universities. It integrates procedural logic modules, subject-specific interactive practice labs, a real-time exam simulator, and an AI-guided tuition assistant, all built on a secure cloud infrastructure designed for high scalability and global availability.`,
  },
  {
    id: "core-module",
    title: "Core Module Labs",
    body: `The Core Module is the mandatory cognitive reasoning section of the TestAS exam. TestAS Mastery implements dynamic, procedural question generation algorithms to create unique practice patterns at runtime. Instead of cycling through a static database, questions are mathematically verified on load to ensure unique solutions, training genuine problem-solving skills.`,
    items: [
      {
        h: "Latin Square Solver & Practice",
        p: "Generates unique row-column letter/symbol logic matrices (ranging from 4x4 up to 7x7) verified with a backtracking engine. Supports two main modes: Practice (untimed configuration sandbox) and Quiz (standardized single-cell identification under time limits). Features a Difficulty Selector (Easy, Medium, Hard, Expert) to dynamically scale board parameters and clue constraints.",
      },
      {
        h: "Figure Sequences",
        p: "Visual pattern-recognition and spatial reasoning subtests governed by dynamic translation, scaling, and rotation rules. Includes a Difficulty Selector (Easy, Medium, Hard, Expert, Master) to adjust transformation complexity, and duplicate-suppression filters to prevent sequence repetition.",
      },
      {
        h: "Mathematical & Quantitative Reasoning",
        p: "Covers systems of equations, quantitative relations, and numeric sequence patterns. Integrates a Difficulty Selector (Easy, Medium, Advanced, Expert, Master, All) and displays real-time per-session accuracy tracking.",
      },
    ],
  },
  {
    id: "subject-modules",
    title: "Subject-Specific Modules (No Manual Level Selectors)",
    body: `Dedicated preparation environments for the main TestAS subject tracks. These modules do not feature manual difficulty configurations, but are structured into core topics and conceptual case studies:`,
    items: [
      {
        h: "Engineering Module Lab",
        p: "Focuses on Vector Mechanics (statics, dynamics, materials), Thermodynamics (gas laws, systems), Electrical Circuits (signals, networks), and Material Science. Features concepts practice and loading/statics diagrams case studies.",
        subItems: ["Vector Mechanics & statics", "Thermodynamics & Gas Systems", "Electrical DC/AC Circuits", "Materials loading diagrams"],
      },
      {
        h: "Medicine Module Lab",
        p: "Covers Anatomy (organs, cardiovascular), Physiology (nervous, respiratory, endocrine), Biology (cells, genetics, immunology), Biochemistry (reactions, pathways), Medical Physics, and Sociology/Psychology. Features concept tests and case studies (SA Node, oxygen curves, endocrine stress curves).",
        subItems: ["Anatomy & Cardiovascular System", "Physiology & Endocrine Curves", "Biochemistry metabolic pathways", "SA Node cardiac rhythm simulator"],
      },
    ],
  },
  {
    id: "everyday-task",
    title: "Everyday Task Module",
    body: `A habit-building module designed to support daily preparation consistency. Every 24 hours, the system generates exactly 30 questions distributed across logic modules:`,
    items: [
      {
        h: "Math Sequence Tasks (10 questions)",
        p: "Selected dynamically: 1 easy, 2 medium, 3 advanced, 2 expert, 2 master questions.",
      },
      {
        h: "Figure Sequence Tasks (10 questions)",
        p: "Selected dynamically: 1 easy, 2 medium, 3 advanced, 2 expert, 2 master questions.",
      },
      {
        h: "Latin Square Tasks (10 questions)",
        p: "Selected dynamically: 1 easy (4x4), 2 medium (5x5), 4 hard (5x5), 3 expert (6x6 or 7x7) grids.",
      },
    ],
  },
  {
    id: "exam-simulator",
    title: "Time-Bound Exam Simulator",
    body: `Replicates the authentic, high-pressure timing conditions of the actual TestAS exam. Includes strict subtest-level time constraints (25 minutes per Core subtest, and 90 minutes for the full Subject-Specific module). Highlights a visual flashing warning state when remaining time falls under 2 minutes, and provides a full metrics breakdown (correct/wrong answers, skips, speed per question, and historic scores) upon submission.`,
  },
  {
    id: "library",
    title: "Secure Study Library",
    body: `A document reader containing premium study booklets and prep materials, built with digital rights management (DRM) and dynamic streaming:`,
    items: [
      {
        h: "Encrypted Streaming",
        p: "Prevents raw document downloads by delivering encrypted page buffers dynamically.",
      },
      {
        h: "Mobile Panning & Zoom",
        p: "Supports smooth dragging and pan-while-zoomed navigation for analyzing detailed diagrams on mobile screens.",
      },
      {
        h: "Keywords Highlighting",
        p: "Features a debounced search engine that indexes and highlights matching text instances across document files.",
      },
      {
        h: "Favorites & Bookmark sync",
        p: "Keeps track of 'Continue Reading' positions and favorite sections synced directly to your cloud profile.",
      },
    ],
  },
  {
    id: "ai-tutor",
    title: "AI Tutor & Study Buddy",
    body: `A double-layered AI assistant built to help students break down complex logic:`,
    items: [
      {
        h: "On-Demand Explanations",
        p: "Available for every practice question, walking the user through a step-by-step logical explanation of the correct solution.",
      },
      {
        h: "AI Study Buddy",
        p: "A global slide-out strategist panel available across all pages to answer general concept, formula, or study planning questions.",
      },
      {
        h: "Paid Production Pipelines",
        p: "All AI features route through dedicated, paid enterprise pipelines, avoiding free/hobby endpoints to guarantee high uptime, speed, and logical reasoning accuracy.",
      },
    ],
  },
  {
    id: "progress",
    title: "Progress, XP & Cognitive Profile",
    body: `Every practice run and simulated exam session logs metrics to update a gamified XP level progression (ranging from Novice up to Grandmaster), accuracy averages, daily streaks, weekly snapshots, and personal best records. The profile analyzes performance across key metrics like figure reasoning, math logic, verbal logic, speed, accuracy, and consistency.`,
  },
  {
    id: "accounts",
    title: "Accounts & Tiers",
    body: `TestAS Mastery is designed to be universally accessible. It offers flexible tier options, ensuring that high-quality exam preparation resources are available for a negligible, nominal fee compared to traditional preparation courses:`,
    items: [
      {
        h: "Free Trial Tier",
        p: "Get instant access upon registration (Google Sign-In or secure OTP). Includes a 3-day full access pass, followed by basic dashboard tracking and a limited daily practice cap (5 questions/day per module) to preview core exercises.",
      },
      {
        h: "Premium Access Tier (Nominal / Negligible Pricing)",
        p: "Unlocks the full preparation suite with no limits. Unlocks the complete time-bound Exam Simulator, unrestricted daily practice across all core and subject modules, full DRM study library access, and the step-by-step AI Tutor. Premium plans are simple, non-recurring one-time payments at a negligible price (starting at just ₹499/month, or ₹999 for 3 months) — providing enterprise-grade tools at a fraction of the cost of traditional preparation courses.",
      },
      {
        h: "Cloud Synchronization",
        p: "All settings, themes, language configurations, daily streaks, XP progress, and exam history are synchronized directly with the database, allowing you to study seamlessly across mobile, tablet, and desktop devices.",
      },
    ],
  },
  {
    id: "global-settings",
    title: "Global Accessibility Settings",
    body: `Designed to accommodate an international student demographic with customized environment preferences:`,
    items: [
      {
        h: "100+ Languages",
        p: "Complete platform localization with a flag-coded language selector supporting major global and regional languages.",
      },
      {
        h: "Dual Themes",
        p: "Seamless toggle switch between high-contrast Light Mode and low-fatigue Dark Mode designs.",
      },
      {
        h: "Interactive Audio Feedback",
        p: "Polished audio feedback for correct/incorrect inputs, victories, and interface interactions, toggleable in the settings panel.",
      },
    ],
  },
];

const iconMap: Record<string, React.ComponentType<any>> = {
  overview: GraduationCap,
  "core-module": Grid,
  "subject-modules": Cpu,
  "everyday-task": Flame,
  "exam-simulator": Timer,
  library: Library,
  "ai-tutor": Bot,
  progress: Trophy,
  accounts: Shield,
  "global-settings": Globe,
};

export default function DocsPage() {
  return (
    <main
      style={{
        maxWidth: 880,
        margin: "0 auto",
        padding: "64px 24px 120px",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ marginBottom: 56 }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--accent)",
            border: "1px solid var(--border)",
            borderRadius: 999,
            padding: "6px 14px",
            background: "var(--bg-panel)",
            marginBottom: 20,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
          }}
        >
          <Sparkles size={13} />
          Official Documentation
        </div>
        
        <h1 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 16px", color: "var(--text)" }}>
          TestAS Mastery
        </h1>
        
        <p style={{ fontSize: 18, color: "var(--text-dim)", lineHeight: 1.6, maxWidth: 680, margin: "0 0 32px" }}>
          A comprehensive, browser-based exam preparation platform for the TestAS exam.
          Access dynamic logic modules, subject labs, interactive simulators, and paid AI tutorship.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <LinkButton href={CONFIG.liveAppUrl} primary>
            Open the App <ArrowRight size={15} style={{ marginLeft: 6 }} />
          </LinkButton>
          {CONFIG.mediumBlogUrl ? (
            <LinkButton href={CONFIG.mediumBlogUrl}>Read the Blog ↗</LinkButton>
          ) : (
            <PlaceholderButton>Read the Blog (coming soon)</PlaceholderButton>
          )}
          {CONFIG.repoUrl ? (
            <LinkButton href={CONFIG.repoUrl}>Source ↗</LinkButton>
          ) : (
            <LinkButton href={CONFIG.githubOrgUrl}>GitHub Org ↗</LinkButton>
          )}
        </div>
      </motion.header>

      {/* Navigation Quick Links */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 16px",
          padding: "16px 20px",
          border: "1px solid var(--border)",
          borderRadius: 16,
          marginBottom: 56,
          background: "var(--bg-panel)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
        }}
      >
        {sections.map((s) => {
          const IconComponent = iconMap[s.id] || BookOpen;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                fontWeight: 600,
                color: "var(--text-dim)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
            >
              <IconComponent size={14} />
              {s.title.split(" (")[0]}
            </a>
          );
        })}
      </motion.nav>

      {/* Render sections with motion scroll effects */}
      <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        {sections.map((s, index) => {
          const SectionIcon = iconMap[s.id] || BookOpen;
          return (
            <motion.section
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.2) }}
              style={{
                scrollMarginTop: 32,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(79, 70, 229, 0.08)",
                    color: "var(--accent)",
                  }}
                >
                  <SectionIcon size={18} />
                </div>
                <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0, color: "var(--text)" }}>
                  {s.title}
                </h2>
              </div>

              <p
                style={{
                  color: "var(--text-dim)",
                  lineHeight: 1.7,
                  fontSize: 16,
                  margin: "0 0 24px 0",
                }}
              >
                {s.body}
              </p>

              {s.items && (
                <div style={{ display: "grid", gap: 16 }}>
                  {s.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.h}
                      whileHover={{ y: -2, boxShadow: "0 6px 20px rgba(0, 0, 0, 0.04)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      style={{
                        border: "1px solid var(--border)",
                        borderRadius: 14,
                        padding: "20px 24px",
                        background: "var(--bg-panel)",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.01)",
                      }}
                    >
                      <h3
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          fontSize: 16,
                          fontWeight: 700,
                          margin: "0 0 8px 0",
                          color: "var(--text)",
                        }}
                      >
                        <ChevronRight size={14} style={{ color: "var(--accent)" }} />
                        {item.h}
                      </h3>
                      
                      <p
                        style={{
                          margin: 0,
                          color: "var(--text-dim)",
                          fontSize: 14.5,
                          lineHeight: 1.65,
                        }}
                      >
                        {item.p}
                      </p>

                      {item.subItems && (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 8,
                            marginTop: 12,
                          }}
                        >
                          {item.subItems.map((sub) => (
                            <span
                              key={sub}
                              style={{
                                fontSize: 11,
                                fontWeight: 600,
                                padding: "4px 10px",
                                borderRadius: 6,
                                background: "rgba(13, 148, 136, 0.08)",
                                color: "var(--accent-2)",
                                border: "1px solid rgba(13, 148, 136, 0.15)",
                              }}
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.section>
          );
        })}
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          marginTop: 80,
          paddingTop: 32,
          borderTop: "1px solid var(--border)",
          fontSize: 13,
          color: "var(--text-dim)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span>
          TestAS Mastery is an independent preparation platform, not affiliated with ITB Consulting GmbH or g.a.s.t.
        </span>
        <a
          href={`mailto:${CONFIG.contactEmail}`}
          style={{
            fontWeight: 600,
            color: "var(--accent)",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          {CONFIG.contactEmail}
        </a>
      </motion.footer>
    </main>
  );
}

function LinkButton({
  href,
  children,
  primary,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "10px 22px",
        borderRadius: 10,
        fontSize: 14,
        fontWeight: 700,
        textDecoration: "none",
        border: primary ? "none" : "1px solid var(--border)",
        background: primary ? "var(--accent)" : "var(--bg-panel)",
        color: primary ? "#fff" : "var(--text)",
        boxShadow: primary
          ? "0 4px 14px rgba(79, 70, 229, 0.3)"
          : "0 2px 6px rgba(0, 0, 0, 0.02)",
        transition: "box-shadow 0.2s ease, background 0.2s ease",
      }}
    >
      {children}
    </motion.a>
  );
}

function PlaceholderButton({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "10px 22px",
        borderRadius: 10,
        fontSize: 14,
        fontWeight: 700,
        border: "1px dashed var(--border)",
        color: "var(--text-dim)",
        background: "transparent",
      }}
    >
      {children}
    </span>
  );
}
