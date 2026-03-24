---
slug: "reproducibility-statistics-education"
title: "Reproducibility in Undergraduate Statistics Education"
date: "2025-08-22"
summary:
    "Reflections on integrating reproducibility principles into the statistics curriculum, drawn from my CSSC 2022 award-winning presentation."
tags: ["Reproducibility", "Teaching"]
featured: true
---
## Reproducibility in Undergraduate Statistics Education

At the 2022 Canadian Statistics Student Conference I presented a comparison of reproducibility guidelines across disciplines. The talk was awarded *Best Undergraduate Oral Presentation*, and the experience shaped my views on how we teach statistics.

### The Gap

Most undergraduate curricula teach students *how* to run analyses but not *how to make those analyses reproducible*. Students graduate able to fit models in R or Python yet rarely use version control, literate programming, or dependency management.

### What We Can Do

- **Introduce R Markdown / Quarto early.** When the assignment format is a reproducible document, reproducibility becomes a habit rather than an afterthought.
- **Automate grading with reproducibility in mind.** Tools like [RMarkUs](https://github.com/RAutoGrading/RMarkUs) can verify that student code runs end-to-end in a clean environment, catching hidden dependencies.
- **Teach the "whole game."** Embed data cleaning, version control, and documentation into introductory courses instead of treating them as advanced topics.

### Looking Ahead

Generative AI is changing the landscape. Students can now produce code faster than ever, but the need for reproducible workflows is *greater*, not lesser — AI-generated code is particularly prone to undeclared dependencies and implicit assumptions.
