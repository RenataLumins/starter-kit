const Pagination = ({totalPages = 1, currentPage = 1, setValue = null, className='', ...props}) => {
	const changePage = (selectedPage) => {
		if (setValue && currentPage != selectedPage) {
			setValue(selectedPage);
		}
	}

	return (
		<div className={className} {...props}>
			{Array.from(Array(totalPages), (e, i) => (
				<button key={i} onClick={() => changePage(i + 1)} className={currentPage == (i + 1) ? "ui-pagination-item-active" : ""}>{i+1}</button>
			))}	
		</div>
	)
  }
  
  export {Pagination}