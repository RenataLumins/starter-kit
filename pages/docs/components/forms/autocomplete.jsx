import {Autocomplete} from '@ui/forms/Autocomplete'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'
import {Singers} from '@db/singers.ts'

function AutocompleteComponentsPage() {
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
						title: 'Autocomplete',
					},
				]}
			/>

			<h1>Autocomplete (Combobox)</h1>

			<p> description </p>

			<Autocomplete
				options={Singers.map((item, index) => ({
					key: item['name'],
					value: index,
				}))}
			/>
		</div>
	)
}

export default AutocompleteComponentsPage
