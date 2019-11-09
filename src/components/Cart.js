import React, { Component } from "react";
import "./Cart.css";
import { connect } from "react-redux";
// import { updateUser } from "../redux/userReducer";
import {getProductById} from '../redux/prodReducer';
import Product from '../components/Product';
import {Link} from 'react-router-dom';


class Cart extends Component {
  componentDidMount() {
    this.props.getProductById();
  
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
  }




  render() {

    return (
      <div className="CartPage">
        <div className="CartTitle">Cart</div>
        <div className="CartBox">

        {this.props.product.map((element, index) => {
            return <Product product={element} key={`product: ${index}`}  />;
            
          })}
          <button className="CheckoutButton">
          <Link to="/checkout">Checkout</Link>
            </button>
        </div>
        <button className="LogoutButton">Logout</button>
      </div>
    );
    

  } 
}

const mapStateToProps = reduxState => {
    const { product } = reduxState.prodReducer;
    return {
      product
    };
  };
  
  const mapDispatchToProps = {
    getProductById
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart);
  
