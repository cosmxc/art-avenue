import React from 'react';
import './Completed.css';
import { useNavigate } from 'react-router-dom';
import { ProductContext, ProductDispath } from '../Context/ContextProvider';

export default function Completed(props) {
	const navigate = useNavigate();
	const { state } = React.useContext(ProductContext);
	const { dispath } = React.useContext(ProductDispath);

	const order = state.basket
		.map((item) => {
			return `${item.count} ${item.count > 1 ? 'pcs' : 'pc'} | ${item.title} - ₱ ${item.price * item.count}\n`;
		})
		.join('');

	return (
		<div className="checkout_container">
			<div className="checkout_card">
				<span className="basket_send details_send">Reciept</span>
				<div className="sum_container">
					<p>
						<label htmlFor="name">Name</label>
						<span className="sum com">{props.name}</span>
					</p>
					<div className="dotted"></div>
					<p className="ps">
						<label htmlFor="name">Number</label>
						<span className="sum com">{props.number}</span>
					</p>
					<div className="dotted"></div>
					<p className="ps">
						<label htmlFor="name">Code</label>
						<span className="sum com">{props.code}</span>
					</p>
					<div className="dotted"></div>
					<p className="ps">
						<label htmlFor="name">Order</label>
						<span className="sum com">{order}</span>
					</p>
					<div className="dotted"></div>
				</div>
				<span className="basket_send details_send">Thank you for ordering!</span>
				<span className="pop">This serves as your proof of payment</span>
				<button
					className="completed_button"
					onClick={() => {
						navigate('/products');
						dispath({ type: 'EMPTY_BASKET' });
					}}
				>
					Buy again
				</button>
			</div>
		</div>
	);
}
