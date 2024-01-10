import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TSearchBarSchema, searchBarSchema } from './types';
import SearchBarView from './searchbar-view';

const SearchBarLogic = ({ onSubmit }: any) => {
  const form = useForm<TSearchBarSchema>({
    resolver: zodResolver(searchBarSchema),
  });

  const handleSubmit = async (data: TSearchBarSchema) => {
    await onSubmit(data);
    form.reset();
  };

  return <SearchBarView form={form} onSubmit={handleSubmit} />;
};

export default SearchBarLogic;
