import React, { useState } from 'react';
import '../Products/Products.css';
import { Link } from 'react-router-dom';
// import data from '../../data/shoes.json';
import { useSelector, useDispatch } from 'react-redux';
import {
	setProductSelected,
	setProductListByCategory,
} from '../../redux/product/productSlice';

function Products() {
	// const [shoes, setShoes] = useState(data);
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.product.productList);
	const categorySelected = useSelector(
		(state) => state.product.productSelectedByCategory
	);

	console.log(categorySelected);
	function handleProductSelect(id) {
		console.log(id);
		dispatch(setProductSelected(id));
	}

	return (
		<div className="container products">
			{categorySelected.map((shoe) => {
				const {
					id,
					img,
					name,
					brand,
					price,
					colors,
					size,
					details,
					promotion,
				} = shoe;

				return (
					<Link
						className="product-container"
						to={`/shop/${shoe.id}`}
						onClick={() => handleProductSelect(id)}
					>
						<img
							loading="lazy"
							src={require('../../images/shoes/crocs.jpg')}
							alt=""
						/>

						{Object.entries(promotion).map(([key, value]) => {
							if (value === true) {
								return (
									<div className={`promotion ${key.replace(' ', '')}`}>
										{key.toUpperCase()}
									</div>
								);
							}
							return null; // Add a return statement here
						})}

						<div className="product-brand">{brand}</div>
						<div className="product-name">{name}</div>
						<div className="product-price">{price}</div>
						<div className="product-colours">
							{colors.map((colour) => {
								return <div>{colour}</div>;
							})}
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default Products;
