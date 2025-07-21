import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getItem } from './helpers/persistance-storage'
import RootLayout from './layout/root-layout'
import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'
import Register from './pages/register'
import ArticleService from './service/article'
import AuthService from './service/auth'
import {
	getArticleFailure,
	getArticleStart,
	getArticleSuccess,
} from './slice/article'
import { signUserSuccess } from './slice/auth'

const App = () => {
	const dispatch = useDispatch()

	const getUser = async () => {
		try {
			const response = await AuthService.getUser()
			dispatch(signUserSuccess(response.user))
		} catch (error) {
			console.log(error)
		}
	}

	const getArticles = async () => {
		dispatch(getArticleStart())

		try {
			const response = await ArticleService.getArticles()
			dispatch(getArticleSuccess(response.articles))
		} catch (error) {
			console.log(error)
			dispatch(getArticleFailure(error.response.data.errors))
		}
	}

	useEffect(() => {
		const token = getItem('token')
		if (token) getUser()
		getArticles()
	}, [])

	const route = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: '/login',
					element: <Login />,
				},
				{
					path: '/register',
					element: <Register />,
				},
				{
					path: '/profile',
					element: <Profile />,
				},
			],
		},
	])

	return <RouterProvider router={route} />
}

export default App
