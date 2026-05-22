---
title: TradeFolio
tagline: LinkedIn meets Houzz for skilled tradespeople — identity, portfolio, and marketplace in one platform.
status: development
stack: [React Native, Expo, NestJS, GraphQL, PostgreSQL, TypeORM, JWT]
featured: true
order: 2
pillar: Dev
ogImage: /og/tradefolio.svg
proofImage: /proof/tradefolio-preview.svg
githubUrl: https://github.com/davidlwilson2021/tradefolio-beta-app
problem: Skilled tradespeople need a modern way to present verified work history, portfolio artifacts, and marketplace-ready identity in one place.
solution: TradeFolio is a mobile-first platform where tradespeople build a verified portfolio of completed work, earn credentialed reviews, and connect directly with property owners and contractors looking to hire — with type-safe boundaries from schema to mobile surface.
approach:
  - Built as a monorepo with mobile and backend workspaces
  - Mobile client uses React Native + Expo with TypeScript
  - Backend uses NestJS + GraphQL (code-first), PostgreSQL 16, TypeORM, and JWT authentication
outcome: Working architecture for a production-oriented identity and portfolio platform with clear stack boundaries and technical documentation aligned with Base Layer Labs product direction.
learned:
  - Product framing is stronger when data model, API contracts, and mobile UX are designed together
  - Type-safe boundaries reduce integration debt as features scale
  - Documentation quality directly impacts implementation speed in solo operating mode
features:
  - React Native + Expo cross-platform mobile app (iOS + Android)
  - Code-first GraphQL API with NestJS and TypeORM
  - JWT authentication with role-based access (tradesperson / client / admin)
  - Portfolio media uploads with project categorization
  - Verified review system tied to completed jobs
  - PostgreSQL 16 with full relational schema
---

TradeFolio addresses a gap in professional identity infrastructure for the skilled trades sector — a $700B+ industry where the primary hiring signal is still word-of-mouth.

The technical architecture is designed for correctness from day one: a code-first GraphQL schema means the API contract and TypeScript types are generated together, TypeORM enforces relational integrity at the ORM layer, and Zod validates at every system boundary. The monorepo structure (npm workspaces) keeps the mobile client and backend in sync across a single type system.

```typescript
// Example contract shape documented in the project
export type PortfolioEntry = {
  title: string;
  trade: string;
  mediaUrls: string[];
  verified: boolean;
};
```
