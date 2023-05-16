import dynamic from 'next/dynamic'

import {Chart as ChartApi, ArcElement, Tooltip, Legend} from 'chart.js'

import {Pie as PieChart} from 'react-chartjs-2'
/*
const PieChart = dynamic(() =>
  import('react-chartjs-2').then((module) => module.Pie)
)
*/

function Chart({data = {}, type = ''}) {
	ChartApi.register(ArcElement, Tooltip, Legend)

	return <>{type == 'pie' && <PieChart data={data} />}</>
}

export default Chart
