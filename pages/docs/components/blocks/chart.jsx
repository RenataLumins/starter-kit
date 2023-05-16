import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('@ui/blocks/Chart.jsx'), {
	ssr: false,
})

function ChartComponentsPage() {
	return (
		<div className="ui-typography">
			<h1>Chart</h1>

			<p>
				{' '}
				Устанавливаются 2 библиотеки: "npm i react-chartjs-2 chart.js". И действуем по
				документации{' '}
				<a href="https://www.npmjs.com/package/react-chartjs-2"> react-chartjs-2 </a>.
			</p>

			<div className="ui-chart">
				<div> Пример графика "Pie":</div>
				<Chart
					type="pie"
					data={{
						labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
						datasets: [
							{
								label: '# of Votes',
								data: [12, 19, 3, 5, 2, 3],
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(255, 159, 64, 0.2)',
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)',
								],
								borderWidth: 1,
							},
						],
					}}
				/>
			</div>
		</div>
	)
}

export default ChartComponentsPage
