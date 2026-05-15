---
title: GhostStack
tagline: Serverless productivity stack that converts work-call notes into structured end-of-day reports.
status: live
stack: [Cloudflare Workers, D1, Hono, TypeScript, AI]
url: https://ghoststack.pages.dev/
featured: true
order: 1
githubUrl: https://github.com/davidlwilson2021/ghoststack
problem: Operations teams lose hours every week reconstructing what happened during work calls. Notes are scattered across chat threads, whiteboards, and memory — by EOD, the context is gone.
solution: GhostStack captures ad-hoc work-call notes throughout the day and runs them through an AI summary engine at end-of-day, producing structured reports that are automatically emailed to stakeholders. Zero friction to log, zero effort to report.
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
