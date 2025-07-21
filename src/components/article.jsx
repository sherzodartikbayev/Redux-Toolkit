const Article = ({ article }) => {
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
					<p className='card-text fw-bold'>{article.title}</p>
					<p className='card-text'>{article.description}</p>
					<div
						className='d-flex justify-content-between align-items-center'
						bis_skin_checked='1'
					>
						<div className='btn-group' bis_skin_checked='1'>
							<button
								type='button'
								className='btn btn-sm btn-outline-primary'
							>
								View
							</button>
							<button
								type='button'
								className='btn btn-sm btn-outline-secondary'
							>
								Edit
							</button>
							<button type='button' className='btn btn-sm btn-outline-danger'>
								Delete
							</button>
						</div>
						<small className='text-muted fw-bold text-capitalize'>
							{article.author.username}
						</small>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Article
