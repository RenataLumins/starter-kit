import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function AllNextJSPage() {
	return(
		<div className="ui-typography">
			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'Next JS',
					},
				]}
			/>
			<h1>all Next JS</h1>
		</div>
	) 
}

export default AllNextJSPage
