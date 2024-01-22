import React from 'react';
import { cn } from 'ui-components/src/utils';
import { CalendarIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@frontend/ui-components';
export const CardView = ({ course, college, views, date }: any) => {
  return (
    <div
      className={cn(
        'group transition-all after:transition-all  relative p-4 outline-none shadow-md bg-slate-100 mx-auto max-w-[300px] h-[150px] rounded-lg mt-[25px]',
        'after:w-[50px] after:h-[25px] after:absolute after:top-[-12px] after:rounded-md  after:left-0 after:z-[-1] after:bg-slate-100',
        'hover:bg-[#3E63DD] after:hover:bg-[#3E63DD] hover:text-white'
      )}
    >
      <Card className="shadow-none border-none w-full h-full p-2 group-hover:text-white">
        <CardHeader className="flex flex-col">
          <CardTitle className="text-sm">{course}</CardTitle>
          <CardDescription className="text-[12px] text-gray-500 group-hover:text-white">
            {college}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col pt-5 text-[12px] font-medium">
          <span className="flex items-center  text-[#4488ff] group-hover:text-white">
            <EyeOpenIcon /> <span className="ml-1"> {views} Views</span>
          </span>
          <span className="flex text-[#ff2f00] group-hover:text-white ">
            <CalendarIcon /> <span className=" ml-1">Uploaded on {date}</span>
          </span>
        </CardContent>
      </Card>
    </div>
  );
};
