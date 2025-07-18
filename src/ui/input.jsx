const Input = ({ label, state, setState, type = "text" }) => {
	return (
		<div className='form-floating' bis_skin_checked='1'>
			<input
				type={type}
				className='form-control'
				value={state}
				onChange={e => setState(e.target.value)}
				id='floatingInput'
				placeholder={label}
			/>
			<label htmlFor='floatingInput'>{label}</label>
		</div>
	)
}

export default Input
