---
# Layout: Use "teaching" for teaching posts
layout: teaching

# Title: The title of your teaching activity
title: "Introduction to Reinforcement Learning"

# Date: Used for sorting (YYYY-MM-DD format)
date: 2026-03-01

# Status: Display text like "Ongoing", "Planned", "2020-2023", etc.
status: "Offered Fall 2026"

# Tags: List of tags to categorize the teaching activity
tags: [Undergraduate Course, Reinforcement Learning, Introductory]
---

## Course Overview

Offered as **CS 401R at BYU in Fall 2026**, this is a problem-first introduction to reinforcement learning for advanced undergraduates and beginning graduate students. Rather than deriving RL from first principles and arriving at applications at the end, the course begins with a concrete goal — *you have a model that does something, and you want it to do better* — and progressively relaxes the assumptions you can make about your data. Each relaxation (positives only → negatives → partial rollouts → off-policy data → unobserved state) motivates the next method. Formalism is introduced when it becomes *necessary*, not before.

## Course Description

The course tracks two intertwined through-lines. The first is the **data-assumption ladder** above. The second is **dynamic programming as a recognition skill**: many problems have *recursive structure* — the best action now depends on the value of where you end up next — and learning to recognize and formulate that structure is a core objective. DP is seeded informally in Part I, formalized in Week 6, and operationalized as value/policy iteration in Week 9. Students gain hands-on experience through coding assignments and a final project, taught across ~2 lectures per week over 16 weeks.

## Learning Objectives

Two overarching outcomes anchor the course. **(1) Dynamic Programming:** students will recognize and formulate problems for which dynamic programming is a solution — identifying recursive/optimal-substructure and judging when exact DP versus sampling-based approximation is warranted. **(2) Reinforcement Learning:** students will become fluent in both the mathematics of reinforcement learning theory and the use of available tools to solve simple real-world problems.

In service of these, by the end of the course students will be able to:

1. Understand the mathematical foundations of MDPs and RL
2. Recognize and formulate problems with recursive/optimal-substructure, and judge when exact DP versus sampling-based approximation is warranted
3. Implement core RL algorithms from scratch
4. Recognize appropriate use cases for RL vs. other ML approaches
5. Debug and tune RL algorithms for different problems
6. Critically evaluate RL research and applications
7. Apply RL techniques to small-scale real-world problems

## Tentative Course Outline

The outline follows a single arc: begin with imitation, progressively relax the assumptions you can make about your data, and let each relaxation motivate the next method. A dynamic-programming through-line — recognizing recursive structure — is seeded informally in Part I, formalized in Week 6, and operationalized in Week 9.

### Part I: From Imitation to Self-Improvement (Weeks 1-5)

**Week 1: Framing + Mathematical Foundations Through the Lens of SFT**

  - Course philosophy — problem-first vs. formalism-first RL; the arc as a ladder of increasingly weak data assumptions
  - Math review (linear algebra, probability, optimization) framed around supervised fine-tuning

**Week 2: Supervised Fine-Tuning as the Base Case**

  - Maximum likelihood estimation with ground-truth positives; behavior cloning as MLE over expert demonstrations
  - The limits of pure cloning — distribution shift and compounding errors as a sequential phenomenon

**Week 3: Online Imitation**

  - DAgger and interactive imitation — closing the loop between the policy's states and expert labels
  - The labeling bottleneck motivates the need for negative signal

**Week 4: Learning From Negative Feedback**

  - The naive fix — flipping the MLE sign — and why it's unstable; reward as a scalar weighting of log-likelihood
  - Deriving the REINFORCE estimator informally; the score-function / log-derivative trick

**Week 5: Policy Gradients From Your Own Behavior**

  - REINFORCE in full — sampling your own trajectories, variance, and baselines
  - GRPO as a practical, group-relative baseline in modern LLM fine-tuning
  - The credit assignment problem, and decomposing return recursively (value now = reward now + value of what comes next)

### Part II: When Trajectories Are Incomplete or Stale (Weeks 6-10)

**Week 6: The MDP Formalism (Now Motivated)**

  - States, actions, transitions, rewards, discounting, the Markov property; return and value functions Vπ, Qπ
  - Finite vs. infinite horizon; the Bellman expectation equations as a consequence of recursive return

**Week 7: On-Policy Value Learning**

  - Partial rollouts and bootstrapping; Monte Carlo vs. Temporal Difference; the bias-variance tradeoff
  - SARSA and on-policy TD control; using a learned value function as a baseline / critic for the policy gradient

**Week 8: Off-Policy Data and Q-Learning**

  - The problem of "old" or others' trajectories; on-policy vs. off-policy made concrete
  - Q-learning as off-policy TD control; the Bellman optimality equation; importance sampling and its variance pitfalls

**Week 9: The Formal Core — Value & Policy Iteration**

  - Value iteration and policy iteration; contraction mappings, the Bellman operator, and tabular convergence
  - Stochastic approximation of a fixed point — why TD/Q-learning converge (Robbins-Monro conditions)

**Week 10: Function Approximation**

  - Approximation architectures (linear features → neural networks); why tabular guarantees break
  - The deadly triad; DQN and its stabilizing tricks (target networks, replay buffers) as responses to it

### Part III: Unifying Theory & Structure (Weeks 11-12)

**Week 11: Actor-Critic and the Policy Gradient Theorem**

  - The formal policy gradient theorem — deriving rigorously what REINFORCE approximated
  - Advantage functions, A2C, DDPG-style deterministic policy gradients; trust regions and clipping (PPO)
  - The method-selection decision tree — given your data, which method is warranted?

**Week 12: Partial Observability, Models, and Synthesis**

  - POMDPs and belief states; connections to sequence models and context in LLMs; model-based RL as the remaining branch
  - Case study — modern LLM post-training (SFT → reward modeling → RLHF/GRPO) as one traversal of the whole ladder

### Part IV: Guest Lectures & Projects (Weeks 13-16)

**Weeks 13-15: Guest Lectures & Project Development**

  - Robotics / imitation learning — learning from demonstrations and failed demonstrations
  - LLM post-training — a deeper practitioner's view of RLHF, GRPO, reward modeling
  - Offline RL — the off-policy problem at its extreme: learning from fixed datasets
  - Model-based RL / planning — learning dynamics and planning (a natural home for classical control / LQC)
  - In-class project consultations and peer feedback sessions

**Week 16: Final Presentations**

  - Student project presentations
  - Course wrap-up and future directions

<br>

## Prerequisites

**Required:**

- **Programming**: Proficient in Python
- **Mathematics**:
  - Linear algebra (vectors, matrices)
  - Probability (random variables, expectations)
  - Calculus (derivatives, gradients)
- **Machine Learning**: Basic ML concepts (supervised learning, neural networks)

**Recommended:**

- Previous coursework in algorithms and data structures
- Experience with NumPy, PyTorch, or TensorFlow
- Exposure to optimization methods

<br>

## Course Format

- **Lectures**: 2x per week (75 minutes each)
  - Mix of theory, examples, and live coding
  - Interactive discussions and Q&A

- **Lab Sessions**: Weekly (90 minutes)
  - Guided implementation exercises
  - Algorithm debugging practice
  - Office hours for project help

- **Programming Assignments**: 5 assignments
  - Implement core RL algorithms
  - Apply to provided environments
  - Analyze and report results

- **Final Project**: Team-based (2-3 students)
  - Propose an RL application
  - Implement and evaluate solution
  - Written report and presentation

<br>

## Assessment

- **Programming Assignments** (40%): 5 assignments, 8% each
- **Midterm Exam** (20%): Covering weeks 1-7
- **Final Project** (30%): Report (20%) + Presentation (10%)
- **Participation** (10%): Class engagement and lab attendance

<br>

## Textbooks & Resources

### Primary Textbook
- Sutton & Barto: "Reinforcement Learning: An Introduction" (2nd ed)
  - Free online: http://incompleteideas.net/book/the-book-2nd.html

### Supplementary Resources
- OpenAI Spinning Up in Deep RL
- DeepMind x UCL RL Lecture Series
- Selected research papers on key topics

### Software & Tools
- Python 3.8+
- OpenAI Gym / Gymnasium
- PyTorch or TensorFlow
- Weights & Biases (for experiment tracking)

<br>

## Course Policies

### Collaboration Policy
- Assignments: Discuss concepts but write your own code
- Projects: Full collaboration within teams
- Exams: Individual work only

### Late Policy
- Assignments: 20% penalty per day late (max 3 days)
- Projects: No late submissions (presents at scheduled time)

### Academic Integrity
- Cite all external resources and code
- Do not share code with other students
- Plagiarism will result in course failure

<br>

## Expected Workload

- Lectures: 2.5 hours/week
- Lab sessions: 1.5 hours/week
- Assignments: 5-8 hours/week
- Project: 10-15 hours/week (final 3 weeks)
- **Total**: ~10-12 hours/week

<br>

## Coming Soon

Detailed assignment specifications, starter code, and lecture slides will be made available once the course is scheduled.
