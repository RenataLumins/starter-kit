
const Icon = ({name = '', children = null, className = '', ...props}) => {
	return (
		<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" className={className}>
			{children && (
				<>{chilredn}</>
			)}
			
			{!children && name && (
				<use xlinkHref={"#" + name}></use>
			)}
		</svg>
	)
  }
  
  export {Icon}