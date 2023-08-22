import {Message} from '@ui/blocks/Message.jsx'
import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

function MessageComponentsPage() {
	return (
		<div className="ui-typography">

			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'Blocks',
						slug: '/docs/components/blocks',
					},
					{
						title: 'Message',
					},
				]}
			/>

			<h1>Message (alert)</h1>

			<Message
				title="Error"
				icon="#icon-circle-exlamation"
				className=" ui-message-error tw-max-w-[300px]"
			>
				Здесь ошибка!
			</Message>

			<Message
				title="Info"
				icon="#icon-circle-info"
				className=" ui-message-info tw-max-w-[300px]"
			>
				Здесь информация!
			</Message>

			<Message
				title="Success"
				icon="#icon-circle-check"
				className=" ui-message-success tw-max-w-[300px]"
			>
				Выполнено успешно!
			</Message>

			<Message
				title="Warning"
				icon="#icon-triangle-exlamation"
				className=" ui-message-warning tw-max-w-[300px]"
			>
				Здесь предупреждение!
			</Message>

			<p>
				{' '}
				Создала отдельно компонент Message.jsx, где задала необходимые переменные: icon,
				title и content (+ className).
			</p>
		</div>
	)
}

export default MessageComponentsPage
