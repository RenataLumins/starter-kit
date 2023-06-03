import {useState, useEffect} from 'react'

const Timer = () => {
	const [timeLeft, setTimeLeft] = useState(2 * 60)
	const [isCounting, setIsCounting] = useState(false)

	const getPadTime = (time) => time.toString().padStart(2, "0")

	const minutes = getPadTime(Math.floor(timeLeft/60))
	const seconds = getPadTime(timeLeft - minutes * 60)

	useEffect(() => {
		const interval = setInterval(() => {
			isCounting && 
				setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0 ))
		}, 1000)
		if (timeLeft === 0) setIsCounting(false)
		return () => {
			clearInterval(interval)
		}
	}, [timeLeft, isCounting])

	const handleStart = () => {
		if (timeLeft === 0) setTimeLeft(2 * 60)

		setIsCounting(true)
	}

	const handleStop = () => {
		setIsCounting(false)
	}

	const handleReset = () => {
		setIsCounting(false)
		setTimeLeft(2 * 60)
	}

	return (
		<div > 
			<div className='tw-flex'>
				<span>{minutes}</span>
				<span>:</span>
				<span>{seconds}</span>
			</div>
			<div className='tw-flex'>
				{isCounting ? (
					<button onClick={handleStop} className='ui-button'>Stop</button>
				) : (
					<button onClick={handleStart} className='ui-button'>Start</button>
				)}
				<button onClick={handleReset} className='ui-button'>Reset</button>
			</div>
		</div>
	)
}

export {Timer}
