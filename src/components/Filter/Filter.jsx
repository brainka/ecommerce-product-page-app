import React from 'react';
import '../../components/Filter/Filter.css';

function Filter({ children }) {
	return (
		<div className="filter-container">
			<div className="filter-sticky">
				<div>Filter by</div>
				<div>CATEGORIES</div>
				<div>BRAND</div>
				<div>COLOUR</div>
				<div>PRICE</div>
				<div>SIZE</div>
			</div>
			{children}
		</div>
	);
}

export default Filter;
