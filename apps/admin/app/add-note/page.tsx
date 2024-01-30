'use client';
import {
  AddFormContainer,
  StudySectionContainer,
} from '@frontend/ui-components';
import React from 'react';

const AddNote = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  const addStudyMaterial = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <AddFormContainer
        formClass="w-[90vw] mx-[5vw] flex flex-col mt-8"
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
        studyMaterialContainer={
          <div className="bg-gray-100 my-4">
            <h1>Previous Year Question Paper</h1>
            <div className="bg-[red] whitespace-nowrap overflow-x-auto">
              <div className="w-[300px] mx-4 h-[50px] bg-[green] inline-block"></div>
              <div className="w-[300px] mx-4 h-[50px] bg-[green] inline-block"></div>
              <div className="w-[300px] mx-4 h-[50px] bg-[green] inline-block"></div>
              <div className="w-[300px] mx-4 h-[50px] bg-[green] inline-block"></div>
              <div className="w-[300px] mx-4 h-[50px] bg-[green] inline-block"></div>
              <div className="w-[300px] mx-4 h-[50px] bg-[green] inline-block"></div>
              <div className="w-[300px] mx-4 h-[50px] bg-[green] inline-block"></div>
              <div className="w-[300px] mx-4 h-[50px] bg-[green] inline-block"></div>
              <div className="w-[300px] mx-4 h-[50px] bg-[green] inline-block"></div>
            </div>
          </div>
        }
      />
    </div>
  );
};
export default AddNote;
