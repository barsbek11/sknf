import styles from './input.module.scss'

export const Input = ({ type, placeholder }) => {
	return (
		<input
			className={styles.input}
			type={type}
			placeholder={placeholder}
		></input>
	)
}
