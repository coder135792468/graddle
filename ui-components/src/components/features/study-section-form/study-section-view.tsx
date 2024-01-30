import { Input } from '../../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { TStudySectionSchema } from './types';
import { Button } from '../../ui/button';
import { cn } from 'ui-components/src/utils';
interface Props {
  form: UseFormReturn<TStudySectionSchema>;
  onSubmit: any;
  header?: string | JSX.Element | null;
  formClass?: string;
  inputClass?: string;
  selectClass?: string;
  selectContainer?: string;
  buttonClass?: string;
}

const StudySectionView = ({
  form,
  onSubmit,
  header = 'Study Material',
  inputClass,
  buttonClass,
  ...props
}: Props) => {
  const { formState, register, handleSubmit } = form;
  const { errors } = formState;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{header}</h1>
      <div className="flex">
        <div>
          <Input
            className={cn('max-w-[300px] mr-4', inputClass)}
            {...register('section_title')}
            placeholder="Enter Study Material Section"
            autoComplete="off"
          />
          {errors.section_title && (
            <div className="text-red-500 text-xs">{`${errors.section_title.message}`}</div>
          )}
        </div>
        <Button
          type={'submit'}
          className={cn('bg-[#333] text-white', buttonClass)}
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default StudySectionView;
