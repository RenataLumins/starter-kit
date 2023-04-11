import {Tab} from '@ui/blocks/Tabs.jsx'

import {useState} from 'react'

function TabsComponentPage({
	tabs = [
		{
			button: 'Кнопка 1',
			answer: 'Ответ 1'
		},
		{
			button: 'Кнопка 2',
			answer: 'Ответ 2'
		},
		{
			button: 'Кнопка 3',
			answer: 'Ответ 3'
		},
	]
}) {
	const [selectedTab, setSelectedTab] = useState(0)

	return (
		<div className="ui-typography">
			<h1>Tabs</h1>

			<div className='ui-tabs tw-w-full tw-max-w-[300px] '>
				<Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
					<select onChange={(event) => setSelectedTab(event.target.value)} value={selectedTab} className="tw-inline-block md:tw-hidden">
						{tabs.map((value, index) => (
							<option key={index} value={index}>{value['button']}</option>
						))}
					</select>

					<Tab.List className="tw-hidden md:tw-flex tw-space-x-1 tw-rounded-xl tw-bg-blue-900/20 tw-p-1">
						{tabs.map((value, index) => (
							<Tab as="div" key={index} className="tw-flex-grow tw-flex-shrink">
								{({ selected }) => (
									<button
										className={
											selected ? 'tw-bg-white tw-text-blue-700 tw-shadow' : 'tw-text-blue-100 hover:tw-bg-white/[0.12] hover:tw-text-white '
										}
									>
										{value['button']}
									</button>
								)}
							</Tab>
						))}	
					
					</Tab.List>
					<Tab.Panels  className="tw-mt-2">
						{tabs.map((value, index) => (
							<Tab.Panel key={index} className='tw-rounded-xl  tw-p-3 tw-bg-blue-900/20'>
								{value['answer']}
							</Tab.Panel>
						))}
					</Tab.Panels>
				</Tab.Group>
			</div>

			<p>Компонент устанавливаем через <a href='https://headlessui.com/react/disclosure'> headlessui </a> и действуем по документации</p>
		</div>
		)
  }
  
/*
<Tab>
	{({ selected }) => (
		<button
			className={
				selected ? 'tw-bg-white tw-shadow' : 'tw-text-blue-100 hover:tw-bg-white/[0.12] hover:tw-text-white '
			}
		>
			{value['button']}
		</button>
	)}
</Tab>
*/
  export default  TabsComponentPage

  