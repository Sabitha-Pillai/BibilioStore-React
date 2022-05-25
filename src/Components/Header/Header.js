import classes from "./Header.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BsCartFill } from "react-icons/bs";
import logo4 from "../../assets/logo4.PNG";
import React,{useEffect, useState} from "react";
import Badge from '@material-ui/core/Badge';
import { connect } from "react-redux";

const Header = ({cart}) => {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() =>{
    let count =0;
    if(cart.length > 0){
      cart.forEach((item)=>{
        count +=item.qty;
      });
    }
    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <div className={classes["header-container"]}>
       <Link to="/">
      <header className={classes.header}><img src={logo4} width="40px"height="40px"/>Bibliostore</header>
      <div className={classes.subheader}>
        <b>The world of books</b>
        
      </div>
      </Link>
      <br/>
      <Link to="/Signin">
      <div className={classes.myAccount}>
        <b>
          <BsFillPersonFill />
          Sign in&nbsp;
        </b>
      </div>
      </Link>
      <br />
      <Link to="/cart">
      <div className={classes.search}>
        |
        <b>
          &nbsp;
          <Badge badgeContent={cartCount} 
      color="primary">
        <BsCartFill/>
      </Badge>
          </b>
      </div>
      <br />
      </Link>
    </div>
  );
};
const mapStateToProps = (state) =>{
  return{
    cart: state.shop.cart,
  }
}
export default connect(mapStateToProps)(Header);
//export default Header;

