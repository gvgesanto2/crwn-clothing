import React from 'react';

import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ cartItems, totalPrice }) => {
  const headerNames = [
    "Product", "Description", "Quantity", "Price", "Remove"
  ];

  const createHeaderBlock = (name, index) => {
    return (
      <div key={`header-block-${index}`} className="header-block">
        <span>{name}</span>
      </div>
    );
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        {
          headerNames.map((hName, idx) => createHeaderBlock(hName, idx))
        }
      </div>
      {
        cartItems.map(cartItem => 
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
      <div className="total">
      <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);