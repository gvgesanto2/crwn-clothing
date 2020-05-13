import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignOut} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
