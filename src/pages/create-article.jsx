import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ArticleService from '../service/article'
import {
	postArticleFailure,
	postArticleStart,
	postArticleSuccess,
} from '../slice/article'
import ArticleForm from '../ui/article-form'

const CreateArticle = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [body, setBody] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const formSubmit = async e => {
		e.preventDefault()
		const article = { title, description, body }
		dispatch(postArticleStart())

		try {
			await ArticleService.postArticle(article)
			dispatch(postArticleSuccess())
			navigate('/')
		} catch (error) {
			dispatch(postArticleFailure())
			console.log(error)
		}
	}

	const formProps = {
		title,
		setTitle,
		description,
		setDescription,
		body,
		setBody,
		formSubmit,
	}

	return (
		<section>
			<div className='container text-center'>
				<h1 className='fs-2'>Create article</h1>

				<div className='w-75 mx-auto'>
					<ArticleForm {...formProps} />
				</div>
			</div>
		</section>
	)
}

export default CreateArticle
