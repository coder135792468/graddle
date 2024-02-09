import React from 'react';
import { Skeleton } from '../../ui/skeleton';

interface Props {
  isLoading: boolean;
}
export const LoaderView = ({ isLoading }: Props) => {
  return (
    isLoading && (
      <div className="flex flex-col space-y-3 max-w-[300px] m-auto">
        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-slate-500" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-slate-500" />
          <Skeleton className="h-4 w-[200px] bg-slate-500" />
          <Skeleton className="h-4 w-[250px] bg-slate-500" />
        </div>
      </div>
    )
  );
};
