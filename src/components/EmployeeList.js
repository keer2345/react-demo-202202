import React from 'react'

const EmployeeList = () => {
  return (
    <div className='container mx-8 my-8'>
      <div className='h-12'>
        <button
          className='rounded bg-slate-600 text-white px-6 py-2
        font-semibold'>
          Add Employee
        </button>
      </div>
      <div className='shadow border-b'>
        <table className='min-w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6 '>
                First Name
              </th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6 '>
                Last Name
              </th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6 '>
                Email
              </th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6 '>
                Operator
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>aaaa</div>
              </td>
              <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>aaaa</div>
              </td>
              <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>aaaa</div>
              </td>
              <td className='text-left px-6 py-4 whitespace-nowrap font-medium text-sm'>
                <a
                  href='#'
                  className='text-indigo-600 hover:text-indigo-800 px-4'>
                  Edit
                </a>
                <a
                  href='#'
                  className='text-indigo-600 hover:text-indigo-800 '>
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeList
