import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const EmployeeList = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await EmployeeService.getEmployees()
      setEmployees(response.data.data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <div className='container mx-8 my-8'>
      <div className='h-12'>
        <button
          className='rounded bg-slate-600 text-white px-6 py-2
        font-semibold'
          onClick={() => navigate('/addEmployee')}>
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
          {!loading && (
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td className='text-left px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{employee.firstName}</div>
                  </td>
                  <td className='text-left px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{employee.lastName}</div>
                  </td>
                  <td className='text-left px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{employee.email}</div>
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
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  )
}

export default EmployeeList
