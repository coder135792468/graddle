import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from '@frontend/ui-components';

export const Card = ({ curNote, deleteMaterial, index, ...props }: any) => {
  if (curNote?.content?.length === 0) {
    return <h1 className="text-center flex-1">Start adding Study material </h1>;
  }

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="flex-1 w-full h-full min-h-[200px] bg-slate-50"
    >
      {curNote.content.map((content: any, id: number) => (
        <SwiperSlide
          key={id + 1}
          className="bg-white shadow-lg rounded-lg grid items-center w-full h-[200px]"
        >
          <div className="w-[100%] h-[100%]  flex items-center justify-center flex-col">
            <p>
              <strong>Topic: </strong>
              <span>{content.title}</span>
            </p>
            <div className="flex gap-2">
              <Button className="bg-[#4488ff] text-white">View</Button>
              <Button
                onClick={() => deleteMaterial({ curKey: index, id })}
                className="bg-[red] text-white"
              >
                Delete
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
