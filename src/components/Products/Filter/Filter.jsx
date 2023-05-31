import React, { useContext } from 'react';
import { FilterDispath } from '../../Context/ContextFilter';
import './Filter.css';

export default function Filter() {
	const { dispath } = useContext(FilterDispath);
	return (
		<div className="filter_container">
			<div className="filter_btnBox">
				<button onClick={() => dispath({ type: 'ALL' })} className="filter_btn">
					All
				</button>
				<button onClick={() => dispath({ type: 'KEYCHAIN' })} className="filter_btn">
					Keychain
				</button>
				<button onClick={() => dispath({ type: 'NECKLACE' })} className="filter_btn">
					Necklace
				</button>
				<button onClick={() => dispath({ type: 'GENSHIN' })} className="filter_btn">
					Genshin
				</button>
				<button onClick={() => dispath({ type: 'HAIKYUU' })} className="filter_btn">
					Haikyuu
				</button>
				<button onClick={() => dispath({ type: 'VALORANT' })} className="filter_btn">
					Valorant
				</button>
				<button onClick={() => dispath({ type: 'BTS' })} className="filter_btn">
					BTS
				</button>
			</div>
		</div>
	);
}
