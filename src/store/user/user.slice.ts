import { IInitialState } from './user.interface'
import { createSlice } from '@reduxjs/toolkit'
import { checkAuth, login, logout, register } from './user.actions'
import { getStoreLocal } from '../../utils/local-storage'

const initialState: IInitialState = {
	isLoading: false,
	user: getStoreLocal('user'),
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(register.pending, state => {
			state.isLoading = true
		}).addCase(register.fulfilled, state => {
			state.isLoading = false
			state.user = null
		}).addCase(register.rejected, state => {
			state.isLoading = false
			state.user = null
		})

		builder.addCase(login.pending, state => {
			state.isLoading = true
		}).addCase(login.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.user = payload
		}).addCase(login.rejected, state => {
			state.isLoading = false
			state.user = null
		})

		builder.addCase(logout.fulfilled, state => {
			state.isLoading = false
			state.user = null
		})

		builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
			state.user = payload
		}).addCase(checkAuth.rejected, state => {
			state.user = null
		})
	},
})

export const { reducer } = userSlice
