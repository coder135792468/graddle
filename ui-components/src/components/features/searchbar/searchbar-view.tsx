import { Input } from '../../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { TSearchBarSchema } from './types';
import { Button } from '../../ui/button';
import Image from 'next/image';
interface Props {
  form: UseFormReturn<TSearchBarSchema>;
  onSubmit: any;
}

const SearchBarView = ({ form, onSubmit, ...props }: Props) => {
  const { formState, register, handleSubmit } = form;
  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="inline-block">
          <Input
            placeholder="Enter to search"
            {...register('searchbar')}
            autoComplete={'off'}
            className="w-60 max-w-50"
            {...props}
          />
          {errors.searchbar && (
            <p className="text-red-500 text-xs">{`${errors.searchbar.message}`}</p>
          )}
        </div>
        <div>
          <Button size={'icon'} variant={'link'}>
            <Image
              src={'/images/filter-icon.svg'}
              alt="filter"
              width={15}
              height={15}
            />
          </Button>
          <Button size={'icon'}>
            <Image
              src={'/images/search-icon.svg'}
              alt="filter"
              width={15}
              height={15}
            />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchBarView;
