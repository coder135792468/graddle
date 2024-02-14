import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';

export interface TAddFormSchema {
  course?: string;
  semester?: string;
  college?: string;
}
export interface AddFormViewProps {
  form: UseFormReturn<TAddFormSchema>;
  onSubmit: any;
  formClass?: string;
  courseClass?: string;
  semClass?: string;
  collegeClass?: string;
  addMaterialContainer?: JSX.Element | string | null;
  studyMaterialContainer?: JSX.Element | string | null;
  selectContainer?: string;
  edit?: boolean;
  curNote?: any;
  buttonClass?: string;
}
export const addFormSchema = z.object({
  course: z.string().nonempty('Enter course'),
  semester: z.string().min(1, { message: 'Enter semester' }),
  college: z.string().min(3, { message: 'Enter college Name' }),
});
