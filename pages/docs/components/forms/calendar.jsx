import {CalendarComponent} from '@ui/forms/Calendar'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function CalendarComponentsPage() {
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
						title: 'Calendar',
					},
				]}
			/>
			<h1>Calendar</h1>

			<p> npm install react-calendar </p>

			<CalendarComponent locale="ru" />
		</div>
	)
}

export default CalendarComponentsPage
