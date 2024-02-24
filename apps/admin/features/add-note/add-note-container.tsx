'use client';

import { useEffect } from 'react';
import {
  useAppDispatch,
  addTitle,
  addContent,
  useAppSelector,
  deleteStudySection,
  deleteStudyMaterial,
  useAddNoteMutation,
  resetNote,
} from '../../store';
import AddNoteLogic from './add-note-logic';
import { useRouter } from 'next/navigation';

export const AddNoteContainer = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const curNote = useAppSelector((state) => state.curNote);
  const [createNote] = useAddNoteMutation();
  const router = useRouter();
  const handleSubmit = async (data: any) => {
    try {
      const jsonData = {
        ...curNote,
        ...data,
        items: '',
      };
      jsonData.items = `${jsonData.college} ${jsonData.course} ${jsonData.semester}`;
      jsonData.title = `${jsonData.course} ${jsonData.semester}`;
      jsonData.note.forEach(
        (item: any) => (jsonData.items += ` ${item.title}`)
      );
      jsonData.note = JSON.stringify(jsonData.note);
      jsonData.views = Math.floor(Math.random() * 20) + 5;
      jsonData.date = new Date();
      const loginUser = JSON.parse(localStorage.getItem('loginUser') || '{}');
      const res: any = await createNote({
        body: jsonData,
        headers: {
          Authorization: `Bearer ${loginUser.token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
      if (res.error) router.push('/login');
      router.push('/');
    } catch (err) {
      router.push('/login');
    }
  };
  const addStudyMaterial = (data: any) => {
    dispatch(addTitle(data.section_title));
  };
  const addMaterial = (data: any) => {
    dispatch(addContent(data));
  };
  const deleteSection = (index: number) => {
    dispatch(deleteStudySection(index));
  };

  const deleteMaterial = (data: any) => {
    dispatch(deleteStudyMaterial(data));
  };

  useEffect(() => {
    if (!props.edit) {
      dispatch(resetNote());
    }
  }, []);
  return (
    <AddNoteLogic
      handleSubmit={handleSubmit}
      curNote={curNote}
      addStudyMaterial={addStudyMaterial}
      addMaterial={addMaterial}
      deleteSection={deleteSection}
      deleteMaterial={deleteMaterial}
      {...props}
    />
  );
};
