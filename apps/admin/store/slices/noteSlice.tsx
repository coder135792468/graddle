import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {};

const noteSlice = createSlice({
  name: 'notes',
  initialState: initialState,
  reducers: {
    addNotes: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addNotes } = noteSlice.actions;
export { noteSlice };
