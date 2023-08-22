import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function AllGitPage() {
	return(
		<div className="ui-typography">
			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'Git',
					},
				]}
			/>
			<h1>all git</h1>
		</div>
	) 
}

export default AllGitPage
