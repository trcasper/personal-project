import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import {connect} from 'react-redux';
import {getProductById} from '../redux/prodReducer';
import {Link} from 'react-router-dom';
import './Checkout.css';


import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

toast.configure();

function Checkout(props) {
  const [product] = React.useState(props.product);

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://0w32e.sse.codesandbox.io/",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="CheckoutPage">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_TA9gu68Qei0D3nUkGGAcuWLl00EWVyCe6k"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
    </div>
  );
}

const mapStateToProps = reduxState => {
    const { product } = reduxState.prodReducer;
    return {
      product
    };
  };
  export default connect(mapStateToProps, {getProductById})(Checkout);

  //   const handleLogout = () => {
//       axios
//           .post('/auth/logout')
//           .then(res => {
//               props.history.push('/');
//           })
//           .catch(err => console.log(err));
//   }
//   console.log(props)

          /* <h3>{this.props.user.username}</h3> */
          /* <button onClick={handleLogout}>LogOut</button> */