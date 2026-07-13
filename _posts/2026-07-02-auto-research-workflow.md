---
title: "AutoResearch as an Agent Workflow"
date: 2026-07-02
permalink: /posts/2026/07/auto-research-workflow/
tags:
  - Research Automation
  - RAG
  - LLM Agents
---

Research automation is a natural testbed for agent workflows because the task is long-horizon, evidence-sensitive, and easy to derail. A useful research agent must search, read, compare, synthesize, cite, and revise as new evidence appears.

The core workflow I am interested in has four stages: collecting fresh papers, parsing and chunking documents, updating an incremental vector index, and generating a review with source-aware retrieval. The goal is not to make the model write more confidently, but to make the evidence pipeline more inspectable.

This connects directly to Agentic RL. If a research agent chooses a bad source, stops too early, or ignores contradictory evidence, the final essay may look fluent while the trajectory is flawed. Evaluation should therefore inspect both the output and the path that produced it.
