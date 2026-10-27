// NOTE: Run `bun run prepare` after adding this file

import { Note } from '$lib/models/note';

class NotesStore {
    // Reactive state (Pinia's state property)
    notes = $state<Note[]>([]);

    // Computed / derived state (Pinia's getters)
    getNotes = $derived(this.notes);
}

export const notesStore = new NotesStore();
