---
title: Wk 6 R Pipeline
tagline: Multi-model analytical workflow — glm, rpart, nnet, and tm — across structured and text data in one reproducible pipeline.
status: coursework
stack: [R, glm, rpart, nnet, tm, SQL]
featured: true
order: 3
pillar: Data
proofImage: /proof/wk6-predictions.svg
ogImage: /og/wk6-r-pipeline.svg
problem: Evaluate multiple analytical tasks in one reproducible workflow — subscription renewal prediction, insurance risk classification, credit risk scoring, and speech text pattern analysis.
solution: A scored, script-driven pipeline combining logistic regression, decision trees, neural networks, and text mining with consistent preprocessing and validation across heterogeneous datasets.
approach:
  - Logistic regression with glm for renewal propensity
  - Decision tree modeling with rpart for insurance category logic
  - Neural network classification with nnet on normalized features
  - Text mining with tm and document-term matrices for term prevalence insights
outcome: "100/100 on the Week 6 summative — consistent workflow across structured and semi-structured data with interpretable, reusable scripts."
learned:
  - Feature normalization is critical for stable neural network training
  - Root split and variable importance in trees are related but not identical concepts
  - Text mining pipelines need strict preprocessing consistency to make output defensible
features:
  - Four model families in one reproducible R workflow
  - Scored validation outputs with sanitized public artifacts
  - Credit risk neural-net predictions with class probabilities
  - Public-safe summary — full answer keys omitted
---

Graduate-level data mining coursework (DSC 550) demonstrating end-to-end analytical engineering: heterogeneous inputs, multiple model families, and defensible validation — not a single-algorithm notebook exercise.

The neural network scoring output below is a representative sample from Exercise 3 (credit risk classification). Twenty-three applicants scored DO NOT LEND in the full run; all had credit scores below 500.

```r
# Simplified reproducible pipeline skeleton
model_glm <- glm(renewal ~ ., data = train_df, family = binomial())
model_tree <- rpart(risk_class ~ ., data = train_df)
model_nnet <- nnet(target ~ ., data = normalized_train, size = 5)
```
