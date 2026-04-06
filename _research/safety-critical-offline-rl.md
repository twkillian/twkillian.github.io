---
# Layout: Use "research" for research posts
layout: research

# Title: The title of your research project
title: "Safety-Critical Offline Reinforcement Learning"

# Date: Used for sorting (YYYY-MM-DD format)
date: 2023-06-01

# Status: Display text like "Ongoing", "2023-2024", "Completed", etc.
status: "2023-2024"

# Tags: List of tags to categorize the research
tags: [Healthcare, Safety, Offline RL]
---

## Overview

Developing risk-sensitive methods for identifying dangerous states and treatments in healthcare settings. Focus on dead-end identification using distributional RL and conservative value estimation for improved patient safety.

## Motivation

In safety-critical domains like healthcare, optimal policies may not be attainable from limited offline data. However, negative outcomes can be leveraged to identify behaviors to avoid, guarding against overoptimistic decisions.

<br>

## Technical Approach

### Risk-Sensitive Dead-End Identification

- **Distributional RL**: Model value distributions rather than expected values
- **Conditional Value-at-Risk (CVaR)**: Account for worst-case outcomes
- **Tunable Risk Tolerance**: Adjust conservatism based on application needs

### Dead-End Discovery Framework

1. **State Construction**: Learn meaningful patient state representations
2. **Dead-End Discovery**: Identify high-risk states using distributional value estimates
3. **Dead-End Confirmation**: Validate discovered dead-ends through multiple independent models

<br>

## Key Results

- Earlier identification of dangerous states compared to expectation-based methods
- Tunable risk sensitivity enables domain-expert control
- Framework applicable across different healthcare settings (sepsis, diabetes, etc.)

<br>

## Publications

**Risk Sensitive Dead-end Identification in Safety-Critical Offline Reinforcement Learning** (TMLR 2023)

<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1.5rem;">
  <a href="/papers/KillianParbhooGhassemi_2023TMLR.pdf" class="pub-link">Paper</a>
  <a href="https://openreview.net/forum?id=oKlEOT83gI" class="pub-link">Forum</a>
  <a href="https://github.com/MLforHealth/DistDeD" class="pub-link">Code</a>
</div>

**Medical Dead-ends and Learning to Identify High-Risk States and Treatments** (NeurIPS 2021)

<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1rem;">
  <a href="/papers/FatemiKillianSubramanianGhassemi_2021NeurIPS.pdf" class="pub-link">Paper</a>
  <a href="/papers/FatemiKillianSubramanianGhassemi_2021NeurIPS_poster.pdf" class="pub-link">Poster</a>
  <a href="https://github.com/microsoft/med-deadend" class="pub-link">Code</a>
  <a href="https://www.microsoft.com/en-us/research/blog/using-reinforcement-learning-to-identify-high-risk-states-and-treatments-in-healthcare/" class="pub-link">MSR Blog</a>
</div>

<br>

## Impact

This work provides practical tools for clinicians to identify potentially dangerous treatment paths, complementing existing clinical guidelines with data-driven safety analysis.
