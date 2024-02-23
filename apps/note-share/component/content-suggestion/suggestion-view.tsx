import React from 'react';
import { SuggestionViewProps } from './types';
import { Card, CardTitle } from '@frontend/ui-components';
import { cn } from 'ui-components/src/utils';
import { useRouter } from 'next/navigation';

export const SuggestionView = ({ value, theme }: SuggestionViewProps) => {
  const router = useRouter();
  return (
    <Card
      className={cn(
        theme,
        'rounded-lg w-[90%] mx-auto sm:w-[250px] p-5 shadow-multilayer hover:shadow-md'
      )}
      onClick={() => router.push(`/notes?search=${value}`)}
    >
      <CardTitle className="text-center">{value}</CardTitle>
    </Card>
  );
};
