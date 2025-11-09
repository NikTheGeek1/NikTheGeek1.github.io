# NikTheGeek1.github.io

Interactive personal site that powers [NikTheGeek1.github.io](https://NikTheGeek1.github.io). The app is a React + TypeScript single-page experience that blends a Three.js hero animation with portfolio-style content (timeline, publications, projects, blog posts, contact details), all deployed via GitHub Pages.

## Tech Stack & External Services

- React 17, React Router DOM 5, react-scripts 4, custom hook-based state store.
- TypeScript with strict mode, path aliases (`base-tsconfig.json`) and CSS modules/vanilla CSS for styling.
- Three.js + OBJ/MTL loaders for the landing experience (`src/threeD`).
- EmailJS (`emailjs-com`) for transactional notifications and Firebase Realtime Database for visitor telemetry (`src/utils/visitor-tracker.tsx`).
- Cloudflare trace endpoint for lightweight geodemographic capture, Web APIs (localStorage, fetch) for persistence.
- AVIF/JPEG media pipeline with a Python helper to produce multiple resolutions (`image_resolution_decreaser.py`).

## Repository Layout

| Path | Purpose |
| --- | --- |
| `src/App.tsx`, `src/index.tsx` | App bootstrap, React Router wiring, visitor-token initialization. |
| `src/containers` | Page-level containers (`LandingPage`, `Profile`). |
| `src/components` | Reusable UI building blocks (timeline boxes, project cards, photo galleries, contact widgets, blog scaffolding). |
| `src/threeD` | Three.js scene setup (renderer, camera, monkey mesh, lights, animations). Assets live in `public/three-assets`. |
| `src/hooks-store` | Lightweight global state (visitor token, screen dimensions) with vanilla hooks instead of Redux. |
| `src/utils` & `src/visitor-cookies` | Visitor analytics, token generation, Mailer integration, cookie/localStorage helpers. |
| `src/html-texts`, `src/imports`, `src/assets` | Structured content, static copy, and image imports (multiple quality tiers). |
| `src/blog-classes`, `src/blog-files-to-download` | Generic section builder plus downloadable code referenced in blog posts. |
| `public` | HTML shell, favicon set, Three.js models/textures, 404 fallback required for GitHub Pages + React Router. |
| `image_resolution_decreaser.py` | Pillow-based script that batches thumbnails/reduced-quality variants for galleries. |

## Runtime Architecture

### Bootstrapping & Routing
- On startup the app registers the custom stores, fetches/creates a `visitorToken`, stores visit timestamps in localStorage, and records demographics/locations before rendering any UI (`src/App.tsx:1-52`).
- React Router v5 is used purely for client-side section paths (`/timeline`, `/projects`, etc.). Query parameters such as `?path=Projects` or `?project=xcovers` deep-link into specific sections (`src/components/ProfileHeader/ProfileHeader.tsx`, `src/components/Projects/Projects.tsx:32-68`).

### Landing Page & 3D Hero
- `LandingPage` presents a Three.js canvas and welcome copy. Clicking (or auto-triggering via query param) the Suzanne monkey starts an exit animation that reveals the profile sections (`src/containers/LandingPage/LandingPage.tsx:1-61`).
- `ThreeD` bootstraps the singleton `threeD/Main` class which creates the renderer, camera, custom lights, knot animations, and monkey model loaded via OBJ/MTL loaders. It also simulates a click if a `path` query parameter is present (`src/components/ThreeD/ThreeD.tsx:1-35`, `src/threeD/Main.tsx:1-165`, `src/threeD/Monkey.tsx`).

### Profile Shell & Navigation
- `ProfileHeader` renders the avatar, name, and a responsive tab list. It syncs the active tab with the URL, collapses items into a `More` dropdown on small screens, and routes via `pathsEnum` (`src/components/ProfileHeader/ProfileHeader.tsx`).
- `ProfileBody` houses the `Switch` with section containers for Timeline, Publications, Experience, Projects, and Contact (`src/components/ProfileBody/ProfileBody.tsx`).
- `GenericBox` and related box components provide a CSS-grid layout that adapts to screen width using the global `scrDims` state (`src/components/ProfileBoxes/GenericBox/GenericBox.tsx`).

## Feature Surfaces

- **Timeline** – Grid of narrative blocks (intro text, social links, latest news cards) backed by rich text in `src/html-texts/Timeline`. Embeds `BlogPostBox` components, including the Photo Gallery tutorial (`src/components/Timeline/Timeline.tsx:1-52`).
- **Publications** – Renders peer-reviewed work with TagBubble links to repos/papers (`src/components/Publications/Publications.tsx`).
- **Experience** – Multi-section CV (work, education, seminars) built from `ExperienceSection` components with tag bubbles for tech stacks (`src/components/Experience/Experience.tsx`).
- **Projects** – Category headings plus dozens of `Project` cards driven by `ProjectsTexts` and multi-resolution photo sets. Cards toggle between a summary and expanded JSX content, render technology chips, and expose optional GitHub/site links. Query params auto-expand a chosen project (`src/components/Projects/Projects.tsx:32-197`, `src/components/Projects/Project/Project.tsx`).
- **Contact & Social** – Contact numbers, mailto links, and external profiles contained in `ContactDetail` and `SocialNetworks` components (`src/components/Contact/Contact.tsx`, `src/components/SocialNetworks/SocialNetworks.tsx`).
- **Blog / Photo Gallery** – Blog posts reuse the `Section`/`SectionFactory` abstraction to auto-build tables of contents and hierarchical headings while embedding runnable demos via `<iframe>` (`src/components/BlogPost/Posts/PhotoGalleryBlog/PhotoGalleryBlog.tsx`, `src/blog-classes/Section.tsx`).

## Content & Media Pipeline

- Static body copy lives in `src/html-texts`, keeping JSX lean and centralizing edits.
- Images are imported through typed aggregators (`src/imports`) to guarantee every gallery has all quality tiers (thumbnail, reduced, low-quality placeholders, max size) consumed by `PhotosGallery` (`src/components/PhotosGallery/PhotosGallery.tsx`).
- `image_resolution_decreaser.py` generates the AVIF/JPEG derivative sets referenced above (thumbnails, reduced MIN/MAX, low-quality MIN/MAX) so the gallery can first display lightweight placeholders before swapping to sharper assets (`image_resolution_decreaser.py:1-61`).
- Blog downloads under `src/blog-files-to-download` mirror the gallery component’s source so readers can inspect the code referenced in tutorials.

## Visitor Analytics & Notifications

- On first visit, the app mints a random token, stores it in localStorage, and records demographics derived from `https://www.cloudflare.com/cdn-cgi/trace`. Subsequent navigation events (Timeline, Projects, etc.) call `storeVisitorLocation` with contextual enums (`src/utils/visitor-tracker.tsx:1-72`, `src/hooks-store/stores/visitor-map.tsx:4-23`).
- Data points are pushed to the Firebase Realtime Database at `https://my-gh-page-default-rtdb.europe-west1.firebasedatabase.app/` and optionally emailed through EmailJS after a 10-minute cooldown window, ensuring you are alerted about new visitors without spamming (`src/utils/Mailer.tsx:1-46`).
- Cookies/localStorage keys `VSC` and `VST` keep track of visitor identity and last visit timestamp (`src/visitor-cookies/visitor-cookies.tsx`).

## Three.js Scene Stack

- The scene is created once via `Main.createOrGetInstance`, ensuring only one renderer and animation loop live on the page (`src/threeD/Main.tsx:9-159`).
- `Monkey` encapsulates asset loading, raycasting, cursor changes, and click-triggered animations (`src/threeD/Monkey.tsx`). Supporting classes (`Lights.tsx`, `Siders.tsx`, `Wall.tsx`, `animations/*`) orchestrate custom shaders, moving light helpers, and rope-like decorative elements.
- OBJ/MTL assets are served from `public/three-assets`, so any new models should be added there to keep GitHub Pages happy.

## State Management & Responsiveness

- Instead of Redux, the project uses a custom `useStore` hook that mimics a global store with action dispatching and listener registration (`src/hooks-store/store.tsx:1-45`).
- Two stores ship by default: `visitor-map` (persists visitor tokens and exposes `LOCATIONS_ENUM`) and `screen-dimensions` (tracks window size and drives responsive layout decisions such as Profile tab collapsing) (`src/hooks-store/stores/*.tsx`).

## Development Workflow

1. **Install prerequisites** – Node 16.x (see `CLIprof.sh`) and npm. Run `npm install`.
2. **Local development** – `npm start` launches the React dev server with hot reload.
3. **Testing** – `npm test` runs the default CRA test runner (React Testing Library setup is present even though no suites ship today).
4. **Build** – `npm run build` outputs the production bundle in `build/`.
5. **Deploy** – `npm run predeploy && npm run deploy` builds and publishes the `build` folder via the `gh-pages` CLI. Install `gh-pages` globally (`npm i -g gh-pages`) or add it to dev dependencies if you want the command available locally. GitHub Pages serves from the `gh-pages` branch and uses `public/404.html` for SPA routing.

## Extending the Site

- **Add a new project** – Import media into `src/assets/images/projects/<slug>`, run the image helper if you need new derivatives, update `src/imports/import-project-photos.tsx`, and append copy/expanded JSX to `src/html-texts/Projects.tsx`. Finally, register the project inside `src/components/Projects/Projects.tsx`.
- **Update timeline/news** – Edit `src/html-texts/Timeline.tsx`, drop new icons/photos into `src/assets`, and pass them to the relevant `GenericBox`/`LatestNewsBox`.
- **Publish a blog tutorial** – Create Post components under `src/components/BlogPost/Posts/<PostName>`, compose sections via `new Section(...)`, and reference any downloadable artifacts in `src/blog-files-to-download`.
- **Adjust Three.js hero** – Swap OBJ/MTL assets inside `public/three-assets`, then update `src/threeD` classes to tweak animations, lighting, or camera heuristics.
- **Instrument a new section** – Use `storeVisitorLocation` with a new entry in `LOCATIONS_ENUM` to keep telemetry consistent.

## Operational Considerations

- Secrets for EmailJS (user ID, service/template IDs, access token) are currently checked into the repo for convenience. If you plan to open-source or redeploy, move them into environment variables and gate analytics for privacy compliance.
- Firebase rules should be locked down to prevent public writes to `my-gh-page-default-rtdb`; rotate the database URL if you clone this project.
- The gallery relies on AVIF support; include JPEG fallbacks or adjust the generator script if targeting browsers without AVIF decoding.

Feel free to adapt this documentation as the portfolio grows—new sections simply need to follow the patterns outlined above. Happy hacking!
