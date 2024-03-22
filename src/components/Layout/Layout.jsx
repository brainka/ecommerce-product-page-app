import React from 'react';
import Navigation from '../../pages/Navigation/Navigation';
import '../Layout/Layout.css';
import { Link } from 'react-router-dom';
import ShoppingCartLogo from '../../images/icon-cart.svg';
import UserAvatar from '../../images/image-avatar.png';

function Layout({ children }) {
	return (
		<div className="layout-container">
			<div className="layout">
				<div className="layout-left">
					<Link to="/" className="logo">
						sneakers
					</Link>
					<Navigation />
				</div>
				<div className="layout-right">
					<div className="shopping-cart">
						<img src={ShoppingCartLogo} alt="shopping cart logo" />
					</div>
					<div className="avatar">
						<img className="avatar" src={UserAvatar} alt="user avatar" />
					</div>
				</div>
			</div>
			{children}
		</div>
	);
}

export default Layout;
