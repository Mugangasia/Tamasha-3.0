import { z } from 'zod';

const validCultures = ['maasai', 'yoruba', 'zulu', 'kikuyu'] as const;

export const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[\d\s-]{10,}$/, 'Invalid phone number format'),
  culture: z.enum(validCultures, {
    errorMap: () => ({ message: 'Please select a valid culture' }),
  }),
  date: z.string().refine(
    (date) => new Date(date) > new Date(),
    'Date must be in the future'
  ),
  groupSize: z.number()
    .min(1, 'Group size must be at least 1')
    .max(100, 'Group size cannot exceed 100'),
  message: z.string()
    .max(500, 'Message must be less than 500 characters')
    .optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;