import Head from 'next/head'

function GitflowGitPage() {
	return (
		<>
			<Head>
				<title>About git</title>
			</Head>

			<div className="ui-typography">
				<h1>Gitflow</h1>
				
				<p>Под термином gitflow подразумевается рабочий процесс с репизиторием, с помощью которого можно удобно контроллировать и объединять выпускаемые изменения</p>
				<p>
					<br />
				</p>

				<h2>Пример рабочего gitflow:</h2>

				<p>Изначально есть 2 ветки - <b className="tw-text-blue-800">master</b> и <b className="tw-text-green-700">development</b>. В первом хранится рабочий код, во втором код, планируемый к релизу</p>
				<p>
					<br />
				</p>
				<p>В начале спринта (мера времени, за которую команда планирует выпустить группу фич), содержимое <b className="tw-text-blue-800">master</b>-ветки клонируется в <b className="tw-text-green-700">development</b>.</p>
				<p>Далее, под каждую полноценную задачу создается отдельная ветка, название которой равняется номеру задачи, а содержимое копируется из <b className="tw-text-blue-800">master</b>-ветки</p>
				<p>По завершению работ в ветке, её изменения переносятся в <b className="tw-text-green-700">development</b> для тестирования</p>
				<p>После проверки всех изменений в <b className="tw-text-green-700">development</b>, его содержимое мерджится в <b className="tw-text-blue-800">master</b>-ветку</p>

				<h3>Примечание:</h3>

				<p>Как правило, наличие кода в ветке не всегда подразумевает, что он должен быть загружен на удаленный сервер (для дальнейшего тестирования).</p>
				<p>Для этой задачи (именуемой CI), как правило создают отдельные теги: <b className="tw-text-blue-800">dev</b> и <b className="tw-text-blue-800">production</b>, которые загружают код в тестовое или рабочее окружение, соответственно</p>

			</div>
		</>
	)
  }
  
  export default  GitflowGitPage