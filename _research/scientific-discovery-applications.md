---
layout: research
title: "Scientific Discovery and Other Applications"
order: 4  # lower shows first; files without it append by date
date: 2026-06-15
status: "Ongoing"
summary: "Sequential decision making for automated experimentation: embodied scientific reasoning, acting while prior experiments remain unresolved, and synthetic data for underrepresented situations."
tags: [Scientific Discovery, Embodied Agents, Applications, Synthetic Data]
---

## Overview

Application of sequential decision making to automated experimentation and related domains, where actions consume material irreversibly, instruments drift, and outcomes resolve after subsequent decisions must already be made. Connected to work in the AI Research organization at Lila Sciences.

<br>

## Themes

- **Embodied scientific reasoning** — extending text-based scientific reasoning benchmarks to settings requiring the full experimental loop: hypothesis formation, execution, and interpretation under partial observability
- **Decisions with unresolved outcomes** — selecting the next experiment while prior experiments remain pending, and learning from incomplete outcome records
- **Synthetic data for underrepresented situations** — generating training data from simulators for rare configurations, with explicit measurement of transfer to real data

<br>

## Relevant prior work

**Robust Autonomy Emerges from Self-Play** &middot; ICML 2025
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  Cusumano-Towner et al., incl. <strong>Killian</strong>. Self-play in a massively parallel simulator with randomization over agent physical and behavioral characteristics, yielding robust driving policies. Relevant to what simulated experience can substitute for.
  <div style="margin-top: 0.5rem;">
    <a href="https://arxiv.org/abs/2502.03349" class="pub-link">Paper</a>
  </div>
</div>

**Efficient Agentic Reasoning Through Self-Regulated Simulative Planning** &middot; 2026
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1rem; color: var(--text-light);">
  Deng et al., incl. <strong>Killian</strong>. SR&sup2;AM decomposes agent decision making into simulative reasoning via world model prediction, self-regulation over when to plan, and reactive execution, matching larger models with 25.8&ndash;95.3% fewer reasoning tokens.
  <div style="margin-top: 0.5rem;">
    <a href="https://arxiv.org/abs/2605.22138" class="pub-link">Paper</a>
    <a href="https://github.com/sailing-lab/sr2am" class="pub-link">Code</a>
  </div>
</div>

<div style="color: var(--text-light); margin-top: 1rem;">
  Methods for this area draw substantially on the <a href="/research/fundamental-rl/">fundamental RL</a> and <a href="/research/foundation-model-post-training/">foundation model post-training</a> directions.
</div>
