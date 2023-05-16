import Link from 'next/link'
import {Menu} from '@headlessui/react'

import {useRouter} from 'next/router'

const MenuComponent = ({links, children = null, className = '', ...props}) => {
	const router = useRouter()

	return (
		<Menu as="div" className={'ui-menu ' + className} {...props}>
			<Menu.Button className="ui-menu-button">{children}</Menu.Button>
			<Menu.Items className="ui-menu-items">
				{links.map((item, index) => (
					<Menu.Item key={index}>
						<Link
							className={item['link'] == router.asPath ? ' ui-menu-item-active' : ''}
							href={item['link']}
						>
							{item['title']}
						</Link>
					</Menu.Item>
				))}
			</Menu.Items>
		</Menu>
		/*
				//Не забыть: в выпадающем списке подсвечивать активный пункт (текущую страницу), если она есть (по аналогии с примером в сайдбаре)

				let links = [
					{
						'title': 'Homepage',
						'link': '/',
						'icon' '#app-icon-homepage'
					},
					{
						'title': 'Contacts',
						'link': '/contacts',
						'icon' '#app-icon-phone'
					}
				]

				<Menu links={links}>
					some content, which trigger menu show by click on self
				</Menu>
			*/
	)
}

export {MenuComponent}
