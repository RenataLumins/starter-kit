
const Checkbox = ({ content, className = '', ...props}) => {

	return (
		<label>
			<input 
				type='checkbox'
				className="tw-hidden"
			/>
			<span 
				className={className}
			>
					{content}
			</span>
		</label>
	)
  }
  
  export {Checkbox}