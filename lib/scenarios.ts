/**
 * Single source of truth for Agent Assist scenarios.
 * Imported by both the client (demo page) and the server (API route).
 * Adding a scenario = add one object here only.
 */

export type ScenarioKey = "overage" | "speed" | "upgrade";

export interface SummaryFields {
  context: string;
  likely_reason: string;
  recommended_resolution: string;
  next_best_action: string;
}

export interface ScenarioData {
  key: ScenarioKey;
  label: string;
  /** Subscriber's opening words — shown in transcript panel */
  transcript: string;
  /** Raw account data shown in the left data panel */
  account: {
    billing: string;
    usage: string;
    lastTicket: string;
  };
  /** System prompt context injected into the model call */
  promptContext: string;
  /** Pre-written fallback — always well-formed, scenario-specific */
  fallback: SummaryFields;
}

export const SCENARIOS: Record<ScenarioKey, ScenarioData> = {
  overage: {
    key: "overage",
    label: "Overage Dispute",
    transcript:
      "Hi, I'm calling about a charge on my bill — there's an extra ₹340 I wasn't expecting. I didn't use any extra data this month, I'm sure of it.",
    account: {
      billing:
        "Plan: Kestrel 30GB — ₹799/mo\nCurrent bill: ₹1,139\nOverage charge: ₹340 (4.25 GB @ ₹80/GB)\nDue: 12 Sep 2026",
      usage:
        "Billing cycle: 10 Aug – 9 Sep 2026\nIncluded: 30.00 GB\nUsed: 34.25 GB\nPeak usage: 3–5 Sep (streaming, 22:00–02:00)",
      lastTicket:
        "Ticket #KM-8821 — 14 Aug 2026\nTopic: SIM swap request\nStatus: Resolved",
    },
    promptContext:
      "Subscriber disputes a ₹340 overage charge. " +
      "Billing: Kestrel 30GB plan ₹799/mo, current bill ₹1,139, overage ₹340 for 4.25 GB at ₹80/GB, due 12 Sep 2026. " +
      "Usage: cycle 10 Aug–9 Sep 2026, included 30 GB, used 34.25 GB, peak usage 3–5 Sep (streaming, 22:00–02:00). " +
      "Last ticket #KM-8821 on 14 Aug 2026: SIM swap request, resolved.",
    fallback: {
      context:
        "Subscriber on the Kestrel 30GB plan is disputing a ₹340 overage charge on their current bill of ₹1,139.",
      likely_reason:
        "Usage records show 34.25 GB consumed against a 30 GB allowance, with peak consumption on 3–5 Sep during late-night streaming — likely unnoticed background or streaming activity.",
      recommended_resolution:
        "Confirm the overage is valid by sharing the usage breakdown with the subscriber. Offer a one-time goodwill credit of ₹170 (50%) if this is their first overage dispute.",
      next_best_action:
        "Propose an upgrade to the Kestrel 50GB plan (₹999/mo) to prevent recurrence, and enable data-usage alerts at 80% and 100% of allowance.",
    },
  },

  speed: {
    key: "speed",
    label: "Speed Complaint",
    transcript:
      "My internet has been painfully slow for the past three days, especially in the evenings. I work from home — this is really affecting me.",
    account: {
      billing:
        "Plan: Kestrel Fiber 100 — ₹1,199/mo\nStatus: Active\nLast payment: ₹1,199 on 1 Sep 2026 (on time)",
      usage:
        "Avg speed (last 7d): 18 Mbps down / 9 Mbps up\nContracted speed: 100 Mbps down / 50 Mbps up\nDrop onset: ~3 Sep 2026, 18:00–23:00 window",
      lastTicket:
        "Ticket #KM-9104 — 4 Sep 2026\nTopic: Slow speeds reported\nStatus: Open — field technician scheduled 8 Sep",
    },
    promptContext:
      "Subscriber on Kestrel Fiber 100 reports slow speeds for 3 days affecting work-from-home. " +
      "Billing: plan ₹1,199/mo, active, last payment on time 1 Sep. " +
      "Usage: contracted 100/50 Mbps, actual avg 18/9 Mbps over last 7 days, degradation started ~3 Sep 18:00–23:00. " +
      "Last ticket #KM-9104 opened 4 Sep, topic slow speeds, open with field tech scheduled 8 Sep.",
    fallback: {
      context:
        "Subscriber on the Kestrel Fiber 100 plan has experienced speeds of ~18 Mbps against a contracted 100 Mbps for the past three days, affecting their work-from-home setup.",
      likely_reason:
        "Measured throughput is 82% below contracted speed, onset correlates with evening congestion (18:00–23:00), suggesting a node-level or line-quality issue in the local area.",
      recommended_resolution:
        "Acknowledge the impact on their work. Confirm that ticket #KM-9104 is open and a field technician is scheduled for 8 Sep. Offer a prorated service credit for the days affected.",
      next_best_action:
        "Escalate ticket to priority if technician appointment is more than 48 hours away, and set a follow-up callback for 9 Sep to confirm resolution.",
    },
  },

  upgrade: {
    key: "upgrade",
    label: "Upgrade Inquiry",
    transcript:
      "I've been a customer for two years and I'm thinking about upgrading my plan. What are my options? I want faster speeds and maybe more data.",
    account: {
      billing:
        "Plan: Kestrel 20GB — ₹649/mo\nTenure: 2 years 1 month\nStatus: Active — no overdue balance",
      usage:
        "Avg monthly usage (last 6mo): 18.4 GB\nPeak month: 21.1 GB (Jul 2026)\nSpeed tier: 30 Mbps",
      lastTicket:
        "Ticket #KM-7733 — 20 Jun 2026\nTopic: Billing query\nStatus: Resolved",
    },
    promptContext:
      "Long-tenure subscriber (2 years) on Kestrel 20GB is proactively inquiring about plan upgrades. " +
      "Billing: ₹649/mo, active, no overdue balance. " +
      "Usage: avg 18.4 GB/mo over last 6 months, peak 21.1 GB in Jul 2026, current speed 30 Mbps. " +
      "Last ticket #KM-7733 Jun 2026, billing query, resolved. " +
      "Subscriber wants faster speeds and more data.",
    fallback: {
      context:
        "Loyal two-year subscriber on the Kestrel 20GB plan is proactively seeking an upgrade for more data and faster speeds.",
      likely_reason:
        "Monthly usage averaging 18.4 GB is approaching the 20 GB ceiling, with a peak of 21.1 GB — the subscriber is naturally outgrowing the current plan.",
      recommended_resolution:
        "Recommend the Kestrel 50GB plan (₹999/mo, 100 Mbps) as the best fit: triples data headroom and delivers 3× the current speed. Offer a 10% loyalty discount for the first 3 months given their tenure.",
      next_best_action:
        "Process the upgrade now if the subscriber agrees, and schedule a follow-up SMS confirmation with the new plan details and activation date.",
    },
  },
};

export const SCENARIO_KEYS = Object.keys(SCENARIOS) as ScenarioKey[];
