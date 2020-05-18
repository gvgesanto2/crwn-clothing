import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crwn.svg';
import './navigation-bar.styles.scss';

import { auth } from '../../firebase/firebase.utils';
import CartIconContainer from '../cart-icon/cart-icon.container';
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container';

const NavigationBar = ({ currentUser, hidden, signOutStart }) => {
  return (
    <div className="nav-bar">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {
          currentUser ?
            <div 
              className="option" 
              onClick={signOutStart}
            >
              SIGN OUT
            </div>
            :
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
        }
        <CartIconContainer />
      </div>
      {
        !hidden &&
          <CartDropdownContainer />
      }  
    </div>
  );
}

export default NavigationBar;