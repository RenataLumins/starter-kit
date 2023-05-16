import {Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'

import {useAtom} from 'jotai'
import {ModalState} from '@states/modal'

const ModalButton = ({className = '', children, target, ...props}) => {
	const [modal, setModal] = useAtom(ModalState)

	return (
		<button
			onClick={() => setModal(target)}
			className={'cursor-pointer' + (className ? ' ' + className : '')}
			{...props}
		>
			{children}
		</button>
	)
}

const ModalOverlay = ({children, isOpen, setOpen, className = '', ...props}) => {
	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog
				open={isOpen}
				onClose={() => setOpen(false)}
				as="div"
				className={'ui-overlay ' + className}
			>
				<div className="tw-relative tw-flex tw-min-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center tw-p-[24px]">
					<div
						onClick={() => setOpen(false)}
						className="tw-absolute tw-inset-0 tw-z-10"
					></div>

					{children}
				</div>
			</Dialog>
		</Transition>
	)
}

export {ModalButton, ModalOverlay}
