---
title: GhostStack
tagline: Serverless productivity stack that converts work-call notes into structured end-of-day reports.
status: live
stack: [Cloudflare Workers, D1, Hono, TypeScript, AI]
url: https://ghoststack.pages.dev/
featured: true
order: 1
pillar: AI/Infra
ogImage: /og/ghoststack.svg
proofImage: /proof/ghoststack-preview.svg
githubUrl: https://github.com/davidlwilson2021/ghoststack
problem: Ad-hoc call notes are hard to convert into consistent end-of-day updates without manual cleanup and formatting overhead.
solution: GhostStack captures ad-hoc work-call notes throughout the day and runs them through an AI summary engine at end-of-day, producing structured reports that are automatically emailed to stakeholders. Zero friction to log, zero effort to report.
approach:
  - Designed a serverless stack focused on transforming raw notes into structured reports
  - Used Cloudflare Workers patterns and lightweight API-first service design
  - Framed the product as an applied AI workflow rather than a generic note tool
outcome: Live product on Base Layer Labs with clear production use-case positioning — strong bridge between product engineering and applied data/AI workflows with low operational overhead.
learned:
  - Product clarity improves when user workflow language is explicit in the interface and copy
  - Operational simplicity matters as much as model sophistication
  - Serverless architecture keeps iteration cycles fast for solo teams
features:
  - Real-time task logging from any device during work calls
  - AI-generated EOD summaries (configurable provider)
  - Admin panel with user approval workflow and audit logs
  - Slack channel mirroring for passive team visibility
  - Auto-scheduled EOD delivery via email
  - Cloudflare D1 (SQLite) — zero database infrastructure to manage
---

GhostStack is a serverless operations productivity tool built entirely on Cloudflare's edge platform. It solves the recurring problem of lost context from daily work calls by making it frictionless to log tasks in the moment and automatic to report them at end of day.

The architecture is intentionally infrastructure-free: Cloudflare Workers handle all compute, D1 provides SQLite persistence at the edge, and there are no servers to provision or scale. The AI summary layer is provider-agnostic — swap between any supported model via the admin settings panel.

```typescript
// Workflow contract pattern used in the project
type DailyReportInput = {
  accountName: string;
  callNotes: string;
  dateISO: string;
};
```

<!-- Add loomUrl to frontmatter after recording: docs/LOOM-GHOSTSTACK-SCRIPT.md in notion-portfolio-upgrade repo -->
