import {useState, useEffect} from 'react'

const Progress = ({progressLineStyle = {}, percentage = 0, className = '', ...props}) => {
	const [mergedStyles, setMergedStyles] = useState({})

	useEffect(() => {
		let progressLineStyleCopy = {}
		progressLineStyleCopy = JSON.parse(JSON.stringify(progressLineStyle));

		progressLineStyleCopy['width'] = percentage + '%'

		setMergedStyles(progressLineStyleCopy)
	}, [progressLineStyle, percentage])

	return (
		<div className={"ui-progress " + className} {...props}>
			<div className="ui-progress-line" style={mergedStyles}>
				{percentage}%
			</div>
		</div>
	)
  }
  
  export {Progress}