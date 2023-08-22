import {useState} from 'react'
import {Progress} from '@ui/blocks/Progress.jsx'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

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
						title: 'Progress',
					},
				]}
			/>
			<h1>Progress</h1>

			<p>
				{' '}
				В компоненте Progress задаю переменные &quot;progressLineStyle&quot; (для style, где выводим
				цвет полоски) и &quot;percentage&quot;. По умолчанию &quot;progressLineStyle&quot; является пустым
				массивом, а &quot;percentage&quot; равен нулю
			</p>
			<p>
				Далее нам нужно соединить эти переменные так, чтобы в &quot;progressLineStyle&quot; появился
				ключ width со значением &quot;percentage&quot;. Дeлаем это с помощью useEffect и особой
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
