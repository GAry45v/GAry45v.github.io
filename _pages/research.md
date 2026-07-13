---
layout: single
title: "Research"
permalink: /research/
author_profile: true
---

My research focuses on reliable AI systems that can act over multiple steps. I am especially interested in the gap between models that answer questions and agents that plan, use tools, observe feedback, and recover from errors.

## Agentic RL and LLM Post-Training

Agentic RL treats the training target as a trajectory rather than a single answer. A good agent policy needs to decide what to do, when to verify, when to ask for help, and when to stop. My current work studies practical training signals for this setting:

- outcome rewards for task completion
- process rewards for intermediate decisions
- verifier signals for rule, tool, or benchmark feedback
- cost and safety constraints for tool use and state-changing actions
- curriculum sampling for long-tail and hard examples

## Cross-Domain Anomaly Detection

I work on anomaly detection under domain shift, where the target environment may differ substantially from source data. My interests include diffusion residual fields, domain alignment, graph anomaly detection, and representation learning that remains stable across domains.

## Research Automation

I build workflows that help turn large volumes of papers and technical material into structured research artifacts. This includes crawling, parsing, incremental vector indexing, RAG, evidence tracking, and long-form synthesis.

## Guiding Question

> How can we train and evaluate AI agents by the quality of their full behavior trajectory, not just the final text they produce?

This question connects my work on LLM agent post-training, reward design, anomaly detection systems, and research automation.
