---
# Layout: Use "teaching" for teaching posts
layout: teaching

# Title: The title of your teaching activity
title: "Contemporary Topics in Reinforcement Learning"

# Summary: Shown on listing cards
summary: "A graduate survey of open questions in RL, organized around the assumptions the classical formulation quietly makes — a given state, a stationary task, a network that can still learn, an agent whose goals are its reward, and data you can collect at will."

# Order: Explicit display order on listings (lower shows first)
order: 6

# Date: Used for sorting (YYYY-MM-DD format)
date: 2026-01-15

# Status: Display text like "Ongoing", "Planned", "2020-2023", etc.
status: "Planned"

# Tags: List of tags to categorize the teaching activity
tags: [Graduate Course, Reinforcement Learning, Seminar, Survey]
---

## Course Overview

A graduate survey of where reinforcement learning research currently sits. The course is read through the primary literature rather than a textbook: each week pairs a framing lecture with a student-led discussion of two or three papers. The goal is not to cover every algorithm but to leave students able to place a new paper in the landscape, say what assumption it is attacking, and judge whether its evidence supports its claim.

## Course Description

The classical formulation of reinforcement learning is unusually clean, and that cleanliness comes from a handful of assumptions that are rarely stated aloud: that the *state* is handed to you, that the *task* stands still, that the *learner* can always keep learning, that the *agent* is a well-defined thing whose goals are exactly its reward, and that *data* is something you can collect at will. Nearly every active research area in RL can be read as the removal of one of these.

The course is organized that way. Each part names an assumption, shows where it fails in practice, and surveys the work that has grown up around the failure — representation learning, agency and temporal abstraction, plasticity and continual learning, offline and safe RL, and the post-training of foundation models. Students should leave with a map of the field and a defensible opinion about which parts of it are load-bearing.

## Relationship to Other Courses

This is a **survey**, not a methods course. [Introduction to Reinforcement Learning](/teaching/intro-reinforcement-learning/) establishes the formalism and the core algorithms; [Advanced Topics in Reinforcement Learning](/teaching/advanced-rl-course/) develops deep RL and the mathematics beneath it. Either is sufficient preparation. Students who have taken the advanced course will recognize several of the failure modes discussed here as the frontier version of problems they debugged by hand.

## Learning Objectives

By the end of this course, students will be able to:

1. Read a contemporary RL paper and identify which standing assumption it relaxes, and at what cost
2. Explain how state representation, temporal abstraction, and network plasticity each act as hidden bottlenecks on RL performance
3. Situate continual and lifelong RL relative to the episodic, stationary problems that dominate benchmarks
4. Articulate competing formal accounts of agency and argue for one in a specific setting
5. Evaluate empirical claims in RL critically — sample sizes, seed variance, benchmark selection, and the gap between reported and reproducible results
6. Write a referee-quality critique of a recent paper
7. Formulate an original research question and defend its significance

## Tentative Course Outline

The outline follows the assumptions named above, in order of how early they are made and how invisibly they fail. Roughly one framing lecture and one paper-discussion session per week, over 16 weeks.

### Part I: Framing (Week 1)

**Week 1: What Makes a Question Contemporary**

  - The standing assumptions of the classical formulation, and a preview of which parts of the course remove which
  - How to read an RL paper — the claim, the evidence, the benchmark, and the gap between them
  - Seminar mechanics: reading responses, presentations, and the referee report

### Part II: The State Is Not Given (Weeks 2-4)

**Week 2: State Abstraction and Auxiliary Tasks**

  - What a representation is *for* — abstraction that preserves value, and the classes of state abstraction that do and do not preserve optimality
  - Auxiliary prediction tasks as representation shaping; UNREAL-style objectives and general value functions
  - Why the representation learned by a value loss alone tends to be impoverished

**Week 3: Predictive and Self-Predictive Representations**

  - Successor representations and successor features — decoupling "where you go" from "what you value," and transfer via generalized policy improvement
  - Bisimulation metrics and behavioral similarity as a principled notion of state equivalence
  - Latent dynamics and self-prediction (SPR, DreamerV3-style world models); representation collapse and what prevents it

**Week 4: Representations You Did Not Learn Yourself**

  - Pretrained visual and language encoders as state; when frozen features beat end-to-end learning
  - Sequence models over trajectories — Decision Transformer, trajectory transformers, and what is lost by treating control as conditional generation
  - Reading the representation-learning literature skeptically: what is actually being measured?

### Part III: The Agent Is Not a Given (Weeks 5-7)

**Week 5: What Is an Agent?**

  - Competing formal accounts — goal-directedness, the intentional stance, causal characterizations of agency, and definitions grounded in adaptation to intervention
  - Agency as a property of the *system*, not the policy: where the boundary between agent and environment is drawn, and why the choice matters
  - Optimization versus agency; when "the agent wants X" is a useful description and when it is a category error

**Week 6: Temporal Abstraction, Skills, and Autonomy**

  - Options and the options framework; semi-MDPs; the option-critic architecture and the difficulty of learning terminations
  - Skill discovery without reward — empowerment, diversity objectives, and mutual-information skill learning
  - Intrinsic motivation and exploration as expressions of autonomy rather than heuristics for coverage

**Week 7: Agency in Deployed Systems**

  - LLM agents, tool use, and multi-step interaction; structured and combinatorial action spaces where actions have internal dependencies
  - Reward hacking and specification gaming as evidence that the reward was never the goal
  - Oversight, monitorability, and interruptibility as design constraints on agentic systems

### Part IV: The Task Does Not Stand Still (Weeks 8-10)

**Week 8: Non-Stationarity and the Continual RL Problem**

  - What "continual" actually means formally — learning that never converges, and definitions of continual RL that make the never-stopping condition precise
  - The big-world perspective: agents whose capacity is small relative to their environment, and why convergence is the wrong target there
  - Non-stationary MDPs, tracking versus converging, and the role of the discount factor as an implicit horizon on change

**Week 9: Plasticity — When the Network Stops Being Able to Learn**

  - Loss of plasticity as a distinct failure from overfitting or forgetting; capacity loss and the collapse of effective rank
  - Diagnostics — dormant units, the primacy bias, feature rank, gradient churn, and why standard training curves hide all of them
  - Interventions and their costs: resets, shrink-and-perturb, plasticity-preserving regularizers and optimizers, normalization choices
  - Plasticity during foundation model post-training — measuring it directly rather than inferring it from entropy collapse or degraded pass@k

**Week 10: Forgetting, Retention, and Continual Methods**

  - Catastrophic forgetting in the RL setting, where the data distribution is generated by the learner itself
  - Approaches and their trade-offs — replay, regularization toward prior parameters, modular and expanding architectures, distillation
  - The stability-plasticity trade-off as the organizing tension; multi-task and meta-RL as bounded, tractable special cases of the continual problem

### Part V: The Data Is Fixed, Costly, or Dangerous (Weeks 11-13)

**Week 11: Offline Reinforcement Learning**

  - Distributional shift and the extrapolation error that makes naive off-policy learning fail on fixed datasets
  - Families of fixes — behavior regularization, conservative value estimation, in-sample methods, and sequence-modeling approaches
  - Small-data regimes: whether the published ranking of offline methods survives datasets smaller than benchmark convention

**Week 12: Safety, Risk, and Irreversibility**

  - Constrained MDPs and Lagrangian methods; risk-sensitive objectives and distributional criteria beyond the mean
  - Dead-ends and irreversibility — states from which a bad outcome is already determined, and where pessimism toward unobserved actions is justified
  - Uncertainty quantification under partial observability, and the difference between epistemic and aleatoric uncertainty in sequential settings

**Week 13: Evaluation, Reproducibility, and Benchmarks**

  - Off-policy evaluation — importance sampling, doubly robust estimators, and why confidence intervals matter more than point estimates
  - Statistical practice with few seeds: interval estimates, performance profiles, and the reporting failures they were designed to fix
  - What benchmarks select for, and how benchmark overfitting shapes the field's sense of progress

### Part VI: Frontiers and Research Projects (Weeks 14-16)

**Week 14: Reinforcement Learning for Foundation Models**

  - RLHF, reward modeling, and RL from verifiable rewards; GRPO and group-relative baselines
  - What generalizes across domains and what does not — cross-domain evidence that several accepted findings are domain-specific
  - Verifier uncertainty and unobserved reasoning validity as a partial-observability problem; compute allocation across rollouts, batch size, and updates

**Week 15: Domains That Push Back**

  - Healthcare and other high-stakes offline settings; robotics and sim-to-real; scientific discovery; autonomous driving and self-play at scale
  - Environment and curriculum design — generating tasks rather than assuming them
  - What each domain reveals about which assumption from Part I is most binding

**Week 16: Final Presentations**

  - Student research presentations
  - Synthesis: which of the five assumptions is most likely to be relaxed successfully in the next five years

<br>

## Prerequisites

**Required:**

- A prior course in reinforcement learning, or equivalent background — comfort with MDPs, value functions, Bellman equations, policy gradients, and Q-learning
- Graduate-level machine learning and working knowledge of deep learning
- Probability, linear algebra, and optimization at the level assumed by a graduate ML course
- Proficiency in Python and a deep learning framework

**Recommended:**

- Prior implementation experience with a deep RL algorithm
- Some exposure to research writing or reviewing

<br>

## Course Format

This is a seminar. Attendance and preparation are the course.

- **Framing lecture** (1x weekly): context, the shared vocabulary for the week, and the connective tissue between the week's papers and the rest of the field
- **Paper discussion** (1x weekly): student-led, two to three papers, with the presenter responsible for the critique as well as the exposition
- **Reading responses**: a short written response before each discussion session — one claim you accept, one you doubt, and why
- **Research project**: a reproduction with an original extension, or a novel investigation, developed across the semester

<br>

## Assessment

- **Reading responses** (15%): Weekly, short, graded for engagement rather than length
- **Paper presentations** (25%): Two sessions led over the semester, including discussion facilitation
- **Referee report** (15%): A full review of a recent submission or preprint, written to venue standards
- **Research project** (40%): Proposal (5%), written report (25%), final presentation (10%)

<br>

## Recommended Resources

### Background References

- Sutton & Barto: "Reinforcement Learning: An Introduction" (2nd ed) — for the formalism this course assumes
- Agarwal, Jiang, Kakade & Sun: "Reinforcement Learning: Theory and Algorithms" — for the theoretical statements referenced in passing
- Graesser & Keng: "Foundations of Deep Reinforcement Learning" — for the implementation details the papers omit

### Reading List

The reading list is the course, and is assembled fresh each offering. It is organized by the six parts above and mixes the foundational paper for each topic with two or three recent entries, deliberately including work whose conclusions conflict.

### Practical Resources

- Gymnasium, MinAtar, and continual/non-stationary benchmark suites
- D4RL / Minari for offline datasets
- CleanRL for single-file reference implementations
- rliable for statistically honest reporting of results

<br>

## Coming Soon

The reading list, presentation schedule, and project guidelines will be posted as the course is scheduled. Suggestions for papers are welcome — particularly ones you think are wrong.
