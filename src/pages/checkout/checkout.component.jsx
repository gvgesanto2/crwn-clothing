import React from 'react';

import './checkout.styles.scss';

import CheckoutItemContainer from '../../components/checkout-item/checkout-item.container';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

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
        cartItems.length ?
          cartItems.map(cartItem => 
            <CheckoutItemContainer key={cartItem.id} cartItem={cartItem} />
          )
          :
          <span className="empty-checkout-message">
            Your cart is empty
          </span>
      }
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
      <StripeCheckoutButton price={totalPrice} />
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 05/20 - CVV:123
      </div>
    </div>
  );
}

export default CheckoutPage;