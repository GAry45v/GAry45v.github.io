---
title: "Reward Design for Agentic RL"
date: 2026-07-09
permalink: /posts/2026/07/reward-design-agentic-rl/
tags:
  - Agentic RL
  - Reinforcement Learning
  - LLM Agents
---

Agentic RL is not just about adding a reward to an LLM answer. It asks how a model should learn from a trajectory: what the agent saw, which action it took, what changed in the environment, and whether it should continue or stop.

The hardest part is credit assignment. If an agent succeeds after ten steps, the useful decision may have happened at step two. If it fails, the failure may come from goal misunderstanding, wrong file localization, missing verification, or an unsafe action. A single outcome reward often compresses these causes into one noisy signal.

Good reward design therefore combines several signals: final success, process quality, verifier feedback, tool cost, safety constraints, and stop conditions. Any one of these signals can be gamed if it becomes the only target.

For real agents, the reward function is also a definition of behavior. It says what counts as progress, what counts as risk, when the agent should ask for help, and when it should stop.
