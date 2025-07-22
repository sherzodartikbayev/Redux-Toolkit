import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getItem } from './helpers/persistance-storage'
import RootLayout from './layout/root-layout'
import ArticleDetail from './pages/article-detail'
import CreateArticle from './pages/create-article'
import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'
import Register from './pages/register'
import AuthService from './service/auth'
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

	useEffect(() => {
		const token = getItem('token')
		if (token) getUser()
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
				{
					path: '/article/:slug',
					element: <ArticleDetail />,
				},
				{
					path: '/create-article/',
					element: <CreateArticle />,
				},
			],
		},
	])

	return <RouterProvider router={route} />
}

export default App
