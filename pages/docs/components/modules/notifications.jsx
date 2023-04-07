import {toast,  Toaster } from '@ui/modules/Notifications'

function NotificationsComponentsPage() {
	const notify = () => toast.success('Вот уведомление.', {
		style: {
		  border: '1px solid green',
		  padding: '16px',
		  color: 'green',
		},
		iconTheme: {
		  primary: 'green',
		  secondary: 'white',
		},
	  });

	return (
		<div className="ui-typography">
			<h1>Notifications</h1>

			<p>npm install react-hot-toast</p>

			<button 
				className="ui-button tw-w-[500px]"
				onClick={notify}
			>
				Вызвать уведомление
			</button>
			<Toaster />
			
		</div>
	)
  }
  
  export default  NotificationsComponentsPage