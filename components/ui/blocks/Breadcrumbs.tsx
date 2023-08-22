import Link from 'next/link'

interface Props {
	items?: {
		title?: string
		slug?: string
	}[]
	className?: string
	showed?: number
	exclude?: []
	iconMore?: string
}

const Breadcrumbs = ({ items, className = '', ...props} : Props) => {
	return (
		<ul className="ui-breadcrumbs">
			<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg">
				<use xlinkHref="#icon-house"></use>
			</svg>

			{Object.entries(items).map(([key, value], index) => (
				<li key={index}>
					{value['slug'] && (
						<div className="tw-inline-flex tw-items-center tw-gap-x-[10px]">
							<Link href={value['slug']}> {value['title']} </Link>
							<svg
								aria-hidden="true"
								focusable="false"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
							>
								<use xlinkHref="#icon-angle-right-light"></use>
							</svg>
						</div>
					)}

					{!value['slug'] && <div> {value['title']} </div>}
				</li>
			))}
		</ul>
	)
}

export {Breadcrumbs}
