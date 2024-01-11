'use client';

import SearchBarLogic from './searchbar-logic';

const SearchBarContainer = ({ ...props }) => {
  const handleSubmit = async (data: any) => {
    console.log(data);
  };
  return <SearchBarLogic onSubmit={handleSubmit} {...props} />;
};

export { SearchBarContainer };
