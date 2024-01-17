'use client';
import { useAppSelector } from 'apps/note-share/store';
import React from 'react';

const NoteContent = ({ params: { id } }: any) => {
  const { library } = useAppSelector((state) => state.notes);
  const curNote = library.filter((note: any) => note.id.toString() === id);
  const noteMaterial = JSON.parse(curNote[0].note);
  return <div>{JSON.stringify(noteMaterial)}</div>;
};
export default NoteContent;
