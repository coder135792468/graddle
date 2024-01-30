import { z } from 'zod';
export interface TAddFormSchema {
  course?: string;
  sem?: string;
  college?: string;
}

export const addFormSchema = z.object({
  course: z.string().nonempty('Enter course'),
  sem: z.string().min(1, { message: 'Enter semester' }),
  college: z.string().min(3, { message: 'Enter college Name' }),
});
