import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
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
  ], //title, author,rating,price
  cart: [],
  currentItem: null,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //check if the item is in cart already
      let item = state.products.find((prod) => prod.id === action.payload.id);
      
      let inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      if(inCart){
          inCart.qty = inCart.qty+1;
      }

      return {
        ...state,
        cart: inCart !== undefined
          ?[...state.cart]
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
          ...state,
          cart:state.cart.filter((item)=>item.id !==action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
        let item1 = state.products.find((prod) => prod.id === action.payload.id);
      
        let inCart1 = state.cart.find((item) =>
          item.id === action.payload.id ? true : false
        );
        if(inCart1){
            inCart1.qty = action.payload.qty;
        }
      return {
          ...state,
          cart: [...state.cart]
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
          ...state,
          currentItem: action.payload,
      };
      case actionTypes.CART_CLEAR:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
export default shopReducer;
