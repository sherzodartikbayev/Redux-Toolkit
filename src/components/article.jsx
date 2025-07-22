import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ArticleService from '../service/article'

const Article = ({ article, getArticles }) => {
	const { loggedIn, user } = useSelector(state => state.auth)
	const navigate = useNavigate()

	const deleteArticle = async (slug) => {
		try {
			await ArticleService.removeArticle(slug)
			getArticles()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='col' bis_skin_checked='1'>
			<div className='card h-100 shadow-sm' bis_skin_checked='1'>
				<svg
					aria-label='Placeholder: Thumbnail'
					className='bd-placeholder-img card-img-top'
					height='225'
					preserveAspectRatio='xMidYMid slice'
					role='img'
					width='100%'
					xmlns='http://www.w3.org/2000/svg'
				>
					<rect width='100%' height='100%' fill='#55595c'></rect>
				</svg>
				<div className='card-body' bis_skin_checked='1'>
					<p className='card-text fw-bold m-0'>{article.title}</p>
					<p className='card-text'>{article.description}</p>
				</div>
				<div
					className='card-footer d-flex justify-content-between align-items-center'
					bis_skin_checked='1'
				>
					<div className='btn-group' bis_skin_checked='1'>
						<button
							type='button'
							className='btn btn-sm btn-outline-primary'
							onClick={() => navigate(`article/${article.slug}`)}
						>
							View
						</button>
						{loggedIn && user.username === article.author.username && (
							<>
								<button
									type='button'
									className='btn btn-sm btn-outline-secondary'
								>
									Edit
								</button>
								<button
									type='button'
									className='btn btn-sm btn-outline-danger'
									onClick={() => deleteArticle(article.slug)}
								>
									Delete
								</button>
							</>
						)}
					</div>
					<small className='text-muted fw-bold text-capitalize'>
						{article.author.username}
					</small>
				</div>
			</div>
		</div>
	)
}

export default Article
