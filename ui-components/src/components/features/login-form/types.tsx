import { z } from 'zod';
export interface TLoginBarSchema {
  email?: string;
  password?: string;
}

export const loginBarSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email!' }),
  password: z
    .string()
    .min(6, { message: 'Password should have atleast 6 characters' }),
});
