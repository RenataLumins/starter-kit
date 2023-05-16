import Head from 'next/head'

import {Provider} from 'jotai'

import AppSidebar from '@components/_app/Sidebar'
import Icons from '@components/_app/Icons'
import Modals from '@components/_app/Modals'
import Header from '@components/_app/Header'

import '@styles/app.css'

function App({Component, pageProps}) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="google" content="notranslate" />
				<meta name="format-detection" content="telephone=no" />
			</Head>

			<Provider>
				<Icons />

				<Header />

				<div className="tw-justify-stretch tw-relative tw-z-10 tw-flex tw-min-h-screen tw-w-full">
					<AppSidebar className="tw-w-[360px]" />

					<main className="tw-flex-shrink tw-flex-grow tw-p-[20px]">
						<Component {...pageProps} />
					</main>
				</div>

				<Modals />
			</Provider>
		</>
	)
}

export default App
