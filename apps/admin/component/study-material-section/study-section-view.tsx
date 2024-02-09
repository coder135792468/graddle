import React from 'react';
import { Button, StudyMaterialContainer } from '@frontend/ui-components';
import { Card as MaterialCard } from '../study-material-card-view.tsx/card-view';

export const StudySectionView = ({
  curNote,
  index,
  deleteSection,
  addMaterial,
  deleteMaterial,
}: any) => {
  return (
    <div className="mt-4">
      <h1 className="font-medium">{curNote.note[index].title}</h1>
      <div className="bg-slate-100 p-4 mt-1">
        <div className="flex items-center flex-col md:flex-row">
          <div className="w-[250px] mx-4 flex justify-center flex-col">
            <StudyMaterialContainer onSubmit={addMaterial} curKey={index} />
            <hr className="border-[#222]" />
            <Button
              onClick={() => deleteSection(index)}
              className="bg-[#f43636] text-white w-full my-2"
            >
              Delete Section
            </Button>
          </div>
          <MaterialCard
            curNote={curNote.note[index]}
            deleteMaterial={deleteMaterial}
            index={index}
          />
        </div>
      </div>
    </div>
  );
};
