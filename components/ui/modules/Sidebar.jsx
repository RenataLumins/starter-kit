import {Fragment} from 'react'

import {useAtom} from 'jotai'
import {SidebarState} from '@states/sidebar'

const SidebarButton = ({className = '', children, target, ...props}) => {
	const [sidebar, setSidebar] = useAtom(SidebarState)

	return (
		<button
			onClick={() => setSidebar(target)}
			className={'ui-button cursor-pointer ' + className}
			{...props}
		>
			{children}
		</button>
	)
}

const SidebarOverlay = ({
	id,
	children,
	isOpen,
	setOpen,
	position = 'right',
	title = '',
	className = '',
	...props
}) => {
	const [sidebar, setSidebar] = useAtom(SidebarState)

	const makePositionClass = (direction) => {
		switch (direction) {
			case 'left':
				return 'ui-sidebar-left '

			default:
				return 'ui-sidebar-right '
		}
	}

	return (
		<div
			className={
				'ui-sidebar ' +
				makePositionClass(position) +
				(sidebar == id ? 'ui-sidebar-active' : '')
			}
		>
			{/*<div className={"tw-flex tw-flex-col tw-fixed tw-top-0 tw-bottom-0 tw-w-[300px] tw-bg-white tw-z-50 tw-transition-transform tw-duration-300 " + (position == 'left' ? 'tw-right-[100%] ' : 'tw-left-[100%] ') + (sidebar == id ? (position == 'left' ? 'tw-translate-x-[100%] ' : 'tw--translate-x-[100%] ') : '')}>*/}

			{/*
			.ui-sidebar.ui-sidebar-left.ui-sidebar-active {

			}

			1 - внутри него должен быть див (посмотри как сделано на уже готовом сайдбаре, с абсолютным позицинрованием),
			тоже занимающим ВСЕ пространство сайдбара, и overloww-y-auto,
			а уже внутри него - реальный див

			ВАЖНЫЙ МОМЕНТ: у сайдбара должна быть кнопка закрыть (крестик), который ВСЕГДА вверху и НЕ УЕЗЖАЕТ при скролле
			(сделать его вне абсолютного контейнера)

			далее, нужно добавить опцию position (принимает left или right, по умолчанию right) - от него зависит, где появится сайдбар

			+ все классы и оформление вынести в ui-sidebar, ui-sidebar-close i td
			*/}

			<div className="tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-justify-between tw-p-[15px] tw-font-medium ">
				{title}
				<div className=" tw-pr-[20px]">
					<button onClick={() => setSidebar(false)} className="tw-relative tw-z-20 ">
						x
					</button>
				</div>
			</div>

			<div className="tw-relative tw-flex-shrink tw-flex-grow ">
				<div className="tw-absolute tw-inset-0 tw-z-10 tw-flex-col tw-overflow-y-auto  tw-p-[15px]  ">
					<div>{children}</div>
				</div>
			</div>
		</div>
	)
}

export {SidebarButton, SidebarOverlay}
