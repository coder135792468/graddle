import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TStudySectionSchema, studySectionSchema } from './types';
import StudySectionView from './study-section-view';

const StudySectionLogic = ({ onSubmit, ...props }: any) => {
  const form = useForm<TStudySectionSchema>({
    resolver: zodResolver(studySectionSchema),
  });

  const handleSubmit = async (data: TStudySectionSchema) => {
    await onSubmit(data);
    form.reset();
  };

  return <StudySectionView form={form} onSubmit={handleSubmit} {...props} />;
};

export default StudySectionLogic;
