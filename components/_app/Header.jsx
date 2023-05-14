import {ModalButton} from '@ui/modules/Modal'

function Header() {
	return (
		<header className="tw-flex tw-h-[40px] tw-w-full tw-bg-[#b6b3b3] tw-pr-[200px]" >
			<ModalButton 
				target="auth" 
				className="tw-flex tw-w-full tw-items-center tw-justify-end  hover:tw-text-[white]"
			>
					Вход
			</ModalButton>
		</header >
	)
}

export default Header
