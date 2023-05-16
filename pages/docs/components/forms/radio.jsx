import {useState, Fragment} from 'react'
import {RadioGroup} from '@ui/forms/Radio'
import {Icon} from '@ui/modules/Icon'

import {Singers} from '@db/singers.js'

function RadioComponentsPage() {
	let [selected, setSelected] = useState()

	return (
		<div className="ui-typography">
			<h1>Radio</h1>

			<p>Описание, что такое радио</p>

			<p>Стилизация нативных input type="radio" с помощью CSS</p>

			<form className="tw-flex tw-flex-col  ">
				{Singers.map((singer) => (
					<label key={singer['name']}>
						<input
							type="radio"
							value={singer['name']}
							name="singer"
							className="tw-hidden"
						/>
						<span className="ui-radio tw-select-none">{singer['name']}</span>
					</label>
				))}
			</form>

			<p>
				Кастомный компонент Radio, с помощью которого мы можем стилизовать произвольную
				html-структуру как radio-кнопку
			</p>

			<form>
				<RadioGroup className="tw-flex tw-flex-col tw-gap-y-[30px]">
					<RadioGroup.Label>Choose a singer:</RadioGroup.Label>
					{Singers.map((singer) => (
						<RadioGroup.Option value={singer['name']}>
							{({checked}) => (
								<div
									className={
										'tw-flex tw-items-center tw-justify-between tw-gap-x-[20px] tw-rounded-[8px] tw-border tw-p-[20px] ' +
										(checked
											? 'tw-border-[blue]'
											: 'tw-cursor-pointer tw-border-[gray]')
									}
								>
									<div className="tw-flex tw-flex-col tw-gap-y-[10px]">
										<div className="tw-text-[20px]">{singer['name']}</div>
										<div>Country: {singer['country']}</div>
									</div>

									{checked && (
										<Icon
											name="icon-circle-check"
											className="tw-h-[30px] tw-w-[30px] tw-text-[blue]"
										/>
									)}
								</div>
							)}
						</RadioGroup.Option>
					))}
				</RadioGroup>
			</form>
		</div>
	)
}

export default RadioComponentsPage
