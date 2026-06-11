## Goal
Rebuild the site to match the new Stitch mockups: a **desktop-first** KitabGhar experience with four screens — Home, Books (browse), Book Details, and My Notes. Current project is a mobile mimic and will be replaced.

Stack stays TanStack Start (React + Vite). Lumina Scholastic palette stays the same.

## Pages

### 1. `/` — Home
- Top header (shared): KitabGhar wordmark left · Home/Books/Notes nav center (active underline indigo) · cart + profile icons right
- Hero (2-col): left = "Your Digital Library, **Reimagined**" (gold accent on second word), paragraph, big rounded search with arrow button, "TRENDING:" + pill chips ("Philosophy", "Design Systems"). Right = generated library-interior hero image inside a "tablet" frame with a small "NOW READING — The Art of Stillness" floating card.
- Editor's Picks: big featured card ("Deep Work" — Bestseller pill, title, author, blurb, Read Sample button, $18.99, book image) + 2 stacked compact cards ("Thinking, Fast and Slow", "Atomic Habits") on the right.
- Features for Readers: 2×3 grid of 6 mini feature cards (icon + title + body). One card has an "AI" indigo chip.
- Explore by Subject: centered title in a light surface band; row of 6 pill chips with icons (Architecture, Philosophy, Computer Science, Design & Art, Economics, History).
- Trending Notes & Summaries: section title + carousel arrows; 4-up cover gallery (Sapiens, Meditations, Mastery, Principles) with title + subtitle.
- Footer (shared).

### 2. `/books` — Browse Books
- Header (search input visible in nav area on this page) + page title row: "Showing **124** books in 'Technology'" left, "Sort by: Newest" select right.
- Left sidebar Filters card: Category checkboxes (Technology checked, Science, Business), Price radios (Under $20, $20–$50, Over $50).
- Right: 4-up book card grid. Each card = cover image, top-left badge ("Best Seller" gold / "New" indigo), star + rating + (N), title, author, price + circular cart button.
- "Load More ⌄" indigo button centered below.
- Footer.

### 3. `/books/$id` — Book Details
- Breadcrumb: Books › Technology › Software Engineering.
- Two-col: left = product image stack (book cover with shadow); right = "Bestseller" gold pill, title "The Principles of System Design", author link, star rating + reviews, price $45.00 strike $60.00, CTAs (Add to Cart indigo, Buy Now gold, heart wishlist outlined), format selector (Hardcover selected / Digital).
- Two-col panels: Synopsis (multi-paragraph) | Specifications (key/value rows: Publisher, Publication Date, Language, Pages, ISBN-13).
- About the Author card: avatar + name (indigo link) + bio.
- Reader Reviews: section title + "Write a Review" link; 3 review cards (avatar, name, role, stars, quote).
- Because you liked this: 4-up related books gallery.
- Footer.

### 4. `/notes` — My Notes (replaces current mobile notes)
- Two-pane: left sidebar (sticky, light surface) = "My Notes" heading + round "+" FAB, search input, filter pills (All / Study / Research / Personal), then note cards list (active card has indigo left border + bg, tag pill bottom-right).
- Right pane = formatting toolbar (B / I / U / list / quote, "Saved" + ⋮), large title, tag row (gold "Study" + "+ Add Tag"), rich body content (paragraphs, "Core Principles" h2, bulleted list, blockquote with indigo left bar, closing paragraph).
- Footer.

## Shared components (new under `src/components/site/`)
- `SiteHeader.tsx` (with optional `withSearch` prop for /books variant)
- `SiteFooter.tsx`
- `Container.tsx` (max-w-7xl centered, responsive padding)
- `BookCard.tsx` (browse grid card)
- `BadgePill.tsx` (gold / indigo / muted variants)
- `RatingStars.tsx`
- `NoteListItem.tsx`, `NoteEditor.tsx`
- `CategoryChip.tsx`

## Images
- The mockup images are layout references only — not embedded.
- Generate fresh imagery via `imagegen` (saved to `src/assets/`):
  - `home-hero-library.jpg` (serene library interior, soft light, indigo/cream palette)
  - `book-deep-work.jpg`, `book-thinking-fast-slow.jpg`, `book-atomic-habits.jpg` (editor's picks)
  - 4 trending-notes covers (`note-sapiens.jpg`, `note-meditations.jpg`, `note-mastery.jpg`, `note-principles.jpg`)
  - 4 browse-page book covers (`book-clean-code.jpg`, `book-neural-networks.jpg`, `book-future-web.jpg`, `book-hardware.jpg`)
  - `book-system-design.jpg` for the details hero
  - `author-rostova.jpg` portrait
  - 3 review-avatar images (or use initials)
  - 4 "because you liked this" covers
- All icons via `lucide-react` (already installed).

## Design system
- Keep current `src/styles.css` Lumina tokens. Add a few additions:
  - `--color-gold-soft: #ffe088`
  - Optional `--shadow-card` utility class for soft elevation.
- Add a `font-display`/`font-sans` rule already wired.

## Files to add / change
- `src/routes/index.tsx` — Home (rewrite)
- `src/routes/books.tsx` — Browse (rewrite, currently placeholder)
- `src/routes/books.$id.tsx` — Book details (new)
- `src/routes/notes.tsx` — Notes (rewrite for desktop two-pane)
- `src/routes/profile.tsx` — keep as simple placeholder (or remove from nav since mockups only show Home/Books/Notes)
- `src/components/site/*` — new components above
- Delete `src/components/kitab/*` (mobile-only; superseded)
- `src/routes/__root.tsx` — keep fonts; no other change

## Out of scope
- No backend, no auth, no real search/filter logic, no cart state. All data is hard-coded mock matching the mockups. Buttons/checkboxes are visual only.
- Responsive: desktop-first faithful to mockups; will gracefully stack on narrow widths but not pixel-tuned for mobile.
