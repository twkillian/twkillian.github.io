---
# Layout: Use "teaching" for teaching posts
layout: teaching

# Title: The title of your teaching activity
title: "Introduction to Reinforcement Learning"

# Date: Used for sorting (YYYY-MM-DD format)
date: 2026-03-01

# Status: Display text like "Ongoing", "Planned", "2020-2023", etc.
status: "Planned"

# Tags: List of tags to categorize the teaching activity
tags: [Undergraduate Course, Reinforcement Learning, Introductory]
---

## Course Overview

An introductory course designed for advanced undergraduates and beginning graduate students covering the fundamentals of reinforcement learning. Students will learn core concepts, implement basic algorithms, and understand when and how to apply RL to real-world problems.

## Course Description

This course provides a comprehensive introduction to reinforcement learning, covering both theoretical foundations and practical implementation. Students will learn how agents can learn to make sequential decisions through interaction with their environment, gaining hands-on experience through coding assignments and a final project.

## Learning Objectives

By the end of this course, students will be able to:

1. Understand the mathematical foundations of MDPs and RL
2. Implement core RL algorithms from scratch
3. Recognize appropriate use cases for RL vs. other ML approaches
4. Debug and tune RL algorithms for different problems
5. Critically evaluate RL research and applications
6. Apply RL techniques to small-scale real-world problems

## Tentative Course Outline

### Part I: Foundations (Weeks 1-4)

<br>

**Week 1: Introduction to RL**

  - What is reinforcement learning?
  - Comparison with supervised and unsupervised learning
  - Key challenges in RL
  - Real-world applications and case studies

<br>

**Week 2: Markov Decision Processes**

  - States, actions, rewards, transitions
  - Policies and value functions
  - Bellman equations
  - Optimal policies and optimality

<br>

**Week 3: Dynamic Programming**

  - Policy evaluation
  - Policy iteration
  - Value iteration
  - Limitations and computational considerations

<br>

**Week 4: Monte Carlo Methods**

  - Monte Carlo prediction
  - Monte Carlo control
  - On-policy vs. off-policy learning
  - Importance sampling

### Part II: Core Algorithms (Weeks 5-9)

<br>

**Week 5: Temporal-Difference Learning**

  - TD prediction (TD(0))
  - Advantages of TD learning
  - TD vs. Monte Carlo vs. Dynamic Programming
  - n-step TD methods

<br>

**Week 6: Q-Learning and SARSA**

  - Q-learning algorithm
  - SARSA and on-policy control
  - Expected SARSA
  - Implementation and debugging strategies

<br>

**Week 7: Function Approximation**

  - Why function approximation?
  - Linear function approximation
  - Feature engineering
  - Convergence considerations

<br>

**Week 8: Deep Q-Networks (DQN)**

  - Neural networks for value approximation
  - Experience replay
  - Target networks
  - Common pitfalls and solutions

<br>

**Week 9: Policy Gradient Methods**

  - REINFORCE algorithm
  - Policy gradient theorem
  - Baseline techniques
  - Actor-critic methods

### Part III: Advanced Topics & Applications (Weeks 10-13)

<br>

**Week 10: Exploration vs. Exploitation**

  - Multi-armed bandits
  - Epsilon-greedy, UCB, Thompson sampling
  - Exploration in deep RL
  - Curiosity-driven learning

<br>

**Week 11: Reward Shaping & Design**

  - Reward engineering challenges
  - Reward shaping techniques
  - Inverse reinforcement learning (intro)
  - Common reward specification mistakes

<br>

**Week 12: RL in Practice**

  - Hyperparameter tuning
  - Debugging RL agents
  - Benchmarking and evaluation
  - Sim-to-real transfer considerations

<br>

**Week 13: Case Studies**

  - Robotics applications
  - Game playing (Chess, Go, video games)
  - Recommendation systems
  - Resource management

### Part IV: Final Projects (Weeks 14-16)

<br>

**Week 14-15: Project Development**

  - Work on final projects
  - In-class project consultations
  - Peer feedback sessions

<br>

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
