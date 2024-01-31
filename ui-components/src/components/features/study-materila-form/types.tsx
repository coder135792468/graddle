import { z } from 'zod';
export interface TStudyMaterialSchema {
  title?: string;
  link?: string;
}

export const studyMaterialSchema = z.object({
  title: z.string().nonempty('Please Enter Title'),
  link: z.string().min(1, { message: 'Please Enter Link' }),
});
