---
slug: "bayesian-experimental-design"
title: "Why Bayesian Experimental Design Matters"
date: "2025-12-10"
summary:
    "An accessible introduction to Bayesian optimal experimental design and why it produces more informative experiments with fewer resources."
tags: ["Bayesian Statistics", "Research"]
featured: true
---

## Why Bayesian Experimental Design Matters

Traditional experimental design relies on fixed sample-size calculations and frequentist power analyses. While effective, these approaches often over- or under-allocate resources because they don't incorporate prior knowledge about the parameters of interest.

### The Core Idea

Bayesian experimental design frames the problem as an optimisation: **choose the design that maximises the expected information gain** about the quantity you care about. Formally, we maximise the expected utility

$$U(d) = \mathbb{E}_{y \mid d}\bigl[\text{KL}\bigl(p(\theta \mid y, d) \,\|\, p(\theta)\bigr)\bigr]$$

where *d* is the design, *y* the data, and *θ* the parameter vector.

### Practical Benefits

1. **Fewer experiments** — by targeting the most informative conditions, you can reach the same precision with a smaller sample.
2. **Sequential adaptation** — designs can be updated after each observation, naturally leading to adaptive trials.
3. **Transparent assumptions** — the prior makes assumptions explicit and auditable.

### Computational Challenges

The main bottleneck is that evaluating *U(d)* requires nested Monte Carlo estimation, which is expensive. Recent advances in amortised inference and variational bounds have made this much more tractable — an exciting area I'm currently exploring in my PhD research at NUS.

> If your experiment is expensive to run, you can't afford *not* to design it carefully.

