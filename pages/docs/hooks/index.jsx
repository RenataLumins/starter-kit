import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function AllHooksPage() {
	return(
		<div className="ui-typography">
			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'Hooks',
					},
				]}
			/>
			<h1>all hooks</h1>
		</div>
	) 
}

export default AllHooksPage
