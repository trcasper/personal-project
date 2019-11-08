import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProduct } from "../redux/prodReducer";
import Product from "../components/Product";
import "./Merch.css";

class Merch extends Component {
  componentDidMount() {
    this.props.getProduct();
  }

  render() {
    console.log(this.props.product);

    return (
      <div className="Merch">
        <div className="MerchTitle">Merch</div>
        <div className="ProductContainer">
          {this.props.product.map((element, index) => {
            return <Product product={element} key={`product: ${index}`} showButton={false} />;
            
          })}
          
        </div>
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
  getProduct
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Merch);
