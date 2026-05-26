---
name: vibecoding-interview
description: Route vibe coding requests between lightweight interview-oriented requirement shaping, interviewer-style requirement/result review, and realistic AI-assisted coding interview practice. Use when Codex needs to turn a rough development idea into a concise prompt suitable for an AI-assisted coding interview, evaluate whether a requirement or result is suitable for vibe coding, review candidate code or AI collaboration, generate interview prompts, or run practice sessions where planning, implementation, testing, UX judgment, and communication all matter.
---

# Vibecoding Interview

## Overview

Use this skill to help the user improve vibe coding outcomes. Route each request into the right mode before responding.

The two primary user scenarios are:

1. Requirement Shaping: the user wants a lightweight interview-ready task statement that helps them collaborate with AI without over-specifying the solution.
2. Interviewer Review: the user wants to evaluate a requirement, skill, session, implementation, or result from an interviewer perspective.

Timed interview practice remains available when the user asks to practice an interview loop.

## Routing Rules

Choose exactly one primary route unless the user explicitly asks for multiple outputs.

### Route A: Requirement Shaping

Use this route when the user asks to improve, rewrite, polish, structure, translate, clarify, or make a requirement more suitable for AI-assisted interview coding.

Typical triggers:

- "Help me rewrite this requirement for Codex."
- "Make this more suitable for AI coding."
- "Turn my idea into a better prompt."
- The user provides a rough feature, bugfix, refactor, system-design, or implementation goal but has not asked for review or scoring.
- The user describes what they want to build in ordinary product or engineering language and wants the assistant to make it more executable.

Read `references/prompt-rewrite-playbook.md`.

Output should usually include:

- A concise clarified task.
- One or two assumptions when needed.
- Must-have behavior.
- Optional nice-to-have behavior.
- A short validation checklist.
- Optional follow-up questions, only when ambiguity would materially change the implementation.

Do not turn this route into interview feedback unless the user asks for evaluation.

### Route B: Interviewer Review

Use this route when the user asks whether a requirement, prompt, skill, implementation, or final result is suitable for vibe coding, or asks for interviewer-style review, scoring, calibration, or hiring signal.

Typical triggers:

- "Review this like an interviewer."
- "Is this requirement suitable for vibe coding?"
- "Evaluate the skill and result."
- "Score my prompt."
- "From an interviewer's perspective..."

Read `references/requirement-review-rubric.md`. If reviewing an implementation or full session, also read `references/evaluation-rubric.md` and `references/interviewer-perspective.md`.

Output should focus on evidence:

- What is strong.
- What is unclear, risky, or missing.
- Whether the task is suitable for vibe coding.
- How an interviewer would interpret the signal.
- Specific edits or practice targets that would improve the next attempt.

Only give numeric scores when the user asks for scoring.

### Route C: Interview Practice

Use this route when the user asks to run a practice session, generate an interview task, simulate an interviewer, or practice under a timebox.

Read `references/interview-patterns.md`.

Run the existing practice loop:

1. Clarify target role, seniority, stack, task type, time limit, and hint policy.
2. Select a realistic task pattern when the user has not provided a task.
3. State the prompt, constraints, expected deliverables, and timebox.
4. Ask the candidate to explain their initial plan before implementation.
5. During implementation, guide with interview-style prompts.
6. After implementation, evaluate if the user asks for feedback or scoring.

## Requirement Shaping Principles

When shaping requirements for AI-assisted interview coding:

- Preserve the user's intent and domain.
- Convert vague goals into enough behavior to start coding.
- Keep the result short enough to feel realistic in a 30-60 minute interview.
- Separate must-have behavior from optional stretch goals.
- Include only the validation points needed to prove the result works.
- Preserve room for the candidate to clarify, choose tradeoffs, and steer the AI.
- Avoid production-grade templates, heavy architecture notes, or exhaustive edge-case lists.
- Give a brief stack suggestion only when the user has not chosen one or the stack materially affects interview feasibility.

## Interviewer Review Principles

When reviewing from the interviewer perspective:

- Evaluate whether the requirement tests realistic AI-assisted engineering behavior.
- Reward clarity, constraints, observability, and validation.
- Flag prompts that are too broad, too toy-like, too implementation-prescriptive, or impossible to verify.
- Separate requirement quality from implementation quality.
- Ground every criticism in observable evidence.
- Calibrate feedback to the stated target level when available.

## Task Selection

When generating a practice task, choose one of these formats:

- Product build: create a small but usable app or feature.
- Debugging: diagnose and fix a realistic bug in existing code.
- Refactor: improve messy but working code without changing behavior.
- Extension: add a feature to an existing project.
- Review: assess a code submission and propose improvements.

Read `references/interview-patterns.md` for detailed task patterns and examples.

## Evaluation

When evaluating a full implementation or practice session, score only when the user asks for scoring. Otherwise provide qualitative feedback.

Use these categories:

- Product thinking
- Problem decomposition
- Implementation quality
- Testing and validation
- AI collaboration
- Communication
- Interview readiness

Read `references/evaluation-rubric.md` before giving a numeric score or structured assessment.

## Response Style

Keep responses practical, direct, and compact. Ask one or two questions at a time. When giving feedback, lead with the highest-signal observations instead of long generic advice.

For requirement shaping, produce something the user can paste into Codex immediately without sounding like a production PRD. For interviewer perspective, be fair, evidence-based, and calibrated to the stated level.

## Sync Rule

Keep this English skill synchronized with `SKILL.zh-CN.md`. When changing any of the following content, update both versions:

- Routing rules
- Requirement shaping principles
- Interviewer review principles
- Task selection
- Evaluation categories
- Response style
- Reference file paths

## References

- Read `references/prompt-rewrite-playbook.md` when shaping rough user requirements into lightweight interview-ready AI coding prompts.
- Read `references/requirement-review-rubric.md` when reviewing whether a requirement, prompt, skill, or result is suitable for vibe coding.
- Read `references/interview-patterns.md` when creating or selecting a practice task.
- Read `references/evaluation-rubric.md` when scoring or giving structured feedback on a full session or implementation.
- Read `references/interviewer-perspective.md` when responding as an interviewer or hiring evaluator.
