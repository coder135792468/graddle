import { createSlice } from '@reduxjs/toolkit';

const curNote: any = [];

const curNoteSlice = createSlice({
  name: 'curNote',
  initialState: curNote,
  reducers: {
    addTitle: (state, action) => {
      state.push({
        title: action.payload,
        content: [],
      });
      return state;
    },
    addContent: (state, action) => {
      state[action.payload.curKey].content.push({
        title: action.payload.title,
        link: action.payload.title,
      });
      return state;
    },
    deleteStudySection: (state, action) => {
      return state.filter((_: any, index: number) => index !== action.payload);
    },
    deleteStudyMaterial: (state, action) => {
      state[action.payload.curKey].content = state[
        action.payload.curKey
      ].content.filter((_: any, index: number) => index !== action.payload.id);
      return state;
    },
  },
});

export const { addTitle, addContent, deleteStudySection, deleteStudyMaterial } =
  curNoteSlice.actions;
export { curNoteSlice };
