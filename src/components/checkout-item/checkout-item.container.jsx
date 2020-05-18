import { compose } from 'redux';
import { connect } from 'react-redux';

import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';
import CheckoutItem from './checkout-item.component';

const mapDispatchToProps = dispatch => ({
  clearItem: itemId => dispatch(clearItem(itemId)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

const CheckoutItemContainer = compose(
  connect(null, mapDispatchToProps)
)(CheckoutItem);

export default CheckoutItemContainer;