import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';
import CheckoutPage from './checkout.component';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice
});

const CheckoutPageContainer = compose(
  connect(mapStateToProps)
)(CheckoutPage);

export default CheckoutPageContainer;