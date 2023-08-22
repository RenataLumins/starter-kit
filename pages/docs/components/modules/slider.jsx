import {Slider} from '@ui/modules/Slider.jsx'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

import {Blackpink} from '@db/blackpink.ts'

function SliderComponentsPage() {
	const pageOptions = {loop: true}

	return (
		<>
			<div className="ui-typography">
				<Breadcrumbs
					items={[
						{
							title: 'Homepage',
							slug: '/',
						},
						{
							title: 'Modules',
							slug: '/docs/components/modules',
						},
						{
							title: 'Slider',
						},
					]}
				/>
				<h1>Slider</h1>

				<p>npm install embla-carousel-react --save</p>

				<Slider
					className="tw-h-[450px] tw-w-[325px] tw-rounded-xl tw-bg-blue-900/20"
					arrows={true}
					dots={true}
					options={pageOptions}
					autoplay={true}
				>
					{Blackpink.map((slide) => (
						<div
							key={slide['name']}
							style={{
								backgroundImage: 'url(' + (slide['photo'] || 'none') + ')',
							}}
							className={'tw-bg-cover'}
						>
							<div className="tw-mt-[15px] tw-p-[10px] tw-font-semibold tw-text-white">
								{slide['name']}
							</div>
						</div>
					))}
				</Slider>
			</div>
		</>
	)
}

export default SliderComponentsPage
