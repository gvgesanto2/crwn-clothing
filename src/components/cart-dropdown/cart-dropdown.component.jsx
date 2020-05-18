import React from 'react';

import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" >
        {
          cartItems.length ? 
            cartItems.map(cartItem => 
              <CartItem key={cartItem.id} item={cartItem} />  
            )
            :
            <span className="empty-message">
              Your cart is empty
            </span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push("/checkout");
        toggleCartHidden();
      }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default CartDropdown;