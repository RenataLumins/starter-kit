import {useState} from 'react'


const Toggle = () => {
	const [isToggled, setIsToggled] = useState("value1")

	return (
		<div className='tw-flex tw-flex-col tw-items-start tw-gap-[20px]'>
			<button onClick={() => setIsToggled(isToggled => isToggled == "value1" ? "value2" : "value1")} className="tw-px-[8px] tw-py-[4px] tw-ml-[8px] tw-flex tw-gap-[5px] tw-rounded-[8px] tw-border tw-border-solid tw-border-transparent tw-bg-[gray]">
				<label >
					<input
						type="radio"
						value="value1"
						className="tw-hidden"
						checked={isToggled=="value1"}
						onChange={() => {}}
					/>
					<span className="ui-radio tw-select-none"></span>
				</label>
				<label >
					<input
						type="radio"
						value="value2"
						className="tw-hidden"
						checked={isToggled=="value2"}
						onChange={() => {}}
					/>
					<span className="ui-radio tw-select-none"></span>
				</label>
			</button>
		</div>
	)
}

export {Toggle}