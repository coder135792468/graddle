'use client';

import React from 'react';
import { cn } from 'ui-components/src/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Header = () => {
  const path = usePathname();
  return (
    <div className="flex justify-between bg-muted items-center relative top-0 left-0 w-full h-[50px] shadow-md z-[10] ease-in-out duration-300 bg-background">
      <div className="ml-6 font-bold">Graddle</div>
      <ul className="flex gap-3 mr-10">
        <Link href="/">
          <li
            className={cn(
              'p-4 transform scale-110 hover:font-medium',
              path === '/' ? 'font-medium' : ''
            )}
          >
            Home
          </li>
        </Link>
        <Link href="/notes">
          <li
            className={cn(
              'p-4 transform scale-110',
              path === '/notes' ? 'font-medium' : ''
            )}
          >
            Notes
          </li>
        </Link>
        <Link href="/about-us">
          <li className="p-4 transform scale-110 hover:font-medium">
            About us
          </li>
        </Link>
        <Link href="contact">
          <li className="p-4 transform scale-110 hover:font-medium">Contact</li>
        </Link>
      </ul>
    </div>
  );
};
