import styles from './Login.module.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { LoginFields } from './LoginFields'
import { NavLink } from 'react-router-dom'
import { AuthWindow } from '../../ui/auth/AuthWindow'
import { yupResolver } from '@hookform/resolvers/yup'
import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'

const schema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(8).required(),
}).required()

export const Login = () => {
	const { isLoading } = useAuth()
	const { register: registerInput, handleSubmit, formState, reset } = useForm({
		resolver: yupResolver(schema),
	})

	const { login } = useActions()
	const onSubmit = handleSubmit(data => {
		const { email, password, rememberMe } = data
		login({ email, password, rememberMe })
		reset()
	})

	return (
		<AuthWindow subTitle={'Sign In'}>
			<form onSubmit={onSubmit} className={styles.form}>

				<LoginFields formState={formState}
				             register={registerInput}
				/>

				<div className={styles.button}>
					<button className={styles.login} disabled={isLoading} type='submit'>Login</button>
				</div>

			</form>

			<p>Don’t have an account?</p>
			<NavLink to={'/register'}>
				Sign Up
			</NavLink>
		</AuthWindow>
	)
}


