// https://www.bezkoder.com/axios-interceptors-refresh-token/

import axios from 'axios'

/**
 * 网络请求配置
 */
const axiois_api = axios.create({
  baseURL: '/api',
  timeout: 60000, //ms
  headers: {
    'Context-Type': 'application/json'
  }
})


export default axiois_api