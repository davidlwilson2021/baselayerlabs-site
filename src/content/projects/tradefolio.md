---
title: TradeFolio
tagline: LinkedIn meets Houzz for skilled tradespeople — identity, portfolio, and marketplace in one platform.
status: development
stack: [React Native, Expo, NestJS, GraphQL, PostgreSQL, TypeORM, JWT]
featured: true
order: 2
githubUrl: https://github.com/davidlwilson2021/tradefolio-beta-app
problem: Skilled tradespeople have no professional identity layer. LinkedIn is built for white-collar workers. Houzz is for homeowners. There is no platform built for the plumber, electrician, or HVAC tech to establish credibility, display their work, and connect with clients.
solution: TradeFolio is a mobile-first platform where tradespeople build a verified portfolio of completed work, earn credentialed reviews, and connect directly with property owners and contractors looking to hire. Think LinkedIn for credentials + Houzz for the portfolio.
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
