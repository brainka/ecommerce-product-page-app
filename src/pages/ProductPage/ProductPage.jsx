import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../ProductPage/ProductPage.css';
import Filter from '../../components/Filter/Filter';

function ProductPage({ children }) {
	// const [shoes, setShoes] = useState([
	// 	{
	// 		id: 1,
	// 		img: '',
	// 		category: 'mens',
	// 		brand: 'CROCS',
	// 		name: 'Classic Clog',
	// 		price: 174.99,
	// 		colors: ['black', 'white', 'yellow'],
	// 		size: [35, 36, 37, 38],
	// 		discount: false,
	// 		details:
	// 			"Original. Versatile. Comfortable. It’s the iconic clog that started a comfort revolution around the world! The irreverent go-to comfort shoe that you're sure to fall deeper in love with day after day. Crocs Classic Clogs offer lightweight Iconic Crocs Comfort™, a color for every personality - shop the Classic Clog in Black. Here's your ongoing invitation to be comfortable in your own shoes. ",
	// 	},
	// 	{
	// 		id: 2,
	// 		img: '',
	// 		category: 'mens',
	// 		brand: 'VANS',
	// 		name: 'Old Skool Black',
	// 		price: 129.99,
	// 		colors: ['black', 'white', 'yellow'],
	// 		size: [35, 36, 37, 38],
	// 		discount: true,
	// 		details:
	// 			'Vans are a staple in skate culture and street style, and this skate sneaker is no exception. Introduced in 1977, the Vans Old Skool sneaker is a classic in the Vans collection. Full of attitude, the Old Skool is durable and lightweight, and can give the other boys in the collection a run for its money. Constructed from canvas and a true icon, The Vans Old Skool Black features contrasting suede panels along the toe and heel, plus the iconic stripe along the side of the shoe, and sits over a chunky midsole. Available in a huge range of colours.',
	// 	},
	// 	{
	// 		id: 3,
	// 		img: '',
	// 		category: 'mens',
	// 		brand: 'Dr Martens',
	// 		name: 'Jadon Pisa Leather',
	// 		price: 399.99,
	// 		colors: ['black'],
	// 		size: [35, 36, 37, 38],
	// 		discount: false,
	// 		details:
	// 			'Vans are a staple in skate culture and street style, and this skate sneaker is no exception. Introduced in 1977, the Vans Old Skool sneaker is a classic in the Vans collection. Full of attitude, the Old Skool is durable and lightweight, and can give the other boys in the collection a run for its money. Constructed from canvas and a true icon, The Vans Old Skool Black features contrasting suede panels along the toe and heel, plus the iconic stripe along the side of the shoe, and sits over a chunky midsole. Available in a huge range of colours.',
	// 	},
	// ]);
	// return (
	// 	<div className="container product-page">
	// 		{shoes.map((shoe) => {
	// 			const { img, name, brand, price, colors, size, details, discount } =
	// 				shoe;
	// 			return (
	// 				<Link to={`/shop/${shoe.id}`}>
	// 					<img src={img} alt="" />
	// 					{discount && <div>Save 33%</div>}
	// 					<div>{brand}</div>
	// 					<div>{name}</div>
	// 					<div>{price}</div>
	// 					<div>
	// 						{colors.map((color) => {
	// 							return <div>{color}</div>;
	// 						})}
	// 					</div>
	// 				</Link>
	// 			);
	// 		})}
	// 	</div>
	// );

	return (
		<div className="container product-page">
			<Filter />
			{children}
		</div>
	);
}

export default ProductPage;
