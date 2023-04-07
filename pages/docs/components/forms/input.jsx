import {useState} from 'react'

import {Input} from '@ui/forms/Input'

function InputComponentsPage() {
	const [loading, setLoading] = useState(false)
	const [formErrors, setFormErrors] = useState([])

	const sendForm = async (event) => {
		//Предотвращаем перезагрузку страницы из-за отправки формы (встроенное поведение форм в браузере)
		event.preventDefault();

		setLoading(true)

		setTimeout(() => {
			setFormErrors(['fullname', 'address'])

			setLoading(false)
		}, 2000);
	}

	return (
		<div className="ui-typography">
			<h1>Input</h1>

			<p> description</p>

			<form onSubmit={sendForm} className="tw-flex tw-flex-col tw-gap-y-[15px]">
				<input type="text" name="name" className={"ui-input " + (formErrors.includes('name') ? "ui-input-error" : "")} placeholder="Renata" />

				<Input name="fullname" label="Fullname" className={formErrors.includes('fullname') ? "ui-input-error" : ""} placeholder="Kuznetsova" />

				<Input name="address" icon="#icon-house" className={formErrors.includes('address') ? "ui-input-error" : ""} placeholder="Enter your address" />

				<button type="submit" disabled={loading} className="ui-button tw-min-w-[200px]">
					{!loading && (<>Send form</>)}

					{loading && (<div className="ui-spinner ui-spinner-primary tw-w-[24px] tw-h-[24px]"></div>)}
				</button>
			</form>

		</div>
	)
  }
  
  export default  InputComponentsPage