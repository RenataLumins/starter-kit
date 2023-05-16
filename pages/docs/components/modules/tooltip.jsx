import dynamic from 'next/dynamic'

const Tooltip = dynamic(() => import('@ui/modules/Tooltip.jsx').then((module) => module.Tooltip), {
	ssr: false,
})

function TooltipComponentsPage() {
	return (
		<>
			<div className="ui-typography">
				<h1>Tooltip</h1>

				<p>npm i @tippyjs/react .</p>

				<Tooltip
					className="ui-arrow ui-arrow-down ui-tooltip before:tw-border-[gray]"
					content="описание"
				>
					<button className="ui-button">кнопочка</button>
				</Tooltip>
			</div>
		</>
	)
}

export default TooltipComponentsPage
