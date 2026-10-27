<script lang="ts">

</script>

<div class="app">
  <header class="topbar">
    <div class="brand">Notes</div>
    <div class="topbar-actions">
      <input id="searchInput" class="search" placeholder="Search notes…" disabled />
      <button id="newBtn" class="btn">New</button>
      <button id="openWinBtn" class="btn" disabled>Open Window</button>
      <button id="deleteBtn" class="btn danger" disabled>Delete</button>
    </div>
  </header>

  <div class="content">
    <aside class="sidebar">
      <div class="sidebar-title">Notes</div>
      <div id="notesList" class="list"></div>
    </aside>

    <main class="editor">
      <div class="editor-header">
        <input id="titleInput" class="title" placeholder="Title" disabled />
        <div id="status" class="status">Idle</div>
      </div>
      <textarea id="bodyInput" class="body" placeholder="Start typing..." disabled></textarea>
    </main>
  </div>
</div>

<style>
:root {
  --bg: #0f1216;
  --panel: #141a20;
  --panel2: #10161c;
  --text: #e8eef5;
  --muted: #9aa7b4;
  --border: rgba(255, 255, 255, 0.08);
  --btn: rgba(255, 255, 255, 0.08);
  --btn2: rgba(255, 255, 255, 0.12);
  --danger: rgba(255, 80, 80, 0.18);
  --primary: rgba(90, 160, 255, 0.22);
  --shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  --radius: 14px;
  --font: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  --glass-bg: rgba(20, 26, 32, 0.65);
  --header-bg: rgba(16, 22, 28, 0.65);
  --field-bg: rgba(255, 255, 255, 0.04);
  --row-bg: rgba(255, 255, 255, 0.03);
  --row-hover-bg: rgba(255, 255, 255, 0.05);
  --tag-hover-bg: rgba(255, 255, 255, 0.06);
  --selected-border: rgba(90, 160, 255, 0.45);
  --selected-bg: rgba(90, 160, 255, 0.12);
}

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  background:
    radial-gradient(1200px 800px at 30% 10%, rgba(90, 160, 255, 0.12), transparent 60%),
    radial-gradient(900px 600px at 80% 30%, rgba(255, 140, 90, 0.1), transparent 55%), var(--bg);
  color: var(--text);
  font-family: var(--font);
}

.app {
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 56px 1fr;
  overflow: hidden;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  border-bottom: 1px solid var(--border);
  background: var(--header-bg);
  backdrop-filter: blur(10px);
}

.brand {
  font-weight: 700;
  letter-spacing: 0.3px;
}

.topbar-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.search {
  width: 260px;
  padding: 9px 10px;
  border-radius: 10px;
  border: 1px solid var(--border);
}

.content {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 12px;
  padding: 12px;
  min-height: 0;
}

.sidebar,
.editor {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.sidebar {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.sidebar-title {
  padding: 12px;
  font-size: 13px;
  color: var(--muted);
  border-bottom: 1px solid var(--border);
  background: var(--header-bg);
}

.list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  overflow: auto;
}

#notesList {
  flex: 1;
  min-height: 0;
}

.note-row {
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--row-bg);
  cursor: pointer;
}

.note-row:hover {
  background: var(--row-hover-bg);
}

.note-title {
  font-weight: 650;
  font-size: 14px;
  margin-bottom: 4px;
}

.note-sub {
  font-size: 12px;
  color: var(--muted);
  display: flex;
  gap: 10px;
}

.editor {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 0;
}

.editor-header {
  padding: 12px;
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid var(--border);
  background: var(--header-bg);
}

.title {
  flex: 1;
  padding: 10px 12px;
  border-radius: 12px;
  font-size: 14px;
}

.status {
  font-size: 12px;
  color: var(--muted);
  min-width: 80px;
  text-align: right;
}

.body {
  width: 100%;
  height: 100%;
  padding: 14px;
  border: none;
  outline: none;
  resize: none;
  background: rgba(0, 0, 0, 0.08);
  color: var(--text);
  font-size: 14px;
  line-height: 1.45;
}

.btn {
  padding: 9px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--btn);
  color: var(--text);
  cursor: pointer;
}

.btn:hover {
  background: var(--btn2);
}

.btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.btn.primary {
  background: var(--primary);
}

.btn.danger {
  background: var(--danger);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px;
  border-bottom: 1px solid var(--border);
  max-height: 140px;
  overflow: auto;
}

.tag-pill {
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--field-bg);
  cursor: pointer;
  font-size: 12px;
}

.tag-pill:hover {
  background: var(--tag-hover-bg);
}

.tags-input {
  width: 240px;
  padding: 10px 12px;
  border-radius: 12px;
  font-size: 13px;
}

.search,
.title,
.tags-input {
  border: 1px solid var(--border);
  background: var(--field-bg);
  color: var(--text);
}

.note-row.selected,
.tag-pill.selected {
  border-color: var(--selected-border);
  background: var(--selected-bg);
}

.app.single-mode .content {
  grid-template-columns: 1fr;
}

.app.single-mode .sidebar {
  display: none;
}
</style>
