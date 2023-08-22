import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function AllBlocksComponentsPage() {
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
						},
						
					]}
				/>

			<h1>All blocks components</h1>
		</div>
	)
}

export default AllBlocksComponentsPage
