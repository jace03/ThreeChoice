# Tasks

## 1. Project Scaffold

- [x] 1.1 Scaffold the app with Vite's `react-ts` template in this repo and verify `npm run dev` starts without errors
- [x] 1.2 Install `react-router` and verify it appears in `package.json` dependencies
- [x] 1.3 Set up base folders: `src/pages/Home`, `src/sites/site-a`, `src/sites/site-b`, `src/sites/site-c` and verify each contains a placeholder component file

## 2. Routing

- [x] 2.1 Wire up the router with routes `/`, `/site-a`, `/site-b`, `/site-c` and verify each URL renders the matching component
- [ ] 2.2 Verify browser back/forward navigation works correctly between routes

## 3. Home Page (site-picker spec)

- [x] 3.1 Build the Home page listing all 3 options as clickable links and verify all 3 render on load
- [x] 3.2 Verify clicking each option navigates to its route without a full page reload (client-side nav)

## 4. Sample Sites (sample-site-a/b/c specs)

- [x] 4.1 Build placeholder content for Sample Site A that visibly labels itself "Sample Site A" and verify it renders at `/site-a`
- [x] 4.2 Build placeholder content for Sample Site B that visibly labels itself "Sample Site B" and verify it renders at `/site-b`
- [x] 4.3 Build placeholder content for Sample Site C that visibly labels itself "Sample Site C" and verify it renders at `/site-c`
- [x] 4.4 Make the 3 placeholders visually distinguishable from each other (e.g. different layout/color) and verify by viewing all 3 side by side
- [x] 4.5 Add a "back to picker" control on each sample site and verify it returns to the home page

## 5. Verification

- [x] 5.1 Run `npm run build` and verify the production build succeeds with no TypeScript errors
- [ ] 5.2 Manually walk through: load home -> click each of the 3 options -> confirm distinct content -> use back control -> confirm return to home
