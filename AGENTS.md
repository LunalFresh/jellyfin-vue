# AGENTS.md

## 1 · Prompt Templates

```md
### PLAN phase
Read AGENTS.md and tasks/<id>-<slug>.md.

Goal — Task <id>: <title>.

Phase: PLAN ONLY  
– Outline the algorithm in ≤12 pseudocode steps.

Strict‑Output:  
<!-- PLAN ONLY -->  
<pseudocode>
```

```text
### IMPLEMENT phase
Execute Task <id>: <title> — IMPLEMENT.  
Return only the full source for every new/updated file.
```

```text
### VALIDATE phase
Run the verification command for Task <id>.  
Return only failing output (if any).
```

```text
### DIFF phase
Emit a git‑style diff for all changes made in Task <id>.
## 2 · Definition of Done

A **task** is complete when **all** of the following are true:

1. All changes are limited to the file(s) stated in the task header.
2. `npm ci && npm run build && npm test` exit with status 0.
3. The VALIDATE phase emits **no output** (all assertions pass).
4. No new ESLint or TypeScript errors are introduced.
5. Any TODO/FIXME added includes a follow‑up Task ID.

---

## 3 · Tasks

Below is the fully‑decomposed backlog for Jellyfin‑Vue parity with Jellyfin Web 10.10.7.
Each checkbox represents a single, file‑scoped task that should take Codex ≤ 15 minutes.

---

### Phase 0 · Environment & Guardrails

- [ ] **Task 000 · Ensure Install & Build Succeeds Non‑Interactively** – root `package.json` & scripts. Validate with CI run.
- [ ] **Task 001 · Minimal Vitest Smoke Harness** – `frontend/vitest.config.ts`, `frontend/tests/smoke.test.ts`.
- [ ] **Task 002 · Data‑Test Selectors Utility** – `frontend/src/utils/testSelectors.ts` helper.
- [ ] **Task 003 · Jellyfin Server URL Normalization** – `frontend/src/stores/server.ts`.

### Phase 1 · Core User Flow

#### A · Connect & Auth
- [ ] **010 · Server Add Form – Basic Validation** – `AddServerForm.vue` (blocked by 003)
- [ ] **011 · Server Reachability Ping** – `AddServerForm.vue` + `api/server.ts` (blocked by 010)
- [ ] **012 · Username / Password Auth** – `LoginForm.vue` + `api/auth.ts` (blocked by 011)
- [ ] **013 · Remember Last Server / Auto‑Reconnect** – `server.ts` store (blocked by 012)

#### B · Library Landing
- [ ] **020 · Fetch User Libraries** – `stores/libraries.ts` (blocked by 012)
- [ ] **021 · HomeView Library Tiles** – `HomeView.vue` (blocked by 020)
- [ ] **022 · Library Route Item Fetch (Paged)** – `LibraryView.vue` (blocked by 021)
- [ ] **023 · Sort & Filter Controls** – `SortFilterBar.vue` (blocked by 022)

#### C · Item Detail
- [ ] **030 · Item Detail Fetch & Display** – `ItemDetailView.vue` (blocked by 022)
- [ ] **031 · Metadata Badges** – `MetadataBadges.vue` (blocked by 030)
- [ ] **032 · Resume Progress Bar** – `ResumeBar.vue` (blocked by 030)

#### D · Playback (Skeleton & Basic Controls)
- [ ] **100 · VideoPlayer Mount & Stream Start** – `VideoPlayer.vue` (blocked by 030, 032)
- [ ] **101 · Playback Error State** – `VideoPlayer.vue` (blocked by 100)
- [ ] **102 · Transport Controls** – `VideoPlayerControls.vue` (blocked by 100)
- [ ] **103 · Fullscreen Toggle** – `VideoPlayerControls.vue` + `fullscreen.ts` (blocked by 102)
- [ ] **104 · Subtitle Track Menu** – `SubtitleMenu.vue` (blocked by 100)
- [ ] **105 · Audio Track Menu** – `AudioMenu.vue` (blocked by 100)
- [ ] **106 · Subtitle Off & Burned Indicator** – `SubtitleMenu.vue` (blocked by 104)
- [ ] **107 · Quality Selector** – `QualityMenu.vue` (blocked by 100)
- [ ] **108 · Skip Intro Button** – `VideoPlayerControls.vue` + `skipIntro.ts` (blocked by 102)
- [ ] **109 · Playback Scrobble Reporting** – `VideoPlayer.vue` + `api/playstate.ts` (blocked by 100)

#### E · Resume Sync
- [ ] **120 · Update Item Resume After Stop** – `playstate.ts` + caches (blocked by 109, 032)

### Phase 2 · Playback Advanced
- [ ] **121 · Picture‑in‑Picture Toggle** – `VideoPlayer.vue` + `pip.ts` (blocked by 102)
- [ ] **122 · Cast Menu Skeleton** – `VideoPlayerCast.vue` (new) (blocked by 121)
- [ ] **123 · Device Discovery Stub** – `castStore.ts` (blocked by 122)
- [ ] **124 · Chromecast Sender Session** – `castPlayer.ts` (blocked by 123)
- [ ] **125 · Stats for Nerds OSD** – `VideoPlayerStats.vue` (blocked by 101)
- [ ] **126 · Detachable Mini‑player** – `MiniPlayer.vue` + router guard (blocked by 100, 109)

### Phase 3 · Music & Audio‑Book UX
- [ ] **200 · Audio‑only Player Skeleton** – `MusicPlayer.vue` (blocked by 012)
- [ ] **201 · Now‑Playing Queue Store** – `NowPlayingQueueStore.ts` (blocked by 200)
- [ ] **202 · Gapless / Auto‑Next** – `MusicPlayer.vue` (blocked by 201)
- [ ] **203 · Repeat & Shuffle** – `MusicPlayerControls.vue` (blocked by 201)
- [ ] **204 · Lyrics Panel** – `LyricsPanel.vue` (blocked by 200)
- [ ] **205 · Album Track Table** – `AlbumView.vue` (blocked by 020)

### Phase 4 · User Settings & Profiles
- [ ] **300 · Settings Sidebar Skeleton** – `SettingsSidebar.vue`
- [ ] **301 · Profile Settings** – `ProfileSettings.vue` (blocked by 300)
- [ ] **302 · Theme Switcher** – `DisplaySettings.vue` (blocked by 300)
- [ ] **303 · Playback Defaults** – `PlaybackSettings.vue` (blocked by 300)
- [ ] **304 · Downloads Settings** – `DownloadsSettings.vue` (blocked by 300)
- [ ] **305 · Parental PIN Dialog** – `ParentalPinDialog.vue` (blocked by 012)

### Phase 5 · Admin, Live TV, SyncPlay, Search, Collections, Accessibility

#### Admin
- [ ] **400 · Admin Dashboard Read‑Only** – `AdminHome.vue` (blocked by 012)
- [ ] **401 · Admin User List** – `Users.vue` (blocked by 400)
- [ ] **402 · Admin Logs Tail** – `Logs.vue` (blocked by 400)

#### Live TV
- [ ] **410 · EPG Guide Grid** – `Guide.vue` (blocked by 012)
- [ ] **411 · Recording Schedule CRUD** – `RecordingSchedule.vue` (blocked by 410)
- [ ] **412 · Recording Playback Route** – `RecordingList.vue` (blocked by 100, 411)

#### SyncPlay (Watch Together)
- [ ] **420 · Room Creation Dialog** – `RoomCreateDialog.vue` (blocked by 012)
- [ ] **421 · Room Join Dialog** – `RoomJoinDialog.vue` (blocked by 420)
- [ ] **422 · WebSocket Transport** – `SyncTransport.ts` (blocked by 102, 421)

#### Search & Collections
- [ ] **430 · Search Hint Bar** – `SearchBar.vue` (blocked by 012)
- [ ] **431 · Search Results View** – `SearchView.vue` (blocked by 430)
- [ ] **432 · Collections Grid** – `Collections.vue` (blocked by 020)

#### Accessibility
- [ ] **440 · Keyboard Focus Ring** – `a11y/focusRing.ts` + mixin
- [ ] **441 · Skip Links** – `a11y/skipLinks.vue` (blocked by 440)
- [ ] **442 · ARIA Live Seek Announcements** – `VideoPlayer.vue` (blocked by 102)

---

> **Parity Target**: Jellyfin Web 10.10.7 stable
> **Repository Baseline**: upstream `master` + this `AGENTS.md`

```
