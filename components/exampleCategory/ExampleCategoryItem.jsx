const ExampleCategoryItem = ({ className = '', ...props}) => {
	return (
		<div className="tw-flex tw-flex-col tw-gap-y-[20px] tw-p-[10px]">
			<div className="tw-flex tw-items-center tw-justify-between tw-gap-x-[10px]">
				<h1>Article Title</h1>
				<span className="tw-text-[14px] tw-text-[gray]">22.02.2023</span>
			</div>
			<div className="tw-flex tw-flex-col tw-gap-y-[5px]">
				<div>Article Short Description</div>
				<div>Comments: 0 | Views: 10</div>
			</div>
		</div>
	)
}

export {ExampleCategoryItem}