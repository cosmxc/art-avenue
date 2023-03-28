import React from 'react';
import './Completed.css';
import { useNavigate } from 'react-router-dom';

export default function Completed() {
	const navigate = useNavigate();

	return (
		<div className="checkout_container">
			<div className="checkout_card">
				<span className="msg">Thank you for ordering!</span>
				<button
					className="completed_button"
					onClick={() => navigate('/products')}
				>
					Buy again
				</button>
			</div>
		</div>
	);
}
