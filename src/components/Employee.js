import React from 'react'

const Employee = ({ employee, deleteEmployee }) => {
  return (
    <tr>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{employee.firstName}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{employee.lastName}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{employee.email}</div>
      </td>
      <td className='text-center px-6 py-4 whitespace-nowrap font-medium text-sm'>
        <span className='text-indigo-600 hover:text-indigo-800 px-4'>Edit</span>
        <span
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>
          Delete
        </span>
      </td>
    </tr>
  )
}

export default Employee
