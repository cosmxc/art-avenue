import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext, ProductDispath } from '../Context/ContextProvider';
import { HiArrowRight } from 'react-icons/hi';
import { Webhook, MessageBuilder } from 'discord-webhook-node';
import './Checkout.css';

export default function Checkout() {
	const navigate = useNavigate();
	const { dispath } = useContext(ProductDispath);

	const { state } = useContext(ProductContext);
	const price = state.totalPrice.toLocaleString();
	const [name, setName] = React.useState('');
	const [number, setNumber] = React.useState('');
	const [isVisible, setIsVisible] = React.useState(true);

	const handleClick = () => setIsVisible(false);

	const hook = new Webhook(
		'https://discord.com/api/webhooks/1088831677289205922/ACflo9X0Zzb3eaTIK9yvHOvxWudqFPsknr-WQH5Yzw0dpVCQe1AY7pChcqoee4_texIh'
	);

	return (
		<div className="checkout_container">
			<div className="checkout_linkBar">
				<span>Checkout</span>
				<span
					onClick={() => navigate(-1)}
					className="checkout_backLink"
				>
					Go Back
					<HiArrowRight />
				</span>
			</div>
			<div className="checkout_card">
				<span className="basket_send">Details</span>
				<p>
					<label htmlFor="name">Name</label>
					<input
						id="name"
						name="name"
						autoComplete="name"
						aria-label="name"
						aria-required="true"
						placeholder="Enter your name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</p>
				<p>
					<label htmlFor="number">Mobile Number</label>
					<input
						type="text"
						id="number"
						name="number"
						autoComplete="number"
						aria-label="number"
						aria-required="true"
						placeholder="Enter your number"
						value={number}
						onChange={(e) => setNumber(e.target.value)}
					/>
				</p>

				<p>
					<label htmlFor="price">Amount to Pay</label>
					<span className="card_price">₱ {price}</span>
				</p>

				<p className={isVisible ? 'error' : 'noerror'}>Please fill up the empty field/s</p>

				<button
					type="submit"
					className="checkout_button"
					onClick={() => {
						if (name.length == 0 || number.length == 0) {
							handleClick();
						} else {
							navigate('/completed');

							const order = state.basket
								.map((item) => {
									return `${item.count} ${
										item.count > 1 ? 'items' : 'item'
									} | ${item.title} - ₱ ${
										item.price * item.count
									}\n`;
								})
								.join('');

							const embed = new MessageBuilder()
								.setTitle('Order Form')
								.setColor('#cb1e1e')
								.addField(`Name:`, `\`\`\`${name}\`\`\``)
								.addField(
									`Mobile Number:`,
									`\`\`\`${number}\`\`\``
								)
								.addField(`Order:`, `\`\`\`${order}\`\`\``)
								.addField(
									`Total Price:`,
									`\`\`\`₱ ${price}\`\`\``
								)
								.setFooter('Art Avenue')
								.setTimestamp();

							hook.send(embed);

							dispath({ type: 'EMPTY_BASKET' });
						}
					}}
				>
					Checkout
				</button>
			</div>
		</div>
	);
}
