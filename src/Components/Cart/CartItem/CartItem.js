import React, { useState } from "react";
import styles from "./CartItem.module.css";
import { MdDelete } from "react-icons/md";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.img}
        alt={item.Name} height={120} width={120}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.Name}</p>
        <p className={styles.details__desc}>{item.Author}</p>
        <p className={styles.details__price}>Rs: {item.Price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className={styles.actions__deleteItemBtn}
        >
          <MdDelete/>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, Number(value))),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
