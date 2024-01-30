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

  return <AddFormView form={form} onSubmit={handleSubmit} {...props} />;
};

export default AddFormLogic;
