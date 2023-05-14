
import {Input} from '@ui/forms/Input'

function ModalAuth() {
	return (
		<div className="ui-modal ui-modal-primary" >
			<div className='tw-flex tw-flex-col tw-justify-center'>
				<div className='tw-flex tw-justify-center tw-pb-[20px] tw-text-xl'>Войти на сайт</div>
				<form  className="tw-flex tw-flex-col tw-gap-y-[15px] ">
					<Input name="nickname"  placeholder="Nickname" />

					<Input name="password"  placeholder="Password" />

					<button type="submit" className="ui-button tw-min-w-[200px]">
						Войти
					</button>
				</form>
			</div>	
		</div>
	)

}

export default ModalAuth