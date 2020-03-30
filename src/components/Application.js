import React from 'react';

import Users from './Users';
import CreateList from './CreateList';
import ListsContainer from '../containers/ListsContainer';
import CardsContainer from '../containers/CardsContainer';

const Application = () => {
	return (
		<main className='Application'>
			<Users />
			<section>
				<CreateList />
				<ListsContainer />
				<CardsContainer />
			</section>
		</main>
	);
};

export default Application;
