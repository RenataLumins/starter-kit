import {useState, useEffect} from 'react'

import {getBerries} from '@actions/pokeapi/berries'

import {Table} from '@ui/blocks/Table.jsx'
import {toast} from '@ui/modules/Notifications'

import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'


function ApiJSPage() {
	const [berries, setBerries] = useState([])
	const [loading, setLoading] = useState(false)

	//Пример загрузки данных на стороне клиента
	useEffect(
		() => async () => {
			setLoading(true)

			const response = await getBerries(
				{
					offset: 0,
					limit: 10,
				},
				{method: 'GET'}
			)

			if (response['success']) {
				setBerries(response['body']['results'])
			} else {
				toast.error('Не удалось получить список ягод')
			}

			//setBerries(response)
			setLoading(false)
		},
		[]
	)

	return (
		<div className="ui-typography">
			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'JS',
						slug: '/docs/js',
					},
					{
						title: 'API',
					},
				]}
			/>
			<h1>API</h1>

			<h3>Что такое async</h3>
			<p>
				Async (асинхронность) - показывает, что функция МОЖЕТ выполняться самостоятельно, и
				код не должен ожидать ее выполнения (в нашем случае - возвращение данных)
			</p>
			<p>
				Если функция выполняется асинхронно и, запрашивая её результат, она еще не
				выполнилась - вместо данных она вернет Promise
			</p>
			<p>
				Асинхронность часто используется тогда, когда запрос к АПИ может выполняться долго,
				и в интерфейсе заместо результата можно показать спиннер
			</p>
			<br />
			<p>
				Если в коде нужно дождаться завершения асинхронной функции прежде, чем идти дальше -
				перед её вызовом нужно написать слово <b>await</b>
			</p>

			<br />
			<h3>Правильное наименование ручек</h3>
			<p>
				<b>getObjects</b> - получение массива данных (возможно с пагинацией)
				<br />
				<b>getObject</b> - получение полной информации (карточки) сущности
				<br />
				<b>createObject</b>
				<br />
				<b>deleteObject</b>
				<br />
				<b>updateObject</b>
			</p>
			<br />
			<h3>Пример получения данных из апи:</h3>

			{loading && (
				<div className="ui-spinner ui-spinner-primary tw-h-[24px] tw-w-[24px]"></div>
			)}

			{!loading && (
				<Table>
					{berries.map((item) => (
						<tr key={item['name']}>
							<td>{item['name']}</td>
						</tr>
					))}
				</Table>
			)}
		</div>
	)
}

export default ApiJSPage
