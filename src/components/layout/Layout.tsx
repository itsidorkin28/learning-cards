import { FC } from 'react'
import { ILayout } from './Layout.interface'
import TopBar from './TopBar/TopBar'
import styles from './Layout.module.scss'

const Layout: FC<ILayout> = ({ children }): JSX.Element => {
	return (
		<div className={styles.layout}>
			<TopBar />
			<div className={styles.content}>
				{children}
			</div>
		</div>
	)
}

export default Layout
