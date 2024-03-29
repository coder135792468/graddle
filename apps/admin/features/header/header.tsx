'use client';

import React from 'react';
import { cn } from 'ui-components/src/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Header = () => {
  const path = usePathname();
  return (
    <div className="flex justify-between items-center relative top-0 left-0 w-full h-[50px] shadow-sm z-[10] ease-in-out duration-300 bg-background">
      <div className="ml-6 font-bold">Graddle</div>
      <ul className="flex gap-3 mr-10 ">
        <Link href="/">
          <li
            className={cn(
              'm-4 transform hover:font-medium ',
              path === '/' ? 'font-medium' : ''
            )}
          >
            Home
          </li>
        </Link>
        <Link href="/add-note">
          <li
            className={cn(
              'm-4 transform',
              path.includes('add-note') ? 'font-medium' : ''
            )}
          >
            Add Note
          </li>
        </Link>
      </ul>
    </div>
  );
};
