import {Checkbox} from '@ui/forms/Checkbox'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

import {Singers} from '@db/singers.ts'

function CheckboxComponentsPage() {
	return (
		<div className="ui-typography">

			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'Forms',
						slug: '/docs/components/forms',
					},
					{
						title: 'Checkbox',
					},
				]}
			/>
			<h1>Checkbox</h1>

			<p> description</p>

			{Singers.map((value, index) => (
				<Checkbox key={index} className="ui-checkbox ui-span" content={value['name']} />
			))}
		</div>
	)
}

export default CheckboxComponentsPage
