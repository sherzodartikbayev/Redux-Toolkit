import { configureStore } from '@reduxjs/toolkit'
import ArticleReducer from '../slice/article'
import AuthReducer from '../slice/auth'

export const store = configureStore({
	reducer: {
		auth: AuthReducer,
		article: ArticleReducer,
	},
	devTools: true,
})
