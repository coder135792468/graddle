import { useEffect } from 'react';
import { AddFormViewProps } from './types';
import { Button, Input } from '../../..';

const AddFormView = ({
  form,
  onSubmit,
  formClass,
  courseClass,
  semClass,
  buttonClass,
  addMaterialContainer,
  collegeClass,
  studyMaterialContainer,
  edit,
  curNote,
  ...props
}: AddFormViewProps) => {
  const { formState, register, handleSubmit, setValue } = form;
  const { errors } = formState;
  useEffect(() => {
    if (edit) {
      setValue('course', curNote.course);
      setValue('college', curNote.college);
      setValue('sem', curNote.semester);
    }
  }, [edit]);
  return (
    <div className={formClass}>
      <div className="grid grid-cols-2">
        <div>
          <div className="flex">
            <div>
              <Input
                placeholder="Enter to search"
                {...register('course')}
                autoComplete={'off'}
                className={courseClass}
              />
              {errors.course && (
                <p className="text-red-500 text-xs">{`${errors.course.message}`}</p>
              )}
            </div>
            <div>
              <Input
                placeholder="Semester"
                {...register('sem')}
                autoComplete={'off'}
                className={semClass}
              />
              {errors.sem && (
                <p className="text-red-500 text-xs ml-4">{`${errors.sem.message}`}</p>
              )}
            </div>
          </div>
          <Input
            placeholder="Enter College Name"
            {...register('college')}
            autoComplete={'off'}
            className={collegeClass}
          />
          {errors.college && (
            <p className="text-red-500 text-xs">{`${errors.college.message}`}</p>
          )}
        </div>
        {addMaterialContainer}
      </div>
      {studyMaterialContainer}
      <Button
        type="submit"
        className={buttonClass}
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddFormView;
