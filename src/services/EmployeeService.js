import axios_api from '../utils/request'

const EMPLOYEE_API_BASE_URL = '/employee'

class EmployeeService {
  saveEmployee(employee) {
    return axios_api.post(EMPLOYEE_API_BASE_URL, employee)
  }
  getEmployees() {
    return axios_api.get(EMPLOYEE_API_BASE_URL)
  }
  deleteEmployee(id){
    return axios_api.delete(EMPLOYEE_API_BASE_URL+"/"+id)
  }
}

export default new EmployeeService()
