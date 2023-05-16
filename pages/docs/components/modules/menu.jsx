import {MenuComponent} from '@ui/modules/Menu'

function MenuComponentsPage() {
	let links = [
		{
			title: 'Главная страница',
			link: '/',
		},
		{
			title: 'Блоки',
			link: '/docs/components/blocks',
		},
		{
			title: 'Формы',
			link: '/docs/components/forms',
		},
		{
			title: 'Модули',
			link: '/docs/components/modules',
		},
		{
			title: 'Компонент "Меню"',
			link: '/docs/components/modules/menu',
		},
	]

	return (
		<div className="ui-typography">
			<h1>Menu</h1>

			<p>HeadlessUi Menu component.</p>

			<div>
				<MenuComponent
					links={links.map((item) => ({
						link: item['link'],
						title: item['title'],
					}))}
					className="ui-menu-primary"
				>
					Меню
				</MenuComponent>
			</div>
		</div>
	)
}

export default MenuComponentsPage
