import {useState} from 'react'
import {Switch} from '@headlessui/react'
import {Toggle} from '@ui/forms/Toggle'


function SwitchComponentsPage() {
	const [enabled, setEnabled] = useState(false)

	return (
		<div className="ui-typography">
			<h1>Switch (Toggle)</h1>

			<p>HeadlessUI компонент:</p>

			<Switch.Group>
				<div className="tw-flex tw-items-center">
					<Switch.Label className="tw-mr-4">Переключить:</Switch.Label>
					<Switch
						checked={enabled}
						onChange={setEnabled}
						className={`${
							enabled ? 'tw-bg-teal-900' : 'tw-bg-teal-700'
						} tw-relative tw-inline-flex tw-h-6 tw-w-11 tw-items-center tw-rounded-full`}
					>
						<span className="tw-sr-only">Enable notifications</span>
						<span
							className={`${
								enabled ? 'tw-translate-x-6' : 'tw-translate-x-1'
							} tw-inline-block tw-h-4 tw-w-4 tw-transform tw-rounded-full tw-bg-[white] tw-transition`}
						/>
					</Switch>
				</div>
			</Switch.Group>

			<p>Кастомный компонент:</p>

			<Toggle />
		</div>
	)
}

export default SwitchComponentsPage
