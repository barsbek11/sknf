import { Forma } from '../../widgets/forma/forma'
import styles from './registration.module.scss'

export const Registration = () => {
	return (
		<div className={styles.register}>
			<div className={styles.wrapperFormRegistration}>
				<h3>Создайте свой профиль</h3>
				<Forma isRegistration={true} />
			</div>
		</div>
	)
}
