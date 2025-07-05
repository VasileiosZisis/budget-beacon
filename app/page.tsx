import {
  getIncomes,
  getExpenses,
  getCategories
} from '@/lib/controllers/dbController'

async function Home () {
  const incomes = await getIncomes()
  const expenses = await getExpenses()
  const categories = await getCategories()

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Financial Dashboard</h1>

      <h2 className='text-xl font-semibold mb-2'>Categories</h2>
      <table className='w-full mb-6 border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border border-gray-300 p-2'>ID</th>
            <th className='border border-gray-300 p-2'>Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td className='border border-gray-300 p-2'>{category.id}</td>
              <td className='border border-gray-300 p-2'>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className='text-xl font-semibold mb-2'>Incomes</h2>
      <table className='w-full mb-6 border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border border-gray-300 p-2'>ID</th>
            <th className='border border-gray-300 p-2'>Name</th>
            <th className='border border-gray-300 p-2'>Price</th>
            <th className='border border-gray-300 p-2'>Category</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map(income => (
            <tr key={income.id}>
              <td className='border border-gray-300 p-2'>{income.id}</td>
              <td className='border border-gray-300 p-2'>{income.name}</td>
              <td className='border border-gray-300 p-2'>
                ${income.price.toString()}
              </td>
              <td className='border border-gray-300 p-2'>
                {income.category.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className='text-xl font-semibold mb-2'>Expenses</h2>
      <table className='w-full border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border border-gray-300 p-2'>ID</th>
            <th className='border border-gray-300 p-2'>Name</th>
            <th className='border border-gray-300 p-2'>Price</th>
            <th className='border border-gray-300 p-2'>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td className='border border-gray-300 p-2'>{expense.id}</td>
              <td className='border border-gray-300 p-2'>{expense.name}</td>
              <td className='border border-gray-300 p-2'>
                ${expense.price.toString()}
              </td>
              <td className='border border-gray-300 p-2'>
                {expense.category.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
