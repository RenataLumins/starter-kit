import {useAtom} from 'jotai'
import {SidebarState} from '@states/sidebar'
import {SidebarOverlay, SidebarButton} from '@ui/modules/Sidebar.jsx'

import {Breadcrumbs} from '@ui/blocks/Breadcrumbs'

import {Singers} from '@db/singers.ts'

function SidebarComponentsPage() {
	const [sidebar, setSidebar] = useAtom(SidebarState)

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
							title: 'Sidebar',
						},
					]}
				/>
				<h1>Sidebar</h1>

				<p>description</p>

				<SidebarButton target="example-sidebar">open sidebar</SidebarButton>
			</div>

			<SidebarOverlay id="example-sidebar" title="POP-IDOLS">
				{Singers.map((singer, index) => (
					<div key={index} className="tw-cursor-pointer hover:tw-text-[#59b4fa]">
						{singer['name']}
					</div>
				))}
			</SidebarOverlay>
		</>
	)
}

export default SidebarComponentsPage
