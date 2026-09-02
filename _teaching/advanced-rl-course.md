---
# Layout: Use "teaching" for teaching posts
layout: teaching

# Title: The title of your teaching activity
title: "Advanced Topics in Reinforcement Learning"

# Summary: Shown on listing cards
summary: "A second course in RL, focused on deep reinforcement learning. Follows the arc of Graesser & Keng's Foundations of Deep Reinforcement Learning, deriving in full the mathematics that the introductory course only sketches, and implementing every algorithm from scratch."

# Order: Explicit display order on listings (lower shows first)
order: 5

# Date: Used for sorting (YYYY-MM-DD format)
date: 2026-02-01

# Status: Display text like "Ongoing", "Planned", "2020-2023", etc.
status: "Planned"

# Tags: List of tags to categorize the teaching activity
tags: [Advanced Undergraduate Course, Graduate Course, Deep Reinforcement Learning, Reinforcement Learning]
---

## Course Overview

A second course in reinforcement learning, aimed at advanced undergraduates and beginning graduate students who already know what a Bellman equation is. The subject is **deep** RL specifically: what changes, mathematically and practically, when the tabular value function is replaced by a neural network. The course follows the arc of Graesser & Keng's *Foundations of Deep Reinforcement Learning: Theory and Practice in Python* — algorithms first, then the practical craft of making them run, then the design of the environment itself — while deriving in full the results the introductory course was content to state.

## Course Description

Deep RL is often taught as a catalog of algorithms with a shared vocabulary and no shared argument. This course takes the opposite view. Nearly every method in the catalog exists because function approximation broke a guarantee that held in the tabular case, and each algorithm is best understood as a specific repair to a specific breakage. Target networks, replay buffers, trust regions, double estimators, clipped objectives, and advantage estimators are not tricks; they are consequences.

The course therefore runs two tracks in parallel. The **mathematical track** derives the results — the policy gradient theorem, the contraction properties of the Bellman and distributional Bellman operators, stochastic-approximation conditions for convergence, the performance difference lemma and the monotonic improvement bound behind TRPO, the bias-variance structure of λ-returns, the invariance of potential-based reward shaping. The **implementation track** builds each algorithm from scratch in PyTorch, without an RL library, and then diagnoses it when it fails. The two tracks meet constantly: students should finish able to look at a learning curve and reason about which term in a derivation is misbehaving.

The final third of the course follows the book into territory that most RL courses skip entirely — the engineering of deep RL and the *design* of states, actions, rewards, and transitions — before closing on the failure modes that motivate current research.

## Relationship to Introduction to Reinforcement Learning

This course builds directly on [Introduction to Reinforcement Learning](/teaching/intro-reinforcement-learning/) (CS 401R). That course is written for second- and third-year undergraduates and is problem-first: it introduces formalism only when a weakening of the data assumptions makes it necessary, and it arrives at function approximation, the deadly triad, and the policy gradient theorem near the end, with the derivations compressed.

This course begins exactly where those compressions were made. Everything the introductory course sketched informally — REINFORCE from the log-derivative trick, DQN's stabilizing machinery, the policy gradient theorem, PPO's clipping — is rebuilt rigorously and then extended. Students who took the introductory course will recognize the first two weeks as a re-derivation of familiar material at a level of care that was not available the first time.

For students interested in where research is currently active rather than how the methods work, [Contemporary Topics in Reinforcement Learning](/teaching/contemporary-topics-rl/) is a paper-driven survey and can be taken before or after this course.

## Learning Objectives

By the end of this course, students will be able to:

1. Derive the central results of deep RL from first principles, including the policy gradient theorem, the contraction properties of Bellman operators, and the monotonic improvement bound underlying trust-region methods
2. Explain precisely which tabular guarantee each deep RL algorithm is compensating for, and at what cost in bias, variance, or stability
3. Implement REINFORCE, SARSA, DQN and its major variants, A2C, PPO, and a parallelized actor-critic from scratch, without an RL library
4. Diagnose a failing deep RL agent systematically — distinguishing bugs from bad hyperparameters from an ill-posed environment
5. Design the state, action, and reward interfaces of an RL problem, and justify each choice against the alternatives
6. Run and report deep RL experiments in a way that a reader could reproduce and believe
7. Recognize the failure modes — representational collapse, loss of plasticity, non-stationarity — that current research is organized around

## Mathematical Emphasis

The introductory course establishes what these results say. This course establishes why they are true, and what breaks when their conditions are not met. Over the semester students will derive or prove:

- **Policy gradients** — the score-function estimator; the policy gradient theorem in episodic form; unbiasedness of any state-dependent baseline; the variance-minimizing baseline; the compatible function approximation condition; the deterministic policy gradient theorem
- **Operators and fixed points** — γ-contraction of the Bellman expectation and optimality operators in sup-norm; existence and uniqueness of the fixed point; the projected Bellman operator and why its off-policy fixed point can diverge (Baird's counterexample); contraction of the soft Bellman backup
- **Convergence of sampled updates** — TD as stochastic approximation; the Robbins-Monro conditions; the ODE argument for linear TD; where each condition fails under nonlinear approximation
- **Bias in value estimation** — Jensen's inequality and the overestimation bias of the max operator; how double estimation decouples selection from evaluation; the bias introduced by prioritized sampling and its importance-sampling correction
- **Distributional RL** — the distributional Bellman operator as a contraction in maximal Wasserstein distance but not in KL; quantile regression as minimization of 1-Wasserstein
- **Return estimation** — n-step returns and λ-returns; the forward-backward equivalence; the explicit bias-variance decomposition of generalized advantage estimation as a function of λ and γ
- **Trust regions** — the performance difference lemma; the surrogate objective and its local accuracy; the TRPO monotonic improvement bound via total variation and Pinsker's inequality; the natural gradient and the Fisher matrix as the Hessian of KL divergence; PPO's clipping as a first-order surrogate for that bound
- **Off-policy corrections** — unbiasedness and variance of importance sampling; per-decision and weighted variants; V-trace truncation and the policy its fixed point actually evaluates
- **Reward design** — the potential-based shaping theorem and the invariance of the optimal policy under shaping

<br>

## Tentative Course Outline

The outline follows the four parts of Graesser & Keng, with a fifth part on the failure modes that the book predates. Roughly two lectures per week over 16 weeks, with a weekly implementation lab. Chapter references are to the book.

### Part I: Value-Based and Policy-Based Deep RL (Weeks 1-5)

**Week 1: From Tabular Guarantees to Function Approximation** *(Ch 1)*

  - The three learnable functions — π, V/Q, and the environment model — and the taxonomy of deep RL algorithms that follows from which you choose to learn
  - What function approximation actually costs: the semi-gradient update is not the gradient of any objective; the projected Bellman error; Baird's counterexample
  - How RL differs from supervised learning in ways that matter for optimization — non-stationary targets, correlated samples, and a data distribution the learner controls

**Week 2: REINFORCE and the Policy Gradient Theorem** *(Ch 2)*

  - The policy gradient theorem derived in full; the score-function / log-derivative estimator and why it needs no differentiable environment
  - Variance: baselines as control variates, the proof that any state-dependent baseline is unbiased, and the variance-minimizing choice
  - Entropy regularization, on-policy sampling requirements, and the practical consequence that REINFORCE discards its data

**Week 3: SARSA, Bootstrapping, and Stochastic Approximation** *(Ch 3)*

  - Semi-gradient TD and SARSA with function approximation; the Bellman operator as a γ-contraction and TD as sampled application of it
  - TD as stochastic approximation: Robbins-Monro conditions, the ODE method, and convergence for the linear on-policy case
  - n-step returns, λ-returns, eligibility traces, and the bias-variance dial between Monte Carlo and one-step TD

**Week 4: Deep Q-Networks and the Deadly Triad** *(Ch 4)*

  - Q-learning off-policy with a network; the deadly triad — bootstrapping, off-policy data, function approximation — as three independently necessary ingredients for divergence
  - Experience replay as decorrelation and as sample reuse; target networks as a two-timescale stabilization
  - Exploration in practice: ε-greedy versus Boltzmann policies, annealing schedules, and what "enough exploration" means with a network

**Week 5: Improving DQN — Bias, Priority, and Distributions** *(Ch 5)*

  - Maximization bias analyzed directly; Double DQN as decoupled selection and evaluation; dueling architectures and the identifiability problem they introduce
  - Prioritized experience replay: the sampling bias it creates and the importance-sampling weights that correct it
  - Distributional value learning — C51 and quantile regression; the distributional Bellman operator's contraction in Wasserstein; Rainbow as an ablation study, read as one

### Part II: Combined Methods (Weeks 6-9)

**Week 6: Advantage Actor-Critic** *(Ch 6)*

  - Actor and critic as the two halves of the policy gradient; the advantage function and why it is the right baseline
  - Generalized advantage estimation derived, with its bias-variance decomposition in λ made explicit
  - Shared versus separate networks, critic loss scaling, and the pathologies of training a critic on its own bootstrapped targets

**Week 7: Trust Regions and Proximal Policy Optimization** *(Ch 7)*

  - The performance difference lemma and the surrogate objective; why unconstrained surrogate improvement does not imply policy improvement
  - TRPO's monotonic improvement guarantee, the KL constraint, and the natural gradient; the Fisher matrix as the KL Hessian
  - PPO's clipped objective as a cheap first-order stand-in; what the guarantee costs in exchange, and the implementation details that carry much of PPO's reported performance

**Week 8: Parallelization, Scale, and Throughput** *(Ch 8)*

  - Synchronous versus asynchronous parallelization; vectorized environments; Hogwild! and lock-free updates; A3C and the staleness it tolerates
  - Distributed actor-learner architectures and the off-policy gap they create; V-trace truncation and the fixed point it converges to
  - Sample efficiency versus wall-clock efficiency as genuinely different objectives

**Week 9: Synthesis — One Framework, Many Algorithms** *(Ch 9)*

  - The algorithm space organized by what is learned and how it is updated; reading the book's summary as a decision procedure rather than a table
  - Maximum-entropy RL and soft policy iteration; SAC and the contraction of the soft Bellman backup
  - Deterministic policy gradients — DDPG and TD3 — and the specific bias each of TD3's three modifications targets

### Part III: Making Deep RL Work (Weeks 10-12)

**Week 10: Getting Deep RL to Work** *(Ch 10, 11)*

  - Signs of life; the diagnostic ladder from environment to preprocessing to memory to loss to network; policy gradient and data diagnoses
  - Deliberate simplification as a debugging tool — simplify the algorithm, then the problem, then the hyperparameters
  - Experiment discipline: spec-driven configuration, seed variance, ablations, and reporting results with interval estimates rather than best-of-N curves

**Week 11: Architectures, Representations, and Optimization Pathologies** *(Ch 12)*

  - Choosing a network family — MLPs, CNNs, and recurrent policies; the MDP-versus-POMDP question as an architectural decision
  - Representation learning inside deep RL: auxiliary prediction losses, encoder sharing, frozen pretrained features, and why a value loss alone learns a poor representation
  - Optimization pathologies specific to RL — loss of plasticity, dormant units, collapsing feature rank, primacy bias, and gradient churn; resets, shrink-and-perturb, and normalization as interventions

**Week 12: Hardware, Data Types, and Where the Time Goes** *(Ch 13)*

  - Profiling an RL run: environment stepping, network updates, and data movement as separate budgets
  - Data types and precision; memory in replay buffers; batching and device placement
  - Matching hardware to algorithm — why the right machine for PPO on a vectorized simulator is not the right machine for DQN on Atari

### Part IV: Environment Design (Weeks 13-14)

**Week 13: States and Actions** *(Ch 14, 15)*

  - State completeness and state complexity as a trade-off; information loss through grayscaling, discretization, and hashing; standardization and frame stacking as temporal preprocessing
  - Action completeness and complexity; the real cost of discretizing continuous control; parameterized and hierarchical action spaces
  - Structured and combinatorial action spaces where sub-actions depend on one another, and learning action validity separately from action value

**Week 14: Rewards and Transition Functions** *(Ch 16, 17)*

  - Reward design guidelines; dense versus sparse trade-offs; potential-based shaping and the proof that it preserves the optimal policy
  - Reward hacking and specification gaming as design failures rather than agent misbehavior
  - Feasibility and reality checks on the transition function; what a simulator has to get right, and sim-to-real gaps as transition-function error

### Part V: Where Deep RL Breaks (Weeks 15-16)

**Week 15: Beyond the Book**

  - Non-stationarity and continual deep RL — what happens when the task does not reset, and why convergence is the wrong target
  - Learning from fixed data: the off-policy problem at its extreme, and why the machinery from Part I fails outright offline
  - Agency at scale — temporal abstraction and options, and RL as it appears in foundation model post-training; a hand-off to [Contemporary Topics in Reinforcement Learning](/teaching/contemporary-topics-rl/)

**Week 16: Final Presentations**

  - Project presentations, with results reported honestly including negative ones
  - Course retrospective: which repairs from the semester were principled and which were expedient

<br>

## Prerequisites

Two routes into the course are expected: advanced undergraduates continuing on from CS 401R, and beginning graduate students arriving with comparable preparation from elsewhere. The bar below is the same either way.

**Required:**

- **Reinforcement learning**: A prior RL course — [CS 401R](/teaching/intro-reinforcement-learning/) or equivalent. Comfort with MDPs, value functions, the Bellman equations, TD learning, Q-learning, and the basic policy gradient
- **Deep learning**: Backpropagation, optimizers, and practical experience training neural networks in PyTorch
- **Mathematics**: Multivariable calculus, linear algebra, and probability at the level of expectations, conditioning, and variance decompositions. Facility with reading and writing proofs
- **Programming**: Strong Python; ability to structure, test, and debug a nontrivial codebase

**Recommended:**

- Exposure to convex optimization or numerical methods
- Some experience with experiment tracking and version control workflows

Measure-theoretic probability is not assumed. Where a result genuinely requires it, the statement is given precisely and the technical conditions are flagged rather than glossed.

<br>

## Course Format

- **Lectures**: 2x weekly (75 minutes)
  - One derivation-focused session per week, worked at the board
  - One session on the corresponding implementation, including live debugging of code that does not work

- **Implementation Lab**: Weekly (90 minutes)
  - Build the week's algorithm from scratch; no RL library
  - Reference implementations are read *after* students have written their own

- **Derivation Problem Sets**: 5 sets
  - Proofs and derivations from the mathematical emphasis above
  - Occasional counterexample construction — show that a result fails when a condition is dropped

- **Implementation Assignments**: 4 assignments
  - REINFORCE with baselines; DQN with variants; A2C with GAE; PPO with parallelized rollouts
  - Each graded on correctness, reproducibility, and the quality of the diagnostic write-up

- **Final Project**: Individual or pairs
  - Either a faithful reproduction of a published deep RL result with an original ablation, or a new investigation
  - Emphasis on honest reporting; a well-diagnosed negative result is a good project

<br>

## Assessment

- **Derivation problem sets** (25%): 5 sets, 5% each
- **Implementation assignments** (30%): 4 assignments, graded on correctness and diagnostic reasoning
- **Midterm exam** (15%): Derivations and algorithm analysis, covering Parts I and II
- **Final project** (25%): Proposal (3%) + report (17%) + presentation (5%)
- **Participation** (5%): Lab engagement and lecture discussion

<br>

## Textbooks & Resources

### Primary Textbook

- Graesser & Keng: "Foundations of Deep Reinforcement Learning: Theory and Practice in Python" (Addison-Wesley, 2019)
  - The course follows this book's arc, including its unusual and valuable emphasis on practical details and environment design

### Mathematical Supplements

- Sutton & Barto: "Reinforcement Learning: An Introduction" (2nd ed) — for foundations and the traces/approximation chapters
  - Free online: http://incompleteideas.net/book/the-book-2nd.html
- Agarwal, Jiang, Kakade & Sun: "Reinforcement Learning: Theory and Algorithms" — for the theoretical statements and sample-complexity results
- Bertsekas: "Dynamic Programming and Optimal Control" — for operator-theoretic treatment of value iteration and approximation
- Selected primary papers for each algorithm; the original paper is assigned alongside the corresponding chapter

### Software & Tools

- Python 3.10+, PyTorch, Gymnasium
- CleanRL for single-file reference implementations, read after students write their own
- SLM Lab, the book's companion library, for its experiment-specification design; note that it predates current tooling, and modern equivalents are used for the assignments
- Weights & Biases or TensorBoard for experiment tracking
- rliable for statistically honest reporting of results

<br>

## Expected Workload

- Lectures: 2.5 hours/week
- Implementation lab: 1.5 hours/week
- Problem sets and assignments: 8-10 hours/week
- Project: 12-15 hours/week (final 3 weeks)
- **Total**: ~12-15 hours/week

This is a demanding course. Implementing deep RL algorithms correctly takes longer than students expect, largely because a wrong implementation often still learns a little.

<br>

## Coming Soon

Detailed derivation sets, starter repositories, and lecture notes will be posted as the course is scheduled.
