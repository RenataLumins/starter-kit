import {useState} from 'react'

import {Poll} from '@ui/modules/Poll'

function PollComponentsPage() {
	const [formSend, setFormSend] = useState(false)

	const steps = [
		{
			title: 'Question 1',
			description: 'Description 1',
			answers: [
				{
					type: 'radio',
					name: 'answer-1',
					value: '1',
					label: 'Answer 1',
				},
				{
					type: 'radio',
					name: 'answer-1',
					value: '2',
					label: 'Answer 2',
				},
				{
					type: 'radio',
					name: 'answer-1',
					value: '3',
					label: 'Answer 3',
				},
			],
			buttons: {
				next: {
					text: 'go next',
				},
			},
		},
		{
			title: 'Question 2',
			description: 'Description 2',
			answers: [
				{
					type: 'textarea',
					name: 'comment',
					value: '',
					label: 'Comment',
				},
			],
			buttons: {
				prev: {
					text: 'go back',
				},
				submit: {
					text: 'get my results',
				},
			},
		},
	]

	const submitFunction = async (formData) => {
		console.log('User send form with next data:')
		console.log(formData)

		setFormSend(true)
	}

	return (
		<div className="ui-typography">
			<h1>Poll</h1>

			<p>description</p>

			{!formSend && <Poll steps={steps} submitFunction={submitFunction} />}

			{formSend && (
				<div className="ui-message ui-message-info">Thanks for your attention!</div>
			)}
		</div>
	)
}

export default PollComponentsPage
