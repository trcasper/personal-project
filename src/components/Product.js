import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
  }

  render() {
      console.log(this.props)
    return (
        <div className="ProductBox">
          <div className="ProductPic"><img src={this.props.product.product_url} /></div>
            
          <div className="DescriptionBox">
            <p>{this.props.product.product_name}</p>
            <p>{this.props.product.product_description}</p>
            <p>${this.props.product.product_price}</p>
            {/* <p>{this.props.product.user_id}</p> */}

          </div>

      </div>
    );
  }
}

export default Product;
