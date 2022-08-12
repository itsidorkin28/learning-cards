import styles from './Register.module.scss'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuth } from '../../../hooks/useAuth'
import { useActions } from '../../../hooks/useActions'
import { AuthWindow } from '../../ui/auth/AuthWindow'
import { RegisterFields } from './RegisterFields'


const schema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(8).required(),
	passwordConfirmation: yup.string()
		.oneOf([yup.ref('password'), null]),
}).required()

export const Register = () => {

	const { isLoading } = useAuth()

	const toLogin = () => {

	}

	const { register: registerInput, handleSubmit, formState, reset } = useForm({
		resolver: yupResolver(schema),
	})

	const { register } = useActions()

	const onSubmit = handleSubmit(data => {
		const { email, password } = data
		register({ email, password })
		reset()
	})

	return (
		<AuthWindow subTitle={'Sign Up'}>
			<form onSubmit={onSubmit} className={styles.form}>

				<RegisterFields formState={formState}
				                register={registerInput}
				/>

				<div className={styles.buttons}>
					<button className={styles.login} type='button' disabled={isLoading} onClick={toLogin}>Login</button>
					<button className={styles.register} type='submit' disabled={isLoading}>Register</button>
				</div>

			</form>
		</AuthWindow>
	)
}

