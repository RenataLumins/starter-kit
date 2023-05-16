import {useState, useEffect} from 'react'

import {useDebounce} from '@hooks/useDebounce'

const Range = ({
	defaultValue,
	min = 1,
	max = 100,
	step = 1,
	setValue = null,
	debounceDelay = 100,
	className = '',
	...props
}) => {
	const [rangeValue, setRangeValue] = useState(defaultValue)
	const debounceValue = useDebounce(rangeValue, debounceDelay)

	const handleChange = (event) => {
		if (setValue) {
			setRangeValue(event.target.value)
		}
	}

	useEffect(() => {
		setValue(debounceValue)
	}, [debounceValue])

	return (
		<div className="tw-w-[100%]">
			<input
				type="range"
				defaultValue={defaultValue}
				min={min}
				max={max}
				step={step}
				onChange={handleChange}
				className={'ui-range ' + className}
				{...props}
			/>
		</div>
	)
}

export {Range}
