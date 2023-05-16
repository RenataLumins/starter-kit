import {Popover} from '@ui/modules/Dropdown'

function DropdownComponentsPage() {
	return (
		<div className="ui-typography">
			<h1>Dropdown (Popover)</h1>

			<p>HeadlessUi Popover component.</p>

			<Popover className="tw-relative">
				<Popover.Button className="ui-button">Нажми меня</Popover.Button>

				<Popover.Panel className="ui-modal ui-modal-primary tw-absolute tw-z-10 tw-border tw-border-[gray] ">
					some html hidden content
				</Popover.Panel>
			</Popover>

			{/*
				<Dropdown>
					<Dropdown.Button>
						some html content
					</Dropdown.Button>
					<Dropdown.Content>
						some html hidden content
					</Dropdown.Content>
				</Dropdown>
			*/}
		</div>
	)
}

export default DropdownComponentsPage
