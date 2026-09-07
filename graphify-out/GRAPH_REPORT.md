# Graph Report - portfolio-app  (2026-09-07)

## Corpus Check
- 26 files · ~19,298 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 143 nodes · 136 edges · 23 communities (15 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9fd1d97a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_demopage.tsx|demo/page.tsx]]
- [[_COMMUNITY_package.json|package.json]]
- [[_COMMUNITY_compilerOptions|compilerOptions]]
- [[_COMMUNITY_layout.tsx|layout.tsx]]
- [[_COMMUNITY_devDependencies|devDependencies]]
- [[_COMMUNITY_apppage.tsx|app/page.tsx]]
- [[_COMMUNITY_scripts|scripts]]
- [[_COMMUNITY_dependencies|dependencies]]
- [[_COMMUNITY_README|README.md]]
- [[_COMMUNITY_DemoPage|DemoPage]]
- [[_COMMUNITY_how-i-workpage.tsx|how-i-work/page.tsx]]
- [[_COMMUNITY_AGENTS|AGENTS.md]]
- [[_COMMUNITY_eslint.config.mjs|eslint.config.mjs]]
- [[_COMMUNITY_postcss.config.mjs|postcss.config.mjs]]
- [[_COMMUNITY_next.config.ts|next.config.ts]]
- [[_COMMUNITY_tailwind.config.ts|tailwind.config.ts]]
- [[_COMMUNITY_Navbar.tsx|Navbar.tsx]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Reconnaissance for Profile Page Work` - 10 edges
3. `scripts` - 6 edges
4. `Ubiquitous Language — Portfolio App` - 6 edges
5. `POST()` - 4 edges
6. `SCENARIOS` - 4 edges
7. `ScenarioKey` - 3 edges
8. `SummaryFields` - 3 edges
9. `SCENARIO_KEYS` - 3 edges
10. `buildPrompt()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (23 total, 8 thin omitted)

### Community 0 - "demo/page.tsx"
Cohesion: 0.15
Nodes (11): buildPrompt(), GET(), makeFallback(), POST(), GenerateResponse, UIState, SCENARIO_KEYS, ScenarioData (+3 more)

### Community 2 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 3 - "layout.tsx"
Cohesion: 0.40
Nodes (3): ibmPlexMono, inter, metadata

### Community 4 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, jest, jest-environment-node, tailwindcss, @tailwindcss/postcss, ts-jest (+5 more)

### Community 5 - "app/page.tsx"
Cohesion: 0.11
Nodes (12): CERTIFICATIONS, EXPERIENCE, METRICS, OPEN_SOURCE, PROJECTS, SKILLS, Tab, THOUGHT_PROCESS (+4 more)

### Community 6 - "scripts"
Cohesion: 0.13
Nodes (14): dependencies, lucide-react, next, react, react-dom, name, private, scripts (+6 more)

### Community 7 - "dependencies"
Cohesion: 0.18
Nodes (10): Button Pattern (`app/page.tsx` & `components/Navbar.tsx`), Existing Conventions (`AGENTS.md` and `CLAUDE.md`), Font Setup (`app/layout.tsx`), Header JSX (`app/page.tsx`), Icon Library (`package.json`), Open Source Section JSX (`app/page.tsx`), Reconnaissance for Profile Page Work, Render Patterns (`app/page.tsx`) (+2 more)

### Community 8 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 9 - "DemoPage"
Cohesion: 0.29
Nodes (6): Design Tokens (ledger/case-file), Flagged ambiguities, Governing Principle, Pages, Profile Page Sections (in-progress work), Ubiquitous Language — Portfolio App

## Knowledge Gaps
- **83 isolated node(s):** `GenerateResponse`, `UIState`, `STEPS`, `inter`, `ibmPlexMono` (+78 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **What connects `GenerateResponse`, `UIState`, `STEPS` to the rest of the system?**
  _83 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `app/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._