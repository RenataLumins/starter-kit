
import {Slider} from '@ui/modules/Slider.jsx'

import {Blackpink} from '@db/blackpink.js'

function SliderComponentsPage() {
	const pageOptions = { loop: true }

	return (
		<>
			<div className="ui-typography">
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
							<div className='tw-text-white tw-font-semibold tw-p-[10px] tw-mt-[15px]'>{slide['name']}</div>
						</div>
					))}
				</Slider>
			</div>
		</>
	)
  }
  
  export default  SliderComponentsPage