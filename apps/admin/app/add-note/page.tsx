'use client';
import {
  AddFormContainer,
  Button,
  StudyMaterialContainer,
  StudySectionContainer,
} from '@frontend/ui-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  useAppDispatch,
  addTitle,
  addContent,
  useAppSelector,
  deleteStudySection,
  deleteStudyMaterial,
} from '../../store';

const AddNote = () => {
  const dispatch = useAppDispatch();
  const curNote = useAppSelector((state) => state.curNote);
  const handleSubmit = (data: any) => {
    const jsonData = {
      ...data,
      curNote,
    };
    console.log(jsonData);
  };
  const addStudyMaterial = (data: any) => {
    dispatch(addTitle(data.section_title));
  };
  const addMaterial = (data: any) => {
    dispatch(addContent(data));
  };
  const deleteSection = (index: number) => {
    dispatch(deleteStudySection(index));
  };

  const deleteMaterial = (data: any) => {
    console.log(
      curNote[data.curKey].content.filter(
        (_: any, index: number) => index !== data.id
      )
    );
    dispatch(deleteStudyMaterial(data));
  };
  return (
    <AddFormContainer
      formClass="w-[90vw] mx-[5vw] flex flex-col mt-8"
      buttonClass="bg-[#333] text-white w-full mx-auto max-w-[300px] mt-8"
      courseClass="w-[300px]"
      semClass="w-[100px] ml-2"
      collegeClass="w-[400px] mt-2"
      onSubmit={handleSubmit}
      addMaterialContainer={
        <StudySectionContainer
          buttonClass={'mx-4'}
          onSubmit={addStudyMaterial}
        />
      }
      studyMaterialContainer={Object.keys(curNote).map(
        (key: any, index: number) => (
          <div key={index} className="mt-4">
            <h1 className="font-medium">{curNote[key].title}</h1>
            <div className="bg-slate-100 p-4 mt-1">
              <div className="flex items-center">
                <div className="w-[250px] mx-4 flex justify-center flex-col">
                  <StudyMaterialContainer
                    onSubmit={addMaterial}
                    curKey={index}
                  />
                  <hr className="border-[#222]" />
                  <Button
                    onClick={() => deleteSection(index)}
                    className="bg-[#f43636] text-white w-full my-2"
                  >
                    Delete Section
                  </Button>
                </div>
                <div></div>
                {curNote[key].content.length === 0 ? (
                  <h1 className="text-center flex-1">
                    Start adding Study material{' '}
                  </h1>
                ) : (
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="flex-1 h-[200px] bg-slate-50"
                  >
                    {curNote[key].content.map((content: any, id: number) => (
                      <SwiperSlide
                        key={id + 1}
                        className="bg-white shadow-lg rounded-lg mx-5 grid items-center"
                      >
                        <div className="w-[100%] h-[100%]  flex items-center justify-center flex-col">
                          <p>
                            <strong>Topic: </strong>
                            <span>{content.title}</span>
                          </p>
                          <div className="flex gap-2">
                            <Button className="bg-[#4488ff] text-white">
                              View
                            </Button>
                            <Button
                              onClick={() =>
                                deleteMaterial({ curKey: index, id })
                              }
                              className="bg-[red] text-white"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        )
      )}
    />
  );
};
export default AddNote;
