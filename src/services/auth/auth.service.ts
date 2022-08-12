import { removeTokenStorage, saveToStorage } from './auth.helpers'
import { IAuthResponse, IRegisterResponse } from '../../store/user/user.interface'
import { axiosClassic } from '../../api/interceptors'
import { getAuthUrl } from '../../config/api.config'

export const AuthService = {
	async register(email: string, password: string) {
		return await axiosClassic.post<IRegisterResponse>(getAuthUrl('/register'), { email, password })
	},

	async login(email: string, password: string, rememberMe: boolean) {
		const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('/login'), { email, password, rememberMe })

		if (response.data.token) {
			saveToStorage(response.data)
		}

		return response
	},

	async authMe() {
		const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('/me'))

		if (response.data.token) {
			saveToStorage(response.data)
		}

		return response
	},

	async logout() {
		const response = await axiosClassic.delete<{ info: string }>(getAuthUrl('/me'))
		if (response.data.info) {
			localStorage.removeItem('user')
			removeTokenStorage()
		}
	},
}
