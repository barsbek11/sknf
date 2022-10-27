import { Button } from '../../components/ui/button/button'
import { Input } from '../../components/ui/input/input'
import styles from './forma.module.scss'

export const Forma = ({ isRegistration }) => {
	return (
		<form className={styles.form}>
			{isRegistration && <Input type="name" placeholder="Ваше имя" />}
			<Input type="email" placeholder="E-Mail" />
			<Input type="password" placeholder="Пароль" />
			<Button type="submit">Зарегистрироваться</Button>
		</form>
	)
}
