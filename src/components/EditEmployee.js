import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const EditEmployee = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [employee, setEmployee] = useState({
    id: id,
    firstName: '',
    lastName: '',
    email: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setEmployee({ ...employee, [name]: value })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await EmployeeService.getEmployee(id)
      setEmployee(response.data.data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const reset = (e) => {
    e.preventDefault()
    fetchData()
  }

  const updateEmployee = (e) => {
    e.preventDefault()
    EmployeeService.updateEmployee(employee)
      .then((res) => navigate('/employeeList'))
      .catch((err) => console.log(err))
  }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
      <div className='px-8 py-8 '>
        <div className='font-thin text-2xl tracking-wider '>
          <h1>Edit Employee </h1>
        </div>

        <div className='item-center justify-center h-14 w-full my-4 '>
          <label className='block text-gray-600 text-sm font-normal'>
            First Name
          </label>
          <input
            type='text'
            name='firstName'
            value={employee.firstName}
            onChange={(e) => {
              handleChange(e)
            }}
            className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>

        <div className='item-center justify-center h-14 w-full my-4 '>
          <label className='block text-gray-600 text-sm font-normal'>
            Sub Code
          </label>
          <input
            type='text'
            name='lastName'
            value={employee.lastName}
            onChange={(e) => {
              handleChange(e)
            }}
            className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>

        <div className='item-center justify-center h-14 w-full my-4 '>
          <label className='block text-gray-600 text-sm font-normal'>
            Description
          </label>
          <input
            type='text'
            name='email'
            value={employee.email}
            onChange={(e) => {
              handleChange(e)
            }}
            className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>

        <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
          <button
            onClick={reset}
            className='rounded text-white font-semibold bg-gray-400
           py-2 px-6 hover:bg-gray-600'>
            Reset
          </button>
          <button
            onClick={updateEmployee}
            className='rounded text-white font-semibold bg-green-400
           py-2 px-6 hover:bg-green-600'>
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditEmployee
