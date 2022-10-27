import styles from './home.module.scss'

export const Home = () => {
	return (
		<div className={styles.page}>
			<div className={styles.wrapperFormPage}>
				<div className={styles.category}>
					<ButtonNavigation type="sumbit">Новые</ButtonNavigation>
					<ButtonNavigation type="sumbit">Популярные</ButtonNavigation>
				</div>
				<div className={styles.frame}>
					<div className={styles.posts}></div>
					<div>
						<div className={styles.tags}></div>
						<div className={styles.comments}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

const ButtonNavigation = ({ children }) => {
	return <button className="buttonNavigation">{children}</button>
}

const Posts = () => {
	return (
		<div>
			<img src="" alt="img" />
		</div>
	)
}
