import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Basket from './components/Basket/Basket';
import Completed from './components/Completed/Completed';
import Checkout from './components/Checkout/Checkout';
import Details from './components/Details/Details';
import ContextFilter from './components/Context/ContextFilter';
import ContextProvider from './components/Context/ContextProvider';
import FavoritePage from './components/Favorite/FavoritePage';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Landing from './components/Landing/Landing';

function App() {
	let router = useRoutes([
		{ path: '/', element: <Landing /> },
		{ path: '/:id', element: <Details /> },
		{ path: '/products', element: <Products /> },
		{ path: '/checkout', element: <Checkout /> },
		{ path: '/completed', element: <Completed /> },
		{ path: '/favorite', element: <FavoritePage /> },
		{ path: '/basket', element: <Basket /> },
		{ path: '*', element: <Navigate to={'/'} /> },
	]);
	return (
		<ContextProvider>
			<ContextFilter>
				<Header />
				{router}
			</ContextFilter>
		</ContextProvider>
	);
}

export default App;
