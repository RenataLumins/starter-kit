import Link from 'next/link'

import {useState, useEffect} from 'react'

import {ModalButton} from '@ui/modules/Modal'

import UserMenu from '@components/_app/header/UserMenu'

import {useAtom} from 'jotai'
import {UserState} from '@states/user'

import {Icon} from '@ui/modules/Icon'

function Header() {
	const [user, setUser] = useAtom(UserState)
	const [theme, setTheme] = useState('light')
	const [isToggled, setIsToggled] = useState("value1")

	useEffect(() => {
		setTheme(('theme' in localStorage) ? localStorage['theme'] : 'light')
	}, [])

	const toggleTheme = (newTheme = '') => {
		setIsToggled(isToggled => isToggled == "value1" ? "value2" : "value1")

		switch (theme) {
			case 'dark':
				newTheme = "light"

				break;

			case 'light':
			default:
				newTheme = "dark"

				break;
		}

		localStorage.theme = newTheme

		document.documentElement.classList.remove('tw-' + theme)
		document.documentElement.classList.add('tw-' + newTheme)

		setTheme(newTheme) 

		
	}

	return (
		<header className=" tw-flex tw-justify-between tw-h-[40px] tw-w-full tw-bg-[white] dark:tw-bg-[#424242] dark:tw-text-black tw-pr-[200px] tw-pl-[200px] tw-z-[99] tw-fixed tw-shadow">
			<Link href='/' className='tw-flex tw-items-center tw-flex-shrink-0 tw-gap-[5px]'>
				{ (theme == "light") ?
					<img src="/images/lightpet.jpg" className="tw-h-full" />
					: <img src="/images/darkpet.jpg" className="tw-h-full" />
				}
				<div className="tw-font-pacifico">test</div>

				<Icon
					name="icon-paw-light"
					className="tw-h-[25px] tw-w-[25px] tw-text-primary"
				/>
			</Link>

			<div className='tw-flex tw-w-full tw-items-center tw-justify-end tw-gap-[20px]'>
				{!user && (
					<ModalButton
						target="auth"
						className=" hover:tw-text-[#00b7ff]"
					>
						Вход
					</ModalButton>
				)}

				{user && (
					<UserMenu />
				)}

				<button onClick={() => toggleTheme()} className="tw-px-[8px] tw-py-[4px] tw-ml-[8px] tw-flex tw-gap-[5px] tw-rounded-[8px] tw-border tw-border-solid tw-border-transparent tw-bg-[gray]">
					<Icon
						name="icon-sun"
						className="tw-h-[20px] tw-w-[20px] tw-cursor-pointer tw-text-primary dark:tw-text-white"
					/>
					<Icon
						name="icon-moon"
						className="tw-h-[20px] tw-w-[20px] tw-cursor-pointer tw-text-white dark:tw-text-primary "
					/>
				</button>
			</div>
		</header>
	)
}

export default Header
