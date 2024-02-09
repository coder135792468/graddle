import React from 'react';
import { SuggestionView } from './suggestion-view';

export const ContentSuggestion = () => {
  const choices = [
    { value: 'BCA', theme: 'bg-[#A8EEFF]' },
    { value: 'Btech', theme: 'bg-[#A8EEFF]' },
    { value: 'MCA', theme: 'bg-[#A8EEFF]' },
    { value: 'Mtech', theme: 'bg-[#A8EEFF]' },
    { value: 'BCom', theme: 'bg-[#A8EEFF]' },
    { value: 'MBA', theme: 'bg-[#A8EEFF]' },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
      {choices.map((choice, index) => (
        <SuggestionView {...choice} key={index} />
      ))}
    </div>
  );
};
