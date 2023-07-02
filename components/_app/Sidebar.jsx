import Link from 'next/link'
import {useRouter} from 'next/router'

import AppSearch from '@components/_app/Search.jsx'

import {Accordion} from '@ui/blocks/Accordion.jsx'

function AppSidebar({
	menu = [
		[
			{
				title: 'React',
				url: '/docs/react/',
				submenu: [
					{
						title: 'Global state',
						url: '/docs/react/global-state',
					},
					{
						title: 'Memo',
						url: '/docs/react/memo',
					},
				],
			},
			{
				title: 'Components',
				url: '/docs/components',
				submenu: [
					{
						title: 'Blocks',
						url: '/docs/components/blocks',
						submenu: [
							{
								title: 'Accordion',
								url: '/docs/components/blocks/accordion',
							},
							{
								title: 'Breadcrumbs',
								url: '/docs/components/blocks/breadcrumbs',
							},
							{
								title: 'Chart',
								url: '/docs/components/blocks/chart',
							},
							{
								title: 'Message',
								url: '/docs/components/blocks/message',
							},
							{
								title: 'Progress',
								url: '/docs/components/blocks/progress',
							},
							{
								title: 'Skeleton',
								url: '/docs/components/blocks/skeleton',
							},
							{
								title: 'Spinner',
								url: '/docs/components/blocks/spinner',
							},
							{
								title: 'Table',
								url: '/docs/components/blocks/table',
							},
							{
								title: 'Tabs',
								url: '/docs/components/blocks/tabs',
							},
							{
								title: 'Video',
								url: '/docs/components/blocks/video',
							},
						],
					},
					{
						title: 'Forms',
						url: '/docs/components/forms',
						submenu: [
							{
								title: 'Autocomplete',
								url: '/docs/components/forms/autocomplete',
							},
							{
								title: 'Calendar',
								url: '/docs/components/forms/calendar',
							},
							{
								title: 'Checkbox',
								url: '/docs/components/forms/checkbox',
							},
							{
								title: 'Input',
								url: '/docs/components/forms/input',
							},
							{
								title: 'Mask',
								url: '/docs/components/forms/mask',
							},
							{
								title: 'Radio',
								url: '/docs/components/forms/radio',
							},
							{
								title: 'Range',
								url: '/docs/components/forms/range',
							},
							{
								title: 'Select',
								url: '/docs/components/forms/select',
							},
							{
								title: 'Switch',
								url: '/docs/components/forms/switch',
							},
						],
					},
					{
						title: 'Modules',
						url: '/docs/components/modules',
						submenu: [
							{
								title: 'Dropdown',
								url: '/docs/components/modules/dropdown',
							},
							{
								title: 'Menu',
								url: '/docs/components/modules/menu',
							},
							{
								title: 'Modal',
								url: '/docs/components/modules/modal',
							},
							{
								title: 'Notifications (toasts)',
								url: '/docs/components/modules/notifications',
							},
							{
								title: 'Pagination',
								url: '/docs/components/modules/pagination',
							},
							{
								title: 'Parallax',
								url: '/docs/components/modules/parallax',
							},
							{
								title: 'Poll',
								url: '/docs/components/modules/poll',
							},
							{
								title: 'Sidebar',
								url: '/docs/components/modules/sidebar',
							},
							{
								title: 'Slider / Carousel',
								url: '/docs/components/modules/slider',
							},
							{
								title: 'Tooltip',
								url: '/docs/components/modules/tooltip',
							},
							{
								title: 'Waypoint',
								url: '/docs/components/modules/waypoint',
							},
						],
					},
				],
			},
			{
				title: 'Hooks',
				url: '/docs/hooks/',
				submenu: [
					{
						title: 'useForm',
						url: '/docs/hooks/useform',
					},
					{
						title: 'useDebounce',
						url: '/docs/hooks/usedebounce',
					},
				],
			},
			{
				title: 'Next.js',
				url: '/docs/next.js/',
				submenu: [
					{
						title: 'SSR',
						url: '/docs/next.js/ssr',
					},
					{
						title: 'ENV',
						url: '/docs/next.js/env',
					},
					{
						title: 'Dynamic import (lazy)',
						url: '/docs/next.js/dynamic',
					},
					{
						title: 'next.config.js',
						url: '/docs/next.js/next.config.js',
					},
					{
						title: 'middleware',
						url: '/docs/next.js/middleware',
					},
				],
			},
			{
				title: 'Packages',
				url: '/docs/packages/',
				submenu: [
					{
						title: 'Day.js',
						url: '/docs/packages/day.js',
					},
					{
						title: 'Eslint',
						url: '/docs/packages/eslint',
					},
					{
						title: 'Prettier',
						url: '/docs/packages/prettier',
					},
					{
						title: 'Sentry',
						url: '/docs/packages/sentry',
					},
				],
			},
			{
				title: 'JS',
				url: '/docs/js/',
				submenu: [
					{
						title: 'Полезные функции',
						url: '/docs/js/useful-functions',
					},
					{
						title: 'API',
						url: '/docs/js/api',
					},
					{
						title: 'Cookies',
						url: '/docs/js/cookies',
					},
					{
						title: 'JWT',
						url: '/docs/js/jwt',
					},
					{
						title: 'Localstorage',
						url: '/docs/js/localstorage',
					},
					{
						title: 'Oauth2',
						url: '/docs/js/Oauth2',
					},
					{
						title: 'Sockets',
						url: '/docs/js/sockets',
					},
					{
						title: 'Typescript',
						url: '/docs/js/typescript',
					},
				],
			},
			{
				title: 'CSS',
				url: '/docs/css/',
				submenu: [],
			},
			{
				title: 'Git',
				url: '/docs/git/',
				submenu: [
					{
						title: 'Основная информация',
						url: '/docs/git/basic',
					},
					{
						title: 'Команды',
						url: '/docs/git/commands',
					},
					{
						title: 'Gitflow',
						url: '/docs/git/gitflow',
					},
				],
			},
			{
				title: 'Additional',
				url: '/docs/additional/',
				submenu: [
					{
						title: 'IDE',
						url: '/docs/additional/ide',
					},
					{
						title: 'webpack',
						url: '/docs/additional/webpack',
					},
					{
						title: 'docker',
						url: '/docs/additional/docker',
					},
				],
			},
		],
		[
			{
				title: 'Useful links',
				url: '/docs/useful/',
				submenu: [
					{
						title: 'validator.w3.org',
						url: '/docs/useful/validator.w3.org',
					},
					{
						title: 'bundlephobia',
						url: '/docs/useful/bundlephobia',
					},
				],
			},
		],
	],
	className = '',
	...props
}) {
	const router = useRouter()

	return (
		<aside
			id="sidebar"
			className={
				'tw-relative tw-flex tw-flex-col tw-divide-y tw-divide-[lightgray] tw-border-r tw-border-[lightgray] ' +
				className
			}
			{...props}
		>
			<div className="tw-p-[15px]">
				<AppSearch />
			</div>
			<div className="tw-relative tw-flex-shrink tw-flex-grow tw-select-none">
				<nav className="tw-absolute tw-inset-0 tw-overflow-y-auto">
					<ul className="tw-flex tw-flex-col tw-divide-y tw-divide-[lightgray]">
						{menu.map((folder, index) => (
							<li key={index}>
								<ul>
									{folder.map((sectionData) => (
										<li key={sectionData['url']}>
											{sectionData['submenu'] && (
												<Accordion
													title={sectionData['title']}
													className="ui-accordion-primary tw-font-bold"
												>
													<ul className="tw-flex tw-flex-col tw-px-[15px] tw-font-normal">
														{sectionData['submenu'].map(
															(categoryData) => (
																<li key={categoryData['url']}>
																	{categoryData['submenu'] && (
																		<>
																			<h3 className="tw-font-medium ">
																				{
																					categoryData[
																						'title'
																					]
																				}
																			</h3>
																			<ul className="tw-mb-[15px]">
																				{categoryData[
																					'submenu'
																				].map(
																					(linkData) => (
																						<li
																							key={
																								linkData[
																									'url'
																								]
																							}
																						>
																							<Link
																								href={
																									linkData[
																										'url'
																									]
																								}
																								className={
																									'hover:tw-text-[#00b7ff] ' +
																									(linkData[
																										'url'
																									] ==
																									router.asPath
																										? ' tw-cursor-default tw-font-medium tw-text-[#00b7ff]'
																										: '')
																								}
																							>
																								-{' '}
																								{
																									linkData[
																										'title'
																									]
																								}
																							</Link>
																						</li>
																					)
																				)}
																			</ul>
																		</>
																	)}

																	{!categoryData['submenu'] && (
																		<Link
																			href={
																				categoryData['url']
																			}
																			className={
																				'hover:tw-text-[#00b7ff] ' +
																				(categoryData[
																					'url'
																				] == router.asPath
																					? ' tw-cursor-default tw-font-medium tw-text-[#00b7ff]'
																					: '')
																			}
																		>
																			-{' '}
																			{categoryData['title']}
																		</Link>
																	)}
																</li>
															)
														)}
													</ul>
												</Accordion>
											)}

											{!sectionData['submenu'] && (
												<Link
													href={sectionData['url']}
													className="tw-block tw-p-[15px] tw-font-bold"
												>
													{sectionData['title']}
												</Link>
											)}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</aside>
	)
}

export default AppSidebar
