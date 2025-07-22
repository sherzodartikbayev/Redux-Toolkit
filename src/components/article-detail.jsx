import moment from 'moment'
import { Link } from 'react-router-dom'

const ArticleDetailItem = ({ detail }) => {
	return (
		<div className='mb-4 rounded-3' bis_skin_checked='1'>
			<div className='container-fluid py-5' bis_skin_checked='1'>
				<h1 className='display-5 fw-bold'>{detail.title}</h1>
				<p className='col-md-8 fs-4'>{detail.description}</p>

				<p className='text-muted'>
					<span className='fw-bold'>Created at:</span>{' '}
					{moment(detail.createdAt).format('DD MMM, YYYY')}
				</p>

				<p>{detail.body}</p>

				<div className='col-md-6'>
					<div className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
						<div className='col p-4 d-flex flex-column position-static'>
							<strong className='d-inline-block mb-2 text-primary text-uppercase'>
								{detail.author.username}
							</strong>
							<p className='card-text mb-auto'>{detail.author.bio}</p>
						</div>
						<div className='col-auto d-none d-lg-block'>
							<svg
								className='bd-placeholder-img'
								width='200'
								height={'100%'}
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								aria-label='Placeholder: Thumbnail'
								preserveAspectRatio='xMidYMid slice'
								focusable='false'
							>
								<title>Placeholder</title>
								<rect width='100%' height='100%' fill='#55595c'></rect>
								<text
									x={'45%'}
									y={'53%'}
									fill={'#fff'}
									className='fs-2 text-uppercase p-0 m-0'
								>
									{detail.author.username[0]}
								</text>
							</svg>
						</div>
					</div>
				</div>

				<Link to={'/'}>
					<button class='btn btn-primary btn-lg' type='button'>
						Example button
					</button>
				</Link>
			</div>
		</div>
	)
}

export default ArticleDetailItem
