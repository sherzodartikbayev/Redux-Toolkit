import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Article from '../components/article'
import ArticleService from '../service/article'
import {
	getArticleFailure,
	getArticleStart,
	getArticleSuccess,
} from '../slice/article'
import Loader from '../ui/loader'

const Home = () => {
	const { articles, isLoading, error } = useSelector(state => state.article)
	const dispatch = useDispatch()

	const getArticles = async () => {
		dispatch(getArticleStart())

		try {
			const response = await ArticleService.getArticles()
			dispatch(getArticleSuccess(response.articles))
		} catch (error) {
			console.log(error)
			dispatch(getArticleFailure(error.response.data.errors))
		}
	}

	useEffect(() => {
		getArticles()
	}, [])

	return (
		<section className=''>
			<div className='container'>
				{isLoading && <Loader />}
				{error && <p className='text-danger'>{error}</p>}

				<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
					{articles &&
						articles.map(article => (
							<Article key={article.id} article={article} getArticles={getArticles} />
						))}
				</div>
			</div>
		</section>
	)
}

export default Home
