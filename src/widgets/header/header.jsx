import styles from './header.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Typed from 'react-typed'

export const Header = (props) => {
	const [isAuth, setIsAuth] = useState(false)

	const handlerChange = () => {
		setIsAuth(true)
	}

	const handlerChange2 = () => {
		setIsAuth(false)
	}
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.headerLogo}>
				{props.title} |{' '}
				<Typed
					strings={['Blog', 'Bootcamp', 'News']}
					typeSpeed={100}
					backSpeed={100}
				/>
			</Link>
			{isAuth ? (
				<ul className={styles.headerBtnWrapperIsAuth}>
					<li className={styles.signIn}>
						<Link to="/">
							<button>Создать пост</button>
						</Link>
					</li>
					<li className={styles.signUp}>
						<Link to="/">
							<button onClick={handlerChange2}>Выйти</button>
						</Link>
					</li>
				</ul>
			) : (
				<ul className={styles.headerBtnWrapper}>
					<li className={styles.signIn}>
						<Link to="/login">
							<button onClick={handlerChange}>Войти</button>
						</Link>
					</li>
					<li className={styles.signUp}>
						<Link to="/register">
							<button>Создать аккаунт</button>
						</Link>
					</li>
				</ul>
			)}
		</header>
	)
}
