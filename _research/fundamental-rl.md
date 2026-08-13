---
layout: research
title: "Fundamental Reinforcement Learning"
order: 1  # lower shows first; files without it append by date
date: 2026-08-01
status: "Ongoing"
summary: "Methodological work on offline RL and sequential decision making: irreversibility, credit assignment under delay, uncertainty under partial observability, and structured action spaces."
tags: [Reinforcement Learning, Offline RL, Credit Assignment, Uncertainty]
---

## Overview

Methodological work on the structural properties that separate deployed sequential decision problems from standard benchmarks: delayed feedback, partial observability, action spaces too large to enumerate, fixed datasets that record only prior decisions, and state transitions that cannot be reversed.

<br>

## Themes

- **Dead-ends and irreversibility** — identifying states from which a poor outcome is already determined; relating irreversibility, loss of influence, and rare catastrophe; establishing where pessimism toward unobserved actions is justified
- **Credit assignment under delay** — whether delay thresholds exist beyond which learning fails, and how delay biases the training signal and distributes credit across decisions
- **Uncertainty and partial observability** — value uncertainty from a single network over sampled completions of an incomplete observation, rather than from an ensemble
- **Action spaces and structure** — dependencies among sub-actions in combinatorial spaces, learning action validity separately from action value, and the cost of discretizing continuous control
- **Data and sample efficiency** — whether offline RL method rankings hold as dataset size decreases below benchmark conventions
- **Transfer and shared experience** — which representation of experience survives mismatch between agents or tasks: transitions, successor features, options, or learned structural priors
- **Environment design** — automatic curriculum generation using learned models of environment validity in place of hand-specified mutation rules

<br>

## Relevant prior work

**Robust and Efficient Transfer Learning with Hidden Parameter Markov Decision Processes** &middot; NeurIPS 2017 (also AAAI 2017)
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  <strong>Killian</strong>, Daulton, Konidaris, Doshi-Velez. Models families of related tasks through latent parameters governing their dynamics, enabling policy transfer across instances that differ in dynamics but not in task.
  <div style="margin-top: 0.5rem;">
    <a href="/papers/KillianDaultonKonidarisFDV2017.pdf" class="pub-link">Paper</a>
    <a href="https://github.com/dtak/hip-mdp-public" class="pub-link">Code</a>
    <a href="/talks/hip-mdp_NIPS17oral.pdf" class="pub-link">Slides</a>
    <a href="https://www.facebook.com/nipsfoundation/videos/1554741347950432/" class="pub-link">Talk</a>
  </div>
</div>

**Optimization Methods for Interpretable Differentiable Decision Trees Applied to Reinforcement Learning** &middot; AISTATS 2020
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  Silva, <strong>Killian</strong>, Rodriguez Jimenez, Son, Gombolay. Gradient-trainable decision trees as RL policies, retaining inspectable structure.
  <div style="margin-top: 0.5rem;">
    <a href="/papers/SilvaKillianJimenezSonGombolayAISTATS_2020.pdf" class="pub-link">Paper</a>
  </div>
</div>

**Direct Policy Transfer with Hidden Parameter Markov Decision Processes** &middot; Lifelong Learning Workshop, FAIM 2018
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  Yao, <strong>Killian</strong>, Konidaris, Doshi-Velez. Transfers policies directly across task instances given estimated latent parameters, without per-instance relearning.
  <div style="margin-top: 0.5rem;">
    <a href="/papers/YaoKillianKonidarisFDV2018_ICML.pdf" class="pub-link">Paper</a>
    <a href="/papers/YaoKillianKonidarisFDV2018_ICML_oral.pdf" class="pub-link">Slides</a>
  </div>
</div>

**Robust Autonomy Emerges from Self-Play** &middot; ICML 2025
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  Cusumano-Towner et al., incl. <strong>Killian</strong>. Self-play at large scale with randomization over agent physical and behavioral characteristics, producing robust driving policies in simulation.
  <div style="margin-top: 0.5rem;">
    <a href="https://arxiv.org/abs/2502.03349" class="pub-link">Paper</a>
  </div>
</div>

**BraVE: Offline Reinforcement Learning for Discrete Combinatorial Action Spaces** &middot; NeurIPS 2025
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  Landers, <strong>Killian</strong>, Barnes, Hartvigsen, Doryab. Tree-structured traversal captures sub-action dependencies while evaluating a linear number of joint actions, improving on prior methods by up to 20&times;.
  <div style="margin-top: 0.5rem;">
    <a href="/papers/BraVE_LandersKillianBarnesHartvigsenDoryab_NeurIPS25.pdf" class="pub-link">Paper</a>
    <a href="https://github.com/matthewlanders/BraVE" class="pub-link">Code</a>
  </div>
</div>

**Improving and Accelerating Offline RL in Large Discrete Action Spaces with Structured Policy Initialization** &middot; ICLR 2026
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1rem; color: var(--text-light);">
  Landers, <strong>Killian</strong>, Hartvigsen, Doryab. SPIN pretrains an action structure model on valid action patterns, then trains lightweight control heads: up to 39% higher reward and up to 12.8&times; faster convergence.
  <div style="margin-top: 0.5rem;">
    <a href="/papers/SPIN_LandersKillianHartvigsenDoryab_ICLR26.pdf" class="pub-link">Paper</a>
    <a href="https://github.com/matthewlanders/SPIN" class="pub-link">Code</a>
  </div>
</div>

<div style="color: var(--text-light); margin-top: 1rem;">
  Also relevant: <a href="https://arxiv.org/abs/2505.12109">SAINT</a>, modeling joint actions as unordered sets via self-attention, and <a href="/papers/KillianZhangHartvigsenAmini_2023IMLH.pdf">continuous-time evidential distributions</a> for uncertainty over irregularly sampled observations.
</div>
