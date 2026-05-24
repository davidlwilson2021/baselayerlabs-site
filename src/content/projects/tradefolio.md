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
  - Monorepo structure (npm workspaces) with /mobile and /backend workspaces sharing a root TypeScript config
  - Code-first GraphQL with NestJS — schema and TypeScript types generated from decorators, not hand-maintained IDL
  - TypeORM entity-driven schema with strict relational constraints; synchronize locked to development environments only
  - JWT authentication enforced at startup — JWT_SECRET missing throws at boot, no silent dev-secret fallback in any environment
  - Rate limiting on auth mutations and CORS locked to known origins for production hardening
  - Role-based access control across three actor types: tradesperson, client, and admin
outcome: A production-hardened full-stack monorepo with a code-first GraphQL API, JWT-secured authentication, and a React Native mobile client — built to prove that domain-correct architecture decisions pay dividends before the first feature ships.
learned:
  - Security belongs at architecture time — JWT secret enforcement at startup, rate limiting at the resolver layer, and synchronize:false in production are not retrofits, they're decisions
  - Code-first GraphQL collapses the gap between API contract and TypeScript types; schema drift becomes a compile error, not a runtime surprise
  - Monorepo structure pays back quickly — shared types across mobile and backend surface mismatches at the PR level rather than the integration level
features:
  - React Native + Expo cross-platform mobile app (iOS + Android)
  - Code-first GraphQL API with NestJS and TypeORM
  - JWT authentication with role-based access (tradesperson / client / admin)
  - Portfolio media uploads with project categorization
  - Verified review system tied to completed jobs
  - PostgreSQL 16 with full relational schema
---

TradeFolio addresses a gap in professional identity infrastructure for the skilled trades sector — a $700B+ industry where the primary hiring signal is still word-of-mouth. Platforms like Angi generate leads but don't build professional identity. LinkedIn doesn't map to trades workflows. The result is that hiring decisions worth thousands of dollars still route through referrals and unverified reviews on general-purpose sites.

The technical approach starts at the schema. A code-first GraphQL API means the data contract is defined in TypeScript and NestJS decorators — the schema is never hand-maintained separately from the types. TypeORM entities enforce relational integrity at the ORM layer: a `PortfolioEntry` cannot exist without an owning `User`, a `Review` cannot be created without a linked completed job. This constraint-first thinking is built into the entity design, not added as validation logic later.

```typescript
// NestJS code-first GraphQL — contract defined in TypeScript, not IDL
@ObjectType()
export class PortfolioEntry {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => TradeCategory)
  trade: TradeCategory;

  @Field(() => [String])
  mediaUrls: string[];

  @Field()
  verified: boolean;

  @ManyToOne(() => User, (user) => user.portfolioEntries)
  @Field(() => User)
  owner: User;
}
```

Security is treated as an architecture concern, not a post-launch checklist. JWT secrets are required at startup — the server throws on boot if `JWT_SECRET` is not set, with no silent fallback. Auth mutations are rate-limited at the resolver layer via `@nestjs/throttler`. CORS is locked to known origin URLs. TypeORM `synchronize` is disabled outside development. These aren't afterthoughts; they reflect what production-oriented architecture looks like when you're the only engineer on the stack.
