import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import CartItem from "./CartItem/CartItem";
import {
  cartClear
} from "../../redux/Shopping/shopping-actions";

const Cart = ({ cart,cartClear }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.Price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>Rs:{totalPrice}</span>
        </div>
        <Link to="/checkout">
        <Button variant="success" onClick={() => cartClear(0)}>
          <strong>Proceed to checkout </strong>
        </Button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state,dispatch) => {
  return {
    cart: state.shop.cart,
    //cartClear: (id) => dispatch(cartClear(id)),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
   cartClear: (id) => dispatch(cartClear(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
//export default Cart;
