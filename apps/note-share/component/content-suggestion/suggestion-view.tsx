import React from 'react';
import { SuggestionViewProps } from './types';
import { Card, CardHeader, CardTitle } from '@frontend/ui-components';
import { cn } from 'ui-components/src/utils';

export const SuggestionView = ({ value, theme }: SuggestionViewProps) => {
  return (
    <Card
      className={cn(
        theme,
        'rounded-lg w-[90%] mx-auto sm:w-[250px] p-5 shadow-multilayer hover:shadow-md'
      )}
    >
      <CardTitle className="text-center">{value}</CardTitle>
    </Card>
  );
};
