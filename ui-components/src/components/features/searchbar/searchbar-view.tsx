import { Input } from '../../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { TSearchBarSchema } from './types';
import { Button } from '../../ui/button';
interface Props {
  form: UseFormReturn<TSearchBarSchema>;
  onSubmit: any;
  show?: boolean;
  formClass?: string;
  inputClass?: string;
  selectClass?: string;
  selectContainer?: string;
  buttonClass?: string;
}

const SearchBarView = ({
  form,
  onSubmit,
  show = false,
  formClass,
  inputClass,
  selectClass,
  buttonClass,
  ...props
}: Props) => {
  const { formState, register, handleSubmit } = form;
  const { errors } = formState;
  return (
    <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
      {show && (
        <select className={selectClass} {...register('college')}>
          <option value=""> Select College</option>
          <option value="Gulzar">Gulzar</option>
          <option value="Gulzar">Gulzar</option>
          <option value="Gulzar">Gulzar</option>
        </select>
      )}
      <div className="flex">
        <Input
          placeholder="Enter to search"
          {...register('search')}
          autoComplete={'off'}
          className={inputClass}
        />
        {errors.search && (
          <p className="text-red-500 text-xs">{`${errors.search.message}`}</p>
        )}

        <Button type="submit" size={'default'} className={buttonClass}>
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBarView;
