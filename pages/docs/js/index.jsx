import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function AllJSPage() {
	return(
		<div className="ui-typography">
			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'JS',
					},
				]}
			/>
			<h1>all JS</h1>
		</div>
	) 
}

export default AllJSPage
