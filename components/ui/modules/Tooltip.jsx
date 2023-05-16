import Tippy from '@tippyjs/react'

const Tooltip = ({content = '', className = '', children = null, ...props}) => {
	return (
		<Tippy className={className} content={content} {...props}>
			{children}
		</Tippy>
	)
}

export {Tooltip}
