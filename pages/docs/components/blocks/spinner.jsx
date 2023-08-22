import {Spinner} from '@ui/blocks/Spinner.jsx'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function SpinnerComponentsPage() {
	return (
		<div className="ui-typography">

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
						title: 'Spinner',
					},
				]}
			/>

			<h1>Spinner</h1>

			<p> Компонент Spinner создан чисто с помощью CSS.</p>

			<Spinner />
		</div>
	)
}

export default SpinnerComponentsPage
