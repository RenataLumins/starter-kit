import {useState, useEffect} from 'react'

import {Table} from '@ui/blocks/Table.jsx'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function TableComponentsPage({
	books = [
		{
			name: 'Вторая жизнь Уве',
			author: 'Фредерик Бакман',
			genre: 'драма, юмор',
			date: '2012',
		},
		{
			name: 'В стране драконов',
			author: 'Мартин Писториус',
			genre: 'автобиография',
			date: '2015',
		},
		{
			name: 'Полианна',
			author: 'Элинор Портер',
			genre: 'детская проза',
			date: '1913',
		},
		{
			name: 'Квартира на двоих',
			author: "Бет О'Лири",
			genre: 'современная проза',
			date: '2020',
		},
		{
			name: 'Зулейха открывает глаза',
			author: 'Гузель Яхина',
			genre: 'роман',
			date: '2015',
		},
		{
			name: 'Чистовик',
			author: 'Сергей Лукьяненко',
			genre: 'фантастика',
			date: '2007',
		},
		{
			name: 'Робинзон Крузо',
			author: 'Даниэль Дефо',
			genre: 'приключения',
			date: '1719',
		},
	],
}) {
	const [rows, setRows] = useState(books)
	const [sort, setSort] = useState(null)

	const sorterBooksMethod = (arrayItem1, arrayItem2) => {
		let sortTypes = sort.split(':')

		switch (sortTypes[0]) {
			case 'name':
				return arrayItem1[sortTypes[0]].localeCompare(arrayItem2[sortTypes[0]])

			default:
				return arrayItem1[sortTypes[0]] - arrayItem2[sortTypes[0]]
		}
	}

	useEffect(() => {
		if (sort) {
			let sortTypes = sort.split(':')

			let sortedArray = [...books]

			sortedArray.sort(sorterBooksMethod)

			if (sortTypes[1] == 'desc') {
				sortedArray.reverse()
			}

			setRows(sortedArray)
		}
	}, [sort])

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
						title: 'Table',
					},
				]}
			/>
			<h1>Table</h1>

			<p>description</p>

			<Table
				sort={sort}
				setSort={setSort}
				headers={[
					{
						title: 'Название',
						className: 'tw-text-left tw-w-[250px]',
						sortBy: 'name',
						sortDir: ['asc', 'desc'],
					},
					{
						title: 'Автор',
						className: 'tw-text-left',
					},
					{
						title: 'Жанр',
						className: 'tw-text-left',
					},
					{
						title: 'Год выпуска',
						className: 'tw-w-[150px]',
						sortBy: 'date',
						sortDir: ['desc', 'asc'],
					},
				]}
			>
				{Object.entries(rows).map(([key, value]) => (
					<tr key={value['name']}>
						<td>{value['name']}</td>
						<td>{value['author']}</td>
						<td>{value['genre']}</td>
						<td className="tw-text-center">{value['date']}</td>
					</tr>
				))}
			</Table>
		</div>
	)
}

export default TableComponentsPage
