import { useState } from 'react'
import { logo } from '../constants'
import Input from '../ui/input'

const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

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

					<button className='w-100 btn btn-lg btn-primary mt-2' type='submit'>
						Register
					</button>
				</form>
			</main>
		</div>
	)
}

export default Register
