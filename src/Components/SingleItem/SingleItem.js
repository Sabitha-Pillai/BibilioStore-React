import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import { Warning } from "@material-ui/icons";
import Button from "react-bootstrap/Button";

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current.img}
        alt={current.Name} 
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__Name}>{current.Name}</p>
        <p className={styles.details__Author}>{current.Author}</p>
        <p className={styles.details__Genre}>{current.Genre}</p>
        <p className={styles.details__Price}>Rs: {current.Price}</p>
        <p className={styles.details__Rating}>{current.Rating}</p>
        <p className={styles.details__Published}>{current.Published}</p>
        <p className={styles.details__Language}>{current. Language}</p>
        <p className={styles.details__Pages}>{current.Pages}</p>
        <Button
          onClick={() => addToCart(current.id)}
          className={styles.details__addBtn} variant={Warning}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
