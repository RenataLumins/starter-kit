import Link from 'next/link'

const Breadcrumbs = ({title = '', items, homeIcon, separatorIcon, className = '', ...props}) => {
	return (
		<ul className="ui-breadcrumbs">
			<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg">
				<use xlinkHref={homeIcon}></use>
			</svg>

			{Object.entries(items).map(([key, value]) => (
				<li>
					{value['url'] && (
						<div className="tw-inline-flex tw-items-center tw-gap-x-[10px]">
							<Link href={value['url']}> {value['title']} </Link>
							<svg
								aria-hidden="true"
								focusable="false"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
							>
								<use xlinkHref={separatorIcon}></use>
							</svg>
						</div>
					)}

					{!value['url'] && <div> {value['title']} </div>}
				</li>
			))}
		</ul>
	)
}

export {Breadcrumbs}
