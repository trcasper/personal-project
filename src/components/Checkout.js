import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { getProductById } from "../redux/prodReducer";
import { Link } from "react-router-dom";
import "./Checkout.css";
import Product from '../components/Product'
import {withRouter} from 'react-router-dom';


import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

toast.configure();



function Checkout(props) {
  const [product] = React.useState(props.cart);
  const [cartTotal, setCartTotal] = React.useState(0)

  React.useEffect(() => {
    console.log(props.cart)
    let cartSum = props.cart.reduce((acc, element, index) => {
      console.log('e', element)
      return acc + element.product_price
    }, 0) 
    console.log(cartSum)
    setCartTotal(cartSum)
  }, [] )

  
  async function handleToken(token, addresses) {
    const response = await axios.post("https://0w32e.sse.codesandbox.io/", {
      token,
      product
    });
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
  console.log(props.cart)
  console.log(cartTotal)
  return (
    <div className="CheckoutPage">
      <div className="CheckoutTitle">Checkout</div>
      <div className="CheckoutBox">
        <div className="OrdersTitle">Your Orders</div>
        {/* <h1>{props.cart[0].product_name}</h1> */}
        {props.cart.map((element, index) => {
          return (<h1>{`Product - ${element.product_name}`}</h1>)
        }
        )}

        <h3>{`Total Cost - $ ${cartTotal}`}</h3>
      
        
      <StripeCheckout
        stripeKey="pk_test_TA9gu68Qei0D3nUkGGAcuWLl00EWVyCe6k"
        token={handleToken}
        amount={cartTotal * 100}
        name="Your Order"
        billingAddress
        shippingAddress
      />
    </div>
    </div>
  );
}

const mapStateToProps = reduxState => {
  const { product, cart } = reduxState.prodReducer;
  return {
    product, cart
  };
};
export default withRouter (connect(
  mapStateToProps,
  { getProductById }
)(Checkout));

