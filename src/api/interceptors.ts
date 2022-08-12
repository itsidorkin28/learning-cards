import { API_LOCAL_URL, API_HEROKU_URL } from '../config/api.config'
import axios from 'axios'
import { getContentType } from './api.helpers'

export const axiosClassic = axios.create({
	baseURL: API_LOCAL_URL,
	headers: getContentType(),
	withCredentials: true,
})
