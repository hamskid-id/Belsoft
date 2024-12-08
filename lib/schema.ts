import * as z from 'zod'

export const SponsorFormSchema = z.object({
  company: z.string().min(1, { message: 'Company field is required.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' })
    .min(1, { message: 'Email field is required.' }),

  name: z.string().min(1, { message: 'Name is required.' }),

  phone: z
    .string()
    .min(1, { message: 'Phone number is required.' })
    .regex(/^\+?[0-9]\d{1,14}$/, {
      message: 'Please enter a valid phone number.'
    })
})
