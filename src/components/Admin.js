import React, { Component } from "react";
import "./Admin.css";
import Axios from "axios";
import { connect } from "react-redux";
import { getProduct } from "../redux/prodReducer";
import Product from "../components/Product";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_url: "",
      product_name: "",
      product_description: "",
      product_price: "",
      username: "",
      password: ""
    };
  }

  handleAdd = () => {
    Axios.post("/api/addProduct", {
      product_url: this.state.product_url,
      product_name: this.state.product_name,
      product_description: this.state.product_description,
      product_price: this.state.product_price
    })
      .then(res => {
        alert("Product Added");
        this.setState({
          product_url: "",
          product_name: "",
          product_description: "",
          product_price: ""
        });
      })
      .catch(err => {
        alert("Problem adding product to server");
        console.log("Problem adding product to server Error:", err);
      });
    console.log(this.state);
  };

  handleCancel = () => {
    this.setState({
      product_url: "",
      product_name: "",
      product_description: "",
      product_price: ""
    });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRegister = () => {
    Axios.post("/auth/register", {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      this.setState({
        username: "",
        password: ""
      });
    });
  };

  componentDidMount() {
    this.props.getProduct();
  }

  render() {
    return (
      <div className="Admin">
        <div className="AdminTitle">Admin</div>
        <div className="AdminContainer">
          <div className="InputContainer">
            {/* <div className="ImagePreview"></div> */}
            {/* <p>Image Preview</p> */}
            <div className="InputBoxOne">
              <div className="InputBoxes">
                <div className="InputTitleProduct">Update Products</div>
                <input
                  placeholder="Image Url"
                  type="text"
                  value={this.state.product_url}
                  onChange={e => this.setState({ product_url: e.target.value })}
                />
                <input
                  placeholder="Product Name"
                  type="text"
                  value={this.state.product_name}
                  onChange={e =>
                    this.setState({ product_name: e.target.value })
                  }
                />

                <input
                  placeholder="Product Description"
                  type="text"
                  value={this.state.product_description}
                  onChange={e =>
                    this.setState({ product_description: e.target.value })
                  }
                />
                <input
                  placeholder="Product Price"
                  type="text"
                  value={this.state.product_price}
                  onChange={e =>
                    this.setState({ product_price: e.target.value })
                  }
                />
              </div>
              <div className="InputButtons">
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleCancel}>Cancel</button>
              </div>
            </div>
            <div className="InputBoxTwo">
              <div className="RegisterBoxes">
                <div className="InputTitleRegister">Register New Admin</div>
                <input
                  value={this.state.username}
                  name="username"
                  onChange={e => this.handleInput(e)}
                  placeholder="Enter username"
                />
                <input
                  password={this.state.password}
                  name="password"
                  onChange={e => this.handleInput(e)}
                  placeholder="Enter password"
                />
                <button onClick={this.handleRegister}>Register</button>
              </div>
            </div>
            <div className="MerchBox">
              <div className="InputMerchTitle">Merch </div>
              <div className="AdminMerch">
                {this.props.product.map((element, index) => {
                  return (
                    <Product product={element} key={`product: ${index}`} />
                  );
                })}
              </div>
            </div>
          </div>
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
)(Admin);
