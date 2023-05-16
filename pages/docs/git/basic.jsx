import Head from 'next/head'

function BasicGitPage() {
	return (
		<>
			<Head>
				<title>About git</title>
			</Head>

			<div className="ui-typography">
				<h1>Git</h1>

				<p>
					Git - это способ хранение информации, в котором разные копии данных связуются
					через их изменения (различия)
				</p>
				<p>
					Хранилищем такой информации могут выступать разные сайты: github, gitlab,
					bitbacket и тд (облако).
				</p>
				<p>
					<br />
				</p>

				<h2>Основные команды и термины:</h2>

				<p>
					<b className="tw-text-green-700">Коммит</b> - группа изменений, объединенных
					одним описанием и ожидающие отправку в выбранную ветку
				</p>
				<p>
					<b className="tw-text-green-700">Ветка</b> - версия кода, хранящаяся в
					репозитории
				</p>
				<p>
					<b className="tw-text-green-700">Тег</b> - метка, которую можно навешивать на
					любую ветку. (подробнее о её применении в gitflow)
				</p>
			</div>
		</>
	)
}

export default BasicGitPage
