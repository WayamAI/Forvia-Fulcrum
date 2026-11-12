# Fulcrum, UX mock for FORVIA Purchasing

A clickable, hostable UX mock of Fulcrum, a sales intelligence tool for FORVIA buyers. It walks one supplier negotiation from sign in to agreed and logged. Nothing here is real or connected to a backend: every screen, figure and button is part of a guided flow.

Built with Next.js (App Router, TypeScript), Inter Tight via `next/font`, and Lucide icons. Designs come from the Paper file "Forvia Fulcrum · Sales intelligence UX mock".

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

Production check:

```bash
npm run build        # static export into ./out
npm run start -- -p 3077   # serves ./out on http://localhost:3077
```

`next start` does not run with `output: 'export'`, so `npm run start` uses a small static server (`scripts/serve.mjs`).

## Deploy

The whole app is one static page, so `next.config.ts` uses `output: 'export'`. `npm run build` writes the site to `out/`; any static host works.

- **Vercel**: import the repo, framework preset Next.js, no settings needed. Vercel detects the static export.
- **Azure Static Web Apps**: app location `/`, output location `out`, build command `npm run build`.
- **Azure App Service (or any web server)**: build locally or in CI and upload the contents of `out/` (for example with `az webapp deploy` as a static site, or behind IIS or nginx). No Node runtime is needed at run time.

Query strings such as `?step=5` are read in the browser, so shared links work on any static host.

## The tour

The URL holds the step: `/?step=1` to `/?step=10`. Keyboard: Right arrow or Enter moves forward, Left arrow goes back. A small control at the bottom centre shows the step and restarts the tour. The Pivot dock explains each step; click it to skip the typing. The control Pivot names is the one with a soft pulsing blue ring.

| Step | Screen | What happens |
| --- | --- | --- |
| 1 | Sign in | Click Sign in or Continue with FORVIA SSO. |
| 2 | Home | Click Build the full picture (either button). |
| 3 | Building the picture | Fourteen sources are read over about four seconds; Pivot goes from thinking to explaining and the brief is ready. |
| 4 | Supplier brief | The relationship on one page, linked to two indices. |
| 5 | Claim check | Bars grow, the 3.1 point gap fades in, Pivot finds something. |
| 6 | Call notes | Transcript and structure, recorded with consent. |
| 7 | Options | Three counters priced on total cost. |
| 8 | Decide | Click Approve; it turns green for a moment, then moves on. |
| 9 | Counter-proposal | Click Send from Outlook; a Sending and Sent toast, then moves on. |
| 10 | Agreed and logged | Confetti once, Pivot celebrating. Restart tour returns to step 1. |

## Layout

- 1200px and wider: the Paper layout.
- 768 to 1199px: the sidebar collapses to a 64px icon rail, cards wrap to two columns, the Pivot dock is narrower.
- Under 768px: top bar with a menu drawer, single column, Pivot dock becomes a bottom sheet that can collapse to a pill.

Animation respects `prefers-reduced-motion`.

## Project map

- `app/page.tsx`, `components/Journey.tsx`: step state in the URL, keyboard, Approve and Send flows.
- `components/screens/Screen01SignIn.tsx` to `Screen10Agreed.tsx`: one component per screen.
- `components/Sidebar.tsx`, `TopBar.tsx`, `PivotDock.tsx`, `AppShell.tsx`: shared chrome.
- `components/Pivot.tsx`: the assistant, seven moods: hello, thinking, explaining, found, needs, concerned, celebrating.
- `public/assets/`: clay icons, sign-in hero, FORVIA logo, Outlook mark.
