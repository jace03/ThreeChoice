# Design

## Context

See proposal.md - Why. Greenfield, frontend-only project: no backend, no existing code to integrate with. The only real technical decisions are project scaffolding and how routing/navigation between the home page and the 3 sample sites works.

## Goals / Non-Goals

**Goals:**
- Scaffold a TypeScript + React app (Vite) that builds and runs with zero backend.
- Client-side routing between the home page and each of the 3 sample sites.
- A folder structure that keeps each sample site's code isolated, so a site can later be deleted or "graduated" into its own repo without touching the others.

**Non-Goals:**
- Final visual design, branding, or copy for any of the 3 sample sites (placeholder only - see specs).
- Hosting/deployment setup (can be added in a later change once a site is picked).
- Any backend, CMS, or data persistence.

## Decisions

- **Scaffold with Vite's `react-ts` template.** Fast, zero-config dev server, standard for frontend-only TS+React projects. Alternative considered: Create React App - rejected, deprecated/unmaintained.
- **Routing with `react-router` (v7, "declarative" data-less mode).** Gives the home page and 3 sample sites real routes (`/`, `/site-a`, `/site-b`, `/site-c`) so each is linkable/shareable, and supports the "back to picker" requirement via `<Link>`/`useNavigate`. Alternative considered: manual `useState` view-switching - rejected, no real URLs, harder to share a specific sample site link with the friend.
- **One top-level folder per sample site under `src/sites/`** (`src/sites/site-a`, `site-b`, `site-c`), each with its own components, so sites stay independent per the isolation goal above. The home page lives in `src/pages/Home`.
- **Placeholder content per sample site**, per specs (sample-site-a/b/c): each just needs to visibly identify itself (e.g., "Sample Site A") until a real theme is picked; no shared design system is imposed across the 3 yet since they're meant to look different from each other.

## Risks / Trade-offs

- [Placeholder sites may look too similar to be a meaningful choice for the friend] → Mitigation: spec requires each to be visually/content distinct even at placeholder stage (e.g., different layout or color per site), refined in a follow-up change once a direction is picked.
- [No hosting decided yet, friend can't preview remotely] → Mitigation: out of scope for this change; `npm run dev` / local preview is enough for the picking step, hosting is a fast follow-up change.

## Open Questions

- Which hosting target (GitHub Pages, Netlify, Vercel, etc.) once a site is picked - doesn't affect this change's specs or tasks.
