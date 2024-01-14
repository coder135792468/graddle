import { Input } from '../../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { TSearchBarSchema } from './types';
import { Button } from '../../ui/button';
import Image from 'next/image';
interface Props {
  form: UseFormReturn<TSearchBarSchema>;
  onSubmit: any;
  show?: boolean;
  formClass?: string;
}

const SearchBarView = ({
  form,
  onSubmit,
  show = false,
  formClass,
  ...props
}: Props) => {
  const { formState, register, handleSubmit } = form;
  const { errors } = formState;
  return (
    <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Enter to search"
        {...register('searchbar')}
        autoComplete={'off'}
      />
      {errors.searchbar && (
        <p className="text-red-500 text-xs">{`${errors.searchbar.message}`}</p>
      )}
      {show && (
        <>
          {' '}
          <select
            className="w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('course')}
          >
            <option value="">Select Course</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="Btech">Btech</option>
          </select>
          <select
            className="w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('intitution')}
          >
            <option value=""> Select College</option>
            <option value="BCA">Gulzar group of institution</option>
            <option value="MCA">Gulzar group of institution</option>
            <option value="Btech">Gulzar group of institution</option>
          </select>
        </>
      )}
      <Button
        size={'icon'}
        style={{ position: 'absolute', right: '40px', marginTop: '40px' }}
      >
        <Image
          src={'/images/search-icon.svg'}
          alt="filter"
          width={15}
          height={15}
        />
      </Button>
    </form>
  );
};

export default SearchBarView;
