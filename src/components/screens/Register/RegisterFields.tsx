import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import Field from '../../ui/form-elements/Field/Field'

interface IRegisterFields {
	register: UseFormRegister<any>
	formState: FormState<any>
}

export const RegisterFields: FC<IRegisterFields> = ({ register, formState: { errors } }) => {
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

			<Field placeholder={'Confirm password'}
			       type={'password'}
			       errors={errors.passwordConfirmation}
			       errorMessage={'Your passwords do not match!'}
			       {...register('passwordConfirmation', { required: true })} />
		</>
	)
}
