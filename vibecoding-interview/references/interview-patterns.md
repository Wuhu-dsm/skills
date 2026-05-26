# Interview Patterns

Use these patterns to create realistic vibe coding practice tasks. Prefer tasks that can produce a working result in 30 to 60 minutes.

## Product Build

Ask the candidate to build a small feature or app with realistic user value.

Good tasks include:

- A job application tracker with status filters and notes.
- A personal task board with search, labels, and persistence.
- A meeting notes tool that extracts action items.
- A lightweight expense tracker with categories and summary totals.
- A support inbox triage view with priority and assignment controls.

Make the prompt include:

- User goal
- Core requirements
- One or two edge cases
- Expected interaction behavior
- Suggested timebox

Avoid overly broad prompts like "build a dashboard" unless the dashboard has specific data, decisions, and workflows.

## Debugging

Give the candidate broken or suspicious behavior and ask them to diagnose before fixing.

Useful bugs include:

- State not updating after a filter changes.
- Duplicate items appearing after save.
- Race conditions in async search.
- Form validation accepting invalid values.
- Data sorting that breaks on missing fields.

The candidate should explain:

- What they observed
- What they suspect
- How they isolated the cause
- What fix they made
- How they verified the fix

## Refactor

Give working code that has poor structure and ask the candidate to improve it without changing behavior.

Good refactor targets include:

- Repeated UI logic
- Large functions with mixed responsibilities
- Hard-coded data transformations
- Unclear naming
- Missing boundaries between data, state, and rendering

The candidate should preserve behavior, reduce complexity, and explain why the new structure is easier to maintain.

## Extension

Ask the candidate to add a feature to an existing codebase. This tests codebase reading and local pattern matching.

Good extension tasks include:

- Add saved filters to an existing list view.
- Add CSV export to a table.
- Add empty, loading, and error states.
- Add keyboard shortcuts to an existing workflow.
- Add a user preference and persist it.

The candidate should first inspect the codebase, identify relevant patterns, and make a small plan.

## Review

Ask the candidate to review a submitted implementation as if they were joining a team.

Good review prompts include:

- Identify correctness risks.
- Identify missing edge cases.
- Suggest focused tests.
- Propose a small follow-up refactor.
- Decide whether the change is ready to merge.

The candidate should prioritize concrete risks over style preferences.
