const ExampleCategoryItemPlaceholder = ({className = '', ...props}) => {
	return (
		<div className="tw-flex tw-flex-col tw-gap-y-[20px] tw-p-[10px]">
			<div className="tw-flex tw-items-center tw-justify-between tw-gap-x-[10px]">
				<h1>
					<span className="ui-skeleton tw-h-[22px] tw-w-[150px]"></span>
				</h1>
				<span className="tw-text-[14px] tw-text-[gray]">
					<span className="ui-skeleton tw-h-[14px] tw-w-[65px]"></span>
				</span>
			</div>
			<div className=" tw-flex tw-flex-col tw-gap-y-[5px]">
				<div>
					<span className="ui-skeleton tw-h-[14px] tw-w-[200px]"></span>
					<br />
					<span className="ui-skeleton tw-h-[14px] tw-w-[200px]"></span>
					<br />
					<span className="ui-skeleton tw-h-[14px] tw-w-[200px]"></span>
				</div>
				<div>
					<span className="ui-skeleton tw-h-[14px] tw-w-[60px]"></span>
					<span className="ui-skeleton tw-h-[14px] tw-w-[60px]"></span>
				</div>
			</div>
		</div>
	)
}

export {ExampleCategoryItemPlaceholder}
