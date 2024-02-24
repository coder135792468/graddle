import { useEffect } from 'react';
import { AddFormViewProps } from './types';
import { Button, Input } from '../../..';
import { COLLEGE_NAMES } from './contant';

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
      setValue('semester', curNote.semester);
    }
  }, [edit]);
  return (
    <div className={formClass}>
      <div className="grid grid-cols-1 md:grid-cols-2">
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
                {...register('semester')}
                autoComplete={'off'}
                className={semClass}
              />
              {errors.semester && (
                <p className="text-red-500 text-xs ml-4">{`${errors.semester.message}`}</p>
              )}
            </div>
          </div>
          {/* <Input
            placeholder="Enter College Name"
            {...register('college')}
            autoComplete={'off'}
            
          /> */}
          <select className={collegeClass} {...register('college')}>
            <option value=""> Select College</option>
            {COLLEGE_NAMES.map((college, index) => (
              <option key={index + 1} value={college.value}>
                {college.name}
              </option>
            ))}
          </select>
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
