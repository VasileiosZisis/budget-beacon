import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getIncomes () {
  try {
    const incomes = await prisma.income.findMany({
      include: {
        category: {
          select: { name: true }
        }
      }
    })
    return incomes
  } catch (error) {
    console.error('Error fetching incomes:', error)
    throw new Error('Failed to fetch incomes')
  }
}

export async function getExpenses () {
  try {
    const expenses = await prisma.expense.findMany({
      include: {
        category: {
          select: { name: true }
        }
      }
    })
    return expenses
  } catch (error) {
    console.error('Error fetching expenses:', error)
    throw new Error('Failed to fetch expenses')
  }
}

export async function getCategories () {
  try {
    const categories = await prisma.category.findMany()
    return categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw new Error('Failed to fetch categories')
  }
}
