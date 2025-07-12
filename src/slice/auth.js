import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	loggedIn: false,
	user: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// Login
		loginUserStart: state => {
			state.isLoading = true
		},
		loginUserSuccess: state => {},
		loginUserFailure: state => {},
		// Register
		registerUserStart: state => {
			state.isLoading = true
		},
		registerUserSuccess: state => {},
		registerUserFailure: state => {},
	},
})

export const {
	loginUserStart,
	loginUserSuccess,
	loginUserFailure,
	registerUserStart,
	registerUserSuccess,
	registerUserFailure,
} = authSlice.actions
export default authSlice.reducer
