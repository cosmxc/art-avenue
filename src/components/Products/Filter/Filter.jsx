import React, { useContext } from 'react';
import { FilterDispath } from '../../Context/ContextFilter';
import './Filter.css';

export default function Filter() {
	const { dispath } = useContext(FilterDispath);
	return (
		<div className="filter_container">
			<div className="filter_btnBox">
				<button
					onClick={() => dispath({ type: 'ALL' })}
					className="filter_btn"
				>
					All
				</button>
				<button
					onClick={() => dispath({ type: 'KEYCHAINS' })}
					className="filter_btn"
				>
					Keychains
				</button>
				<button
					onClick={() => dispath({ type: 'STICKERS' })}
					className="filter_btn"
				>
					Stickers
				</button>
				<button
					onClick={() => dispath({ type: 'NECKLACES' })}
					className="filter_btn"
				>
					Necklaces
				</button>
			</div>
		</div>
	);
}
