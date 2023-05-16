import React from 'react'
import ReactPlayer from 'react-player/youtube'

const Video = ({url = '', className = '', ...props}) => {
	return <ReactPlayer url={url} />
}

export {Video}
