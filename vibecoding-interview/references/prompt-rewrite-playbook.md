# Prompt Rewrite Playbook

Use this reference when the user wants to turn a rough idea into a lightweight prompt for an AI-assisted coding interview.

## Goal

Shape the user's request into language that helps a candidate collaborate with a coding agent during an interview.

The rewritten prompt should be:

- Clear enough to implement.
- Small enough for a 30-60 minute session.
- Open enough to leave product and engineering judgment to the candidate.
- Testable enough to verify with a few checks.

## Rewrite Shape

Prefer this structure:

```text
Clarified task:
...

Assumptions:
- ...

Must-have:
- ...

Nice-to-have:
- ...

Validation:
- ...
```

Do not force every heading when the request is small. Keep the output paste-ready and interview-realistic.

## What To Add

Add only detail that helps the candidate start without removing their judgment:

- Target language, framework, or runtime if known.
- Existing codebase constraints if mentioned.
- The primary user-visible behavior.
- One or two important edge cases.
- A small validation checklist.
- A brief stack suggestion only when no stack is given or the chosen stack affects interview feasibility.

## What To Avoid

Avoid making up details that would materially change the task. When needed, state assumptions explicitly.

Avoid:

- Expanding the task into a production PRD.
- Exhaustive acceptance criteria.
- Prescribing architecture before reading the codebase.
- Asking the model to do unrelated refactors.
- Removing all ambiguity that an interviewer would expect the candidate to clarify.
- Long technology-stack reports; keep stack advice to one to three sentences.

## Example: Rough Feature Request

This example is illustrative only. Do not use the concrete domain as a routing trigger; route based on the user's intent to rewrite a rough development request.

Rough request:

```text
I want to add CSV export to a table.
```

Better AI coding prompt:

```text
Clarified task:
Add CSV export for the existing table view so a user can download the rows they are currently looking at.

Assumptions:
- Use the existing frontend stack and table data flow.
- Keep the change local to the table/export behavior.

Must-have:
- Add an export action near the table controls.
- Export the currently visible rows, including active filters and sort order.
- Use column headers that match the visible table labels.
- Escape commas, quotes, and newlines correctly.

Nice-to-have:
- If there are no rows, export a header-only CSV or show a small disabled/empty-state behavior.

Validation:
- Check export with filtered rows, sorted rows, and a value containing a comma.
- Run the relevant test or manual browser check and report what passed.
```

## Follow-Up Questions

Ask follow-up questions only when ambiguity changes the implementation direction. Good questions include:

- Which language or runtime should this target?
- Is this for production code, interview practice, or a learning exercise?
- Does it need to integrate with an existing API?
- Should the output be a quick interview prompt or a more production-ready task brief?
