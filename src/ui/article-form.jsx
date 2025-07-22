import { useSelector } from 'react-redux'
import Input from './input'
import TextArea from './text-area'

const ArticleForm = props => {
	const {
		title,
		setTitle,
		description,
		setDescription,
		body,
		setBody,
		formSubmit,
	} = props

	const { isLoading } = useSelector(state => state.article)

	return (
		<form>
			<Input label={'Title'} state={title} setState={setTitle} />

			<TextArea
				label={'Description'}
				state={description}
				setState={setDescription}
			/>

			<TextArea label={'Body'} state={body} setState={setBody} height='300px' />

			<button
				className='w-100 btn btn-lg btn-primary mt-2'
				type='submit'
				onClick={formSubmit}
				disabled={isLoading}
			>
				{isLoading ? 'Loading...' : 'Create'}
			</button>
		</form>
	)
}

export default ArticleForm
