# Ubiquitous Language — Portfolio App

## Pages
| Term | Definition | Aliases to avoid |
|---|---|---|
| **Profile page** | Home route (`/`) — About/landing page with experience, skills, certs, projects. | About page (fine informally, but code/comments use Profile page) |
| **AI-Native Engineering page** | Conceptual page at `/ai-native-engineering` explaining the philosophy. | |
| **How I Work page** | Applied page at `/how-i-work`, using the Agent Assist build as worked example. | |
| **Demo page** | The Agent Assist prototype at `/demo`. | Agent Assist page |

## Profile Page Sections (in-progress work)
| Term | Definition | Aliases to avoid |
|---|---|---|
| **Resume section** | Inline-rendered + downloadable view of the real resume PDF. Distinct from the header Summary. | Resume viewer |
| **Projects section** | Section for named work products (Segmento Sense, Pulse, Mainsite, OminiAIAgent). Distinct from Open Source. | |
| **Open Source section** | Pre-existing section for public/open tools, positioned after Projects. | |
| **Thought Process section** | Closing section: first-person intro + numbered ledger-entry breakdown of problem-solving approach. | How I approach problems |

## Design Tokens (ledger/case-file)
| Term | Value | Notes |
|---|---|---|
| **paper** | `#E8ECE3` | Page background |
| **panel** | `#FBFAF5` | Card/section background |
| **ink** | `#1A2421` | Primary text |
| **ink-muted** | `#5C6B64` | Secondary/elaboration text |
| **hairline** | `#C9CEBF` | Borders — used instead of drop shadows |
| **accent** | `#2F6F5E` | Primary accent |
| **amber** | `#A8792A` | Flagged/labeled states only, used sparingly |

## Governing Principle
| Term | Definition |
|---|---|
| **Nothing invented** | Every claim on this site must trace to SDE_Shafi_Resume.pdf or a verified codebase. Unverifiable claims are omitted, never estimated or rounded up. |

## Flagged ambiguities
- "OmniA" vs "OminiAIAgent": the actual GitHub repo and in-app title use **OminiAIAgent** — this is canonical. "OmniA" is a spoken/informal alias to avoid in code and copy.
