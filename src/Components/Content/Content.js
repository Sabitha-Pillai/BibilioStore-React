import Book from "./BookList/BookList";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import classes from "./Content.module.css";
import Carousel from "react-bootstrap/Carousel";
import {  Button } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img5 from "../../assets/img5.jpg";
import { connect } from "react-redux";
const books = [
  {
    id: 1,
    img: "https://cdn01.sapnaonline.com/product_media/9788173711466/sm_9788173711466_250920201344533.jpg",
    Name: "Wings Of Fire-An Autobiography of APJ Abdul Kalam",
    Author: "Dr. Kalam and Arun Tiwari",
    Genre: "Biography",
    Price: 350.0,
    Rating: "4.2/5",
    Published: "  January 11th 2011 by Universities Press ",
    Language: "English",
    Pages: "Paperback, 180 pages",
    Editions: "36",
  },
  {
    id: 2,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1623199501l/58298507.jpg",
    Name: "Until Leaves Fall in Paris",
    Author: "Sarah Sundin ",
    Genre: "WWII Historical Romance",
    Price: 1200.0,
    Rating: "4.5/5",
    Published: " February 1st 2022 by Revell ",
    Language: "English",
    Pages: "Paperback, 403 pages",
    Editions: "2",
  },
  {
    id: 3,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1623664615l/57926137.jpg",
    Name: "Black Cake",
    Author: "Charmaine Wilkerson",
    Genre: " Fiction, Historical Fiction",
    Price: 1380.0,
    Rating: "4.2/5",
    Published: "February 1st 2022 by Ballantine Books ",
    Language: "English",
    Pages: "Hardcover, 400 pages",
    Editions: "18",
  },
  {
    id: 4,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1407223058l/22874559.jpg",
    Name: "Half Girlfriend",
    Author: "Chetan Bhagat",
    Genre: "Romance, Contemporary",
    Price: 140.0,
    Rating: "3.1/5",
    Published: " September 30th 2014 by Rupa Publications India ",
    Language: "English",
    Pages: "Paperback, 260 pages",
    Editions: "15",
  },
  {
    id: 5,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1346145512l/13510813.jpg",
    Name: "Grandma's Bag of Stories",
    Author: "Sudha Murty",
    Genre: " Fiction",
    Price: 182.0,
    Rating: "4.3/5",
    Published: " 2012 by Puffin Books",
    Language: "English",
    Pages: "Paperback, 178 pages",
    Editions: "6",
  },
  {
    id: 6,
    img: "	https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1415460598l/6487744.jpg",
    Name: "The Guide",
    Author: " R.K. Narayan",
    Genre: " Philosophical fiction",
    Price: 199.0,
    Rating: "4.5/5",
    Published: "Published 2016 by Indian Thought Publications",
    Language: "English",
    Pages: "Paperback, 256 pages",
    Editions: "56",
  },
  {
    id: 7,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590282886l/9777.jpg",
    Name: "The God of Small Things",
    Author: "Arundhati Roy",
    Genre: " Fiction",
    Price: 277.0,
    Rating: "4/5",
    Published: " 1997 by Random House",
    Language: "English",
    Pages: "Hardcover, 321 pages",
    Editions: "19",
  },
  {
    id: 8,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1607655390l/55959460.jpg",
    Name: "Just Right Jillian ",
    Author: "Nicole D. Collier",
    Genre: " Fiction",
    Price: 1130.0,
    Rating: "4.5/5",
    Published: "February 1st 2022 by Versify",
    Language: "English",
    Pages: "Hardcover, 224 pages",
    Editions: "6",
  },
  {
    id: 9,
    img: "	https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1310136461l/264390.jpg",
    Name: "How I Taught My Grandmother to Read and Other Stories ",
    Author: "Sudha Murthy",
    Genre: " Fiction",
    Price: 142.0,
    Rating: "4.1/5",
    Published: "January 1st 2004 by Penguin Putnam",
    Language: "English",
    Pages: "Paperback, 188 pages",
    Editions: "8",
  },
  {
    id: 10,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388204087l/9779.jpg",
    Name: "The Cost of Living ",
    Author: "Arundhati Roy",
    Genre: " Nonfiction",
    Price: 1983.0,
    Rating: "4.1/5",
    Published: "October 12th 1999 by Modern Library",
    Language: "English",
    Pages: "Paperback, 144 pages",
    Editions: "14",
  },
];

const Content = ({products}) => {
  return (
    
    <div>
      <Carousel fade infiniteLoop useKeyboardArrows autoPlay>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            width="640px"
            height="360px"
          />
          <Carousel.Caption>
            <Button
              className={classes.but}
              size="large"
              variant="contained"
              color= "primary"
              Link="/"
            >
              Explore
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            width="640px"
            height="360px"
          />
          <Carousel.Caption>
            <Button
              className={classes.but}
              size="large"
              variant="contained"
              color="Secondary"
              // component={Link}
              //to="/cart"
            >
              Learn More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            alt="Last slide"
            width="640px"
            height="360px"
          />
          <Carousel.Caption>
            <Button
              className={classes.but}
              size="large"
              variant="contained"
              color="primary"
              // href="#pro"
            >
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className={classes.booksMargin}>
        <Row>
          {products.map((book) => {
            return (
              <Col sm={12} md={5} lg={4}>
                <Book data={book} key={book.id}></Book>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products
  };
};
//export default Content;
export default connect(mapStateToProps)(Content);
