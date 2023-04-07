import { Listbox } from '@headlessui/react'

import {useState, useEffect} from 'react'

/*
options = [
	{
		'key': 'Some title',
		'value': 1,
	},
	{
		'key': 'Some title 2',
		'value': 2
	}
]
*/

const Select = ({options = [], defaultValue = null, emptyLabel = '', setValue = null, className = '', ...props}) => {
	const [selectedValue, setSelectedValue] = useState(typeof defaultValue == 'number' ? defaultValue : (emptyLabel.length > 0 ? null : options[0]?.['value']))
	const [selectedKey, setSelectedKey] = useState('')

	useEffect(() => {
		let selectedItem = options.find((item) => item['value'] === selectedValue)

		if (selectedItem) {
			setSelectedKey(selectedItem['key'])
		}
		else {
			setSelectedKey(options[0]?.['key'])
		}
	}, [selectedValue])

	useEffect(() => {
		if (setValue) {
			setValue(selectedValue)
		}
	}, [selectedValue, setValue])


	return (
		<Listbox onChange={setSelectedValue} {...props}>
			<Listbox.Button>
				{typeof selectedValue != 'number' ? emptyLabel : selectedKey}
			</Listbox.Button>

			<Listbox.Options>
				{/*
				{emptyLabel.length > 0 && (
					<Listbox.Option
						value={null}
					>
						<li
							className={typeof selectedValue != 'number' ? 'tw-bg-blue-500 tw-text-white' : 'tw-bg-white tw-text-black'}
						>
							{emptyLabel}
						</li>
					</Listbox.Option>
				)}
				*/}


				{Object.keys(options).length > 0 && (
					<>
						{options.map((item, index) => (
							<Listbox.Option
								key={index}
								value={item['value']}
							>
								<li
									className={(selectedValue == item['value']) ? 'tw-bg-blue-500 tw-text-white' : 'tw-bg-white tw-text-black'}
								>
									{item['key']}
								</li>
							</Listbox.Option>
						))}
					</>
				)}
			</Listbox.Options>
		</Listbox>
	)
  }
  
  export {Select}