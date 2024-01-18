'use client';
import { useEffect, useState } from 'react';
import { SearchBarContainer } from '@frontend/ui-components';
import { useGetAllNotesQuery, useAppDispatch, addNotes } from '../../store';
import { CardView } from '../../component';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Notes = ({ ...props }) => {
  const router = useRouter();
  const [search, setSearch] = useState<any>({
    size: '10',
    page: '0',
    search: props.searchParams.search || '',
  });

  const { data = [], isLoading, isError } = useGetAllNotesQuery(search);
  const dispath = useAppDispatch();

  const handleSubmit = async (data: any) => {
    setSearch({
      ...search,
      ...data,
    });
    router.push(
      `/notes${(data.search || data.college) && '?'}${
        data.search && 'search='
      }${data.search}${data.college && '&college='}${data.college}`
    );
  };
  useEffect(() => {
    dispath(addNotes(data));
  }, [data]);

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
      {props.searchParams.search && (
        <h1 className="text-center text-xl">
          Showing Results for{' '}
          <span className="font-bold">"{props.searchParams.search}"</span>
        </h1>
      )}
      {isError && <h1>There is some error</h1>}
      {isLoading && <h1>Loading Data</h1>}
      <div className="w-[90%] mx-[5%] grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data.library?.map((note: any) => (
          <Link key={note.id} href={`/notes/${note.id}`}>
            <CardView {...note} />
          </Link>
        ))}
      </div>
    </>
  );
};
