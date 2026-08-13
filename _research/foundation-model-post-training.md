---
layout: research
title: "Foundation Model Post-Training and Reasoning"
order: 3  # lower shows first; files without it append by date
date: 2026-07-01
status: "Ongoing"
summary: "Reinforcement learning for foundation model reasoning: cross-domain generalization of RL recipes, compute allocation, post-training dynamics, distillation, and structured actions in agentic settings."
tags: [Foundation Models, Post-training, Reasoning, RL for LLMs]
---

## Overview

Reinforcement learning applied to foundation model reasoning, focusing on which post-training results generalize across domains, how RL affects a model's capacity for further learning, and how to allocate a fixed compute budget across the components of an RL run.

<br>

## Themes

- **Post-training dynamics** — measuring loss of plasticity during RL post-training using formal measures rather than proxy symptoms such as entropy collapse or degraded pass@k
- **Distillation and specialization** — multi-teacher on-policy distillation across model families and scales, and decomposing a model into domain specialists for recombination
- **Uncertainty in the training signal** — formulating RLVR as partially observed, where neither reasoning validity nor verifier correctness is observable to the model
- **Structured actions in agentic settings** — tool call sequences as combinatorial action spaces, learning valid call structure from logs
- **Efficiency and oversight** — reasoning length and monitorability as explicit training objectives

<br>

## Relevant prior work

**Revisiting Reinforcement Learning for LLM Reasoning from A Cross-Domain Perspective** &middot; NeurIPS 2025
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  Cheng et al., incl. <strong>Killian</strong>. Guru, an RL reasoning corpus spanning math, code, science, logic, simulation, and tabular reasoning. Establishes that several accepted findings in RL for reasoning are domain-specific.
  <div style="margin-top: 0.5rem;">
    <a href="https://arxiv.org/abs/2506.14965" class="pub-link">Paper</a>
    <a href="https://guru-reasoning.github.io/" class="pub-link">Website</a>
    <a href="https://github.com/LLM360/Reasoning360" class="pub-link">Code</a>
    <a href="https://huggingface.co/datasets/LLM360/guru-RL-92k" class="pub-link">Data</a>
  </div>
</div>

**IsoCompute Playbook: Optimally Scaling Sampling Compute for LLM RL** &middot; ICML 2026
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  Cheng et al., incl. <strong>Killian</strong>. Scaling laws for allocating compute across parallel rollouts, problem batch size, and update steps. Parallel rollouts per problem are the primary driver of performance, improving solution quality on easy problems and coverage on hard ones.
  <div style="margin-top: 0.5rem;">
    <a href="https://compute-optimal-rl-llm-scaling.github.io/" class="pub-link">Website</a>
    <a href="https://arxiv.org/abs/2603.12151" class="pub-link">Paper</a>
  </div>
</div>

**K2-Think: A Parameter-Efficient Reasoning System** &middot; MBZUAI IFM Technical Report, 2025
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  Cheng et al., incl. <strong>Killian</strong>. A 32B reasoning system combining long chain-of-thought training with test-time computation, competitive with substantially larger models on math, code, and science.
  <div style="margin-top: 0.5rem;">
    <a href="https://www.k2think.ai/" class="pub-link">Website</a>
    <a href="https://arxiv.org/abs/2509.07604" class="pub-link">Paper</a>
    <a href="https://huggingface.co/LLM360/K2-Think" class="pub-link">Models</a>
  </div>
</div>

**From Reasoning Traces to Reusable Modules** &middot; ICML 2026
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  Kong et al., incl. <strong>Killian</strong>. Theoretical and empirical account of compositional generalization under RL: exploration provides the coverage needed to identify latent structure in reasoning traces, and training on compound traces generalizes better than on isolated modules.
  <div style="margin-top: 0.5rem;">
    <a href="/publications" class="pub-link">Details</a>
  </div>
</div>

**K2-V2: A 360-Open, Reasoning-Enhanced LLM** &middot; MBZUAI IFM Technical Report, 2025
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1rem; color: var(--text-light);">
  K2 Team, Institute of Foundation Models. A 360B-parameter reasoning-centric base model released with its full training history and data.
  <div style="margin-top: 0.5rem;">
    <a href="https://ifm.ai/k2/" class="pub-link">Website</a>
    <a href="https://www.llm360.ai/reports/K2_V2_report.pdf" class="pub-link">Report</a>
    <a href="https://huggingface.co/datasets/LLM360/TxT360" class="pub-link">Data</a>
  </div>
</div>

<div style="color: var(--text-light); margin-top: 1rem;">
  Also relevant: <a href="https://arxiv.org/abs/2510.10168">PALU</a> on concision as a Lagrangian trade-off between length and accuracy, <a href="https://arxiv.org/abs/2605.07021">Behavior Cue Reasoning</a> on monitorable reasoning, <a href="https://arxiv.org/abs/2605.30651">LARK</a> on trajectory selection for distillation by student learnability, and <a href="https://arxiv.org/abs/2605.22138">SR&sup2;AM</a> on self-regulated simulative planning.
</div>
