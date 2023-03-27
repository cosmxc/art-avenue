import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext, ProductDispath } from '../Context/ContextProvider';
import { HiArrowRight } from 'react-icons/hi';
import { Webhook, MessageBuilder } from 'discord-webhook-node';
import './Checkout.css';
import codedata from './Code';

export default function Checkout() {
	const navigate = useNavigate();
	const { dispath } = useContext(ProductDispath);
	const { state } = useContext(ProductContext);
	const price = state.totalPrice.toLocaleString();
	const [name, setName] = React.useState('');
	const [number, setNumber] = React.useState('');
	const [code, setCode] = React.useState('');
	const [isVisible, setIsVisible] = React.useState(true);
	const [isVisible2, setIsVisible2] = React.useState(true);
	const [isVisible3, setIsVisible3] = React.useState(true);

	const handleClick = () => setIsVisible(false);
	const handleClick2 = () => setIsVisible2(false);
	const handleClick3 = () => setIsVisible3(false);

	const hook = new Webhook(
		'https://discord.com/api/webhooks/1088831677289205922/ACflo9X0Zzb3eaTIK9yvHOvxWudqFPsknr-WQH5Yzw0dpVCQe1AY7pChcqoee4_texIh'
	);

	const order = state.basket
		.map((item) => {
			return `${item.count} ${item.count > 1 ? 'pcs' : 'pc'} | ${
				item.title
			} - ₱ ${item.price * item.count}\n`;
		})
		.join('');

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
				<span className="basket_send details_send">Details</span>
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
					<label>Items</label>
					<span className="sum">{order}</span>
				</p>

				<p>
					<label className="amt" htmlFor="price">
						Amount to Pay
					</label>
					<span className="card_price">₱ {price}</span>
				</p>

				<p className={isVisible ? 'error' : 'noerror'}>
					Error: Please fill up the empty field
				</p>

				<p className={isVisible2 ? 'invalidcode' : 'validcode'}>
					Error: Invalid code. Please Make sure it matches the code
					given by the seller
				</p>

				<p className={isVisible3 ? 'invalidcode' : 'validcode'}>
					Error: Please enter a valid mobile number.
				</p>

				<p>
					<label htmlFor="number">Checkout Code</label>
					<div className="code">
						<input
							className="code-input"
							type="text"
							id="code"
							name="code"
							autoComplete="code"
							aria-label="code"
							aria-required="true"
							placeholder="Enter the code"
							value={code}
							onChange={(e) => setCode(e.target.value)}
						/>
						<button
							type="submit"
							className="checkout_button"
							onClick={() => {
								const validcode = codedata.find(
									(i) => i === code
								);

								const numberRegex = new RegExp('^[0-9]*$');

								if (name.length <= 0 || number.length <= 0) {
									handleClick();
								} else if (
									!numberRegex.test(number) ||
									number.length < 11 ||
									number.length > 11
								) {
									setIsVisible(true);
									setIsVisible2(true);
									handleClick3();
								} else if (!validcode) {
									setIsVisible(true);
									setIsVisible3(true);
									handleClick2();
								} else {
									navigate('/completed');

									const embed = new MessageBuilder()
										.setTitle('Order Form')
										.setColor('#cb1e1e')
										.addField(
											`Name:`,
											`\`\`\`${name}\`\`\``
										)
										.addField(
											`Mobile Number:`,
											`\`\`\`${number}\`\`\``
										)
										.addField(
											`Order:`,
											`\`\`\`${order}\`\`\``
										)
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
				</p>
			</div>
		</div>
	);
}
