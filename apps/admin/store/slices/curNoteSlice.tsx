import { createSlice } from '@reduxjs/toolkit';

const curNote: any = {
  note: [],
};

const curNoteSlice = createSlice({
  name: 'curNote',
  initialState: curNote,
  reducers: {
    setNote: (state, action) => {
      state = action.payload;
      return state;
    },

    addTitle: (state, action) => {
      state.note.push({
        title: action.payload,
        content: [],
      });
      return state;
    },
    addContent: (state, action) => {
      state.note[action.payload.curKey].content.push({
        title: action.payload.title,
        link: action.payload.title,
      });
      return state;
    },
    deleteStudySection: (state, action) => {
      state.note = state.note.filter(
        (_: any, index: number) => index !== action.payload
      );

      return state;
    },
    deleteStudyMaterial: (state, action) => {
      state.note[action.payload.curKey].content = state.note[
        action.payload.curKey
      ].content.filter((_: any, index: number) => index !== action.payload.id);
      return state;
    },
  },
});

export const {
  addTitle,
  addContent,
  deleteStudySection,
  deleteStudyMaterial,
  setNote,
} = curNoteSlice.actions;
export { curNoteSlice };
