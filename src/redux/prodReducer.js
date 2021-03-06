import axios from "axios";

const initialState = {
  product: [],
  cart: []
};
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";
const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
const GET_CART = "GET_CART";
const CLEAR_CART = "CLEAR_CART";

// export function updateCart(
//   product_id) {
//   let data =
// }
// export function getCart() {
// let cart = axios.get('/api/cart')
// .then(res =>  res.data)
// return {
//   type: GET_CART, 
//   payload: cart
// }
// }
export function getProductById(id) {
  console.log(id)
  let cart = axios.put(`/api/cart/${id}`).then(res => {
    alert("Added to Cart")

    return res.data;
  });
  console.log(cart)
  return {
    type: GET_PRODUCT_BY_ID,
    payload: cart
  }
}

export function clearCart () {
  let cart = axios.put('/api/clearCart').then(res => {
    return res.data
  });
  console.log(cart)
  return {
    type: CLEAR_CART,
    payload: cart
  }
}


export function getProduct(
  product_url,
  product_name,
  product_description,
  product_price
) {
  let data = axios
    .get("api/getProducts", {
      product_url: product_url,
      product_name: product_name,
      product_description: product_description,
      product_price: product_price
    })
    .then(res => {
      console.log(res);
      return res.data;
    });
  return {
    type: GET_PRODUCT,
    payload: data
  };
}

// export function addProduct(
//   product_url,
//   product_name,
//   product_description,
//   product_price
// ) {
//   let data = axios
//     .post("api/addProduct", {
//       product_url: product_url,
//       product_name: product_name,
//       product_description: product_description,
//       product_price: product_price
//     })
//     .then(res => {
//       return res.data;
//     });
//   return {
//     type: ADD_PRODUCT,
//     payload: data
//   };
// }

export const editProduct = (
  product_id,
  new_product_url,
  new_product_name,
  new_product_description,
  new_product_price
) => {
  let data = axios
    .put(`api/editProduct/${product_id}`, {
      new_product_url,
      new_product_name,
      new_product_description,
      new_product_price
    })
    .then(res => res.data);
  return {
    type: EDIT_PRODUCT,
    payload: data
  };
};

export default function prodReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT + "_FULFILLED":
      return { ...state, product: payload };
    case ADD_PRODUCT + "_FULFILLED":
      return {...state, product: payload };
    case EDIT_PRODUCT + "_FULFILLED":
      return { ...state, product: payload };
    case GET_PRODUCT_BY_ID + "_FULFILLED":
      let {cart} = state
      return { ...state, cart: [...cart, payload] };
    // case UPDATE_CART + "_FULFILLED":
    //   return { cart: payload };
    case GET_CART + "_FULFILLED":
      console.log(payload, "payload")
      return {...state, cart: payload}
    default:
      return state;
    case CLEAR_CART + "_FULFILLED":
      return {...state, cart: payload}

    // case ADD_TO_CART + "_FULFILLED":
    //   return product.getElementById(id)
    //map over product (or filter) to find the product with the matching id
    //grab that product and add it to the cart
  }
}
