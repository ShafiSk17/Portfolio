"use client";

import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Layers,
  Code2,
  GitBranch,
  BrainCircuit,
  Cpu,
  Compass,
  Flame,
  GitFork,
  Users,
  Mail,
} from "lucide-react";

/* ── Nav structure matching the reference image ─────────────────────── */
const PRIMARY_NAV = [
  { id: "about", label: "Home", sub: "Start here", icon: Home, tab: "overview" },
  { id: "experience", label: "Experience", sub: "Roles & impact", icon: Briefcase, tab: "experience" },
  { id: "explore", label: "Explore", sub: "Browse the stack", icon: Compass, tab: "explore" },
];

const DISCOVERY_NAV = [
  { id: "about", label: "About Me", sub: "Who I am", icon: User, tab: "about" },
  { id: "experience", label: "Experience", sub: "Roles & impact", icon: Briefcase, tab: "experience" },
  { id: "aisystems", label: "AI Systems", sub: "What I own end-to-end", icon: Cpu, tab: "aisystems" },
  { id: "projects", label: "Projects", sub: "Products I shipped", icon: Layers, tab: "projects" },
  { id: "skills", label: "Skills", sub: "Tools I build with", icon: Code2, tab: "skills" },
  { id: "opensource", label: "GitHub", sub: "Open-source activity", icon: GitBranch, tab: "opensource" },
];

const ALL_SECTIONS = [...new Set([...PRIMARY_NAV, ...DISCOVERY_NAV].map((i) => i.id))];

/* ── NavItem component ─────────────────────────────────────────────── */
function NavItem({
  item,
  isActive,
  onClick,
}: {
  item: { id: string; label: string; sub: string; icon: React.ElementType; tab?: string };
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string, tab?: string) => void;
}) {
  const Icon = item.icon;
  return (
    <a
      href={`#${item.id}`}
      onClick={(e) => onClick(e, item.id, item.tab)}
      className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${isActive
          ? "bg-[rgba(249,115,22,0.12)] text-accent"
          : "text-ink-muted hover:bg-surface-raised hover:text-ink"
        }`}
    >
      <div
        className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200 ${isActive
            ? "bg-[rgba(249,115,22,0.15)] text-accent"
            : "bg-surface-overlay text-ink-subtle group-hover:text-ink-muted"
          }`}
      >
        <Icon size={15} strokeWidth={isActive ? 2.5 : 2} />
      </div>
      <div className="min-w-0">
        <p
          className={`text-[13.5px] leading-tight font-medium truncate transition-colors duration-200 ${isActive ? "text-accent font-semibold" : "text-ink group-hover:text-ink"
            }`}
        >
          {item.label}
        </p>
        <p
          className={`text-[11.5px] leading-tight mt-0.5 truncate transition-colors duration-200 ${isActive ? "text-accent/70" : "text-ink-subtle"
            }`}
        >
          {item.sub}
        </p>
      </div>
    </a>
  );
}

/* ── Main Sidebar ──────────────────────────────────────────────────── */
export function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -65% 0px" }
    );

    ALL_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, tab?: string) => {
    e.preventDefault();
    setActiveSection(id);
    // Dispatch custom event so page.tsx can switch tab
    if (tab) {
      window.dispatchEvent(new CustomEvent("sidebar-nav", { detail: { tab } }));
    }
  };

  return (
    <aside className="w-[244px] shrink-0 sticky top-0 h-screen flex flex-col overflow-y-auto border-r border-line bg-surface z-40">
      {/* ── Logo / Brand ─────────────────────────────────────── */}
      <div className="px-4 pt-5 pb-3 border-b border-line">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <Flame size={16} className="text-white" />
          </div>
          <div>
            <p className="text-[14px] font-bold text-ink leading-none">
              shafi<span className="text-accent">sk</span>
            </p>
            <p className="text-[10.5px] text-ink-subtle mt-0.5 leading-none">AI Native Engineer</p>
          </div>
        </div>
      </div>

      {/* ── Primary navigation ───────────────────────────────── */}
      <div className="px-3 pt-4 pb-2">
        <div className="flex flex-col gap-0.5">
          {PRIMARY_NAV.map((item) => (
            <NavItem
              key={`primary-${item.id}-${item.label}`}
              item={item}
              isActive={activeSection === item.id && item.id === "about"}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>

      {/* ── DISCOVERY+ section ───────────────────────────────── */}
      <div className="px-3 pt-3 pb-2">
        <p className="px-3 mb-2 text-[10px] font-semibold tracking-[0.12em] uppercase text-ink-subtle">
          Discovery+
        </p>
        <div className="flex flex-col gap-0.5">
          {DISCOVERY_NAV.map((item) => (
            <NavItem
              key={`discovery-${item.id}-${item.label}`}
              item={item}
              isActive={activeSection === item.id}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>

      {/* ── Spacer ───────────────────────────────────────────── */}
      <div className="flex-1" />

      {/* ── Profile card at bottom ───────────────────────────── */}
      <div className="px-3 pb-4 pt-3 border-t border-line">
        <div className="rounded-xl bg-surface-raised border border-line p-3">
          {/* Avatar + name */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-full bg-surface-overlay border border-line-strong shrink-0 overflow-hidden relative flex items-center justify-center">
              <span className="font-mono text-[11px] text-ink-muted font-medium">SS</span>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/headshot.jpg')" }}
                aria-label="Shafi SK"
                role="img"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-ink leading-none truncate">Shafi SK</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot shrink-0" />
                <p className="text-[10.5px] text-ink-subtle leading-none truncate">Available for hire</p>
              </div>
            </div>
          </div>

          {/* Metrics strip */}
          <div className="grid grid-cols-3 gap-1.5 mb-3">
            {[
              { value: "584", label: "Commits" },
              { value: "7+", label: "Shipped" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-surface rounded-lg px-2 py-1.5 text-center border border-line"
              >
                <p className="text-[13px] font-bold text-ink leading-none">{value}</p>
                <p className="text-[9.5px] text-ink-subtle mt-0.5 leading-none">{label}</p>
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
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                title={label}
                className="flex-1 flex items-center justify-center py-1.5 rounded-lg bg-surface border border-line text-ink-subtle hover:text-accent hover:border-accent/30 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
