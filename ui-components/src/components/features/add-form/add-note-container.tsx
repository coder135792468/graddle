'use client';

import AddFormLogic from './add-note-logic';

const AddFormContainer = ({ onSubmit, ...props }: any) => {
  return <AddFormLogic onSubmit={onSubmit} {...props} />;
};

export { AddFormContainer };
