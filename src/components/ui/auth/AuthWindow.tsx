import { FC, ReactNode } from 'react'
import styles from './AuthWindow.module.scss'

interface IAuthWindow {
	children: ReactNode
	title?: string
	subTitle: string
}

export const AuthWindow: FC<IAuthWindow> = ({ children, title = 'Learning Cards', subTitle }) => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{title}</h2>
			<h3 className={styles.subTitle}>{subTitle}</h3>
			{children}
		</div>
	)
}
