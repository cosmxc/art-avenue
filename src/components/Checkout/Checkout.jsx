import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context/ContextProvider';
import { HiArrowLeft } from 'react-icons/hi';
import { Webhook, MessageBuilder } from 'discord-webhook-node';
import './Checkout.css';
import codedata from './Code';

export default function Checkout({ name, setName, number, setNumber, code, setCode, note, setNote }) {
	const navigate = useNavigate();
	const { state } = useContext(ProductContext);
	const price = state.totalPrice.toLocaleString();
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
			return `${item.count} ${item.count > 1 ? 'pcs' : 'pc'} | ${item.title} - ₱ ${item.price * item.count}\n`;
		})
		.join('');

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleNumberChange = (e) => {
		setNumber(e.target.value);
	};

	const handleCodeChange = (e) => {
		setCode(e.target.value);
	};

	const handleNoteChange = (e) => {
		setNote(e.target.value);
	};

	return (
		<div className="checkout_container">
			<div className="checkout_linkBar">
				<span onClick={() => navigate(-1)} className="checkout_backLink">
					<HiArrowLeft />
					Go Back
				</span>
				<span>Checkout</span>
			</div>
			<div className="checkout_card">
				<span className="basket_send details_send">Checkout Details</span>
				<p>
					<label htmlFor="name">Full Name</label>
					<input
						id="name"
						name="name"
						autoComplete="name"
						aria-label="name"
						aria-required="true"
						placeholder="Ex: Juan Dela Cruz"
						value={name}
						onChange={handleNameChange}
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
						placeholder="Ex: 09123456789"
						value={number}
						onChange={handleNumberChange}
					/>
				</p>

				<p>
					<label>Items</label>
					<span className="sum">{order}</span>
				</p>

				<p>
					<label htmlFor="note">Note</label>
					<input
						type="text"
						id="note"
						name="note"
						autoComplete="number"
						aria-label="number"
						placeholder="Ex: Dora the explorer design"
						value={note}
						onChange={handleNoteChange}
					/>
				</p>

				<p>
					<label className="amt" htmlFor="price">
						Amount to Pay
					</label>
					<span className="card_price">₱ {price}</span>
				</p>

				<p className={isVisible ? 'error' : 'noerror'}>Error: Please fill up the empty field</p>

				<p className={isVisible2 ? 'invalidcode' : 'validcode'}>
					Error: Invalid code. Please Make sure it matches the code given by the seller
				</p>

				<p className={isVisible3 ? 'invalidcode' : 'validcode'}>Error: Please enter a valid mobile number.</p>

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
							onChange={handleCodeChange}
						/>
						<button
							type="submit"
							className="checkout_button"
							onClick={() => {
								const validcode = 'artave';

								const numberRegex = new RegExp('^[0-9]*$');

								if (name.length <= 0 || number.length <= 0) {
									handleClick();
								} else if (!numberRegex.test(number) || number.length < 11 || number.length > 11) {
									setIsVisible(true);
									setIsVisible2(true);
									handleClick3();
								} else if (!validcode) {
									setIsVisible(true);
									setIsVisible3(true);
									handleClick2();
								} else {
									const index = codedata.indexOf(code);
									if (index > -1) {
										codedata.splice(index, 1);
									}

									navigate('/completed');

									const embed = new MessageBuilder()
										.setTitle('Order Form')
										.setColor('#cb1e1e')
										.addField(`Name:`, `\`\`\`${name}\`\`\``)
										.addField(`Mobile Number:`, `\`\`\`${number}\`\`\``)
										.addField(`Order:`, `\`\`\`${order}\`\`\``)
										.addField(`Code:`, `\`\`\`${code}\`\`\``)
										.addField(`Note:`, `\`\`\`${note || 'None'}\`\`\``)
										.addField(`Total Price:`, `\`\`\`₱ ${price}\`\`\``)
										.setFooter('Art Avenue')
										.setTimestamp();

									hook.send(embed);
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
