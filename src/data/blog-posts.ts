export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string; // markdown
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bayesian-experimental-design",
    title: "Why Bayesian Experimental Design Matters",
    date: "2025-12-10",
    summary:
      "An accessible introduction to Bayesian optimal experimental design and why it produces more informative experiments with fewer resources.",
    tags: ["Bayesian Statistics", "Research"],
    featured: true,
    content: `
## Why Bayesian Experimental Design Matters

Traditional experimental design relies on fixed sample-size calculations and frequentist power analyses. While effective, these approaches often over- or under-allocate resources because they don't incorporate prior knowledge about the parameters of interest.

### The Core Idea

Bayesian experimental design frames the problem as an optimisation: **choose the design that maximises the expected information gain** about the quantity you care about. Formally, we maximise the expected utility

$$U(d) = \\mathbb{E}_{y \\mid d}\\bigl[\\text{KL}\\bigl(p(\\theta \\mid y, d) \\,\\|\\, p(\\theta)\\bigr)\\bigr]$$

where *d* is the design, *y* the data, and *θ* the parameter vector.

### Practical Benefits

1. **Fewer experiments** — by targeting the most informative conditions, you can reach the same precision with a smaller sample.
2. **Sequential adaptation** — designs can be updated after each observation, naturally leading to adaptive trials.
3. **Transparent assumptions** — the prior makes assumptions explicit and auditable.

### Computational Challenges

The main bottleneck is that evaluating *U(d)* requires nested Monte Carlo estimation, which is expensive. Recent advances in amortised inference and variational bounds have made this much more tractable — an exciting area I'm currently exploring in my PhD research at NUS.

> If your experiment is expensive to run, you can't afford *not* to design it carefully.
    `,
  },
  {
    slug: "reproducibility-statistics-education",
    title: "Reproducibility in Undergraduate Statistics Education",
    date: "2025-08-22",
    summary:
      "Reflections on integrating reproducibility principles into the statistics curriculum, drawn from my CSSC 2022 award-winning presentation.",
    tags: ["Reproducibility", "Teaching"],
    featured: true,
    content: `
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
    `,
  },
  {
    slug: "jupyterhub-at-scale",
    title: "Lessons from Running JupyterHub for 10,000+ Users",
    date: "2025-05-14",
    summary:
      "Operational insights from administering the University of Toronto's JupyterHub instance, serving students and researchers across 50+ departments.",
    tags: ["Infrastructure", "EdTech"],
    featured: false,
    content: `
## Lessons from Running JupyterHub for 10,000+ Users

Between 2022 and 2025 I helped administer the University of Toronto's central JupyterHub deployment. Here are a few hard-won lessons.

### 1. Idle Culling Is Non-Negotiable

Students open notebooks and walk away. Without aggressive idle culling (we settled on 30 minutes), memory usage spirals. The key is communicating the policy clearly so students save their work.

### 2. Pre-Built Images Save Everyone's Time

Letting users install packages at runtime sounds flexible but leads to broken environments and support tickets. We maintained curated Docker images per course, updated each term after consulting instructors.

### 3. Monitoring Must Be Proactive

We instrumented Prometheus + Grafana dashboards tracking pod count, memory pressure, and spawn latency. A 10-second spawn-time SLA caught degradation before students noticed.

### 4. Documentation Is the Real Product

The most impactful improvement wasn't technical — it was writing clear onboarding guides. Support tickets dropped 40% the semester after we published a "Getting Started" page with screenshots and FAQs.

### Takeaway

Running educational infrastructure is as much about communication and policy as it is about Kubernetes. The best system is one students never have to think about.
    `,
  },
];
