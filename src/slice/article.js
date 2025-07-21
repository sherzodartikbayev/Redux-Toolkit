import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	articles: [],
	isLoading: false,
	error: '',
	articleDetail: null,
}

const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		getArticleStart: state => {
			state.isLoading = true
		},
		getArticleSuccess: (state, action) => {
			state.isLoading = false
			state.articles = action.payload
		},
		getArticleFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		getArticleDetailStart: state => {
			state.isLoading = true
		},
		getArticleDetailSuccess: (state, action) => {
			state.isLoading = false
			state.articleDetail = action.payload
		},
		getArticleDetailFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const {
	getArticleStart,
	getArticleSuccess,
	getArticleFailure,
	getArticleDetailStart,
	getArticleDetailSuccess,
	getArticleDetailFailure,
} = articleSlice.actions
export default articleSlice.reducer
