import {Autocomplete} from '@ui/forms/Autocomplete'
import {Singers} from '@db/singers.js'

function AutocompleteComponentsPage() {
	return (
		<div className="ui-typography">
			<h1>Autocomplete (Combobox)</h1>

			<p> description </p>

			<Autocomplete 
				options={Singers.map((item, index) => (
					{
						'key': item['name'], 
						'value': index
					}
				))}
			/>
		</div>
	)
  }
  
  export default  AutocompleteComponentsPage