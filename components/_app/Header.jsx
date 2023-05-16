import {ModalButton} from '@ui/modules/Modal'

import UserMenu from '@components/_app/header/UserMenu'

import {useAtom} from 'jotai'
import {UserState} from '@states/user'

function Header() {
	const [user, setUser] = useAtom(UserState)

	return (
		<header className=" tw-flex tw-h-[40px] tw-w-full tw-bg-[#b6b3b3] tw-pr-[200px]">

			{!user && (
				<ModalButton
					target="auth"
					className="tw-flex tw-w-full tw-items-center tw-justify-end hover:tw-text-[white]"
				>
					Вход
				</ModalButton>
			)}

			{user && (
				<UserMenu />
			)}

		</header>
	)
}

export default Header
