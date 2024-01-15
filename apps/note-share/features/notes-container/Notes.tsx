'use client';
import { useState } from 'react';
import { SearchBarContainer } from '@frontend/ui-components';
import { useGetAllNotesQuery, useAppSelector } from '../../store';

export const Notes = () => {
  const [search, setSearch] = useState<any>({
    size: '10',
    page: '0',
  });

  const {
    data = [],
    error,
    isLoading,
    isError,
    refetch,
  } = useGetAllNotesQuery(search);
  const notes = useAppSelector((state) => state.notes);

  const handleSubmit = async (data: any) => {
    setSearch({
      ...search,
      ...data,
    });
    refetch();
  };
  console.log(data);
  return (
    <>
      <SearchBarContainer
        show={true}
        formClass="grid m-5 grid-cols-1 sm:grid-cols-2"
        inputClass="max-w-80"
        selectClass="w-full max-w-[350px] mb-5 mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        buttonClass="mx-3"
        onSubmit={handleSubmit}
      />

      {isLoading && <h1>Loading Data</h1>}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {data.library?.map((note: any) => (
          <div className="p-5 bg-slate-400 m-5">{note.course}</div>
        ))}
      </div>
    </>
  );
};
