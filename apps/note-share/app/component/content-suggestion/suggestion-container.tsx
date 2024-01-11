import React from 'react';
import { SuggestionView } from './suggestion-view';

export const ContentSuggestion = () => {
  const choices = [
    { value: 'BCA', theme: 'bg-[#EEEEF0]' },
    { value: 'Btech', theme: 'bg-[#C4F5E1]' },
    { value: 'MCA', theme: 'bg-[#EEEEF0]' },
    { value: 'Mtech', theme: 'bg-[#A8EEFF]' },
    { value: 'BCom', theme: 'bg-[#EEEEF0]' },
    { value: 'MBA', theme: 'bg-[#C2F3FF]' },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
      {choices.map((choice, index) => (
        <SuggestionView {...choice} key={index} />
      ))}
    </div>
  );
};
