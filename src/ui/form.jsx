import { useState } from 'react'
import Input from './input'
import TextArea from './text-area'

const Form = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [body, setBody] = useState('')

	return (
		<form>
			<Input label={'Title'} state={title} setState={setTitle} />

			<TextArea
				label={'Description'}
				state={description}
				setState={setDescription}
			/>

			<TextArea label={'Body'} state={body} setState={setBody} height='300px' />

			<button className='w-100 btn btn-lg btn-primary mt-2' type='submit'>
				Create
			</button>
		</form>
	)
}

export default Form
