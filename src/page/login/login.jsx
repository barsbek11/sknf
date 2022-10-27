import { Forma } from '../../widgets/forma/forma'
import styles from './login.module.scss'

export const Login = () => {
	return (
		<div className={styles.login}>
			<div className={styles.wrapperFormLogin}>
				<h3>Войти</h3>
				<Forma />
			</div>
		</div>
	)
}
