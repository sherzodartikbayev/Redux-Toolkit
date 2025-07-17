import axios from './api'

const AuthService = {
	async userRegister(user) {
		const { data }  = await axios.post('/users', { user })
		return data
	},

	async userLogin(user) {
		const respoonse = await axios.post('/users/login', { user })
		return respoonse
	},

	async getUser() {
		// const respoonse = await axios.get('/user')
	},
}

export default AuthService
