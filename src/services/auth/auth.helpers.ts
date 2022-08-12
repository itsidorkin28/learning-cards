import Cookies from 'js-cookie'
import { IAuthResponse, IToken } from '../../store/user/user.interface'

export const saveTokenStorage = (data: IToken) => {
	Cookies.set('token', data.token)
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokenStorage(data)
	localStorage.setItem('user', JSON.stringify(data))
}

export const removeTokenStorage = () => {
	Cookies.remove('token')
}
