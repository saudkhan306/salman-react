import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './conponants/header-footer/header/Header';
import Footer from './conponants/header-footer/Footer';

import HomePage from './conponants/pages/HomePage';
import Listing from './conponants/pages/Listing';
import ProductDetails from './conponants/pages/Details';

// CSS
import './assets/css/style.css';

function App() { 
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/product-listing" component={Listing} />
        <Route  path="/product-detail/:id" component={ProductDetails} />
        <Route  path="/womens-wear" component={Listing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
