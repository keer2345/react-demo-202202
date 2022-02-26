import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
import Employee from './Employee'

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

  const editEmployee = (e, id) => {
    e.preventDefault()
    navigate(`/editEmployee/${id}`)
  }

  const deleteEmployee = (e, id) => {
    e.preventDefault()
    EmployeeService.deleteEmployee(id).then((res) => {
      if (res.data.success) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id)
        })
      }
    })
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
      <div className='flex shadow border-b'>
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
              <th className='text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6 '>
                Operator
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {employees.map((employee) => (
                <Employee
                  employee={employee}
                  key={employee.id}
                  editEmployee={editEmployee}
                  deleteEmployee={deleteEmployee}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  )
}

export default EmployeeList
