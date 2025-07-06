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

export async function getTotalIncomes () {
  try {
    const [priceSum, totalPriceSum] = await Promise.all([
      prisma.income.aggregate({
        _sum: { price: true }
      }),
      prisma.income.aggregate({
        _sum: { totalPrice: true }
      })
    ])
    return {
      totalPrice: Number(priceSum._sum.price) || 0,
      totalPriceAggregate: Number(totalPriceSum._sum.totalPrice) || 0
    }
  } catch (error) {
    console.error('Error calculating income summary:', error)
    throw new Error('Failed to calculate income summary')
  }
}

export async function getTotalExpenses () {
  try {
    const [priceSum, totalPriceSum] = await Promise.all([
      prisma.expense.aggregate({
        _sum: { price: true }
      }),
      prisma.expense.aggregate({
        _sum: { totalPrice: true }
      })
    ])
    return {
      totalPrice: Number(priceSum._sum.price) || 0,
      totalPriceAggregate: Number(totalPriceSum._sum.totalPrice) || 0
    }
  } catch (error) {
    console.error('Error calculating expense summary:', error)
    throw new Error('Failed to calculate expense summary')
  }
}

export async function getIncomeCategories () {
  try {
    const categories = await prisma.category.findMany({
      where: {
        incomes: {
          some: {}
        }
      },
      select: {
        id: true,
        name: true
      },
      orderBy: {
        name: 'asc'
      }
    })
    return categories
  } catch (error) {
    console.error('Error fetching income categories:', error)
    throw new Error('Failed to fetch income categories')
  }
}

export async function getExpenseCategories () {
  try {
    const categories = await prisma.category.findMany({
      where: {
        expenses: {
          some: {}
        }
      },
      select: {
        id: true,
        name: true
      },
      orderBy: {
        name: 'asc'
      }
    })
    return categories
  } catch (error) {
    console.error('Error fetching expense categories:', error)
    throw new Error('Failed to fetch expense categories')
  }
}
