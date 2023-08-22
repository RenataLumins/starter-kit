import {Video} from '@ui/blocks/Video'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function VideoComponentsPage() {
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
						slug: '/docs/components/blocks',
					},
					{
						title: 'Video',
					},
				]}
			/>

			<h1>Video</h1>

			<p>
				{' '}
				npm install react-player
				<br />
				Подойдет любой плеер в зависимости от того, как детально нужно настроить и какой
				нужен источник (youtube и т.д.).
			</p>

			<Video url="https://www.youtube.com/watch?v=9pdj4iJD08s" />
		</div>
	)
}

export default VideoComponentsPage
