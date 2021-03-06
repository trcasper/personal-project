import React, { Component } from "react";
import "./Cart.css";
import { connect } from "react-redux";
// import { updateUser } from "../redux/userReducer";
// import {getCart} from '../redux/prodReducer';
import Product from "../components/Product";
import { clearCart } from "../redux/prodReducer";
import { Link } from "react-router-dom";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartTotal: 0
    };
  }

  componentDidMount() {
    let cartTotal = this.props.cart.reduce((acc, element, index) => {
      return acc + element.product_price;
    }, 0);
    this.setState({ cartTotal: cartTotal });
  }

  componentDidUpdate(prevProps) {
    if (this.props.cart !== this.state.cartTotal) {
      this.render();
    }
  }

  render() {
    console.log(this.props.cart);
    return (
      <div className="CartPage">
        <div className="CartTitle">Cart</div>
        <div className="CartContainer">
          <div className="CartBox">
            {this.props.cart ? (
              <div>
                {" "}
                {this.props.cart.map((element, index) => {
                  return (
                    <Product product={element} key={`product: ${index}`} />
                  );
                })}
              </div>
            ) : null}
            <div className="Total">Total: $ {this.state.cartTotal}</div>

            <button className="CheckoutButton">
              <Link to="/checkout">Proceed to Checkout</Link>
            </button>
            <button
              onClick={() => {
                this.props.clearCart(this.props.cart);
                this.setState({ cartTotal: 0 });
              }}
              className="ClearCart"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { product, cart } = reduxState.prodReducer;
  return {
    product,
    cart
  };
};

const mapDispatchToProps = {
  clearCart
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
