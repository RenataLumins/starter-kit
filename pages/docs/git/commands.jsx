import Head from 'next/head'

import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function CommandsGitPage() {
	return (
		<>
			<Head>
				<title>About git</title>
			</Head>

			<div className="ui-typography">
				<Breadcrumbs
					items={[
						{
							title: 'Homepage',
							slug: '/',
						},
						{
							title: 'Git',
							slug: '/docs/git',
						},
						{
							title: 'Commands',
						},
					]}
				/>
				<h1>Основные команды и термины</h1>

				<p>
					<b className="tw-text-blue-800">git clone (абсолютная ссылка до гита).git</b> -
					скопировать содержимое репозитория в выбранную папку
				</p>
				<p>
					<b className="tw-text-blue-800">git push</b> - отправить изменения в репозиторий
					(предварительно нужно выбрать файлы и задать описание коммита)
				</p>
				<p>
					<b className="tw-text-blue-800">git pull</b> - вытянуть изменения из репозитория
					(если твои файлы устарели - например, когда кто-то другой отправил какие-то
					изменения)
				</p>
				<p>
					<br />
				</p>
				<p>
					<b className="tw-text-blue-800">git branch (название ветки)</b> - создать новую
					ветку
				</p>
				<p>
					<b className="tw-text-blue-800">git checkout (название ветки)</b> -
					переключиться на выбранную ветку
				</p>
				<p>
					<b className="tw-text-blue-800">git merge (название ветки)</b> - вытянуть
					изменения указанной ветки в ту ветку, в которой сейчас находишься
				</p>
				<p>
					<br />
				</p>
				<p>
					<b className="tw-text-blue-800">git tag -f (название тега)</b> - выставить тег
					на текущую ветку
				</p>
				<p>
					<b className="tw-text-blue-800">git push -f origin (название тега)</b> -
					запушить тег
				</p>
			</div>
		</>
	)
}

export default CommandsGitPage
