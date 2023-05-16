import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const CalendarComponent = ({locale = '', className = '', ...props}) => {
	const [value, onChange] = useState(new Date())

	return (
		<div className="">
			<Calendar onChange={onChange} value={value} locale={locale} />
		</div>
	)
}

export {CalendarComponent}
