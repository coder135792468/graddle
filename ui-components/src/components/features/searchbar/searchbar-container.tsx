'use client';

import SearchBarLogic from './searchbar-logic';

const SearchBarContainer = ({ onSubmit, ...props }: any) => {
  return <SearchBarLogic onSubmit={onSubmit} {...props} />;
};

export { SearchBarContainer };
