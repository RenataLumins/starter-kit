import {ExampleCategoryItem} from '@components/exampleCategory/ExampleCategoryItem'
import {ExampleCategoryItemPlaceholder} from '@components/exampleCategory/ExampleCategoryItemPlaceholder'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function SkeletonComponentsPage() {
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
						title: 'Skeleton',
					},
				]}
			/>

			<h1>Skeleton</h1>

			<p>
				Заглушки ставятся с помощью CSS. Текст оборачивается в span, сами контейнеры не
				меняем.
			</p>

			<div className="tw-flex tw-flex-col tw-divide-y tw-divide-[gray] tw-overflow-hidden tw-rounded-[8px] tw-border tw-border-[gray]">
				<ExampleCategoryItem />

				<ExampleCategoryItemPlaceholder />
			</div>
		</div>
	)
}

export default SkeletonComponentsPage
