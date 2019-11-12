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
      password: "",
      edit: false,
      product_id: "",
      products: this.props.product
    };
  }

  saveEdit = () => {
    console.log(this.state);
    Axios.put("/api/editProduct", {
      product_url: this.state.product_url,
      product_name: this.state.product_name,
      product_description: this.state.product_description,
      product_price: this.state.product_price,
      product_id: this.state.product_id
    }).then(res => {
      alert("Product Updated");
      this.setState({
        product_url: "",
        product_name: "",
        product_description: "",
        product_price: ""
      });
    });
  };

  handleEdit = product => {
    console.log(this.state);
    let {
      product_url,
      product_name,
      product_description,
      product_price,
      product_id
    } = product;
    this.setState({
      product_url: product_url,
      product_name: product_name,
      product_description: product_description,
      product_price: product_price,
      product_id: product_id,
      edit: true
    });
  };

  handleAdd = () => {
    Axios.post("/api/addProduct", {
      product_url: this.state.product_url,
      product_name: this.state.product_name,
      product_description: this.state.product_description,
      product_price: this.state.product_price
    })
      .then(res => {
        alert("Product Added: Please Refresh");
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

  handleDelete = id => {
    console.log(id);
    Axios.delete(`/api/cart/${id}`).then(res => {
      alert("Product Deleted: Please Refresh");
      console.log(res);
      this.setState({
        products: []
      });
    });
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
    alert("User Registered")
  };

  handleLogout = () => {
    Axios
      .post('/auth/logout')
      .then(res => {
        this.props.history.push("/")
        alert("Logged Out")
      })
      .catch(err => console.log(err))

  }

  componentDidMount() {
    this.props.getProduct();
  }

   componentDidUpdate(prevProps) {
     if (this.props.product !== this.state.products ) {
   this.render()
     }
   }

  render() {
    console.log(this.state.products);
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
                <button onClick={this.handleAdd}>Add New</button>
                <button onClick={this.handleCancel}>Clear</button>
                <button onClick={this.saveEdit}>Save</button>
                <button
                  onClick={() => this.handleDelete(this.state.product_id)}
                >
                  Delete Product
                </button>
              </div>
            </div>

            <div className="MerchBoxOne">
              <div className="InputMerchTitle">Merch </div>
              <div className="AdminMerch">
                {this.props.product.map((element, index) => {
                  return (
                    <Product
                      product={element}
                      key={`product: ${index}`}
                      handleEdit={this.handleEdit}
                    />
                  );
                })}
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
                  type="password"
                  value={this.state.password}
                  name="password"
                  onChange={e => this.handleInput(e)}
                  placeholder="Enter password"
                />
                <button onClick={this.handleRegister}>Register</button>
              </div>
            </div>
          </div>
          <button className="LogoutButton" onClick={this.handleLogout}>Logout</button>
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


