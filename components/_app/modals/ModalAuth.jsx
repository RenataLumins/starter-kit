import {useForm, Controller} from '@hooks/useForm'

import {useAtom} from 'jotai'
import {UserState} from '@states/user'
import {ModalState} from '@states/modal'

import { setCookie } from 'cookies-next'

import {Input} from '@ui/forms/Input'

function ModalAuth() {
	const [modal, setModal] = useAtom(ModalState)
	const [user, setUser] = useAtom(UserState)

	const {handleSubmit, register, control} = useForm()

	const authUser = (data) => {
		setUser(data['nickname'])
		setCookie('user', data['nickname'])

		setModal(false)
	}

	return (
		<div className="ui-modal ui-modal-primary">
			<div className="tw-flex tw-flex-col tw-justify-center tw-p-[20px]">
				<div className="tw-flex tw-justify-center tw-pb-[30px] tw-text-xl">
					Войти на сайт
				</div>
				<form
					onSubmit={handleSubmit(authUser)}
					className="tw-flex tw-flex-col tw-gap-y-[15px] "
				>
					<Controller
						name="nickname"
						control={control}
						render={({ field }) => (
							<Input placeholder="Nickname" {...field}/>
						)}
					/>

					<Controller
						name="password"
						control={control}
						render={({ field }) => (
							<Input placeholder="Password" type="password" {...field}/>
						)}
					/>

					<button type="submit" className="ui-button tw-min-w-[200px]">
						Войти
					</button>
				</form>
			</div>
		</div>
	)
}

export default ModalAuth
