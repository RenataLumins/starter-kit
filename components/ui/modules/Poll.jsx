import {useState, Fragment} from 'react'

const Poll = ({steps = {}, currentStep = 0, submitFunction = null, className = '', ...props}) => {
	const [activeStep, setActiveStep] = useState(currentStep)

	function renderField(field) {
		switch (field['type']) {
			case 'text':
				return (
					<>
						{field['label'] && <label for={field['name']}>{field['label']}</label>}
						<input
							type="text"
							name={field['name']}
							defaultValue={field['value']}
							className="ui-input"
						/>
					</>
				)
				break

			case 'checkbox':
				return (
					<>
						<input type="checkbox" name={field['name']} defaultValue={field['value']} />

						{field['label'] && <span>{field['label']}</span>}
					</>
				)
				break

			case 'radio':
				return (
					<label>
						<input type="radio" name={field['name']} defaultValue={field['value']} />

						{field['label'] && <span>{field['label']}</span>}
					</label>
				)
				break

			case 'textarea':
				return (
					<>
						{field['label'] && <label for={field['name']}>{field['label']}</label>}

						<textarea name={field['name']}>{field['value']}</textarea>
					</>
				)

				break
		}
	}

	const sendForm = async (event) => {
		//Предотвращаем перезагрузку страницы из-за отправки формы (встроенное поведение форм в браузере)
		event.preventDefault()

		if (submitFunction) {
			//js get submit form data from event данные формы взять из эвента
			submitFunction(event.target.elements)
		}
	}

	return (
		<form onSubmit={sendForm} className="ui-poll">
			{steps.map((step, index) => (
				<div className={'ui-poll-step ' + (index != activeStep ? 'tw-hidden' : '')}>
					{step['title'] && <h2>{step['title']}</h2>}

					{step['description'] && <div>{step['description']}</div>}

					{step['answers'] && (
						<div>
							{step['answers'].map((field, index) => (
								<Fragment key={index}>{renderField(field)}</Fragment>
							))}
						</div>
					)}

					{index > 0 && step['buttons']['prev'] && (
						<button
							type="button"
							className="ui-button"
							onClick={() => setActiveStep(index - 1)}
						>
							{step['buttons']['prev']['text']}
						</button>
					)}

					{index != steps.length - 1 && step['buttons']['next'] && (
						<button
							type="button"
							className="ui-button"
							onClick={() => setActiveStep(index + 1)}
						>
							{step['buttons']['next']['text']}
						</button>
					)}

					{index == steps.length - 1 && step['buttons']['submit'] && (
						<button type="submit" className="ui-button">
							{step['buttons']['submit']['text']}
						</button>
					)}
				</div>
			))}
		</form>
	)
}

export {Poll}
