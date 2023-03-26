import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import Interest from './Interest';
import { ProductContext, ProductDispath } from '../../Context/ContextProvider';
import Buttons from '../../Buttons/Buttons';

export default function Card(props) {
	const { dispath } = useContext(ProductDispath);
	const { state } = useContext(ProductContext);

	const datas = state.allProducts.find((product) => product.id === props.id);
	const checkBasket = state.basket.some((product) => product.id === props.id);

	return (
		<div key={props.id} className="box">
			<img className="product_img" src={props.image} alt="product" />
			<div className="content">
				<div className="title">
					<span>{props.title}</span>
				</div>
				<div className="price">
					<span>₱ {props.price.toLocaleString()}</span>
				</div>
			</div>
			{checkBasket ? (
				<Buttons {...datas} />
			) : (
				<button
					onClick={() =>
						dispath({ type: 'ADD_TO_BASKET', payload: props.id })
					}
					className="products_button buy_button"
				>
					Add
					<FiShoppingCart className="buy_icon" />
				</button>
			)}
			<Interest interest={props.isInterest} id={props.id} />
		</div>
	);
}
