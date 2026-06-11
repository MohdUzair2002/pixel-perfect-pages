## Goal
Recreate the uploaded "KitabGhar" mobile design (Notes screen) as a faithful, static front-end in the existing TanStack Start project, using the design tokens from `DESIGN.md` (Lumina Scholastic palette, Hanken Grotesk + Inter, 16px radius, glass/soft-shadow style).

Note: This project is TanStack Start (React + Vite), not Next.js — building in-place per your selection.

## Screens
1. **Notes (`/notes`)** — pixel-faithful port of the uploaded screenshot:
   - Top bar: hamburger, centered "KitabGhar" wordmark (indigo), cart icon
   - "My Notes" headline
   - Search input ("Search notes…") with leading icon
   - Featured/active note card (indigo outline, tags "Design" gold + "Study" muted)
   - List of note rows (title, preview, date)
   - Floating action button (soft gold, rounded-square, pencil icon) bottom-right
   - Bottom nav: Home / Books / Notes (active, indigo pill) / Profile
2. **Placeholder routes** for `/` (Home), `/books`, `/profile` so the bottom nav works — each renders a simple "Coming soon" surface with the same shell. (No functionality; purely visual mimic.)

## Design system wiring
- Update `src/styles.css` `:root` tokens to the Lumina palette (convert hex → oklch where needed, or use hex via CSS vars; keep Tailwind v4 `@theme inline` mapping).
- Add Hanken Grotesk + Inter via Google Fonts `<link>` in `__root.tsx` head.
- Add `--radius: 1rem` and the spacing/typography scale from DESIGN.md.

## Components (new, under `src/components/kitab/`)
- `MobileFrame.tsx` — centered max-w-[420px] phone-shaped viewport with app surface
- `TopBar.tsx` — hamburger / wordmark / cart
- `BottomNav.tsx` — 4-tab nav using `<Link>` with active indigo pill
- `NoteCard.tsx` (featured + compact variants)
- `SearchField.tsx`
- `Fab.tsx`

## Assets
- Use the uploaded `screen.png` only as a reference for layout — not embedded. All icons via `lucide-react` (already available): `Menu`, `ShoppingCart`, `Search`, `Pencil`, `Home`, `BookOpen`, `StickyNote`, `User`. Notes content is hard-coded mock data matching the screenshot text exactly.

## Files to add/change
- `src/styles.css` — palette, fonts, radius tokens
- `src/routes/__root.tsx` — Google Fonts link, update default title to "KitabGhar"
- `src/routes/index.tsx` — Home placeholder inside MobileFrame
- `src/routes/notes.tsx` — Notes screen (main deliverable)
- `src/routes/books.tsx`, `src/routes/profile.tsx` — placeholders
- `src/components/kitab/*` — components listed above

## Out of scope
- No add/edit/delete notes, no search filtering logic, no persistence, no auth, no backend. Pure static mimic.
