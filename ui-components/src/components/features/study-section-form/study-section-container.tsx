'use client';

import StudySectionLogic from './study-section-logic';

const StudySectionContainer = ({ onSubmit, ...props }: any) => {
  return <StudySectionLogic onSubmit={onSubmit} {...props} />;
};

export { StudySectionContainer };
