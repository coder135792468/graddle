'use client';

import StudyMaterialLogic from './study-material-logic';

const StudyMaterialContainer = ({ onSubmit, ...props }: any) => {
  return <StudyMaterialLogic onSubmit={onSubmit} {...props} />;
};

export { StudyMaterialContainer };
