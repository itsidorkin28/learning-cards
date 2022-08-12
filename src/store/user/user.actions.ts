import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, IEmailPasswordRemember, IRegisterResponse } from './user.interface'
import { AuthService } from '../../services/auth/auth.service'

export const register = createAsyncThunk<IRegisterResponse, Omit<IEmailPasswordRemember, 'rememberMe'>>('auth/register',
	async (payload, { rejectWithValue }) => {
		try {
			const response = await AuthService.register(payload.email, payload.password)
			return response.data
		} catch (error) {
			return rejectWithValue(error)
		}
	})

export const login = createAsyncThunk<IAuthResponse, IEmailPasswordRemember>('auth/login',
	async (payload, { rejectWithValue }) => {
		try {
			const response = await AuthService.login(payload.email, payload.password, payload.rememberMe)
			return response.data
		} catch (error) {
			return rejectWithValue(error)
		}
	})

export const logout = createAsyncThunk('auth/logout',
	async (_, { rejectWithValue }) => {
		try {
			return await AuthService.logout()
		} catch (error) {
			return rejectWithValue(error)
		}
	})

export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const response = await AuthService.authMe()
			return response.data
		} catch (error) {
			dispatch(logout())
			return rejectWithValue(error)
		}
	})
