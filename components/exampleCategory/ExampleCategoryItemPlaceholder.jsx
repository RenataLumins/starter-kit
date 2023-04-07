const ExampleCategoryItemPlaceholder = ({ className = '', ...props}) => {
	return (
		<div className="tw-flex tw-flex-col tw-gap-y-[20px] tw-p-[10px]">
			<div className="tw-flex tw-items-center tw-justify-between tw-gap-x-[10px]">
				<h1>
					<span className="ui-skeleton tw-w-[150px] tw-h-[22px]"></span>
				</h1>
				<span className="tw-text-[14px] tw-text-[gray]">
					<span className="ui-skeleton tw-w-[65px] tw-h-[14px]"></span>
				</span>
			</div>
			<div className=" tw-flex tw-flex-col tw-gap-y-[5px]">
				<div>
					<span className="ui-skeleton tw-w-[200px] tw-h-[14px]"></span>
					<br />
					<span className="ui-skeleton tw-w-[200px] tw-h-[14px]"></span>
					<br /> 
					<span className="ui-skeleton tw-w-[200px] tw-h-[14px]"></span>
				</div>
				<div>
					<span className="ui-skeleton tw-w-[60px] tw-h-[14px]"></span>
					<span className="ui-skeleton tw-w-[60px] tw-h-[14px]"></span>
				</div>
			</div>
		</div>
	)
}

export {ExampleCategoryItemPlaceholder}