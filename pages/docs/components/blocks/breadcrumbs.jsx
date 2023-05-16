import {Breadcrumbs} from '@ui/blocks/Breadcrumbs.jsx'

function BreadcrumbsComponentsPage() {
	return (
		<div className="ui-typography">
			<h1>Breadcrumbs</h1>

			<Breadcrumbs
				homeIcon="#icon-house"
				separatorIcon="#icon-angle-right-light"
				items={[
					{
						title: 'Homepage',
						url: '/',
					},
					{
						title: 'Blocks',
						url: '/docs/components/blocks',
					},
					{
						title: 'Breadcrumbs',
					},
				]}
			/>

			<p>
				Создала отдельно компонент Breadcrumbs.jsx, где задала необходимые переменные
				(иконки, и массив с title и url).
				<br /> В коде компонента прохожусь по циклу, чтобы вывести нужные данные.{' '}
			</p>
		</div>
	)
}

export default BreadcrumbsComponentsPage
