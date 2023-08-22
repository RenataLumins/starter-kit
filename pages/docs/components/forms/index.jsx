import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function AllFormsComponentsPage() {
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
					},
					
				]}
			/>
			<h1>All forms components</h1>
		</div>
	)
}

export default AllFormsComponentsPage
