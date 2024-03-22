import React from 'react';
import '../Product/Product.css';
import { useSelector } from 'react-redux';

function Product() {
	const productSelected = useSelector((state) => state.product.productSelected);

	const { id, colors, details, name, price, promotion, size, brand, img } =
		productSelected;

	return (
		<div className="productSelected-container">
			<div className="product-left">HELLO</div>

			<div className="product-right">
				<div>{brand}</div>
				<div>{name}</div>
				<div>{price}</div>
				<div>{colors}</div>
				<div>
					{size?.map((s) => {
						return <div>{s}</div>;
					})}
				</div>
				<button>Add To Cart</button>
				<div>{details}</div>
			</div>
		</div>
	);
}

export default Product;
