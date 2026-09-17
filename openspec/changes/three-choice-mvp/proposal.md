# Proposal

## Why

A friend needs a website but hasn't picked a direction. Instead of guessing, we build one small app that shows 3 different sample websites side by side so they can click through each and choose the one they like best as the starting point for their real site.

## What Changes

- New frontend-only app (TypeScript + React via Vite, no backend).
- A home page ("picker") with 3 clickable options, one per sample site.
- Three sample websites, each reachable from the home page, each a distinct look/content direction. Exact theme/content of each is a placeholder for now and will be filled in per option as design work happens.
- Client-side routing between the home page and each sample site (and back).

## Capabilities

### New Capabilities
- `site-picker`: the home page that presents the 3 options and routes into each sample site.
- `sample-site-a`: first sample website the friend can preview.
- `sample-site-b`: second sample website the friend can preview.
- `sample-site-c`: third sample website the friend can preview.

### Modified Capabilities
(none — greenfield project)

## Impact

- Affects: new repo only (`ThreeChoice/`), no existing code to touch.
- Dependencies: React, TypeScript, Vite, a client-side router (e.g. react-router) — to be pinned in design.md.
- No backend, no persistence, no auth — purely static/client-side.
- Open question (non-blocking): the visual theme/content of sample sites A/B/C is not yet decided; treated as a placeholder in this change and refined later.
