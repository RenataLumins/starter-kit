import {useState, useEffect} from 'react'

const Table = ({className = '', children = null, headers = {}, sort = null, setSort = null, ...props}) => {
	const [currentSortBy, setCurrentSortBy] = useState(null)
	const [currentSortDir, setCurrentSortDir] = useState(null)

	useEffect(() => {
		if (sort) {
			let currentSort = sort.split(':')

			setCurrentSortBy(currentSort[0])
			setCurrentSortDir(currentSort[1])
		}
	}, [sort])
	
	const changeSort = (sortBy, sortDirArray) => {
		let sortDir = '';

		//Если сортировок еще не было, выставляем первое направление сортировки
		if (sort) {
			//Если пользователь уже сортировал таблицу, но выбрал новое поле для сортировки - опять берем первое направление сортировки
			if (sortBy != currentSortBy) {
				sortDir = sortDirArray[0]
			} 
			//Иначе
			else {
				//У нас может быть 2 сценария:
				//Либо старое направление сортировки было последним элементом в массиве
				//(и тогда нам нужно снова выставить первый элемент)
				//Либо старое направление было не последним, и тогда нужно выставить следующее

				let oldSortIndexInArray = sortDirArray.indexOf(currentSortDir)

				if (Object.keys(sortDirArray).length == (oldSortIndexInArray + 1)) {
					sortDir = sortDirArray[0]
				}
				else {
					sortDir = sortDirArray[oldSortIndexInArray + 1]
				}
			}
		}
		else {
			sortDir = sortDirArray[0]
		}

		setSort(sortBy + ':' + sortDir)
	}

	return (
		<table className={'ui-table ' + className} {...props}>
			{Object.keys(headers).length > 0 && (
				<thead>
					<tr >
						{Object.entries(headers).map(([key, value]) => (
							<th key={key} className={value['className']}>
								{(value['sortBy'] && value['sortDir']) && (
									<button type='button' onClick={() => changeSort(value['sortBy'], value['sortDir'])}>
										{value['title']}

										{/*Внутри этой проверки можно дополнительно проверять на аск-деск и, в зависимости от этого, показывать нужную стрелку */}
										{value['sortBy'] == currentSortBy && (
											<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" className="tw-inline-block">
												<use xlinkHref={'#icon-chevron-down'}></use>
											</svg>
										)}
										
									</button>
								)}
								{!value['sortBy'] && (
									<>
										{value['title']}
									</>
								)}
							</th>
						))}
					</tr>
				</thead>
			)}

			<tbody>
				{children}
			</tbody>
		</table>
	)
  }
  
  export {Table}