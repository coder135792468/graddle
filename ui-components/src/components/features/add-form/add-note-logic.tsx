import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TAddFormSchema, addFormSchema } from './types';
import AddFormView from './add-note-view';

const AddFormLogic = ({ onSubmit, ...props }: any) => {
  const form = useForm<TAddFormSchema>({
    resolver: zodResolver(addFormSchema),
  });

  const handleSubmit = async (data: TAddFormSchema) => {
    await onSubmit(data);
    form.reset();
  };

  return (
    <AddFormView
      form={form}
      onSubmit={handleSubmit}
      {...props}
      collegeClass="w-full max-w-[400px] mt-5 mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  );
};

export default AddFormLogic;
