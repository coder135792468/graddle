'use client';
import { useGetAllNotesQuery, useAppSelector } from '../../store';

export const Notes = () => {
  const { data, error, isLoading, isError } = useGetAllNotesQuery({
    size: '10',
    page: '0',
    sort: 'id,asec',
  });
  const notes = useAppSelector((state) => state.notes);
  console.log(data);

  return <>{JSON.stringify(notes)}</>;
};
