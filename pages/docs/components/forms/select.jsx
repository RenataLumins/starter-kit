import {useState} from 'react'

import {Select} from '@ui/forms/Select'
import {Singers} from '@db/singers.ts'

import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function SelectComponentsPage() {
	const [selectedSinger, setSelectedSinger] = useState(null)

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
						title: 'Select',
					},
				]}
			/>
			<h1>Select</h1>

			<p> description</p>

			{typeof selectedSinger == 'number' && (
				<p>
					Selected singer country:{' '}
					{Singers[selectedSinger]?.['country'] || 'We dont know'}
				</p>
			)}

			<Select
				defaultValue={selectedSinger}
				emptyLabel="Choose singers from list"
				setValue={setSelectedSinger}
				options={Singers.map((item, index) => ({
					key: item['name'],
					value: index,
				}))}
			/>
		</div>
	)
}

export default SelectComponentsPage
