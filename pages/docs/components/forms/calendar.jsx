import {CalendarComponent} from '@ui/forms/Calendar'

function CalendarComponentsPage() {
	return (
		<div className="ui-typography">
			<h1>Calendar</h1>

			<p> npm install react-calendar </p>

			<CalendarComponent
				locale="ru"
			/>

		</div>
	)
  }
  
  export default  CalendarComponentsPage