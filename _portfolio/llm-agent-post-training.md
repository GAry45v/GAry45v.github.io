---
title: "LLM Agent Post-Training for Rule-Constrained Food Ordering"
excerpt: "Prompt engineering, SFT, GRPO, curriculum learning, and reward design for a production-style ordering agent."
collection: portfolio
---

This project focuses on post-training an LLM agent for a food-ordering workflow with hard constraints such as minimum order price, single-item delivery rules, cart state, and negative user preferences.

Key components:

- prompt engineering for first-turn and follow-up interactions
- data construction from online user queries and model rollouts
- SFT on high-quality constrained examples
- GRPO-style post-training
- curriculum sampling based on rollout difficulty
- reward design

The broader research question is how to train agents that satisfy real task constraints without relying entirely on brittle post-processing.
