import { z } from 'zod';
export interface TSearchBarSchema {
  searchbar: string;
}

export const searchBarSchema = z.object({
  searchbar: z.string().nonempty('Enter something to search'),
  intitution: z.string().optional(),
  course: z.string().optional(),
});
