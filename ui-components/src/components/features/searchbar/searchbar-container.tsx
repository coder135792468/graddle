'use client';

import SearchBarLogic from './searchbar-logic';

const SearchBarContainer = () => {
  const handleSubmit = async (data: any) => {
    console.log(data);
  };
  return <SearchBarLogic onSubmit={handleSubmit} />;
};

export { SearchBarContainer };
