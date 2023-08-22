import {Accordion} from '@ui/blocks/Accordion.jsx'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

interface AccordionProps {
	array: AccordionPanel[],
}

interface AccordionPanel {
	button: string,
	answer: string
}

function AccordionComponentPage({
	array = [
		{
			button: 'Кнопка 1',
			answer: 'Ответ 1',
		},
		{
			button: 'Кнопка 2',
			answer: 'Ответ 2',
		},
		{
			button: 'Кнопка 3',
			answer: 'Ответ 3',
		},
	],
}: AccordionProps) {
	return (
		<div className="ui-typography">

			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'Blocks',
						slug: '/docs/components/blocks',
					},
					{
						title: 'Accordion',
					},
				]}
			/>

			<h1>Accordion (Disclosure)</h1>

			{array.map((item, index) => (
				<Accordion key={index} title={item['button']} >{item['answer']}</Accordion>
			))}

			<p>
				Компонент устанавливаем через{' '}
				<a href="https://headlessui.com/react/disclosure"> headlessui </a> и действуем по
				документации
			</p>
		</div>
	)
}

export default AccordionComponentPage
