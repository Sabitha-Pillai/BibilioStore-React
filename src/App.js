import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Cart from "./Components/Cart/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Checkout from "./Components/Checkout/Checkout";
import signIn from "./Components/Signin/Signin";
import SingleItem from "./Components/SingleItem/SingleItem";
function App(current) {
  return (
    <Router>
      <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/Signin" component={signIn} />
        <Route exact path="/checkout" component={Checkout} />
        {/* <Route exact path="/product/:id" component={Pro} /> */}
        {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
      </Switch>
      <Footer />
      </div>
    </Router>
    // <React.Fragment>
    //   <Header />
    //   <Content />
    //   <Footer />
    // </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);