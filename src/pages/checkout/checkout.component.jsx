import React from 'react';

import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';

const CheckoutPage = ({ cartItems, totalPrice }) => {
  const headerNames = [
    "Product", "Description", "Quantity", "Price", "Remove"
  ];

  const createHeaderBlock = name => {
    return (
      <div className="header-block">
        <span>{name}</span>
      </div>
    );
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        {
          headerNames.map(hName => createHeaderBlock(hName))
        }
      </div>
      {
        cartItems.map(cartItem => 
          cartItem.name
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