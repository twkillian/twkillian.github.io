---
# Layout: Use "teaching" for teaching posts
layout: teaching

# Title: The title of your teaching activity
title: "Introduction to Machine Learning"

# Date: Used for sorting (YYYY-MM-DD format)
date: 2026-04-01

# Status: Display text like "Ongoing", "Planned", "2020-2023", etc.
status: "Planned"

# Tags: List of tags to categorize the teaching activity
tags: [Undergraduate Course, Machine Learning, Introductory]
---

## Course Overview

A comprehensive introduction to machine learning for undergraduate students covering supervised learning, unsupervised learning, and practical ML skills. The course emphasizes both theoretical understanding and hands-on implementation of core ML algorithms.

## Course Description

This course introduces the fundamental concepts, algorithms, and applications of machine learning. Students will learn how to train models to make predictions from data, understand when different approaches are appropriate, and gain practical experience through programming assignments and a capstone project. No prior machine learning experience required.

## Learning Objectives

By the end of this course, students will be able to:

1. Understand fundamental ML concepts and problem formulations
2. Implement common ML algorithms from scratch
3. Apply scikit-learn and other ML libraries to real datasets
4. Evaluate and compare different models appropriately
5. Identify and address common pitfalls (overfitting, data leakage, etc.)
6. Communicate ML results effectively to technical and non-technical audiences
7. Recognize ethical considerations in ML applications

## Tentative Course Outline

### Part I: Foundations (Weeks 1-3)

<br>

**Week 1: Introduction to Machine Learning**

  - What is machine learning?
  - Types of learning: supervised, unsupervised, reinforcement
  - ML workflow and problem formulation
  - Applications across domains
  - Course logistics and expectations

<br>

**Week 2: Mathematical Foundations**

  - Linear algebra review (vectors, matrices, norms)
  - Probability and statistics essentials
  - Optimization basics (gradients, convexity)
  - Introduction to Python scientific stack (NumPy, Pandas, Matplotlib)

<br>

**Week 3: Data Preprocessing & Exploratory Analysis**

  - Data collection and quality assessment
  - Missing data handling
  - Feature scaling and normalization
  - Visualization techniques
  - Train/validation/test splits

### Part II: Supervised Learning - Regression (Weeks 4-6)

<br>

**Week 4: Linear Regression**

  - Simple and multiple linear regression
  - Least squares estimation
  - Gradient descent optimization
  - Analytical vs. iterative solutions
  - Feature engineering

<br>

**Week 5: Regularization & Model Selection**

  - Overfitting and underfitting
  - Ridge regression (L2 regularization)
  - Lasso regression (L1 regularization)
  - Cross-validation techniques
  - Bias-variance tradeoff

<br>

**Week 6: Beyond Linear Models**

  - Polynomial regression
  - Basis function expansion
  - Locally weighted regression
  - Introduction to non-parametric methods

### Part III: Supervised Learning - Classification (Weeks 7-10)

<br>

**Week 7: Logistic Regression**

  - Binary classification problem
  - Sigmoid function and log-odds
  - Maximum likelihood estimation
  - Multi-class classification (one-vs-rest, softmax)
  - Evaluation metrics: accuracy, precision, recall, F1, ROC-AUC

<br>

**Week 8: Support Vector Machines**

  - Linear SVMs and maximum margin
  - Kernel trick and kernel functions
  - Soft margin and C parameter
  - Practical considerations and tuning

<br>

**Week 9: Decision Trees & Ensemble Methods**

  - Decision tree learning (ID3, CART)
  - Entropy, information gain, Gini impurity
  - Random forests
  - Gradient boosting (XGBoost, LightGBM)
  - Feature importance

<br>

**Week 10: Neural Networks & Deep Learning Intro**

  - Perceptron and multi-layer perceptrons
  - Backpropagation algorithm
  - Activation functions
  - Deep learning frameworks (PyTorch/TensorFlow intro)
  - When to use deep learning vs. classical ML

### Part IV: Unsupervised Learning (Weeks 11-12)

<br>

**Week 11: Clustering**

  - K-means clustering
  - Hierarchical clustering
  - DBSCAN and density-based methods
  - Evaluation metrics (silhouette score, elbow method)
  - Clustering applications

<br>

**Week 12: Dimensionality Reduction**

  - Principal Component Analysis (PCA)
  - Singular Value Decomposition (SVD)
  - t-SNE for visualization
  - Autoencoders (brief introduction)
  - Feature selection vs. feature extraction

### Part V: Advanced Topics & Best Practices (Weeks 13-14)

<br>

**Week 13: ML in Practice**

  - Hyperparameter tuning strategies
  - Model interpretation and explainability
  - Dealing with imbalanced datasets
  - Data augmentation techniques
  - Pipeline design and MLOps basics

<br>

**Week 14: Ethics, Fairness, & Societal Impact**

  - Bias in ML systems
  - Fairness metrics and definitions
  - Privacy considerations
  - Responsible AI practices
  - Case studies of ML failures and successes

### Part VI: Final Projects (Weeks 15-16)

<br>

**Week 15: Project Development**

  - Work on final projects
  - In-class consultations
  - Peer review sessions

<br>

**Week 16: Final Presentations & Course Wrap-up**

  - Student project presentations
  - Future directions in ML
  - Resources for continued learning

<br>

## Prerequisites

**Required:**

- **Programming**: Proficiency in Python or willingness to learn quickly
- **Mathematics**:
  - Calculus: derivatives, partial derivatives, chain rule
  - Linear algebra: vectors, matrices, matrix multiplication
  - Probability: random variables, expectations, distributions
  - Statistics: mean, variance, correlation

**Recommended:**

- Previous programming coursework
- Data structures and algorithms
- Experience with Jupyter notebooks

**No prior ML experience required!**

<br>

## Course Format

- **Lectures**: 2x per week (90 minutes each)
  - Theory with intuitive explanations
  - Worked examples and demos
  - Interactive discussions

- **Lab Sections**: Weekly (90 minutes)
  - Hands-on coding exercises
  - Dataset exploration
  - Q&A and assignment help

- **Programming Assignments**: 6 assignments
  - Implement algorithms from scratch
  - Apply ML libraries to real datasets
  - Analyze and report results

- **Final Project**: Team-based (2-4 students)
  - End-to-end ML pipeline on chosen dataset
  - Written report and presentation
  - Emphasis on practical application

<br>

## Assessment

- **Programming Assignments** (45%): 6 assignments
  - Assignment 1-3: 6% each (basics)
  - Assignment 4-6: 9% each (more complex)

- **Midterm Exam** (20%)
  - Covers weeks 1-8
  - Mix of conceptual and problem-solving questions

- **Final Project** (30%)
  - Proposal (5%)
  - Final report (18%)
  - Presentation (7%)

- **Participation & Quizzes** (5%)
  - In-class participation
  - Short weekly quizzes on readings

<br>

## Textbooks & Resources

### Recommended Textbooks
- **Primary**: James, Witten, Hastie, Tibshirani: "An Introduction to Statistical Learning" (Free PDF available)
- **Secondary**: Murphy: "Probabilistic Machine Learning: An Introduction"
- **Practical**: Géron: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow"

### Online Resources
- Coursera ML courses (Andrew Ng)
- Fast.ai practical deep learning course
- Scikit-learn documentation and tutorials
- Course website with supplementary materials

### Software & Tools
- Python 3.8+
- Jupyter Notebooks / Google Colab
- scikit-learn, pandas, NumPy
- Matplotlib, seaborn for visualization
- PyTorch or TensorFlow (final weeks)

<br>

## Datasets

Students will work with various real-world datasets:
- UCI ML Repository datasets
- Kaggle competition datasets
- Healthcare, finance, NLP, computer vision domains
- Custom datasets from research collaborations

<br>

## Course Policies

### Collaboration Policy
- **Assignments**: Discuss concepts freely, but write and submit your own code
- **Projects**: Full collaboration within teams
- **Exams**: Individual work only, closed book

### Late Policy
- Assignments: 10% penalty per day (up to 3 days late)
- After 3 days: 0 credit unless prior arrangement
- One "late pass" per student (waives penalty once)

### Regrade Requests
- Submit within 1 week of assignment return
- Must include detailed written justification

### Academic Integrity
- Cite all external resources
- Do not share solutions or code
- Violations will be reported per university policy

<br>

## Expected Workload

- Lectures: 3 hours/week
- Lab sections: 1.5 hours/week
- Assignments: 6-10 hours/week (varies by assignment)
- Exam preparation: 10-15 hours total
- Final project: 15-20 hours total (last 4 weeks)
- **Average**: ~10-12 hours/week

<br>

## Learning Outcomes

Upon successful completion, students will have:

1. **Technical Skills**
   - Ability to implement core ML algorithms
   - Proficiency with scikit-learn and Python ML ecosystem
   - Understanding of when to use different algorithms

2. **Practical Experience**
   - End-to-end ML project experience
   - Data preprocessing and feature engineering skills
   - Model evaluation and selection expertise

3. **Theoretical Foundation**
   - Understanding of mathematical foundations
   - Ability to reason about model behavior
   - Intuition for algorithm strengths and weaknesses

4. **Professional Skills**
   - Communication of technical results
   - Ethical awareness in ML applications
   - Foundation for advanced ML coursework or industry work

<br>

## Career Relevance

This course prepares students for:
- Data scientist and ML engineer roles
- Graduate studies in ML, AI, or related fields
- Research positions in academia or industry
- Applied ML roles across various industries

<br>

## Office Hours & Support

- Instructor office hours: 2x per week
- TA office hours: 5x per week (staggered schedule)
- Online discussion forum (Ed Discussion or similar)
- Email for administrative questions only

<br>

## Coming Soon

Detailed syllabus, lecture slides, assignment specifications, and dataset links will be published once the course is officially scheduled.
