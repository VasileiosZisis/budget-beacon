import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main () {
  const uncategorized = await prisma.category.upsert({
    where: { name: 'Uncategorized' },
    update: {},
    create: { name: 'Uncategorized' }
  })

  const utilities = await prisma.category.upsert({
    where: { name: 'Utilities' },
    update: {},
    create: { name: 'Utilities' }
  })

  await prisma.income.upsert({
    where: { name: 'Job' },
    update: { price: 1200, totalPrice: 1200, categoryId: uncategorized.id },
    create: {
      name: 'Job',
      price: 1200,
      totalPrice: 1200,
      categoryId: uncategorized.id
    }
  })

  await prisma.expense.upsert({
    where: { name: 'Rent' },
    update: { price: 250, totalPrice: 250, categoryId: utilities.id },
    create: {
      name: 'Rent',
      price: 250,
      totalPrice: 250,
      categoryId: utilities.id
    }
  })

  await prisma.expense.upsert({
    where: { name: 'Market' },
    update: { price: 400, totalPrice: 400, categoryId: uncategorized.id },
    create: {
      name: 'Market',
      price: 400,
      totalPrice: 400,
      categoryId: uncategorized.id
    }
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
