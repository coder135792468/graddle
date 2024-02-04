'use client';
import { Button, cn } from '@frontend/ui-components';
import { FileTextIcon } from '@radix-ui/react-icons';
import {
  useAppSelector,
  useAppDispatch,
  useGetCurrNoteQuery,
  setNote,
} from '../../store';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NoteContent = ({ params: { id } }: any) => {
  const { data, isLoading } = useGetCurrNoteQuery(id);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const curNote = useAppSelector((state) => state.curNote);
  const noteMaterial = curNote?.note;

  console.log(curNote);
  useEffect(() => {
    dispatch(setNote(data));
  }, [isLoading]);

  return isLoading ? (
    <h1 className="text-center">Loading...</h1>
  ) : (
    <div>
      <h1 className="font-bold text-xl text-center my-6">
        {curNote?.course} {curNote?.semester}{' '}
        <Button
          onClick={() => {
            router.push(`/add-note?id=${id}`);
          }}
          className="bg-[#222] text-white w-full max-w-[100px]"
        >
          Edit
        </Button>
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
