function DynamicImportNextJSPage() {
	return (
		<div className="ui-typography">
			<h1>Dynamic Import (Lazy)</h1>

			<p>
				{' '}
				1 вариант ленивой загрузки:
				<br />
				const ModalLocalExample = dynamic(() =&gt;
				import('@components/_app/modals/LocalExample'), &#123;ssr: false&#125;)
			</p>

			<p>
				{' '}
				2 вариант ленивой загрузки (именной):
				<br />
				const PieChart = dynamic(() =&gt; import('react-chartjs-2').then((module) =&gt;
				module.Pie))
			</p>
		</div>
	)
}

export default DynamicImportNextJSPage
