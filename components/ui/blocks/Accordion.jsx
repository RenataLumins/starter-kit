import {Disclosure} from '@headlessui/react'

const Accordion = ({title = '', children, className = '', ...props}) => {
	return (
		<Disclosure
			as="div"
			className={'ui-accordion' + (className && ' ' + className)}
			tabIndex="1"
			{...props}
		>
			{({open}) => (
				<>
					<Disclosure.Button className=" tw-group tw-flex tw-w-full tw-items-center tw-gap-x-[6px]">
						<div className="ui-accordion-title">{title}</div>
						<svg
							aria-hidden="true"
							focusable="false"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							className={"tw-flex-grow-0 tw-flex-shrink-0 tw-transition-opacity tw-duration-200" + (open ? ' tw-rotate-180' : ' tw-opacity-0 group-hover:tw-opacity-100')}
						>
							<use xlinkHref={'#icon-chevron-down'}></use>
						</svg>
					</Disclosure.Button>
					<Disclosure.Panel>{children}</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

export {Accordion}
