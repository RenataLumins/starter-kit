import {useState} from 'react'
import {Range} from '@ui/forms/Range'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function RangeComponentsPage({defaultValue = 0}) {
	const [value, setValue] = useState(defaultValue)

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
						title: 'Range',
					},
				]}
			/>
			<h1>Range</h1>

			<p>description</p>
			<Range defaultValue={defaultValue} setValue={setValue} className="tw-w-[600px]" />

			<p>Value: {value}</p>
		</div>
	)
}

export default RangeComponentsPage
