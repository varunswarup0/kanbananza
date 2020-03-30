import { connect } from 'react-redux';
import Cards from '../components/Lists';

const mapStateToProps = state => {
	return {
		cards: state.cards.ids
	};
};

export default connect(mapStateToProps)(Cards);
