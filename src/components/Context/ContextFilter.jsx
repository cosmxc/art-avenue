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
		case 'KEYCHAINS':
			return {
				...filterItemsHandler('Keychains'),
			};
		case 'STICKERS':
			return {
				...filterItemsHandler('Stickers'),
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
			<FilterDispath.Provider value={{ dispath }}>
				{children}
			</FilterDispath.Provider>
		</FilterContext.Provider>
	);
}
