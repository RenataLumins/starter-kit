import Head from 'next/head'

import {Timer} from '@ui/blocks/Timer'

function HomePage() {
	return (
		<>
			<Head>
				<title>Homepage</title>
			</Head>

			<div className="ui-typography">
				<h1>HOMEPAGE</h1>
				<Timer />
			</div>
		</>
	)
}

export default HomePage
