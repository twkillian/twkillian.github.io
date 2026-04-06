---
# Layout: Use "research" for research posts
layout: research

# Title: The title of your research project
title: "Reinforcement Learning for Foundation Models"

# Date: Used for sorting (YYYY-MM-DD format)
date: 2026-01-01

# Status: Display text like "Ongoing", "2023-2024", "Completed", etc.
status: "Ongoing"

# Tags: List of tags to categorize the research
tags: [RL for LLMs, Foundation Models]
---

## Overview

Leading research efforts at MBZUAI's Institute of Foundation Models to develop practical RL techniques for improving language model reasoning and alignment. Our work spans multiple reasoning domains through the LLM360 initiative.

<br>

## Key Objectives

- Develop cross-domain RL approaches for LLM reasoning
- Create scalable reward signals for diverse reasoning tasks
- Build open-source models and datasets for community research

<br>

## Current Work

### Guru: Cross-Domain RL Reasoning

We introduced Guru, a curated RL reasoning corpus spanning six reasoning domains: Math, Code, Science, Logic, Simulation, and Tabular reasoning. This work systematically revisits established findings in RL for LLM reasoning and observes significant variation across domains.

**Key Findings:**
- RL effectiveness varies substantially across reasoning domains
- Domain-specific reward design is critical for success
- Open datasets enable reproducible research in this space

<br>

## Related Publications

**Revisiting Reinforcement Learning for LLM Reasoning from A Cross-Domain Perspective** (2025)

<div style="margin-left: 2rem; margin-top: 0.5rem; margin-bottom: 1rem;">
  <a href="https://arxiv.org/abs/2506.14965" class="pub-link">Paper</a>
  <a href="https://guru-reasoning.github.io/" class="pub-link">Website</a>
  <a href="https://github.com/LLM360/Reasoning360" class="pub-link">Code</a>
  <a href="https://huggingface.co/datasets/LLM360/guru-RL-92k" class="pub-link">Data</a>
  <a href="https://huggingface.co/collections/LLM360/guru-683e378108f197769265bf01" class="pub-link">Models</a>
</div>

<br>

## Impact

This research aims to broaden the applicability of RL beyond traditional domains (math/code) to enable more general reasoning capabilities in foundation models. Our open-source approach ensures accessibility for the broader research community.
