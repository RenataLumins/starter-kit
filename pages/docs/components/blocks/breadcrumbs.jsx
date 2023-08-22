import {Breadcrumbs} from '@ui/blocks/Breadcrumbs.tsx'

function BreadcrumbsComponentsPage() {
	return (
		<div className="ui-typography">
			<h1>Breadcrumbs</h1>

			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'Blocks',
						slug: '/docs/components/blocks',
					},
					{
						title: 'Breadcrumbs',
					},
				]}
			/>

			<p>
				Создала отдельно компонент Breadcrumbs.jsx, где задала необходимые переменные
				(иконки, и массив с title и slug).
				<br /> В коде компонента прохожусь по циклу, чтобы вывести нужные данные.{' '}
			</p>
		</div>
	)
}

export default BreadcrumbsComponentsPage
