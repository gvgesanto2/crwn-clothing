import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import { selectCurrentUser } from './redux/user/user.selectors';

import CheckoutPageContainer from './pages/checkout/checkout.container';
import HomePage from './pages/homepage/homepage.component';
import ShopPageContainer from './pages/shop/shop.container';
import NavigationBarContainer from './components/navigation-bar/navigation-bar.container';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if(userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   } else {
    //     setCurrentUser(userAuth);
    //   }
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <NavigationBarContainer />
        <Switch>
          <Route path="/shop" component={ShopPageContainer} />
          <Route exact path="/checkout" component={CheckoutPageContainer} />
          <Route 
            exact 
            path="/signin" 
            render={() => 
              currentUser ? 
                <Redirect to="/" />
                :
                <SignInAndSignUpPage />
            } 
          /> 
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
