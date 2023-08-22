import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function UseDebounceHooksPage() {
	return (
		<div className="ui-typography">
			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'Hooks',
						slug: '/docs/hooks',
					},
					{
						title: 'useDebounce',
					},
				]}
			/>
			<h1>Хук useDebounce</h1>

			<p>
				{' '}
				Помогает ограничить многочисленную перерисовку компонента. Например, есть функция,
				исполнение которой, предполагает выполнение нескольких сотен движений мышкой в
				минуту или скролл. Это может привести к лагам. Во избежание этого debounce
				использует внутренний таймер, который вызывает callback функцию каждые хх секунд.
			</p>
		</div>
	)
}

export default UseDebounceHooksPage
