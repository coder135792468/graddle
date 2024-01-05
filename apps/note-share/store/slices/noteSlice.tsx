import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = [
  { id: 1, title: 'Note 1', description: 'Description of Note 1' },
  { id: 2, title: 'Note 2', description: 'Description of Note 2' },
  { id: 3, title: 'Note 3', description: 'Description of Note 3' },
];

const noteSlice = createSlice({
  name: 'notes',
  initialState: initialState,
  reducers: {
    addAllNotes: (state, action) => {
      state.push(...action.payload);
    },
    addNote: (state, action: PayloadAction<any>) => {
      const { id, title, description } = action.payload;
      state.push({ id, title, description });
    },
    updateNote: (state, action: PayloadAction<any>) => {
      const { id, title, description } = action.payload;
      const noteIndex = state.findIndex((note: any) => note.id === id);
      if (noteIndex !== -1) {
        state[noteIndex].title = title;
        state[noteIndex].description = description;
      }
    },
    deleteNote: (state, action: PayloadAction<any>) => {
      const noteId = action.payload;
      return state.filter((note: any) => note.id !== noteId);
    },
  },
});

export const { addAllNotes, addNote, updateNote, deleteNote } =
  noteSlice.actions;
export { noteSlice };
