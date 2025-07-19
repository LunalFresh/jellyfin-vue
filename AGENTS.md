# AGENTS.md

**Objective:**
Upgrade the `jellyfin-vue` frontend to full feature parity with Jellyfin’s stable web client. This file defines each task with metadata and subtasks, enabling Codex agents to execute them precisely.

---

## Agent Tasks Breakdown

### Task 1: UI Framework Refactor – Finish Vuetify Removal (Prerequisite)

* **Description:** Replace all legacy Vuetify components in templates and scripts with the new in-house Base component library.

* **Required Capabilities:** jscodeshift, AST transforms for Vue SFCs (using `@vue/compiler-sfc`/`compiler-dom`), MagicString manipulation, familiarity with Base component API.

* **Dependencies:** None (foundational).

* **Agent Role:** UI Agent

* [ ] **1.1 AST Template Codemod**

  * *Sub-description:* Parse `<template>` with AST and rename every `<v-*>`/`<V*>` tag to `Base*` equivalents while preserving attributes, directives, slots, and children.

* [ ] **1.2 Prop API Mapping Codemod**

  * *Sub-description:* Identify and rewrite Vuetify-specific props (e.g., `color="primary"`, `dense`, `outlined`) to new Base prop names (e.g., `variant="primary"`, `size="sm`).

* [ ] **1.3 Visual Style Fixes**

  * *Sub-description:* Inject Tailwind/shadcn utility classes or Base layout wrappers to restore spacing, gutters, and grid behavior lost after removing Vuetify defaults.

* [ ] **1.4 Behavioral Parity Fixes**

  * *Sub-description:* Update usage of `v-dialog`, `v-menu`, `v-form` etc. to match Base component behaviors: focus trapping, transitions, validation hooks, open/close patterns.

### Task 2: Implement Admin Dashboard & Settings Pages

* **Description:** Build complete administrator interfaces for server management.

* **Required Capabilities:** Vue 3 routing, component composition, REST integration with Jellyfin admin APIs.

* **Dependencies:** Task 1.

* **Agent Role:** UI Agent

* [ ] **2.1 Scaffold Admin Routes**

  * *Sub-description:* Create `src/views/admin/` with nested routes for Users, Libraries, Server Settings, Plugins, Scheduled Tasks.

* [ ] **2.2 User Management Component**

  * *Sub-description:* Build `UserManagement.vue` to list/create/edit/delete users with calls to `/Users` endpoints and proper form validation.

* [ ] **2.3 Library Management Component**

  * *Sub-description:* Build `LibraryManagement.vue` for adding, editing, scanning, and removing libraries via `/Libraries` endpoints.

* [ ] **2.4 Server Settings Component**

  * *Sub-description:* Build `ServerSettings.vue` to configure playback, networking, metadata, and server statistics.

* [ ] **2.5 Plugin & Tasks Management**

  * *Sub-description:* Build `PluginManagement.vue` and `ScheduledTasks.vue` for plugin installation/configuration and task scheduling control.

### Task 3: Build User Profile & Preferences Interface

* **Description:** Allow users to manage their own profile and preferences.

* **Required Capabilities:** Vue forms, reactive state management, REST API calls to `/Users/{userId}/Profile` and password endpoints.

* **Dependencies:** Task 1.

* **Agent Role:** UI Agent

* [ ] **3.1 Profile Details View**

  * *Sub-description:* Enable editing display name, avatar upload, and password change.

* [ ] **3.2 Theme Toggle**

  * *Sub-description:* Expose light/dark theme switch with persistent user setting.

* [ ] **3.3 Language & Region Settings**

  * *Sub-description:* Allow selecting UI language and regional format preferences.

* [ ] **3.4 Playback Defaults**

  * *Sub-description:* Add controls for default audio/subtitle preferences (language, on/off state).

### Task 4: Media Metadata Editing (Titles/Details & Images)

* **Description:** Provide in-UI editing of media item metadata and artwork management.

* **Required Capabilities:** Vue component design, file input handling, integration with `/Items/{itemId}` and `/Items/{itemId}/Images/{type}` APIs.

* **Dependencies:** Task 1, Task 2, Task 3.

* **Agent Role:** Metadata Agent

* [ ] **4.1 Metadata Editor Component**

  * *Sub-description:* Create `MetadataEditor.vue` with fields for title, description, release date, genres, rating, etc.

* [ ] **4.2 Image Upload UI**

  * *Sub-description:* Implement file picker or URL input for posters/backdrops/banners with client-side preview and validation.

* [ ] **4.3 API Integration**

  * *Sub-description:* Wire up save actions to the Jellyfin API to update metadata and upload images.

* [ ] **4.4 Feedback Notifications**

  * *Sub-description:* Show toast or snackbar on success/failure of metadata saves.

### Task 5: Verify & Improve Playlist Management

* **Description:** Complete CRUD and UX for user playlists.

* **Required Capabilities:** REST calls for `/Playlists`, UI context-menu integration, list management.

* **Dependencies:** Task 1, Task 4.

* **Agent Role:** UI Agent

* [ ] **5.1 Create/Delete Playlists**

  * *Sub-description:* Implement dialog to create new playlists and option to delete owned playlists.

* [ ] **5.2 Add to Playlist**

  * *Sub-description:* Add context-menu actions on media items to add or remove from playlists.

* [ ] **5.3 Playlist Detail View**

  * *Sub-description:* Display playlist items with play/shuffle controls and optional reorder.

* [ ] **5.4 Rename & Share**

  * *Sub-description:* Allow renaming playlists and (optional) shareable links or export.

### Task 6: Implement Photo Gallery & Image Viewer

* **Description:** Support browsing and viewing photo libraries.

* **Required Capabilities:** Vue UI grid/lazy-loading, lightbox implementation.

* **Dependencies:** Task 1.

* **Agent Role:** UI Agent

* [ ] **6.1 Thumbnail Grid**

  * *Sub-description:* Render photos as thumbnails with sorting and pagination support.

* [ ] **6.2 Lightbox Viewer**

  * *Sub-description:* Full-screen viewer with next/prev nav, zoom controls, and close action.

* [ ] **6.3 Slideshow Mode**

  * *Sub-description:* Optional autoplay slideshow with timing and manual controls.

* [ ] **6.4 Performance Optimization**

  * *Sub-description:* Implement lazy-loading and virtualization for large collections.

### Task 7: Add Audiobook Library Support

* **Description:** Integrate audiobooks with chapter and resume features.

* **Required Capabilities:** Audio playback control, state management for resume props.

* **Dependencies:** Task 1, Task 6.

* **Agent Role:** Playback Agent

* [ ] **7.1 Audiobook List**

  * *Sub-description:* Display audiobook titles and authors similarly to music albums.

* [ ] **7.2 Chapters & Resume**

  * *Sub-description:* Show chapter list in detail view and resume last position.

* [ ] **7.3 Player Tweaks**

  * *Sub-description:* Adjust player UI for long-form audio and chapter-based seeking.

* [ ] **7.4 API Usage**

  * *Sub-description:* Use Jellyfin audiobook endpoints for fetching chapters and positions.

### Task 8: Enhance Subtitle & Audio Track Selection

* **Description:** Enable subtitle and audio track switching during playback.

* **Required Capabilities:** HTML5 video text/audio track APIs, UI overlays in OSD.

* **Dependencies:** Task 1, Task 7.

* **Agent Role:** Playback Agent

* [ ] **8.1 Subtitle Menu**

  * *Sub-description:* List and toggle internal/external subtitle tracks via player OSD.

* [ ] **8.2 Audio Track Menu**

  * *Sub-description:* Switch between audio streams (languages, stereo/surround).

* [ ] **8.3 External Subtitle Support**

  * *Sub-description:* (Optional) Allow file upload for external subtitles.

* [ ] **8.4 Metadata Parsing**

  * *Sub-description:* Ensure API-provided track metadata is parsed and fed to the player.

### Task 9: Refine Now Playing Queue & Playback Controls

* **Description:** Polish music playback UX with queue management and control modes.

* **Required Capabilities:** Playback state management, drag-and-drop or control UI.

* **Dependencies:** Task 1, Task 8.

* **Agent Role:** Playback Agent

* [ ] **9.1 Queue Display**

  * *Sub-description:* Show "Up Next" queue with reorder, remove, and clear features.

* [ ] **9.2 Shuffle & Repeat**

  * *Sub-description:* Implement shuffle and repeat toggles with persistent state.

* [ ] **9.3 Fullscreen Music Player**

  * *Sub-description:* Display album art, current track info, and upcoming queue in a full-screen overlay.

* [ ] **9.4 Visualization & Lyrics**

  * *Sub-description:* (Optional) Add waveform visualizer or lyrics panel if supported.

### Task 10: Complete Live TV & DVR Support

* **Description:** Deliver full live TV and DVR management UX.

* **Required Capabilities:** Video streaming integration (HLS), grid/timeline UI design, DVR API usage.

* **Dependencies:** Task 1, Task 9.

* **Agent Role:** Playback Agent

* [ ] **10.1 Channel Listing**

  * *Sub-description:* Render live TV channels with logos, names, and now/next info.

* [ ] **10.2 EPG Grid**

  * *Sub-description:* Electronic program guide grid with schedule and program details.

* [ ] **10.3 Live Playback**

  * *Sub-description:* Play live streams with pause, seek, and quality controls.

* [ ] **10.4 DVR Management**

  * *Sub-description:* Schedule recordings, list existing recordings, and allow play or delete.

### Task 11: Resolve Performance & Stability Issues

* **Description:** Ensure the Vue client matches stable UI performance and reliability.

* **Required Capabilities:** Performance profiling, memory leak debugging, caching strategies, end-to-end QA.

* **Dependencies:** All previous tasks.

* **Agent Role:** UI Agent

* [ ] **11.1 Memory Leak Fix**

  * *Sub-description:* Profile and remediate memory leaks (e.g., lingering listeners, caches) guided by Issue #2028.

* [ ] **11.2 Client Caching**

  * *Sub-description:* Implement caching for lists and data to minimize redundant fetches.

* [ ] **11.3 Load & Render Optimizations**

  * *Sub-description:* Optimize component lazy-loading, code-splitting, and rendering performance.

* [ ] **11.4 End-to-End QA**

  * *Sub-description:* Conduct comprehensive testing across all features to validate stability and performance.

---

**Usage:**

* Reference tasks/subtasks exactly (e.g., `Task 4.2 Image Upload UI`).
* Mark progress by converting `[ ]` to `[x]` as items are completed.
