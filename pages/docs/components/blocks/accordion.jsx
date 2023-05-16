import {Accordion} from '@ui/blocks/Accordion.jsx'

function AccordionComponentPage({
	accordion = [
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
}) {
	return (
		<div className="ui-typography">
			<h1>Accordion (Disclosure)</h1>

			{Object.entries(accordion).map(([key, value]) => (
				<Accordion title={value['button']}>{value['answer']}</Accordion>
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
