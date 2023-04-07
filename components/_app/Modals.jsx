import dynamic from 'next/dynamic'

import {useAtom} from 'jotai'
import {ModalState} from '@states/modal'
import {ModalOverlay} from '@ui/modules/Modal.jsx'

const ModalGlobalExample = dynamic(() => import('@components/_app/modals/GlobalExample'), {
	ssr: false,
})

function Modals() {
	const [modal, setModal] = useAtom(ModalState)

	return (
		<>
			{modal == 'global-example' && (
				<ModalOverlay isOpen={modal == 'global-example'} setOpen={setModal} className="ui-overlay-primary">
					<ModalGlobalExample />
				</ModalOverlay>
			)}
		</>
	)

}

export default Modals