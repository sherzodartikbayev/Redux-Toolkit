import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ArticleService from '../service/article'
import {
	getArticleDetailFailure,
	getArticleDetailStart,
	getArticleDetailSuccess,
	postArticleFailure,
	postArticleStart,
	postArticleSuccess,
} from '../slice/article'
import ArticleForm from '../ui/article-form'

const EditArticle = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [body, setBody] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { slug } = useParams()

	useEffect(() => {
		const getArticleDetail = async () => {
			dispatch(getArticleDetailStart())
			try {
				const response = await ArticleService.getArticleDetail(slug)
				setTitle(response.article.title)
				setDescription(response.article.description)
				setBody(response.article.body)
				dispatch(getArticleDetailSuccess(response.article))
			} catch (error) {
				dispatch(getArticleDetailFailure(error.response.data.errors))
			}
		}

		getArticleDetail()
	}, [])

	const formSubmit = async e => {
		e.preventDefault()
		const article = { title, description, body }
		dispatch(postArticleStart())

		try {
			await ArticleService.editArticle(slug, article)
			dispatch(postArticleSuccess())
			navigate('/')
		} catch (error) {
			console.log(error)
			dispatch(postArticleFailure())
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
				<h1 className='fs-2'>Edit article</h1>
				<div className='w-75 mx-auto'>
					<ArticleForm {...formProps} />
				</div>
			</div>
		</section>
	)
}

export default EditArticle
