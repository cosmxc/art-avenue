import React, { useContext } from 'react';
import { ProductDispath } from '../Context/ContextProvider';

export default function FavoriteCard(props) {
	const { dispath } = useContext(ProductDispath);

	return (
		<div key={props.id} className="favorite_card">
			<img
				className="favorite_img"
				src={props.image}
				alt="favorite_image"
			/>
			<div className="favorite_content">
				<div className="favorite_title">
					<span>{props.title}</span>
				</div>
			</div>
			<button
				onClick={() =>
					dispath({ type: 'ADD_FAVORITE', payload: props.id })
				}
				className="favorite_button"
			>
				Remove
			</button>
		</div>
	);
}
