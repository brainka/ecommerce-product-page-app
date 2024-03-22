import React, { useState } from 'react';
import '../HomePage/HomePage.css';
import { Link } from 'react-router-dom';
import crocsImage from '../../images/shoes/crocs.jpg';
import vansImage from '../../images/shoes/vans.jpg';
import drMartens from '../../images/shoes/dr-martens.jpg';
import { useDispatch } from 'react-redux';
import { setProductListByCategory } from '../../redux/product/productSlice';

function HomePage() {
	const [categories, setCategories] = useState([
		{ name: 'mens', image: vansImage },
		{ name: 'womens', image: drMartens },
		{ name: 'sales', image: crocsImage },
	]);

	const dispatch = useDispatch();

	function handleProductGenderSelect(category) {
		console.log(category);
		dispatch(setProductListByCategory(category));
	}

	return (
		<div className="homepage-container">
			{categories.map((category) => {
				const { name, image } = category;
				console.log(image);
				return (
					<Link
						to={`/shop/${name.toLowerCase()}`}
						className="homepage-categories"
						style={{ backgroundImage: `url(${image})` }}
						onClick={() => handleProductGenderSelect(name)}
					>
						{/* <img src={image} alt="" /> */}
						<div className="category-name">{name}</div>
					</Link>
				);
			})}
		</div>
	);
}

export default HomePage;
