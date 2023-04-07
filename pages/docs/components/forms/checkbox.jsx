import {Checkbox} from '@ui/forms/Checkbox'

import {Singers} from '@db/singers.js'

function CheckboxComponentsPage() {
	return (
		<div className="ui-typography">
			<h1>Checkbox</h1>

			<p> description</p>

			{Singers.map((value) => (
				<Checkbox
					className='ui-checkbox ui-span'
					content={value['name']}
				/>
			))}

		</div>
	)
  }
  
  export default  CheckboxComponentsPage