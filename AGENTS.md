# Jellyfin Vue Feature Parity – Agent Tasks

**Objective:**  
Upgrade the `jellyfin-vue` frontend ([jellyfin/jellyfin-vue](https://github.com/jellyfin/jellyfin-vue)) to full feature parity with Jellyfin’s latest stable web client. Each task below is ordered by priority, from foundational refactors to polish work.

## Agent Tasks Breakdown

### 1. UI Framework Refactor – Finish Vuetify Removal (Prerequisite)
- **Description:**  
  Migrate all legacy Vuetify components to the new in‑house Vue component library. Replace menus, dialogs, forms, buttons, lists, etc., and fix any layout/style regressions.
- **Required Capabilities:**  
  Vue.js component knowledge; familiarity with Vuetify → custom‑component mappings; large‑scale refactoring and UI testing.
- **Dependencies:**  
  Complete before or alongside all feature tasks to avoid duplicate work.
- **Related Links:**  
  [Issue #2563 – Replace Vuetify with in‑house components](https://github.com/jellyfin/jellyfin-vue/issues/2563)
- **Agent Role:**  
  UI Agent

### 2. Implement Admin Dashboard & Settings Pages
- **Description:**  
  Build full admin interfaces:
    - User Management (list/create/edit/delete users; set permissions)  
    - Library Management (add/edit/delete libraries; scan control)  
    - Server Configuration (playback, networking, metadata, stats)  
    - Plugin Management (list, configure, install)  
    - Scheduled Tasks (view/run/change schedules)
- **Required Capabilities:**  
  Vue UI development; REST integration with Jellyfin admin APIs; forms and tables.
- **Dependencies:**  
  Relies on the new component library from Task 1.
- **Related Links:**  
  [Issue #1977 – Admin options greyed out](https://github.com/jellyfin/jellyfin-vue/issues/1977)
- **Agent Role:**  
  UI Agent

### 3. Build User Profile & Preferences Interface
- **Description:**  
  Allow users to edit their own profile: display name, avatar, password; select theme (light/dark); choose language/region; set playback defaults (subtitle/audio).
- **Required Capabilities:**  
  Vue form/UI; REST calls for user profile and password endpoints; global state for theme/language.
- **Dependencies:**  
  Component library from Task 1; patterns from Task 2.
- **Agent Role:**  
  UI Agent

### 4. Media Metadata Editing (Titles/Details and Images)
- **Description:**  
  Enable in‑UI editing of media item metadata and artwork:
    - Edit Metadata Dialog (title, description, year, genres, etc.)  
    - Edit Images (upload or URL for poster/backdrop/banner; reset to default)  
    - Success/error feedback (toasts)
- **Required Capabilities:**  
  Vue forms and file inputs; REST integration with `/Items/{itemId}` and `/Items/{itemId}/Images/{type}`; permission checks.
- **Dependencies:**  
  Component library from Task 1; admin/settings patterns from Tasks 2–3.
- **Related Links:**  
  *None (user‑reported gap)*
- **Agent Role:**  
  Metadata Agent

### 5. Verify & Improve Playlist Management
- **Description:**  
  Complete playlist CRUD and interaction:
    - Create/Delete playlists  
    - “Add to Playlist” action on items  
    - Remove items from playlist  
    - Play/shuffle entire playlist; (optional) reorder entries
- **Required Capabilities:**  
  Vue UI for context menus and dialogs; REST calls to `/Playlists` endpoints.
- **Dependencies:**  
  Component library from Task 1; metadata editing patterns from Task 4.
- **Related Links:**  
  [Issue #1819 – Playlists not showing items (fixed)](https://github.com/jellyfin/jellyfin-vue/issues/1819)
- **Agent Role:**  
  UI Agent

### 6. Implement Photo Gallery & Image Viewer
- **Description:**  
  Add support for photo libraries:
    - Thumbnail grid with sorting (date, name)  
    - Full‑screen lightbox with navigation and zoom  
    - (Optional) slideshow mode
- **Required Capabilities:**  
  Vue gallery/lightbox components; lazy‑loading for large collections.
- **Dependencies:**  
  Component library from Task 1.
- **Related Links:**  
  [Roadmap discussion #278](https://github.com/jellyfin/jellyfin-vue/discussions/278)
- **Agent Role:**  
  UI Agent

### 7. Add Audiobook Library Support
- **Description:**  
  Integrate audiobooks:
    - List titles/authors like music albums  
    - Detail page with chapter list and resume position  
    - Audio player tweaks for long‑form content and chapter seeking
- **Required Capabilities:**  
  Audio playback management (resume/chapter); Vue UI for library and detail views.
- **Dependencies:**  
  Component library from Task 1; gallery patterns from Task 6.
- **Related Links:**  
  *None (known gap where library appears empty)*
- **Agent Role:**  
  Playback Agent

### 8. Enhance Subtitle and Audio Track Selection
- **Description:**  
  Enable track switching in video playback:
    - Subtitle menu (list/toggle internal & external tracks)  
    - Audio track menu (switch languages/streams)  
    - (Optional) external subtitle upload if supported by stable UI
- **Required Capabilities:**  
  Video player integration (HTML5 `textTracks` or custom API); parsing stream metadata from Jellyfin.
- **Dependencies:**  
  Component library from Task 1; playback controls from Task 7.
- **Related Links:**  
  [Issue #2603 – Subtitle selector greyed out](https://github.com/jellyfin/jellyfin-vue/issues/2603)  
  [Issue #2484 – Audio track switching bug](https://github.com/jellyfin/jellyfin-vue/issues/2484)
- **Agent Role:**  
  Playback Agent

### 9. Refine Now Playing Queue & Playback Controls
- **Description:**  
  Polish music playback UX:
    - Up Next queue display and management (reorder/remove/clear)  
    - Shuffle & repeat controls  
    - Fullscreen music player with album art and queue access
- **Required Capabilities:**  
  Playback state management; interactive queue UI.
- **Dependencies:**  
  Component library from Task 1; track selection from Task 8.
- **Related Links:**  
  [Roadmap discussion #278](https://github.com/jellyfin/jellyfin-vue/discussions/278)
- **Agent Role:**  
  Playback Agent

### 10. Complete Live TV Support
- **Description:**  
  Build full Live TV/DVR interface:
    - Channel listing with logos and now/next info  
    - EPG grid view  
    - Live stream playback controls  
    - DVR scheduling and recorded program management
- **Required Capabilities:**  
  Video streaming integration (HLS); UI grid/timeline components; REST calls to Live TV APIs.
- **Dependencies:**  
  Component library from Task 1; playback refinements from Task 9.
- **Related Links:**  
  [Issue #2592 – Empty Live TV category](https://github.com/jellyfin/jellyfin-vue/issues/2592)  
  [Issue #1848 – Incorrect Live TV content](https://github.com/jellyfin/jellyfin-vue/issues/1848)
- **Agent Role:**  
  Playback Agent

### 11. Resolve Performance & Stability Issues
- **Description:**  
  Final polish to match stable UI performance and reliability:
    - Fix memory leaks (Issue #2028)  
    - Implement client‑side caching and optimize navigation  
    - QA across all flows to catch crashes and UI bugs
- **Required Capabilities:**  
  Vue performance profiling; memory‑leak debugging; caching strategies.
- **Dependencies:**  
  All feature tasks complete so profiling covers every code path.
- **Related Links:**  
  [Issue #2028 – Memory leak](https://github.com/jellyfin/jellyfin-vue/issues/2028)
- **Agent Role:**  
  UI Agent
