import { Input } from '../../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { TAddFormSchema } from './types';
import { Button } from '../../ui/button';
interface Props {
  form: UseFormReturn<TAddFormSchema>;
  onSubmit: any;
  show?: boolean;
  formClass?: string;
  courseClass?: string;
  semClass?: string;
  collegeClass?: string;
  addMaterialContainer?: JSX.Element | string | null;
  studyMaterialContainer?: JSX.Element | string | null;
  selectContainer?: string;

  buttonClass?: string;
}

const AddFormView = ({
  form,
  onSubmit,
  show = false,
  formClass,
  courseClass,
  semClass,
  buttonClass,
  addMaterialContainer,
  collegeClass,
  studyMaterialContainer,
  ...props
}: Props) => {
  const { formState, register, handleSubmit } = form;
  const { errors } = formState;
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
