import { useState, useEffect } from 'react'
import {Singers as db} from '@db/singers.js'

import {Spinner} from '@ui/blocks/Spinner.jsx'
import {InView} from '@ui/modules/Waypoint.jsx'

function WaypointComponentsPage() {
	const [singers, setSingers] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [singersPerPage, setSingersPerPage] = useState(5)
	const [loading, setLoading] = useState(false)
	const [allSingersLoaded, setAllSingersLoaded] = useState(false)

	useEffect(() => {
		setSingers(db.slice(0, singersPerPage))
	}, [])

	const updateSingers = (ready) => {
		if (ready) {
			setLoading(true)

			let total_singers = db.length

			let last_loaded_singer_index = currentPage * singersPerPage
			let future_last_singer_index = last_loaded_singer_index + singersPerPage

			if (future_last_singer_index > total_singers) {
				//Мы не можем взять больше певцов, чем их всего
				future_last_singer_index = total_singers
			}

			let more_singers = (db.slice(last_loaded_singer_index, future_last_singer_index))

			if (more_singers.length > 0) {
				setSingers([
					//как соединить два массива
					...singers,
					...more_singers
				])
			}

			//Имитируем загрузку в 2 секунды перед выдачей результатов
			setTimeout(() => {
				setLoading(false)

				setCurrentPage(currentPage + 1)

				if (future_last_singer_index == total_singers) {
					console.log('all singers loaded')

					setAllSingersLoaded(true)
				}
			}, 2000);
		}
	}
	

	return (
		<>
			<div className="ui-typography">
				<h1>Waypoint</h1>

				<p>description.</p>

				{singers.length > 0 && (
					<>
						{singers.map((singer, index) => (
							<div key={index} className='tw-min-h-[60px]'>
								{index + 1}. {singer['name']}
							</div>
						))}

						<>
							{!allSingersLoaded && (
								<>
									{!loading && (
										<InView as="div" onChange={(inView, entry) => updateSingers(inView)} />
									)}

									{loading && (
										<Spinner />
									)}
								</>
							)}
						</>
					</>
				)}
			</div>
		</>
	)
  }
  
  export default  WaypointComponentsPage