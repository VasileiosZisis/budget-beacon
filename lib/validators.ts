import z from 'zod'

export const createCategorySchema = z.object({
  name: z.string(),
  incomes: z.array(z.string()).min(1),
  expenses: z.array(z.string()).min(1)
})
