import {useState, useEffect} from 'react'
import {Combobox} from '@headlessui/react'

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

const Autocomplete = ({options = [], className = '', ...props}) => {
	const [selectedValue, setSelectedValue] = useState(options[0]['value'])
	const [selectedKey, setSelectedKey] = useState(options[0]['key'])
	const [query, setQuery] = useState('')
	const [filteredOptions, setFilteredOptions] = useState(options)

	useEffect(() => {
		if (query.length == 0) {
			setFilteredOptions(options)
		} else {
			let newOptions = options.filter((item) => {
				return item['key'].toLowerCase().includes(query.toLowerCase())
			})

			setFilteredOptions(newOptions)
		}
	}, [query])

	useEffect(() => {
		//Не совсем правильно, тк. валуе может быть не числом. Нужно проерять, что тип - не нулл
		if (typeof selectedValue == 'number') {
			let selectedOption = options.filter((item) => {
				return item['value'] == selectedValue
			})

			if (selectedOption) {
				setSelectedKey(selectedOption[0]['key'])
			} else {
				setSelectedKey('')
			}
		}
	}, [selectedValue])

	// options.filter(option => (option.toLowerCase().includes(query.toLowerCase()) ))

	return (
		<Combobox value={selectedValue} onChange={setSelectedValue}>
			<Combobox.Input
				className="tw-bg-[red]"
				displayValue={(item) => selectedKey}
				onChange={(event) => setQuery(event.target.value)}
			/>

			<Combobox.Options>
				{filteredOptions.map((item, index) => (
					<Combobox.Option key={index} value={item['value']}>
						{item['key']}
					</Combobox.Option>
				))}
			</Combobox.Options>
		</Combobox>
	)
}

export {Autocomplete}
