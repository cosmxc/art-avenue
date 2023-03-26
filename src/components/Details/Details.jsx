import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext, ProductDispath } from '../Context/ContextProvider';
import { HiArrowRight } from 'react-icons/hi';
import './Details.css';
import Buttons from '../Buttons/Buttons';

export default function Details() {
	const navigate = useNavigate();
	const { state } = useContext(ProductContext);
	const { dispath } = useContext(ProductDispath);
	const params = useParams();
	const datas = state.allProducts.find(
		(product) => product.id.toString() === params.id.toString()
	);
	const checkBasket = state.basket.some(
		(product) => product.id.toString() === params.id.toString()
	);

	return (
		<div className="details_container">
			<div className="details_linkBar">
				<span>Product Detail</span>
				<span onClick={() => navigate(-1)} className="details_backLink">
					Go Back
					<HiArrowRight />
				</span>
			</div>
			<div className="datails_card">
				<div className="image_box">
					<img
						className="card_image"
						src={datas.image}
						alt="card_image"
					/>
					<img src="images/kg.png" alt="" className="kg_image" />
				</div>
				<span className="divider"></span>
				<div className="main_content_box">
					<span className="card_category">{datas.category}</span>
					<div className="card_content">
						<span className="card_title">{datas.title}</span>
						<span style={{ color: '#191516' }}>|</span>
						<span className="card_price">
							₱ {datas.price.toLocaleString()}
						</span>
					</div>
					<div className="card_information">
						<ul>
							<li>Size: {datas.size}</li>
							<li>Info: {datas.info}</li>
						</ul>
					</div>
					{checkBasket && <Buttons {...datas} />}
					<button
						onClick={() =>
							dispath({
								type: 'ADD_TO_BASKET',
								payload: datas.id,
							})
						}
						className="card_buy"
					>
						Add to Basket
					</button>
				</div>
			</div>
		</div>
	);
}
