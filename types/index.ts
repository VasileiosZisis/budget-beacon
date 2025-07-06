import z from 'zod'
import { createCategorySchema } from '@/lib/validators'

export type Category = z.infer<typeof createCategorySchema> & {
  id: number
  createdAt: Date
  updatedAt: Date
}
