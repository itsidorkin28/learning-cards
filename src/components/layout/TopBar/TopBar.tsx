import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './TopBar.module.scss'
import { useAuth } from '../../../hooks/useAuth'
import { useActions } from '../../../hooks/useActions'

const TopBar = () => {
	const { logout } = useActions()
	const { user } = useAuth()

	return (
		<div className={styles.topBar}>
			<h1 className={styles.appTitle}>Learning Cards</h1>
			<nav>
				<ul>
					<li>
						<NavLink to='/' style={({ isActive }) => {
							return {
								display: 'block',
								margin: '1rem 0',
								color: isActive ? 'red' : '',
							}
						}}>
							Packs list
						</NavLink>
					</li>
					<li>
						<NavLink to='/profile' style={({ isActive }) => {
							return {
								display: 'block',
								margin: '1rem 0',
								color: isActive ? 'red' : '',
							}
						}}>
							Profile
						</NavLink>
					</li>
				</ul>
			</nav>
			{user && <button onClick={logout}>Logout</button>}
		</div>
	)
}

export default TopBar
