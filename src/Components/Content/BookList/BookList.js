import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import classes from "./BookList.modules.css";
import { connect } from "react-redux";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";
import { BookSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";
let newEvent = () => {
  alert("Added to cart");
};
const Book = ({data, addToCart, loadCurrentItem }) => {
  return (
    <Card style={{ width: "250px" }} className={classes.cardItem}>
    <Link to={`/product/${data.id}`}>
   
      <Card.Img variant="top" src={data.img}  onClick={() => loadCurrentItem(data)}/>
    </Link>
      <Card.Body>
        <Card.Title>{data.Name}</Card.Title>
        <Card.Text>{data.Author}</Card.Text>
        <Card.Text>{data.Genre}</Card.Text>
        <Card.Text>
          <b>Rs:{data.Price}</b>
        </Card.Text>
        <Card.Text>Rating:&nbsp;{data.Rating}</Card.Text>
        <Button variant="warning" onClick={() => addToCart(data.id)}>
          Add to Cart
        </Button>
      </Card.Body>
      <details class="details-example">
        <summary>More Details</summary>
        {/* <Card.Text>Published{props.data.Published}</Card.Text> */}
        <ul>
          <li>
            <Card.Text>{data.Pages}</Card.Text>
          </li>
          <li>
            <Card.Text>Published{data.Published}</Card.Text>
          </li>

          <li>
            <Card.Text>Edition Language:&nbsp;{data.Language}</Card.Text>
          </li>
          <li>
            <Card.Text>Other Editions:&nbsp;{data.Editions}</Card.Text>
          </li>
        </ul>
      </details>
    </Card>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Book);
//export default Book;
