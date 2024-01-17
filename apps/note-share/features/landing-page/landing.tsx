import React from 'react';
import { SearchBarContainer } from '@frontend/ui-components';
import LandingImage from '../../public/images/landing.svg';
import Image from 'next/image';
import { ContentSuggestion } from '../../component';

export const Landing = () => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 p-10 ">
        <Image
          src={LandingImage}
          alt="Laning Image"
          className="md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-[250px] xs:w-[200px] xs:h-[200px] mx-auto"
        />

        <div>
          <h1 className="font-medium text-[2rem]">Graddle</h1>
          <ul className={'list-disc ml-5'}>
            <li>Elevate your Academic journey with our website!</li>
            <li>
              Find notes, past question papers, and essential tools to excel
              academically.
            </li>
            <li>
              Join thousands of students who trust us as their go-to resource
              hub. Take the next step towards success today!
            </li>
          </ul>
          <div className="mt-5">
            <SearchBarContainer
              formClass="flex m-5"
              inputClass="max-w-80 mr-5"
              selectContainer="block"
              selectClass="w-[150px] inline-block mx-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              buttonClass="mx-3"
            />
          </div>
        </div>
      </div>
      <ContentSuggestion />
    </div>
  );
};
