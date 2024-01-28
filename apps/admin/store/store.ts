import { configureStore } from '@reduxjs/toolkit';
import { noteSlice } from './slices/noteSlice';
import { notesApi } from './slices/noteApiSlice';

export const store = configureStore({
  reducer: {
    notes: noteSlice.reducer,
    [notesApi.reducerPath]: notesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([notesApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
