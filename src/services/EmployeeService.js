import axiois_api from '../utils/request'

const EMPLOYEE_API_BASE_URL = '/employee'

class EmployeeService {
  saveEmployee(employee) {
    return axiois_api.post(EMPLOYEE_API_BASE_URL, employee)
  }
}

export default new EmployeeService()
