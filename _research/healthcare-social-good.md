---
layout: research
title: "Healthcare and Social Good"
card_title: "Healthcare and<br>Social Good"
order: 2  # lower shows first; files without it append by date
date: 2026-07-15
status: "Ongoing"
summary: "Offline sequential decision making on observational clinical data: dead-end identification, treatment disparities, transfer across populations and sites, and uncertainty over irregular observations."
tags: [Healthcare, Offline RL, Equity, Causal Inference]
---

## Overview

Applied sequential decision making on observational health data, where the record is confounded by prior treatment decisions, observations are irregularly sampled, outcomes are delayed, populations differ across sites, and some clinical trajectories cannot be reversed.

<br>

## Themes

- **Dead-ends and irreversibility in clinical data** — identifying states and treatments to avoid from negative outcomes, and whether the approach holds in pediatric cohorts with faster physiology, weight-based dosing, and smaller sample sizes
- **Equity and fairness** — distinguishing treatment differences attributable to physiology, clinician bias, or resource constraint, and preventing learned policies from reproducing them
- **Transfer across populations and sites** — grounding policy transfer in counterfactual reasoning rather than distributional similarity, and sharing learned structure across sites without sharing patient data
- **Uncertainty over irregular observations** — calibrated estimates that widen as time since last measurement increases
- **Sequential allocation beyond the clinic** — formulating humanitarian aid allocation as a sequential decision problem with delayed outcomes, subject to data availability

<br>

## Relevant prior work

**Medical Dead-ends and Learning to Identify High-Risk States and Treatments** &middot; NeurIPS 2021
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  Fatemi, <strong>Killian</strong>, Subramanian, Ghassemi. Uses negative outcomes in data-constrained offline settings to identify behaviors to avoid, guarding against overoptimistic decisions. Introduces separate value estimation over failure and success signals.
  <div style="margin-top: 0.5rem;">
    <a href="/papers/FatemiKillianSubramanianGhassemi_2021NeurIPS.pdf" class="pub-link">Paper</a>
    <a href="https://github.com/microsoft/med-deadend" class="pub-link">Code</a>
    <a href="https://www.microsoft.com/en-us/research/blog/using-reinforcement-learning-to-identify-high-risk-states-and-treatments-in-healthcare/" class="pub-link">MSR Blog</a>
  </div>
</div>

**An Empirical Study of Representation Learning for Reinforcement Learning in Healthcare** &middot; ML4H, NeurIPS 2020
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  <strong>Killian</strong>, Zhang, Subramanian, Fatemi, Ghassemi. Systematic comparison of patient state representations for offline RL, quantifying their effect on the resulting policies.
  <div style="margin-top: 0.5rem;">
    <a href="/papers/KillianZhangSubramanianFatemiGhassemi_2020ML4H.pdf" class="pub-link">Paper</a>
    <a href="https://github.com/MLforHealth/rl_representations/" class="pub-link">Code</a>
  </div>
</div>

**Counterfactually Guided Policy Transfer in Clinical Settings** &middot; CHIL 2022
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  <strong>Killian</strong>, Ghassemi, Joshi. Combines causal inference with offline RL to support policy transfer between patient populations via counterfactual estimation.
  <div style="margin-top: 0.5rem;">
    <a href="/papers/KillianGhassemiJoshi_2022CHIL.pdf" class="pub-link">Paper</a>
    <a href="/papers/KillianGhassemiJoshi_2022CHIL_poster.pdf" class="pub-link">Poster</a>
  </div>
</div>

**Multiple Sclerosis Severity Classification From Clinical Text** &middot; Clinical NLP Workshop, 2020
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  D'Costa, Denkovski, Malyska, Moon, Rufino, Yang, <strong>Killian</strong>, Ghassemi. Severity estimation from clinical notes, with a released domain-specific language model.
  <div style="margin-top: 0.5rem;">
    <a href="/papers/MSBERT_dCostaDenkovskiMalyskaMoonRufinoYangKillianGhassemiClinicalNLP_2020.pdf" class="pub-link">Paper</a>
    <a href="https://huggingface.co/NLP4H/ms_bert" class="pub-link">Model</a>
  </div>
</div>

**Risk Sensitive Dead-end Identification in Safety-Critical Offline Reinforcement Learning** &middot; TMLR 2023
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.25rem; color: var(--text-light);">
  <strong>Killian</strong>, Parbhoo, Ghassemi. Applies distributional RL to dead-end discovery, providing earlier identification with risk tolerance as a tunable parameter.
  <div style="margin-top: 0.5rem;">
    <a href="/papers/KillianParbhooGhassemi_2023TMLR.pdf" class="pub-link">Paper</a>
    <a href="https://openreview.net/forum?id=oKlEOT83gI" class="pub-link">Forum</a>
    <a href="https://github.com/MLforHealth/DistDeD" class="pub-link">Code</a>
  </div>
</div>

**Clinically Motivated Sequential Decision Making Under Uncertainty in Offline Settings** &middot; PhD Thesis, University of Toronto, 2024
<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1rem; color: var(--text-light);">
  <strong>Killian</strong>. Modeling decisions for deriving actionable insight from sequentially observed healthcare data.
  <div style="margin-top: 0.5rem;">
    <a href="https://utoronto.scholaris.ca/items/dba5032c-47a8-4ed2-9cb3-2cbf90d26e11" class="pub-link">Thesis</a>
  </div>
</div>

<div style="color: var(--text-light); margin-top: 1rem;">
  Also relevant: <a href="/publications">Identifying Disparities in Sepsis Treatment using Inverse Reinforcement Learning</a> (Jeong, <strong>Killian</strong>, Kanjilal, Nayak, Ghassemi; NeurIPS workshops 2022) and <a href="/papers/KillianZhangHartvigsenAmini_2023IMLH.pdf">Continuous Time Evidential Distributions for Irregular Time Series</a>.
</div>
