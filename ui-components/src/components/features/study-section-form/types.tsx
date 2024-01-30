import { z } from 'zod';
export interface TStudySectionSchema {
  section_title?: string;
}

export const studySectionSchema = z.object({
  section_title: z.string().min(1, { message: 'Enter Study Section Title' }),
});
