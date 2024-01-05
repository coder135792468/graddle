import { Input } from '../../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { TSearchBarSchema } from './types';

interface Props {
  form: UseFormReturn<TSearchBarSchema>;
  onSubmit: any;
}

const SearchBarView = ({ form, onSubmit }: Props) => {
  const { formState, register, handleSubmit } = form;
  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Enter to search"
        {...register('searchbar')}
        autoComplete={'off'}
      />
      {errors.searchbar && (
        <p className="text-red-500 text-sm">{`${errors.searchbar.message}`}</p>
      )}
    </form>
  );
};

export default SearchBarView;
