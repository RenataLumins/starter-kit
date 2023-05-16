import {ExampleCategoryItem} from '@components/exampleCategory/ExampleCategoryItem'
import {ExampleCategoryItemPlaceholder} from '@components/exampleCategory/ExampleCategoryItemPlaceholder'

function SkeletonComponentsPage() {
	return (
		<div className="ui-typography">
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
