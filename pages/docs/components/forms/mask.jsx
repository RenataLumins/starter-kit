import {Mask} from '@ui/forms/Mask'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function MaskComponentsPage() {
	return (
		<div className="ui-typography">
			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'Forms',
						slug: '/docs/components/forms',
					},
					{
						title: 'Mask',
					},
				]}
			/>
			<h1>Mask</h1>

			<p> Компонент react-input-mask-next</p>

			<form>
				<label className="tw-flex tw-gap-[10px]">
					Телефон
					<Mask className="ui-input" mask="+7 (999) 999-99-99" alwaysShowMask={true} />
				</label>
			</form>
		</div>
	)
}

export default MaskComponentsPage
