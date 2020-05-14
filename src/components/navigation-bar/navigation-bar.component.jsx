import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';


import { ReactComponent as Logo } from '../../assets/crwn.svg';
import './navigation-bar.styles.scss'

const NavigationBar = ({ currentUser }) => {
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
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </div>
            :
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(NavigationBar);