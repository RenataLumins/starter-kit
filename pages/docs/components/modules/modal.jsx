import dynamic from 'next/dynamic'
import {useState} from 'react'

import {ModalButton, ModalOverlay} from '@ui/modules/Modal'

import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

const ModalLocalExample = dynamic(() => import('@components/_app/modals/LocalExample'), {
	ssr: false,
})

function ModalComponentsPage() {
	const [modal, setModal] = useState(false)

	return (
		<>
			<div className="ui-typography">
			<Breadcrumbs
				items={[
					{
						title: 'Homepage',
						slug: '/',
					},
					{
						title: 'Modules',
						slug: '/docs/components/modules',
					},
					{
						title: 'Modal',
					},
				]}
			/>
				<h1>Modal</h1>

				<p>Описание</p>

				<p>Вариант 1: глобальное модальное окно, доступное на всех страницах сайта</p>
				<div>
					<ModalButton target="global-example">Open global modal</ModalButton>
				</div>
				<p>Вариант 2: локальное модальное окно, доступное только на этой странице</p>
				<div>
					<button type="button" onClick={() => setModal('local-example')}>
						Open local modal
					</button>
				</div>
				<p>Вариант 3: локальное модальное окно, с альтернативным оформлением</p>
				<div>
					<button type="button" onClick={() => setModal('local-example-2')}>
						Open local modal 2
					</button>
				</div>
			</div>

			{modal == 'local-example' && (
				<ModalOverlay
					isOpen={modal == 'local-example'}
					setOpen={setModal}
					className="ui-overlay-primary"
				>
					<ModalLocalExample />
				</ModalOverlay>
			)}
			{modal == 'local-example-2' && (
				<ModalOverlay
					isOpen={modal == 'local-example-2'}
					setOpen={setModal}
					className="tw-bg-black tw-bg-opacity-80 tw-text-white"
				>
					<div className="tw-pointer-events-auto tw-relative tw-z-50">Example alert</div>
				</ModalOverlay>
			)}
		</>
	)
}

export default ModalComponentsPage
