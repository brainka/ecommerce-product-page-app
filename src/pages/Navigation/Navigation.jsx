import React, { useState } from 'react';
import '../Navigation/Navigation.css';
import { Link } from 'react-router-dom';
import { setProductListByCategory } from '../../redux/product/productSlice';
import { useDispatch } from 'react-redux';

function Navigation() {
	const dispatch = useDispatch();

	function handleNavigationSelection(e) {
		console.log(e.target.innerText.toLowerCase());
		dispatch(setProductListByCategory(e.target.innerText.toLowerCase()));
	}

	const [navigationItems, setNavigationItems] = useState([
		'Collections',
		'Mens',
		'Womens',
		'About',
		'Contact',
	]);

	return (
		<nav>
			<ul className="navigation-items">
				{navigationItems.map((item) => {
					return (
						<li>
							<Link
								to={`/shop/${item.toLowerCase()}`}
								onClick={handleNavigationSelection}
							>
								{item}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navigation;
