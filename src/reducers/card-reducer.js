import { cards as defaultCards } from '../normalized-state';

const cardsReducer = (cards = defaultCards, action) => {
	console.log(cards, action);
	return cards;
};

export default cardsReducer;
