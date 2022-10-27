import { Home } from '../page/home/home'
import { Login } from '../page/login/login'
import { Registration } from '../page/registration/registration'
import { Footer } from '../widgets/footer/footer'
import { Header } from '../widgets/header/header'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
	return (
		<>
			<Header title="OGOGO" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Registration />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			<Footer></Footer>
		</>
	)
}
