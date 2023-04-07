import {useAtom} from 'jotai'
import {SidebarState} from '@states/sidebar'
import {SidebarOverlay, SidebarButton} from '@ui/modules/Sidebar.jsx'

import {Singers} from '@db/singers.js'

function SidebarComponentsPage() {
	const [sidebar, setSidebar] = useAtom(SidebarState)

	return (
		<>
			<div className="ui-typography">
				<h1>Sidebar</h1>

				<p>description</p>

				<SidebarButton target="example-sidebar">open sidebar</SidebarButton>
			</div>

			<SidebarOverlay id="example-sidebar" title="POP-IDOLS">
				{Singers.map((singer) => (
					<div className='hover:tw-text-[#59b4fa] tw-cursor-pointer'>
						{singer['name']}
					</div>
				))}
			</SidebarOverlay>
		</>
	)
  }
  
  export default  SidebarComponentsPage