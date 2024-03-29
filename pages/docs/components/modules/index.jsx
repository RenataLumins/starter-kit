import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function AllModulesComponentsPage() {
	return(
		<div className="ui-typography">
			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'Modules',
					},
				]}
			/>
			<h1>all components</h1>
		</div>
	) 
}

export default AllModulesComponentsPage
