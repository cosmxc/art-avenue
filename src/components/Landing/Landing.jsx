import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
export default function Landing() {
	return (
		<>
			<div className="landing_container">
				<div className="title_container">
					<div className="title_sub">
						<span>Quality Art Crafts</span>
					</div>
					<div className="title">
						<img src="/images/textlogo.svg" alt="logo" />
					</div>
					<div className="subtitle">
						We are a business that specializes in crafting unique
						and stylish arts and crafts that will cater to your
						desired design. We offer variety of artwork including
						the necklace, keychains, and stickers.
					</div>
					<div className="landing_btn">
						<Link to="/products">
							<button>Shop Now</button>
						</Link>
					</div>
				</div>
				<div className="logo">
					<img src="/images/ArtAvenueLogo.svg" alt="logo" />
				</div>
			</div>
		</>
	);
}
