import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	loggedIn: false,
	user: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginUserStart: state => {
			state.isLoading = true
		},
		loginUserSuccess: state => {
			state.isLoading = false
		},
		loginUserFailure: state => {
			state.isLoading = false
		},
	},
})

export const { loginUserStart, loginUserSuccess, loginUserFailure } = authSlice.actions
export default authSlice.reducer
