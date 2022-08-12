import styles from './Checkbox.module.scss'
import { forwardRef } from 'react'

interface ICheckbox {
	label: string
}

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(({ label, ...props }: ICheckbox, ref) => {
	return (
		<label>
			<input type='checkbox' {...props} ref={ref} />
			{label}
		</label>
	)
})

Checkbox.displayName = 'Checkbox'

export default Checkbox
