import Head from 'next/head'

import {Provider} from 'jotai'

import {useEffect} from 'react'

import { getCookies } from 'cookies-next'

import {Toaster} from '@ui/modules/Notifications'

import AppSidebar from '@components/_app/Sidebar'
import Icons from '@components/_app/Icons'
import Modals from '@components/_app/Modals'
import Header from '@components/_app/Header'

import AppStatesHydration from '@components/_app/_hydration'

import '@styles/app.css'

//Функция сработает ОДИН РАЗ при загрузке страницы
App.getInitialProps = (context) => {
	//Получаем куки на сервере
	const cookies = getCookies(context?.['ctx'])

	return {
		cookies,
	}
}

function App({Component, pageProps, cookies}) {
	useEffect(() => {
		const currentTheme = ('theme' in localStorage) ? localStorage['theme'] : 'light'

		document.documentElement.classList.add('tw-' + currentTheme)
	}, [])


	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="google" content="notranslate" />
				<meta name="format-detection" content="telephone=no" />

				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />

				<link rel="preload" as="font" href="/fonts/pacifico.woff" type="font/woff" crossOrigin="anonymous" />
			</Head>

			<Provider>
				<AppStatesHydration cookies={cookies} />

				<Icons />

				<Header />

				<div className="tw-justify-stretch tw-relative tw-z-10 tw-flex tw-min-h-screen tw-w-full tw-pt-[40px]">
					<AppSidebar className="tw-w-[360px]" />

					<main className="tw-flex-shrink tw-flex-grow tw-p-[20px]">
						<Component {...pageProps} />
					</main>
				</div>

				<Modals />
				<Toaster />
			</Provider>
		</>
	)
}

export default App
