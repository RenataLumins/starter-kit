import React, {useState, useEffect, useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Slider = ({
	options = {},
	arrows = false,
	dots = false,
	autoplay = false,
	className = '',
	children = null,
	...props
}) => {
	const [sliderRef, sliderAPI] = useEmblaCarousel(options, [
		Autoplay({
			playOnInit: autoplay,
		}),
	])
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [scrollSnaps, setScrollSnaps] = useState([])

	const prevSlide = useCallback(() => {
		if (sliderAPI) {
			sliderAPI.scrollPrev()
		}
	}, [sliderAPI])

	const nextSlide = useCallback(() => {
		if (sliderAPI) {
			sliderAPI.scrollNext()
		}
	}, [sliderAPI])

	const scrollTo = useCallback((index) => sliderAPI && sliderAPI.scrollTo(index), [sliderAPI])

	const onSelect = useCallback(() => {
		if (!sliderAPI) return
		setSelectedIndex(sliderAPI.selectedScrollSnap())
		setPrevBtnEnabled(sliderAPI.canScrollPrev())
		setNextBtnEnabled(sliderAPI.canScrollNext())
	}, [sliderAPI, setSelectedIndex])

	useEffect(() => {
		if (!sliderAPI) return
		onSelect()
		setScrollSnaps(sliderAPI.scrollSnapList())
		sliderAPI.on('select', onSelect)
		sliderAPI.on('reInit', onSelect)
	}, [sliderAPI, setScrollSnaps, onSelect])

	return (
		<div className={'ui-slider ' + className} ref={sliderRef} {...props}>
			<div className="ui-slider-container tw-h-full">{children}</div>

			{arrows && (
				<>
					<button
						disabled={!prevBtnEnabled}
						onClick={prevSlide}
						className="ui-button tw-absolute tw-left-0 tw-top-[50%] tw--translate-y-1/2 !tw-border-[lightgray] !tw-text-[lightgray] disabled:!tw-opacity-[50%]"
					>
						Prev
					</button>
					<button
						disabled={!nextBtnEnabled}
						onClick={nextSlide}
						className="ui-button tw-absolute tw-right-0 tw-top-[50%] tw--translate-y-1/2 !tw-border-[lightgray] !tw-text-[lightgray] disabled:!tw-opacity-[50%]"
					>
						Next
					</button>
				</>
			)}

			{dots && (
				<div className="ui-slider-dots">
					{scrollSnaps.map((_, index) => (
						<button
							key={index}
							className={'ui-slider-dot'.concat(
								index === selectedIndex
									? ' after:tw-bg-gradient-to-r after:tw-from-violet-500 after:tw-to-fuchsia-500'
									: ''
							)}
							onClick={() => scrollTo(index)}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export {Slider}
