const Message = ({title = '', icon, children, className = '', ...props}) => {
	return (
		<div className={'ui-message ' + className}>
			{icon && (
				<svg
					aria-hidden="true"
					focusable="false"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
				>
					<use xlinkHref={icon}></use>
				</svg>
			)}
			<div className="ui-message-body">
				{title && <h3>{title}</h3>}
				{children && <div>{children}</div>}
			</div>
		</div>
	)
}

export {Message}
