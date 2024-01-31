import { Input } from '../../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { TStudyMaterialSchema } from './types';
import { Button } from '../../ui/button';
import { cn } from 'ui-components/src/utils';
interface Props {
  form: UseFormReturn<TStudyMaterialSchema>;
  onSubmit: any;
  show?: boolean;
  formClass?: string;
  titleClass?: string;
  linkClass?: string;
}

const StudyMaterialView = ({
  form,
  onSubmit,
  show = false,
  formClass,
  titleClass,
  linkClass,
  ...props
}: Props) => {
  const { formState, register, handleSubmit } = form;
  const { errors } = formState;
  return (
    <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
      <h1>Add Study Materials</h1>
      <Input
        placeholder="Enter title"
        {...register('title')}
        autoComplete="off"
        className={cn('border-b-2 border-[#4488ff] bg-white', titleClass)}
      />
      {errors.title && (
        <p className="text-red-500 text-xs mb-2">{`${errors.title.message}`}</p>
      )}
      <Input
        placeholder="Enter Link"
        {...register('link')}
        autoComplete="off"
        className={cn('border-b-2 border-[#4488ff] bg-white mt-2', linkClass)}
      />
      {errors.link && (
        <p className="text-red-500 text-xs">{`${errors.link.message}`}</p>
      )}
      <Button
        onClick={handleSubmit(onSubmit)}
        type="submit"
        className="bg-[#222] text-white w-full my-2"
      >
        ADD
      </Button>
    </form>
  );
};

export default StudyMaterialView;
