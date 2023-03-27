import React, { useContext } from 'react';
import './Basket.css';
import { useNavigate, Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { ProductContext, ProductDispath } from '../Context/ContextProvider';
import BasketItem from './BasketItem';

export default function Basket() {
	const { state } = useContext(ProductContext);
	const { dispath } = useContext(ProductDispath);
	const navigate = useNavigate();

	return (
		<>
			<div className="favorite_container_linkBar">
				<div className="favorite_linkBar">
					<span>Basket</span>
					<Link className="favorite_backLink" to={'/products'}>
						Go Back
						<HiArrowRight />
					</Link>
				</div>
			</div>
			{state.basket.length > 0 ? (
				<div className="basket_container">
					<div className="basket_itemBox">
						{state.basket.map((product) => (
							<BasketItem key={product.id} {...product} />
						))}
					</div>
					<div className="basket_priceBox">
						<div className="basket_send">
							<span>Total Price</span>
							<span>₱ {state.totalPrice.toLocaleString()}</span>
						</div>
						<button
							onClick={() => navigate('/checkout')}
							className="basket_button_buy"
						>
							Continue the purchase
						</button>
						<button
							onClick={() => dispath({ type: 'EMPTY_BASKET' })}
							className="basket_button_remove"
						>
							Remove all from the basket
						</button>
					</div>
				</div>
			) : (
				<div className="favorite_empty">
					<img
						className="favorite_empty_img"
						src="images/empty-cart.png"
						alt=""
					/>
					<span className="favorite_empty_title">
						The basket is empty
					</span>
				</div>
			)}
		</>
	);
}
