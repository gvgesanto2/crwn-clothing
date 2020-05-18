import { compose } from 'redux';
import { connect } from 'react-redux';

import { addItem } from "../../redux/cart/cart.actions";

import CollectionItem from './collection-item.component';

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

const CollectionItemContainer = compose(
  connect(null, mapDispatchToProps)
)(CollectionItem);

export default CollectionItemContainer;