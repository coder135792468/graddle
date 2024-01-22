'use client';
import { cn } from '@frontend/ui-components';
import { FileTextIcon } from '@radix-ui/react-icons';
import { useAppSelector } from 'apps/note-share/store';
import React from 'react';

const NoteContent = ({ params: { id } }: any) => {
  const { library, totalPages } = useAppSelector((state) => state.notes);
  const curNote = library.filter((note: any) => note.id.toString() === id);
  const noteMaterial = JSON.parse(curNote[0].note);
  console.log(curNote);
  return (
    <div>
      <h1 className="font-bold text-xl text-center my-6">
        {curNote[0].course} {curNote[0].semester}
      </h1>
      {noteMaterial.map((note: any) => (
        <div className="p-4">
          <h1 className="font-medium text-lg">{note.title}</h1>
          <div className="p-4 flex  flex-wrap ">
            {[
              ...note.content,
              ...note.content,
              ...note.content,
              ...note.content,
              ...note.content,
            ].map(({ title, link }: any) => (
              <a
                href={link}
                target="_blank"
                className={cn(
                  'm-2 font-medium text-gray-500  flex items-center p-5 rounded-lg',
                  'hover:text-[white] hover:cursor-pointer bg-slate-200 hover:bg-[tomato]',
                  'border-b-2'
                )}
              >
                <FileTextIcon /> <span className="mx-2">{title}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default NoteContent;
