import {ExampleCategoryItem} from '@components/exampleCategory/ExampleCategoryItem'
import {ExampleCategoryItemPlaceholder} from '@components/exampleCategory/ExampleCategoryItemPlaceholder'


function SkeletonComponentsPage() {
	return (
		<div className="ui-typography">
			<h1>Skeleton</h1>

			<p>Заглушки ставятся с помощью CSS. Текст оборачивается в span, сами контейнеры не меняем.</p>

			
			<div className="tw-flex tw-flex-col tw-border tw-border-[gray] tw-rounded-[8px] tw-overflow-hidden tw-divide-y tw-divide-[gray]">
				<ExampleCategoryItem />
				
				<ExampleCategoryItemPlaceholder />
			</div>

		</div>
	)
  }
  
  export default  SkeletonComponentsPage