import axios from 'axios'

export const API_URL = 'http://localhost:5555'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config: any) => {
    config.headers.token = localStorage.getItem('token')
    return config
})

export default $api