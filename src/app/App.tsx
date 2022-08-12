import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { Login } from '../components/screens/Login/Login'
import { PacksList } from '../components/screens/PacksList'
import { Profile } from '../components/screens/Profile'
import { Register } from '../components/screens/Register/Register'

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<PacksList />} />
				<Route path='profile' element={<Profile />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
			</Routes>
		</Layout>
	)
}

export default App
