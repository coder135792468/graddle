'use client';
import { useEffect } from 'react';
import {
  useAppDispatch,
  addTitle,
  addContent,
  useAppSelector,
  deleteStudySection,
  deleteStudyMaterial,
  resetNote,
} from '../../store';
import AddNoteLogic from './add-note-logic';

export const AddNoteContainer = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const curNote = useAppSelector((state) => state.curNote);
  const handleSubmit = async (data: any) => {
    const jsonData = {
      ...curNote,
      ...data,
      items: '',
    };
    jsonData.items = `${jsonData.college} ${jsonData.course} ${jsonData.sem}`;
    jsonData.note.forEach((item: any) => (jsonData.items += ` ${item.title}`));
    console.log(jsonData);
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
    if (!props.edit) dispatch(resetNote());
  }, [props.edit]);
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
