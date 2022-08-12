import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { DeepRequired, FieldErrorsImpl, FieldValues } from 'react-hook-form'

export interface IField extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	placeholder: string
	errors?: FieldErrorsImpl<DeepRequired<FieldValues>> | undefined
	errorMessage: string
}
