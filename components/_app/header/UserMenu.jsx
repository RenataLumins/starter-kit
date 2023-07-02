import Link from 'next/link'
import {Menu} from '@headlessui/react'

import {useAtom} from 'jotai'
import {UserState} from '@states/user'

import { deleteCookie } from 'cookies-next'

function UserMenu() {
	const [user, setUser] = useAtom(UserState)

	return (
		<Menu as="div" className='ui-menu ui-menu-secondary tw-inline-flex' >
			<Menu.Button className="tw-flex tw-w-full tw-items-center tw-h-full  tw-justify-end  hover:tw-text-[#00b7ff]">{user}</Menu.Button>
				<Menu.Items className="ui-menu-items !tw-left-auto !tw-right-0">
					<Menu.Item disabled className='ui-menu-item-active ui-menu-item'>
						<span> Привет, {user}! </span>
					</Menu.Item>
					<Menu.Item className='ui-menu-item'>
						<Link href='/'>
							На главную
						</Link>
					</Menu.Item>
					<Menu.Item disabled className='ui-menu-item'>
						<button> Настройки (недоступно)</button>
					</Menu.Item>
					<Menu.Item className='ui-subbutton ui-menu-item'>
						<button 
							onClick={() => {
								setUser(false) 
								deleteCookie('user') 
							}
						} > 
							Выход 
						</button>
					</Menu.Item>
			</Menu.Items>
		</Menu>
	)

}

export default UserMenu