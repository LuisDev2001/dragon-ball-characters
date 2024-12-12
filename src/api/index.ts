import axios from 'axios'

const API = axios.create({
  baseURL: 'https://dragonball-api.com/api'
})

export default API