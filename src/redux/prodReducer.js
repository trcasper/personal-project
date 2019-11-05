import axios from "axios";

const initialState = {
  product: []
};
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const EDIT_PRODUCT = "Edit_PRODUCT";

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

export function addProduct(
  product_url,
  product_name,
  product_description,
  product_price
) {
  let data = axios
    .post("api/addProduct", {
      product_url: product_url,
      product_name: product_name,
      product_description: product_description,
      product_price: product_price
    })
    .then(res => {
      return res.data;
    });
  return {
    type: ADD_PRODUCT,
    payload: data
  };
}

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
      return { product: payload };
    case ADD_PRODUCT + "_FULFILLED":
      return { product: payload };
    case EDIT_PRODUCT + "_FULFILLED":
        return {product: payload};
    default:
      return state;
  }
}
