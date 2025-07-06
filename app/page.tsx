import {
  getIncomes,
  getExpenses,
  getCategories,
  getTotalIncomes,
  getTotalExpenses,
  getIncomeCategories,
  getExpenseCategories
} from '@/lib/controllers/dbController'

async function Home () {
  const incomes = await getIncomes()
  const expenses = await getExpenses()
  const categories = await getCategories()
  const totalIncome = await getTotalIncomes()
  const totalExpenses = await getTotalExpenses()
  const incomeCategories = await getIncomeCategories()
  const expenseCategories = await getExpenseCategories()

  const balance = totalIncome.totalPrice - totalExpenses.totalPrice

  return (
    <div className='container mx-auto p-4'>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div className='bg-neutral-white p-4 rounded'>
          <h2 className='text-xl font-bold mb-2'>Balance</h2>
          <div className='text-lg text-right'>€{balance.toFixed(2)}</div>
          <div className='flex justify-between items-center'>
            <span>Income</span>
            <span>€{totalIncome.totalPrice.toFixed(2)}</span>
          </div>
          <div className='flex justify-between items-center'>
            <span>Spending</span>
            <span>€{totalExpenses.totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div className='bg-neutral-white p-4'>
          <div className='flex justify-start'>
            <h1 className='text-2xl font-bold'>Incomes</h1>
          </div>
          <div className='flex justify-start mt-4'>
            <h2 className='text-lg font-semibold'>Categories</h2>
          </div>
          <ul className='mt-2 w-full'>
            {expenses.map(expense => (
              <li className='w-full flex flex-col items-start' key={expense.id}>
                {expense.category.name}
                <ul className='w-full'>
                  <li className='w-full flex flex-col items-end'>
                    {expense.price.toFixed(2)}
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
