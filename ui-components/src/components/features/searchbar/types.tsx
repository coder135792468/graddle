import { z } from 'zod';
export interface TSearchBarSchema {
  searchbar?: string;
  course?: string;
  intitution?: string;
}

export const searchBarSchema = z.object({
  searchbar: z.string().optional(),
  intitution: z.string().optional(),
  course: z.string().optional(),
});
