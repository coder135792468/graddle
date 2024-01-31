import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TStudyMaterialSchema, studyMaterialSchema } from './types';
import StudyMaterialView from './study-material-view';

const StudyMaterialLogic = ({ onSubmit, curKey, ...props }: any) => {
  const form = useForm<TStudyMaterialSchema>({
    resolver: zodResolver(studyMaterialSchema),
  });

  const handleSubmit = async (data: TStudyMaterialSchema) => {
    await onSubmit({ ...data, curKey });
    form.reset();
  };

  return <StudyMaterialView form={form} onSubmit={handleSubmit} {...props} />;
};

export default StudyMaterialLogic;
