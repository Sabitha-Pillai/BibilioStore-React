import React, { useState, useEffect } from "react";
import styles from "./Checkout.modules.css";
import Button from "react-bootstrap/Button";


const Checkout = () => {
  
  return (
    <div className={styles.cart}>
     
      <div className={styles.checkout__summary}>
        <h4 className={styles.summary__title}>Checkout Successful</h4>
        <div className={styles.summary__price}>
          <span>Thanks for purchasing!!</span>
        </div>
      </div>
    </div>
  );
};


export default Checkout;
