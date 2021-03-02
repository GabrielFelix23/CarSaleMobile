import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.0.17:8080/task'
})

export default api