"use client";

// Page: Portfolio — AI Native Engineer
// Content sourced directly from SDE_Shafi_Resume.pdf — nothing invented

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  ExternalLink,
  GitFork,
  Users,
  Mail,
  CheckCircle,
  Flame,
  Layers,
  Code2,
  GitBranch,
  Award,
  BookOpen,
  ChevronRight,
  Zap,
  Cpu,
  Compass,
  User,
} from "lucide-react";
import { Sidebar } from "../components/Sidebar";

/* ── Data ──────────────────────────────────────────────────────────────── */

const EXPERIENCE = [
  {
    company: "Segmento",
    role: "AI Engineer",
    period: "Dec 2025 – Present",
    location: "Visakhapatnam, India",
    type: "Full-time",
    bullets: [
      "Architected and deployed a Redis-backed reliable message queue from scratch, featuring atomic handoffs, automated visibility-timeout reapers, and dead-letter queues to achieve Kafka-level delivery guarantees without cluster overhead.",
      "Engineered a resilient priority-based automatic failover system across 12+ ingestion sources, utilizing circuit breakers and jittered backpressure to mitigate thundering-herd spikes and eliminate provider bans.",
      "Designed a highly optimized 3-tier cascading metadata-scanning engine (regex → deterministic expansion → batch SLM semantic arbitration), constraining full 500-column schema scan latencies to under 120ms.",
      "Spearheaded a multi-tenant Organization Account architecture over Supabase GoTrue using a Side Table Pattern, implementing Linked Identity Checks to resolve account-mode mismatches across password and Google OAuth sign-ins.",
      "Authored a custom Observability Manager—an in-memory 'Flight Recorder' circular buffer for tracing microsecond latencies—paired with an Ingestion Metrics module for real-time webhook alerting.",
      "Developed a rigorous 7-layer PII detection pipeline on Docker/Kubernetes, utilizing a weighted-ensemble 'God Algorithm' for conflict resolution across 6 models and enforcing strict row-ceiling bounds to prevent OOM errors.",
      "Established a shared Next.js frontend monorepo encompassing all Segmento products, rapidly shipping complex, interactive UIs with decoupled and independent deployment pipelines.",
    ],
  },
  {
    company: "Digiotai",
    role: "Generative AI Intern",
    period: "Jun 2024 – Dec 2024",
    location: "Visakhapatnam, India",
    type: "Internship",
    bullets: [
      "Engineered a comprehensive multimodal AI agent capable of seamlessly processing 7+ diverse input streams, including text, documents, voice, and imagery.",
      "Developed a high-performance RAG-based PDF chatbot to rapidly search, synthesize, and extract critical information across a corpus of 100+ complex documents.",
    ],
  },
];

const SKILLS: { group: string; items: string[]; icon: React.ElementType }[] = [
  {
    group: "AI & Methodologies",
    icon: Zap,
    items: ["Claude Code", "Agent Harness", "AI Skills", "Context Mgmt", "Spec-Driven Dev", "TDD"],
  },
  {
    group: "Backend & Infra",
    icon: Layers,
    items: ["FastAPI", "Python", "Node.js", "Docker", "Kubernetes", "Redis", "Circuit Breakers", "Supabase Auth", "MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    group: "Frontend",
    icon: Code2,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

const CERTIFICATIONS = [
  { name: "Oracle Certified Generative AI Professional", period: "2025–2027" },
  { name: "Oracle AI Vector Search Certified Professional", period: "2025–2027" },
  { name: "Oracle Cloud AI Foundations Associate", period: "2025–2027" },
  { name: "Apache Airflow 3 Fundamentals — Astronomer", period: "Sep 2025" },
];

const OPEN_SOURCE = [
  { text: "GitHub Pull Shark (×2) — pull requests merged into production.", highlight: "Pull Shark ×2" },
  { text: "584 contributions in the past year, 96% direct commits — primarily on Segmento's private production systems.", highlight: "584 contributions" },
  { text: "Maintain OminiAI Agent (Python); engage with the open-source RAG/LLM ecosystem via awesome-llm-apps.", highlight: "OminiAI Agent" },
];

const PROJECTS = [
  {
    name: "Segmento Sense",
    link: "https://www.segmento.in/sense",
    oneLine: "An advanced data scanning platform designed to autonomously detect and classify PII across diverse local files and databases.",
    problemSolved: "Mitigates model conflicts and eliminates false positives across complex datasets by employing a sophisticated weighted-ensemble arbitration approach.",
    tech: ["Next.js", "FastAPI", "Supabase", "Groq", "faster-whisper", "easyocr", "presidio-analyzer"],
    impact: "< 120ms full 500-col scan · sub-100ms endpoint via Redis cache",
    status: "Live",
  },
  {
    name: "Segmento Pulse",
    link: "https://www.segmento.in/pulse",
    oneLine: "A real-time technology intelligence platform engineered to track and synthesize critical repositories and industry articles.",
    problemSolved: "Consolidates fragmented tech news and open-source intelligence with a decoupled engagement-tracking system, ensuring accurate view logging without metric inflation.",
    tech: ["Next.js", "Appwrite", "@react-three/fiber", "FastAPI", "Playwright", "edge-tts", "trafilatura"],
    status: "Live",
  },
  {
    name: "Segmento Mainsite",
    link: "https://www.segmento.in",
    oneLine: "The primary marketing surface for Segmento, built to deliver high-performance interactive 3D assets and complex data visualizations.",
    tech: ["Next.js", "three", "@splinetool/react-spline", "d3-geo", "node-appwrite"],
    status: "Live",
  },
  {
    name: "OminiAIAgent",
    link: "https://omniaiagent.streamlit.app/",
    oneLine: "A versatile multimodal AI assistant enabling seamless text, image, and audio interactions with OpenAI models.",
    problemSolved: "Unifies fragmented toolchains by providing a single, cohesive conversational interface for text, audio, and image processing.",
    tech: ["Python", "Streamlit", "OpenAI SDK", "audio-recorder-streamlit", "Pillow"],
    status: "Live",
  },
];

const THOUGHT_PROCESS = [
  {
    label: "Brainstorming & Understanding Constraints",
    desc: "When faced with a problem, I first brainstorm and ask if I have solved it before. If not, I focus on understanding the core problem, the pain points, and its constraints.",
  },
  {
    label: "Research & Prior Art",
    desc: "I research existing solutions. I ask myself if anyone in the world has solved this exact problem or a similar one. If yes, I analyze their approach to understand it, get inspired, and generate a custom solution for my own use case.",
  },
  {
    label: "Risk Management & Execution",
    desc: "I care about risk management. I plan and measure impact first, pick measurable low-risk workflows to layer AI, prove the numbers, then expand before pushing to production.",
  },
  {
    label: "Thinking in Systems",
    desc: "I don't just blindly build things; instead, I care deeply about systems, architectural decisions, scalability, rigorous problem solving, version control, and API design.",
  },
  {
    label: "Leveraging AI & Methodologies",
    desc: "I leverage AI tools like Claude, agent harnesses, skills, plugins, sub-agents, and context engineering. I also utilize open-source tools alongside methodologies like TDD, Spec-Driven Development, and solid design patterns.",
  },
  {
    label: "Rapid Prototyping & Shipping",
    desc: "I use tools to their full potential to turn ideas into MVPs and POCs quickly. By leveraging AI, I can ship fast—often completing in 2 weeks what might traditionally take 2 months.",
  },
  {
    label: "Ownership & Day-1 Impact",
    desc: "Even though I am early in my career, I don't require extensive training and can show impact from day one. I love to own things end-to-end; instead of waiting for tickets, I proactively pick up problems and solve them.",
  },
  {
    label: "Communication & Alignment",
    desc: "I love to share my thought process. I am able to effectively communicate the work I do to stakeholders to ensure we always have a shared understanding.",
  },
];

const METRICS = [
  { value: "584", label: "Commits / yr" },
  { value: "7+", label: "Systems shipped" },
  { value: "4", label: "Oracle certs" },
];

/* ── Sub-components ────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-ink-subtle mb-4">
      {children}
    </p>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10.5px] text-ink-subtle border border-line rounded-full px-2.5 py-0.5 bg-surface-overlay whitespace-nowrap">
      {children}
    </span>
  );
}

function StatusBadge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border"
      style={{
        color,
        borderColor: `${color}33`,
        background: `${color}12`,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

/* ── Main Page ─────────────────────────────────────────────────────────── */

type Tab = "overview" | "about" | "experience" | "explore" | "aisystems" | "projects" | "skills" | "opensource";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  // Listen for sidebar nav events
  useEffect(() => {
    const handler = (e: Event) => {
      const tab = (e as CustomEvent<{ tab: string }>).detail.tab as Tab;
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("sidebar-nav", handler);
    return () => window.removeEventListener("sidebar-nav", handler);
  }, []);

  const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "overview", label: "Overview", icon: Flame },
    { id: "about", label: "About Me", icon: User },
    { id: "experience", label: "Experience", icon: Layers },
    { id: "explore", label: "Explore", icon: Compass },
    { id: "aisystems", label: "AI Systems", icon: Cpu },
    { id: "projects", label: "Projects", icon: Code2 },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "opensource", label: "Open Source", icon: GitBranch },
  ];

  return (
    <div className="flex min-h-screen bg-bg">
      {/* ── Left Sidebar ─────────────────────────────────────────────── */}
      <Sidebar />

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="flex-1 flex min-w-0">
        <div className="flex-1 min-w-0">

          {/* ── Hero Profile Card ──────────────────────────────────────── */}
          <section id="about" className="border-b border-line">
            {/* Banner */}
            <div className="h-32 w-full bg-gradient-to-r from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(249,115,22,0.08)_0%,transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(99,102,241,0.06)_0%,transparent_60%)]" />
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            {/* Profile info */}
            <div className="px-6 pb-5">
              {/* Avatar */}
              <div className="-mt-10 mb-4 flex items-end justify-between">
                <div className="w-20 h-20 rounded-full border-4 border-bg bg-surface-overlay overflow-hidden relative flex items-center justify-center shadow-lg">
                  <span className="font-mono text-[16px] text-ink-muted font-medium">SS</span>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/headshot.jpg')" }}
                    aria-label="Shafi SK"
                    role="img"
                  />
                </div>
                {/* CTA */}
                <div className="flex items-center gap-2 mt-2">
                  <StatusBadge label="Open to Work" color="#22c55e" />
                  <Link
                    href="mailto:iamshafisk@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-[13px] font-semibold hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/20"
                  >
                    <Mail size={13} />
                    Say Hello
                  </Link>
                </div>
              </div>

              {/* Name + role */}
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-[22px] font-bold text-ink leading-none">Shafi SK</h1>
                  <CheckCircle size={16} className="text-accent shrink-0" />
                </div>
                <p className="text-[13px] text-ink-muted">
                  u/shafisk · <span className="text-ink-subtle">AI Native Engineer</span>
                </p>
              </div>

              {/* Location + meta */}
              <div className="flex flex-wrap items-center gap-3 text-[12px] text-ink-subtle mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-ink-subtle" />
                  Visakhapatnam, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-ink-subtle" />
                  Building since 2022
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                  <span className="text-green font-medium">Available</span>
                </span>
              </div>

              {/* Bio */}
              <p className="text-[13.5px] text-ink-muted leading-relaxed mb-4 max-w-[680px]">
                I am a problem-solver and a quick learner who loves to learn things by doing. I leverage AI tools like Claude Code, GPT models, and agent
                harnesses, along with open-source projects and methods like TDD and spec-driven development, to build POCs and MVPs of ideas and aim
                to be highly productive in my work. I am highly adaptable to new challenges and always act as a supporting team player. My goal is to keep
                improving and bring value wherever I work.
              </p>

              {/* Metric counters */}
              <div className="grid grid-cols-4 gap-3 mb-5">
                {METRICS.map(({ value, label }) => (
                  <div key={label} className="bg-surface rounded-xl border border-line px-3 py-2.5 text-center">
                    <p className="text-[18px] font-bold text-ink leading-none">{value}</p>
                    <p className="text-[10.5px] text-ink-subtle mt-1 leading-none">{label}</p>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-2">
                {[
                  { href: "https://github.com/ShafiSk17", icon: GitFork, label: "GitHub" },
                  { href: "https://linkedin.com/in/shafisk", icon: Users, label: "LinkedIn" },
                  { href: "mailto:iamshafisk@gmail.com", icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-surface text-ink-muted hover:text-accent hover:border-accent/30 text-[12px] font-medium transition-all duration-200"
                  >
                    <Icon size={13} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 px-4 border-t border-line overflow-x-auto">
              {TABS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-1.5 px-3 py-3 text-[13px] font-medium border-b-2 whitespace-nowrap transition-all duration-200 ${activeTab === id
                    ? "border-accent text-accent"
                    : "border-transparent text-ink-muted hover:text-ink hover:border-line-strong"
                    }`}
                >
                  <Icon size={13} />
                  {label}
                </button>
              ))}
            </div>
          </section>

          {/* ── Feed Content ───────────────────────────────────────────── */}
          <div className="px-6 py-6 flex flex-col gap-4">

            {/* ════ OVERVIEW TAB ════ */}
            {activeTab === "overview" && (
              <>
                {/* Pinned intro card */}
                <div className="rounded-xl border border-line bg-surface p-5 group hover:border-line-strong transition-all duration-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10.5px] font-semibold text-accent uppercase tracking-wider">📌 Pinned</span>
                    <span className="text-[10.5px] text-ink-subtle">· Introduction</span>
                  </div>
                  <h2 className="text-[17px] font-bold text-ink mb-1.5 leading-snug">
                    Building production systems, tuned to the last millisecond & dollar.
                  </h2>
                  <p className="text-[13.5px] text-ink-muted leading-relaxed mb-4">
                    From architecture to monitoring — I build systems that scale. I work across the full lifecycle:
                    designing the spec, writing the agent harness, shipping the frontend, and maintaining the
                    observability layer in production.
                  </p>
                  {/* Mini metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { value: "584+", label: "GitHub Contributions", color: "#f97316" },
                      { value: "12+", label: "Ingestion Sources", color: "#6366f1" },
                      { value: "< 120ms", label: "PII Scan Latency", color: "#22c55e" },
                      { value: "7-layer", label: "Detection Pipeline", color: "#f59e0b" },
                    ].map(({ value, label, color }) => (
                      <div key={label} className="bg-surface-raised rounded-lg p-2.5 border border-line text-center">
                        <p className="text-[15px] font-bold leading-none" style={{ color }}>{value}</p>
                        <p className="text-[10px] text-ink-subtle mt-1 leading-snug">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent experience preview */}
                <div className="rounded-xl border border-line bg-surface p-5 hover:border-line-strong transition-all duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <SectionLabel>Recent Experience</SectionLabel>
                    <button
                      onClick={() => setActiveTab("experience")}
                      className="text-[11px] text-accent hover:underline flex items-center gap-1"
                    >
                      View all <ChevronRight size={11} />
                    </button>
                  </div>
                  <div className="flex flex-col gap-3">
                    {EXPERIENCE.map((job) => (
                      <div key={job.company} className="flex items-start gap-3 p-3 rounded-lg bg-surface-raised border border-line hover:border-accent/20 transition-all duration-200">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[10px] font-bold text-accent">{job.company[0]}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-[13.5px] font-semibold text-ink leading-none truncate">{job.role}</p>
                          <p className="text-[11px] text-accent mt-0.5">{job.company}</p>
                          <p className="text-[11px] text-ink-subtle mt-0.5">{job.period} · {job.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Thought process preview */}
                <div id="process" className="rounded-xl border border-line bg-surface p-5 hover:border-line-strong transition-all duration-200">
                  <SectionLabel>Thought Process</SectionLabel>
                  <p className="text-[13px] text-ink-muted mb-4">How I solve hard problems, end-to-end.</p>
                  <div className="flex flex-col gap-3 relative ml-3">
                    <div className="absolute left-[15px] top-4 bottom-4 w-px bg-line" />
                    {THOUGHT_PROCESS.map((step, idx) => (
                      <div key={idx} className="relative flex gap-4 group">
                        <div className="relative z-10 shrink-0 w-8 h-8 rounded-full bg-surface border border-line flex items-center justify-center group-hover:border-accent transition-colors duration-200">
                          <span className="font-mono text-[11px] text-ink-muted group-hover:text-accent transition-colors duration-200">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="flex-1 bg-surface-raised border border-line rounded-xl p-4 group-hover:border-accent/20 transition-all duration-200">
                          <h3 className="text-[14px] font-semibold text-ink mb-1.5">{step.label}</h3>
                          <p className="text-[13px] text-ink-muted leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* ════ ABOUT ME TAB ════ */}
            {activeTab === "about" && (
              <div id="about-me" className="flex flex-col gap-4">
                {/* Who I am card */}
                <div className="rounded-xl border border-line bg-surface p-6">
                  <SectionLabel>Who I Am</SectionLabel>
                  <p className="text-[14px] text-ink-muted leading-[1.8] max-w-[700px]">
                    I am a problem-solver and a quick learner who loves to learn things by doing. I leverage AI tools like Claude Code, GPT models, and agent
                    harnesses, along with open-source projects and methods like TDD and spec-driven development, to build POCs and MVPs of ideas and aim
                    to be highly productive in my work. I am highly adaptable to new challenges and always act as a supporting team player. My goal is to keep
                    improving and bring value wherever I work.
                  </p>
                </div>

                {/* Values / traits */}
                <div className="rounded-xl border border-line bg-surface p-6">
                  <SectionLabel>Core Traits</SectionLabel>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { trait: "Problem Solver", desc: "Break down complex systems into tractable sub-problems" },
                      { trait: "Quick Learner", desc: "Absorb new tech fast — learn by building, not reading" },
                      { trait: "AI-Native", desc: "Claude, GPT, agent harnesses woven into every workflow" },
                      { trait: "Team Player", desc: "Support, communicate, align — never work in a silo" },
                      { trait: "Spec-Driven", desc: "Plan first, build second — TDD and specs enforce quality" },
                      { trait: "Day-1 Impact", desc: "Onboard fast, own tasks end-to-end, deliver immediately" },
                    ].map(({ trait, desc }) => (
                      <div key={trait} className="p-4 bg-surface-raised rounded-xl border border-line hover:border-accent/20 transition-all duration-200">
                        <p className="text-[13.5px] font-semibold text-ink mb-1">{trait}</p>
                        <p className="text-[12px] text-ink-subtle leading-snug">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Thought Process */}
                <div className="rounded-xl border border-line bg-surface p-6">
                  <SectionLabel>How I Think</SectionLabel>
                  <div className="flex flex-col gap-3 relative ml-3">
                    <div className="absolute left-[15px] top-4 bottom-4 w-px bg-line" />
                    {THOUGHT_PROCESS.map((step, idx) => (
                      <div key={idx} className="relative flex gap-4 group">
                        <div className="relative z-10 shrink-0 w-8 h-8 rounded-full bg-surface border border-line flex items-center justify-center group-hover:border-accent transition-colors duration-200">
                          <span className="font-mono text-[11px] text-ink-muted group-hover:text-accent transition-colors duration-200">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="flex-1 bg-surface-raised border border-line rounded-xl p-4 group-hover:border-accent/20 transition-all duration-200">
                          <h3 className="text-[14px] font-semibold text-ink mb-1.5">{step.label}</h3>
                          <p className="text-[13px] text-ink-muted leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ════ EXPLORE TAB ════ */}
            {activeTab === "explore" && (
              <div id="explore" className="flex flex-col gap-4">
                <div className="rounded-xl border border-line bg-surface p-6">
                  <SectionLabel>Browse the Stack</SectionLabel>
                  <p className="text-[13.5px] text-ink-muted mb-5">Everything I have built, organized by domain.</p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { label: "AI & ML Systems", desc: "PII detection pipelines, RAG chatbots, multimodal agents", count: "3+ systems", color: "#f97316" },
                      { label: "Backend & Infra", desc: "Redis queues, circuit breakers, observability managers, K8s deployments", count: "5+ components", color: "#6366f1" },
                      { label: "Frontend Products", desc: "Next.js monorepos, interactive 3D UIs, real-time dashboards", count: "4+ apps", color: "#22c55e" },
                      { label: "Open Source", desc: "OminiAI Agent, contributions to awesome-llm-apps ecosystem", count: "584 commits", color: "#f59e0b" },
                    ].map(({ label, desc, count, color }) => (
                      <div key={label} className="flex items-center gap-4 p-4 bg-surface-raised rounded-xl border border-line hover:border-accent/20 group transition-all duration-200 cursor-pointer">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                          <Layers size={16} style={{ color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[14px] font-semibold text-ink">{label}</p>
                          <p className="text-[12px] text-ink-subtle mt-0.5">{desc}</p>
                        </div>
                        <span className="text-[11px] font-mono shrink-0" style={{ color }}>{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Projects quick view */}
                <div className="rounded-xl border border-line bg-surface p-6">
                  <div className="flex items-center justify-between mb-4">
                    <SectionLabel>Featured Projects</SectionLabel>
                    <button onClick={() => setActiveTab("projects")} className="text-[11px] text-accent hover:underline flex items-center gap-1">
                      All projects <ChevronRight size={11} />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {PROJECTS.map((p) => (
                      <div key={p.name} className="p-4 bg-surface-raised rounded-xl border border-line hover:border-accent/20 transition-all duration-200">
                        <div className="flex items-center justify-between mb-1.5">
                          <p className="text-[13.5px] font-semibold text-ink">{p.name}</p>
                          <StatusBadge label={p.status} color="#22c55e" />
                        </div>
                        <p className="text-[12px] text-ink-subtle leading-snug">{p.oneLine}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2.5">
                          {p.tech.slice(0, 3).map((t) => <Tag key={t}>{t}</Tag>)}
                          {p.tech.length > 3 && <Tag>+{p.tech.length - 3}</Tag>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ════ AI SYSTEMS TAB ════ */}
            {activeTab === "aisystems" && (
              <div id="aisystems" className="flex flex-col gap-4">
                <div className="rounded-xl border border-line bg-surface p-6">
                  <SectionLabel>What I Own End-to-End</SectionLabel>
                  <p className="text-[13.5px] text-ink-muted leading-relaxed mb-5">
                    AI systems I have designed, built, and deployed — from prompt engineering to production monitoring.
                  </p>
                  <div className="flex flex-col gap-4">
                    {[
                      {
                        name: "7-Layer PII Detection Pipeline",
                        desc: "Weighted-ensemble 'God Algorithm' for conflict resolution across 6 detection models. Runs on Docker/Kubernetes with strict row-ceiling bounds to prevent OOM.",
                        tags: ["Python", "Docker", "Kubernetes", "presidio-analyzer", "easyocr"],
                        metric: "< 120ms scan",
                        color: "#f97316",
                      },
                      {
                        name: "Redis-Backed Reliable Message Queue",
                        desc: "Atomic handoffs, automated visibility-timeout reapers, dead-letter queues. Kafka-level delivery guarantees without cluster overhead.",
                        tags: ["Redis", "Python", "FastAPI", "Circuit Breakers"],
                        metric: "Zero message loss",
                        color: "#6366f1",
                      },
                      {
                        name: "RAG-Based PDF Chatbot",
                        desc: "High-performance Retrieval-Augmented Generation pipeline for searching, synthesizing, and extracting critical info across 100+ complex documents.",
                        tags: ["Python", "OpenAI SDK", "Vector DB", "FastAPI"],
                        metric: "100+ docs",
                        color: "#22c55e",
                      },
                      {
                        name: "Multimodal AI Agent",
                        desc: "Comprehensive agent processing 7+ input streams: text, documents, voice, and imagery. Built with a unified interface.",
                        tags: ["Python", "Streamlit", "OpenAI SDK", "Pillow", "faster-whisper"],
                        metric: "7+ modalities",
                        color: "#f59e0b",
                      },
                      {
                        name: "Custom Observability Manager",
                        desc: "In-memory Flight Recorder circular buffer for tracing microsecond latencies. Paired with Ingestion Metrics module for real-time webhook alerting.",
                        tags: ["Python", "FastAPI", "Redis", "Webhooks"],
                        metric: "μs precision",
                        color: "#ec4899",
                      },
                    ].map(({ name, desc, tags, metric, color }) => (
                      <div key={name} className="p-5 bg-surface-raised rounded-xl border border-line hover:border-accent/20 transition-all duration-200 group">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="text-[14.5px] font-bold text-ink leading-tight">{name}</h3>
                          <span className="shrink-0 font-mono text-[11px] px-2 py-0.5 rounded-full border" style={{ color, borderColor: `${color}40`, background: `${color}10` }}>
                            {metric}
                          </span>
                        </div>
                        <p className="text-[13px] text-ink-muted leading-relaxed mb-3">{desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {tags.map((t) => <Tag key={t}>{t}</Tag>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ════ EXPERIENCE TAB ════ */}
            {activeTab === "experience" && (
              <div id="experience" className="flex flex-col gap-4">
                <div className="rounded-xl border border-line bg-surface p-5">
                  <SectionLabel>Work History</SectionLabel>
                  <div className="flex flex-col gap-6">
                    {EXPERIENCE.map((job, idx) => (
                      <article key={job.company} className="relative">
                        {idx < EXPERIENCE.length - 1 && (
                          <div className="absolute left-4 top-12 bottom-[-24px] w-px bg-line" />
                        )}
                        <div className="flex items-start gap-4">
                          <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 z-10">
                            <span className="text-[13px] font-bold text-accent">{job.company[0]}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-start gap-2 mb-1">
                              <h3 className="text-[15px] font-bold text-ink leading-tight">{job.role}</h3>
                              <StatusBadge label={job.type} color="#f97316" />
                            </div>
                            <p className="text-[12.5px] text-accent font-medium mb-0.5">{job.company}</p>
                            <div className="flex flex-wrap items-center gap-3 text-[11.5px] text-ink-subtle mb-4">
                              <span className="flex items-center gap-1"><Calendar size={11} />{job.period}</span>
                              <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
                            </div>
                            <ul className="flex flex-col gap-2.5">
                              {job.bullets.map((b, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2.5 text-[13px] text-ink-muted leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-2 shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="rounded-xl border border-line bg-surface p-5">
                  <SectionLabel>Education</SectionLabel>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-surface-overlay border border-line flex items-center justify-center shrink-0">
                      <BookOpen size={15} className="text-ink-muted" />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-ink leading-tight">B.Tech, Computer Science Engineering</p>
                      <p className="text-[12px] text-accent mt-0.5">Raghu Institute of Technology, Visakhapatnam</p>
                      <p className="text-[11.5px] text-ink-subtle mt-0.5">2022 – 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ════ PROJECTS TAB ════ */}
            {activeTab === "projects" && (
              <div id="projects" className="flex flex-col gap-4">
                {PROJECTS.map((project) => (
                  <div
                    key={project.name}
                    className="rounded-xl border border-line bg-surface p-5 hover:border-accent/20 group transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[15px] font-bold text-ink hover:text-accent transition-colors duration-200 flex items-center gap-1.5"
                          >
                            {project.name}
                            <ExternalLink size={13} className="text-ink-subtle group-hover:text-accent transition-colors" />
                          </Link>
                          <StatusBadge label={project.status} color="#22c55e" />
                        </div>
                        <p className="text-[13px] text-ink-muted leading-relaxed">{project.oneLine}</p>
                      </div>
                    </div>

                    {(project.problemSolved || project.impact) && (
                      <div className="mt-3 mb-3 pl-3 border-l-2 border-accent/30 flex flex-col gap-1.5">
                        {project.problemSolved && (
                          <p className="text-[12.5px] text-ink-muted leading-relaxed">
                            <span className="font-semibold text-ink">Problem solved: </span>
                            {project.problemSolved}
                          </p>
                        )}
                        {project.impact && (
                          <p className="text-[12.5px] text-ink-muted">
                            <span className="font-semibold text-ink">Impact: </span>
                            <span className="text-green font-mono">{project.impact}</span>
                          </p>
                        )}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ════ SKILLS TAB ════ */}
            {activeTab === "skills" && (
              <div id="skills" className="flex flex-col gap-4">
                {SKILLS.map(({ group, items, icon: Icon }) => (
                  <div key={group} className="rounded-xl border border-line bg-surface p-5 hover:border-line-strong transition-all duration-200">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon size={14} className="text-accent" />
                      </div>
                      <p className="text-[13.5px] font-semibold text-ink">{group}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[11.5px] text-ink-muted border border-line rounded-full px-3 py-1.5 bg-surface-raised hover:border-accent/30 hover:text-accent transition-all duration-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Certifications */}
                <div className="rounded-xl border border-line bg-surface p-5 hover:border-line-strong transition-all duration-200">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-amber/10 flex items-center justify-center">
                      <Award size={14} className="text-amber" />
                    </div>
                    <p className="text-[13.5px] font-semibold text-ink">Certifications</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {CERTIFICATIONS.map((cert) => (
                      <div key={cert.name} className="flex items-start gap-3 p-3 bg-surface-raised rounded-lg border border-line">
                        <CheckCircle size={14} className="text-amber mt-0.5 shrink-0" />
                        <div>
                          <p className="text-[13px] font-medium text-ink leading-snug">{cert.name}</p>
                          <p className="text-[11px] text-ink-subtle mt-0.5">{cert.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ════ OPEN SOURCE TAB ════ */}
            {activeTab === "opensource" && (
              <div id="opensource" className="flex flex-col gap-4">
                <div className="rounded-xl border border-line bg-surface p-5">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-surface-overlay flex items-center justify-center">
                      <GitFork size={14} className="text-ink-muted" />
                    </div>
                    <SectionLabel>GitHub Activity</SectionLabel>
                  </div>
                  <div className="flex flex-col gap-3">
                    {OPEN_SOURCE.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-surface-raised rounded-xl border border-line hover:border-accent/20 transition-all duration-200">
                        <GitBranch size={14} className="text-accent mt-0.5 shrink-0" />
                        <p className="text-[13px] text-ink-muted leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-line bg-surface p-5">
                  <SectionLabel>GitHub Profile</SectionLabel>
                  <Link
                    href="https://github.com/ShafiSk17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-surface-raised rounded-xl border border-line hover:border-accent/30 group transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <GitFork size={20} className="text-ink-muted group-hover:text-accent transition-colors" />
                      <div>
                        <p className="text-[14px] font-semibold text-ink group-hover:text-accent transition-colors">github.com/ShafiSk17</p>
                        <p className="text-[11.5px] text-ink-subtle">584 contributions · Pull Shark ×2</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-ink-subtle group-hover:text-accent transition-colors" />
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ── Right Rail ──────────────────────────────────────────────── */}
        <aside className="w-[300px] shrink-0 border-l border-line sticky top-0 h-screen overflow-y-auto hidden xl:block">
          <div className="px-4 py-5 flex flex-col gap-4">

            {/* About Me card */}
            <div className="rounded-xl border border-line bg-surface p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[12px] font-semibold text-ink">About Me</p>
                <span className="text-[11px] text-accent hover:underline cursor-pointer">Read →</span>
              </div>
              <p className="text-[12.5px] text-ink-muted leading-relaxed">
                I&apos;m an AI Native Engineer with hands-on experience building production-grade reliability infrastructure,
                agent harnesses, and spec-driven full-stack systems at Segmento.
              </p>
              <div className="mt-3 flex flex-col gap-1.5">
                {EXPERIENCE.map((job) => (
                  <div key={job.company} className="flex items-center gap-2 text-[11.5px] text-ink-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                    <span>{job.role} @ <span className="text-accent">{job.company}</span></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status card */}
            <div className="rounded-xl border border-line bg-surface p-4">
              <p className="text-[12px] font-semibold text-ink mb-3">Status</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "GitHub Commits", value: "584", sub: "past year" },
                  { label: "Contribution Rate", value: "96%", sub: "direct commits" },
                  { label: "Systems Shipped", value: "7+", sub: "production" },
                  { label: "Certifications", value: "4", sub: "Oracle + Astronomer" },
                ].map(({ label, value, sub }) => (
                  <div key={label} className="bg-surface-raised rounded-lg p-2.5 border border-line">
                    <p className="text-[11px] text-ink-subtle leading-none mb-1">{label}</p>
                    <p className="text-[16px] font-bold text-ink leading-none">{value}</p>
                    <p className="text-[9.5px] text-ink-subtle mt-1 leading-none">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications card */}
            <div className="rounded-xl border border-line bg-surface p-4">
              <p className="text-[12px] font-semibold text-ink mb-3">Certifications</p>
              <div className="flex flex-col gap-2">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-2 text-[11.5px]">
                    <Award size={12} className="text-amber mt-0.5 shrink-0" />
                    <div>
                      <p className="text-ink-muted leading-snug">{cert.name}</p>
                      <p className="text-ink-subtle">{cert.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="rounded-xl border border-line bg-surface p-4">
              <p className="text-[12px] font-semibold text-ink mb-3">Links</p>
              <div className="flex flex-col gap-1.5">
                {[
                  { href: "https://github.com/ShafiSk17", label: "GitHub", icon: GitFork },
                  { href: "https://linkedin.com/in/shafisk", label: "LinkedIn", icon: Users },
                  { href: "mailto:iamshafisk@gmail.com", label: "Email", icon: Mail },
                  { href: "https://www.segmento.in", label: "Segmento", icon: ExternalLink },
                ].map(({ href, label, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-surface-raised border border-line text-ink-muted hover:text-accent hover:border-accent/20 text-[12px] transition-all duration-200"
                  >
                    <Icon size={13} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </aside>
      </div>
    </div>
  );
}
