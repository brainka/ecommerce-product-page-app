import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CollectionsPage from './pages/CollectionsPage/CollectionsPage';
import ProductPage from './pages/ProductPage/ProductPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Products from './components/Products/Products';
import SalePage from './pages/Sale/SalePage';
import Product from './components/Product/Product';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<div className="main-app">
			<Provider store={store} r>
				<Router>
					<Routes>
						<Route
							path="/"
							element={
								<Layout>
									<HomePage />
								</Layout>
							}
						></Route>
						<Route
							path="/shop/collections"
							element={
								<Layout>
									<CollectionsPage />
								</Layout>
							}
						/>
						<Route
							path="/shop/mens"
							element={
								<Layout>
									<ProductPage>
										<Products />
									</ProductPage>
								</Layout>
							}
						/>
						<Route
							path="/shop/womens"
							element={
								<Layout>
									<ProductPage>
										<Products />
									</ProductPage>
								</Layout>
							}
						/>
						<Route
							path="/about"
							element={
								<Layout>
									<AboutPage />
								</Layout>
							}
						/>
						<Route
							path="/shop/sale"
							element={
								<Layout>
									<SalePage />
								</Layout>
							}
						/>
						<Route
							path="/shop/:productId"
							element={
								<Layout>
									<Product />
								</Layout>
							}
						/>
						<Route
							path="contact"
							element={
								<Layout>
									<ContactPage />
								</Layout>
							}
						/>
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
