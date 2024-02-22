import { z } from 'zod';
export interface TLoginBarSchema {
  userName?: string;
  password?: string;
}

export const loginBarSchema = z.object({
  userName: z.string().min(1, { message: 'Please enter username!' }),
  password: z
    .string()
    .min(6, { message: 'Password should have atleast 6 characters' }),
});
