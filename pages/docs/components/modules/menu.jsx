import {MenuComponent} from '@ui/modules/Menu'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

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
			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'Modules',
						slug: '/docs/components/modules',
					},
					{
						title: 'Menu',
					},
				]}
			/>
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
