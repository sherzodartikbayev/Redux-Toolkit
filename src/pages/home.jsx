import { useSelector } from 'react-redux'
import Article from '../components/article'
import Loader from '../ui/loader'

const Home = () => {
	const { articles, isLoading, error } = useSelector(state => state.article)

	return (
		<section className=''>
			<div className='container'>
				{isLoading && <Loader />}
				{error && <p className='text-danger'>{error}</p>}

				<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
					{articles &&
						articles.map(article => (
							<Article key={article.id} article={article} />
						))}
				</div>
			</div>
		</section>
	)
}

export default Home
