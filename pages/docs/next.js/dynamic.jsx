import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function DynamicImportNextJSPage() {
	return (
		<div className="ui-typography">
			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'Next JS',
						slug: '/docs/next.js',
					},
					{
						title: 'Dynamic Import',
					},
				]}
			/>
			<h1>Dynamic Import (Lazy)</h1>

			<p>
				{' '}
				1 вариант ленивой загрузки:
				<br />
				const ModalLocalExample = dynamic(() =&gt;
				import(&apos;@components/_app/modals/LocalExample&apos;), &#123;ssr: false&#125;)
			</p>

			<p>
				{' '}
				2 вариант ленивой загрузки (именной):
				<br />
				const PieChart = dynamic(() =&gt; import(&apos;react-chartjs-2&apos;).then((module) =&gt;
				module.Pie))
			</p>
		</div>
	)
}

export default DynamicImportNextJSPage
