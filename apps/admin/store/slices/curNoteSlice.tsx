import { createSlice } from '@reduxjs/toolkit';

const curNote: any = {
  note: [],
};

const curNoteSlice = createSlice({
  name: 'curNote',
  initialState: curNote,
  reducers: {
    resetNote: () => {
      return {
        note: [],
        semester: '',
        college: '',
        course: '',
        title: '',
      };
    },
    setNote: (state, action) => {
      state = {
        ...action.payload,
        note:
          typeof action.payload?.note === 'string'
            ? JSON.parse(action.payload?.note)
            : [],
      };
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
        link: action.payload.link,
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
  resetNote,
} = curNoteSlice.actions;
export { curNoteSlice };
