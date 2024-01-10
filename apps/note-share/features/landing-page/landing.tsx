import React from 'react';
import { Notes } from '..';
import { Button, SearchBarContainer } from '@frontend/ui-components';
import LandingImage from '../../public/images/landing.svg';
import Image from 'next/image';
export const Landing = () => {
  return (
    <div>
      <div className="grid grid-cols-2 grid-flex-cols p-10">
        <div>
          <h1 className="font-medium text-[2rem]">Graddle</h1>
          <ul className={'list-disc ml-10'}>
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
          <div className="flex m-5 ml-10">
            <SearchBarContainer />
            <Button className="ml-4">Search</Button>
          </div>
        </div>
        <Image src={LandingImage} alt="Laning Image" />
      </div>
      <Notes />
    </div>
  );
};
