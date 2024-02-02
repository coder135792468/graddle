import React from 'react';
import {
  AddFormContainer,
  StudySectionContainer,
} from '@frontend/ui-components';
import { StudySectionView } from '../../component';

const AddNoteView = ({
  handleSubmit,
  addStudyMaterial,
  curNote,
  addMaterial,
  deleteSection,
  deleteMaterial,
  ...props
}: any) => {
  return (
    <AddFormContainer
      formClass="w-[90vw] mx-auto flex flex-col mt-8"
      buttonClass="bg-[#333] text-white w-full mx-auto max-w-[300px] mt-8"
      courseClass="w-[300px]"
      semClass="w-[100px] ml-2"
      collegeClass="w-[400px] mt-2"
      onSubmit={handleSubmit}
      addMaterialContainer={
        <StudySectionContainer
          buttonClass={'mx-4'}
          onSubmit={addStudyMaterial}
        />
      }
      studyMaterialContainer={curNote.note.map((_: any, index: number) => (
        <StudySectionView
          curNote={curNote}
          index={index}
          deleteSection={deleteSection}
          addMaterial={addMaterial}
          key={index + 1}
          deleteMaterial={deleteMaterial}
        />
      ))}
    />
  );
};

export default AddNoteView;
