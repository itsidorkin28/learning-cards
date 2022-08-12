import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import Checkbox from '../../ui/form-elements/Checkbox/Checkbox'
import Field from '../../ui/form-elements/Field/Field'

interface ILoginFields {
	register: UseFormRegister<any>
	formState: FormState<any>
}

export const LoginFields: FC<ILoginFields> = ({ register, formState: { errors } }) => {
	return (
		<>
			<Field placeholder={'Email'}
			       type={'email'}
			       errors={errors.email}
			       errorMessage={'Email is invalid!'}
			       {...register('email', { required: true })} />

			<Field placeholder={'Password'}
			       type={'password'}
			       errors={errors.password}
			       errorMessage={'The password must contain at least 8 characters!'}
			       {...register('password', { required: true })} />

			<Checkbox label={'Remember me'} {...register('rememberMe')} />
		</>
	)
}
