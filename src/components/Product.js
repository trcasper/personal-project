import React, { Component } from "react";
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getProductById} from '../redux/prodReducer';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      showButton: this.props.location.pathname === '/admin' || this.props.location.pathname === '/cart' ? false : true,
      clickAble: this.props.location.pathname === '/admin' ? true : false
    };
  }

  clickAbleFunction = () => {
    console.log(this.state.clickAble)
    if(this.state.clickAble){
      // return () => {
        this.props.handleEdit(this.props.product)
      // }
    } else {
      console.log('Access Denied')
    }
  }

  render() {
    console.log(this.state)
      console.log(this.props)
    return (
      
        <div className="ProductBox" onClick={this.clickAbleFunction}> 
    
          <div className="ProductPic"><img src={this.props.product.product_url} /></div>
            
          <div className="DescriptionBox">
            <p>{this.props.product.product_name}</p>
            <p>{this.props.product.product_description}</p>
            <p>${this.props.product.product_price}</p>

            {/* <p>{this.props.product.user_id}</p> */}
              
          </div>
          {this.state.showButton ? <button onClick={() => this.props.getProductById(this.props.product.product_id)}className="AddButton">Add</button> : <div></div>}
          {/* //props.product.product_id */}

      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps, {getProductById})(withRouter(Product));
