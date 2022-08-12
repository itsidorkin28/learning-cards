import { forwardRef } from 'react'
import { IField } from './Field.interface'
import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(({
	                                                    placeholder,
	                                                    errors,
	                                                    errorMessage,
	                                                    type = 'text',
	                                                    ...props
                                                    }: IField, ref): JSX.Element => {
	return (
		<>
			<label className={styles.label}>{placeholder}</label>
			<input type={type} {...props} ref={ref}
			       placeholder={placeholder} className={styles.input}
			/>
			{errors && <span className={styles.error}>{errorMessage}</span>}
		</>
	)
})

Field.displayName = 'Field'

export default Field
