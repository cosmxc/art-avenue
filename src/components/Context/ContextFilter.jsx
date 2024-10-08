import React, { createContext, useReducer } from 'react';
import allProducts from '../../Data';

const initialFilterState = {
	filteredItems: [...allProducts],
	searchKey: '',
};

const filterItemsHandler = (key) => {
	const filteredItems = allProducts.filter((product) => {
		return product.category === key;
	});

	return { filteredItems };
};

const filterReduce = (state, action) => {
	switch (action.type) {
		case 'SEARCH_KEYWORD':
			state.searchKey = action.payload;
			return {
				...state,
			};
		case 'ALL':
			state.filteredItems = [...allProducts];
			return {
				...state,
			};
		case 'GENSHIN':
			return {
				...filterItemsHandler('Genshin'),
			};
		case 'HAIKYUU':
			return {
				...filterItemsHandler('Haikyuu'),
			};
		case 'VALORANT':
			return {
				...filterItemsHandler('Valorant'),
			};
		case 'KEYCHAIN':
			return {
				...filterItemsHandler('Keychain'),
			};
		case 'NECKLACE':
			return {
				...filterItemsHandler('Necklace'),
			};
		case 'BTS':
			return {
				...filterItemsHandler('BTS'),
			};
		case 'AmongUs':
			return {
				...filterItemsHandler('AmongUs'),
			};
		case 'BTOB':
			return {
				...filterItemsHandler('BTOB'),
			};
		case 'CAT':
			return {
				...filterItemsHandler('Cat'),
			};
		case 'Starrail':
			return {
				...filterItemsHandler('Starrail'),
			};

		default:
			return state;
	}
};

export const FilterContext = createContext();
export const FilterDispath = createContext();

export default function ContextFilter({ children }) {
	const [state, dispath] = useReducer(filterReduce, initialFilterState);
	return (
		<FilterContext.Provider value={{ state }}>
			<FilterDispath.Provider value={{ dispath }}>{children}</FilterDispath.Provider>
		</FilterContext.Provider>
	);
}
