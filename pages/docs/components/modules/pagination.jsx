import {useState} from 'react'

import {Pagination} from '@ui/modules/Pagination'

import {Singers} from '@db/singers.js'

function PaginationComponentsPage() {
	const [currentPage, setCurrentPage] = useState(1)
	const singersPerPage = 5

	return (
		<div className="ui-typography">
			<h1>Pagination</h1>
			<p>description</p>
			<table className="ui-table tw-w-full">
				<tbody>
					{Array.from(Array(singersPerPage), (e, index) => (
						<tr key={index}>
							<td className="tw-w-[60px]">
								{index + 1 + singersPerPage * (currentPage - 1)}
							</td>
							<td>{Singers[index + singersPerPage * (currentPage - 1)]['name']}</td>
							<td className="tw-w-[200px]">
								{Singers[index + singersPerPage * (currentPage - 1)]['country']}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination
				totalPages={Math.ceil(Object.keys(Singers).length / singersPerPage)}
				currentPage={currentPage}
				setValue={setCurrentPage}
				className="ui-pagination"
			/>
			total singers : {Object.keys(Singers).length}
		</div>
	)
}

export default PaginationComponentsPage
