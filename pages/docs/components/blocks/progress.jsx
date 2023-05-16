import {useState} from 'react'
import {Progress} from '@ui/blocks/Progress.jsx'

function ProgressComponentsPage() {
	const [progressPercentage, setProgressPercentage] = useState(20)

	const addPercents = (percents) => {
		let newPercents = progressPercentage + percents

		if (newPercents > 100) {
			newPercents = 100
		}

		setProgressPercentage(newPercents)
	}

	return (
		<div className="ui-typography">
			<h1>Progress</h1>

			<p>
				{' '}
				В компоненте Progress задаю переменные "progressLineStyle" (для style, где выводим
				цвет полоски) и "percentage". По умолчанию "progressLineStyle" является пустым
				массивом, а "percentage" равен нулю
			</p>
			<p>
				Далее нам нужно соединить эти переменные так, чтобы в "progressLineStyle" появился
				ключ width со значением "percentage". Дeлаем это с помощью useEffect и особой
				функции, которая клонирует ассоциативные массивы: arrayCopy =
				JSON.parse(JSON.stringify(array)).
			</p>

			<Progress
				className="ui-progress-primary"
				progressLineStyle={{backgroundColor: '#00b7ff'}}
				percentage={progressPercentage}
			/>

			<div className="tw-flex tw-max-w-[900px] tw-justify-center">
				<button
					className="ui-button"
					type="button"
					onClick={() => addPercents(10)}
					disabled={progressPercentage == 100 ? true : false}
				>
					Add 10%
				</button>
			</div>
		</div>
	)
}

export default ProgressComponentsPage
