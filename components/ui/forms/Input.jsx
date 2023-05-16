const Input = ({type = 'text', name, label = '', icon = '', className = '', ...props}) => {
	return (
		<div className="">
			{label && (
				<label htmlFor={name} className="ui-label">
					{label}
				</label>
			)}

			<div className={'ui-input ' + className}>
				{icon && (
					<svg
						aria-hidden="true"
						focusable="false"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
					>
						<use xlinkHref={icon} />
					</svg>
				)}

				<input type={type} name={name} {...props} />
			</div>
		</div>
	)
}

export {Input}
