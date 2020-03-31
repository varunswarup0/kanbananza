import { connect } from 'react-redux';
import Card from '../components/Card';
import { removeCard } from '../actions/card-actions';
import memoize from 'lodash/memoize';
import { createSelector } from 'reselect';

const mapStateToProps = (state, ownProps) => {
	return {
		card: state.cards.entities[ownProps.cardId]
	};
};

export default connect(mapStateToProps, { removeCard })(Card);
