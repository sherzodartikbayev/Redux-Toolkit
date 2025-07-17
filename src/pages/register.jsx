import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logo } from '../constants'
import AuthService from '../service/auth'
import {
	registerUserFailure,
	registerUserStart,
	registerUserSuccess,
} from '../slice/auth'
import Input from '../ui/input'

const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.auth)

	const registerHandler = async e => {
		e.preventDefault()
		dispatch(registerUserStart())
		const user = { username: name, email, password }

		try {
			const response = await AuthService.userRegister(user)
			console.log(response)
			console.log(user)
			dispatch(registerUserSuccess())
		} catch (error) {
			dispatch(registerUserFailure(error))
		}
	}

	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form>
					<img className='mb-2' src={logo} alt='' width='72' height='60' />
					<h1 className='h3 mb-3 fw-normal'>Please Register</h1>

					<Input
						label={'Username'}
						state={name}
						setState={setName}
						type={'text'}
					/>
					<Input
						label={'Email address'}
						state={email}
						setState={setEmail}
						type={'email'}
					/>
					<Input
						label={'Password'}
						state={password}
						setState={setPassword}
						type={'password'}
					/>

					<button
						className='w-100 btn btn-lg btn-primary mt-2'
						onClick={registerHandler}
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? 'Loading...' : 'Register'}
					</button>
				</form>
			</main>
		</div>
	)
}

export default Register
