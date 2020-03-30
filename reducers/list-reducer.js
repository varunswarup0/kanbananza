import { lists as defaultLists } from '../src/normalized-state';

const listsReducer = (lists = defaultLists, action) => {
	console.log(lists, action);
	return lists;
};

export default listsReducer;
