# Requirement Review Rubric

Use this reference when reviewing whether a requirement, prompt, skill output, or result is suitable for vibe coding.

## Review Dimensions

### 1. Intent Clarity

Strong requirements explain the user goal and desired outcome. Weak requirements only name a technology or object to build.

Look for:

- Clear problem or user workflow.
- Concrete deliverable.
- Explicit success definition.

### 2. Scope Control

Strong requirements fit the timebox and avoid asking for a whole product when a focused feature would do.

Look for:

- Must-have versus optional work.
- Clear out-of-scope boundaries.
- Realistic complexity for the target level.

### 3. AI-Coding Fit

Strong requirements leave room for the agent to inspect the codebase and choose local patterns while still giving enough constraints.

Look for:

- Codebase-aware instructions.
- No premature architecture lock-in.
- Clear ownership of validation and final decisions.

### 4. Observability And Validation

Strong requirements make it possible to tell whether the work is done.

Look for:

- Acceptance criteria.
- Edge cases.
- Test or manual verification plan.
- Expected failure behavior.

### 5. Interview Signal

Strong vibe coding interview tasks reveal product judgment, decomposition, implementation quality, debugging behavior, testing discipline, and AI collaboration.

Look for:

- Meaningful choices rather than rote implementation.
- Room to ask clarifying questions.
- Evidence that the candidate can verify AI output.

## Common Problems

- Too vague: "build a dashboard", "add auth", "improve performance".
- Too broad: asks for a full platform instead of a focused workflow.
- Too prescriptive: dictates all architecture and removes engineering judgment.
- Too toy-like: no realistic user, state, edge case, or validation.
- Too hard to judge: no acceptance criteria or expected behavior.
- Too AI-dependent: rewards prompt luck more than candidate ownership.

## Feedback Format

Use this compact structure:

```text
Verdict: Suitable / Suitable with edits / Not suitable yet

Strong parts:
- ...

Risks or gaps:
- ...

Suggested rewrite:
...

Interviewer signal:
...
```

Only include a numeric score if the user asks for one.
