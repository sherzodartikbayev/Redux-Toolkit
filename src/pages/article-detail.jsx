import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ArticleService from '../service/article'
import {
	getArticleDetailFailure,
	getArticleDetailStart,
	getArticleDetailSuccess,
} from '../slice/article'
import Loader from '../ui/loader'

const ArticleDetail = () => {
	const { slug } = useParams()
	const { articleDetail, isLoading, error } = useSelector(
		state => state.article
	)
	const dispatch = useDispatch()

	const getArticleDetail = async () => {
		dispatch(getArticleDetailStart())

		try {
			const response = await ArticleService.getArticleDetail(slug)
			dispatch(getArticleDetailSuccess(response.article))
		} catch (error) {
			dispatch(getArticleDetailFailure(error.response.data.errors))
		}
	}

	useEffect(() => {
		getArticleDetail()
	}, [slug])

	return (
		<section>
			<div className='container'>
				{isLoading && <Loader />}
				{error && <p>{error}</p>}
				{articleDetail && (
					<div>
						<h1>{articleDetail.title}</h1>
						<p>{articleDetail.description}</p>
					</div>
				)}
			</div>
		</section>
	)
}

export default ArticleDetail
